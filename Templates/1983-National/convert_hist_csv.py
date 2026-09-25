"""Zones 4, 5, 7A, 7B historical (1983) tiers into js/data.js.

National counterpart of Templates/1983-Quebec/ (convert_1983_csv.py,
add_vintage_to_neighbourhoods.py, insert_data.py), one arm per zone.
Source: idf_reader/docs_DONE/docs_LMN_web/HistoricalCodebaseSims/results/
HIST_NU_CAN_<ZONE>_1983_20260924_master.csv (560 rows each, 35 NUs x 16 cells).
Only the five ladder cells are carried, same map as Zone 6.
"""
import csv
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.abspath(os.path.join(HERE, "..", "..", "js", "data.js"))
RESULTS = r"C:\Users\o_iseri\Desktop\idf_reader\docs_DONE\docs_LMN_web\HistoricalCodebaseSims\results"

ARMS = [
    ("CAN_Z4_1983", "vintage-1983-z4", "NECB Zone 4 (Vancouver)"),
    ("CAN_Z5_1983", "vintage-1983-z5", "NECB Zone 5 (Toronto)"),
    ("CAN_Z7A_1983", "vintage-1983-z7a", "NECB Zone 7A (Winnipeg)"),
    ("CAN_Z7B_1983", "vintage-1983-z7b", "NECB Zone 7B (Fort McMurray)"),
]
SCENARIO_MAP = {
    "EEM_J_DEFAULT": "DEFAULT",
    "EEM_J_ENVELOPE": "EEM1",
    "EEM_J_ENV_HVAC": "EEM2",
    "EEM_J_ENV_HVAC_DHW": "EEM3",
    "EEM_J_ENV_HVAC_DHW_EEM4": "EEM4",
}
ORDER = ["DEFAULT", "EEM1", "EEM2", "EEM3", "EEM4"]


def r1(v):
    return round(float(v), 1)


def convert(arm, key):
    path = os.path.join(RESULTS, f"HIST_NU_{arm}_20260924_master.csv")
    nu_data = {}
    with open(path, "r", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            if row["standard"] != arm:
                raise RuntimeError(f"{path}: unexpected arm {row['standard']}")
            sc = SCENARIO_MAP.get(row["scenario_tag"])
            if sc is None:
                continue
            nu = row["building_id"]
            if sc in nu_data.setdefault(nu, {}):
                raise RuntimeError(f"{path}: duplicate {nu} {sc}")
            nu_data[nu][sc] = {
                "total": r1(row["EUI_total_kWh_m2"]),
                "breakdown": [
                    {"name": "Heating", "value": r1(row["EUI_heating_kWh_m2"])},
                    {"name": "Cooling", "value": r1(row["EUI_cooling_kWh_m2"])},
                    {"name": "DHW", "value": r1(row["EUI_DHW_kWh_m2"])},
                    {"name": "Lighting", "value": r1(row["EUI_lights_kWh_m2"])},
                    {"name": "Equipment", "value": r1(row["EUI_equip_kWh_m2"])},
                    {"name": "Fans & Pumps", "value": r1(row["EUI_fans_pumps_kWh_m2"])},
                ],
                "pv": r1(row["PV_gen_kWh_m2"]),
            }
    for nu, scs in nu_data.items():
        if sorted(scs) != sorted(ORDER):
            raise RuntimeError(f"{path}: {nu} has {sorted(scs)}")
    ordered = {nu: {sc: nu_data[nu][sc] for sc in ORDER} for nu in sorted(nu_data)}
    return os.path.basename(path), ordered


def main():
    with open(DATA_JS, "r", encoding="utf-8", newline="") as f:
        text = f.read()
    nl = "\r\n" if "\r\n" in text else "\n"
    for _, key, _ in ARMS:
        if f'"{key}"' in text:
            raise RuntimeError(f"{key} already in data.js, aborting")

    # Zone 6 NU set is the reference: every arm must carry exactly those 35.
    z6_start = text.index('ENVELOPE_ENERGY_DATA["vintage-1983-z6"] = {')
    z6_end = text.index(nl + "};" + nl, z6_start) + len(nl + "};" + nl)
    z6_nus = set(re.findall(r'^\s*"([A-Z]+-[A-Za-z0-9]+)": \{', text[z6_start:z6_end], re.M))
    if len(z6_nus) != 35:
        raise RuntimeError(f"Zone 6 block has {len(z6_nus)} NUs, expected 35")

    blocks = []
    for arm, key, zone in ARMS:
        src, data = convert(arm, key)
        if set(data) != z6_nus:
            raise RuntimeError(f"{arm}: NU set differs from Zone 6: {set(data) ^ z6_nus}")
        body = json.dumps(data, indent=2)
        blocks.append(
            f"{nl}// ========================================================================{nl}"
            f"// 1983 Vintage — {arm} ({zone}), hidden on the site for now{nl}"
            f"// Source: idf_reader/docs_DONE/docs_LMN_web/HistoricalCodebaseSims/results/{src}{nl}"
            f"// ========================================================================{nl}"
            f'ENVELOPE_ENERGY_DATA["{key}"] = {body.replace(chr(10), nl)};{nl}'
        )
        print(f"{key}: {len(data)} NUs x {len(ORDER)} scenarios from {src}")
    text = text[:z6_end] + "".join(blocks) + text[z6_end:]

    # Add the four keys to every NEIGHBOURHOODS envelope array.
    head_end = text.index("const ENVELOPE_ENERGY_DATA")
    pattern = re.compile(r'([ \t]*)"vintage-1983-z6"(\r?\n)(\s*\])')
    extra = [k for _, k, _ in ARMS]

    def repl(m):
        ind, eol = m.group(1), m.group(2)
        lines = [f'{ind}"vintage-1983-z6"'] + [f'{ind}"{k}"' for k in extra]
        return f",{eol}".join(lines) + eol + m.group(3)

    head, count = pattern.subn(repl, text[:head_end])
    if count != 35:
        raise RuntimeError(f"found {count} envelope arrays, expected 35")
    text = head + text[head_end:]

    with open(DATA_JS, "w", encoding="utf-8", newline="") as f:
        f.write(text)
    print(f"data.js updated, {count} envelope arrays extended")


if __name__ == "__main__":
    main()
