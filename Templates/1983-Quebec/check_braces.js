const fs = require('fs');
const lines = fs.readFileSync('js/data.js', 'utf8').split(/\r?\n/);

let depth = 0;
for (let i = 81469; i < 86949; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
        if (line[j] === '{') depth++;
        if (line[j] === '}') depth--;
    }
    if (depth < 0) {
        console.log(`Depth dropped below 0 at line ${i + 1}: ${line}`);
        break;
    }
}
console.log(`Final depth at line 86948: ${depth}`);
