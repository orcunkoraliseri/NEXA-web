import csv
import json
import os
import re

MASTER_CSV = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\2026-07-21\LMN_national_NU_master.csv"
PV_CSV = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\2026-07-21\LMN_national_PV_generation.csv"
LEGACY_MASTER_CSV = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\2026-07-19\LMN_full_NU_master_healed.csv"
ARCHETYPES_CSV = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\2026-07-19\Full_NUs_Archetypes.csv"

OUT_JS_DATA = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\scripts\out_data.js"
TEMPLATES_DIR = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates"
ARCHIVE_DIR = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\archive"

CONCEPT_MAP = {
    "1. Financial District": 1,
    "2. Downtown Residential": 2,
    "3. Urban Transition-Zone": 3,
    "4. Suburban High-Density": 4,
    "4. Suburban Transit-Zone": 4,
    "5. Streetcar Suburb": 5,
    "6. Midrise Suburb": 6,
    "7. Peripheral Community": 7,
    "8. Rural Cluster": 9,
    "9. Commercial Park": 10,
    "10. Data Center Node": 11,
}

SCENARIO_MAPPING = {
    "EEM_J_DEFAULT": "DEFAULT",
    "EEM_J_ENVELOPE": "EEM1",
    "EEM_J_ENV_HVAC": "EEM2",
    "EEM_J_ENV_HVAC_DHW": "EEM3",
    "EEM_J_ENV_HVAC_DHW_EEM4": "EEM4"
}

# Standard mapping: Map both CAN_MTL and CAN_Z6 to necb-z6
STANDARD_MAP = {
    "CAN_MTL": "necb-z6",
    "CAN_Z6": "necb-z6",
    "CAN_Z4": "necb-z4",
    "CAN_Z5": "necb-z5",
    "CAN_Z7A": "necb-z7a",
    "CAN_Z7B": "necb-z7b",
    "CAN_Z8": "necb-z8",
    "US_ASHRAE": "ashrae",
    "ASHRAE": "ashrae"
}

HP_STANDARD_MAP = {
    "necb-z6": "high-performance-z6",
    "necb-z4": "high-performance-z4",
    "necb-z5": "high-performance-z5",
    "necb-z7a": "high-performance-z7a",
    "necb-z7b": "high-performance-z7b",
    "necb-z8": "high-performance-z8",
    "ashrae": "high-performance-ashrae"
}

ALL_ENVELOPES = [
    "necb-z6",
    "ashrae",
    "necb-z4",
    "necb-z5",
    "necb-z7a",
    "necb-z7b",
    "necb-z8",
    "high-performance-z6",
    "high-performance-ashrae",
    "high-performance-z4",
    "high-performance-z5",
    "high-performance-z7a",
    "high-performance-z7b",
    "high-performance-z8"
]

