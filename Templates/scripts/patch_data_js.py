import re
import os
import json

DATA_JS = r"C:\Users\o_iseri\Desktop\LMN-tool-main\js\data.js"
OUT_DATA_JS = r"C:\Users\o_iseri\Desktop\LMN-tool-main\Templates\scripts\out_data.js"

with open(DATA_JS, "r", encoding="utf-8") as f:
    js_content = f.read()
    
with open(OUT_DATA_JS, "r", encoding="utf-8") as f:
    out_content = f.read()

# Extract from out_data.js
match_nu = re.search(r"const NEIGHBOURHOODS = (\[.*?\]);\n\nconst ENVELOPE", out_content, re.DOTALL)
new_nu = match_nu.group(1)

match_env = re.search(r"const ENVELOPE_ENERGY_DATA = (\{.*?\});\n\nconst PV_", out_content, re.DOTALL)
new_env = match_env.group(1)

match_pv = re.search(r"const PV_GENERATION_DATA = (\{.*?\});\n\n// New Buildings", out_content, re.DOTALL)
new_pv = match_pv.group(1)

match_bldg = re.search(r"// New Buildings Images mapping to merge\n(\{.*?\});\n\n", out_content, re.DOTALL)
new_bldg_str = match_bldg.group(1)
new_bldg_dict = json.loads(new_bldg_str)

# 1. NEIGHBOURHOODS
js_content = re.sub(r"const NEIGHBOURHOODS = \[.*?\];", lambda _: f"const NEIGHBOURHOODS = {new_nu};", js_content, flags=re.DOTALL)

# 2. PV_GENERATION_DATA
js_content = re.sub(r"const PV_GENERATION_DATA = \{.*?^\};", lambda _: f"const PV_GENERATION_DATA = {new_pv};", js_content, flags=re.DOTALL|re.MULTILINE)

# 3. ENVELOPE_ENERGY_DATA
js_content = re.sub(r"const ENVELOPE_ENERGY_DATA = \{.*?^\};", lambda _: f"const ENVELOPE_ENERGY_DATA = {new_env};", js_content, flags=re.DOTALL|re.MULTILINE)

# 4. BUILDING_IMAGES
match_exist_bldg = re.search(r"const BUILDING_IMAGES = \{.*?\};", js_content, flags=re.DOTALL)
if match_exist_bldg:
    existing_bldg_block = match_exist_bldg.group(0)
    inner = re.search(r"const BUILDING_IMAGES = \{(.*?)\};", existing_bldg_block, flags=re.DOTALL).group(1).rstrip()
    if inner.endswith(","):
        inner = inner[:-1]
        
    appends = []
    for k, v in new_bldg_dict.items():
        if f'"{k}"' not in inner and f"'{k}'" not in inner:
            appends.append(f'  "{k}": "{v}"')
            
    if appends:
        new_block = f"const BUILDING_IMAGES = {{{inner},\n" + ",\n".join(appends) + "\n};"
        js_content = js_content.replace(existing_bldg_block, new_block)

with open(DATA_JS, "w", encoding="utf-8") as f:
    f.write(js_content)
    
print("Successfully patched data.js")
