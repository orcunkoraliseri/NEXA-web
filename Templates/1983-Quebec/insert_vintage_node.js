const fs = require('fs');
const path = require('path');

const dataJsPath = path.join(__dirname, '../../js/data.js');
const vintageDataPath = path.join(__dirname, 'vintage_1983_z6_data.js');

let dataJs = fs.readFileSync(dataJsPath, 'utf8');
const vintageDataRaw = fs.readFileSync(vintageDataPath, 'utf8').trim();

// Ensure vintage data doesn't have a trailing comma at the end of the top-level block
let vintageData = vintageDataRaw;
if (vintageData.endsWith(',')) {
    vintageData = vintageData.slice(0, -1);
}

// Indent vintage data with 2 spaces on each line
const indentedVintageData = vintageData.split('\n').map(line => '  ' + line).join('\n');

// Find the target insertion point before `function getEnergyData`
const targetSearch = '    }\n};\n\n/**\n * Get energy data';
const replacement = '    }\n  },\n' + indentedVintageData + '\n};\n\n/**\n * Get energy data';

if (dataJs.includes(targetSearch)) {
    dataJs = dataJs.replace(targetSearch, replacement);
    fs.writeFileSync(dataJsPath, dataJs, 'utf8');
    console.log('Successfully inserted vintage-1983-z6 into js/data.js');
} else {
    // Try matching with \r\n if Windows CRLF
    const targetSearchCRLF = '    }\r\n};\r\n\r\n/**\r\n * Get energy data';
    const replacementCRLF = '    }\r\n  },\r\n' + indentedVintageData.replace(/\n/g, '\r\n') + '\r\n};\r\n\r\n/**\r\n * Get energy data';
    if (dataJs.includes(targetSearchCRLF)) {
        dataJs = dataJs.replace(targetSearchCRLF, replacementCRLF);
        fs.writeFileSync(dataJsPath, dataJs, 'utf8');
        console.log('Successfully inserted vintage-1983-z6 into js/data.js (CRLF)');
    } else {
        console.error('Target insertion point not found in js/data.js!');
        process.exit(1);
    }
}
