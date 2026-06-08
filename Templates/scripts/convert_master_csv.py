import csv
import json
import os
import re

MASTER_CSV = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\new\LMN_full_NU_master.csv"
ARCHETYPES_CSV = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\new\Full_NUs_Archetypes.csv"
OUT_JS_DATA = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\scripts\out_data.js"
OUT_CAN_MTL = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\CAN_MTL.csv"
OUT_ASHRAE = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\ASHRAE.csv"
ARCHIVE_CAN_MTL = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\archive\CAN_MTL.csv"
ARCHIVE_ASHRAE = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\archive\ASHRAE.csv"

# Concept mappings (id -> layout, context mapped manually or based on location)
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

def clean_dict(d):
    # recursively remove empty values/strings for cleaner output
    pass

def load_archive_ial(filepath):
    ial_data = {}
    if not os.path.exists(filepath):
        return ial_data
    with open(filepath, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            nu = row["NU"].strip()
            metric = row["Metric"].strip()
            val = float(row["IAL"].strip()) if row["IAL"].strip() else 0.0
            if nu not in ial_data:
                ial_data[nu] = {}
            ial_data[nu][metric] = val
    return ial_data

def load_archetypes():
    archs = {}
    with open(ARCHETYPES_CSV, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if not row["Archetype"] or row["Archetype"].strip() == "":
                continue
            archs[row["Archetype"].strip()] = row
    return archs

def get_building_image_path(name):
    # Normalize name to lowercase, replace underscores/hyphens with spaces, trim
    n = name.lower().replace("_", " ").replace("-", " ").strip()
    
    # Map synonyms/variations to actual files
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
        
    # Fallback to sanitized filename
    clean_name = n.replace(" ", "_")
    return f"Content/Images_Buildings/{clean_name}.png"

def process():
    archs = load_archetypes()
    
    energy_data = {"necb-2017": {}, "ashrae": {}}
    pv_data = {}
    
    can_rows = []
    ashrae_rows = []
    csv_header = ["NU", "Archetype", "EEM_Level", "EUI", "Htg", "Clg", "DHW", "Ltg", "Equip", "F+P", "PV"]

    with open(MASTER_CSV, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            b_id = row["building_id"].strip()
            
            # Skip testing nu
            if b_id == "RC-R_Garage":
                continue
                
            standard = row["standard"].strip()
            env_key = "necb-2017" if standard == "CAN_MTL" else "ashrae"
            
            tag = row["scenario_tag"].strip()
            if tag not in SCENARIO_MAPPING:
                continue
                
            eem_level = SCENARIO_MAPPING[tag]
            
            if b_id not in energy_data[env_key]:
                energy_data[env_key][b_id] = {}
                
            # Parse values
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
            
            # Capture PV config from EEM1 (EEM_J_ENVELOPE)
            if tag == "EEM_J_ENVELOPE" and b_id not in pv_data:
                pv_data[b_id] = {
                    "surface": "Roof",
                    "efficiency": "18.68%",
                    "gcr": "0.4",
                    "mounting": "Fixed Open Rack",
                    "generation": round(pv, 1),
                    "rop": None
                }
                
            # For output CSVs
            csv_row = [
                b_id, 
                "Mixed" if b_id not in archs else archs[b_id].get("Archetype", "Mixed"), 
                eem_level, 
                round(total, 1), round(htg, 1), round(clg, 1), round(dhw, 1), 
                round(ltg, 1), round(eqp, 1), round(fan, 1), round(pv, 1)
            ]
            if standard == "CAN_MTL":
                can_rows.append(csv_row)
            else:
                ashrae_rows.append(csv_row)

    # Load archive IAL data
    archive_ial = {
        "necb-2017": load_archive_ial(ARCHIVE_CAN_MTL),
        "ashrae": load_archive_ial(ARCHIVE_ASHRAE)
    }

    # Populate IAL data for all building ids present in energy_data
    for env_key in ["necb-2017", "ashrae"]:
        for b_id in list(energy_data[env_key].keys()):
            if b_id in archive_ial[env_key]:
                metrics = archive_ial[env_key][b_id]
                total = metrics.get("EUI", 0.0)
                htg = metrics.get("Htg", 0.0)
                clg = metrics.get("Clg", 0.0)
                dhw = metrics.get("DHW", 0.0)
                ltg = metrics.get("Ltg", 0.0)
                eqp = metrics.get("Equip", 0.0)
                fan = metrics.get("F+P", 0.0)
                pv = metrics.get("PV", 0.0)
            else:
                # non-RC neighbourhood, default to 0.0
                total = 0.0
                htg = 0.0
                clg = 0.0
                dhw = 0.0
                ltg = 0.0
                eqp = 0.0
                fan = 0.0
                pv = 0.0
                
            energy_data[env_key][b_id]["IAL"] = {
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
            
            # Append row to can_rows or ashrae_rows
            csv_row = [
                b_id,
                "Mixed" if b_id not in archs else archs[b_id].get("Archetype", "Mixed"),
                "IAL",
                round(total, 1), round(htg, 1), round(clg, 1), round(dhw, 1),
                round(ltg, 1), round(eqp, 1), round(fan, 1), round(pv, 1)
            ]
            if env_key == "necb-2017":
                can_rows.append(csv_row)
            else:
                ashrae_rows.append(csv_row)

    # Build NEIGHBOURHOODS array
    neighbourhoods = []
    building_images = {}
    
    # helper for existing RC image casing
    rc_image_map = {
        "RC-R": "rc-r.png", "RC-D": "rc-d.png", "RC-T": "rc-t.png", "RC-ML": "rc-ml.png",
        "RC-MR1": "rc-mr1.png", "RC-MR2": "rc-mr2.png", "RC-MR3": "rc-mr3.png", 
        "RC-HR1": "rc-hr1.png", "RC-HR2": "rc-hr2.png"
    }

    # Add back the high-performance envelopes based on CAN_MTL -> necb, ASHRAE -> ashrae
    for env in ["necb-2017", "ashrae"]:
        hp_env = "high-performance-necb" if env == "necb-2017" else "high-performance-ashrae"
        energy_data[hp_env] = {}
        for b_id, levels in energy_data[env].items():
            if "EEM1" in levels:
                # the high performance is just the EEM1 variant
                energy_data[hp_env][b_id] = {
                    "DEFAULT": levels["EEM1"],
                    "EEM1": levels["EEM1"],
                    "EEM2": levels["EEM1"],
                    "EEM3": levels["EEM1"],
                    "EEM4": levels["EEM1"]
                }
                if "IAL" in levels:
                    energy_data[hp_env][b_id]["IAL"] = levels["IAL"]
    
    for b_id, props in archs.items():
        if b_id == "RC-R_Garage" or b_id not in energy_data["necb-2017"]:
            continue
            
        c_name = props.get("Development Typologies", "").strip()
        concept_id = CONCEPT_MAP.get(c_name, 6) # Default to Midrise Suburb if not found
        
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
            # Split by plus and middle dot
            parts = re.split(r'[+·]', content)
            for p in parts:
                p = p.strip()
                if not p:
                    continue
                if "(" in p:
                    # extract the building name before parenthesis
                    p = p.split("(")[0].strip()
                # Strip leading multiplier
                clean = re.sub(r'^\d+\s*[xX×]?\s*', '', p).strip()
                if clean:
                    # Replace underscores and hyphens with space
                    clean = clean.replace("_", " ").replace("-", " ").strip()
                    # Remove double spaces
                    clean = re.sub(r'\s+', ' ', clean)
                    
                    # Transform datacenter names to 2 lines
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
                        # Split CamelCase with spaces, avoiding duplicates
                        clean = re.sub(r'(?<!^)(?<!\s)(?=[A-Z])', ' ', clean)
                    
                    b_list.append(clean)
                    
        # deduplicate
        b_list = list(set(b_list))
        
        # Add to building images mapping
        for b in b_list:
            if b not in building_images:
                building_images[b] = get_building_image_path(b)
        
        image_name = rc_image_map.get(b_id, f"{b_id}.png")
        
        neighbourhoods.append({
            "code": b_id,
            "conceptId": concept_id,
            "usage": usage,
            "context": context,
            "density": density,
            "layout": layout,
            "envelope": ["necb-2017", "ashrae", "high-performance-necb", "high-performance-ashrae"],
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

    with open(OUT_CAN_MTL, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(csv_header)
        w.writerows(can_rows)
        
    with open(OUT_ASHRAE, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(csv_header)
        w.writerows(ashrae_rows)
        
    print(f"Generated data for {len(neighbourhoods)} neighbourhoods.")

if __name__ == "__main__":
    process()
