/**
 * Neighbourhood Design Interface - Data Module
 * Contains concept and neighbourhood data derived from CSV files
 */

// Concept definitions (for Concept column display)
const CONCEPTS = [
  { id: 1, name: "Financial Dist", image: "Content/Images_Concept/1-financial_district.png" },
  { id: 2, name: "Downtown Residential", image: "Content/Images_Concept/2-dense_residential.png" },
  { id: 3, name: "Urban Transition-Zone", image: "Content/Images_Concept/3-urban-transit-zone.png" },
  { id: 4, name: "Suburban Transit-Zone", image: "Content/Images_Concept/4-suburban-transit-zone.png" },
  { id: 5, name: "Streetcar Suburb", image: "Content/Images_Concept/5-streetcar_suburb.png" },
  { id: 6, name: "Modern Suburb", image: "Content/Images_Concept/6-modern_suburb.png" },
  { id: 7, name: "Suburban Outer", image: "Content/Images_Concept/7-suburban_outer.png" },
  { id: 8, name: "Townhouse Cluster", image: "Content/Images_Concept/8-townhouse_cluster.png" },
  { id: 9, name: "Rural Cluster", image: "Content/Images_Concept/9-rural_cluster.png" },
  { id: 10, name: "Commercial Park", image: "Content/Images_Concept/10-commerical_park.png" },
  { id: 11, name: "Data Center Node", image: "Content/Images_Concept/11-data_center_node.png" },
  { id: 12, name: "Logistics/Industrial", image: "Content/Images_Concept/12-logistics_industrial.png" }
];

// Neighbourhood Units data based on Neighbourhoods_Concepts_Parameters_Buildings.csv
// Each neighbourhood has its own parameters (context, usage, density, layout)
const NEIGHBOURHOODS = [
  {
    code: "RC-R",
    conceptId: 9,
    usage: "residential",
    context: "rural",
    density: "low",
    layout: "curvilinear",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "24 detached (two-storey house) homes",
    image: "Content/Images_Neighbourhoods/rc-r.png",
    buildings: ["Two-Storey House"]
  },
  {
    code: "RC-D",
    conceptId: 7,
    usage: "residential",
    context: "suburban",
    density: "low",
    layout: "curvilinear",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "48 detached (two-storey house) homes",
    image: "Content/Images_Neighbourhoods/rc-d.png",
    buildings: ["Two-Storey House"]
  },
  {
    code: "RC-T",
    conceptId: 8,
    usage: "residential",
    context: "suburban",
    density: "low",
    layout: "curvilinear",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "56 attached units",
    image: "Content/Images_Neighbourhoods/rc-t.png",
    buildings: ["Attached House"]
  },
  {
    code: "RC-ML",
    conceptId: 7,
    usage: "residential",
    context: "suburban",
    density: "low",
    layout: "curvilinear",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "24x Detached Houses + 28x Attached Houses",
    image: "Content/Images_Neighbourhoods/rc-ml.png",
    buildings: ["Two-Storey House", "Attached House"]
  },
  {
    code: "RC-MR1",
    conceptId: 6,
    usage: "residential",
    context: "urban",
    density: "medium",
    layout: "grid",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "4x Mid-Rise + 28x Attached Houses",
    image: "Content/Images_Neighbourhoods/rc-mr1.png",
    buildings: ["midrise apartment", "Attached House"]
  },
  {
    code: "RC-MR2",
    conceptId: 6,
    usage: "residential",
    context: "suburban",
    density: "medium",
    layout: "grid",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "8 Midrise",
    image: "Content/Images_Neighbourhoods/rc-mr2.png",
    buildings: ["midrise apartment"]
  },
  {
    code: "RC-MR3",
    conceptId: 3,
    usage: "residential",
    context: "urban",
    density: "high",
    layout: "grid",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "12 Midrise",
    image: "Content/Images_Neighbourhoods/rc-mr3.png",
    buildings: ["midrise apartment"]
  },
  {
    code: "RC-HR1",
    conceptId: 4,
    usage: "residential",
    context: "urban",
    density: "high",
    layout: "grid",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "2x High-Rise + 4x Mid-Rise",
    image: "Content/Images_Neighbourhoods/rc-hr1.png",
    buildings: ["Highrise Apartment", "midrise apartment"]
  },
  {
    code: "RC-HR2",
    conceptId: 2,
    usage: "residential",
    context: "urban",
    density: "high",
    layout: "grid",
    envelope: ["necb-2017", "ashrae", "high-performance construction"],
    eui: null,
    energyStatus: null,
    content: "4 Highrise (10-St)",
    image: "Content/Images_Neighbourhoods/rc-hr2.png",
    buildings: ["Highrise Apartment"]
  }
  /* Commented-out neighbourhoods preserved for future use
  {
    code: "RC7",
    conceptId: 4,
    usage: "residential",
    context: "suburban",
    density: "high",
    layout: "grid",
    eui: 118.146,
    energyStatus: "Negative",
    content: "2 High-Rise (10-St) + 4 Mid-Rise (4-St)",
    image: "Content/Images_Neighbourhoods/NUs_RC7.png",
    buildings: ["Highrise Apartment", "midrise apartment"]
  },
  ... (other commented entries remain as-is)
  */
];

// Building image mapping
const BUILDING_IMAGES = {
  "Two-Storey House": "Content/Images_Buildings/two-story house.png",
  "Two-Story House": "Content/Images_Buildings/two-story house.png",
  "Attached House": "Content/Images_Buildings/attached house.png",
  "midrise apartment": "Content/Images_Buildings/midrise apartment.png",
  "Midrise Apartment": "Content/Images_Buildings/midrise apartment.png",
  "Highrise Apartment": "Content/Images_Buildings/highrise apartment.png",
  "Primary School": "Content/Images_Buildings/primary school.png",
  "secondary school": "Content/Images_Buildings/secondary school.png",
  "Secondary School": "Content/Images_Buildings/secondary school.png",
  "Small Office": "Content/Images_Buildings/small office.png",
  "Medium Office": "Content/Images_Buildings/medium office.png",
  "Large Office": "Content/Images_Buildings/large office.png",
  "Small Retail": "Content/Images_Buildings/small retail.png",
  "Standalone Retail": "Content/Images_Buildings/standalone retail.png",
  "Retail Strip Mall": "Content/Images_Buildings/retail strip mall.png",
  "Supermarket": "Content/Images_Buildings/supermarket.png",
  "quick service restaurant": "Content/Images_Buildings/quick service restaurant.png",
  "Quick Service Restaurant": "Content/Images_Buildings/quick service restaurant.png",
  "Full service restaurant": "Content/Images_Buildings/full service restaurant.png",
  "Full Service Restaurant": "Content/Images_Buildings/full service restaurant.png",
  "Small Hotel": "Content/Images_Buildings/small hotel.png",
  "Large Hotel": "Content/Images_Buildings/large hotel.png",
  "Hospital": "Content/Images_Buildings/hospital.png",
  "Data Center": "Content/Images_Buildings/datacenter.png",
  "Datacenter": "Content/Images_Buildings/datacenter.png",
  "Warehouse": "Content/Images_Buildings/warehouse.png"
};

