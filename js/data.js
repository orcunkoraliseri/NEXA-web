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
    "code": "RC-R",
    "conceptId": 9,
    "usage": "residential",
    "context": "suburban",
    "density": "low",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "24x Detached Houses (2-St, Residential, 110sqm)",
    "image": "Content/Images_Neighbourhoods/rc-r.png",
    "buildings": [
      "Detached Houses"
    ]
  },
  {
    "code": "RC-D",
    "conceptId": 7,
    "usage": "residential",
    "context": "suburban",
    "density": "low",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "48x Detached Houses (2-St, Residential, 110sqm)",
    "image": "Content/Images_Neighbourhoods/rc-d.png",
    "buildings": [
      "Detached Houses"
    ]
  },
  {
    "code": "RC-ML",
    "conceptId": 7,
    "usage": "residential",
    "context": "suburban",
    "density": "medium",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "24x Detached Houses (2-St, Residential, 110sqm) + 28x Attached Houses (2-St, Residential, 180sqm)",
    "image": "Content/Images_Neighbourhoods/rc-ml.png",
    "buildings": [
      "Attached Houses",
      "Detached Houses"
    ]
  },
  {
    "code": "RC-T",
    "conceptId": 7,
    "usage": "residential",
    "context": "suburban",
    "density": "medium",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "56x Attached Houses (2-St, Residential, 180sqm)",
    "image": "Content/Images_Neighbourhoods/rc-t.png",
    "buildings": [
      "Attached Houses"
    ]
  },
  {
    "code": "RC-MR1",
    "conceptId": 6,
    "usage": "residential",
    "context": "suburban",
    "density": "medium",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4x Mid-Rise (4-St, Residential, 784sqm) + 28x Attached Houses (2-St, Residential, 180sqm)",
    "image": "Content/Images_Neighbourhoods/rc-mr1.png",
    "buildings": [
      "Attached Houses",
      "Mid Rise"
    ]
  },
  {
    "code": "RC-MR2",
    "conceptId": 6,
    "usage": "residential",
    "context": "suburban",
    "density": "high",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "8x Mid-Rise (4-St, Residential, 784sqm)",
    "image": "Content/Images_Neighbourhoods/rc-mr2.png",
    "buildings": [
      "Mid Rise"
    ]
  },
  {
    "code": "RC-MR3",
    "conceptId": 3,
    "usage": "residential",
    "context": "urban",
    "density": "high",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "12x Midrise (4-St, Residential, 784sqm)",
    "image": "Content/Images_Neighbourhoods/rc-mr3.png",
    "buildings": [
      "Midrise"
    ]
  },
  {
    "code": "RC-HR1",
    "conceptId": 4,
    "usage": "residential",
    "context": "urban",
    "density": "high",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "2x High-Rise (10-St, Residential, 784sqm) + 4x Mid-Rise (4-St, Residential, 784sqm)",
    "image": "Content/Images_Neighbourhoods/rc-hr1.png",
    "buildings": [
      "High Rise",
      "Mid Rise"
    ]
  },
  {
    "code": "RC-HR2",
    "conceptId": 2,
    "usage": "residential",
    "context": "urban",
    "density": "high",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4x High-Rise (10-St, Residential, 784sqm)",
    "image": "Content/Images_Neighbourhoods/rc-hr2.png",
    "buildings": [
      "High Rise"
    ]
  },
  {
    "code": "RS-S",
    "conceptId": 7,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "low",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "12x Detached Houses (2-St, Residential, 110sqm) + 28x Attached Houses (2-St, Residential, 180sqm) + 1x Small Office (1-St, Commercial, 511sqm) + 1x Small Retail (1-St, Commercial, 390sqm) + 1x QSR (1-St, Commercial, 232sqm) + 1x FSR (1-St, Commercial, 511sqm)",
    "image": "Content/Images_Neighbourhoods/RS-S.png",
    "buildings": [
      "Detached Houses",
      "Full Service Restaurant",
      "Small Retail",
      "Small Office",
      "Attached Houses",
      "Quick Service Restaurant"
    ]
  },
  {
    "code": "RS-I1",
    "conceptId": 5,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "medium",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "14x Attached Houses (2-St, Residential, 180sqm) + 3x Mid-Rise (4-St, Residential, 784sqm) + 1x Primary School (1-St, Institutional, 6871sqm) + 1x Small Office (1-St, Commercial, 511sqm) + 1x QSR (1-St, Commercial, 232sqm) + 1x FSR (1-St, Commercial, 511sqm)",
    "image": "Content/Images_Neighbourhoods/RS-I1.png",
    "buildings": [
      "Primary School",
      "Full Service Restaurant",
      "Small Office",
      "Attached Houses",
      "Quick Service Restaurant",
      "Mid Rise"
    ]
  },
  {
    "code": "RS-I2",
    "conceptId": 5,
    "usage": "mixed-use",
    "context": "urban",
    "density": "medium",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "5x Mid-Rise (4-St, Residential, 784sqm) + 1x Secondary School (2-St, Institutional, 5553sqm) + 1x Medium Office (3-St, Commercial, 1661sqm) + 1x Small Office (1-St, Commercial, 511sqm) + 1x Small Retail (1-St, Commercial, 390sqm) + 1x QSR (1-St, Commercial, 232sqm) + 1x FSR (1-St, Commercial, 511sqm)",
    "image": "Content/Images_Neighbourhoods/RS-I2.png",
    "buildings": [
      "Secondary School",
      "Full Service Restaurant",
      "Small Retail",
      "Medium Office",
      "Small Office",
      "Quick Service Restaurant",
      "Mid Rise"
    ]
  },
  {
    "code": "RS-I3",
    "conceptId": 7,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "low",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "28x Attached Houses (2-St, Residential, 180sqm) + 1x Primary School (1-St, Institutional, 6871sqm) + 1x Small Retail (1-St, Commercial, 390sqm) + 1x QSR (1-St, Commercial, 232sqm)",
    "image": "Content/Images_Neighbourhoods/RS-I3.png",
    "buildings": [
      "Attached Houses",
      "Small Retail",
      "Primary School",
      "Quick Service Restaurant"
    ]
  },
  {
    "code": "RS-I4",
    "conceptId": 5,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "medium",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "5x Mid-Rise (4-St, Residential, 784sqm) + 1x Secondary School (2-St, Institutional, 5553sqm) + 1x QSR (1-St, Commercial, 232sqm) + 1x Small Retail (1-St, Commercial, 390sqm)",
    "image": "Content/Images_Neighbourhoods/RS-I4.png",
    "buildings": [
      "Secondary School",
      "Small Retail",
      "Mid Rise",
      "Quick Service Restaurant"
    ]
  },
  {
    "code": "MU-C1",
    "conceptId": 2,
    "usage": "mixed-use",
    "context": "urban",
    "density": "high",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4x High-Rise (15-St, Residential, 784sqm) + 1x Medium Office (3-St, Commercial, 1661sqm) + 2x QSR (1-St, Commercial, 232sqm) + 2x FSR (1-St, Commercial, 511sqm) + 1x Small Hotel (4-St, Commercial, 1003sqm) + 1x Hospital (6-St, Commercial, 3739sqm) + 1x Small Retail (1-St, Commercial, 390sqm)",
    "image": "Content/Images_Neighbourhoods/MU-C1.png",
    "buildings": [
      "Hospital",
      "Full Service Restaurant",
      "Small Hotel",
      "High Rise",
      "Small Retail",
      "Medium Office",
      "Quick Service Restaurant"
    ]
  },
  {
    "code": "MU-C2",
    "conceptId": 2,
    "usage": "mixed-use",
    "context": "urban",
    "density": "high",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4x High-Rise (20-St, Residential, 784sqm) + 1x Large Office (10-St, Commercial, 3563sqm) + 1x Large Hotel (6-St, Commercial, 1979sqm) + 1x Standalone Retail (1-St, Commercial, 2294sqm) + 2x QSR (1-St, Commercial, 232sqm) + 2x FSR (1-St, Commercial, 511sqm)",
    "image": "Content/Images_Neighbourhoods/MU-C2.png",
    "buildings": [
      "Full Service Restaurant",
      "Standalone Retail",
      "High Rise",
      "Large Office",
      "Quick Service Restaurant",
      "Large Hotel"
    ]
  },
  {
    "code": "MU-U1",
    "conceptId": 4,
    "usage": "mixed-use",
    "context": "urban",
    "density": "high",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4x High-Rise (20-St, Residential, 784sqm) + 1x Large Office (10-St, Commercial, 3563sqm) + 1x Standalone Retail (1-St, Commercial, 2294sqm) + 2x QSR (1-St, Commercial, 232sqm)",
    "image": "Content/Images_Neighbourhoods/MU-U1.png",
    "buildings": [
      "High Rise",
      "Quick Service Restaurant",
      "Large Office",
      "Standalone Retail"
    ]
  },
  {
    "code": "MU-L",
    "conceptId": 3,
    "usage": "mixed-use",
    "context": "urban",
    "density": "medium",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4x Mid-Rise (4-St, Residential, 784sqm) + 4x Small Office (1-St, Commercial, 511sqm) + 2x Small Retail (1-St, Commercial, 390sqm) + 2x QSR (1-St, Commercial, 232sqm)",
    "image": "Content/Images_Neighbourhoods/MU-L.png",
    "buildings": [
      "Small Retail",
      "Small Office",
      "Mid Rise",
      "Quick Service Restaurant"
    ]
  },
  {
    "code": "MU-S1",
    "conceptId": 6,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "medium",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "5x Mid-Rise (4-St, Residential, 784sqm) + 1x Medium Office (3-St, Commercial, 1661sqm) + 2x QSR (1-St, Commercial, 232sqm) + 2x FSR (1-St, Commercial, 511sqm) + 1x Small Hotel (4-St, Commercial, 1003sqm) + 1x Standalone Retail (1-St, Commercial, 2294sqm) + 1x Supermarket (1-St, Commercial, 2090sqm)",
    "image": "Content/Images_Neighbourhoods/MU-S1.png",
    "buildings": [
      "Full Service Restaurant",
      "Standalone Retail",
      "Small Hotel",
      "Medium Office",
      "Quick Service Restaurant",
      "Mid Rise",
      "Supermarket"
    ]
  },
  {
    "code": "MU-S2",
    "conceptId": 6,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "medium",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "5x Mid-Rise (4-St, Residential, 784sqm) + 1x Standalone Retail (1-St, Commercial, 2294sqm) + 1x Supermarket (1-St, Commercial, 2090sqm) + 2x QSR (1-St, Commercial, 232sqm)",
    "image": "Content/Images_Neighbourhoods/MU-S2.png",
    "buildings": [
      "Quick Service Restaurant",
      "Mid Rise",
      "Standalone Retail",
      "Supermarket"
    ]
  },
  {
    "code": "MU-W",
    "conceptId": 5,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "medium",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "2x Mid-Rise (4-St, Residential, 784sqm) + 1x Warehouse (Eg, Industrial) (1-St, Industrial, 4598sqm) + 2x QSR (1-St, Commercial, 232sqm) + 1x Small Office (1-St, Commercial, 511sqm) + 1x Small Retail (1-St, Commercial, 390sqm)",
    "image": "Content/Images_Neighbourhoods/MU-W.png",
    "buildings": [
      "Small Retail",
      "Small Office",
      "Quick Service Restaurant",
      "Mid Rise",
      "Warehouse"
    ]
  },
  {
    "code": "MU-W2",
    "conceptId": 5,
    "usage": "mixed-use",
    "context": "suburban",
    "density": "medium",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4x Small Warehouse (Eg, Industrial) (1-St, Industrial, 4598sqm) + 2x QSR (1-St, Commercial, 232sqm) + 4x Small Office (1-St, Commercial, 511sqm) + 2x Small Retail (1-St, Commercial, 390sqm)",
    "image": "Content/Images_Neighbourhoods/MU-W2.png",
    "buildings": [
      "Quick Service Restaurant",
      "Small Warehouse",
      "Small Office",
      "Small Retail"
    ]
  },
  {
    "code": "MU-HS",
    "conceptId": 6,
    "usage": "mixed-use",
    "context": "rural",
    "density": "medium",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "3\u00d7 Mid-Rise Apartment (4-St, Residential, 784 sqm/fl) + 14\u00d7 Attached House (2-St, Residential, 7 units/row, 190 sqm/unit) + 1\u00d7 Outpatient Health Care (3-St, Commercial, 1268 sqm/fl) + 1\u00d7 Small Office (1-St, Commercial, 511 sqm) + 1\u00d7 QSR (1-St, Commercial, 232 sqm) + 1\u00d7 FSR (1-St, Commercial, 511 sqm) + 2\u00d7 Small Retail (1-St, Commercial, 390 sqm)",
    "image": "Content/Images_Neighbourhoods/MU-HS.png",
    "buildings": [
      "Outpatient Health Care",
      "Mid Rise Apartment",
      "Attached House",
      "Full Service Restaurant",
      "Small Retail",
      "Small Office",
      "Quick Service Restaurant"
    ]
  },
  {
    "code": "MU-HC",
    "conceptId": 6,
    "usage": "mixed-use",
    "context": "rural",
    "density": "medium",
    "layout": "curvilinear",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "2\u00d7 High-Rise Apartment (10-St, Residential, 784 sqm/fl) + 2\u00d7 Mid-Rise Apartment (4-St, Residential, 784 sqm/fl)+ 1\u00d7 Outpatient Health Care (3-St, Commercial, 1268 sqm/fl) + 1\u00d7 Medium Office (3-St, Commercial, 1661 sqm/fl) + 2\u00d7 QSR (1-St, Commercial, 232 sqm) + 1\u00d7 FSR (1-St, Commercial, 511 sqm) + 1\u00d7 Small Hotel (4-St, Commercial, 1003 sqm/fl) + 1\u00d7 Small Retail (1-St, Commercial, 390 sqm)",
    "image": "Content/Images_Neighbourhoods/MU-HC.png",
    "buildings": [
      "High Rise Apartment",
      "Outpatient Health Care",
      "Mid Rise Apartment",
      "Full Service Restaurant",
      "Small Hotel",
      "Small Retail",
      "Medium Office",
      "Quick Service Restaurant"
    ]
  },
  {
    "code": "CC-S1",
    "conceptId": 10,
    "usage": "commercial",
    "context": "suburban-edge",
    "density": "low",
    "layout": "superblock",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "1x Supermarket (1-St, Commercial, 2090sqm) + 1x Standalone Retail (1-St, Commercial, 2294sqm) + 2x Small Retail (1-St, Commercial, 390sqm) + 2x QSR (1-St, Commercial, 232sqm) + 1x FSR (1-St, Commercial, 511sqm) + 1x Small Office (1-St, Commercial, 511sqm) + 1x Medium Office (3-St, Commercial, 1661sqm)",
    "image": "Content/Images_Neighbourhoods/CC-S1.png",
    "buildings": [
      "Full Service Restaurant",
      "Standalone Retail",
      "Small Retail",
      "Small Office",
      "Medium Office",
      "Quick Service Restaurant",
      "Supermarket"
    ]
  },
  {
    "code": "CC-S2",
    "conceptId": 10,
    "usage": "commercial",
    "context": "suburban-edge",
    "density": "low",
    "layout": "superblock",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "1x Supermarket (1-St, Commercial, 2090sqm) + 1x Standalone Retail (1-St, Commercial, 2294sqm) + 2x Small Retail (1-St, Commercial, 390sqm) + 2x QSR (1-St, Commercial, 232sqm)",
    "image": "Content/Images_Neighbourhoods/CC-S2.png",
    "buildings": [
      "Small Retail",
      "Quick Service Restaurant",
      "Standalone Retail",
      "Supermarket"
    ]
  },
  {
    "code": "CC-B",
    "conceptId": 10,
    "usage": "commercial",
    "context": "suburban-edge",
    "density": "low",
    "layout": "superblock",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "1x Supermarket (1-St, Commercial, 2090sqm) + 1x Standalone Retail (1-St, Commercial, 2294sqm) + 1x Large Hotel (6-St, Commercial, 1979sqm) + 1x QSR (1-St, Commercial, 232sqm) + 1x FSR (1-St, Commercial, 511sqm) + 1x Large Office (10-St, Commercial, 3563sqm) + 1x Medium Office (3-St, Commercial, 1661sqm)",
    "image": "Content/Images_Neighbourhoods/CC-B.png",
    "buildings": [
      "Full Service Restaurant",
      "Standalone Retail",
      "Supermarket",
      "Medium Office",
      "Large Office",
      "Quick Service Restaurant",
      "Large Hotel"
    ]
  },
  {
    "code": "IC-DE",
    "conceptId": 11,
    "usage": "industrial",
    "context": "suburban-edge",
    "density": "low",
    "layout": "superblock",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "6x DataCenterLargeHighITE (1-St, Industrial, 4598 sqm)+ 1x Medium Office (2-St, Commercial, 1661 sqm/fl)+ 1x Warehouse (1-St, Industrial, 2302 sqm) + 2x QSR (1-St, Commercial, 232sqm)",
    "image": "Content/Images_Neighbourhoods/IC-DE.png",
    "buildings": [
      "Quick Service Restaurant",
      "Warehouse",
      "Medium Office",
      "Data Center Large<br>High ITE"
    ]
  },
  {
    "code": "IC-DC",
    "conceptId": 11,
    "usage": "industrial",
    "context": "suburban-edge",
    "density": "low",
    "layout": "superblock",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "6x DataCenterLargeLowITE (1-St, Industrial, 4598 sqm)+ 3x Small Office (1-St, Commercial, 511 sqm)+ 1x Warehouse (1-St, Industrial, 1131 sqm) + 1x QSR (1-St, Commercial, 232sqm)",
    "image": "Content/Images_Neighbourhoods/IC-DC.png",
    "buildings": [
      "Quick Service Restaurant",
      "Data Center Large<br>Low ITE",
      "Warehouse",
      "Small Office"
    ]
  },
  {
    "code": "CC-E1",
    "conceptId": 1,
    "usage": "commercial",
    "context": "urban",
    "density": "low",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "4\u00d7 College \u00b7 1\u00d7 Large Office \u00b7 1\u00d7 MidriseApartment \u00b7 1\u00d7 FSR \u00b7 2\u00d7 QSR + 1\u00d7 SmallDataCenterLowITE",
    "image": "Content/Images_Neighbourhoods/CC-E1.png",
    "buildings": [
      "College",
      "Full Service Restaurant",
      "Midrise Apartment",
      "Large Office",
      "Quick Service Restaurant",
      "Small Data Center<br>Low ITE"
    ]
  },
  {
    "code": "CC-E2",
    "conceptId": 3,
    "usage": "commercial",
    "context": "suburban",
    "density": "low",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "3\u00d7 College \u00b7 1\u00d7 Medium Office \u00b7 1\u00d7 Laboratory \u00b7 1\u00d7 MidriseApartment \u00b7 1\u00d7 Small Retail \u00b7 1\u00d7 FSR \u00b7 1\u00d7 QSR + 1\u00d7 SmallDataCenterLowITE",
    "image": "Content/Images_Neighbourhoods/CC-E2.png",
    "buildings": [
      "Quick Service Restaurant",
      "College",
      "Full Service Restaurant",
      "Midrise Apartment",
      "Small Retail",
      "Medium Office",
      "Laboratory",
      "Small Data Center<br>Low ITE"
    ]
  },
  {
    "code": "CC-E3",
    "conceptId": 10,
    "usage": "commercial",
    "context": "suburban-edge",
    "density": "low",
    "layout": "superblock",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "3\u00d7 College \u00b7 1\u00d7 Laboratory \u00b7 3\u00d7 MidriseApartment \u00b7 2\u00d7 Small Office \u00b7 1\u00d7 Outpatient \u00b7 1\u00d7 FSR \u00b7 1\u00d7 QSR + 1\u00d7 SmallDataCenterHighITE",
    "image": "Content/Images_Neighbourhoods/CC-E3.png",
    "buildings": [
      "Outpatient",
      "Quick Service Restaurant",
      "College",
      "Full Service Restaurant",
      "Midrise Apartment",
      "Small Data Center<br>High ITE",
      "Small Office",
      "Laboratory"
    ]
  },
  {
    "code": "CC-FD1",
    "conceptId": 1,
    "usage": "commercial",
    "context": "urban",
    "density": "low",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "1\u00d7 SuperTallBuilding + 1\u00d7 TallBuilding + 1\u00d7 HotelSmall + 1\u00d7 Supermarket + 2\u00d7 RestaurantSitDown + 2\u00d7 RestaurantFastFood + 1\u00d7 RetailStandalone",
    "image": "Content/Images_Neighbourhoods/CC-FD1.png",
    "buildings": [
      "Tall Building",
      "Full Service Restaurant",
      "Super Tall Building",
      "Retail Standalone",
      "Quick Service Restaurant",
      "Hotel Small",
      "Supermarket"
    ]
  },
  {
    "code": "CC-FD2",
    "conceptId": 1,
    "usage": "commercial",
    "context": "urban",
    "density": "low",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "1\u00d7 TallBuilding + 1\u00d7 OfficeLarge + 1\u00d7 HotelSmall + 1\u00d7 Supermarket + 2\u00d7 RestaurantSitDown + 2\u00d7 RestaurantFastFood + 2\u00d7 Small_Retail ",
    "image": "Content/Images_Neighbourhoods/CC-FD2.png",
    "buildings": [
      "Tall Building",
      "Office Large",
      "Full Service Restaurant",
      "Small Retail",
      "Quick Service Restaurant",
      "Hotel Small",
      "Supermarket"
    ]
  },
  {
    "code": "CC-FD3",
    "conceptId": 1,
    "usage": "commercial",
    "context": "urban",
    "density": "low",
    "layout": "grid",
    "envelope": [
      "necb-2017",
      "ashrae",
      "high-performance-necb",
      "high-performance-ashrae"
    ],
    "eui": null,
    "energyStatus": null,
    "content": "2\u00d7 TallBuilding + 2\u00d7 OfficeMedium +1\u00d7 HotelLarge + 1\u00d7 Supermarket + 21 RestaurantSitDown + 4\u00d7 RestaurantFastFood + 1\u00d7 RetailStripmall",
    "image": "Content/Images_Neighbourhoods/CC-FD3.png",
    "buildings": [
      "Tall Building",
      "Hotel Large",
      "Office Medium",
      "Full Service Restaurant",
      "Retail Strip Mall",
      "Quick Service Restaurant",
      "Supermarket"
    ]
  }
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
  "Warehouse": "Content/Images_Buildings/warehouse.png",
  "Detached Houses": "Content/Images_Buildings/two-story house.png",
  "Attached Houses": "Content/Images_Buildings/attached house.png",
  "Mid Rise": "Content/Images_Buildings/midrise apartment.png",
  "Midrise": "Content/Images_Buildings/midrise apartment.png",
  "High Rise": "Content/Images_Buildings/highrise apartment.png",
  "Small Warehouse": "Content/Images_Buildings/warehouse.png",
  "Outpatient Health Care": "Content/Images_Buildings/outpatient healthcare.png",
  "Mid Rise Apartment": "Content/Images_Buildings/midrise apartment.png",
  "High Rise Apartment": "Content/Images_Buildings/highrise apartment.png",
  "Data Center Large<br>High ITE": "Content/Images_Buildings/large datacenter.png",
  "Data Center Large<br>Low ITE": "Content/Images_Buildings/large datacenter.png",
  "College": "Content/Images_Buildings/college.png",
  "Small Data Center<br>Low ITE": "Content/Images_Buildings/small data center.png",
  "Laboratory": "Content/Images_Buildings/Laboratory.png",
  "Outpatient": "Content/Images_Buildings/outpatient healthcare.png",
  "Small Data Center<br>High ITE": "Content/Images_Buildings/small data center.png",
  "Super Tall Building": "Content/Images_Buildings/super tall building.png",
  "Tall Building": "Content/Images_Buildings/tall building.png",
  "Hotel Small": "Content/Images_Buildings/small hotel.png",
  "Retail Standalone": "Content/Images_Buildings/standalone retail.png",
  "Office Large": "Content/Images_Buildings/large office.png",
  "Office Medium": "Content/Images_Buildings/medium office.png",
  "Hotel Large": "Content/Images_Buildings/large hotel.png"
};

