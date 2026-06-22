"""
Generate EV/V2G and LPV data for ALL neighbourhood units (NUs), not just RC.

EV values are produced with the authoritative formula in calculate_ev_scenarios.py.
The only per-NU inputs are:
  - n_households  : number of residential dwelling units
  - floor_area    : total residential gross floor area (m2)
  - e_balance_base: baseline net energy balance (kWh/day) -- 0 for every NU, same as RC

Per-building households / GFA were BACK-SOLVED from the existing 9 RC rows in
Templates/NUS_EV.csv and reproduce them exactly:

    building           households   gfa_total (m2)
    Detached (2-St)         1            220
    Attached (2-St)         1            180
    Mid-Rise (4-St)        32           3136   (= 784 * 4)
    High-Rise (10-St)     160          23512
    High-Rise (15-St)     240          35268   (scaled 16 HH/storey, 2351 m2/storey)
    High-Rise (20-St)     320          47024

Residential composition per NU is taken from Templates/new/Full_NUs_Archetypes.csv.
Non-residential buildings (offices, retail, schools, hotels, hospitals, warehouses,
data centers, colleges, labs, "Tall/SuperTall" commercial towers) contribute 0 EV load,
so purely commercial/industrial NUs come out as 0 demand / "Load Balanced - Net Zero".

This script REWRITES (in place, after backing up):
  - Templates/NUS_EV.csv
  - Templates/NUs_LPV.csv
  - js/data.js  (the EV_V2G_DATA and LPV_DATA blocks only)
"""

import os
import shutil
from calculate_ev_scenarios import calculate_ev_scenarios

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))

# --- per-building (households, gfa_total_m2) ---------------------------------
DET   = (1, 220)
ATT   = (1, 180)
ATT190 = (1, 190)   # MU-HS attached spec'd at 190 sqm/unit
MID   = (32, 3136)
HR10  = (160, 23512)
HR15  = (240, 35268)
HR20  = (320, 47024)

def compose(*parts):
    """parts: list of (count, (hh, gfa)) -> (total_hh, total_gfa)"""
    hh = sum(c * b[0] for c, b in parts)
    gfa = sum(c * b[1] for c, b in parts)
    return hh, gfa

# residential composition per NU (only residential buildings listed)
NU_RES = {
    # ---- Residential Clusters (RC) ----
    "RC-R":   compose((24, DET)),
    "RC-D":   compose((48, DET)),
    "RC-ML":  compose((24, DET), (28, ATT)),
    "RC-T":   compose((56, ATT)),
    "RC-MR1": compose((4, MID), (28, ATT)),
    "RC-MR2": compose((8, MID)),
    "RC-MR3": compose((12, MID)),
    "RC-HR1": compose((2, HR10), (4, MID)),
    "RC-HR2": compose((4, HR10)),
    # ---- Residential Service Clusters (RS) ----
    "RS-S":   compose((12, DET), (28, ATT)),
    "RS-I1":  compose((14, ATT), (3, MID)),
    "RS-I2":  compose((5, MID)),
    "RS-I3":  compose((28, ATT)),
    "RS-I4":  compose((5, MID)),
    # ---- Mixed-Use Districts (MU) ----
    "MU-C1":  compose((4, HR15)),
    "MU-C2":  compose((4, HR20)),
    "MU-U1":  compose((4, HR20)),
    "MU-L":   compose((4, MID)),
    "MU-S1":  compose((5, MID)),
    "MU-S2":  compose((5, MID)),
    "MU-W":   compose((2, MID)),
    "MU-W2":  compose(),                       # no residential
    "MU-HS":  compose((3, MID), (14, ATT190)), # "14x Attached (7 units/row)" read as 14 units
    "MU-HC":  compose((2, HR10), (2, MID)),
    # ---- Commercial Centers (CC) ----
    "CC-S1":  compose(),
    "CC-S2":  compose(),
    "CC-B":   compose(),
    "CC-E1":  compose((1, MID)),
    "CC-E2":  compose((1, MID)),
    "CC-E3":  compose((3, MID)),
    "CC-FD1": compose(),   # SuperTall/Tall treated as commercial
    "CC-FD2": compose(),
    "CC-FD3": compose(),
    # ---- Industrial Clusters (IC) ----
    "IC-DE":  compose(),
    "IC-DC":  compose(),
}