// PV parameters per neighbourhood (source: PV_generation.csv, EEM1 values)
const PV_GENERATION_DATA = {
  "RC-R": { surface: "Roof", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Roof Mounted", generation: 155.5, rop: 1.490 },
  "RC-D": { surface: "Roof", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Roof Mounted", generation: 174.5, rop: 1.47 },
  "RC-T": { surface: "Roof", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Roof Mounted", generation: 143.2, rop: 1.57 },
  "RC-MR2": { surface: "Roof", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Open Rack", generation: 66.8, rop: 0.60 },
  "RC-MR3": { surface: "Roof", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Open Rack", generation: 66.8, rop: 0.60 },
  "RC-HR2": { surface: "Roof + Facade", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Open Rack", generation: 22.7, rop: 0.44 },
  "RC-MR1": { surface: "Roof", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Open Rack", generation: 92.4, rop: null },
  "RC-HR1": { surface: "Roof + Facade", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Open Rack", generation: 42.2, rop: null },
  "RC-ML": { surface: "Roof", efficiency: "18.68%", gcr: "0.4", mounting: "Fixed Roof Mounted", generation: 158.9, rop: null }
};

// Energy category colors (updated for new CSV metric names)
const ENERGY_COLORS = {
  "Heating": "#ef4444",
  "Cooling": "#3b82f6",
  "DHW": "#06b6d4",
  "Lighting": "#eab308",
  "Equipment": "#8b5cf6",
  "Fans & Pumps": "#22c55e",
  // Legacy colors preserved for backward compatibility
  "Interior Lighting": "#eab308",
  "Electric Equipment": "#8b5cf6",
  "Exterior Lighting": "#f59e0b",
  "Equipment (Gas)": "#f97316",
  "Elevators": "#6366f1",
  "Water Systems": "#06b6d4",
  "Fans": "#22c55e",
  "VAV Fans": "#10b981",
  "Pump (Electric)": "#14b8a6",
  "Heat Rejection": "#f43f5e",
  "FCU Fans": "#84cc16"
};

// ========================================================================
// ENVELOPE_ENERGY_DATA — Unified energy data from LMN_Energy_Database.csv
// Keyed by: envelope → NU code → column → { total, breakdown[], pv }
// ========================================================================
const ENVELOPE_ENERGY_DATA = {
  // Source: LMN_Energy_Database.csv (Envelope=NECB-2017)
  "necb-2017": {
    "RC-D": {
      "IAL":     { total: 163.9, breakdown: [{name:"Heating",value:64.9},{name:"Cooling",value:24.8},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:47.4},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 138.6, breakdown: [{name:"Heating",value:51.7},{name:"Cooling",value:6.3},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.3}], pv: 0.0 },
      "EEM1":    { total: 108.2, breakdown: [{name:"Heating",value:21.7},{name:"Cooling",value:6.8},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:5.9}], pv: 174.5 },
      "EEM2":    { total: 93.1,  breakdown: [{name:"Heating",value:6.5},{name:"Cooling",value:6.2},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.6}], pv: 174.5 },
      "EEM3":    { total: 81.0,  breakdown: [{name:"Heating",value:9.2},{name:"Cooling",value:6.3},{name:"DHW",value:6.6},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.8}], pv: 174.5 },
      "EEM4":    { total: 61.1,  breakdown: [{name:"Heating",value:10.9},{name:"Cooling",value:5.0},{name:"DHW",value:6.6},{name:"Lighting",value:2.6},{name:"Equipment",value:28.3},{name:"Fans & Pumps",value:6.8}], pv: 174.5 }
    },
    "RC-T": {
      "IAL":     { total: 167.0, breakdown: [{name:"Heating",value:52.5},{name:"Cooling",value:23.7},{name:"DHW",value:26.9},{name:"Lighting",value:5.8},{name:"Equipment",value:58.1},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 140.0, breakdown: [{name:"Heating",value:36.3},{name:"Cooling",value:6.3},{name:"DHW",value:26.9},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.6}], pv: 0.0 },
      "EEM1":    { total: 114.0, breakdown: [{name:"Heating",value:10.4},{name:"Cooling",value:7.2},{name:"DHW",value:26.1},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.4}], pv: 143.2 },
      "EEM2":    { total: 106.5, breakdown: [{name:"Heating",value:3.2},{name:"Cooling",value:6.5},{name:"DHW",value:26.1},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.9}], pv: 143.2 },
      "EEM3":    { total: 91.8,  breakdown: [{name:"Heating",value:3.2},{name:"Cooling",value:6.5},{name:"DHW",value:11.2},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.9}], pv: 143.2 },
      "EEM4":    { total: 66.7,  breakdown: [{name:"Heating",value:4.9},{name:"Cooling",value:4.7},{name:"DHW",value:11.2},{name:"Lighting",value:3.2},{name:"Equipment",value:34.8},{name:"Fans & Pumps",value:6.8}], pv: 143.2 }
    },
    "RC-ML": {
      "IAL":     { total: 165.4, breakdown: [{name:"Heating",value:58.8},{name:"Cooling",value:24.2},{name:"DHW",value:24.5},{name:"Lighting",value:5.2},{name:"Equipment",value:52.7},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 139.2, breakdown: [{name:"Heating",value:44.2},{name:"Cooling",value:6.3},{name:"DHW",value:24.4},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.4}], pv: 0.0 },
      "EEM1":    { total: 111.0, breakdown: [{name:"Heating",value:16.2},{name:"Cooling",value:7.0},{name:"DHW",value:23.8},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.1}], pv: 158.9 },
      "EEM2":    { total: 99.7,  breakdown: [{name:"Heating",value:4.9},{name:"Cooling",value:6.4},{name:"DHW",value:23.8},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.7}], pv: 158.9 },
      "EEM3":    { total: 86.2,  breakdown: [{name:"Heating",value:6.3},{name:"Cooling",value:6.4},{name:"DHW",value:8.9},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.8}], pv: 158.9 },
      "EEM4":    { total: 63.8,  breakdown: [{name:"Heating",value:8.0},{name:"Cooling",value:4.9},{name:"DHW",value:8.9},{name:"Lighting",value:2.9},{name:"Equipment",value:31.5},{name:"Fans & Pumps",value:6.8}], pv: 158.9 }
    },
    "RC-R": {
      "IAL":     { total: 163.9, breakdown: [{name:"Heating",value:63.9},{name:"Cooling",value:25.8},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:47.4},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 137.8, breakdown: [{name:"Heating",value:50.7},{name:"Cooling",value:6.6},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.3}], pv: 0.0 },
      "EEM1":    { total: 107.6, breakdown: [{name:"Heating",value:20.7},{name:"Cooling",value:7.2},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:5.9}], pv: 155.5 },
      "EEM2":    { total: 93.2,  breakdown: [{name:"Heating",value:6.2},{name:"Cooling",value:6.5},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.6}], pv: 155.5 },
      "EEM3":    { total: 81.0,  breakdown: [{name:"Heating",value:8.9},{name:"Cooling",value:6.6},{name:"DHW",value:6.6},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.8}], pv: 155.5 },
      "EEM4":    { total: 61.0,  breakdown: [{name:"Heating",value:10.6},{name:"Cooling",value:5.3},{name:"DHW",value:6.6},{name:"Lighting",value:2.6},{name:"Equipment",value:28.3},{name:"Fans & Pumps",value:6.8}], pv: 155.5 }
    },
    "RC-HR1": {
      "IAL":     { total: 213.8, breakdown: [{name:"Heating",value:38.7},{name:"Cooling",value:100.4},{name:"DHW",value:48.2},{name:"Lighting",value:4.3},{name:"Equipment",value:22.2},{name:"Fans & Pumps",value:0.0}], pv: 1.9 },
      "DEFAULT": { total: 111.2, breakdown: [{name:"Heating",value:18.3},{name:"Cooling",value:9.1},{name:"DHW",value:48.2},{name:"Lighting",value:4.3},{name:"Equipment",value:19.2},{name:"Fans & Pumps",value:9.1}], pv: 1.9 },
      "EEM1":    { total: 103.4, breakdown: [{name:"Heating",value:8.2},{name:"Cooling",value:11.3},{name:"DHW",value:48.2},{name:"Lighting",value:4.3},{name:"Equipment",value:19.2},{name:"Fans & Pumps",value:9.1}], pv: 42.2 },
      "EEM2":    { total: 99.8,  breakdown: [{name:"Heating",value:2.8},{name:"Cooling",value:13.2},{name:"DHW",value:48.2},{name:"Lighting",value:4.3},{name:"Equipment",value:19.2},{name:"Fans & Pumps",value:9.1}], pv: 42.2 },
      "EEM3":    { total: 67.3,  breakdown: [{name:"Heating",value:6.3},{name:"Cooling",value:13.0},{name:"DHW",value:12.1},{name:"Lighting",value:4.3},{name:"Equipment",value:19.2},{name:"Fans & Pumps",value:9.1}], pv: 42.2 },
      "EEM4":    { total: 52.3,  breakdown: [{name:"Heating",value:7.0},{name:"Cooling",value:9.4},{name:"DHW",value:12.1},{name:"Lighting",value:1.7},{name:"Equipment",value:11.0},{name:"Fans & Pumps",value:7.9}], pv: 42.2 }
    },
    "RC-HR2": {
      "IAL":     { total: 210.4, breakdown: [{name:"Heating",value:41.6},{name:"Cooling",value:90.3},{name:"DHW",value:51.8},{name:"Lighting",value:3.9},{name:"Equipment",value:22.8},{name:"Fans & Pumps",value:0.0}], pv: 3.3 },
      "DEFAULT": { total: 116.2, breakdown: [{name:"Heating",value:18.4},{name:"Cooling",value:9.3},{name:"DHW",value:51.8},{name:"Lighting",value:3.9},{name:"Equipment",value:19.0},{name:"Fans & Pumps",value:9.9}], pv: 3.3 },
      "EEM1":    { total: 108.0, breakdown: [{name:"Heating",value:6.9},{name:"Cooling",value:12.5},{name:"DHW",value:51.8},{name:"Lighting",value:3.9},{name:"Equipment",value:19.0},{name:"Fans & Pumps",value:10.0}], pv: 22.7 },
      "EEM2":    { total: 106.5, breakdown: [{name:"Heating",value:3.2},{name:"Cooling",value:14.6},{name:"DHW",value:51.8},{name:"Lighting",value:3.9},{name:"Equipment",value:19.0},{name:"Fans & Pumps",value:10.1}], pv: 22.7 },
      "EEM3":    { total: 69.0,  breakdown: [{name:"Heating",value:9.6},{name:"Cooling",value:14.5},{name:"DHW",value:7.8},{name:"Lighting",value:3.9},{name:"Equipment",value:19.0},{name:"Fans & Pumps",value:10.2}], pv: 22.7 },
      "EEM4":    { total: 53.7,  breakdown: [{name:"Heating",value:10.6},{name:"Cooling",value:10.4},{name:"DHW",value:7.9},{name:"Lighting",value:1.5},{name:"Equipment",value:10.9},{name:"Fans & Pumps",value:8.7}], pv: 22.7 }
    },
    "RC-MR1": {
      "IAL":     { total: 195.9, breakdown: [{name:"Heating",value:38.3},{name:"Cooling",value:81.8},{name:"DHW",value:37.8},{name:"Lighting",value:3.3},{name:"Equipment",value:34.7},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 113.6, breakdown: [{name:"Heating",value:21.6},{name:"Cooling",value:8.5},{name:"DHW",value:37.8},{name:"Lighting",value:5.1},{name:"Equipment",value:31.0},{name:"Fans & Pumps",value:7.8}], pv: 0.0 },
      "EEM1":    { total: 100.5, breakdown: [{name:"Heating",value:7.3},{name:"Cooling",value:10.1},{name:"DHW",value:37.3},{name:"Lighting",value:5.1},{name:"Equipment",value:31.0},{name:"Fans & Pumps",value:7.8}], pv: 92.4 },
      "EEM2":    { total: 96.7,  breakdown: [{name:"Heating",value:2.4},{name:"Cooling",value:11.2},{name:"DHW",value:37.3},{name:"Lighting",value:5.1},{name:"Equipment",value:31.0},{name:"Fans & Pumps",value:7.8}], pv: 92.4 },
      "EEM3":    { total: 74.3,  breakdown: [{name:"Heating",value:2.4},{name:"Cooling",value:10.9},{name:"DHW",value:15.2},{name:"Lighting",value:5.1},{name:"Equipment",value:31.0},{name:"Fans & Pumps",value:7.8}], pv: 92.4 },
      "EEM4":    { total: 56.4,  breakdown: [{name:"Heating",value:3.1},{name:"Cooling",value:8.2},{name:"DHW",value:15.2},{name:"Lighting",value:2.3},{name:"Equipment",value:18.5},{name:"Fans & Pumps",value:7.2}], pv: 92.4 }
    },
    "RC-MR2": {
      "IAL":     { total: 200.3, breakdown: [{name:"Heating",value:38.2},{name:"Cooling",value:92.1},{name:"DHW",value:43.7},{name:"Lighting",value:4.8},{name:"Equipment",value:21.5},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 107.0, breakdown: [{name:"Heating",value:20.7},{name:"Cooling",value:8.3},{name:"DHW",value:43.6},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:8.1}], pv: 0.0 },
      "EEM1":    { total: 99.1,  breakdown: [{name:"Heating",value:11.8},{name:"Cooling",value:9.5},{name:"DHW",value:43.6},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:7.9}], pv: 66.8 },
      "EEM2":    { total: 92.4,  breakdown: [{name:"Heating",value:3.5},{name:"Cooling",value:11.2},{name:"DHW",value:43.6},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:7.8}], pv: 66.8 },
      "EEM3":    { total: 65.7,  breakdown: [{name:"Heating",value:3.6},{name:"Cooling",value:10.8},{name:"DHW",value:17.2},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:7.8}], pv: 66.8 },
      "EEM4":    { total: 51.5,  breakdown: [{name:"Heating",value:3.9},{name:"Cooling",value:8.0},{name:"DHW",value:17.2},{name:"Lighting",value:2.0},{name:"Equipment",value:11.2},{name:"Fans & Pumps",value:7.0}], pv: 66.8 }
    },
    "RC-MR3": {
      "IAL":     { total: 200.5, breakdown: [{name:"Heating",value:38.9},{name:"Cooling",value:91.5},{name:"DHW",value:43.7},{name:"Lighting",value:4.8},{name:"Equipment",value:21.6},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 107.0, breakdown: [{name:"Heating",value:21.1},{name:"Cooling",value:8.0},{name:"DHW",value:43.6},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:8.0}], pv: 0.0 },
      "EEM1":    { total: 99.0,  breakdown: [{name:"Heating",value:12.2},{name:"Cooling",value:9.1},{name:"DHW",value:43.6},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:7.8}], pv: 66.8 },
      "EEM2":    { total: 92.0,  breakdown: [{name:"Heating",value:3.6},{name:"Cooling",value:10.8},{name:"DHW",value:43.6},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:7.7}], pv: 66.8 },
      "EEM3":    { total: 65.3,  breakdown: [{name:"Heating",value:3.6},{name:"Cooling",value:10.4},{name:"DHW",value:17.2},{name:"Lighting",value:4.8},{name:"Equipment",value:19.3},{name:"Fans & Pumps",value:7.7}], pv: 66.8 },
      "EEM4":    { total: 51.1,  breakdown: [{name:"Heating",value:3.9},{name:"Cooling",value:7.6},{name:"DHW",value:17.2},{name:"Lighting",value:2.0},{name:"Equipment",value:11.2},{name:"Fans & Pumps",value:6.9}], pv: 66.8 }
    }
  },

  // Source: LMN_Energy_Database.csv (Envelope=ASHRAE)
  "ashrae": {
    "RC-D": {
      "IAL":     { total: 154.1, breakdown: [{name:"Heating",value:57.2},{name:"Cooling",value:22.7},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:47.4},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 131.7, breakdown: [{name:"Heating",value:45.5},{name:"Cooling",value:5.9},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.1}], pv: 0.0 },
      "EEM1":    { total: 103.8, breakdown: [{name:"Heating",value:17.7},{name:"Cooling",value:6.6},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:5.7}], pv: 173.8 },
      "EEM2":    { total: 90.9,  breakdown: [{name:"Heating",value:4.9},{name:"Cooling",value:5.9},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.3}], pv: 173.8 },
      "EEM3":    { total: 78.7,  breakdown: [{name:"Heating",value:7.6},{name:"Cooling",value:5.9},{name:"DHW",value:6.6},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.5}], pv: 173.8 },
      "EEM4":    { total: 58.6,  breakdown: [{name:"Heating",value:9.0},{name:"Cooling",value:4.7},{name:"DHW",value:6.6},{name:"Lighting",value:2.6},{name:"Equipment",value:28.3},{name:"Fans & Pumps",value:6.5}], pv: 173.8 }
    },
    "RC-T": {
      "IAL":     { total: 158.8, breakdown: [{name:"Heating",value:46.2},{name:"Cooling",value:21.7},{name:"DHW",value:26.9},{name:"Lighting",value:5.8},{name:"Equipment",value:58.2},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 135.3, breakdown: [{name:"Heating",value:32.0},{name:"Cooling",value:5.9},{name:"DHW",value:26.9},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.5}], pv: 0.0 },
      "EEM1":    { total: 111.5, breakdown: [{name:"Heating",value:8.1},{name:"Cooling",value:7.1},{name:"DHW",value:26.1},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.3}], pv: 142.0 },
      "EEM2":    { total: 105.3, breakdown: [{name:"Heating",value:2.3},{name:"Cooling",value:6.3},{name:"DHW",value:26.1},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.7}], pv: 142.0 },
      "EEM3":    { total: 90.5,  breakdown: [{name:"Heating",value:2.3},{name:"Cooling",value:6.3},{name:"DHW",value:11.2},{name:"Lighting",value:5.8},{name:"Equipment",value:57.1},{name:"Fans & Pumps",value:6.8}], pv: 142.0 },
      "EEM4":    { total: 65.0,  breakdown: [{name:"Heating",value:3.8},{name:"Cooling",value:4.5},{name:"DHW",value:11.2},{name:"Lighting",value:3.2},{name:"Equipment",value:34.8},{name:"Fans & Pumps",value:6.6}], pv: 142.0 }
    },
    "RC-ML": {
      "IAL":     { total: 156.4, breakdown: [{name:"Heating",value:51.8},{name:"Cooling",value:22.2},{name:"DHW",value:24.5},{name:"Lighting",value:5.2},{name:"Equipment",value:52.7},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 133.5, breakdown: [{name:"Heating",value:38.9},{name:"Cooling",value:5.9},{name:"DHW",value:24.5},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.3}], pv: 0.0 },
      "EEM1":    { total: 107.6, breakdown: [{name:"Heating",value:13.0},{name:"Cooling",value:6.8},{name:"DHW",value:23.8},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.0}], pv: 157.9 },
      "EEM2":    { total: 97.9,  breakdown: [{name:"Heating",value:3.6},{name:"Cooling",value:6.1},{name:"DHW",value:23.8},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.5}], pv: 157.9 },
      "EEM3":    { total: 84.5,  breakdown: [{name:"Heating",value:5.0},{name:"Cooling",value:6.1},{name:"DHW",value:8.9},{name:"Lighting",value:5.2},{name:"Equipment",value:51.7},{name:"Fans & Pumps",value:6.6}], pv: 157.9 },
      "EEM4":    { total: 61.7,  breakdown: [{name:"Heating",value:6.4},{name:"Cooling",value:4.6},{name:"DHW",value:8.9},{name:"Lighting",value:2.9},{name:"Equipment",value:31.5},{name:"Fans & Pumps",value:6.5}], pv: 157.9 }
    },
    "RC-R": {
      "IAL":     { total: 154.6, breakdown: [{name:"Heating",value:56.5},{name:"Cooling",value:23.8},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:47.5},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 131.4, breakdown: [{name:"Heating",value:44.8},{name:"Cooling",value:6.1},{name:"DHW",value:22.1},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.2}], pv: 0.0 },
      "EEM1":    { total: 103.6, breakdown: [{name:"Heating",value:17.1},{name:"Cooling",value:6.9},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:5.8}], pv: 154.5 },
      "EEM2":    { total: 91.1,  breakdown: [{name:"Heating",value:4.7},{name:"Cooling",value:6.2},{name:"DHW",value:21.7},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.4}], pv: 154.5 },
      "EEM3":    { total: 78.9,  breakdown: [{name:"Heating",value:7.4},{name:"Cooling",value:6.2},{name:"DHW",value:6.6},{name:"Lighting",value:4.7},{name:"Equipment",value:46.6},{name:"Fans & Pumps",value:6.5}], pv: 154.5 },
      "EEM4":    { total: 58.7,  breakdown: [{name:"Heating",value:8.8},{name:"Cooling",value:5.0},{name:"DHW",value:6.6},{name:"Lighting",value:2.6},{name:"Equipment",value:28.3},{name:"Fans & Pumps",value:6.5}], pv: 154.5 }
    },
    "RC-HR1": {
      "IAL":     { total: 171.5, breakdown: [{name:"Heating",value:52.5},{name:"Cooling",value:21.0},{name:"DHW",value:48.2},{name:"Lighting",value:5.1},{name:"Equipment",value:44.7},{name:"Fans & Pumps",value:0.0}], pv: 1.9 },
      "DEFAULT": { total: 146.6, breakdown: [{name:"Heating",value:32.6},{name:"Cooling",value:6.4},{name:"DHW",value:48.2},{name:"Lighting",value:5.1},{name:"Equipment",value:41.6},{name:"Fans & Pumps",value:9.6}], pv: 1.9 },
      "EEM1":    { total: 120.1, breakdown: [{name:"Heating",value:1.4},{name:"Cooling",value:11.4},{name:"DHW",value:48.1},{name:"Lighting",value:5.1},{name:"Equipment",value:41.6},{name:"Fans & Pumps",value:9.4}], pv: 41.0 },
      "EEM2":    { total: 120.6, breakdown: [{name:"Heating",value:0.5},{name:"Cooling",value:13.0},{name:"DHW",value:48.1},{name:"Lighting",value:5.1},{name:"Equipment",value:41.6},{name:"Fans & Pumps",value:9.1}], pv: 41.0 },
      "EEM3":    { total: 88.4,  breakdown: [{name:"Heating",value:4.1},{name:"Cooling",value:12.9},{name:"DHW",value:12.5},{name:"Lighting",value:5.1},{name:"Equipment",value:41.6},{name:"Fans & Pumps",value:9.1}], pv: 41.0 },
      "EEM4":    { total: 58.0,  breakdown: [{name:"Heating",value:5.7},{name:"Cooling",value:6.7},{name:"DHW",value:12.5},{name:"Lighting",value:2.0},{name:"Equipment",value:20.6},{name:"Fans & Pumps",value:7.4}], pv: 41.0 }
    },
    "RC-HR2": {
      "IAL":     { total: 180.1, breakdown: [{name:"Heating",value:60.1},{name:"Cooling",value:18.2},{name:"DHW",value:51.8},{name:"Lighting",value:4.6},{name:"Equipment",value:45.4},{name:"Fans & Pumps",value:0.0}], pv: 3.3 },
      "DEFAULT": { total: 155.0, breakdown: [{name:"Heating",value:36.3},{name:"Cooling",value:6.1},{name:"DHW",value:51.8},{name:"Lighting",value:4.6},{name:"Equipment",value:41.7},{name:"Fans & Pumps",value:10.7}], pv: 3.3 },
      "EEM1":    { total: 125.1, breakdown: [{name:"Heating",value:1.0},{name:"Cooling",value:12.1},{name:"DHW",value:51.8},{name:"Lighting",value:4.6},{name:"Equipment",value:41.7},{name:"Fans & Pumps",value:10.0}], pv: 20.8 },
      "EEM2":    { total: 126.6, breakdown: [{name:"Heating",value:0.5},{name:"Cooling",value:13.9},{name:"DHW",value:51.8},{name:"Lighting",value:4.6},{name:"Equipment",value:41.7},{name:"Fans & Pumps",value:10.1}], pv: 20.8 },
      "EEM3":    { total: 89.2,  breakdown: [{name:"Heating",value:6.9},{name:"Cooling",value:13.9},{name:"DHW",value:8.0},{name:"Lighting",value:4.6},{name:"Equipment",value:41.7},{name:"Fans & Pumps",value:10.2}], pv: 20.8 },
      "EEM4":    { total: 57.5,  breakdown: [{name:"Heating",value:8.6},{name:"Cooling",value:6.8},{name:"DHW",value:7.9},{name:"Lighting",value:1.8},{name:"Equipment",value:20.5},{name:"Fans & Pumps",value:8.0}], pv: 20.8 }
    },
    "RC-MR1": {
      "IAL":     { total: 149.5, breakdown: [{name:"Heating",value:30.7},{name:"Cooling",value:27.2},{name:"DHW",value:37.8},{name:"Lighting",value:3.9},{name:"Equipment",value:49.9},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 123.3, breakdown: [{name:"Heating",value:16.2},{name:"Cooling",value:7.7},{name:"DHW",value:37.7},{name:"Lighting",value:5.7},{name:"Equipment",value:46.3},{name:"Fans & Pumps",value:7.7}], pv: 0.0 },
      "EEM1":    { total: 112.4, breakdown: [{name:"Heating",value:1.5},{name:"Cooling",value:11.2},{name:"DHW",value:37.3},{name:"Lighting",value:5.7},{name:"Equipment",value:46.3},{name:"Fans & Pumps",value:8.5}], pv: 91.7 },
      "EEM2":    { total: 111.6, breakdown: [{name:"Heating",value:0.4},{name:"Cooling",value:12.2},{name:"DHW",value:37.3},{name:"Lighting",value:5.7},{name:"Equipment",value:46.3},{name:"Fans & Pumps",value:7.8}], pv: 91.7 },
      "EEM3":    { total: 89.7,  breakdown: [{name:"Heating",value:0.4},{name:"Cooling",value:11.9},{name:"DHW",value:15.6},{name:"Lighting",value:5.7},{name:"Equipment",value:46.3},{name:"Fans & Pumps",value:7.8}], pv: 91.7 },
      "EEM4":    { total: 60.4,  breakdown: [{name:"Heating",value:1.3},{name:"Cooling",value:7.3},{name:"DHW",value:15.6},{name:"Lighting",value:2.6},{name:"Equipment",value:25.0},{name:"Fans & Pumps",value:6.8}], pv: 91.7 }
    },
    "RC-MR2": {
      "IAL":     { total: 162.1, breakdown: [{name:"Heating",value:45.1},{name:"Cooling",value:23.9},{name:"DHW",value:43.7},{name:"Lighting",value:5.6},{name:"Equipment",value:43.8},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 137.7, breakdown: [{name:"Heating",value:30.0},{name:"Cooling",value:6.5},{name:"DHW",value:43.6},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:8.2}], pv: 0.0 },
      "EEM1":    { total: 113.8, breakdown: [{name:"Heating",value:1.8},{name:"Cooling",value:10.4},{name:"DHW",value:43.5},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:8.6}], pv: 66.3 },
      "EEM2":    { total: 113.0, breakdown: [{name:"Heating",value:0.5},{name:"Cooling",value:11.9},{name:"DHW",value:43.5},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:7.7}], pv: 66.3 },
      "EEM3":    { total: 87.1,  breakdown: [{name:"Heating",value:0.6},{name:"Cooling",value:11.6},{name:"DHW",value:17.9},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:7.7}], pv: 66.3 },
      "EEM4":    { total: 58.3,  breakdown: [{name:"Heating",value:2.1},{name:"Cooling",value:6.5},{name:"DHW",value:17.9},{name:"Lighting",value:2.3},{name:"Equipment",value:20.7},{name:"Fans & Pumps",value:6.6}], pv: 66.3 }
    },
    "RC-MR3": {
      "IAL":     { total: 161.8, breakdown: [{name:"Heating",value:45.6},{name:"Cooling",value:23.1},{name:"DHW",value:43.7},{name:"Lighting",value:5.6},{name:"Equipment",value:43.8},{name:"Fans & Pumps",value:0.0}], pv: 0.0 },
      "DEFAULT": { total: 137.9, breakdown: [{name:"Heating",value:30.4},{name:"Cooling",value:6.3},{name:"DHW",value:43.6},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:8.1}], pv: 0.0 },
      "EEM1":    { total: 113.4, breakdown: [{name:"Heating",value:2.0},{name:"Cooling",value:10.1},{name:"DHW",value:43.5},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:8.5}], pv: 66.3 },
      "EEM2":    { total: 112.5, breakdown: [{name:"Heating",value:0.6},{name:"Cooling",value:11.5},{name:"DHW",value:43.5},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:7.6}], pv: 66.3 },
      "EEM3":    { total: 86.7,  breakdown: [{name:"Heating",value:0.6},{name:"Cooling",value:11.2},{name:"DHW",value:17.9},{name:"Lighting",value:5.6},{name:"Equipment",value:41.5},{name:"Fans & Pumps",value:7.6}], pv: 66.3 },
      "EEM4":    { total: 58.0,  breakdown: [{name:"Heating",value:2.2},{name:"Cooling",value:6.1},{name:"DHW",value:17.9},{name:"Lighting",value:2.3},{name:"Equipment",value:20.7},{name:"Fans & Pumps",value:6.5}], pv: 66.3 }
    }
  }
};

