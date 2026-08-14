import os
import re

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_js_path = os.path.abspath(os.path.join(script_dir, "..", "..", "js", "data.js"))
    
    print(f"Reading data.js from: {data_js_path}")
    with open(data_js_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    print(f"Total lines in data.js: {len(lines)}")
    
    # Restrict to first 1300 lines (NEIGHBOURHOODS array section)
    header_lines = lines[:1300]
    rest_lines = lines[1300:]
    
    header_text = "".join(header_lines)
    rest_text = "".join(rest_lines)
    
    # Regex: match horizontal spaces, "high-performance-z8", newline, and line starting with closing bracket ]
    pattern = re.compile(r'([ \t]*)"high-performance-z8"(\r?\n)(\s*\][,\s]*)')
    
    matches = list(pattern.finditer(header_text))
    print(f"Found {len(matches)} occurrences of 'high-performance-z8' followed by closing bracket in first 1300 lines.")
    
    if len(matches) != 35:
        print(f"WARNING: Expected 35 occurrences, but found {len(matches)}!")
    
    def repl(m):
        indent = m.group(1)   # e.g. "      " (6 spaces)
        newline = m.group(2)  # \r\n or \n
        closing = m.group(3)  # e.g. "    ],"
        return f'{indent}"high-performance-z8",{newline}{indent}"vintage-1983-z6"{newline}{closing}'
    
    new_header_text, count = pattern.subn(repl, header_text)
    
    print(f"Number of replacements made: {count}")
    
    new_full_text = new_header_text + rest_text
    
    if count == 35:
        with open(data_js_path, "w", encoding="utf-8") as f:
            f.write(new_full_text)
        print("Successfully updated data.js!")
    else:
        print("Aborting write because replacement count was not 35.")

if __name__ == "__main__":
    main()
