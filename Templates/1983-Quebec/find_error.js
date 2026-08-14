const fs = require('fs');
const content = fs.readFileSync('js/data.js', 'utf8');

// Let's test eval on snippets to locate where the syntax error is
function testSnippet(startLine, endLine) {
    const lines = content.split(/\r?\n/);
    const snippet = lines.slice(startLine - 1, endLine).join('\n');
    try {
        new Function('const test = {' + snippet + '};');
        console.log(`Lines ${startLine}-${endLine}: Valid`);
    } catch (e) {
        console.log(`Lines ${startLine}-${endLine}: Error -> ${e.message}`);
    }
}

// Check around high-performance-necb (81470 - 86948)
testSnippet(81470, 86948);

// Check vintage-1983-z6 (86949 - 92271)
testSnippet(86949, 92270);

// Check from 81470 through 92270
testSnippet(81470, 92270);