// High-performance uses CAN_MTL (necb-2017) data with EEM1 as default
ENVELOPE_ENERGY_DATA["high-performance construction"] = ENVELOPE_ENERGY_DATA["necb-2017"];

/**
 * Get energy data for a neighbourhood given envelope + energy column selections.
 * For "high-performance construction", DEFAULT maps to EEM1.
 * @param {string} envelope - "necb-2017", "ashrae", or "high-performance construction"
 * @param {string} nuCode - e.g. "RC-R"
 * @param {string} column - "IAL", "DEFAULT", "EEM1", "EEM2", "EEM3", "EEM4"
 * @returns {Object|null} { total, breakdown[], pv } or null
 */
function getEnergyData(envelope, nuCode, column) {
  let resolvedColumn = column;
  // High-performance: DEFAULT resolves to EEM1
  if (envelope === "high-performance construction" && column === "DEFAULT") {
    resolvedColumn = "EEM1";
  }

  const dataset = ENVELOPE_ENERGY_DATA[envelope];
  if (!dataset || !dataset[nuCode]) return null;
  return dataset[nuCode][resolvedColumn] || null;
}

/* ========================================================================
 * ARCHIVED: Old COP-keyed ENERGY_DATA from NUs_Energy.csv
 * Preserved for reference — no longer used by the active application.
 * ====================================================================== */