// PV parameters per neighbourhood (source: PV_generation.csv, EEM1 values)
const PV_GENERATION_DATA = {
  "RS-I1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 109.8,
    "rop": null
  },
  "RS-S": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 97.1,
    "rop": null
  },
  "RS-I2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 84.4,
    "rop": null
  },
  "RS-I3": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 137.0,
    "rop": null
  },
  "RS-I4": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 91.3,
    "rop": null
  },
  "IC-DC": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 163.5,
    "rop": null
  },
  "IC-DE": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 118.7,
    "rop": null
  },
  "MU-C1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 25.7,
    "rop": null
  },
  "MU-C2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 21.7,
    "rop": null
  },
  "MU-HC": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 47.1,
    "rop": null
  },
  "MU-HS": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 81.9,
    "rop": null
  },
  "MU-L": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 77.3,
    "rop": null
  },
  "MU-S1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 73.9,
    "rop": null
  },
  "MU-S2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 100.2,
    "rop": null
  },
  "MU-U1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 20.5,
    "rop": null
  },
  "MU-W": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 78.1,
    "rop": null
  },
  "MU-W2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 118.5,
    "rop": null
  },
  "CC-B": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 30.5,
    "rop": null
  },
  "CC-S1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 128.1,
    "rop": null
  },
  "CC-S2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 185.5,
    "rop": null
  },
  "CC-E1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 28.0,
    "rop": null
  },
  "CC-E2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 51.2,
    "rop": null
  },
  "CC-E3": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 54.4,
    "rop": null
  },
  "CC-FD1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 8.9,
    "rop": null
  },
  "CC-FD2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 15.5,
    "rop": null
  },
  "CC-FD3": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 13.2,
    "rop": null
  },
  "RC-MR1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 74.6,
    "rop": null
  },
  "RC-MR2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 66.8,
    "rop": null
  },
  "RC-MR3": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 66.8,
    "rop": null
  },
  "RC-D": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 100.7,
    "rop": null
  },
  "RC-ML": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 93.0,
    "rop": null
  },
  "RC-T": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 85.2,
    "rop": null
  },
  "RC-R": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 90.5,
    "rop": null
  },
  "RC-HR1": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 45.8,
    "rop": null
  },
  "RC-HR2": {
    "surface": "Roof",
    "efficiency": "18.68%",
    "gcr": "0.4",
    "mounting": "Fixed Open Rack",
    "generation": 28.8,
    "rop": null
  }
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
  "necb-2017": {
    "RS-I1": {
      "DEFAULT": {
        "total": 169.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 54.3
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 40.2
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 3.5
      },
      "EEM1": {
        "total": 148.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 40.0
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 109.8
      },
      "EEM2": {
        "total": 124.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.5
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 40.0
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.7
          }
        ],
        "pv": 109.8
      },
      "EEM3": {
        "total": 100.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.0
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 13.3
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.8
          }
        ],
        "pv": 109.8
      },
      "EEM4": {
        "total": 83.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.8
          },
          {
            "name": "Cooling",
            "value": 7.8
          },
          {
            "name": "DHW",
            "value": 13.3
          },
          {
            "name": "Lighting",
            "value": 3.6
          },
          {
            "name": "Equipment",
            "value": 32.8
          },
          {
            "name": "Fans & Pumps",
            "value": 8.9
          }
        ],
        "pv": 109.8
      },
      "IAL": {
        "total": 299.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 93.8
          },
          {
            "name": "Cooling",
            "value": 108.8
          },
          {
            "name": "DHW",
            "value": 40.3
          },
          {
            "name": "Lighting",
            "value": 8.3
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 109.8
      }
    },
    "RS-S": {
      "DEFAULT": {
        "total": 202.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 60.9
          },
          {
            "name": "Cooling",
            "value": 8.6
          },
          {
            "name": "DHW",
            "value": 37.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 182.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.1
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 97.1
      },
      "EEM2": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.7
          }
        ],
        "pv": 97.1
      },
      "EEM3": {
        "total": 130.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.8
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 9.8
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.8
          }
        ],
        "pv": 97.1
      },
      "EEM4": {
        "total": 107.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.5
          },
          {
            "name": "Cooling",
            "value": 6.4
          },
          {
            "name": "DHW",
            "value": 9.8
          },
          {
            "name": "Lighting",
            "value": 4.0
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 97.1
      },
      "IAL": {
        "total": 253.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 92.6
          },
          {
            "name": "Cooling",
            "value": 36.3
          },
          {
            "name": "DHW",
            "value": 37.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 1.1
          }
        ],
        "pv": 97.2
      }
    },
    "RS-I2": {
      "DEFAULT": {
        "total": 145.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 55.0
          },
          {
            "name": "Cooling",
            "value": 8.3
          },
          {
            "name": "DHW",
            "value": 31.2
          },
          {
            "name": "Lighting",
            "value": 9.4
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 6.2
      },
      "EEM1": {
        "total": 128.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.7
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 84.4
      },
      "EEM2": {
        "total": 100.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.5
          },
          {
            "name": "Cooling",
            "value": 8.0
          },
          {
            "name": "DHW",
            "value": 31.2
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 84.4
      },
      "EEM3": {
        "total": 82.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 7.8
          },
          {
            "name": "DHW",
            "value": 10.8
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 84.4
      },
      "EEM4": {
        "total": 64.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 6.0
          },
          {
            "name": "DHW",
            "value": 10.8
          },
          {
            "name": "Lighting",
            "value": 4.0
          },
          {
            "name": "Equipment",
            "value": 20.4
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 84.4
      },
      "IAL": {
        "total": 276.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 91.1
          },
          {
            "name": "Cooling",
            "value": 111.9
          },
          {
            "name": "DHW",
            "value": 31.2
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.4
          }
        ],
        "pv": 84.4
      }
    },
    "RS-I3": {
      "DEFAULT": {
        "total": 179.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 61.5
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 24.3
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 11.6
          }
        ],
        "pv": 6.1
      },
      "EEM1": {
        "total": 144.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.9
          },
          {
            "name": "Cooling",
            "value": 8.1
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 137.0
      },
      "EEM2": {
        "total": 121.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.7
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 137.0
      },
      "EEM3": {
        "total": 106.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.5
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 6.9
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 137.0
      },
      "EEM4": {
        "total": 85.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.2
          },
          {
            "name": "Cooling",
            "value": 5.9
          },
          {
            "name": "DHW",
            "value": 7.0
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 137.0
      },
      "IAL": {
        "total": 257.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 99.0
          },
          {
            "name": "Cooling",
            "value": 61.8
          },
          {
            "name": "DHW",
            "value": 24.4
          },
          {
            "name": "Lighting",
            "value": 10.4
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 137.0
      }
    },
    "RS-I4": {
      "DEFAULT": {
        "total": 137.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.3
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 9.0
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.8
          }
        ],
        "pv": 6.1
      },
      "EEM1": {
        "total": 120.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 34.2
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 91.3
      },
      "EEM2": {
        "total": 95.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 91.3
      },
      "EEM3": {
        "total": 76.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.3
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 12.3
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 91.3
      },
      "EEM4": {
        "total": 60.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.1
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 12.3
          },
          {
            "name": "Lighting",
            "value": 3.7
          },
          {
            "name": "Equipment",
            "value": 17.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.5
          }
        ],
        "pv": 91.3
      },
      "IAL": {
        "total": 274.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 84.5
          },
          {
            "name": "Cooling",
            "value": 119.4
          },
          {
            "name": "DHW",
            "value": 32.5
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.3
          }
        ],
        "pv": 91.3
      }
    },
    "IC-DC": {
      "DEFAULT": {
        "total": 3660.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.3
          },
          {
            "name": "Cooling",
            "value": 436.4
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.7
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 325.4
          }
        ],
        "pv": 4.1
      },
      "EEM1": {
        "total": 3663.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.1
          }
        ],
        "pv": 163.5
      },
      "EEM2": {
        "total": 3645.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.2
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.6
          }
        ],
        "pv": 163.5
      },
      "EEM3": {
        "total": 3637.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.7
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 0.8
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.6
          }
        ],
        "pv": 163.5
      },
      "EEM4": {
        "total": 3632.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.1
          },
          {
            "name": "Cooling",
            "value": 439.6
          },
          {
            "name": "DHW",
            "value": 0.8
          },
          {
            "name": "Lighting",
            "value": 29.2
          },
          {
            "name": "Equipment",
            "value": 2711.2
          },
          {
            "name": "Fans & Pumps",
            "value": 332.4
          }
        ],
        "pv": 163.5
      },
      "IAL": {
        "total": 6378.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 3054.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 3215.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 163.5
      }
    },
    "IC-DE": {
      "DEFAULT": {
        "total": 11920.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.5
          },
          {
            "name": "Cooling",
            "value": 1357.0
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.3
          },
          {
            "name": "Equipment",
            "value": 9035.3
          },
          {
            "name": "Fans & Pumps",
            "value": 1109.9
          }
        ],
        "pv": 6.2
      },
      "EEM1": {
        "total": 11914.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.7
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.1
          }
        ],
        "pv": 118.7
      },
      "EEM2": {
        "total": 11886.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.1
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.8
          }
        ],
        "pv": 118.7
      },
      "EEM3": {
        "total": 11876.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.2
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 1.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.8
          }
        ],
        "pv": 118.7
      },
      "EEM4": {
        "total": 11865.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.8
          },
          {
            "name": "Cooling",
            "value": 1357.8
          },
          {
            "name": "DHW",
            "value": 1.2
          },
          {
            "name": "Lighting",
            "value": 21.1
          },
          {
            "name": "Equipment",
            "value": 9029.1
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.2
          }
        ],
        "pv": 118.7
      },
      "IAL": {
        "total": 21525.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 75.8
          },
          {
            "name": "Cooling",
            "value": 10652.1
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 10755.9
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 118.7
      }
    },
    "MU-C1": {
      "DEFAULT": {
        "total": 205.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 54.8
          },
          {
            "name": "Cooling",
            "value": 10.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.9
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 18.9
          }
        ],
        "pv": 3.4
      },
      "EEM1": {
        "total": 180.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.2
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 18.5
          }
        ],
        "pv": 25.7
      },
      "EEM2": {
        "total": 167.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.3
          },
          {
            "name": "Cooling",
            "value": 12.0
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 19.7
          }
        ],
        "pv": 25.7
      },
      "EEM3": {
        "total": 138.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 19.3
          },
          {
            "name": "Cooling",
            "value": 12.0
          },
          {
            "name": "DHW",
            "value": 6.8
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 19.8
          }
        ],
        "pv": 25.7
      },
      "EEM4": {
        "total": 117.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 23.1
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 6.7
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 44.7
          },
          {
            "name": "Fans & Pumps",
            "value": 18.3
          }
        ],
        "pv": 25.7
      },
      "IAL": {
        "total": 282.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 81.5
          },
          {
            "name": "Cooling",
            "value": 87.9
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 11.9
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 25.7
      }
    },
    "MU-C2": {
      "DEFAULT": {
        "total": 136.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.5
          },
          {
            "name": "Cooling",
            "value": 5.7
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 2.5
      },
      "EEM1": {
        "total": 117.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 21.7
      },
      "EEM2": {
        "total": 107.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.9
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 21.7
      },
      "EEM3": {
        "total": 83.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.7
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 4.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 21.7
      },
      "EEM4": {
        "total": 59.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.1
          },
          {
            "name": "Cooling",
            "value": 4.3
          },
          {
            "name": "DHW",
            "value": 5.0
          },
          {
            "name": "Lighting",
            "value": 3.6
          },
          {
            "name": "Equipment",
            "value": 23.2
          },
          {
            "name": "Fans & Pumps",
            "value": 7.2
          }
        ],
        "pv": 21.7
      },
      "IAL": {
        "total": 214.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 72.6
          },
          {
            "name": "Cooling",
            "value": 55.0
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 21.7
      }
    },
    "MU-HC": {
      "DEFAULT": {
        "total": 162.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 52.6
          },
          {
            "name": "Cooling",
            "value": 9.8
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.7
          }
        ],
        "pv": 4.1
      },
      "EEM1": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.4
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 47.1
      },
      "EEM2": {
        "total": 124.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.6
          },
          {
            "name": "Cooling",
            "value": 12.4
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.7
          }
        ],
        "pv": 47.1
      },
      "EEM3": {
        "total": 92.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 8.4
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.8
          }
        ],
        "pv": 47.1
      },
      "EEM4": {
        "total": 77.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.1
          },
          {
            "name": "Cooling",
            "value": 9.7
          },
          {
            "name": "DHW",
            "value": 8.4
          },
          {
            "name": "Lighting",
            "value": 3.8
          },
          {
            "name": "Equipment",
            "value": 24.8
          },
          {
            "name": "Fans & Pumps",
            "value": 9.8
          }
        ],
        "pv": 47.1
      },
      "IAL": {
        "total": 284.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 70.1
          },
          {
            "name": "Cooling",
            "value": 124.6
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 47.2
      }
    },
    "MU-HS": {
      "DEFAULT": {
        "total": 198.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 74.9
          },
          {
            "name": "Cooling",
            "value": 10.6
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 1.9
      },
      "EEM1": {
        "total": 176.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.2
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 40.8
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 81.9
      },
      "EEM2": {
        "total": 135.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.0
          },
          {
            "name": "Cooling",
            "value": 12.0
          },
          {
            "name": "DHW",
            "value": 40.8
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 81.9
      },
      "EEM3": {
        "total": 109.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.5
          },
          {
            "name": "Cooling",
            "value": 11.8
          },
          {
            "name": "DHW",
            "value": 12.5
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 81.9
      },
      "EEM4": {
        "total": 94.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.3
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 12.5
          },
          {
            "name": "Lighting",
            "value": 4.9
          },
          {
            "name": "Equipment",
            "value": 36.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.6
          }
        ],
        "pv": 81.9
      },
      "IAL": {
        "total": 280.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 89.1
          },
          {
            "name": "Cooling",
            "value": 90.6
          },
          {
            "name": "DHW",
            "value": 41.1
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.9
          }
        ],
        "pv": 81.9
      }
    },
    "MU-L": {
      "DEFAULT": {
        "total": 158.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 47.7
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 7.4
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 140.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.2
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.7
          }
        ],
        "pv": 77.3
      },
      "EEM2": {
        "total": 122.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.9
          }
        ],
        "pv": 77.3
      },
      "EEM3": {
        "total": 94.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.1
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 14.4
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.9
          }
        ],
        "pv": 77.3
      },
      "EEM4": {
        "total": 80.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.5
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 14.4
          },
          {
            "name": "Lighting",
            "value": 3.1
          },
          {
            "name": "Equipment",
            "value": 28.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 77.3
      },
      "IAL": {
        "total": 258.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 76.9
          },
          {
            "name": "Cooling",
            "value": 88.3
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 7.4
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 77.3
      }
    },
    "MU-S1": {
      "DEFAULT": {
        "total": 193.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 58.4
          },
          {
            "name": "Cooling",
            "value": 9.4
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.9
          }
        ],
        "pv": 2.8
      },
      "EEM1": {
        "total": 181.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 73.9
      },
      "EEM2": {
        "total": 150.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.0
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.4
          }
        ],
        "pv": 73.9
      },
      "EEM3": {
        "total": 122.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.6
          },
          {
            "name": "Cooling",
            "value": 10.7
          },
          {
            "name": "DHW",
            "value": 12.0
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.4
          }
        ],
        "pv": 73.9
      },
      "EEM4": {
        "total": 100.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.6
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 12.0
          },
          {
            "name": "Lighting",
            "value": 8.4
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 73.9
      },
      "IAL": {
        "total": 325.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 82.2
          },
          {
            "name": "Cooling",
            "value": 127.0
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.2
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 74.1
      }
    },
    "MU-S2": {
      "DEFAULT": {
        "total": 186.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 50.8
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 44.2
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 0.9
      },
      "EEM1": {
        "total": 177.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.6
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 44.1
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 100.2
      },
      "EEM2": {
        "total": 148.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 11.6
          },
          {
            "name": "DHW",
            "value": 44.2
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.7
          }
        ],
        "pv": 100.2
      },
      "EEM3": {
        "total": 121.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.1
          },
          {
            "name": "Cooling",
            "value": 11.4
          },
          {
            "name": "DHW",
            "value": 15.2
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.8
          }
        ],
        "pv": 100.2
      },
      "EEM4": {
        "total": 97.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.7
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 15.2
          },
          {
            "name": "Lighting",
            "value": 9.9
          },
          {
            "name": "Equipment",
            "value": 24.6
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 100.2
      },
      "IAL": {
        "total": 282.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 76.9
          },
          {
            "name": "Cooling",
            "value": 89.9
          },
          {
            "name": "DHW",
            "value": 44.2
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 100.2
      }
    },
    "MU-U1": {
      "DEFAULT": {
        "total": 119.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 28.3
          },
          {
            "name": "Cooling",
            "value": 5.2
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 2.3
      },
      "EEM1": {
        "total": 99.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.1
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 20.5
      },
      "EEM2": {
        "total": 95.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 7.3
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.3
          }
        ],
        "pv": 20.5
      },
      "EEM3": {
        "total": 74.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.8
          },
          {
            "name": "Cooling",
            "value": 7.3
          },
          {
            "name": "DHW",
            "value": 3.9
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.4
          }
        ],
        "pv": 20.5
      },
      "EEM4": {
        "total": 49.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 3.9
          },
          {
            "name": "DHW",
            "value": 3.9
          },
          {
            "name": "Lighting",
            "value": 3.3
          },
          {
            "name": "Equipment",
            "value": 18.4
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 20.5
      },
      "IAL": {
        "total": 184.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 63.5
          },
          {
            "name": "Cooling",
            "value": 44.1
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 20.5
      }
    },
    "MU-W": {
      "DEFAULT": {
        "total": 144.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 55.5
          },
          {
            "name": "Cooling",
            "value": 5.7
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.4
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 7.2
          }
        ],
        "pv": 2.6
      },
      "EEM1": {
        "total": 129.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.4
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 78.1
      },
      "EEM2": {
        "total": 103.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.1
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 31.4
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.7
          }
        ],
        "pv": 78.1
      },
      "EEM3": {
        "total": 83.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.9
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 9.4
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 78.1
      },
      "EEM4": {
        "total": 73.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.0
          },
          {
            "name": "Cooling",
            "value": 4.9
          },
          {
            "name": "DHW",
            "value": 9.4
          },
          {
            "name": "Lighting",
            "value": 3.1
          },
          {
            "name": "Equipment",
            "value": 28.5
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 78.1
      },
      "IAL": {
        "total": 239.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 82.6
          },
          {
            "name": "Cooling",
            "value": 80.3
          },
          {
            "name": "DHW",
            "value": 31.4
          },
          {
            "name": "Lighting",
            "value": 6.6
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 78.1
      }
    },
    "MU-W2": {
      "DEFAULT": {
        "total": 127.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 67.2
          },
          {
            "name": "Cooling",
            "value": 2.5
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 7.7
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 4.7
          }
        ],
        "pv": 9.6
      },
      "EEM1": {
        "total": 110.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 3.5
          }
        ],
        "pv": 118.5
      },
      "EEM2": {
        "total": 83.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.0
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 4.1
          }
        ],
        "pv": 118.5
      },
      "EEM3": {
        "total": 73.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 25.9
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 1.1
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 4.1
          }
        ],
        "pv": 118.5
      },
      "EEM4": {
        "total": 67.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 27.9
          },
          {
            "name": "Cooling",
            "value": 1.4
          },
          {
            "name": "DHW",
            "value": 1.1
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 24.0
          },
          {
            "name": "Fans & Pumps",
            "value": 3.8
          }
        ],
        "pv": 118.5
      },
      "IAL": {
        "total": 173.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 96.4
          },
          {
            "name": "Cooling",
            "value": 23.1
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 118.5
      }
    },
    "CC-B": {
      "DEFAULT": {
        "total": 119.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.5
          },
          {
            "name": "Cooling",
            "value": 5.2
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 3.4
      },
      "EEM1": {
        "total": 113.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.8
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 30.5
      },
      "EEM2": {
        "total": 100.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 30.5
      },
      "EEM3": {
        "total": 86.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.0
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 2.6
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 30.5
      },
      "EEM4": {
        "total": 64.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.3
          },
          {
            "name": "Cooling",
            "value": 4.3
          },
          {
            "name": "DHW",
            "value": 2.6
          },
          {
            "name": "Lighting",
            "value": 6.7
          },
          {
            "name": "Equipment",
            "value": 22.7
          },
          {
            "name": "Fans & Pumps",
            "value": 7.1
          }
        ],
        "pv": 30.5
      },
      "IAL": {
        "total": 226.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.2
          },
          {
            "name": "Cooling",
            "value": 84.3
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 30.5
      }
    },
    "CC-S1": {
      "DEFAULT": {
        "total": 255.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 87.7
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.6
          }
        ],
        "pv": 4.8
      },
      "EEM1": {
        "total": 232.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 12.8
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 128.1
      },
      "EEM2": {
        "total": 189.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.2
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 25.7
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 128.1
      },
      "EEM3": {
        "total": 172.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.7
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 3.5
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 12.2
          }
        ],
        "pv": 128.1
      },
      "EEM4": {
        "total": 138.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 26.8
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 3.5
          },
          {
            "name": "Lighting",
            "value": 16.9
          },
          {
            "name": "Equipment",
            "value": 45.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 128.1
      },
      "IAL": {
        "total": 340.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 124.6
          },
          {
            "name": "Cooling",
            "value": 67.7
          },
          {
            "name": "DHW",
            "value": 25.7
          },
          {
            "name": "Lighting",
            "value": 36.5
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 1.2
          }
        ],
        "pv": 128.1
      }
    },
    "CC-S2": {
      "DEFAULT": {
        "total": 342.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 104.4
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 16.6
          }
        ],
        "pv": 3.1
      },
      "EEM1": {
        "total": 315.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 71.3
          },
          {
            "name": "Cooling",
            "value": 18.8
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 14.7
          }
        ],
        "pv": 185.5
      },
      "EEM2": {
        "total": 264.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.3
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 16.2
          }
        ],
        "pv": 185.5
      },
      "EEM3": {
        "total": 245.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 26.3
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 2.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 16.2
          }
        ],
        "pv": 185.5
      },
      "EEM4": {
        "total": 196.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 27.6
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 2.6
          },
          {
            "name": "Lighting",
            "value": 29.5
          },
          {
            "name": "Equipment",
            "value": 59.5
          },
          {
            "name": "Fans & Pumps",
            "value": 15.1
          }
        ],
        "pv": 185.5
      },
      "IAL": {
        "total": 411.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 142.6
          },
          {
            "name": "Cooling",
            "value": 56.7
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 63.8
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 1.3
          }
        ],
        "pv": 185.5
      }
    },
    "CC-E1": {
      "DEFAULT": {
        "total": 95.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.9
          },
          {
            "name": "Cooling",
            "value": 4.6
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.2
          }
        ],
        "pv": 1.7
      },
      "EEM1": {
        "total": 89.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 4.5
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 28.0
      },
      "EEM2": {
        "total": 80.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.2
          },
          {
            "name": "Cooling",
            "value": 4.4
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 28.0
      },
      "EEM3": {
        "total": 71.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.3
          },
          {
            "name": "Cooling",
            "value": 4.4
          },
          {
            "name": "DHW",
            "value": 1.7
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 28.0
      },
      "EEM4": {
        "total": 48.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.6
          },
          {
            "name": "Cooling",
            "value": 3.3
          },
          {
            "name": "DHW",
            "value": 1.7
          },
          {
            "name": "Lighting",
            "value": 8.3
          },
          {
            "name": "Equipment",
            "value": 17.4
          },
          {
            "name": "Fans & Pumps",
            "value": 5.7
          }
        ],
        "pv": 28.0
      },
      "IAL": {
        "total": 206.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 43.0
          },
          {
            "name": "Cooling",
            "value": 98.3
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 29.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 28.0
      }
    },
    "CC-E2": {
      "DEFAULT": {
        "total": 299.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 173.4
          },
          {
            "name": "Cooling",
            "value": 13.6
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 23.0
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 28.5
          }
        ],
        "pv": 1.0
      },
      "EEM1": {
        "total": 279.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 154.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 28.1
          }
        ],
        "pv": 51.2
      },
      "EEM2": {
        "total": 144.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.3
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 31.1
          }
        ],
        "pv": 51.2
      },
      "EEM3": {
        "total": 128.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 3.5
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 31.2
          }
        ],
        "pv": 51.2
      },
      "EEM4": {
        "total": 106.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.9
          },
          {
            "name": "Cooling",
            "value": 11.4
          },
          {
            "name": "DHW",
            "value": 3.5
          },
          {
            "name": "Lighting",
            "value": 12.8
          },
          {
            "name": "Equipment",
            "value": 23.7
          },
          {
            "name": "Fans & Pumps",
            "value": 29.9
          }
        ],
        "pv": 51.2
      },
      "IAL": {
        "total": 315.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 128.6
          },
          {
            "name": "Cooling",
            "value": 106.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 23.0
          },
          {
            "name": "Equipment",
            "value": 33.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 51.5
      }
    },
    "CC-E3": {
      "DEFAULT": {
        "total": 284.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 155.9
          },
          {
            "name": "Cooling",
            "value": 14.6
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.7
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 27.6
          }
        ],
        "pv": 0.7
      },
      "EEM1": {
        "total": 269.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 141.0
          },
          {
            "name": "Cooling",
            "value": 14.1
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 27.3
          }
        ],
        "pv": 54.4
      },
      "EEM2": {
        "total": 143.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.4
          },
          {
            "name": "Cooling",
            "value": 14.3
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 29.9
          }
        ],
        "pv": 54.4
      },
      "EEM3": {
        "total": 126.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.8
          },
          {
            "name": "Cooling",
            "value": 14.3
          },
          {
            "name": "DHW",
            "value": 5.1
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 30.0
          }
        ],
        "pv": 54.4
      },
      "EEM4": {
        "total": 106.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.4
          },
          {
            "name": "Cooling",
            "value": 12.6
          },
          {
            "name": "DHW",
            "value": 5.1
          },
          {
            "name": "Lighting",
            "value": 12.0
          },
          {
            "name": "Equipment",
            "value": 27.0
          },
          {
            "name": "Fans & Pumps",
            "value": 28.8
          }
        ],
        "pv": 54.4
      },
      "IAL": {
        "total": 313.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 115.4
          },
          {
            "name": "Cooling",
            "value": 113.2
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.7
          },
          {
            "name": "Equipment",
            "value": 36.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 54.6
      }
    },
    "CC-FD1": {
      "DEFAULT": {
        "total": 125.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 28.1
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.7
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 11.4
          }
        ],
        "pv": 0.2
      },
      "EEM1": {
        "total": 112.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 12.7
          }
        ],
        "pv": 8.9
      },
      "EEM2": {
        "total": 101.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.7
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 14.1
          }
        ],
        "pv": 8.9
      },
      "EEM3": {
        "total": 81.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.1
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 8.9
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 14.1
          }
        ],
        "pv": 8.9
      },
      "EEM4": {
        "total": 61.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.4
          },
          {
            "name": "Cooling",
            "value": 6.2
          },
          {
            "name": "DHW",
            "value": 9.0
          },
          {
            "name": "Lighting",
            "value": 6.1
          },
          {
            "name": "Equipment",
            "value": 19.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.3
          }
        ],
        "pv": 8.9
      },
      "IAL": {
        "total": 278.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.5
          },
          {
            "name": "Cooling",
            "value": 154.0
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.7
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 9.0
      }
    },
    "CC-FD2": {
      "DEFAULT": {
        "total": 117.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.6
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 8.8
          }
        ],
        "pv": 1.2
      },
      "EEM1": {
        "total": 109.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.7
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 15.5
      },
      "EEM2": {
        "total": 100.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.7
          },
          {
            "name": "Cooling",
            "value": 7.3
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 15.5
      },
      "EEM3": {
        "total": 84.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.7
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 6.4
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 15.5
      },
      "EEM4": {
        "total": 62.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.2
          },
          {
            "name": "Cooling",
            "value": 5.7
          },
          {
            "name": "DHW",
            "value": 6.4
          },
          {
            "name": "Lighting",
            "value": 6.3
          },
          {
            "name": "Equipment",
            "value": 21.4
          },
          {
            "name": "Fans & Pumps",
            "value": 8.8
          }
        ],
        "pv": 15.5
      },
      "IAL": {
        "total": 253.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.3
          },
          {
            "name": "Cooling",
            "value": 124.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 15.6
      }
    },
    "CC-FD3": {
      "DEFAULT": {
        "total": 132.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.1
          },
          {
            "name": "Cooling",
            "value": 7.9
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.4
          }
        ],
        "pv": 0.3
      },
      "EEM1": {
        "total": 119.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.7
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 13.2
      },
      "EEM2": {
        "total": 108.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.3
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 11.8
          }
        ],
        "pv": 13.2
      },
      "EEM3": {
        "total": 88.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.8
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 9.4
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 11.9
          }
        ],
        "pv": 13.2
      },
      "EEM4": {
        "total": 66.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.1
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 9.4
          },
          {
            "name": "Lighting",
            "value": 6.7
          },
          {
            "name": "Equipment",
            "value": 23.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.7
          }
        ],
        "pv": 13.2
      },
      "IAL": {
        "total": 239.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.7
          },
          {
            "name": "Cooling",
            "value": 104.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 13.2
      }
    },
    "RC-MR1": {
      "DEFAULT": {
        "total": 113.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.6
          },
          {
            "name": "Cooling",
            "value": 8.5
          },
          {
            "name": "DHW",
            "value": 37.8
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 100.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "EEM2": {
        "total": 96.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.4
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "EEM3": {
        "total": 74.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.4
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 15.2
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "EEM4": {
        "total": 56.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.1
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 15.2
          },
          {
            "name": "Lighting",
            "value": 2.3
          },
          {
            "name": "Equipment",
            "value": 18.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.2
          }
        ],
        "pv": 74.6
      },
      "IAL": {
        "total": 195.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.3
          },
          {
            "name": "Cooling",
            "value": 81.8
          },
          {
            "name": "DHW",
            "value": 37.8
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 39.9
      }
    },
    "RC-MR2": {
      "DEFAULT": {
        "total": 107.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.7
          },
          {
            "name": "Cooling",
            "value": 8.3
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 99.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.8
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 66.8
      },
      "EEM2": {
        "total": 92.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "EEM3": {
        "total": 65.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.6
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 17.2
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "EEM4": {
        "total": 51.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.9
          },
          {
            "name": "Cooling",
            "value": 8.0
          },
          {
            "name": "DHW",
            "value": 17.2
          },
          {
            "name": "Lighting",
            "value": 2.0
          },
          {
            "name": "Equipment",
            "value": 11.2
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 66.8
      },
      "IAL": {
        "total": 200.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.2
          },
          {
            "name": "Cooling",
            "value": 92.1
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 27.7
      }
    },
    "RC-MR3": {
      "DEFAULT": {
        "total": 107.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.1
          },
          {
            "name": "Cooling",
            "value": 8.0
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 99.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "EEM2": {
        "total": 92.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.6
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.7
          }
        ],
        "pv": 66.8
      },
      "EEM3": {
        "total": 65.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.6
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 17.2
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.7
          }
        ],
        "pv": 66.8
      },
      "EEM4": {
        "total": 51.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.9
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 17.2
          },
          {
            "name": "Lighting",
            "value": 2.0
          },
          {
            "name": "Equipment",
            "value": 11.2
          },
          {
            "name": "Fans & Pumps",
            "value": 6.9
          }
        ],
        "pv": 66.8
      },
      "IAL": {
        "total": 200.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.9
          },
          {
            "name": "Cooling",
            "value": 91.5
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 27.7
      }
    },
    "RC-D": {
      "DEFAULT": {
        "total": 138.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.7
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 108.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.7
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 100.7
      },
      "EEM2": {
        "total": 93.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.5
          },
          {
            "name": "Cooling",
            "value": 6.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.6
          }
        ],
        "pv": 100.7
      },
      "EEM3": {
        "total": 81.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.2
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 100.7
      },
      "EEM4": {
        "total": 61.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.9
          },
          {
            "name": "Cooling",
            "value": 5.0
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 2.6
          },
          {
            "name": "Equipment",
            "value": 28.3
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 100.7
      },
      "IAL": {
        "total": 163.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 64.9
          },
          {
            "name": "Cooling",
            "value": 24.8
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 77.0
      }
    },
    "RC-ML": {
      "DEFAULT": {
        "total": 139.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 44.2
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 24.4
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 111.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.2
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.1
          }
        ],
        "pv": 93.0
      },
      "EEM2": {
        "total": 99.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.9
          },
          {
            "name": "Cooling",
            "value": 6.4
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.7
          }
        ],
        "pv": 93.0
      },
      "EEM3": {
        "total": 86.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.3
          },
          {
            "name": "Cooling",
            "value": 6.4
          },
          {
            "name": "DHW",
            "value": 8.9
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 93.0
      },
      "EEM4": {
        "total": 63.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.0
          },
          {
            "name": "Cooling",
            "value": 4.9
          },
          {
            "name": "DHW",
            "value": 8.9
          },
          {
            "name": "Lighting",
            "value": 2.9
          },
          {
            "name": "Equipment",
            "value": 31.5
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 93.0
      },
      "IAL": {
        "total": 165.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 58.8
          },
          {
            "name": "Cooling",
            "value": 24.2
          },
          {
            "name": "DHW",
            "value": 24.5
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 52.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 71.0
      }
    },
    "RC-T": {
      "DEFAULT": {
        "total": 140.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 36.3
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 26.9
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.6
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 114.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.4
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 85.2
      },
      "EEM2": {
        "total": 106.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.2
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.9
          }
        ],
        "pv": 85.2
      },
      "EEM3": {
        "total": 91.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.2
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 11.2
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.9
          }
        ],
        "pv": 85.2
      },
      "EEM4": {
        "total": 66.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.9
          },
          {
            "name": "Cooling",
            "value": 4.7
          },
          {
            "name": "DHW",
            "value": 11.2
          },
          {
            "name": "Lighting",
            "value": 3.2
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 85.2
      },
      "IAL": {
        "total": 167.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 52.5
          },
          {
            "name": "Cooling",
            "value": 23.7
          },
          {
            "name": "DHW",
            "value": 26.9
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 58.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 65.1
      }
    },
    "RC-R": {
      "DEFAULT": {
        "total": 137.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 50.7
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.7
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 90.5
      },
      "EEM2": {
        "total": 93.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.2
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.6
          }
        ],
        "pv": 90.5
      },
      "EEM3": {
        "total": 81.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.9
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 90.5
      },
      "EEM4": {
        "total": 61.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.6
          },
          {
            "name": "Cooling",
            "value": 5.3
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 2.6
          },
          {
            "name": "Equipment",
            "value": 28.3
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 90.5
      },
      "IAL": {
        "total": 163.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 63.9
          },
          {
            "name": "Cooling",
            "value": 25.8
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 69.1
      }
    },
    "RC-HR1": {
      "DEFAULT": {
        "total": 111.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.3
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 1.9
      },
      "EEM1": {
        "total": 103.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "EEM2": {
        "total": 99.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.8
          },
          {
            "name": "Cooling",
            "value": 13.2
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "EEM3": {
        "total": 67.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 12.1
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "EEM4": {
        "total": 52.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.0
          },
          {
            "name": "Cooling",
            "value": 9.4
          },
          {
            "name": "DHW",
            "value": 12.1
          },
          {
            "name": "Lighting",
            "value": 1.7
          },
          {
            "name": "Equipment",
            "value": 11.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 45.8
      },
      "IAL": {
        "total": 213.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.7
          },
          {
            "name": "Cooling",
            "value": 100.4
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 20.3
      }
    },
    "RC-HR2": {
      "DEFAULT": {
        "total": 116.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.4
          },
          {
            "name": "Cooling",
            "value": 9.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.9
          }
        ],
        "pv": 3.3
      },
      "EEM1": {
        "total": 107.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.0
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 28.8
      },
      "EEM2": {
        "total": 106.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.2
          },
          {
            "name": "Cooling",
            "value": 14.4
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.1
          }
        ],
        "pv": 28.8
      },
      "EEM3": {
        "total": 68.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.6
          },
          {
            "name": "Cooling",
            "value": 14.4
          },
          {
            "name": "DHW",
            "value": 7.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 28.8
      },
      "EEM4": {
        "total": 53.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.6
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 7.9
          },
          {
            "name": "Lighting",
            "value": 1.5
          },
          {
            "name": "Equipment",
            "value": 10.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 28.8
      },
      "IAL": {
        "total": 210.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.6
          },
          {
            "name": "Cooling",
            "value": 90.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 14.4
      }
    }
  },
  "ashrae": {
    "RS-I1": {
      "DEFAULT": {
        "total": 190.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 44.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 40.2
          },
          {
            "name": "Lighting",
            "value": 8.8
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.7
          }
        ],
        "pv": 3.5
      },
      "EEM1": {
        "total": 163.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 11.1
          },
          {
            "name": "DHW",
            "value": 39.9
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 104.8
      },
      "EEM2": {
        "total": 153.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.6
          },
          {
            "name": "Cooling",
            "value": 11.7
          },
          {
            "name": "DHW",
            "value": 39.9
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 104.8
      },
      "EEM3": {
        "total": 129.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.9
          },
          {
            "name": "Cooling",
            "value": 11.6
          },
          {
            "name": "DHW",
            "value": 14.1
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.6
          }
        ],
        "pv": 104.8
      },
      "EEM4": {
        "total": 101.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 7.7
          },
          {
            "name": "DHW",
            "value": 14.2
          },
          {
            "name": "Lighting",
            "value": 3.8
          },
          {
            "name": "Equipment",
            "value": 52.9
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 104.8
      },
      "IAL": {
        "total": 234.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 81.5
          },
          {
            "name": "Cooling",
            "value": 26.4
          },
          {
            "name": "DHW",
            "value": 40.3
          },
          {
            "name": "Lighting",
            "value": 8.8
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 104.8
      }
    },
    "RS-S": {
      "DEFAULT": {
        "total": 200.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.9
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 37.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.8
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 183.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.9
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 36.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 93.8
      },
      "EEM2": {
        "total": 168.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.0
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.1
          }
        ],
        "pv": 93.8
      },
      "EEM3": {
        "total": 146.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 10.6
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 93.8
      },
      "EEM4": {
        "total": 122.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.0
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 10.6
          },
          {
            "name": "Lighting",
            "value": 4.0
          },
          {
            "name": "Equipment",
            "value": 72.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.8
          }
        ],
        "pv": 93.8
      },
      "IAL": {
        "total": 235.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.5
          },
          {
            "name": "Cooling",
            "value": 29.9
          },
          {
            "name": "DHW",
            "value": 37.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1.1
          }
        ],
        "pv": 93.8
      }
    },
    "RS-I2": {
      "DEFAULT": {
        "total": 158.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.2
          },
          {
            "name": "Cooling",
            "value": 9.2
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.9
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.8
          }
        ],
        "pv": 6.2
      },
      "EEM1": {
        "total": 132.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "EEM2": {
        "total": 123.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.5
          },
          {
            "name": "Cooling",
            "value": 10.6
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "EEM3": {
        "total": 104.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.1
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 11.4
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "EEM4": {
        "total": 79.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 11.4
          },
          {
            "name": "Lighting",
            "value": 4.2
          },
          {
            "name": "Equipment",
            "value": 35.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 81.1
      },
      "IAL": {
        "total": 209.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 88.7
          },
          {
            "name": "Cooling",
            "value": 23.0
          },
          {
            "name": "DHW",
            "value": 31.2
          },
          {
            "name": "Lighting",
            "value": 10.0
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.4
          }
        ],
        "pv": 81.1
      }
    },
    "RS-I3": {
      "DEFAULT": {
        "total": 179.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 43.4
          },
          {
            "name": "Cooling",
            "value": 8.7
          },
          {
            "name": "DHW",
            "value": 24.3
          },
          {
            "name": "Lighting",
            "value": 10.4
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.7
          }
        ],
        "pv": 6.1
      },
      "EEM1": {
        "total": 149.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.8
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 128.5
      },
      "EEM2": {
        "total": 138.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.0
          },
          {
            "name": "Cooling",
            "value": 8.3
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 128.5
      },
      "EEM3": {
        "total": 124.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.6
          },
          {
            "name": "Cooling",
            "value": 8.3
          },
          {
            "name": "DHW",
            "value": 7.3
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.1
          }
        ],
        "pv": 128.5
      },
      "EEM4": {
        "total": 97.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.2
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 7.3
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 56.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 128.5
      },
      "IAL": {
        "total": 226.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 87.3
          },
          {
            "name": "Cooling",
            "value": 23.1
          },
          {
            "name": "DHW",
            "value": 24.4
          },
          {
            "name": "Lighting",
            "value": 10.5
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 128.5
      }
    },
    "RS-I4": {
      "DEFAULT": {
        "total": 153.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 36.9
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 9.6
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 11.3
          }
        ],
        "pv": 6.1
      },
      "EEM1": {
        "total": 124.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.2
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 32.3
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 87.1
      },
      "EEM2": {
        "total": 118.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.4
          },
          {
            "name": "Cooling",
            "value": 11.4
          },
          {
            "name": "DHW",
            "value": 32.3
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 87.1
      },
      "EEM3": {
        "total": 100.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.4
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 12.8
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.1
          }
        ],
        "pv": 87.1
      },
      "EEM4": {
        "total": 73.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.8
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 12.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 30.7
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 87.1
      },
      "IAL": {
        "total": 207.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 91.8
          },
          {
            "name": "Cooling",
            "value": 22.2
          },
          {
            "name": "DHW",
            "value": 32.5
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.3
          }
        ],
        "pv": 87.1
      }
    },
    "IC-DC": {
      "DEFAULT": {
        "total": 3679.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.1
          },
          {
            "name": "Cooling",
            "value": 440.4
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.7
          },
          {
            "name": "Equipment",
            "value": 2724.3
          },
          {
            "name": "Fans & Pumps",
            "value": 326.6
          }
        ],
        "pv": 4.1
      },
      "EEM1": {
        "total": 3670.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 445.6
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.2
          }
        ],
        "pv": 155.4
      },
      "EEM2": {
        "total": 3663.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 445.7
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.5
          }
        ],
        "pv": 155.4
      },
      "EEM3": {
        "total": 3655.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.9
          },
          {
            "name": "Cooling",
            "value": 445.7
          },
          {
            "name": "DHW",
            "value": 1.2
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.5
          }
        ],
        "pv": 155.4
      },
      "EEM4": {
        "total": 3649.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 445.1
          },
          {
            "name": "DHW",
            "value": 1.2
          },
          {
            "name": "Lighting",
            "value": 29.2
          },
          {
            "name": "Equipment",
            "value": 2720.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.0
          }
        ],
        "pv": 155.4
      },
      "IAL": {
        "total": 6358.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 55.2
          },
          {
            "name": "Cooling",
            "value": 3030.9
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 3226.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 155.4
      }
    },
    "IC-DE": {
      "DEFAULT": {
        "total": 11965.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 52.3
          },
          {
            "name": "Cooling",
            "value": 1373.1
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.3
          },
          {
            "name": "Equipment",
            "value": 9052.1
          },
          {
            "name": "Fans & Pumps",
            "value": 1111.8
          }
        ],
        "pv": 6.2
      },
      "EEM1": {
        "total": 11953.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.1
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1117.6
          }
        ],
        "pv": 113.9
      },
      "EEM2": {
        "total": 11936.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.0
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1118.1
          }
        ],
        "pv": 113.9
      },
      "EEM3": {
        "total": 11927.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.0
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 1.7
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1118.2
          }
        ],
        "pv": 113.9
      },
      "EEM4": {
        "total": 11914.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.1
          },
          {
            "name": "Cooling",
            "value": 1374.8
          },
          {
            "name": "DHW",
            "value": 1.7
          },
          {
            "name": "Lighting",
            "value": 21.1
          },
          {
            "name": "Equipment",
            "value": 9044.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1117.8
          }
        ],
        "pv": 113.9
      },
      "IAL": {
        "total": 21501.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 63.1
          },
          {
            "name": "Cooling",
            "value": 10623.2
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 10772.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 113.9
      }
    },
    "MU-C1": {
      "DEFAULT": {
        "total": 212.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.1
          },
          {
            "name": "Cooling",
            "value": 11.8
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 13.0
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 19.2
          }
        ],
        "pv": 3.4
      },
      "EEM1": {
        "total": 188.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 13.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 18.8
          }
        ],
        "pv": 24.9
      },
      "EEM2": {
        "total": 182.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.8
          },
          {
            "name": "Cooling",
            "value": 13.1
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 20.0
          }
        ],
        "pv": 24.9
      },
      "EEM3": {
        "total": 153.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.6
          },
          {
            "name": "Cooling",
            "value": 13.1
          },
          {
            "name": "DHW",
            "value": 7.2
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 20.1
          }
        ],
        "pv": 24.9
      },
      "EEM4": {
        "total": 128.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 7.1
          },
          {
            "name": "Lighting",
            "value": 6.1
          },
          {
            "name": "Equipment",
            "value": 61.5
          },
          {
            "name": "Fans & Pumps",
            "value": 18.5
          }
        ],
        "pv": 24.9
      },
      "IAL": {
        "total": 238.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 66.1
          },
          {
            "name": "Cooling",
            "value": 41.0
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 13.0
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 25.0
      }
    },
    "MU-C2": {
      "DEFAULT": {
        "total": 170.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 26.5
          },
          {
            "name": "Cooling",
            "value": 8.1
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.7
          }
        ],
        "pv": 2.4
      },
      "EEM1": {
        "total": 151.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.2
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.6
          }
        ],
        "pv": 19.9
      },
      "EEM2": {
        "total": 147.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.6
          },
          {
            "name": "Cooling",
            "value": 10.7
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.9
          }
        ],
        "pv": 19.9
      },
      "EEM3": {
        "total": 124.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.3
          },
          {
            "name": "Cooling",
            "value": 10.7
          },
          {
            "name": "DHW",
            "value": 5.3
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.9
          }
        ],
        "pv": 19.9
      },
      "EEM4": {
        "total": 98.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.4
          },
          {
            "name": "Cooling",
            "value": 7.3
          },
          {
            "name": "DHW",
            "value": 5.3
          },
          {
            "name": "Lighting",
            "value": 3.6
          },
          {
            "name": "Equipment",
            "value": 52.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.2
          }
        ],
        "pv": 19.9
      },
      "IAL": {
        "total": 216.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 56.9
          },
          {
            "name": "Cooling",
            "value": 41.7
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 19.9
      }
    },
    "MU-HC": {
      "DEFAULT": {
        "total": 194.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.5
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 11.5
          }
        ],
        "pv": 4.1
      },
      "EEM1": {
        "total": 169.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.1
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 45.0
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 46.0
      },
      "EEM2": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.6
          },
          {
            "name": "Cooling",
            "value": 14.3
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.4
          }
        ],
        "pv": 46.0
      },
      "EEM3": {
        "total": 121.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.3
          },
          {
            "name": "Cooling",
            "value": 14.1
          },
          {
            "name": "DHW",
            "value": 9.1
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.5
          }
        ],
        "pv": 46.0
      },
      "EEM4": {
        "total": 94.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.8
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 9.0
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 45.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.6
          }
        ],
        "pv": 46.0
      },
      "IAL": {
        "total": 214.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 65.1
          },
          {
            "name": "Cooling",
            "value": 28.6
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 46.2
      }
    },
    "MU-HS": {
      "DEFAULT": {
        "total": 222.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 58.3
          },
          {
            "name": "Cooling",
            "value": 12.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.4
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 1.9
      },
      "EEM1": {
        "total": 196.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.4
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 40.7
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.5
          }
        ],
        "pv": 79.5
      },
      "EEM2": {
        "total": 173.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.4
          },
          {
            "name": "Cooling",
            "value": 15.5
          },
          {
            "name": "DHW",
            "value": 40.7
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 79.5
      },
      "EEM3": {
        "total": 147.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.7
          },
          {
            "name": "Cooling",
            "value": 15.3
          },
          {
            "name": "DHW",
            "value": 13.3
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 79.5
      },
      "EEM4": {
        "total": 123.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.9
          },
          {
            "name": "Cooling",
            "value": 11.7
          },
          {
            "name": "DHW",
            "value": 13.3
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 65.6
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 79.5
      },
      "IAL": {
        "total": 243.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 68.6
          },
          {
            "name": "Cooling",
            "value": 35.5
          },
          {
            "name": "DHW",
            "value": 41.1
          },
          {
            "name": "Lighting",
            "value": 11.4
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.9
          }
        ],
        "pv": 79.6
      }
    },
    "MU-L": {
      "DEFAULT": {
        "total": 178.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.6
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.7
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 151.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.0
          },
          {
            "name": "Cooling",
            "value": 10.0
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 76.4
      },
      "EEM2": {
        "total": 145.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.3
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 76.4
      },
      "EEM3": {
        "total": 118.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.9
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 15.2
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 76.4
      },
      "EEM4": {
        "total": 91.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.3
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 15.2
          },
          {
            "name": "Lighting",
            "value": 3.3
          },
          {
            "name": "Equipment",
            "value": 44.2
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 76.4
      },
      "IAL": {
        "total": 211.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 68.3
          },
          {
            "name": "Cooling",
            "value": 23.2
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 76.4
      }
    },
    "MU-S1": {
      "DEFAULT": {
        "total": 219.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 54.4
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 2.8
      },
      "EEM1": {
        "total": 191.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 23.2
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 43.4
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 73.5
      },
      "EEM2": {
        "total": 175.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.5
          },
          {
            "name": "Cooling",
            "value": 12.1
          },
          {
            "name": "DHW",
            "value": 43.4
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.9
          }
        ],
        "pv": 73.5
      },
      "EEM3": {
        "total": 148.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.8
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.9
          }
        ],
        "pv": 73.5
      },
      "EEM4": {
        "total": 116.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.3
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.6
          },
          {
            "name": "Equipment",
            "value": 52.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.4
          }
        ],
        "pv": 73.5
      },
      "IAL": {
        "total": 249.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 76.3
          },
          {
            "name": "Cooling",
            "value": 28.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.7
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 73.7
      }
    },
    "MU-S2": {
      "DEFAULT": {
        "total": 210.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 44.7
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 44.2
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 12.3
          }
        ],
        "pv": 0.9
      },
      "EEM1": {
        "total": 187.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 13.2
          },
          {
            "name": "DHW",
            "value": 44.0
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 96.0
      },
      "EEM2": {
        "total": 175.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.6
          },
          {
            "name": "Cooling",
            "value": 13.1
          },
          {
            "name": "DHW",
            "value": 44.1
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 96.0
      },
      "EEM3": {
        "total": 149.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.0
          },
          {
            "name": "Cooling",
            "value": 12.9
          },
          {
            "name": "DHW",
            "value": 16.2
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.8
          }
        ],
        "pv": 96.0
      },
      "EEM4": {
        "total": 113.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.9
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 16.2
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 42.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.6
          }
        ],
        "pv": 96.0
      },
      "IAL": {
        "total": 242.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 68.7
          },
          {
            "name": "Cooling",
            "value": 27.9
          },
          {
            "name": "DHW",
            "value": 44.2
          },
          {
            "name": "Lighting",
            "value": 22.2
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 96.0
      }
    },
    "MU-U1": {
      "DEFAULT": {
        "total": 154.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.7
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 2.3
      },
      "EEM1": {
        "total": 134.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.0
          }
        ],
        "pv": 18.7
      },
      "EEM2": {
        "total": 133.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.0
          },
          {
            "name": "Cooling",
            "value": 9.7
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 18.7
      },
      "EEM3": {
        "total": 112.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.0
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 3.9
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.2
          }
        ],
        "pv": 18.7
      },
      "EEM4": {
        "total": 86.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.1
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 3.9
          },
          {
            "name": "Lighting",
            "value": 3.3
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 10.4
          }
        ],
        "pv": 18.7
      },
      "IAL": {
        "total": 198.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.3
          },
          {
            "name": "Cooling",
            "value": 40.0
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 18.7
      }
    },
    "MU-W": {
      "DEFAULT": {
        "total": 161.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.6
          },
          {
            "name": "Cooling",
            "value": 4.8
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.8
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 2.6
      },
      "EEM1": {
        "total": 130.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.6
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 81.5
      },
      "EEM2": {
        "total": 121.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 7.3
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 6.9
          }
        ],
        "pv": 81.5
      },
      "EEM3": {
        "total": 102.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.0
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 10.1
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 6.9
          }
        ],
        "pv": 81.5
      },
      "EEM4": {
        "total": 84.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.9
          },
          {
            "name": "Cooling",
            "value": 4.4
          },
          {
            "name": "DHW",
            "value": 10.1
          },
          {
            "name": "Lighting",
            "value": 3.2
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 81.5
      },
      "IAL": {
        "total": 187.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 70.8
          },
          {
            "name": "Cooling",
            "value": 16.0
          },
          {
            "name": "DHW",
            "value": 31.4
          },
          {
            "name": "Lighting",
            "value": 7.0
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 81.5
      }
    },
    "MU-W2": {
      "DEFAULT": {
        "total": 135.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 60.8
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 5.1
          }
        ],
        "pv": 9.5
      },
      "EEM1": {
        "total": 98.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.6
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 3.9
          }
        ],
        "pv": 118.2
      },
      "EEM2": {
        "total": 88.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.4
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 4.3
          }
        ],
        "pv": 118.2
      },
      "EEM3": {
        "total": 78.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.1
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 1.4
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 4.3
          }
        ],
        "pv": 118.2
      },
      "EEM4": {
        "total": 70.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.4
          },
          {
            "name": "Cooling",
            "value": 1.7
          },
          {
            "name": "DHW",
            "value": 1.4
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 3.7
          }
        ],
        "pv": 118.2
      },
      "IAL": {
        "total": 157.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 83.7
          },
          {
            "name": "Cooling",
            "value": 6.2
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 118.2
      }
    },
    "CC-B": {
      "DEFAULT": {
        "total": 181.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.5
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 14.6
          }
        ],
        "pv": 3.4
      },
      "EEM1": {
        "total": 174.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 29.3
      },
      "EEM2": {
        "total": 168.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 11.4
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 15.9
          }
        ],
        "pv": 29.3
      },
      "EEM3": {
        "total": 155.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.8
          },
          {
            "name": "Cooling",
            "value": 11.4
          },
          {
            "name": "DHW",
            "value": 3.2
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 16.0
          }
        ],
        "pv": 29.3
      },
      "EEM4": {
        "total": 130.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.0
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 3.2
          },
          {
            "name": "Lighting",
            "value": 6.7
          },
          {
            "name": "Equipment",
            "value": 71.7
          },
          {
            "name": "Fans & Pumps",
            "value": 14.2
          }
        ],
        "pv": 29.3
      },
      "IAL": {
        "total": 239.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 44.3
          },
          {
            "name": "Cooling",
            "value": 63.9
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 29.3
      }
    },
    "CC-S1": {
      "DEFAULT": {
        "total": 259.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.1
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 13.6
          }
        ],
        "pv": 4.8
      },
      "EEM1": {
        "total": 233.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.8
          },
          {
            "name": "Cooling",
            "value": 14.5
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 119.3
      },
      "EEM2": {
        "total": 211.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.4
          },
          {
            "name": "Cooling",
            "value": 12.4
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 13.5
          }
        ],
        "pv": 119.3
      },
      "EEM3": {
        "total": 194.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 12.4
          },
          {
            "name": "DHW",
            "value": 4.3
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 13.5
          }
        ],
        "pv": 119.3
      },
      "EEM4": {
        "total": 158.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.8
          },
          {
            "name": "Cooling",
            "value": 7.9
          },
          {
            "name": "DHW",
            "value": 4.3
          },
          {
            "name": "Lighting",
            "value": 16.8
          },
          {
            "name": "Equipment",
            "value": 69.7
          },
          {
            "name": "Fans & Pumps",
            "value": 12.4
          }
        ],
        "pv": 119.3
      },
      "IAL": {
        "total": 301.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 97.6
          },
          {
            "name": "Cooling",
            "value": 28.0
          },
          {
            "name": "DHW",
            "value": 25.7
          },
          {
            "name": "Lighting",
            "value": 36.4
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 1.2
          }
        ],
        "pv": 119.4
      }
    },
    "CC-S2": {
      "DEFAULT": {
        "total": 340.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 70.1
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.4
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 19.8
          }
        ],
        "pv": 3.1
      },
      "EEM1": {
        "total": 311.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.6
          },
          {
            "name": "Cooling",
            "value": 20.3
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 17.7
          }
        ],
        "pv": 172.6
      },
      "EEM2": {
        "total": 288.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.4
          },
          {
            "name": "Cooling",
            "value": 16.4
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 18.6
          }
        ],
        "pv": 172.6
      },
      "EEM3": {
        "total": 269.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.2
          },
          {
            "name": "Cooling",
            "value": 16.4
          },
          {
            "name": "DHW",
            "value": 3.3
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 18.6
          }
        ],
        "pv": 172.6
      },
      "EEM4": {
        "total": 217.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 3.3
          },
          {
            "name": "Lighting",
            "value": 29.4
          },
          {
            "name": "Equipment",
            "value": 83.4
          },
          {
            "name": "Fans & Pumps",
            "value": 17.4
          }
        ],
        "pv": 172.6
      },
      "IAL": {
        "total": 388.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 118.0
          },
          {
            "name": "Cooling",
            "value": 29.2
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 63.7
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1.3
          }
        ],
        "pv": 172.6
      }
    },
    "CC-E1": {
      "DEFAULT": {
        "total": 182.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.1
          },
          {
            "name": "Cooling",
            "value": 8.4
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 13.7
          }
        ],
        "pv": 1.7
      },
      "EEM1": {
        "total": 160.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.3
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.0
          }
        ],
        "pv": 26.3
      },
      "EEM2": {
        "total": 157.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.2
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 26.3
      },
      "EEM3": {
        "total": 147.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.2
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 1.9
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 26.3
      },
      "EEM4": {
        "total": 121.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.4
          },
          {
            "name": "Cooling",
            "value": 7.7
          },
          {
            "name": "DHW",
            "value": 1.9
          },
          {
            "name": "Lighting",
            "value": 8.6
          },
          {
            "name": "Equipment",
            "value": 72.7
          },
          {
            "name": "Fans & Pumps",
            "value": 13.1
          }
        ],
        "pv": 26.3
      },
      "IAL": {
        "total": 232.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 43.5
          },
          {
            "name": "Cooling",
            "value": 64.3
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.9
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 26.3
      }
    },
    "CC-E2": {
      "DEFAULT": {
        "total": 389.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 203.9
          },
          {
            "name": "Cooling",
            "value": 17.6
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.6
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 30.0
          }
        ],
        "pv": 1.0
      },
      "EEM1": {
        "total": 359.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 171.0
          },
          {
            "name": "Cooling",
            "value": 17.9
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 31.9
          }
        ],
        "pv": 50.0
      },
      "EEM2": {
        "total": 206.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.7
          },
          {
            "name": "Cooling",
            "value": 17.8
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 34.7
          }
        ],
        "pv": 50.0
      },
      "EEM3": {
        "total": 191.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.7
          },
          {
            "name": "Cooling",
            "value": 17.8
          },
          {
            "name": "DHW",
            "value": 4.0
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 34.7
          }
        ],
        "pv": 50.0
      },
      "EEM4": {
        "total": 158.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.9
          },
          {
            "name": "Cooling",
            "value": 15.7
          },
          {
            "name": "DHW",
            "value": 3.9
          },
          {
            "name": "Lighting",
            "value": 14.4
          },
          {
            "name": "Equipment",
            "value": 68.0
          },
          {
            "name": "Fans & Pumps",
            "value": 31.5
          }
        ],
        "pv": 50.0
      },
      "IAL": {
        "total": 317.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 131.8
          },
          {
            "name": "Cooling",
            "value": 48.8
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.6
          },
          {
            "name": "Equipment",
            "value": 85.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 50.0
      }
    },
    "CC-E3": {
      "DEFAULT": {
        "total": 376.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 187.5
          },
          {
            "name": "Cooling",
            "value": 18.7
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 24.5
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 28.9
          }
        ],
        "pv": 0.7
      },
      "EEM1": {
        "total": 342.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 151.5
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 23.2
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 30.3
          }
        ],
        "pv": 52.7
      },
      "EEM2": {
        "total": 205.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.6
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 23.2
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 32.9
          }
        ],
        "pv": 52.7
      },
      "EEM3": {
        "total": 189.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.9
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 5.5
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 32.9
          }
        ],
        "pv": 52.7
      },
      "EEM4": {
        "total": 157.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.5
          },
          {
            "name": "Cooling",
            "value": 16.8
          },
          {
            "name": "DHW",
            "value": 5.5
          },
          {
            "name": "Lighting",
            "value": 13.8
          },
          {
            "name": "Equipment",
            "value": 70.9
          },
          {
            "name": "Fans & Pumps",
            "value": 30.2
          }
        ],
        "pv": 52.7
      },
      "IAL": {
        "total": 316.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 121.7
          },
          {
            "name": "Cooling",
            "value": 55.0
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 24.5
          },
          {
            "name": "Equipment",
            "value": 88.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 52.7
      }
    },
    "CC-FD1": {
      "DEFAULT": {
        "total": 188.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 63.5
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.4
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 14.5
          }
        ],
        "pv": 0.2
      },
      "EEM1": {
        "total": 140.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.6
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 8.5
      },
      "EEM2": {
        "total": 130.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.0
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 16.9
          }
        ],
        "pv": 8.5
      },
      "EEM3": {
        "total": 111.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.4
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 9.5
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 16.9
          }
        ],
        "pv": 8.5
      },
      "EEM4": {
        "total": 96.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.6
          },
          {
            "name": "Cooling",
            "value": 7.7
          },
          {
            "name": "DHW",
            "value": 9.5
          },
          {
            "name": "Lighting",
            "value": 6.3
          },
          {
            "name": "Equipment",
            "value": 50.1
          },
          {
            "name": "Fans & Pumps",
            "value": 15.6
          }
        ],
        "pv": 8.5
      },
      "IAL": {
        "total": 216.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 79.2
          },
          {
            "name": "Cooling",
            "value": 35.5
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.4
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 8.5
      }
    },
    "CC-FD2": {
      "DEFAULT": {
        "total": 170.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 28.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 13.3
          }
        ],
        "pv": 1.2
      },
      "EEM1": {
        "total": 152.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 14.7
      },
      "EEM2": {
        "total": 147.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.2
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 15.9
          }
        ],
        "pv": 14.7
      },
      "EEM3": {
        "total": 132.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.1
          },
          {
            "name": "Cooling",
            "value": 10.7
          },
          {
            "name": "DHW",
            "value": 6.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 16.0
          }
        ],
        "pv": 14.7
      },
      "EEM4": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.3
          },
          {
            "name": "Cooling",
            "value": 9.3
          },
          {
            "name": "DHW",
            "value": 6.9
          },
          {
            "name": "Lighting",
            "value": 6.4
          },
          {
            "name": "Equipment",
            "value": 60.6
          },
          {
            "name": "Fans & Pumps",
            "value": 14.6
          }
        ],
        "pv": 14.7
      },
      "IAL": {
        "total": 215.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.7
          },
          {
            "name": "Cooling",
            "value": 50.5
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 14.8
      }
    },
    "CC-FD3": {
      "DEFAULT": {
        "total": 167.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.6
          },
          {
            "name": "Cooling",
            "value": 8.4
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.5
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.6
          }
        ],
        "pv": 0.3
      },
      "EEM1": {
        "total": 138.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.9
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 13.9
          }
        ],
        "pv": 12.2
      },
      "EEM2": {
        "total": 132.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.1
          },
          {
            "name": "Cooling",
            "value": 10.7
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 14.9
          }
        ],
        "pv": 12.2
      },
      "EEM3": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 10.7
          },
          {
            "name": "DHW",
            "value": 10.0
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 14.9
          }
        ],
        "pv": 12.2
      },
      "EEM4": {
        "total": 97.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 9.2
          },
          {
            "name": "DHW",
            "value": 9.9
          },
          {
            "name": "Lighting",
            "value": 6.8
          },
          {
            "name": "Equipment",
            "value": 48.3
          },
          {
            "name": "Fans & Pumps",
            "value": 13.8
          }
        ],
        "pv": 12.2
      },
      "IAL": {
        "total": 201.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.2
          },
          {
            "name": "Cooling",
            "value": 35.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.5
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 12.2
      }
    },
    "RC-MR1": {
      "DEFAULT": {
        "total": 123.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.2
          },
          {
            "name": "Cooling",
            "value": 7.7
          },
          {
            "name": "DHW",
            "value": 37.7
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.7
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 112.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 73.1
      },
      "EEM2": {
        "total": 111.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.4
          },
          {
            "name": "Cooling",
            "value": 12.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 73.1
      },
      "EEM3": {
        "total": 89.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.4
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 15.6
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 73.1
      },
      "EEM4": {
        "total": 60.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.3
          },
          {
            "name": "Cooling",
            "value": 7.3
          },
          {
            "name": "DHW",
            "value": 15.6
          },
          {
            "name": "Lighting",
            "value": 2.6
          },
          {
            "name": "Equipment",
            "value": 25.0
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 73.1
      },
      "IAL": {
        "total": 149.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.7
          },
          {
            "name": "Cooling",
            "value": 27.2
          },
          {
            "name": "DHW",
            "value": 37.8
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 37.4
      }
    },
    "RC-MR2": {
      "DEFAULT": {
        "total": 137.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.0
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.2
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 113.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 66.3
      },
      "EEM2": {
        "total": 113.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.5
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.7
          }
        ],
        "pv": 66.3
      },
      "EEM3": {
        "total": 87.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.6
          },
          {
            "name": "Cooling",
            "value": 11.6
          },
          {
            "name": "DHW",
            "value": 17.9
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.7
          }
        ],
        "pv": 66.3
      },
      "EEM4": {
        "total": 58.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.1
          },
          {
            "name": "Cooling",
            "value": 6.5
          },
          {
            "name": "DHW",
            "value": 17.9
          },
          {
            "name": "Lighting",
            "value": 2.3
          },
          {
            "name": "Equipment",
            "value": 20.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.6
          }
        ],
        "pv": 66.3
      },
      "IAL": {
        "total": 162.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 45.1
          },
          {
            "name": "Cooling",
            "value": 23.9
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 25.5
      }
    },
    "RC-MR3": {
      "DEFAULT": {
        "total": 137.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.4
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.0
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 66.3
      },
      "EEM2": {
        "total": 112.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.6
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 66.3
      },
      "EEM3": {
        "total": 86.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.6
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 17.9
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 66.3
      },
      "EEM4": {
        "total": 58.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.2
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 17.9
          },
          {
            "name": "Lighting",
            "value": 2.3
          },
          {
            "name": "Equipment",
            "value": 20.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 66.3
      },
      "IAL": {
        "total": 161.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 45.6
          },
          {
            "name": "Cooling",
            "value": 23.1
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 25.5
      }
    },
    "RC-D": {
      "DEFAULT": {
        "total": 131.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 45.5
          },
          {
            "name": "Cooling",
            "value": 5.9
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.1
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 103.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.7
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.7
          }
        ],
        "pv": 97.2
      },
      "EEM2": {
        "total": 90.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.9
          },
          {
            "name": "Cooling",
            "value": 5.9
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 97.2
      },
      "EEM3": {
        "total": 78.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.6
          },
          {
            "name": "Cooling",
            "value": 5.9
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 97.2
      },
      "EEM4": {
        "total": 58.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 9.0
          },
          {
            "name": "Cooling",
            "value": 4.7
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 2.6
          },
          {
            "name": "Equipment",
            "value": 28.3
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 97.2
      },
      "IAL": {
        "total": 154.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 57.2
          },
          {
            "name": "Cooling",
            "value": 22.7
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 74.3
      }
    },
    "RC-ML": {
      "DEFAULT": {
        "total": 133.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.9
          },
          {
            "name": "Cooling",
            "value": 5.9
          },
          {
            "name": "DHW",
            "value": 24.5
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.0
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.0
          }
        ],
        "pv": 89.4
      },
      "EEM2": {
        "total": 97.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.6
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 89.4
      },
      "EEM3": {
        "total": 84.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.0
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 8.9
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.6
          }
        ],
        "pv": 89.4
      },
      "EEM4": {
        "total": 61.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 4.6
          },
          {
            "name": "DHW",
            "value": 8.9
          },
          {
            "name": "Lighting",
            "value": 2.9
          },
          {
            "name": "Equipment",
            "value": 31.5
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 89.4
      },
      "IAL": {
        "total": 156.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 22.2
          },
          {
            "name": "DHW",
            "value": 24.5
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 52.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 68.2
      }
    },
    "RC-T": {
      "DEFAULT": {
        "total": 135.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 32.0
          },
          {
            "name": "Cooling",
            "value": 5.9
          },
          {
            "name": "DHW",
            "value": 26.9
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 111.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.1
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 81.4
      },
      "EEM2": {
        "total": 105.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.3
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.7
          }
        ],
        "pv": 81.4
      },
      "EEM3": {
        "total": 90.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.3
          },
          {
            "name": "Cooling",
            "value": 6.3
          },
          {
            "name": "DHW",
            "value": 11.2
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.8
          }
        ],
        "pv": 81.4
      },
      "EEM4": {
        "total": 65.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.8
          },
          {
            "name": "Cooling",
            "value": 4.5
          },
          {
            "name": "DHW",
            "value": 11.2
          },
          {
            "name": "Lighting",
            "value": 3.2
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 6.6
          }
        ],
        "pv": 81.4
      },
      "IAL": {
        "total": 158.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 21.7
          },
          {
            "name": "DHW",
            "value": 26.9
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 58.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 62.2
      }
    },
    "RC-R": {
      "DEFAULT": {
        "total": 131.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 44.8
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 0.0
      },
      "EEM1": {
        "total": 103.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.8
          }
        ],
        "pv": 87.0
      },
      "EEM2": {
        "total": 91.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.7
          },
          {
            "name": "Cooling",
            "value": 6.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 87.0
      },
      "EEM3": {
        "total": 78.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.4
          },
          {
            "name": "Cooling",
            "value": 6.2
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 87.0
      },
      "EEM4": {
        "total": 58.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.8
          },
          {
            "name": "Cooling",
            "value": 5.0
          },
          {
            "name": "DHW",
            "value": 6.6
          },
          {
            "name": "Lighting",
            "value": 2.6
          },
          {
            "name": "Equipment",
            "value": 28.3
          },
          {
            "name": "Fans & Pumps",
            "value": 6.5
          }
        ],
        "pv": 87.0
      },
      "IAL": {
        "total": 154.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 56.5
          },
          {
            "name": "Cooling",
            "value": 23.8
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 66.5
      }
    },
    "RC-HR1": {
      "DEFAULT": {
        "total": 146.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 32.6
          },
          {
            "name": "Cooling",
            "value": 6.4
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 1.9
      },
      "EEM1": {
        "total": 120.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.4
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 48.1
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 44.0
      },
      "EEM2": {
        "total": 120.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.5
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 48.1
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 44.0
      },
      "EEM3": {
        "total": 88.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.1
          },
          {
            "name": "Cooling",
            "value": 12.8
          },
          {
            "name": "DHW",
            "value": 12.5
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 44.0
      },
      "EEM4": {
        "total": 57.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 5.7
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 2.0
          },
          {
            "name": "Equipment",
            "value": 20.6
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 44.0
      },
      "IAL": {
        "total": 171.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 52.5
          },
          {
            "name": "Cooling",
            "value": 21.0
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 18.8
      }
    },
    "RC-HR2": {
      "DEFAULT": {
        "total": 155.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 36.3
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.7
          }
        ],
        "pv": 3.3
      },
      "EEM1": {
        "total": 125.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.1
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 26.0
      },
      "EEM2": {
        "total": 126.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.6
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.1
          }
        ],
        "pv": 26.0
      },
      "EEM3": {
        "total": 89.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.9
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 8.0
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 26.0
      },
      "EEM4": {
        "total": 57.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.6
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 8.1
          },
          {
            "name": "Lighting",
            "value": 1.8
          },
          {
            "name": "Equipment",
            "value": 20.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 26.0
      },
      "IAL": {
        "total": 180.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 60.1
          },
          {
            "name": "Cooling",
            "value": 18.2
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 13.5
      }
    }
  },
  "high-performance-necb": {
    "RS-I1": {
      "DEFAULT": {
        "total": 148.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 40.0
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 109.8
      },
      "EEM1": {
        "total": 148.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 40.0
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 109.8
      },
      "EEM2": {
        "total": 148.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 40.0
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 109.8
      },
      "EEM3": {
        "total": 148.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 40.0
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 109.8
      },
      "EEM4": {
        "total": 148.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 9.6
          },
          {
            "name": "DHW",
            "value": 40.0
          },
          {
            "name": "Lighting",
            "value": 8.2
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 9.0
          }
        ],
        "pv": 109.8
      },
      "IAL": {
        "total": 299.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 93.8
          },
          {
            "name": "Cooling",
            "value": 108.8
          },
          {
            "name": "DHW",
            "value": 40.3
          },
          {
            "name": "Lighting",
            "value": 8.3
          },
          {
            "name": "Equipment",
            "value": 43.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 109.8
      }
    },
    "RS-S": {
      "DEFAULT": {
        "total": 182.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.1
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 97.1
      },
      "EEM1": {
        "total": 182.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.1
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 97.1
      },
      "EEM2": {
        "total": 182.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.1
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 97.1
      },
      "EEM3": {
        "total": 182.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.1
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 97.1
      },
      "EEM4": {
        "total": 182.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 42.1
          },
          {
            "name": "Cooling",
            "value": 9.0
          },
          {
            "name": "DHW",
            "value": 36.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 97.1
      },
      "IAL": {
        "total": 253.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 92.6
          },
          {
            "name": "Cooling",
            "value": 36.3
          },
          {
            "name": "DHW",
            "value": 37.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 73.6
          },
          {
            "name": "Fans & Pumps",
            "value": 1.1
          }
        ],
        "pv": 97.2
      }
    },
    "RS-I2": {
      "DEFAULT": {
        "total": 128.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.7
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 84.4
      },
      "EEM1": {
        "total": 128.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.7
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 84.4
      },
      "EEM2": {
        "total": 128.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.7
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 84.4
      },
      "EEM3": {
        "total": 128.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.7
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 84.4
      },
      "EEM4": {
        "total": 128.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.7
          },
          {
            "name": "Cooling",
            "value": 7.5
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.3
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 7.4
          }
        ],
        "pv": 84.4
      },
      "IAL": {
        "total": 276.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 91.1
          },
          {
            "name": "Cooling",
            "value": 111.9
          },
          {
            "name": "DHW",
            "value": 31.2
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 29.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.4
          }
        ],
        "pv": 84.4
      }
    },
    "RS-I3": {
      "DEFAULT": {
        "total": 144.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.9
          },
          {
            "name": "Cooling",
            "value": 8.1
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 137.0
      },
      "EEM1": {
        "total": 144.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.9
          },
          {
            "name": "Cooling",
            "value": 8.1
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 137.0
      },
      "EEM2": {
        "total": 144.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.9
          },
          {
            "name": "Cooling",
            "value": 8.1
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 137.0
      },
      "EEM3": {
        "total": 144.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.9
          },
          {
            "name": "Cooling",
            "value": 8.1
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 137.0
      },
      "EEM4": {
        "total": 144.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.9
          },
          {
            "name": "Cooling",
            "value": 8.1
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 137.0
      },
      "IAL": {
        "total": 257.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 99.0
          },
          {
            "name": "Cooling",
            "value": 61.8
          },
          {
            "name": "DHW",
            "value": 24.4
          },
          {
            "name": "Lighting",
            "value": 10.4
          },
          {
            "name": "Equipment",
            "value": 57.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 137.0
      }
    },
    "RS-I4": {
      "DEFAULT": {
        "total": 120.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 34.2
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 91.3
      },
      "EEM1": {
        "total": 120.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 34.2
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 91.3
      },
      "EEM2": {
        "total": 120.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 34.2
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 91.3
      },
      "EEM3": {
        "total": 120.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 34.2
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 91.3
      },
      "EEM4": {
        "total": 120.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 34.2
          },
          {
            "name": "Cooling",
            "value": 8.2
          },
          {
            "name": "DHW",
            "value": 32.4
          },
          {
            "name": "Lighting",
            "value": 8.9
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.0
          }
        ],
        "pv": 91.3
      },
      "IAL": {
        "total": 274.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 84.5
          },
          {
            "name": "Cooling",
            "value": 119.4
          },
          {
            "name": "DHW",
            "value": 32.5
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 25.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.3
          }
        ],
        "pv": 91.3
      }
    },
    "IC-DC": {
      "DEFAULT": {
        "total": 3663.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.1
          }
        ],
        "pv": 163.5
      },
      "EEM1": {
        "total": 3663.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.1
          }
        ],
        "pv": 163.5
      },
      "EEM2": {
        "total": 3663.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.1
          }
        ],
        "pv": 163.5
      },
      "EEM3": {
        "total": 3663.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.1
          }
        ],
        "pv": 163.5
      },
      "EEM4": {
        "total": 3663.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.8
          },
          {
            "name": "Cooling",
            "value": 440.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 2713.9
          },
          {
            "name": "Fans & Pumps",
            "value": 332.1
          }
        ],
        "pv": 163.5
      },
      "IAL": {
        "total": 6378.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 3054.0
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 3215.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 163.5
      }
    },
    "IC-DE": {
      "DEFAULT": {
        "total": 11914.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.7
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.1
          }
        ],
        "pv": 118.7
      },
      "EEM1": {
        "total": 11914.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.7
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.1
          }
        ],
        "pv": 118.7
      },
      "EEM2": {
        "total": 11914.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.7
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.1
          }
        ],
        "pv": 118.7
      },
      "EEM3": {
        "total": 11914.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.7
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.1
          }
        ],
        "pv": 118.7
      },
      "EEM4": {
        "total": 11914.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.7
          },
          {
            "name": "Cooling",
            "value": 1358.5
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9035.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1115.1
          }
        ],
        "pv": 118.7
      },
      "IAL": {
        "total": 21525.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 75.8
          },
          {
            "name": "Cooling",
            "value": 10652.1
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 10755.9
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 118.7
      }
    },
    "MU-C1": {
      "DEFAULT": {
        "total": 180.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.2
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 18.5
          }
        ],
        "pv": 25.7
      },
      "EEM1": {
        "total": 180.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.2
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 18.5
          }
        ],
        "pv": 25.7
      },
      "EEM2": {
        "total": 180.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.2
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 18.5
          }
        ],
        "pv": 25.7
      },
      "EEM3": {
        "total": 180.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.2
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 18.5
          }
        ],
        "pv": 25.7
      },
      "EEM4": {
        "total": 180.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.2
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 11.8
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 18.5
          }
        ],
        "pv": 25.7
      },
      "IAL": {
        "total": 282.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 81.5
          },
          {
            "name": "Cooling",
            "value": 87.9
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 11.9
          },
          {
            "name": "Equipment",
            "value": 57.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 25.7
      }
    },
    "MU-C2": {
      "DEFAULT": {
        "total": 117.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 21.7
      },
      "EEM1": {
        "total": 117.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 21.7
      },
      "EEM2": {
        "total": 117.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 21.7
      },
      "EEM3": {
        "total": 117.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 21.7
      },
      "EEM4": {
        "total": 117.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.3
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 21.7
      },
      "IAL": {
        "total": 214.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 72.6
          },
          {
            "name": "Cooling",
            "value": 55.0
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 39.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 21.7
      }
    },
    "MU-HC": {
      "DEFAULT": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.4
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 47.1
      },
      "EEM1": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.4
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 47.1
      },
      "EEM2": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.4
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 47.1
      },
      "EEM3": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.4
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 47.1
      },
      "EEM4": {
        "total": 152.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.4
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 47.1
      },
      "IAL": {
        "total": 284.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 70.1
          },
          {
            "name": "Cooling",
            "value": 124.6
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 32.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 47.2
      }
    },
    "MU-HS": {
      "DEFAULT": {
        "total": 176.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.2
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 40.8
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 81.9
      },
      "EEM1": {
        "total": 176.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.2
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 40.8
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 81.9
      },
      "EEM2": {
        "total": 176.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.2
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 40.8
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 81.9
      },
      "EEM3": {
        "total": 176.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.2
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 40.8
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 81.9
      },
      "EEM4": {
        "total": 176.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.2
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 40.8
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 81.9
      },
      "IAL": {
        "total": 280.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 89.1
          },
          {
            "name": "Cooling",
            "value": 90.6
          },
          {
            "name": "DHW",
            "value": 41.1
          },
          {
            "name": "Lighting",
            "value": 10.1
          },
          {
            "name": "Equipment",
            "value": 44.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.9
          }
        ],
        "pv": 81.9
      }
    },
    "MU-L": {
      "DEFAULT": {
        "total": 140.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.2
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.7
          }
        ],
        "pv": 77.3
      },
      "EEM1": {
        "total": 140.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.2
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.7
          }
        ],
        "pv": 77.3
      },
      "EEM2": {
        "total": 140.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.2
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.7
          }
        ],
        "pv": 77.3
      },
      "EEM3": {
        "total": 140.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.2
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.7
          }
        ],
        "pv": 77.3
      },
      "EEM4": {
        "total": 140.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.2
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 7.3
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.7
          }
        ],
        "pv": 77.3
      },
      "IAL": {
        "total": 258.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 76.9
          },
          {
            "name": "Cooling",
            "value": 88.3
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 7.4
          },
          {
            "name": "Equipment",
            "value": 37.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 77.3
      }
    },
    "MU-S1": {
      "DEFAULT": {
        "total": 181.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 73.9
      },
      "EEM1": {
        "total": 181.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 73.9
      },
      "EEM2": {
        "total": 181.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 73.9
      },
      "EEM3": {
        "total": 181.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 73.9
      },
      "EEM4": {
        "total": 181.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 10.9
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.1
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 9.6
          }
        ],
        "pv": 73.9
      },
      "IAL": {
        "total": 325.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 82.2
          },
          {
            "name": "Cooling",
            "value": 127.0
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.2
          },
          {
            "name": "Equipment",
            "value": 40.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 74.1
      }
    },
    "MU-S2": {
      "DEFAULT": {
        "total": 177.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.6
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 44.1
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 100.2
      },
      "EEM1": {
        "total": 177.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.6
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 44.1
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 100.2
      },
      "EEM2": {
        "total": 177.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.6
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 44.1
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 100.2
      },
      "EEM3": {
        "total": 177.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.6
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 44.1
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 100.2
      },
      "EEM4": {
        "total": 177.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 40.6
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 44.1
          },
          {
            "name": "Lighting",
            "value": 21.5
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 100.2
      },
      "IAL": {
        "total": 282.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 76.9
          },
          {
            "name": "Cooling",
            "value": 89.9
          },
          {
            "name": "DHW",
            "value": 44.2
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 32.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 100.2
      }
    },
    "MU-U1": {
      "DEFAULT": {
        "total": 99.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.1
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 20.5
      },
      "EEM1": {
        "total": 99.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.1
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 20.5
      },
      "EEM2": {
        "total": 99.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.1
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 20.5
      },
      "EEM3": {
        "total": 99.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.1
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 20.5
      },
      "EEM4": {
        "total": 99.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.1
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 8.1
          }
        ],
        "pv": 20.5
      },
      "IAL": {
        "total": 184.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 63.5
          },
          {
            "name": "Cooling",
            "value": 44.1
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 35.9
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 20.5
      }
    },
    "MU-W": {
      "DEFAULT": {
        "total": 129.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.4
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 78.1
      },
      "EEM1": {
        "total": 129.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.4
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 78.1
      },
      "EEM2": {
        "total": 129.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.4
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 78.1
      },
      "EEM3": {
        "total": 129.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.4
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 78.1
      },
      "EEM4": {
        "total": 129.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.4
          },
          {
            "name": "Cooling",
            "value": 5.8
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.5
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 6.2
          }
        ],
        "pv": 78.1
      },
      "IAL": {
        "total": 239.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 82.6
          },
          {
            "name": "Cooling",
            "value": 80.3
          },
          {
            "name": "DHW",
            "value": 31.4
          },
          {
            "name": "Lighting",
            "value": 6.6
          },
          {
            "name": "Equipment",
            "value": 33.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 78.1
      }
    },
    "MU-W2": {
      "DEFAULT": {
        "total": 110.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 3.5
          }
        ],
        "pv": 118.5
      },
      "EEM1": {
        "total": 110.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 3.5
          }
        ],
        "pv": 118.5
      },
      "EEM2": {
        "total": 110.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 3.5
          }
        ],
        "pv": 118.5
      },
      "EEM3": {
        "total": 110.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 3.5
          }
        ],
        "pv": 118.5
      },
      "EEM4": {
        "total": 110.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 1.8
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 3.5
          }
        ],
        "pv": 118.5
      },
      "IAL": {
        "total": 173.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 96.4
          },
          {
            "name": "Cooling",
            "value": 23.1
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 27.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 118.5
      }
    },
    "CC-B": {
      "DEFAULT": {
        "total": 113.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.8
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 30.5
      },
      "EEM1": {
        "total": 113.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.8
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 30.5
      },
      "EEM2": {
        "total": 113.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.8
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 30.5
      },
      "EEM3": {
        "total": 113.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.8
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 30.5
      },
      "EEM4": {
        "total": 113.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.8
          },
          {
            "name": "Cooling",
            "value": 6.1
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 30.5
      },
      "IAL": {
        "total": 226.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.2
          },
          {
            "name": "Cooling",
            "value": 84.3
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 34.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 30.5
      }
    },
    "CC-S1": {
      "DEFAULT": {
        "total": 232.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 12.8
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 128.1
      },
      "EEM1": {
        "total": 232.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 12.8
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 128.1
      },
      "EEM2": {
        "total": 232.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 12.8
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 128.1
      },
      "EEM3": {
        "total": 232.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 12.8
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 128.1
      },
      "EEM4": {
        "total": 232.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.3
          },
          {
            "name": "Cooling",
            "value": 12.8
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.3
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.0
          }
        ],
        "pv": 128.1
      },
      "IAL": {
        "total": 340.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 124.6
          },
          {
            "name": "Cooling",
            "value": 67.7
          },
          {
            "name": "DHW",
            "value": 25.7
          },
          {
            "name": "Lighting",
            "value": 36.5
          },
          {
            "name": "Equipment",
            "value": 56.3
          },
          {
            "name": "Fans & Pumps",
            "value": 1.2
          }
        ],
        "pv": 128.1
      }
    },
    "CC-S2": {
      "DEFAULT": {
        "total": 315.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 71.3
          },
          {
            "name": "Cooling",
            "value": 18.8
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 14.7
          }
        ],
        "pv": 185.5
      },
      "EEM1": {
        "total": 315.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 71.3
          },
          {
            "name": "Cooling",
            "value": 18.8
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 14.7
          }
        ],
        "pv": 185.5
      },
      "EEM2": {
        "total": 315.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 71.3
          },
          {
            "name": "Cooling",
            "value": 18.8
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 14.7
          }
        ],
        "pv": 185.5
      },
      "EEM3": {
        "total": 315.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 71.3
          },
          {
            "name": "Cooling",
            "value": 18.8
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 14.7
          }
        ],
        "pv": 185.5
      },
      "EEM4": {
        "total": 315.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 71.3
          },
          {
            "name": "Cooling",
            "value": 18.8
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.5
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 14.7
          }
        ],
        "pv": 185.5
      },
      "IAL": {
        "total": 411.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 142.6
          },
          {
            "name": "Cooling",
            "value": 56.7
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 63.8
          },
          {
            "name": "Equipment",
            "value": 67.6
          },
          {
            "name": "Fans & Pumps",
            "value": 1.3
          }
        ],
        "pv": 185.5
      }
    },
    "CC-E1": {
      "DEFAULT": {
        "total": 89.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 4.5
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 28.0
      },
      "EEM1": {
        "total": 89.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 4.5
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 28.0
      },
      "EEM2": {
        "total": 89.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 4.5
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 28.0
      },
      "EEM3": {
        "total": 89.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 4.5
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 28.0
      },
      "EEM4": {
        "total": 89.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.5
          },
          {
            "name": "Cooling",
            "value": 4.5
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 28.8
          },
          {
            "name": "Fans & Pumps",
            "value": 7.6
          }
        ],
        "pv": 28.0
      },
      "IAL": {
        "total": 206.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 43.0
          },
          {
            "name": "Cooling",
            "value": 98.3
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 16.4
          },
          {
            "name": "Equipment",
            "value": 29.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 28.0
      }
    },
    "CC-E2": {
      "DEFAULT": {
        "total": 279.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 154.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 28.1
          }
        ],
        "pv": 51.2
      },
      "EEM1": {
        "total": 279.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 154.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 28.1
          }
        ],
        "pv": 51.2
      },
      "EEM2": {
        "total": 279.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 154.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 28.1
          }
        ],
        "pv": 51.2
      },
      "EEM3": {
        "total": 279.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 154.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 28.1
          }
        ],
        "pv": 51.2
      },
      "EEM4": {
        "total": 279.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 154.4
          },
          {
            "name": "Cooling",
            "value": 13.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 22.9
          },
          {
            "name": "Equipment",
            "value": 32.6
          },
          {
            "name": "Fans & Pumps",
            "value": 28.1
          }
        ],
        "pv": 51.2
      },
      "IAL": {
        "total": 315.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 128.6
          },
          {
            "name": "Cooling",
            "value": 106.0
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 23.0
          },
          {
            "name": "Equipment",
            "value": 33.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 51.5
      }
    },
    "CC-E3": {
      "DEFAULT": {
        "total": 269.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 141.0
          },
          {
            "name": "Cooling",
            "value": 14.1
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 27.3
          }
        ],
        "pv": 54.4
      },
      "EEM1": {
        "total": 269.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 141.0
          },
          {
            "name": "Cooling",
            "value": 14.1
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 27.3
          }
        ],
        "pv": 54.4
      },
      "EEM2": {
        "total": 269.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 141.0
          },
          {
            "name": "Cooling",
            "value": 14.1
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 27.3
          }
        ],
        "pv": 54.4
      },
      "EEM3": {
        "total": 269.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 141.0
          },
          {
            "name": "Cooling",
            "value": 14.1
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 27.3
          }
        ],
        "pv": 54.4
      },
      "EEM4": {
        "total": 269.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 141.0
          },
          {
            "name": "Cooling",
            "value": 14.1
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.6
          },
          {
            "name": "Equipment",
            "value": 34.5
          },
          {
            "name": "Fans & Pumps",
            "value": 27.3
          }
        ],
        "pv": 54.4
      },
      "IAL": {
        "total": 313.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 115.4
          },
          {
            "name": "Cooling",
            "value": 113.2
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 21.7
          },
          {
            "name": "Equipment",
            "value": 36.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 54.6
      }
    },
    "CC-FD1": {
      "DEFAULT": {
        "total": 112.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 12.7
          }
        ],
        "pv": 8.9
      },
      "EEM1": {
        "total": 112.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 12.7
          }
        ],
        "pv": 8.9
      },
      "EEM2": {
        "total": 112.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 12.7
          }
        ],
        "pv": 8.9
      },
      "EEM3": {
        "total": 112.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 12.7
          }
        ],
        "pv": 8.9
      },
      "EEM4": {
        "total": 112.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 7.6
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.3
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 12.7
          }
        ],
        "pv": 8.9
      },
      "IAL": {
        "total": 278.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 48.5
          },
          {
            "name": "Cooling",
            "value": 154.0
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.7
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 9.0
      }
    },
    "CC-FD2": {
      "DEFAULT": {
        "total": 109.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.7
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 15.5
      },
      "EEM1": {
        "total": 109.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.7
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 15.5
      },
      "EEM2": {
        "total": 109.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.7
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 15.5
      },
      "EEM3": {
        "total": 109.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.7
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 15.5
      },
      "EEM4": {
        "total": 109.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.7
          },
          {
            "name": "Cooling",
            "value": 7.4
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 10.3
          }
        ],
        "pv": 15.5
      },
      "IAL": {
        "total": 253.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.3
          },
          {
            "name": "Cooling",
            "value": 124.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 33.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 15.6
      }
    },
    "CC-FD3": {
      "DEFAULT": {
        "total": 119.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.7
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 13.2
      },
      "EEM1": {
        "total": 119.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.7
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 13.2
      },
      "EEM2": {
        "total": 119.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.7
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 13.2
      },
      "EEM3": {
        "total": 119.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.7
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 13.2
      },
      "EEM4": {
        "total": 119.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.7
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 10.9
          }
        ],
        "pv": 13.2
      },
      "IAL": {
        "total": 239.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.7
          },
          {
            "name": "Cooling",
            "value": 104.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 34.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 13.2
      }
    },
    "RC-MR1": {
      "DEFAULT": {
        "total": 100.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "EEM1": {
        "total": 100.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "EEM2": {
        "total": 100.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "EEM3": {
        "total": 100.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "EEM4": {
        "total": 100.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 74.6
      },
      "IAL": {
        "total": 195.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.3
          },
          {
            "name": "Cooling",
            "value": 81.8
          },
          {
            "name": "DHW",
            "value": 37.8
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 31.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 39.9
      }
    },
    "RC-MR2": {
      "DEFAULT": {
        "total": 99.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.8
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 66.8
      },
      "EEM1": {
        "total": 99.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.8
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 66.8
      },
      "EEM2": {
        "total": 99.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.8
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 66.8
      },
      "EEM3": {
        "total": 99.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.8
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 66.8
      },
      "EEM4": {
        "total": 99.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.8
          },
          {
            "name": "Cooling",
            "value": 9.5
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.9
          }
        ],
        "pv": 66.8
      },
      "IAL": {
        "total": 200.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.2
          },
          {
            "name": "Cooling",
            "value": 92.1
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 27.7
      }
    },
    "RC-MR3": {
      "DEFAULT": {
        "total": 99.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "EEM1": {
        "total": 99.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "EEM2": {
        "total": 99.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "EEM3": {
        "total": 99.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "EEM4": {
        "total": 99.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.2
          },
          {
            "name": "Cooling",
            "value": 9.1
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.8
          }
        ],
        "pv": 66.8
      },
      "IAL": {
        "total": 200.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.9
          },
          {
            "name": "Cooling",
            "value": 91.5
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 4.8
          },
          {
            "name": "Equipment",
            "value": 19.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 27.7
      }
    },
    "RC-D": {
      "DEFAULT": {
        "total": 108.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.7
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 100.7
      },
      "EEM1": {
        "total": 108.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.7
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 100.7
      },
      "EEM2": {
        "total": 108.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.7
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 100.7
      },
      "EEM3": {
        "total": 108.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.7
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 100.7
      },
      "EEM4": {
        "total": 108.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 21.7
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 100.7
      },
      "IAL": {
        "total": 163.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 64.9
          },
          {
            "name": "Cooling",
            "value": 24.8
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 77.0
      }
    },
    "RC-ML": {
      "DEFAULT": {
        "total": 111.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.2
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.1
          }
        ],
        "pv": 93.0
      },
      "EEM1": {
        "total": 111.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.2
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.1
          }
        ],
        "pv": 93.0
      },
      "EEM2": {
        "total": 111.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.2
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.1
          }
        ],
        "pv": 93.0
      },
      "EEM3": {
        "total": 111.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.2
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.1
          }
        ],
        "pv": 93.0
      },
      "EEM4": {
        "total": 111.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.2
          },
          {
            "name": "Cooling",
            "value": 7.0
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.1
          }
        ],
        "pv": 93.0
      },
      "IAL": {
        "total": 165.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 58.8
          },
          {
            "name": "Cooling",
            "value": 24.2
          },
          {
            "name": "DHW",
            "value": 24.5
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 52.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 71.0
      }
    },
    "RC-T": {
      "DEFAULT": {
        "total": 114.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.4
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 85.2
      },
      "EEM1": {
        "total": 114.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.4
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 85.2
      },
      "EEM2": {
        "total": 114.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.4
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 85.2
      },
      "EEM3": {
        "total": 114.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.4
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 85.2
      },
      "EEM4": {
        "total": 114.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 10.4
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.4
          }
        ],
        "pv": 85.2
      },
      "IAL": {
        "total": 167.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 52.5
          },
          {
            "name": "Cooling",
            "value": 23.7
          },
          {
            "name": "DHW",
            "value": 26.9
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 58.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 65.1
      }
    },
    "RC-R": {
      "DEFAULT": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.7
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 90.5
      },
      "EEM1": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.7
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 90.5
      },
      "EEM2": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.7
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 90.5
      },
      "EEM3": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.7
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 90.5
      },
      "EEM4": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 20.7
          },
          {
            "name": "Cooling",
            "value": 7.2
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.9
          }
        ],
        "pv": 90.5
      },
      "IAL": {
        "total": 163.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 63.9
          },
          {
            "name": "Cooling",
            "value": 25.8
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 69.1
      }
    },
    "RC-HR1": {
      "DEFAULT": {
        "total": 103.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "EEM1": {
        "total": 103.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "EEM2": {
        "total": 103.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "EEM3": {
        "total": 103.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "EEM4": {
        "total": 103.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.3
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 9.1
          }
        ],
        "pv": 45.8
      },
      "IAL": {
        "total": 213.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 38.7
          },
          {
            "name": "Cooling",
            "value": 100.4
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 4.3
          },
          {
            "name": "Equipment",
            "value": 19.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 20.3
      }
    },
    "RC-HR2": {
      "DEFAULT": {
        "total": 107.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.0
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 28.8
      },
      "EEM1": {
        "total": 107.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.0
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 28.8
      },
      "EEM2": {
        "total": 107.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.0
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 28.8
      },
      "EEM3": {
        "total": 107.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.0
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 28.8
      },
      "EEM4": {
        "total": 107.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.0
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 28.8
      },
      "IAL": {
        "total": 210.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 41.6
          },
          {
            "name": "Cooling",
            "value": 90.3
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 19.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 14.4
      }
    }
  },
  "high-performance-ashrae": {
    "RS-I1": {
      "DEFAULT": {
        "total": 163.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 11.1
          },
          {
            "name": "DHW",
            "value": 39.9
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 104.8
      },
      "EEM1": {
        "total": 163.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 11.1
          },
          {
            "name": "DHW",
            "value": 39.9
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 104.8
      },
      "EEM2": {
        "total": 163.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 11.1
          },
          {
            "name": "DHW",
            "value": 39.9
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 104.8
      },
      "EEM3": {
        "total": 163.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 11.1
          },
          {
            "name": "DHW",
            "value": 39.9
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 104.8
      },
      "EEM4": {
        "total": 163.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.5
          },
          {
            "name": "Cooling",
            "value": 11.1
          },
          {
            "name": "DHW",
            "value": 39.9
          },
          {
            "name": "Lighting",
            "value": 8.7
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 10.5
          }
        ],
        "pv": 104.8
      },
      "IAL": {
        "total": 234.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 81.5
          },
          {
            "name": "Cooling",
            "value": 26.4
          },
          {
            "name": "DHW",
            "value": 40.3
          },
          {
            "name": "Lighting",
            "value": 8.8
          },
          {
            "name": "Equipment",
            "value": 73.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 104.8
      }
    },
    "RS-S": {
      "DEFAULT": {
        "total": 183.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.9
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 36.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 93.8
      },
      "EEM1": {
        "total": 183.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.9
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 36.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 93.8
      },
      "EEM2": {
        "total": 183.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.9
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 36.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 93.8
      },
      "EEM3": {
        "total": 183.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.9
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 36.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 93.8
      },
      "EEM4": {
        "total": 183.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.9
          },
          {
            "name": "Cooling",
            "value": 9.9
          },
          {
            "name": "DHW",
            "value": 36.4
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 93.8
      },
      "IAL": {
        "total": 235.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.5
          },
          {
            "name": "Cooling",
            "value": 29.9
          },
          {
            "name": "DHW",
            "value": 37.5
          },
          {
            "name": "Lighting",
            "value": 7.8
          },
          {
            "name": "Equipment",
            "value": 92.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1.1
          }
        ],
        "pv": 93.8
      }
    },
    "RS-I2": {
      "DEFAULT": {
        "total": 132.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "EEM1": {
        "total": 132.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "EEM2": {
        "total": 132.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "EEM3": {
        "total": 132.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "EEM4": {
        "total": 132.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 14.2
          },
          {
            "name": "Cooling",
            "value": 10.2
          },
          {
            "name": "DHW",
            "value": 31.1
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 9.2
          }
        ],
        "pv": 81.1
      },
      "IAL": {
        "total": 209.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 88.7
          },
          {
            "name": "Cooling",
            "value": 23.0
          },
          {
            "name": "DHW",
            "value": 31.2
          },
          {
            "name": "Lighting",
            "value": 10.0
          },
          {
            "name": "Equipment",
            "value": 53.1
          },
          {
            "name": "Fans & Pumps",
            "value": 0.4
          }
        ],
        "pv": 81.1
      }
    },
    "RS-I3": {
      "DEFAULT": {
        "total": 149.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.8
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 128.5
      },
      "EEM1": {
        "total": 149.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.8
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 128.5
      },
      "EEM2": {
        "total": 149.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.8
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 128.5
      },
      "EEM3": {
        "total": 149.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.8
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 128.5
      },
      "EEM4": {
        "total": 149.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 15.8
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 23.6
          },
          {
            "name": "Lighting",
            "value": 10.2
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 9.3
          }
        ],
        "pv": 128.5
      },
      "IAL": {
        "total": 226.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 87.3
          },
          {
            "name": "Cooling",
            "value": 23.1
          },
          {
            "name": "DHW",
            "value": 24.4
          },
          {
            "name": "Lighting",
            "value": 10.5
          },
          {
            "name": "Equipment",
            "value": 76.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 128.5
      }
    },
    "RS-I4": {
      "DEFAULT": {
        "total": 124.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.2
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 32.3
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 87.1
      },
      "EEM1": {
        "total": 124.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.2
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 32.3
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 87.1
      },
      "EEM2": {
        "total": 124.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.2
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 32.3
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 87.1
      },
      "EEM3": {
        "total": 124.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.2
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 32.3
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 87.1
      },
      "EEM4": {
        "total": 124.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.2
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 32.3
          },
          {
            "name": "Lighting",
            "value": 9.5
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 10.2
          }
        ],
        "pv": 87.1
      },
      "IAL": {
        "total": 207.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 91.8
          },
          {
            "name": "Cooling",
            "value": 22.2
          },
          {
            "name": "DHW",
            "value": 32.5
          },
          {
            "name": "Lighting",
            "value": 9.7
          },
          {
            "name": "Equipment",
            "value": 48.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.3
          }
        ],
        "pv": 87.1
      }
    },
    "IC-DC": {
      "DEFAULT": {
        "total": 3670.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 445.6
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.2
          }
        ],
        "pv": 155.4
      },
      "EEM1": {
        "total": 3670.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 445.6
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.2
          }
        ],
        "pv": 155.4
      },
      "EEM2": {
        "total": 3670.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 445.6
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.2
          }
        ],
        "pv": 155.4
      },
      "EEM3": {
        "total": 3670.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 445.6
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.2
          }
        ],
        "pv": 155.4
      },
      "EEM4": {
        "total": 3670.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 445.6
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.8
          },
          {
            "name": "Equipment",
            "value": 2724.2
          },
          {
            "name": "Fans & Pumps",
            "value": 333.2
          }
        ],
        "pv": 155.4
      },
      "IAL": {
        "total": 6358.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 55.2
          },
          {
            "name": "Cooling",
            "value": 3030.9
          },
          {
            "name": "DHW",
            "value": 10.5
          },
          {
            "name": "Lighting",
            "value": 31.9
          },
          {
            "name": "Equipment",
            "value": 3226.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 155.4
      }
    },
    "IC-DE": {
      "DEFAULT": {
        "total": 11953.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.1
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1117.6
          }
        ],
        "pv": 113.9
      },
      "EEM1": {
        "total": 11953.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.1
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1117.6
          }
        ],
        "pv": 113.9
      },
      "EEM2": {
        "total": 11953.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.1
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1117.6
          }
        ],
        "pv": 113.9
      },
      "EEM3": {
        "total": 11953.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.1
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1117.6
          }
        ],
        "pv": 113.9
      },
      "EEM4": {
        "total": 11953.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.1
          },
          {
            "name": "Cooling",
            "value": 1375.6
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 9052.7
          },
          {
            "name": "Fans & Pumps",
            "value": 1117.6
          }
        ],
        "pv": 113.9
      },
      "IAL": {
        "total": 21501.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 63.1
          },
          {
            "name": "Cooling",
            "value": 10623.2
          },
          {
            "name": "DHW",
            "value": 13.2
          },
          {
            "name": "Lighting",
            "value": 24.4
          },
          {
            "name": "Equipment",
            "value": 10772.8
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 113.9
      }
    },
    "MU-C1": {
      "DEFAULT": {
        "total": 188.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 13.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 18.8
          }
        ],
        "pv": 24.9
      },
      "EEM1": {
        "total": 188.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 13.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 18.8
          }
        ],
        "pv": 24.9
      },
      "EEM2": {
        "total": 188.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 13.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 18.8
          }
        ],
        "pv": 24.9
      },
      "EEM3": {
        "total": 188.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 13.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 18.8
          }
        ],
        "pv": 24.9
      },
      "EEM4": {
        "total": 188.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 13.5
          },
          {
            "name": "DHW",
            "value": 41.0
          },
          {
            "name": "Lighting",
            "value": 12.9
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 18.8
          }
        ],
        "pv": 24.9
      },
      "IAL": {
        "total": 238.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 66.1
          },
          {
            "name": "Cooling",
            "value": 41.0
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 13.0
          },
          {
            "name": "Equipment",
            "value": 75.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 25.0
      }
    },
    "MU-C2": {
      "DEFAULT": {
        "total": 151.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.2
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.6
          }
        ],
        "pv": 19.9
      },
      "EEM1": {
        "total": 151.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.2
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.6
          }
        ],
        "pv": 19.9
      },
      "EEM2": {
        "total": 151.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.2
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.6
          }
        ],
        "pv": 19.9
      },
      "EEM3": {
        "total": 151.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.2
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.6
          }
        ],
        "pv": 19.9
      },
      "EEM4": {
        "total": 151.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.2
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 12.6
          }
        ],
        "pv": 19.9
      },
      "IAL": {
        "total": 216.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 56.9
          },
          {
            "name": "Cooling",
            "value": 41.7
          },
          {
            "name": "DHW",
            "value": 33.9
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 69.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 19.9
      }
    },
    "MU-HC": {
      "DEFAULT": {
        "total": 169.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.1
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 45.0
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 46.0
      },
      "EEM1": {
        "total": 169.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.1
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 45.0
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 46.0
      },
      "EEM2": {
        "total": 169.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.1
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 45.0
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 46.0
      },
      "EEM3": {
        "total": 169.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.1
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 45.0
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 46.0
      },
      "EEM4": {
        "total": 169.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 22.1
          },
          {
            "name": "Cooling",
            "value": 13.7
          },
          {
            "name": "DHW",
            "value": 45.0
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.1
          }
        ],
        "pv": 46.0
      },
      "IAL": {
        "total": 214.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 65.1
          },
          {
            "name": "Cooling",
            "value": 28.6
          },
          {
            "name": "DHW",
            "value": 45.1
          },
          {
            "name": "Lighting",
            "value": 9.1
          },
          {
            "name": "Equipment",
            "value": 62.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 46.2
      }
    },
    "MU-HS": {
      "DEFAULT": {
        "total": 196.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.4
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 40.7
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.5
          }
        ],
        "pv": 79.5
      },
      "EEM1": {
        "total": 196.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.4
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 40.7
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.5
          }
        ],
        "pv": 79.5
      },
      "EEM2": {
        "total": 196.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.4
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 40.7
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.5
          }
        ],
        "pv": 79.5
      },
      "EEM3": {
        "total": 196.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.4
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 40.7
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.5
          }
        ],
        "pv": 79.5
      },
      "EEM4": {
        "total": 196.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 29.4
          },
          {
            "name": "Cooling",
            "value": 14.9
          },
          {
            "name": "DHW",
            "value": 40.7
          },
          {
            "name": "Lighting",
            "value": 11.3
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 12.5
          }
        ],
        "pv": 79.5
      },
      "IAL": {
        "total": 243.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 68.6
          },
          {
            "name": "Cooling",
            "value": 35.5
          },
          {
            "name": "DHW",
            "value": 41.1
          },
          {
            "name": "Lighting",
            "value": 11.4
          },
          {
            "name": "Equipment",
            "value": 81.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.9
          }
        ],
        "pv": 79.6
      }
    },
    "MU-L": {
      "DEFAULT": {
        "total": 151.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.0
          },
          {
            "name": "Cooling",
            "value": 10.0
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 76.4
      },
      "EEM1": {
        "total": 151.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.0
          },
          {
            "name": "Cooling",
            "value": 10.0
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 76.4
      },
      "EEM2": {
        "total": 151.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.0
          },
          {
            "name": "Cooling",
            "value": 10.0
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 76.4
      },
      "EEM3": {
        "total": 151.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.0
          },
          {
            "name": "Cooling",
            "value": 10.0
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 76.4
      },
      "EEM4": {
        "total": 151.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 12.0
          },
          {
            "name": "Cooling",
            "value": 10.0
          },
          {
            "name": "DHW",
            "value": 43.6
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 9.5
          }
        ],
        "pv": 76.4
      },
      "IAL": {
        "total": 211.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 68.3
          },
          {
            "name": "Cooling",
            "value": 23.2
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 63.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.5
          }
        ],
        "pv": 76.4
      }
    },
    "MU-S1": {
      "DEFAULT": {
        "total": 191.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 23.2
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 43.4
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 73.5
      },
      "EEM1": {
        "total": 191.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 23.2
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 43.4
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 73.5
      },
      "EEM2": {
        "total": 191.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 23.2
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 43.4
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 73.5
      },
      "EEM3": {
        "total": 191.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 23.2
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 43.4
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 73.5
      },
      "EEM4": {
        "total": 191.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 23.2
          },
          {
            "name": "Cooling",
            "value": 12.3
          },
          {
            "name": "DHW",
            "value": 43.4
          },
          {
            "name": "Lighting",
            "value": 18.6
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 73.5
      },
      "IAL": {
        "total": 249.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 76.3
          },
          {
            "name": "Cooling",
            "value": 28.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 18.7
          },
          {
            "name": "Equipment",
            "value": 69.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 73.7
      }
    },
    "MU-S2": {
      "DEFAULT": {
        "total": 187.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 13.2
          },
          {
            "name": "DHW",
            "value": 44.0
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 96.0
      },
      "EEM1": {
        "total": 187.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 13.2
          },
          {
            "name": "DHW",
            "value": 44.0
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 96.0
      },
      "EEM2": {
        "total": 187.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 13.2
          },
          {
            "name": "DHW",
            "value": 44.0
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 96.0
      },
      "EEM3": {
        "total": 187.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 13.2
          },
          {
            "name": "DHW",
            "value": 44.0
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 96.0
      },
      "EEM4": {
        "total": 187.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 18.0
          },
          {
            "name": "Cooling",
            "value": 13.2
          },
          {
            "name": "DHW",
            "value": 44.0
          },
          {
            "name": "Lighting",
            "value": 22.1
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 11.7
          }
        ],
        "pv": 96.0
      },
      "IAL": {
        "total": 242.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 68.7
          },
          {
            "name": "Cooling",
            "value": 27.9
          },
          {
            "name": "DHW",
            "value": 44.2
          },
          {
            "name": "Lighting",
            "value": 22.2
          },
          {
            "name": "Equipment",
            "value": 61.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 96.0
      }
    },
    "MU-U1": {
      "DEFAULT": {
        "total": 134.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.0
          }
        ],
        "pv": 18.7
      },
      "EEM1": {
        "total": 134.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.0
          }
        ],
        "pv": 18.7
      },
      "EEM2": {
        "total": 134.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.0
          }
        ],
        "pv": 18.7
      },
      "EEM3": {
        "total": 134.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.0
          }
        ],
        "pv": 18.7
      },
      "EEM4": {
        "total": 134.7,
        "breakdown": [
          {
            "name": "Heating",
            "value": 3.5
          },
          {
            "name": "Cooling",
            "value": 8.8
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 12.0
          }
        ],
        "pv": 18.7
      },
      "IAL": {
        "total": 198.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 53.3
          },
          {
            "name": "Cooling",
            "value": 40.0
          },
          {
            "name": "DHW",
            "value": 28.3
          },
          {
            "name": "Lighting",
            "value": 7.6
          },
          {
            "name": "Equipment",
            "value": 64.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 18.7
      }
    },
    "MU-W": {
      "DEFAULT": {
        "total": 130.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.6
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 81.5
      },
      "EEM1": {
        "total": 130.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.6
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 81.5
      },
      "EEM2": {
        "total": 130.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.6
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 81.5
      },
      "EEM3": {
        "total": 130.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.6
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 81.5
      },
      "EEM4": {
        "total": 130.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 16.6
          },
          {
            "name": "Cooling",
            "value": 6.7
          },
          {
            "name": "DHW",
            "value": 31.3
          },
          {
            "name": "Lighting",
            "value": 6.9
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 7.0
          }
        ],
        "pv": 81.5
      },
      "IAL": {
        "total": 187.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 70.8
          },
          {
            "name": "Cooling",
            "value": 16.0
          },
          {
            "name": "DHW",
            "value": 31.4
          },
          {
            "name": "Lighting",
            "value": 7.0
          },
          {
            "name": "Equipment",
            "value": 57.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 81.5
      }
    },
    "MU-W2": {
      "DEFAULT": {
        "total": 98.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.6
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 3.9
          }
        ],
        "pv": 118.2
      },
      "EEM1": {
        "total": 98.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.6
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 3.9
          }
        ],
        "pv": 118.2
      },
      "EEM2": {
        "total": 98.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.6
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 3.9
          }
        ],
        "pv": 118.2
      },
      "EEM3": {
        "total": 98.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.6
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 3.9
          }
        ],
        "pv": 118.2
      },
      "EEM4": {
        "total": 98.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 24.6
          },
          {
            "name": "Cooling",
            "value": 2.3
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.0
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 3.9
          }
        ],
        "pv": 118.2
      },
      "IAL": {
        "total": 157.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 83.7
          },
          {
            "name": "Cooling",
            "value": 6.2
          },
          {
            "name": "DHW",
            "value": 13.0
          },
          {
            "name": "Lighting",
            "value": 8.1
          },
          {
            "name": "Equipment",
            "value": 41.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.6
          }
        ],
        "pv": 118.2
      }
    },
    "CC-B": {
      "DEFAULT": {
        "total": 174.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 29.3
      },
      "EEM1": {
        "total": 174.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 29.3
      },
      "EEM2": {
        "total": 174.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 29.3
      },
      "EEM3": {
        "total": 174.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 29.3
      },
      "EEM4": {
        "total": 174.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.3
          },
          {
            "name": "Cooling",
            "value": 11.5
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 29.3
      },
      "IAL": {
        "total": 239.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 44.3
          },
          {
            "name": "Cooling",
            "value": 63.9
          },
          {
            "name": "DHW",
            "value": 18.3
          },
          {
            "name": "Lighting",
            "value": 14.7
          },
          {
            "name": "Equipment",
            "value": 85.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 29.3
      }
    },
    "CC-S1": {
      "DEFAULT": {
        "total": 233.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.8
          },
          {
            "name": "Cooling",
            "value": 14.5
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 119.3
      },
      "EEM1": {
        "total": 233.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.8
          },
          {
            "name": "Cooling",
            "value": 14.5
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 119.3
      },
      "EEM2": {
        "total": 233.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.8
          },
          {
            "name": "Cooling",
            "value": 14.5
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 119.3
      },
      "EEM3": {
        "total": 233.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.8
          },
          {
            "name": "Cooling",
            "value": 14.5
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 119.3
      },
      "EEM4": {
        "total": 233.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 31.8
          },
          {
            "name": "Cooling",
            "value": 14.5
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 36.2
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 12.8
          }
        ],
        "pv": 119.3
      },
      "IAL": {
        "total": 301.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 97.6
          },
          {
            "name": "Cooling",
            "value": 28.0
          },
          {
            "name": "DHW",
            "value": 25.7
          },
          {
            "name": "Lighting",
            "value": 36.4
          },
          {
            "name": "Equipment",
            "value": 83.8
          },
          {
            "name": "Fans & Pumps",
            "value": 1.2
          }
        ],
        "pv": 119.4
      }
    },
    "CC-S2": {
      "DEFAULT": {
        "total": 311.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.6
          },
          {
            "name": "Cooling",
            "value": 20.3
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 17.7
          }
        ],
        "pv": 172.6
      },
      "EEM1": {
        "total": 311.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.6
          },
          {
            "name": "Cooling",
            "value": 20.3
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 17.7
          }
        ],
        "pv": 172.6
      },
      "EEM2": {
        "total": 311.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.6
          },
          {
            "name": "Cooling",
            "value": 20.3
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 17.7
          }
        ],
        "pv": 172.6
      },
      "EEM3": {
        "total": 311.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.6
          },
          {
            "name": "Cooling",
            "value": 20.3
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 17.7
          }
        ],
        "pv": 172.6
      },
      "EEM4": {
        "total": 311.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 33.6
          },
          {
            "name": "Cooling",
            "value": 20.3
          },
          {
            "name": "DHW",
            "value": 25.5
          },
          {
            "name": "Lighting",
            "value": 63.3
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 17.7
          }
        ],
        "pv": 172.6
      },
      "IAL": {
        "total": 388.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 118.0
          },
          {
            "name": "Cooling",
            "value": 29.2
          },
          {
            "name": "DHW",
            "value": 25.6
          },
          {
            "name": "Lighting",
            "value": 63.7
          },
          {
            "name": "Equipment",
            "value": 96.5
          },
          {
            "name": "Fans & Pumps",
            "value": 1.3
          }
        ],
        "pv": 172.6
      }
    },
    "CC-E1": {
      "DEFAULT": {
        "total": 160.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.3
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.0
          }
        ],
        "pv": 26.3
      },
      "EEM1": {
        "total": 160.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.3
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.0
          }
        ],
        "pv": 26.3
      },
      "EEM2": {
        "total": 160.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.3
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.0
          }
        ],
        "pv": 26.3
      },
      "EEM3": {
        "total": 160.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.3
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.0
          }
        ],
        "pv": 26.3
      },
      "EEM4": {
        "total": 160.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 4.3
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.6
          },
          {
            "name": "Fans & Pumps",
            "value": 15.0
          }
        ],
        "pv": 26.3
      },
      "IAL": {
        "total": 232.2,
        "breakdown": [
          {
            "name": "Heating",
            "value": 43.5
          },
          {
            "name": "Cooling",
            "value": 64.3
          },
          {
            "name": "DHW",
            "value": 12.4
          },
          {
            "name": "Lighting",
            "value": 17.0
          },
          {
            "name": "Equipment",
            "value": 87.9
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 26.3
      }
    },
    "CC-E2": {
      "DEFAULT": {
        "total": 359.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 171.0
          },
          {
            "name": "Cooling",
            "value": 17.9
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 31.9
          }
        ],
        "pv": 50.0
      },
      "EEM1": {
        "total": 359.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 171.0
          },
          {
            "name": "Cooling",
            "value": 17.9
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 31.9
          }
        ],
        "pv": 50.0
      },
      "EEM2": {
        "total": 359.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 171.0
          },
          {
            "name": "Cooling",
            "value": 17.9
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 31.9
          }
        ],
        "pv": 50.0
      },
      "EEM3": {
        "total": 359.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 171.0
          },
          {
            "name": "Cooling",
            "value": 17.9
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 31.9
          }
        ],
        "pv": 50.0
      },
      "EEM4": {
        "total": 359.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 171.0
          },
          {
            "name": "Cooling",
            "value": 17.9
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.7
          },
          {
            "name": "Equipment",
            "value": 85.0
          },
          {
            "name": "Fans & Pumps",
            "value": 31.9
          }
        ],
        "pv": 50.0
      },
      "IAL": {
        "total": 317.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 131.8
          },
          {
            "name": "Cooling",
            "value": 48.8
          },
          {
            "name": "DHW",
            "value": 20.9
          },
          {
            "name": "Lighting",
            "value": 25.6
          },
          {
            "name": "Equipment",
            "value": 85.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.8
          }
        ],
        "pv": 50.0
      }
    },
    "CC-E3": {
      "DEFAULT": {
        "total": 342.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 151.5
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 23.2
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 30.3
          }
        ],
        "pv": 52.7
      },
      "EEM1": {
        "total": 342.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 151.5
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 23.2
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 30.3
          }
        ],
        "pv": 52.7
      },
      "EEM2": {
        "total": 342.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 151.5
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 23.2
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 30.3
          }
        ],
        "pv": 52.7
      },
      "EEM3": {
        "total": 342.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 151.5
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 23.2
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 30.3
          }
        ],
        "pv": 52.7
      },
      "EEM4": {
        "total": 342.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 151.5
          },
          {
            "name": "Cooling",
            "value": 19.5
          },
          {
            "name": "DHW",
            "value": 23.2
          },
          {
            "name": "Lighting",
            "value": 24.6
          },
          {
            "name": "Equipment",
            "value": 87.1
          },
          {
            "name": "Fans & Pumps",
            "value": 30.3
          }
        ],
        "pv": 52.7
      },
      "IAL": {
        "total": 316.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 121.7
          },
          {
            "name": "Cooling",
            "value": 55.0
          },
          {
            "name": "DHW",
            "value": 23.3
          },
          {
            "name": "Lighting",
            "value": 24.5
          },
          {
            "name": "Equipment",
            "value": 88.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.7
          }
        ],
        "pv": 52.7
      }
    },
    "CC-FD1": {
      "DEFAULT": {
        "total": 140.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.6
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 8.5
      },
      "EEM1": {
        "total": 140.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.6
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 8.5
      },
      "EEM2": {
        "total": 140.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.6
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 8.5
      },
      "EEM3": {
        "total": 140.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.6
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 8.5
      },
      "EEM4": {
        "total": 140.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 11.6
          },
          {
            "name": "Cooling",
            "value": 8.9
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.6
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 15.7
          }
        ],
        "pv": 8.5
      },
      "IAL": {
        "total": 216.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 79.2
          },
          {
            "name": "Cooling",
            "value": 35.5
          },
          {
            "name": "DHW",
            "value": 29.2
          },
          {
            "name": "Lighting",
            "value": 12.4
          },
          {
            "name": "Equipment",
            "value": 56.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.1
          }
        ],
        "pv": 8.5
      }
    },
    "CC-FD2": {
      "DEFAULT": {
        "total": 152.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 14.7
      },
      "EEM1": {
        "total": 152.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 14.7
      },
      "EEM2": {
        "total": 152.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 14.7
      },
      "EEM3": {
        "total": 152.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 14.7
      },
      "EEM4": {
        "total": 152.3,
        "breakdown": [
          {
            "name": "Heating",
            "value": 6.4
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.4
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 15.2
          }
        ],
        "pv": 14.7
      },
      "IAL": {
        "total": 215.9,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.7
          },
          {
            "name": "Cooling",
            "value": 50.5
          },
          {
            "name": "DHW",
            "value": 22.9
          },
          {
            "name": "Lighting",
            "value": 13.2
          },
          {
            "name": "Equipment",
            "value": 70.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 14.8
      }
    },
    "CC-FD3": {
      "DEFAULT": {
        "total": 138.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.9
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 13.9
          }
        ],
        "pv": 12.2
      },
      "EEM1": {
        "total": 138.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.9
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 13.9
          }
        ],
        "pv": 12.2
      },
      "EEM2": {
        "total": 138.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.9
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 13.9
          }
        ],
        "pv": 12.2
      },
      "EEM3": {
        "total": 138.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.9
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 13.9
          }
        ],
        "pv": 12.2
      },
      "EEM4": {
        "total": 138.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 7.9
          },
          {
            "name": "Cooling",
            "value": 10.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.7
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 13.9
          }
        ],
        "pv": 12.2
      },
      "IAL": {
        "total": 201.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 62.2
          },
          {
            "name": "Cooling",
            "value": 35.8
          },
          {
            "name": "DHW",
            "value": 29.5
          },
          {
            "name": "Lighting",
            "value": 13.5
          },
          {
            "name": "Equipment",
            "value": 55.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.2
          }
        ],
        "pv": 12.2
      }
    },
    "RC-MR1": {
      "DEFAULT": {
        "total": 112.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 73.1
      },
      "EEM1": {
        "total": 112.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 73.1
      },
      "EEM2": {
        "total": 112.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 73.1
      },
      "EEM3": {
        "total": 112.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 73.1
      },
      "EEM4": {
        "total": 112.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.5
          },
          {
            "name": "Cooling",
            "value": 11.2
          },
          {
            "name": "DHW",
            "value": 37.3
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 73.1
      },
      "IAL": {
        "total": 149.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 30.7
          },
          {
            "name": "Cooling",
            "value": 27.2
          },
          {
            "name": "DHW",
            "value": 37.8
          },
          {
            "name": "Lighting",
            "value": 5.7
          },
          {
            "name": "Equipment",
            "value": 46.3
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 37.4
      }
    },
    "RC-MR2": {
      "DEFAULT": {
        "total": 113.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 66.3
      },
      "EEM1": {
        "total": 113.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 66.3
      },
      "EEM2": {
        "total": 113.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 66.3
      },
      "EEM3": {
        "total": 113.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 66.3
      },
      "EEM4": {
        "total": 113.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.8
          },
          {
            "name": "Cooling",
            "value": 10.4
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.6
          }
        ],
        "pv": 66.3
      },
      "IAL": {
        "total": 162.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 45.1
          },
          {
            "name": "Cooling",
            "value": 23.9
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 25.5
      }
    },
    "RC-MR3": {
      "DEFAULT": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.0
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 66.3
      },
      "EEM1": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.0
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 66.3
      },
      "EEM2": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.0
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 66.3
      },
      "EEM3": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.0
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 66.3
      },
      "EEM4": {
        "total": 113.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 2.0
          },
          {
            "name": "Cooling",
            "value": 10.1
          },
          {
            "name": "DHW",
            "value": 43.5
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 8.5
          }
        ],
        "pv": 66.3
      },
      "IAL": {
        "total": 161.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 45.6
          },
          {
            "name": "Cooling",
            "value": 23.1
          },
          {
            "name": "DHW",
            "value": 43.7
          },
          {
            "name": "Lighting",
            "value": 5.6
          },
          {
            "name": "Equipment",
            "value": 41.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 25.5
      }
    },
    "RC-D": {
      "DEFAULT": {
        "total": 103.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.7
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.7
          }
        ],
        "pv": 97.2
      },
      "EEM1": {
        "total": 103.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.7
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.7
          }
        ],
        "pv": 97.2
      },
      "EEM2": {
        "total": 103.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.7
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.7
          }
        ],
        "pv": 97.2
      },
      "EEM3": {
        "total": 103.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.7
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.7
          }
        ],
        "pv": 97.2
      },
      "EEM4": {
        "total": 103.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.7
          },
          {
            "name": "Cooling",
            "value": 6.6
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.7
          }
        ],
        "pv": 97.2
      },
      "IAL": {
        "total": 154.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 57.2
          },
          {
            "name": "Cooling",
            "value": 22.7
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.4
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 74.3
      }
    },
    "RC-ML": {
      "DEFAULT": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.0
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.0
          }
        ],
        "pv": 89.4
      },
      "EEM1": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.0
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.0
          }
        ],
        "pv": 89.4
      },
      "EEM2": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.0
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.0
          }
        ],
        "pv": 89.4
      },
      "EEM3": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.0
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.0
          }
        ],
        "pv": 89.4
      },
      "EEM4": {
        "total": 107.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 13.0
          },
          {
            "name": "Cooling",
            "value": 6.8
          },
          {
            "name": "DHW",
            "value": 23.8
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 51.7
          },
          {
            "name": "Fans & Pumps",
            "value": 6.0
          }
        ],
        "pv": 89.4
      },
      "IAL": {
        "total": 156.4,
        "breakdown": [
          {
            "name": "Heating",
            "value": 51.8
          },
          {
            "name": "Cooling",
            "value": 22.2
          },
          {
            "name": "DHW",
            "value": 24.5
          },
          {
            "name": "Lighting",
            "value": 5.2
          },
          {
            "name": "Equipment",
            "value": 52.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 68.2
      }
    },
    "RC-T": {
      "DEFAULT": {
        "total": 111.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.1
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 81.4
      },
      "EEM1": {
        "total": 111.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.1
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 81.4
      },
      "EEM2": {
        "total": 111.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.1
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 81.4
      },
      "EEM3": {
        "total": 111.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.1
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 81.4
      },
      "EEM4": {
        "total": 111.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 8.1
          },
          {
            "name": "Cooling",
            "value": 7.1
          },
          {
            "name": "DHW",
            "value": 26.1
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 57.1
          },
          {
            "name": "Fans & Pumps",
            "value": 6.3
          }
        ],
        "pv": 81.4
      },
      "IAL": {
        "total": 158.8,
        "breakdown": [
          {
            "name": "Heating",
            "value": 46.2
          },
          {
            "name": "Cooling",
            "value": 21.7
          },
          {
            "name": "DHW",
            "value": 26.9
          },
          {
            "name": "Lighting",
            "value": 5.8
          },
          {
            "name": "Equipment",
            "value": 58.2
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 62.2
      }
    },
    "RC-R": {
      "DEFAULT": {
        "total": 103.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.8
          }
        ],
        "pv": 87.0
      },
      "EEM1": {
        "total": 103.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.8
          }
        ],
        "pv": 87.0
      },
      "EEM2": {
        "total": 103.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.8
          }
        ],
        "pv": 87.0
      },
      "EEM3": {
        "total": 103.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.8
          }
        ],
        "pv": 87.0
      },
      "EEM4": {
        "total": 103.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 17.1
          },
          {
            "name": "Cooling",
            "value": 6.9
          },
          {
            "name": "DHW",
            "value": 21.7
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 46.6
          },
          {
            "name": "Fans & Pumps",
            "value": 5.8
          }
        ],
        "pv": 87.0
      },
      "IAL": {
        "total": 154.6,
        "breakdown": [
          {
            "name": "Heating",
            "value": 56.5
          },
          {
            "name": "Cooling",
            "value": 23.8
          },
          {
            "name": "DHW",
            "value": 22.1
          },
          {
            "name": "Lighting",
            "value": 4.7
          },
          {
            "name": "Equipment",
            "value": 47.5
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 66.5
      }
    },
    "RC-HR1": {
      "DEFAULT": {
        "total": 120.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.4
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 48.1
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 44.0
      },
      "EEM1": {
        "total": 120.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.4
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 48.1
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 44.0
      },
      "EEM2": {
        "total": 120.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.4
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 48.1
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 44.0
      },
      "EEM3": {
        "total": 120.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.4
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 48.1
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 44.0
      },
      "EEM4": {
        "total": 120.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.4
          },
          {
            "name": "Cooling",
            "value": 11.3
          },
          {
            "name": "DHW",
            "value": 48.1
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 9.4
          }
        ],
        "pv": 44.0
      },
      "IAL": {
        "total": 171.5,
        "breakdown": [
          {
            "name": "Heating",
            "value": 52.5
          },
          {
            "name": "Cooling",
            "value": 21.0
          },
          {
            "name": "DHW",
            "value": 48.2
          },
          {
            "name": "Lighting",
            "value": 5.1
          },
          {
            "name": "Equipment",
            "value": 41.6
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 18.8
      }
    },
    "RC-HR2": {
      "DEFAULT": {
        "total": 125.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.1
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 26.0
      },
      "EEM1": {
        "total": 125.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.1
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 26.0
      },
      "EEM2": {
        "total": 125.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.1
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 26.0
      },
      "EEM3": {
        "total": 125.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.1
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 26.0
      },
      "EEM4": {
        "total": 125.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 1.1
          },
          {
            "name": "Cooling",
            "value": 11.9
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 10.0
          }
        ],
        "pv": 26.0
      },
      "IAL": {
        "total": 180.1,
        "breakdown": [
          {
            "name": "Heating",
            "value": 60.1
          },
          {
            "name": "Cooling",
            "value": 18.2
          },
          {
            "name": "DHW",
            "value": 51.8
          },
          {
            "name": "Lighting",
            "value": 4.6
          },
          {
            "name": "Equipment",
            "value": 41.7
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 13.5
      }
    }
  }
};