# Authoritative total floor area per NU (m2), from the simulation morphology dataset:
#   C:/Users/o_iseri/Desktop/idf_reader/outputs/outputs_NUs_key_drivers/neighbourhood_morphology.csv
# (column total_floor_area_m2). Site/land area is uniform 21,717 m2 (~5 acres) for all NUs;
# total floor area varies per neighbourhood. RC-R uses the base row (not RC-R_Garage = 8841).
MORPH_FLOOR = {
    "RC-R": 7949, "RC-D": 15899, "RC-ML": 15509, "RC-T": 15120, "RC-MR1": 16964,
    "RC-MR2": 18808, "RC-MR3": 28212, "RC-HR1": 14106, "RC-HR2": 9404,
    "RS-S": 14491, "RS-I1": 16835, "RS-I2": 29489, "RS-I3": 11850, "RS-I4": 22406,
    "MU-C1": 44200, "MU-C2": 72337, "MU-U1": 58948, "MU-L": 15430, "MU-S1": 28109,
    "MU-S2": 18184, "MU-W": 11699, "MU-W2": 15223, "MU-HS": 17983, "MU-HC": 24081,
    "CC-S1": 13177, "CC-S2": 6094, "CC-B": 68519, "CC-E1": 76341, "CC-E2": 46648,
    "CC-E3": 50527, "CC-FD1": 424254, "CC-FD2": 199413, "CC-FD3": 298513,
    "IC-DE": 11555, "IC-DC": 9346,
}

ORDER = list(NU_RES.keys())

def status_for(load):
    return "Grid Stressed - Deficit" if round(load) > 0 else "Load Balanced - Net Zero"

def per_m2(load, floor):
    return round(load / floor, 2) if floor else 0

def build_metrics():
    out = {}
    for nu in ORDER:
        hh, gfa = NU_RES[nu]
        # total floor area from authoritative morphology dataset (varies per NU);
        # fall back to back-solved residential GFA only if a NU is missing there.
        floor = MORPH_FLOOR.get(nu, gfa)
        r = calculate_ev_scenarios(n_households=hh, e_balance_base=0.0)
        ev_total = r["Shared"]["E_EV_total_kWh"]
        loss = r["Shared"]["E_storage_loss_kWh"]
        ev1_load = r["EV1"]["E_total_EV1_kWh"]
        v2g = r["EV2"]["E_V2G_discharge_kWh"]
        ev2_load = r["EV2"]["E_total_EV2_kWh"]
        out[nu] = {
            "hh": hh, "floor": floor,
            "demand": round(ev_total), "loss": round(loss),
            "ev1_load": round(ev1_load), "v2g": round(v2g), "ev2_load": round(ev2_load),
            "ev1_pm2": per_m2(ev1_load, floor), "ev2_pm2": per_m2(ev2_load, floor),
            "ev1_status": status_for(ev1_load), "ev2_status": status_for(ev2_load),
        }
    return out