/*
const ENERGY_DATA_ARCHIVED = {
  "RC-R": {
    "1": {
      "total": 93.55,
      "breakdown": [
        {
          "name": "Heating",
          "value": 32.1
        },
        {
          "name": "Cooling",
          "value": 16.25
        },
        {
          "name": "Interior Lighting",
          "value": 0.81
        },
        {
          "name": "Exterior Lighting",
          "value": 0.93
        },
        {
          "name": "Electric Equipment",
          "value": 31.77
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "4": {
      "total": 57.29,
      "breakdown": [
        {
          "name": "Heating",
          "value": 8.02
        },
        {
          "name": "Cooling",
          "value": 4.06
        },
        {
          "name": "Interior Lighting",
          "value": 0.81
        },
        {
          "name": "Exterior Lighting",
          "value": 0.93
        },
        {
          "name": "Electric Equipment",
          "value": 31.77
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "3.5": {
      "total": 59.02,
      "breakdown": [
        {
          "name": "Heating",
          "value": 9.17
        },
        {
          "name": "Cooling",
          "value": 4.64
        },
        {
          "name": "Interior Lighting",
          "value": 0.81
        },
        {
          "name": "Exterior Lighting",
          "value": 0.93
        },
        {
          "name": "Electric Equipment",
          "value": 31.77
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "3": {
      "total": 61.32,
      "breakdown": [
        {
          "name": "Heating",
          "value": 10.7
        },
        {
          "name": "Cooling",
          "value": 5.42
        },
        {
          "name": "Interior Lighting",
          "value": 0.81
        },
        {
          "name": "Exterior Lighting",
          "value": 0.93
        },
        {
          "name": "Electric Equipment",
          "value": 31.77
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    }
  },
  "RC-D": {
    "1": {
      "total": 95.7,
      "breakdown": [
        {
          "name": "Heating",
          "value": 35.5
        },
        {
          "name": "Cooling",
          "value": 15.0
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.9
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "4": {
      "total": 57.8,
      "breakdown": [
        {
          "name": "Heating",
          "value": 8.9
        },
        {
          "name": "Cooling",
          "value": 3.7
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.9
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "3.5": {
      "total": 59.6,
      "breakdown": [
        {
          "name": "Heating",
          "value": 10.1
        },
        {
          "name": "Cooling",
          "value": 4.3
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.9
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "3": {
      "total": 62.0,
      "breakdown": [
        {
          "name": "Heating",
          "value": 11.8
        },
        {
          "name": "Cooling",
          "value": 5.0
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.9
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    }
  },
  "RC-T": {
    "1": {
      "total": 84.6,
      "breakdown": [
        {
          "name": "Heating",
          "value": 23.6
        },
        {
          "name": "Cooling",
          "value": 16.1
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.6
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "4": {
      "total": 54.8,
      "breakdown": [
        {
          "name": "Heating",
          "value": 5.9
        },
        {
          "name": "Cooling",
          "value": 4.0
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.6
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "3.5": {
      "total": 56.2,
      "breakdown": [
        {
          "name": "Heating",
          "value": 6.8
        },
        {
          "name": "Cooling",
          "value": 4.6
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.6
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    },
    "3": {
      "total": 58.1,
      "breakdown": [
        {
          "name": "Heating",
          "value": 7.9
        },
        {
          "name": "Cooling",
          "value": 5.4
        },
        {
          "name": "Interior Lighting",
          "value": 0.8
        },
        {
          "name": "Exterior Lighting",
          "value": 0.6
        },
        {
          "name": "Electric Equipment",
          "value": 31.8
        },
        {
          "name": "Elevators",
          "value": 0.0
        },
        {
          "name": "Water Systems",
          "value": 11.7
        }
      ]
    }
  },
  "RC-MR2": {
    "1": {
      "total": 120.1,
      "breakdown": [
        {
          "name": "Heating",
          "value": 51.2
        },
        {
          "name": "Cooling",
          "value": 9.3
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    },
    "4": {
      "total": 77.0,
      "breakdown": [
        {
          "name": "Heating",
          "value": 14.6
        },
        {
          "name": "Cooling",
          "value": 2.6
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    },
    "3.5": {
      "total": 77.0,
      "breakdown": [
        {
          "name": "Heating",
          "value": 14.6
        },
        {
          "name": "Cooling",
          "value": 2.6
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    },
    "3": {
      "total": 79.8,
      "breakdown": [
        {
          "name": "Heating",
          "value": 17.1
        },
        {
          "name": "Cooling",
          "value": 3.1
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    }
  },
  "RC-MR3": {
    "1": {
      "total": 122.5,
      "breakdown": [
        {
          "name": "Heating",
          "value": 52.8
        },
        {
          "name": "Cooling",
          "value": 10.0
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    },
    "4": {
      "total": 75.4,
      "breakdown": [
        {
          "name": "Heating",
          "value": 13.2
        },
        {
          "name": "Cooling",
          "value": 2.5
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    },
    "3.5": {
      "total": 77.7,
      "breakdown": [
        {
          "name": "Heating",
          "value": 15.1
        },
        {
          "name": "Cooling",
          "value": 2.9
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    },
    "3": {
      "total": 80.6,
      "breakdown": [
        {
          "name": "Heating",
          "value": 17.6
        },
        {
          "name": "Cooling",
          "value": 3.3
        },
        {
          "name": "Interior Lighting",
          "value": 4.4
        },
        {
          "name": "Exterior Lighting",
          "value": 2.0
        },
        {
          "name": "Electric Equipment",
          "value": 34.4
        },
        {
          "name": "Elevators",
          "value": 3.0
        },
        {
          "name": "Water Systems",
          "value": 15.9
        }
      ]
    }
  },
  "RC-HR2": {
    "1": {
      "total": 154.3,
      "breakdown": [
        {
          "name": "Heating",
          "value": 72.3
        },
        {
          "name": "Cooling",
          "value": 23.1
        },
        {
          "name": "Interior Lighting",
          "value": 2.0
        },
        {
          "name": "Exterior Lighting",
          "value": 3.4
        },
        {
          "name": "Electric Equipment",
          "value": 34.5
        },
        {
          "name": "Elevators",
          "value": 2.9
        },
        {
          "name": "Water Systems",
          "value": 16.2
        }
      ]
    },
    "4": {
      "total": 82.8,
      "breakdown": [
        {
          "name": "Heating",
          "value": 18.1
        },
        {
          "name": "Cooling",
          "value": 5.8
        },
        {
          "name": "Interior Lighting",
          "value": 2.0
        },
        {
          "name": "Exterior Lighting",
          "value": 3.4
        },
        {
          "name": "Electric Equipment",
          "value": 34.5
        },
        {
          "name": "Elevators",
          "value": 2.9
        },
        {
          "name": "Water Systems",
          "value": 16.2
        }
      ]
    },
    "3.5": {
      "total": 86.2,
      "breakdown": [
        {
          "name": "Heating",
          "value": 20.7
        },
        {
          "name": "Cooling",
          "value": 6.6
        },
        {
          "name": "Interior Lighting",
          "value": 2.0
        },
        {
          "name": "Exterior Lighting",
          "value": 3.4
        },
        {
          "name": "Electric Equipment",
          "value": 34.5
        },
        {
          "name": "Elevators",
          "value": 2.9
        },
        {
          "name": "Water Systems",
          "value": 16.2
        }
      ]
    },
    "3": {
      "total": 90.7,
      "breakdown": [
        {
          "name": "Heating",
          "value": 24.1
        },
        {
          "name": "Cooling",
          "value": 7.7
        },
        {
          "name": "Interior Lighting",
          "value": 2.0
        },
        {
          "name": "Exterior Lighting",
          "value": 3.4
        },
        {
          "name": "Electric Equipment",
          "value": 34.5
        },
        {
          "name": "Elevators",
          "value": 2.9
        },
        {
          "name": "Water Systems",
          "value": 16.2
        }
      ]
    }
  }
};

  /*
  "RC-HR2": {
    total: 65.885,
    breakdown: [
      { name: "Heating", value: 21.189 },
      { name: "Cooling", value: 1.044 },
      { name: "Interior Lighting", value: 5.578 },
      { name: "Electric Equipment", value: 17.815 },
      { name: "Exterior Lighting", value: 0 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0.829 },
      { name: "Water Systems", value: 9.339 },
      { name: "Fans", value: 10.091 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC7": {
    total: 118.146,
    breakdown: [
      { name: "Heating", value: 53.07 },
      { name: "Cooling", value: 5.929 },
      { name: "Interior Lighting", value: 6.947 },
      { name: "Electric Equipment", value: 22.809 },
      { name: "Exterior Lighting", value: 0.943 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 1.151 },
      { name: "Water Systems", value: 19.033 },
      { name: "Fans", value: 6.701 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 1.318 },
      { name: "Heat Rejection", value: 0.245 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC8": {
    total: 150.122,
    breakdown: [
      { name: "Heating", value: 73.008 },
      { name: "Cooling", value: 9.612 },
      { name: "Interior Lighting", value: 7.269 },
      { name: "Electric Equipment", value: 27.197 },
      { name: "Exterior Lighting", value: 1.509 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 1.017 },
      { name: "Water Systems", value: 25.21 },
      { name: "Fans", value: 2.782 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 2.105 },
      { name: "Heat Rejection", value: 0.413 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU1": {
    total: 81.128,
    breakdown: [
      { name: "Heating", value: 20.837 },
      { name: "Cooling", value: 6.415 },
      { name: "Interior Lighting", value: 9.975 },
      { name: "Electric Equipment", value: 25.345 },
      { name: "Exterior Lighting", value: 0 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 2.657 },
      { name: "Water Systems", value: 8.869 },
      { name: "Fans", value: 5.228 },
      { name: "VAV Fans", value: 0.9 },
      { name: "Pump (Electric)", value: 0.888 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU2": {
    total: 93.491,
    breakdown: [
      { name: "Heating", value: 29.636 },
      { name: "Cooling", value: 5.217 },
      { name: "Interior Lighting", value: 10.608 },
      { name: "Electric Equipment", value: 19.924 },
      { name: "Exterior Lighting", value: 0.772 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 3.149 },
      { name: "Water Systems", value: 8.707 },
      { name: "Fans", value: 13.933 },
      { name: "VAV Fans", value: 0.804 },
      { name: "Pump (Electric)", value: 0.743 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU3": {
    total: 212.067,
    breakdown: [
      { name: "Heating", value: 86.894 },
      { name: "Cooling", value: 19.656 },
      { name: "Interior Lighting", value: 24.13 },
      { name: "Electric Equipment", value: 49.396 },
      { name: "Exterior Lighting", value: 3.488 },
      { name: "Equipment (Gas)", value: 3.725 },
      { name: "Elevators", value: 1.854 },
      { name: "Water Systems", value: 13.06 },
      { name: "Fans", value: 2.783 },
      { name: "VAV Fans", value: 2.92 },
      { name: "Pump (Electric)", value: 3.171 },
      { name: "Heat Rejection", value: 0.362 },
      { name: "FCU Fans", value: 0.347 }
    ]
  },
  "MU4": {
    total: 224.431,
    breakdown: [
      { name: "Heating", value: 52.159 },
      { name: "Cooling", value: 49.29 },
      { name: "Interior Lighting", value: 24.344 },
      { name: "Electric Equipment", value: 50.901 },
      { name: "Exterior Lighting", value: 0.878 },
      { name: "Equipment (Gas)", value: 8.05 },
      { name: "Elevators", value: 2.513 },
      { name: "Water Systems", value: 10.176 },
      { name: "Fans", value: 25.814 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.304 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU3/L": {
    total: 211.438,
    breakdown: [
      { name: "Heating", value: 68.167 },
      { name: "Cooling", value: 12.476 },
      { name: "Interior Lighting", value: 11.836 },
      { name: "Electric Equipment", value: 47.119 },
      { name: "Exterior Lighting", value: 3.277 },
      { name: "Equipment (Gas)", value: 29.016 },
      { name: "Elevators", value: 0.858 },
      { name: "Water Systems", value: 28.877 },
      { name: "Fans", value: 7.705 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 1.778 },
      { name: "Heat Rejection", value: 0.328 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CR": {
    total: 94.31,
    breakdown: [
      { name: "Heating", value: 18.681 },
      { name: "Cooling", value: 5.177 },
      { name: "Interior Lighting", value: 8.94 },
      { name: "Electric Equipment", value: 32.47 },
      { name: "Exterior Lighting", value: 1.391 },
      { name: "Equipment (Gas)", value: 8.83 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 10.842 },
      { name: "Fans", value: 7.98 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CR/I V1": {
    total: 93.386,
    breakdown: [
      { name: "Heating", value: 18.443 },
      { name: "Cooling", value: 4.681 },
      { name: "Interior Lighting", value: 24.022 },
      { name: "Electric Equipment", value: 16.918 },
      { name: "Exterior Lighting", value: 2.115 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 16.462 },
      { name: "Water Systems", value: 5.727 },
      { name: "Fans", value: 3.763 },
      { name: "VAV Fans", value: 0.631 },
      { name: "Pump (Electric)", value: 0.614 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CR/I V2": {
    total: 126.769,
    breakdown: [
      { name: "Heating", value: 20.348 },
      { name: "Cooling", value: 7.857 },
      { name: "Interior Lighting", value: 34.139 },
      { name: "Electric Equipment", value: 24.642 },
      { name: "Exterior Lighting", value: 1.43 },
      { name: "Equipment (Gas)", value: 3.015 },
      { name: "Elevators", value: 22.601 },
      { name: "Water Systems", value: 4.486 },
      { name: "Fans", value: 7.088 },
      { name: "VAV Fans", value: 0.596 },
      { name: "Pump (Electric)", value: 0.554 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU-S": {
    total: 178.367,
    breakdown: [
      { name: "Heating", value: 22.846 },
      { name: "Cooling", value: 10.234 },
      { name: "Interior Lighting", value: 37.423 },
      { name: "Electric Equipment", value: 45.37 },
      { name: "Exterior Lighting", value: 2.047 },
      { name: "Equipment (Gas)", value: 21.404 },
      { name: "Elevators", value: 20.972 },
      { name: "Water Systems", value: 9.032 },
      { name: "Fans", value: 9.015 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU-P V1": {
    total: 227.162,
    breakdown: [
      { name: "Heating", value: 55.548 },
      { name: "Cooling", value: 42.761 },
      { name: "Interior Lighting", value: 25.423 },
      { name: "Electric Equipment", value: 48.716 },
      { name: "Exterior Lighting", value: 1.489 },
      { name: "Equipment (Gas)", value: 12.082 },
      { name: "Elevators", value: 5.664 },
      { name: "Water Systems", value: 13.276 },
      { name: "Fans", value: 21.263 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.829 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0.107 }
    ]
  },
  "MU-P V2": {
    total: 239.391,
    breakdown: [
      { name: "Heating", value: 63.876 },
      { name: "Cooling", value: 22.836 },
      { name: "Interior Lighting", value: 15.172 },
      { name: "Electric Equipment", value: 94.5 },
      { name: "Exterior Lighting", value: 3.487 },
      { name: "Equipment (Gas)", value: 6.713 },
      { name: "Elevators", value: 2 },
      { name: "Water Systems", value: 15.655 },
      { name: "Fans", value: 2.74 },
      { name: "VAV Fans", value: 6.368 },
      { name: "Pump (Electric)", value: 5.72 },
      { name: "Heat Rejection", value: 0.134 },
      { name: "FCU Fans", value: 0.181 }
    ]
  },
  "MU-S/L": {
    total: 173.754,
    breakdown: [
      { name: "Heating", value: 17.224 },
      { name: "Cooling", value: 9.062 },
      { name: "Interior Lighting", value: 38.037 },
      { name: "Electric Equipment", value: 45.967 },
      { name: "Exterior Lighting", value: 2.433 },
      { name: "Equipment (Gas)", value: 20.009 },
      { name: "Elevators", value: 27.299 },
      { name: "Water Systems", value: 5.488 },
      { name: "Fans", value: 8.211 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.006 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU-P V2/L": {
    total: 166.368,
    breakdown: [
      { name: "Heating", value: 64.636 },
      { name: "Cooling", value: 11.793 },
      { name: "Interior Lighting", value: 14.562 },
      { name: "Electric Equipment", value: 52.918 },
      { name: "Exterior Lighting", value: 2.795 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0.399 },
      { name: "Water Systems", value: 11.614 },
      { name: "Fans", value: 1.788 },
      { name: "VAV Fans", value: 3.284 },
      { name: "Pump (Electric)", value: 2.426 },
      { name: "Heat Rejection", value: 0.153 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CC1": {
    total: 180.704,
    breakdown: [
      { name: "Heating", value: 24.071 },
      { name: "Cooling", value: 15.574 },
      { name: "Interior Lighting", value: 30.702 },
      { name: "Electric Equipment", value: 65.436 },
      { name: "Exterior Lighting", value: 5.837 },
      { name: "Equipment (Gas)", value: 18.003 },
  
  
      { name: "Elevators", value: 0.612 },
  { name: "Water Systems", value: 3.904 },
  { name: "Fans", value: 16.556 },
  { name: "VAV Fans", value: 0 },
  { name: "Pump (Electric)", value: 0.007 },
  { name: "Heat Rejection", value: 0 },
  { name: "FCU Fans", value: 0 }
    ]
  },
  "CC2": {
  total: 231.41,
    breakdown: [
      { name: "Heating", value: 78.557 },
      { name: "Cooling", value: 21.846 },
      { name: "Interior Lighting", value: 22.203 },
      { name: "Electric Equipment", value: 73.528 },
      { name: "Exterior Lighting", value: 3.98 },
      { name: "Equipment (Gas)", value: 4.618 },
      { name: "Elevators", value: 2.326 },
      { name: "Water Systems", value: 9.211 },
      { name: "Fans", value: 2.429 },
      { name: "VAV Fans", value: 6.688 },
      { name: "Pump (Electric)", value: 5.699 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0.211 }
    ]
  },
  "CC1/L": {
  total: 194.366,
    breakdown: [
      { name: "Heating", value: 31.089 },
      { name: "Cooling", value: 14.793 },
      { name: "Interior Lighting", value: 27.742 },
      { name: "Electric Equipment", value: 69.005 },
      { name: "Exterior Lighting", value: 7.119 },
      { name: "Equipment (Gas)", value: 19.376 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 4.043 },
      { name: "Fans", value: 21.189 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.011 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "IND-LOW": {
  total: 56.179,
    breakdown: [
      { name: "Heating", value: 10.378 },
      { name: "Cooling", value: 2.177 },
      { name: "Interior Lighting", value: 17.974 },
      { name: "Electric Equipment", value: 16.423 },
      { name: "Exterior Lighting", value: 4.305 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 0.332 },
      { name: "Fans", value: 4.59 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  }
    */

