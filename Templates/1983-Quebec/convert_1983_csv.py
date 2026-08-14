import csv
import json
import os

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_csv = os.path.join(script_dir, "LMN1983_NU_all_results.csv")
    output_js = os.path.join(script_dir, "vintage_1983_z6_data.js")

    scenario_map = {
        "EEM_J_DEFAULT": "DEFAULT",
        "EEM_J_ENVELOPE": "EEM1",
        "EEM_J_ENV_HVAC": "EEM2",
        "EEM_J_ENV_HVAC_DHW": "EEM3",
        "EEM_J_ENV_HVAC_DHW_EEM4": "EEM4"
    }

    scenario_order = ["DEFAULT", "EEM1", "EEM2", "EEM3", "EEM4"]

    nu_data = {}

    with open(input_csv, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row["arm"] != "CAN_MTL_1983":
                continue

            scenario_tag = row["scenario_tag"]
            if scenario_tag not in scenario_map:
                continue

            nu = row["nu"]
            scenario_key = scenario_map[scenario_tag]

            total = round(float(row["EUI_total_kWh_m2"]), 1)
            heating = round(float(row["EUI_heating_kWh_m2"]), 1)
            cooling = round(float(row["EUI_cooling_kWh_m2"]), 1)
            dhw = round(float(row["EUI_DHW_kWh_m2"]), 1)
            lighting = round(float(row["EUI_lights_kWh_m2"]), 1)
            equipment = round(float(row["EUI_equip_kWh_m2"]), 1)
            fans_pumps = round(float(row["EUI_fans_pumps_kWh_m2"]), 1)
            pv = round(float(row["PV_gen_kWh_m2"]), 1)

            scenario_obj = {
                "total": total,
                "breakdown": [
                    {"name": "Heating", "value": heating},
                    {"name": "Cooling", "value": cooling},
                    {"name": "DHW", "value": dhw},
                    {"name": "Lighting", "value": lighting},
                    {"name": "Equipment", "value": equipment},
                    {"name": "Fans & Pumps", "value": fans_pumps}
                ],
                "pv": pv
            }

            if nu not in nu_data:
                nu_data[nu] = {}
            nu_data[nu][scenario_key] = scenario_obj

    # Sort NUs alphabetically
    sorted_nu_data = {}
    for nu in sorted(nu_data.keys()):
        sorted_nu_data[nu] = {}
        for sc in scenario_order:
            if sc in nu_data[nu]:
                sorted_nu_data[nu][sc] = nu_data[nu][sc]

    full_struct = {"vintage-1983-z6": sorted_nu_data}

    # Format using json.dumps for proper escaping and 2-space indentation
    dumped_json = json.dumps(full_struct, indent=2)
    lines = dumped_json.splitlines()[1:-1]

    unindented_lines = []
    for line in lines:
        if line.startswith("  "):
            unindented_lines.append(line[2:])
        else:
            unindented_lines.append(line)

    unindented_lines[-1] = unindented_lines[-1] + ","
    js_content = "\n".join(unindented_lines) + "\n"

    with open(output_js, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Successfully generated {output_js}")

if __name__ == "__main__":
    main()