# ----------------------------- JS block --------------------------------------
def js_ev_block(m):
    lines = ["// EV & V2G data per neighbourhood, derived from Templates/NUS_EV.csv",
             "const EV_V2G_DATA = {"]
    for i, nu in enumerate(ORDER):
        d = m[nu]
        comma = "," if i < len(ORDER) - 1 else ""
        lines.append(f'  "{nu}": {{')
        lines.append('    "EV1": {')
        lines.append('      evPenetrationRate: "1.5 EVs / household",')
        lines.append('      dailyEnergyDemand: "15 kWh / EV",')
        lines.append('      chargingEfficiency: "90%",')
        lines.append(f'      numHouseholds: {d["hh"]},')
        lines.append(f'      totalFloorArea: {d["floor"]},')
        lines.append(f'      totalEvEnergyDemand: {d["demand"]},')
        lines.append(f'      storageLoss: {d["loss"]},')
        lines.append('      v2gPowerAvailable: null,')
        lines.append(f'      netEnergyBalance_kWh: {d["ev1_load"]},')
        lines.append(f'      netEnergyBalance_kWh_m2: {d["ev1_pm2"]},')
        lines.append(f'      systemStatusIndicator: "{d["ev1_status"]}"')
        lines.append('    },')
        lines.append('    "EV2": {')
        lines.append('      evPenetrationRate: "1.5 EVs / household",')
        lines.append('      dailyEnergyDemand: "15 kWh / EV",')
        lines.append('      chargingEfficiency: "90%",')
        lines.append('      v2gParticipationRate: "50%",')
        lines.append('      batteryEfficiency: "90%",')
        lines.append('      dischargeCapacity: "10 kW / day",')
        lines.append(f'      numHouseholds: {d["hh"]},')
        lines.append(f'      totalFloorArea: {d["floor"]},')
        lines.append(f'      totalEvEnergyDemand: {d["demand"]},')
        lines.append(f'      storageLoss: {d["loss"]},')
        lines.append(f'      v2gPowerAvailable: {d["v2g"]},')
        lines.append(f'      netEnergyBalance_kWh: {d["ev2_load"]},')
        lines.append(f'      netEnergyBalance_kWh_m2: {d["ev2_pm2"]},')
        lines.append(f'      systemStatusIndicator: "{d["ev2_status"]}"')
        lines.append('    }')
        lines.append(f'  }}{comma}')
    lines.append("};")
    return "\n".join(lines)

def js_lpv_block():
    cols = ", ".join(f'"{nu}"' for nu in ORDER)
    def row(cat, label, val):
        vals = ", ".join(f'"{nu}": "{val}"' for nu in ORDER)
        return ("    {\n"
                f'      category: "{cat}",\n'
                f'      label: "{label}",\n'
                f'      values: {{ {vals} }}\n'
                "    }")
    rows = ",\n".join([
        row("Config.", "Land Allocation", "20% (4046 m²)"),
        row("Config.", "Usable Area", "10% (2023 m²)"),
        row("Config.", "Module Capacity", "400W"),
        row("Config.", "Installed Capacity (kWp)", "475 kWp"),
        row("Results", "Energy Generation", "608 MWh/year"),
    ])
    return ("// LPV (Land-PV) data derived from Templates/NUs_LPV.csv\n"
            "const LPV_DATA = {\n"
            f"  columns: [{cols}],\n"
            "  rows: [\n"
            f"{rows}\n"
            "  ]\n"
            "};")