const ENERGY_STATUS_IMAGES = {
  "Positive": "Content/Images_EnergyStatus/Positive.png",
  "Neutral": "Content/Images_EnergyStatus/Neutral.png",
  "Negative": "Content/Images_EnergyStatus/Negative.png"
};

// EV & V2G data per neighbourhood, derived from Templates/NUS_EV.csv
const EV_V2G_DATA = {
  "RC-R": {
    "EV1": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      numHouseholds: 24,
      totalFloorArea: 5280,
      totalEvEnergyDemand: 600,
      storageLoss: 30,
      v2gPowerAvailable: null,
      netEnergyBalance_kWh: 630,
      netEnergyBalance_kWh_m2: 0.12,
      systemStatusIndicator: "Grid Stressed - Deficit"
    },
    "EV2": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      v2gParticipationRate: "50%",
      batteryEfficiency: "90%",
      dischargeCapacity: "10 kW / day",
      numHouseholds: 24,
      totalFloorArea: 5280,
      totalEvEnergyDemand: 600,
      storageLoss: 30,
      v2gPowerAvailable: 180,
      netEnergyBalance_kWh: 450,
      netEnergyBalance_kWh_m2: 0.09,
      systemStatusIndicator: "Grid Stressed - Deficit"
    }
  },
  "RC-D": {
    "EV1": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      numHouseholds: 48,
      totalFloorArea: 10560,
      totalEvEnergyDemand: 1200,
      storageLoss: 60,
      v2gPowerAvailable: null,
      netEnergyBalance_kWh: 1260,
      netEnergyBalance_kWh_m2: 0.12,
      systemStatusIndicator: "Grid Stressed - Deficit"
    },
    "EV2": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      v2gParticipationRate: "50%",
      batteryEfficiency: "90%",
      dischargeCapacity: "10 kW / day",
      numHouseholds: 48,
      totalFloorArea: 10560,
      totalEvEnergyDemand: 1200,
      storageLoss: 60,
      v2gPowerAvailable: 360,
      netEnergyBalance_kWh: 900,
      netEnergyBalance_kWh_m2: 0.09,
      systemStatusIndicator: "Grid Stressed - Deficit"
    }
  },
  "RC-T": {
    "EV1": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      numHouseholds: 56,
      totalFloorArea: 10080,
      totalEvEnergyDemand: 1400,
      storageLoss: 70,
      v2gPowerAvailable: null,
      netEnergyBalance_kWh: 1470,
      netEnergyBalance_kWh_m2: 0.15,
      systemStatusIndicator: "Grid Stressed - Deficit"
    },
    "EV2": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      v2gParticipationRate: "50%",
      batteryEfficiency: "90%",
      dischargeCapacity: "10 kW / day",
      numHouseholds: 56,
      totalFloorArea: 10080,
      totalEvEnergyDemand: 1400,
      storageLoss: 70,
      v2gPowerAvailable: 420,
      netEnergyBalance_kWh: 1050,
      netEnergyBalance_kWh_m2: 0.10,
      systemStatusIndicator: "Grid Stressed - Deficit"
    }
  },
  "RC-MR2": {
    "EV1": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      numHouseholds: 256,
      totalFloorArea: 25080,
      totalEvEnergyDemand: 6720,
      storageLoss: 320,
      v2gPowerAvailable: null,
      netEnergyBalance_kWh: 7040,
      netEnergyBalance_kWh_m2: 0.28,
      systemStatusIndicator: "Grid Stressed - Deficit"
    },
    "EV2": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      v2gParticipationRate: "50%",
      batteryEfficiency: "90%",
      dischargeCapacity: "10 kW / day",
      numHouseholds: 256,
      totalFloorArea: 25080,
      totalEvEnergyDemand: 6720,
      storageLoss: 320,
      v2gPowerAvailable: 1920,
      netEnergyBalance_kWh: 5120,
      netEnergyBalance_kWh_m2: 0.20,
      systemStatusIndicator: "Grid Stressed - Deficit"
    }
  },
  "RC-MR3": {
    "EV1": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      numHouseholds: 384,
      totalFloorArea: 37620,
      totalEvEnergyDemand: 10080,
      storageLoss: 480,
      v2gPowerAvailable: null,
      netEnergyBalance_kWh: 10560,
      netEnergyBalance_kWh_m2: 0.28,
      systemStatusIndicator: "Grid Stressed - Deficit"
    },
    "EV2": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      v2gParticipationRate: "50%",
      batteryEfficiency: "90%",
      dischargeCapacity: "10 kW / day",
      numHouseholds: 384,
      totalFloorArea: 37620,
      totalEvEnergyDemand: 10080,
      storageLoss: 480,
      v2gPowerAvailable: 2880,
      netEnergyBalance_kWh: 7680,
      netEnergyBalance_kWh_m2: 0.20,
      systemStatusIndicator: "Grid Stressed - Deficit"
    }
  },
  "RC-HR2": {
    "EV1": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      numHouseholds: 640,
      totalFloorArea: 94050,
      totalEvEnergyDemand: 16800,
      storageLoss: 800,
      v2gPowerAvailable: null,
      netEnergyBalance_kWh: 17600,
      netEnergyBalance_kWh_m2: 0.19,
      systemStatusIndicator: "Grid Stressed - Deficit"
    },
    "EV2": {
      evPenetrationRate: "1.5 EVs / household",
      dailyEnergyDemand: "15 kWh / EV",
      chargingEfficiency: "90%",
      v2gParticipationRate: "50%",
      batteryEfficiency: "90%",
      dischargeCapacity: "10 kW / day",
      numHouseholds: 640,
      totalFloorArea: 94050,
      totalEvEnergyDemand: 16800,
      storageLoss: 800,
      v2gPowerAvailable: 4800,
      netEnergyBalance_kWh: 12800,
      netEnergyBalance_kWh_m2: 0.14,
      systemStatusIndicator: "Grid Stressed - Deficit"
    }
  }
};

