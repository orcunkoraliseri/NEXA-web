const fs = require('fs');
const content = fs.readFileSync('js/data.js', 'utf8');
const lines = content.split(/\r?\n/);

console.log('Total lines:', lines.length);

lines.forEach((l, i) => {
    if (/^\s{2}"[a-zA-Z0-9_-]+":\s*\{/.test(l)) {
        console.log(`Line ${i + 1}: ${l.trim()}`);
    }
});
