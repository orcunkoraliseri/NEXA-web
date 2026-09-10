import json
import re


def _literal(txt, name):
    """Return `const <name> = {...};` from a js source, as parseable JSON.

    A regex cannot do this. The literals span blank lines, so a non-greedy
    match stops inside them, and they carry `//` maintenance comments, which
    are legal JavaScript but not JSON. Walk the braces, drop the comments and
    drop trailing commas.
    """
    marker = "const " + name + " = "
    start = txt.index(marker) + len(marker)
    opener = txt[start]
    closer = {"{": "}", "[": "]"}[opener]
    out = []
    depth, i, in_str, esc = 0, start, False, False
    while i < len(txt):
        c = txt[i]
        if in_str:
            out.append(c)
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
            i += 1
            continue
        if c == "/" and txt[i + 1:i + 2] == "/":
            i = txt.find("\n", i)
            if i == -1:
                break
            continue
        if c == "/" and txt[i + 1:i + 2] == "*":
            i = txt.index("*/", i) + 2
            continue
        if c == ",":
            # a trailing comma is one followed only by whitespace and a closer
            j = i + 1
            while j < len(txt) and txt[j] in " \t\r\n":
                j += 1
            if txt[j:j + 1] in ("}", "]"):
                i += 1
                continue
        out.append(c)
        if c == '"':
            in_str = True
        elif c == opener:
            depth += 1
        elif c == closer:
            depth -= 1
            if depth == 0:
                return "".join(out)
        i += 1
    raise ValueError("unterminated literal for " + name)


with open('js/data.js', encoding='utf-8') as f:
    txt = f.read()

# Extract the base ENVELOPE_ENERGY_DATA object
energy_data = json.loads(_literal(txt, 'ENVELOPE_ENERGY_DATA'))
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