// LPV (Land-PV) data derived from Templates/NUs_LPV.csv
const LPV_DATA = {
  columns: ["RC-R", "RC-D", "RC-T", "RC-MR2", "RC-MR3", "RC-HR2"],
  rows: [
    {
      category: "Config.",
      label: "Land Allocation",
      values: { "RC-R": "20% (4046 m²)", "RC-D": "20% (4046 m²)", "RC-T": "20% (4046 m²)", "RC-MR2": "20% (4046 m²)", "RC-MR3": "20% (4046 m²)", "RC-HR2": "20% (4046 m²)" }
    },
    {
      category: "Config.",
      label: "Usable Area",
      values: { "RC-R": "10% (2023 m²)", "RC-D": "10% (2023 m²)", "RC-T": "10% (2023 m²)", "RC-MR2": "10% (2023 m²)", "RC-MR3": "10% (2023 m²)", "RC-HR2": "10% (2023 m²)" }
    },
    {
      category: "Config.",
      label: "Module Capacity",
      values: { "RC-R": "400W", "RC-D": "400W", "RC-T": "400W", "RC-MR2": "400W", "RC-MR3": "400W", "RC-HR2": "400W" }
    },
    {
      category: "Config.",
      label: "Installed Capacity (kWp)",
      values: { "RC-R": "475 kWp", "RC-D": "475 kWp", "RC-T": "475 kWp", "RC-MR2": "475 kWp", "RC-MR3": "475 kWp", "RC-HR2": "475 kWp" }
    },
    {
      category: "Results",
      label: "Energy Generation",
      values: { "RC-R": "608 MWh/year", "RC-D": "608 MWh/year", "RC-T": "608 MWh/year", "RC-MR2": "608 MWh/year", "RC-MR3": "608 MWh/year", "RC-HR2": "608 MWh/year" }
    }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONCEPTS, NEIGHBOURHOODS, BUILDING_IMAGES, ENERGY_COLORS, ENVELOPE_ENERGY_DATA, getEnergyData, ENERGY_STATUS_IMAGES, EV_V2G_DATA, LPV_DATA, PV_GENERATION_DATA };
}
