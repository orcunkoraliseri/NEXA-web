const fs = require('fs');
const path = require('path');

const dataJsPath = path.join(__dirname, '../../js/data.js');
const vintageDataPath = path.join(__dirname, 'vintage_1983_z6_data.js');

let dataJs = fs.readFileSync(dataJsPath, 'utf8');
const vintageDataRaw = fs.readFileSync(vintageDataPath, 'utf8').trim();

// Strip `"vintage-1983-z6": {` and trailing `},` from vintage_1983_z6_data.js to get inner content
// or just construct `ENVELOPE_ENERGY_DATA["vintage-1983-z6"] = { ... };`
let innerContent = vintageDataRaw;
// It starts with `"vintage-1983-z6": {`
const startMatch = innerContent.indexOf('{');
innerContent = innerContent.slice(startMatch + 1); // after first {
if (innerContent.endsWith('},')) {
    innerContent = innerContent.slice(0, -2);
} else if (innerContent.endsWith('}')) {
    innerContent = innerContent.slice(0, -1);
}

const vintageBlock = `\n// ========================================================================\n// 1983 Vintage — CAN_MTL_1983 (Quebec NECB Zone 6)\n// ========================================================================\nENVELOPE_ENERGY_DATA["vintage-1983-z6"] = {\n` + innerContent.trim() + `\n};\n`;

// In dataJs, find where we currently put vintage-1983-z6 or where high-performance-necb ends
// Find from line 86940 onwards
const targetRegex = /"RC-T":\s*\{\s*"IAL":[\s\S]*?"EEM4":[\s\S]*?\}\s*\}[\s\S]*?(?=\/\*\*[\r\n]+\s*\* Get energy data)/;

const rctBlock = `    "RC-T": {
      "IAL":     { total: 158.8, breakdown: [{name:"Heating",value:46.2}, {name:"Cooling",value:21.7}, {name:"DHW",value:26.9}, {name:"Lighting",value:5.8}, {name:"Equipment",value:58.2}, {name:"Fans & Pumps",value:0.0}], pv: 62.2 },
      "DEFAULT": { total: 111.5, breakdown: [{name:"Heating",value:8.1}, {name:"Cooling",value:7.1}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.3}], pv: 81.4 },
      "EEM1":     { total: 111.5, breakdown: [{name:"Heating",value:8.1}, {name:"Cooling",value:7.1}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.3}], pv: 81.4 },
      "EEM2": { total: 105.3, breakdown: [{name:"Heating",value:2.3}, {name:"Cooling",value:6.3}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.7}], pv: 81.4 },
      "EEM3": { total: 90.5, breakdown: [{name:"Heating",value:2.3}, {name:"Cooling",value:6.3}, {name:"DHW",value:11.2}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.8}], pv: 81.4 },
      "EEM4": { total: 65.0, breakdown: [{name:"Heating",value:3.8}, {name:"Cooling",value:4.5}, {name:"DHW",value:11.2}, {name:"Lighting",value:3.2}, {name:"Equipment",value:34.8}, {name:"Fans & Pumps",value:6.6}], pv: 81.4 }
    }
};
` + vintageBlock + `\n`;

dataJs = dataJs.replace(targetRegex, rctBlock);

fs.writeFileSync(dataJsPath, dataJs, 'utf8');
console.log('Successfully structured ENVELOPE_ENERGY_DATA["vintage-1983-z6"]');
