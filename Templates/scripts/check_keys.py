import json
import re

with open('js/data.js', encoding='utf-8') as f:
    txt = f.read()

# Extract the base ENVELOPE_ENERGY_DATA object
energy_data = json.loads(re.search(r'const ENVELOPE_ENERGY_DATA = (\{.*?\});\r?\n\r?\n', txt, re.DOTALL).group(1))
print('Top-level keys in const ENVELOPE_ENERGY_DATA:')
for k in sorted(energy_data.keys()):
    print(f'  {repr(k)}  ({len(energy_data[k])} NUs)')

# Also check the patched-in keys via ENVELOPE_ENERGY_DATA["..."] = { syntax
patched_keys = re.findall(r'ENVELOPE_ENERGY_DATA\["([^"]+)"\] =', txt)
print('\nPatched/appended keys (via assignment):')
for k in patched_keys:
    print(f'  {repr(k)}')

print('\nAll envelope keys referenced in energy.js refEnvelope logic:')
print('  When high-performance-z6 is stripped -> "z6" (MISSING in data!)')
print('  When high-performance-z4 is stripped -> "z4" (MISSING in data!)')
print('  When high-performance-ashrae is stripped -> "ashrae" (EXISTS)')
print('  When high-performance-necb is stripped -> "necb" -> remapped to "necb-2017" (EXISTS)')
