import os

vintage_path = r"c:\Users\o_iseri\Desktop\LMN-tool-main\Templates\1983-Quebec\vintage_1983_z6_data.js"
data_path = r"c:\Users\o_iseri\Desktop\LMN-tool-main\js\data.js"

with open(vintage_path, "r", encoding="utf-8") as f:
    vintage_text = f.read().rstrip()

with open(data_path, "r", encoding="utf-8") as f:
    data_lines = f.readlines()

# Find getEnergyData line
get_energy_line_idx = -1
for i, line in enumerate(data_lines):
    if "function getEnergyData" in line:
        get_energy_line_idx = i
        break

if get_energy_line_idx == -1:
    raise RuntimeError("Could not find function getEnergyData in data.js")

# Search backwards for closing }; of ENVELOPE_ENERGY_DATA
closing_idx = -1
for j in range(get_energy_line_idx - 1, max(0, get_energy_line_idx - 30), -1):
    if data_lines[j].strip() == "};":
        closing_idx = j
        break

if closing_idx == -1:
    raise RuntimeError("Could not find closing }; before getEnergyData")

print(f"Found closing '}};' at 1-based line {closing_idx + 1}")

# Check line preceding closing_idx and ensure comma if needed
prev_line = data_lines[closing_idx - 1].rstrip('\r\n')
if prev_line.endswith("}") and not prev_line.endswith("},"):
    data_lines[closing_idx - 1] = prev_line + ",\n"

# Indent vintage block by 2 spaces if line 1 has no leading space
vintage_lines = vintage_text.splitlines()
if not vintage_lines[0].startswith(" "):
    vintage_lines = ["  " + line for line in vintage_lines]

inserted_text = "\n".join(vintage_lines) + "\n"

# Insert inserted_text right before closing_idx
data_lines.insert(closing_idx, inserted_text)

new_content = "".join(data_lines)

with open(data_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Insertion completed successfully.")