# ----------------------------- CSV output ------------------------------------
def write_ev_csv(m):
    path = os.path.join(ROOT, "Templates", "NUS_EV.csv")
    shutil.copy(path, path + ".bak")
    nb = []  # neighbourhood header (each NU twice)
    sc = []  # scenario row
    for nu in ORDER:
        nb += [nu, nu]
        sc += ["EV1 (Charging-Only)", "EV2 (V2G-Enabled)"]

    def pair(nu, ev1, ev2):
        return [ev1, ev2]

    rows = []
    rows.append(["", "Neighbourhood"] + nb)
    rows.append(["Config.", "EV Integration Scenario"] + sc)
    def cfg(label, ev1v, ev2v):
        r = ["Config.", label]
        for nu in ORDER:
            r += [ev1v, ev2v]
        return r
    rows.append(cfg("EV Penetration Rate", "1.5 EVs / household", "-"))
    rows.append(cfg("Daily Energy Demand (200 km Range)", "15 kWh / EV", "-"))
    rows.append(cfg("Charging Efficiency", "90%", "-"))
    rows.append(cfg("V2G Participation Rate", "-", "50%"))
    rows.append(cfg("Battery Efficiency", "-", "90%"))
    rows.append(cfg("Discharge Capacity", "-", "10 kW / day"))

    def param(label, key):
        r = ["Parameters", label]
        for nu in ORDER:
            v = m[nu][key]
            r += [v, v]
        return r
    rows.append(param(" # HHs", "hh"))
    rows.append(param("Total floor area", "floor"))

    def res_same(label, key):
        r = ["Results", label]
        for nu in ORDER:
            v = m[nu][key]
            r += [v, v]
        return r
    rows.append(res_same("Total EV Energy Demand (kWh/day)", "demand"))
    rows.append(res_same("Storage Loss (kWh/day)", "loss"))

    r = ["Results", "V2G Power Available: V2G Discharge Contribution (kWh/day)"]
    for nu in ORDER:
        r += ["-", m[nu]["v2g"]]
    rows.append(r)

    r = ["Results", "Net Energy Balance (kWh/day)"]
    for nu in ORDER:
        r += [m[nu]["ev1_load"], m[nu]["ev2_load"]]
    rows.append(r)

    r = ["Results", "Net Energy Balance (kWh/m2-day)"]
    for nu in ORDER:
        r += [m[nu]["ev1_pm2"], m[nu]["ev2_pm2"]]
    rows.append(r)

    r = ["Results", "System Status Indicator"]
    for nu in ORDER:
        r += [m[nu]["ev1_status"], m[nu]["ev2_status"]]
    rows.append(r)

    import csv
    with open(path, "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerows(rows)
    return path

def write_lpv_csv():
    path = os.path.join(ROOT, "Templates", "NUs_LPV.csv")
    shutil.copy(path, path + ".bak")
    rows = []
    rows.append(["", "Neighbourhood"] + ORDER)
    def row(cat, label, val):
        return [cat, label] + [val for _ in ORDER]
    rows.append(row("Config.", "Land Allocation", "20%"))
    rows.append(row("Config.", "Usable Area", "10%"))
    rows.append(row("Config.", "Module Capacity", "400W"))
    rows.append(row("Config.", "Installed Capacity (Kilowatt-peak)", "475 kWp"))
    rows.append(row("Results", "Energy Generation", "608 MWh/year"))
    import csv
    with open(path, "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerows(rows)
    return path

def patch_data_js(ev_block, lpv_block):
    path = os.path.join(ROOT, "js", "data.js")
    shutil.copy(path, path + ".bak")
    with open(path, "r", encoding="utf-8") as f:
        src = f.read()

    ev_marker = "// EV & V2G data per neighbourhood, derived from Templates/NUS_EV.csv"
    lpv_marker = "// LPV (Land-PV) data derived from Templates/NUs_LPV.csv"
    end_marker = "// Export for use in app.js"

    i_ev = src.index(ev_marker)
    i_lpv = src.index(lpv_marker)
    i_end = src.index(end_marker)

    before = src[:i_ev]
    between = src[i_lpv:i_lpv]  # nothing; we rebuild
    after = src[i_end:]

    new = before + ev_block + "\n\n" + lpv_block + "\n\n" + after
    with open(path, "w", encoding="utf-8") as f:
        f.write(new)
    return path

if __name__ == "__main__":
    m = build_metrics()

    print(f"{'NU':8} {'HH':>5} {'Floor':>8} {'Demand':>8} {'EV1 bal':>8} {'V2G':>6} {'EV2 bal':>8}  Status")
    print("-" * 78)
    for nu in ORDER:
        d = m[nu]
        print(f"{nu:8} {d['hh']:>5} {d['floor']:>8} {d['demand']:>8} {d['ev1_load']:>8} "
              f"{d['v2g']:>6} {d['ev2_load']:>8}  {d['ev1_status']}")

    ev_block = js_ev_block(m)
    lpv_block = js_lpv_block()

    p1 = write_ev_csv(m)
    p2 = write_lpv_csv()
    p3 = patch_data_js(ev_block, lpv_block)
    print("\nWrote:")
    for p in (p1, p2, p3):
        print("  " + p)
    print(f"\nTotal NUs: {len(ORDER)}  (RC: {sum(1 for n in ORDER if n.startswith('RC'))}, "
          f"non-RC: {sum(1 for n in ORDER if not n.startswith('RC'))})")