// ========================================================================
// High-Performance (NECB) — CAN_MTL data, DEFAULT = EEM1 values
// ========================================================================
ENVELOPE_ENERGY_DATA["high-performance-necb"] = {
    "RC-D": {
      "IAL":     { total: 163.9, breakdown: [{name:"Heating",value:64.9}, {name:"Cooling",value:24.8}, {name:"DHW",value:22.1}, {name:"Lighting",value:4.7}, {name:"Equipment",value:47.4}, {name:"Fans & Pumps",value:0.0}], pv: 77.0 },
      "DEFAULT": { total: 108.2, breakdown: [{name:"Heating",value:21.7}, {name:"Cooling",value:6.8}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.9}], pv: 100.7 },
      "EEM1":     { total: 108.2, breakdown: [{name:"Heating",value:21.7}, {name:"Cooling",value:6.8}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.9}], pv: 100.7 },
      "EEM2": { total: 93.1, breakdown: [{name:"Heating",value:6.5}, {name:"Cooling",value:6.2}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.6}], pv: 100.7 },
      "EEM3": { total: 81.0, breakdown: [{name:"Heating",value:9.2}, {name:"Cooling",value:6.3}, {name:"DHW",value:6.6}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.8}], pv: 100.7 },
      "EEM4": { total: 61.1, breakdown: [{name:"Heating",value:10.9}, {name:"Cooling",value:5.0}, {name:"DHW",value:6.6}, {name:"Lighting",value:2.6}, {name:"Equipment",value:28.3}, {name:"Fans & Pumps",value:6.8}], pv: 100.7 }
    },
    "RC-HR1": {
      "IAL":     { total: 213.8, breakdown: [{name:"Heating",value:38.7}, {name:"Cooling",value:100.4}, {name:"DHW",value:48.2}, {name:"Lighting",value:4.3}, {name:"Equipment",value:22.2}, {name:"Fans & Pumps",value:0.0}], pv: 20.3 },
      "DEFAULT": { total: 103.4, breakdown: [{name:"Heating",value:8.2}, {name:"Cooling",value:11.3}, {name:"DHW",value:48.2}, {name:"Lighting",value:4.3}, {name:"Equipment",value:19.2}, {name:"Fans & Pumps",value:9.1}], pv: 45.8 },
      "EEM1":     { total: 103.4, breakdown: [{name:"Heating",value:8.2}, {name:"Cooling",value:11.3}, {name:"DHW",value:48.2}, {name:"Lighting",value:4.3}, {name:"Equipment",value:19.2}, {name:"Fans & Pumps",value:9.1}], pv: 45.8 },
      "EEM2": { total: 99.8, breakdown: [{name:"Heating",value:2.8}, {name:"Cooling",value:13.2}, {name:"DHW",value:48.2}, {name:"Lighting",value:4.3}, {name:"Equipment",value:19.2}, {name:"Fans & Pumps",value:9.1}], pv: 45.8 },
      "EEM3": { total: 67.3, breakdown: [{name:"Heating",value:6.3}, {name:"Cooling",value:13.0}, {name:"DHW",value:12.1}, {name:"Lighting",value:4.3}, {name:"Equipment",value:19.2}, {name:"Fans & Pumps",value:9.1}], pv: 45.8 },
      "EEM4": { total: 52.3, breakdown: [{name:"Heating",value:7.0}, {name:"Cooling",value:9.4}, {name:"DHW",value:12.1}, {name:"Lighting",value:1.7}, {name:"Equipment",value:11.0}, {name:"Fans & Pumps",value:7.9}], pv: 45.8 }
    },
    "RC-HR2": {
      "IAL":     { total: 210.4, breakdown: [{name:"Heating",value:41.6}, {name:"Cooling",value:90.3}, {name:"DHW",value:51.8}, {name:"Lighting",value:3.9}, {name:"Equipment",value:22.8}, {name:"Fans & Pumps",value:0.0}], pv: 14.4 },
      "DEFAULT": { total: 108.0, breakdown: [{name:"Heating",value:6.9}, {name:"Cooling",value:12.5}, {name:"DHW",value:51.8}, {name:"Lighting",value:3.9}, {name:"Equipment",value:19.0}, {name:"Fans & Pumps",value:10.0}], pv: 22.7 },
      "EEM1":     { total: 108.0, breakdown: [{name:"Heating",value:6.9}, {name:"Cooling",value:12.5}, {name:"DHW",value:51.8}, {name:"Lighting",value:3.9}, {name:"Equipment",value:19.0}, {name:"Fans & Pumps",value:10.0}], pv: 22.7 },
      "EEM2": { total: 106.5, breakdown: [{name:"Heating",value:3.2}, {name:"Cooling",value:14.6}, {name:"DHW",value:51.8}, {name:"Lighting",value:3.9}, {name:"Equipment",value:19.0}, {name:"Fans & Pumps",value:10.1}], pv: 22.7 },
      "EEM3": { total: 69.0, breakdown: [{name:"Heating",value:9.6}, {name:"Cooling",value:14.5}, {name:"DHW",value:7.8}, {name:"Lighting",value:3.9}, {name:"Equipment",value:19.0}, {name:"Fans & Pumps",value:10.2}], pv: 22.7 },
      "EEM4": { total: 53.7, breakdown: [{name:"Heating",value:10.6}, {name:"Cooling",value:10.4}, {name:"DHW",value:7.9}, {name:"Lighting",value:1.5}, {name:"Equipment",value:10.9}, {name:"Fans & Pumps",value:8.7}], pv: 22.7 }
    },
    "RC-ML": {
      "IAL":     { total: 165.4, breakdown: [{name:"Heating",value:58.8}, {name:"Cooling",value:24.2}, {name:"DHW",value:24.5}, {name:"Lighting",value:5.2}, {name:"Equipment",value:52.7}, {name:"Fans & Pumps",value:0.0}], pv: 71.0 },
      "DEFAULT": { total: 111.0, breakdown: [{name:"Heating",value:16.2}, {name:"Cooling",value:7.0}, {name:"DHW",value:23.8}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.1}], pv: 93.0 },
      "EEM1":     { total: 111.0, breakdown: [{name:"Heating",value:16.2}, {name:"Cooling",value:7.0}, {name:"DHW",value:23.8}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.1}], pv: 93.0 },
      "EEM2": { total: 99.7, breakdown: [{name:"Heating",value:4.9}, {name:"Cooling",value:6.4}, {name:"DHW",value:23.8}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.7}], pv: 93.0 },
      "EEM3": { total: 86.2, breakdown: [{name:"Heating",value:6.3}, {name:"Cooling",value:6.4}, {name:"DHW",value:8.9}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.8}], pv: 93.0 },
      "EEM4": { total: 63.8, breakdown: [{name:"Heating",value:8.0}, {name:"Cooling",value:4.9}, {name:"DHW",value:8.9}, {name:"Lighting",value:2.9}, {name:"Equipment",value:31.5}, {name:"Fans & Pumps",value:6.8}], pv: 93.0 }
    },
    "RC-MR1": {
      "IAL":     { total: 195.9, breakdown: [{name:"Heating",value:38.3}, {name:"Cooling",value:81.8}, {name:"DHW",value:37.8}, {name:"Lighting",value:3.3}, {name:"Equipment",value:34.7}, {name:"Fans & Pumps",value:0.0}], pv: 39.9 },
      "DEFAULT": { total: 100.5, breakdown: [{name:"Heating",value:7.3}, {name:"Cooling",value:10.1}, {name:"DHW",value:37.3}, {name:"Lighting",value:5.1}, {name:"Equipment",value:31.0}, {name:"Fans & Pumps",value:7.8}], pv: 74.6 },
      "EEM1":     { total: 100.5, breakdown: [{name:"Heating",value:7.3}, {name:"Cooling",value:10.1}, {name:"DHW",value:37.3}, {name:"Lighting",value:5.1}, {name:"Equipment",value:31.0}, {name:"Fans & Pumps",value:7.8}], pv: 74.6 },
      "EEM2": { total: 96.7, breakdown: [{name:"Heating",value:2.4}, {name:"Cooling",value:11.2}, {name:"DHW",value:37.3}, {name:"Lighting",value:5.1}, {name:"Equipment",value:31.0}, {name:"Fans & Pumps",value:7.8}], pv: 74.6 },
      "EEM3": { total: 74.3, breakdown: [{name:"Heating",value:2.4}, {name:"Cooling",value:10.9}, {name:"DHW",value:15.2}, {name:"Lighting",value:5.1}, {name:"Equipment",value:31.0}, {name:"Fans & Pumps",value:7.8}], pv: 74.6 },
      "EEM4": { total: 56.4, breakdown: [{name:"Heating",value:3.1}, {name:"Cooling",value:8.2}, {name:"DHW",value:15.2}, {name:"Lighting",value:2.3}, {name:"Equipment",value:18.5}, {name:"Fans & Pumps",value:7.2}], pv: 74.6 }
    },
    "RC-MR2": {
      "IAL":     { total: 200.3, breakdown: [{name:"Heating",value:38.2}, {name:"Cooling",value:92.1}, {name:"DHW",value:43.7}, {name:"Lighting",value:4.8}, {name:"Equipment",value:21.5}, {name:"Fans & Pumps",value:0.0}], pv: 27.7 },
      "DEFAULT": { total: 99.1, breakdown: [{name:"Heating",value:11.8}, {name:"Cooling",value:9.5}, {name:"DHW",value:43.6}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.9}], pv: 66.8 },
      "EEM1":     { total: 99.1, breakdown: [{name:"Heating",value:11.8}, {name:"Cooling",value:9.5}, {name:"DHW",value:43.6}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.9}], pv: 66.8 },
      "EEM2": { total: 92.4, breakdown: [{name:"Heating",value:3.5}, {name:"Cooling",value:11.2}, {name:"DHW",value:43.6}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.8}], pv: 66.8 },
      "EEM3": { total: 65.7, breakdown: [{name:"Heating",value:3.6}, {name:"Cooling",value:10.8}, {name:"DHW",value:17.2}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.8}], pv: 66.8 },
      "EEM4": { total: 51.5, breakdown: [{name:"Heating",value:3.9}, {name:"Cooling",value:8.0}, {name:"DHW",value:17.2}, {name:"Lighting",value:2.0}, {name:"Equipment",value:11.2}, {name:"Fans & Pumps",value:7.0}], pv: 66.8 }
    },
    "RC-MR3": {
      "IAL":     { total: 200.5, breakdown: [{name:"Heating",value:38.9}, {name:"Cooling",value:91.5}, {name:"DHW",value:43.7}, {name:"Lighting",value:4.8}, {name:"Equipment",value:21.6}, {name:"Fans & Pumps",value:0.0}], pv: 27.7 },
      "DEFAULT": { total: 99.0, breakdown: [{name:"Heating",value:12.2}, {name:"Cooling",value:9.1}, {name:"DHW",value:43.6}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.8}], pv: 66.8 },
      "EEM1":     { total: 99.0, breakdown: [{name:"Heating",value:12.2}, {name:"Cooling",value:9.1}, {name:"DHW",value:43.6}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.8}], pv: 66.8 },
      "EEM2": { total: 92.0, breakdown: [{name:"Heating",value:3.6}, {name:"Cooling",value:10.8}, {name:"DHW",value:43.6}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.7}], pv: 66.8 },
      "EEM3": { total: 65.3, breakdown: [{name:"Heating",value:3.6}, {name:"Cooling",value:10.4}, {name:"DHW",value:17.2}, {name:"Lighting",value:4.8}, {name:"Equipment",value:19.3}, {name:"Fans & Pumps",value:7.7}], pv: 66.8 },
      "EEM4": { total: 51.1, breakdown: [{name:"Heating",value:3.9}, {name:"Cooling",value:7.6}, {name:"DHW",value:17.2}, {name:"Lighting",value:2.0}, {name:"Equipment",value:11.2}, {name:"Fans & Pumps",value:6.9}], pv: 66.8 }
    },
    "RC-R": {
      "IAL":     { total: 163.9, breakdown: [{name:"Heating",value:63.9}, {name:"Cooling",value:25.8}, {name:"DHW",value:22.1}, {name:"Lighting",value:4.7}, {name:"Equipment",value:47.4}, {name:"Fans & Pumps",value:0.0}], pv: 69.1 },
      "DEFAULT": { total: 107.6, breakdown: [{name:"Heating",value:20.7}, {name:"Cooling",value:7.2}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.9}], pv: 155.5 },
      "EEM1":     { total: 107.6, breakdown: [{name:"Heating",value:20.7}, {name:"Cooling",value:7.2}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.9}], pv: 155.5 },
      "EEM2": { total: 93.2, breakdown: [{name:"Heating",value:6.2}, {name:"Cooling",value:6.5}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.6}], pv: 155.5 },
      "EEM3": { total: 81.0, breakdown: [{name:"Heating",value:8.9}, {name:"Cooling",value:6.6}, {name:"DHW",value:6.6}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.8}], pv: 155.5 },
      "EEM4": { total: 61.0, breakdown: [{name:"Heating",value:10.6}, {name:"Cooling",value:5.3}, {name:"DHW",value:6.6}, {name:"Lighting",value:2.6}, {name:"Equipment",value:28.3}, {name:"Fans & Pumps",value:6.8}], pv: 155.5 }
    },
    "RC-T": {
      "IAL":     { total: 167.0, breakdown: [{name:"Heating",value:52.5}, {name:"Cooling",value:23.7}, {name:"DHW",value:26.9}, {name:"Lighting",value:5.8}, {name:"Equipment",value:58.1}, {name:"Fans & Pumps",value:0.0}], pv: 65.1 },
      "DEFAULT": { total: 113.9, breakdown: [{name:"Heating",value:10.4}, {name:"Cooling",value:7.2}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.4}], pv: 85.2 },
      "EEM1":     { total: 113.9, breakdown: [{name:"Heating",value:10.4}, {name:"Cooling",value:7.2}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.4}], pv: 85.2 },
      "EEM2": { total: 106.5, breakdown: [{name:"Heating",value:3.2}, {name:"Cooling",value:6.5}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.9}], pv: 85.2 },
      "EEM3": { total: 91.8, breakdown: [{name:"Heating",value:3.2}, {name:"Cooling",value:6.5}, {name:"DHW",value:11.2}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.9}], pv: 85.2 },
      "EEM4": { total: 66.5, breakdown: [{name:"Heating",value:3.3}, {name:"Cooling",value:6.5}, {name:"DHW",value:11.2}, {name:"Lighting",value:3.2}, {name:"Equipment",value:34.8}, {name:"Fans & Pumps",value:6.9}], pv: 85.2 }
    }
};