def load_archetypes():
    archs = {}
    with open(ARCHETYPES_CSV, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if not row.get("Archetype") or row["Archetype"].strip() == "":
                continue
            archs[row["Archetype"].strip()] = row
    return archs

def get_building_image_path(name):
    n = name.lower().replace("_", " ").replace("-", " ").strip()
    
    if "attached house" in n or "attached houses" in n:
        return "Content/Images_Buildings/attached house.png"
    if "laboratory" in n:
        return "Content/Images_Buildings/Laboratory.png"
    if "college" in n or "lab " in n:
        return "Content/Images_Buildings/college.png"
    if "large" in n and ("datacenter" in n or "data center" in n):
        return "Content/Images_Buildings/large datacenter.png"
    if "small" in n and ("datacenter" in n or "data center" in n):
        return "Content/Images_Buildings/small data center.png"
    if "datacenter" in n or "data center" in n:
        return "Content/Images_Buildings/large datacenter.png"
    if "fsr" in n or "full service" in n or "sitdown" in n or "sit down" in n:
        return "Content/Images_Buildings/full service restaurant.png"
    if "high rise" in n or "highrise" in n:
        return "Content/Images_Buildings/highrise apartment.png"
    if "hospital" in n:
        return "Content/Images_Buildings/hospital.png"
    if "large hotel" in n or "hotel large" in n or "hotellarge" in n:
        return "Content/Images_Buildings/large hotel.png"
    if "large office" in n or "office large" in n or "officelarge" in n:
        return "Content/Images_Buildings/large office.png"
    if "medium office" in n or "office medium" in n or "officemedium" in n:
        return "Content/Images_Buildings/medium office.png"
    if "mid rise" in n or "midrise" in n:
        return "Content/Images_Buildings/midrise apartment.png"
    if "outpatient" in n:
        return "Content/Images_Buildings/outpatient healthcare.png"
    if "primary school" in n:
        return "Content/Images_Buildings/primary school.png"
    if "qsr" in n or "quick service" in n or "fastfood" in n or "fast food" in n:
        return "Content/Images_Buildings/quick service restaurant.png"
    if "strip mall" in n or "stripmall" in n:
        return "Content/Images_Buildings/retail strip mall.png"
    if "secondary school" in n:
        return "Content/Images_Buildings/secondary school.png"
    if "small hotel" in n or "hotel small" in n or "hotelsmall" in n:
        return "Content/Images_Buildings/small hotel.png"
    if "small office" in n or "office small" in n:
        return "Content/Images_Buildings/small office.png"
    if "small retail" in n or "retail small" in n or "small_retail" in n:
        return "Content/Images_Buildings/small retail.png"
    if "standalone retail" in n or "retail standalone" in n or "retailstandalone" in n:
        return "Content/Images_Buildings/standalone retail.png"
    if "supertall" in n or "super tall" in n:
        return "Content/Images_Buildings/super tall building.png"
    if "supermarket" in n:
        return "Content/Images_Buildings/supermarket.png"
    if "tall building" in n or "tallbuilding" in n:
        return "Content/Images_Buildings/tall building.png"
    if "detached house" in n or "detached houses" in n or "two story" in n or "two storey" in n:
        return "Content/Images_Buildings/two-story house.png"
    if "warehouse" in n:
        return "Content/Images_Buildings/warehouse.png"
        
    clean_name = n.replace(" ", "_")
    return f"Content/Images_Buildings/{clean_name}.png"

def process():
    archs = load_archetypes()
    
    energy_data = {}
    for env in ALL_ENVELOPES:
        energy_data[env] = {}
        
    pv_data = {}
    
    # Store rows for export CSV files
    zone_rows = {
        "CAN_Z4": [],
        "CAN_Z5": [],
        "CAN_Z6": [],
        "CAN_Z7A": [],
        "CAN_Z7B": [],
        "CAN_Z8": [],
        "ASHRAE": []
    }
    
    def read_master_file(filepath):
        with open(filepath, "r", encoding="utf-8-sig") as f:
            reader = csv.DictReader(f)
            for row in reader:
                b_id = row["building_id"].strip()
                if b_id == "RC-R_Garage":
                    continue
                    
                standard_raw = row["standard"].strip()
                if standard_raw not in STANDARD_MAP:
                    continue
                env_key = STANDARD_MAP[standard_raw]
                
                tag = row["scenario_tag"].strip()
                if tag not in SCENARIO_MAPPING:
                    continue
                eem_level = SCENARIO_MAPPING[tag]
                
                if b_id not in energy_data[env_key]:
                    energy_data[env_key][b_id] = {}
                    
                total = float(row["EUI_total_kWh_m2"])
                htg = float(row["EUI_heating_kWh_m2"])
                clg = float(row["EUI_cooling_kWh_m2"])
                dhw = float(row["EUI_DHW_kWh_m2"])
                ltg = float(row["EUI_lights_kWh_m2"])
                eqp = float(row["EUI_equip_kWh_m2"])
                fan = float(row["EUI_fans_pumps_kWh_m2"])
                pv = float(row["PV_gen_kWh_m2"])
                
                energy_data[env_key][b_id][eem_level] = {
                    "total": round(total, 1),
                    "breakdown": [
                        {"name": "Heating", "value": round(htg, 1)},
                        {"name": "Cooling", "value": round(clg, 1)},
                        {"name": "DHW", "value": round(dhw, 1)},
                        {"name": "Lighting", "value": round(ltg, 1)},
                        {"name": "Equipment", "value": round(eqp, 1)},
                        {"name": "Fans & Pumps", "value": round(fan, 1)}
                    ],
                    "pv": round(pv, 1)
                }
                
                # Append to zone_rows for exported CSVs
                if standard_raw != "CAN_MTL": # CAN_Z6 covers Montreal Zone 6
                    arch_type = "Mixed" if b_id not in archs else archs[b_id].get("Archetype", "Mixed")
                    csv_row = [
                        b_id, arch_type, eem_level,
                        round(total, 1), round(htg, 1), round(clg, 1), round(dhw, 1),
                        round(ltg, 1), round(eqp, 1), round(fan, 1), round(pv, 1)
                    ]
                    if standard_raw in zone_rows:
                        zone_rows[standard_raw].append(csv_row)
                    elif standard_raw in ("US_ASHRAE", "ASHRAE"):
                        zone_rows["ASHRAE"].append(csv_row)

    # 1. Read main 2026-07-21 national master
    read_master_file(MASTER_CSV)
    
    # 2. Read legacy master for US_ASHRAE fallback data if available
    if os.path.exists(LEGACY_MASTER_CSV):
        read_master_file(LEGACY_MASTER_CSV)

    # 3. Read PV CSV for PV_GENERATION_DATA
    if os.path.exists(PV_CSV):
        with open(PV_CSV, "r", encoding="utf-8-sig") as f:
            reader = csv.DictReader(f)
            for row in reader:
                nu = row.get("NU", "").strip() or row.get("building_type", "").strip()
                if not nu:
                    continue
                pv_gen = float(row.get("EEM1", row.get("Baseline", 0)))
                pv_data[nu] = {
                    "surface": "Roof",
                    "efficiency": "18.68%",
                    "gcr": "0.4",
                    "mounting": "Fixed Open Rack",
                    "generation": round(pv_gen, 1),
                    "rop": None
                }

    # 3.5 Ensure DEFAULT level fallback
    for env_key in energy_data:
        for b_id in energy_data[env_key]:
            levels = energy_data[env_key][b_id]
            if "DEFAULT" not in levels:
                if "EEM1" in levels:
                    levels["DEFAULT"] = levels["EEM1"]
                elif levels:
                    first_key = list(levels.keys())[0]
                    levels["DEFAULT"] = levels[first_key]

    # 4. Generate High-Performance Envelope data
    for std_key, hp_key in HP_STANDARD_MAP.items():
        if std_key in energy_data:
            for b_id, levels in energy_data[std_key].items():
                if "EEM1" in levels:
                    energy_data[hp_key][b_id] = {
                        "DEFAULT": levels["EEM1"],
                        "EEM1": levels.get("EEM1", levels["EEM1"]),
                        "EEM2": levels.get("EEM2", levels["EEM1"]),
                        "EEM3": levels.get("EEM3", levels["EEM1"]),
                        "EEM4": levels.get("EEM4", levels["EEM1"])
                    }
                    if "IAL" in levels:
                        energy_data[hp_key][b_id]["IAL"] = levels["IAL"]

    # Alias necb-2017 & high-performance-necb to necb-z6 & high-performance-z6 for legacy compatibility
    energy_data["necb-2017"] = energy_data["necb-z6"]
    energy_data["high-performance-necb"] = energy_data["high-performance-z6"]

    # 5. Build NEIGHBOURHOODS array
    neighbourhoods = []
    building_images = {}
    
    rc_image_map = {
        "RC-R": "rc-r.png", "RC-D": "rc-d.png", "RC-T": "rc-t.png", "RC-ML": "rc-ml.png",
        "RC-MR1": "rc-mr1.png", "RC-MR2": "rc-mr2.png", "RC-MR3": "rc-mr3.png", 
        "RC-HR1": "rc-hr1.png", "RC-HR2": "rc-hr2.png"
    }

    for b_id, props in archs.items():
        if b_id == "RC-R_Garage":
            continue
            
        c_name = props.get("Development Typologies", "").strip()
        concept_id = CONCEPT_MAP.get(c_name, 6)
        
        nu_type = props.get("NUs Type", "").lower()
        if b_id.startswith("RC-"):
            usage = "residential"
        elif b_id.startswith("RS-") or "mixed-use" in nu_type or "residential service" in nu_type:
            usage = "mixed-use"
        elif b_id.startswith("CC-") or "commercial" in nu_type:
            usage = "commercial"
        elif b_id.startswith("IC-") or "industrial" in nu_type:
            usage = "industrial"
        else:
            usage = "mixed-use"
            
        loc = props.get("Location", "").lower()
        if "urban core" in loc or "urban mid-zone" in loc:
            context = "urban"
            layout = "grid"
        elif "suburban" in loc:
            if "edge" in loc:
                context = "suburban-edge"
                layout = "superblock"
            else:
                context = "suburban"
                layout = "curvilinear" if "cluster" in nu_type else "grid"
        else:
            context = "rural"
            layout = "curvilinear"
            
        den = props.get("Density (u/ac)", "").lower()
        if "high" in den or "very high" in den:
            density = "high"
        elif "medium" in den:
            density = "medium"
        else:
            density = "low"
            
        content = props.get("Building Content", "")
        b_list = []
        if content:
            parts = re.split(r'[+·]', content)
            for p in parts:
                p = p.strip()
                if not p:
                    continue
                if "(" in p:
                    p = p.split("(")[0].strip()
                clean = re.sub(r'^\d+\s*[xX×]?\s*', '', p).strip()
                if clean:
                    clean = clean.replace("_", " ").replace("-", " ").strip()
                    clean = re.sub(r'\s+', ' ', clean)
                    
                    if clean in ["DataCenterLargeHighITE", "DataCenterLargeHigh ITE"]:
                        clean = "Data Center Large<br>High ITE"
                    elif clean in ["DataCenterLargeLowITE", "DataCenterLargeLow ITE"]:
                        clean = "Data Center Large<br>Low ITE"
                    elif clean in ["SmallDataCenterLowITE", "SmallDataCenterLow ITE"]:
                        clean = "Small Data Center<br>Low ITE"
                    elif clean in ["SmallDataCenterHighITE", "SmallDataCenterHigh ITE"]:
                        clean = "Small Data Center<br>High ITE"
                    elif clean in ["RetailStripmall", "Retail Stripmall"]:
                        clean = "Retail Strip Mall"
                    elif clean in ["QSR", "qsr", "RestaurantFastFood", "Restaurant Fast Food"]:
                        clean = "Quick Service Restaurant"
                    elif clean in ["FSR", "fsr", "RestaurantSitDown", "Restaurant Sit Down"]:
                        clean = "Full Service Restaurant"
                    else:
                        clean = re.sub(r'(?<!^)(?<!\s)(?=[A-Z])', ' ', clean)
                    
                    b_list.append(clean)
                    
        b_list = list(set(b_list))
        
        for b in b_list:
            if b not in building_images:
                building_images[b] = get_building_image_path(b)
        
        image_name = rc_image_map.get(b_id, f"{b_id}.png")
        
        supported_envs = [env for env in ALL_ENVELOPES if b_id in energy_data.get(env, {})]
        if not supported_envs:
            supported_envs = list(ALL_ENVELOPES)
            
        neighbourhoods.append({
            "code": b_id,
            "conceptId": concept_id,
            "usage": usage,
            "context": context,
            "density": density,
            "layout": layout,
            "envelope": supported_envs,
            "eui": None,
            "energyStatus": None,
            "content": content,
            "image": f"Content/Images_Neighbourhoods/{image_name}",
            "buildings": b_list
        })

    with open(OUT_JS_DATA, "w", encoding="utf-8") as f:
        f.write("const NEIGHBOURHOODS = ")
        f.write(json.dumps(neighbourhoods, indent=2))
        f.write(";\n\n")
        
        f.write("const ENVELOPE_ENERGY_DATA = ")
        f.write(json.dumps(energy_data, indent=2))
        f.write(";\n\n")
        
        f.write("const PV_GENERATION_DATA = ")
        f.write(json.dumps(pv_data, indent=2))
        f.write(";\n\n")
        
        f.write("// New Buildings Images mapping to merge\n")
        f.write(json.dumps(building_images, indent=2))
        f.write(";\n\n")

    # 6. Export zone CSV files to Templates/
    csv_header = ["NU", "Archetype", "EEM_Level", "EUI", "Htg", "Clg", "DHW", "Ltg", "Equip", "F+P", "PV"]
    for zname, rows in zone_rows.items():
        if rows:
            out_file = os.path.join(TEMPLATES_DIR, f"{zname}.csv")
            with open(out_file, "w", newline="", encoding="utf-8") as f:
                w = csv.writer(f)
                w.writerow(csv_header)
                w.writerows(rows)
            print(f"Exported {out_file} ({len(rows)} rows)")

    print(f"Generated out_data.js for {len(neighbourhoods)} neighbourhoods across {len(ALL_ENVELOPES)} envelope keys.")

if __name__ == "__main__":
    process()