// ========================================================================
// High-Performance (ASHRAE) — ASHRAE data, DEFAULT = EEM1 values
// ========================================================================
ENVELOPE_ENERGY_DATA["high-performance-ashrae"] = {
    "RC-D": {
      "IAL":     { total: 154.1, breakdown: [{name:"Heating",value:57.2}, {name:"Cooling",value:22.7}, {name:"DHW",value:22.1}, {name:"Lighting",value:4.7}, {name:"Equipment",value:47.4}, {name:"Fans & Pumps",value:0.0}], pv: 74.3 },
      "DEFAULT": { total: 103.8, breakdown: [{name:"Heating",value:17.7}, {name:"Cooling",value:6.6}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.7}], pv: 97.2 },
      "EEM1":     { total: 103.8, breakdown: [{name:"Heating",value:17.7}, {name:"Cooling",value:6.6}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.7}], pv: 97.2 },
      "EEM2": { total: 90.9, breakdown: [{name:"Heating",value:4.9}, {name:"Cooling",value:5.9}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.3}], pv: 97.2 },
      "EEM3": { total: 78.7, breakdown: [{name:"Heating",value:7.6}, {name:"Cooling",value:5.9}, {name:"DHW",value:6.6}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.5}], pv: 97.2 },
      "EEM4": { total: 58.6, breakdown: [{name:"Heating",value:9.0}, {name:"Cooling",value:4.7}, {name:"DHW",value:6.6}, {name:"Lighting",value:2.6}, {name:"Equipment",value:28.3}, {name:"Fans & Pumps",value:6.5}], pv: 97.2 }
    },
    "RC-HR1": {
      "IAL":     { total: 171.5, breakdown: [{name:"Heating",value:52.5}, {name:"Cooling",value:21.0}, {name:"DHW",value:48.2}, {name:"Lighting",value:5.1}, {name:"Equipment",value:44.7}, {name:"Fans & Pumps",value:0.0}], pv: 18.8 },
      "DEFAULT": { total: 120.1, breakdown: [{name:"Heating",value:1.4}, {name:"Cooling",value:11.4}, {name:"DHW",value:48.1}, {name:"Lighting",value:5.1}, {name:"Equipment",value:41.6}, {name:"Fans & Pumps",value:9.4}], pv: 44.0 },
      "EEM1":     { total: 120.1, breakdown: [{name:"Heating",value:1.4}, {name:"Cooling",value:11.4}, {name:"DHW",value:48.1}, {name:"Lighting",value:5.1}, {name:"Equipment",value:41.6}, {name:"Fans & Pumps",value:9.4}], pv: 44.0 },
      "EEM2": { total: 120.6, breakdown: [{name:"Heating",value:0.5}, {name:"Cooling",value:13.0}, {name:"DHW",value:48.1}, {name:"Lighting",value:5.1}, {name:"Equipment",value:41.6}, {name:"Fans & Pumps",value:9.1}], pv: 44.0 },
      "EEM3": { total: 88.4, breakdown: [{name:"Heating",value:4.1}, {name:"Cooling",value:12.9}, {name:"DHW",value:12.5}, {name:"Lighting",value:5.1}, {name:"Equipment",value:41.6}, {name:"Fans & Pumps",value:9.1}], pv: 44.0 },
      "EEM4": { total: 58.0, breakdown: [{name:"Heating",value:5.7}, {name:"Cooling",value:6.7}, {name:"DHW",value:12.5}, {name:"Lighting",value:2.0}, {name:"Equipment",value:20.6}, {name:"Fans & Pumps",value:7.4}], pv: 44.0 }
    },
    "RC-HR2": {
      "IAL":     { total: 180.1, breakdown: [{name:"Heating",value:60.1}, {name:"Cooling",value:18.2}, {name:"DHW",value:51.8}, {name:"Lighting",value:4.6}, {name:"Equipment",value:45.4}, {name:"Fans & Pumps",value:0.0}], pv: 13.5 },
      "DEFAULT": { total: 125.1, breakdown: [{name:"Heating",value:1.0}, {name:"Cooling",value:12.1}, {name:"DHW",value:51.8}, {name:"Lighting",value:4.6}, {name:"Equipment",value:41.7}, {name:"Fans & Pumps",value:10.0}], pv: 26.0 },
      "EEM1":     { total: 125.1, breakdown: [{name:"Heating",value:1.0}, {name:"Cooling",value:12.1}, {name:"DHW",value:51.8}, {name:"Lighting",value:4.6}, {name:"Equipment",value:41.7}, {name:"Fans & Pumps",value:10.0}], pv: 26.0 },
      "EEM2": { total: 126.6, breakdown: [{name:"Heating",value:0.5}, {name:"Cooling",value:13.9}, {name:"DHW",value:51.8}, {name:"Lighting",value:4.6}, {name:"Equipment",value:41.7}, {name:"Fans & Pumps",value:10.1}], pv: 26.0 },
      "EEM3": { total: 89.2, breakdown: [{name:"Heating",value:6.9}, {name:"Cooling",value:13.9}, {name:"DHW",value:8.0}, {name:"Lighting",value:4.6}, {name:"Equipment",value:41.7}, {name:"Fans & Pumps",value:10.2}], pv: 26.0 },
      "EEM4": { total: 57.5, breakdown: [{name:"Heating",value:8.6}, {name:"Cooling",value:6.8}, {name:"DHW",value:7.9}, {name:"Lighting",value:1.8}, {name:"Equipment",value:20.5}, {name:"Fans & Pumps",value:8.0}], pv: 26.0 }
    },
    "RC-ML": {
      "IAL":     { total: 156.4, breakdown: [{name:"Heating",value:51.8}, {name:"Cooling",value:22.2}, {name:"DHW",value:24.5}, {name:"Lighting",value:5.2}, {name:"Equipment",value:52.7}, {name:"Fans & Pumps",value:0.0}], pv: 68.2 },
      "DEFAULT": { total: 107.6, breakdown: [{name:"Heating",value:13.0}, {name:"Cooling",value:6.8}, {name:"DHW",value:23.8}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.0}], pv: 89.4 },
      "EEM1":     { total: 107.6, breakdown: [{name:"Heating",value:13.0}, {name:"Cooling",value:6.8}, {name:"DHW",value:23.8}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.0}], pv: 89.4 },
      "EEM2": { total: 97.9, breakdown: [{name:"Heating",value:3.6}, {name:"Cooling",value:6.1}, {name:"DHW",value:23.8}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.5}], pv: 89.4 },
      "EEM3": { total: 84.5, breakdown: [{name:"Heating",value:5.0}, {name:"Cooling",value:6.1}, {name:"DHW",value:8.9}, {name:"Lighting",value:5.2}, {name:"Equipment",value:51.7}, {name:"Fans & Pumps",value:6.6}], pv: 89.4 },
      "EEM4": { total: 61.7, breakdown: [{name:"Heating",value:6.4}, {name:"Cooling",value:4.6}, {name:"DHW",value:8.9}, {name:"Lighting",value:2.9}, {name:"Equipment",value:31.5}, {name:"Fans & Pumps",value:6.5}], pv: 89.4 }
    },
    "RC-MR1": {
      "IAL":     { total: 149.5, breakdown: [{name:"Heating",value:30.7}, {name:"Cooling",value:27.2}, {name:"DHW",value:37.8}, {name:"Lighting",value:3.9}, {name:"Equipment",value:49.9}, {name:"Fans & Pumps",value:0.0}], pv: 37.4 },
      "DEFAULT": { total: 112.4, breakdown: [{name:"Heating",value:1.5}, {name:"Cooling",value:11.2}, {name:"DHW",value:37.3}, {name:"Lighting",value:5.7}, {name:"Equipment",value:46.3}, {name:"Fans & Pumps",value:8.5}], pv: 73.1 },
      "EEM1":     { total: 112.4, breakdown: [{name:"Heating",value:1.5}, {name:"Cooling",value:11.2}, {name:"DHW",value:37.3}, {name:"Lighting",value:5.7}, {name:"Equipment",value:46.3}, {name:"Fans & Pumps",value:8.5}], pv: 73.1 },
      "EEM2": { total: 111.6, breakdown: [{name:"Heating",value:0.4}, {name:"Cooling",value:12.2}, {name:"DHW",value:37.3}, {name:"Lighting",value:5.7}, {name:"Equipment",value:46.3}, {name:"Fans & Pumps",value:7.8}], pv: 73.1 },
      "EEM3": { total: 89.7, breakdown: [{name:"Heating",value:0.4}, {name:"Cooling",value:11.9}, {name:"DHW",value:15.6}, {name:"Lighting",value:5.7}, {name:"Equipment",value:46.3}, {name:"Fans & Pumps",value:7.8}], pv: 73.1 },
      "EEM4": { total: 60.4, breakdown: [{name:"Heating",value:1.3}, {name:"Cooling",value:7.3}, {name:"DHW",value:15.6}, {name:"Lighting",value:2.6}, {name:"Equipment",value:25.0}, {name:"Fans & Pumps",value:6.8}], pv: 73.1 }
    },
    "RC-MR2": {
      "IAL":     { total: 162.1, breakdown: [{name:"Heating",value:45.1}, {name:"Cooling",value:23.9}, {name:"DHW",value:43.7}, {name:"Lighting",value:5.6}, {name:"Equipment",value:43.8}, {name:"Fans & Pumps",value:0.0}], pv: 25.5 },
      "DEFAULT": { total: 113.8, breakdown: [{name:"Heating",value:1.8}, {name:"Cooling",value:10.4}, {name:"DHW",value:43.5}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:8.6}], pv: 66.3 },
      "EEM1":     { total: 113.8, breakdown: [{name:"Heating",value:1.8}, {name:"Cooling",value:10.4}, {name:"DHW",value:43.5}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:8.6}], pv: 66.3 },
      "EEM2": { total: 113.0, breakdown: [{name:"Heating",value:0.5}, {name:"Cooling",value:11.9}, {name:"DHW",value:43.5}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:7.7}], pv: 66.3 },
      "EEM3": { total: 87.1, breakdown: [{name:"Heating",value:0.6}, {name:"Cooling",value:11.6}, {name:"DHW",value:17.9}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:7.7}], pv: 66.3 },
      "EEM4": { total: 58.3, breakdown: [{name:"Heating",value:2.1}, {name:"Cooling",value:6.5}, {name:"DHW",value:17.9}, {name:"Lighting",value:2.3}, {name:"Equipment",value:20.7}, {name:"Fans & Pumps",value:6.6}], pv: 66.3 }
    },
    "RC-MR3": {
      "IAL":     { total: 161.8, breakdown: [{name:"Heating",value:45.6}, {name:"Cooling",value:23.1}, {name:"DHW",value:43.7}, {name:"Lighting",value:5.6}, {name:"Equipment",value:43.8}, {name:"Fans & Pumps",value:0.0}], pv: 25.5 },
      "DEFAULT": { total: 113.4, breakdown: [{name:"Heating",value:2.0}, {name:"Cooling",value:10.1}, {name:"DHW",value:43.5}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:8.5}], pv: 66.3 },
      "EEM1":     { total: 113.4, breakdown: [{name:"Heating",value:2.0}, {name:"Cooling",value:10.1}, {name:"DHW",value:43.5}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:8.5}], pv: 66.3 },
      "EEM2": { total: 112.5, breakdown: [{name:"Heating",value:0.6}, {name:"Cooling",value:11.5}, {name:"DHW",value:43.5}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:7.6}], pv: 66.3 },
      "EEM3": { total: 86.7, breakdown: [{name:"Heating",value:0.6}, {name:"Cooling",value:11.2}, {name:"DHW",value:17.9}, {name:"Lighting",value:5.6}, {name:"Equipment",value:41.5}, {name:"Fans & Pumps",value:7.6}], pv: 66.3 },
      "EEM4": { total: 58.0, breakdown: [{name:"Heating",value:2.2}, {name:"Cooling",value:6.1}, {name:"DHW",value:17.9}, {name:"Lighting",value:2.3}, {name:"Equipment",value:20.7}, {name:"Fans & Pumps",value:6.5}], pv: 66.3 }
    },
    "RC-R": {
      "IAL":     { total: 154.6, breakdown: [{name:"Heating",value:56.5}, {name:"Cooling",value:23.8}, {name:"DHW",value:22.1}, {name:"Lighting",value:4.7}, {name:"Equipment",value:47.5}, {name:"Fans & Pumps",value:0.0}], pv: 66.5 },
      "DEFAULT": { total: 103.6, breakdown: [{name:"Heating",value:17.1}, {name:"Cooling",value:6.9}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.8}], pv: 154.5 },
      "EEM1":     { total: 103.6, breakdown: [{name:"Heating",value:17.1}, {name:"Cooling",value:6.9}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:5.8}], pv: 154.5 },
      "EEM2": { total: 91.1, breakdown: [{name:"Heating",value:4.7}, {name:"Cooling",value:6.2}, {name:"DHW",value:21.7}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.4}], pv: 154.5 },
      "EEM3": { total: 78.9, breakdown: [{name:"Heating",value:7.4}, {name:"Cooling",value:6.2}, {name:"DHW",value:6.6}, {name:"Lighting",value:4.7}, {name:"Equipment",value:46.6}, {name:"Fans & Pumps",value:6.5}], pv: 154.5 },
      "EEM4": { total: 58.7, breakdown: [{name:"Heating",value:8.8}, {name:"Cooling",value:5.0}, {name:"DHW",value:6.6}, {name:"Lighting",value:2.6}, {name:"Equipment",value:28.3}, {name:"Fans & Pumps",value:6.5}], pv: 154.5 }
    },
    "RC-T": {
      "IAL":     { total: 158.8, breakdown: [{name:"Heating",value:46.2}, {name:"Cooling",value:21.7}, {name:"DHW",value:26.9}, {name:"Lighting",value:5.8}, {name:"Equipment",value:58.2}, {name:"Fans & Pumps",value:0.0}], pv: 62.2 },
      "DEFAULT": { total: 111.5, breakdown: [{name:"Heating",value:8.1}, {name:"Cooling",value:7.1}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.3}], pv: 81.4 },
      "EEM1":     { total: 111.5, breakdown: [{name:"Heating",value:8.1}, {name:"Cooling",value:7.1}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.3}], pv: 81.4 },
      "EEM2": { total: 105.3, breakdown: [{name:"Heating",value:2.3}, {name:"Cooling",value:6.3}, {name:"DHW",value:26.1}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.7}], pv: 81.4 },
      "EEM3": { total: 90.5, breakdown: [{name:"Heating",value:2.3}, {name:"Cooling",value:6.3}, {name:"DHW",value:11.2}, {name:"Lighting",value:5.8}, {name:"Equipment",value:57.1}, {name:"Fans & Pumps",value:6.8}], pv: 81.4 },
      "EEM4": { total: 65.0, breakdown: [{name:"Heating",value:3.8}, {name:"Cooling",value:4.5}, {name:"DHW",value:11.2}, {name:"Lighting",value:3.2}, {name:"Equipment",value:34.8}, {name:"Fans & Pumps",value:6.6}], pv: 81.4 }
    }
};

/**
 * Get energy data for a neighbourhood given envelope + energy column selections.
 * @param {string} envelope - "necb-2017", "ashrae", "high-performance-necb", or "high-performance-ashrae"
 * @param {string} nuCode - e.g. "RC-R"
 * @param {string} column - "IAL", "DEFAULT", "EEM1", "EEM2", "EEM3", "EEM4"
 * @returns {Object|null} { total, breakdown[], pv } or null
 */
function getEnergyData(envelope, nuCode, column) {
  const dataset = ENVELOPE_ENERGY_DATA[envelope];
  if (!dataset || !dataset[nuCode]) return null;
  return dataset[nuCode][column] || null;
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
