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
      "Mid Rise",
      "Attached Houses"
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
      "Mid Rise",
      "High Rise"
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
      "Quick Service Restaurant",
      "Small Retail",
      "Detached Houses",
      "Full Service Restaurant",
      "Small Office",
      "Attached Houses"
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
      "Quick Service Restaurant",
      "Mid Rise",
      "Full Service Restaurant",
      "Small Office",
      "Attached Houses",
      "Primary School"
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
      "Quick Service Restaurant",
      "Mid Rise",
      "Small Retail",
      "Full Service Restaurant",
      "Small Office",
      "Secondary School",
      "Medium Office"
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
      "Primary School",
      "Small Retail",
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
      "Mid Rise",
      "Small Retail",
      "Secondary School",
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
      "Quick Service Restaurant",
      "Hospital",
      "Small Retail",
      "Full Service Restaurant",
      "Medium Office",
      "High Rise",
      "Small Hotel"
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
      "Quick Service Restaurant",
      "Full Service Restaurant",
      "Large Hotel",
      "Large Office",
      "Standalone Retail",
      "High Rise"
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
      "Large Office",
      "Standalone Retail",
      "High Rise",
      "Quick Service Restaurant"
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
      "Mid Rise",
      "Small Retail",
      "Small Office",
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
      "Supermarket",
      "Quick Service Restaurant",
      "Mid Rise",
      "Full Service Restaurant",
      "Medium Office",
      "Standalone Retail",
      "Small Hotel"
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
      "Mid Rise",
      "Supermarket",
      "Standalone Retail",
      "Quick Service Restaurant"
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
      "Quick Service Restaurant",
      "Mid Rise",
      "Small Retail",
      "Small Office",
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
      "Small Warehouse",
      "Small Retail",
      "Small Office",
      "Quick Service Restaurant"
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
      "Attached House",
      "Quick Service Restaurant",
      "Small Retail",
      "Outpatient Health Care",
      "Full Service Restaurant",
      "Small Office",
      "Mid Rise Apartment"
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
      "Quick Service Restaurant",
      "Small Retail",
      "Outpatient Health Care",
      "Full Service Restaurant",
      "Medium Office",
      "Mid Rise Apartment",
      "High Rise Apartment",
      "Small Hotel"
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
      "Supermarket",
      "Quick Service Restaurant",
      "Small Retail",
      "Full Service Restaurant",
      "Small Office",
      "Medium Office",
      "Standalone Retail"
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
      "Supermarket",
      "Small Retail",
      "Standalone Retail",
      "Quick Service Restaurant"
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
      "Supermarket",
      "Quick Service Restaurant",
      "Full Service Restaurant",
      "Large Hotel",
      "Large Office",
      "Medium Office",
      "Standalone Retail"
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
      "Medium Office",
      "Quick Service Restaurant",
      "Data Center Large<br>High ITE",
      "Warehouse"
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
      "Warehouse",
      "Quick Service Restaurant",
      "Small Office",
      "Data Center Large<br>Low ITE"
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
      "Small Data Center<br>Low ITE",
      "Quick Service Restaurant",
      "Full Service Restaurant",
      "Large Office",
      "College",
      "Midrise Apartment"
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
      "Small Data Center<br>Low ITE",
      "Quick Service Restaurant",
      "Small Retail",
      "Full Service Restaurant",
      "Laboratory",
      "Medium Office",
      "College",
      "Midrise Apartment"
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
      "Quick Service Restaurant",
      "Full Service Restaurant",
      "Outpatient",
      "Small Office",
      "Laboratory",
      "Small Data Center<br>High ITE",
      "College",
      "Midrise Apartment"
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
      "Supermarket",
      "Quick Service Restaurant",
      "Tall Building",
      "Full Service Restaurant",
      "Super Tall Building",
      "Hotel Small",
      "Retail Standalone"
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
      "Supermarket",
      "Office Large",
      "Tall Building",
      "Quick Service Restaurant",
      "Small Retail",
      "Full Service Restaurant",
      "Hotel Small"
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
      "Hotel Large",
      "Supermarket",
      "Quick Service Restaurant",
      "Tall Building",
      "Full Service Restaurant",
      "Retail Strip Mall",
      "Office Medium"
    ]
  }
];

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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
            "value": 3.3
          },
          {
            "name": "Equipment",
            "value": 34.7
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
            "value": 21.5
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
            "value": 21.6
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
            "value": 22.2
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
            "value": 22.8
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 49.9
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
            "value": 43.8
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
            "value": 43.8
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
            "value": 44.7
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
            "value": 45.4
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
            "value": 3.3
          },
          {
            "name": "Equipment",
            "value": 34.7
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
            "value": 21.5
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
            "value": 21.6
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
            "value": 22.2
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
            "value": 22.8
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
        "total": 0.0,
        "breakdown": [
          {
            "name": "Heating",
            "value": 0.0
          },
          {
            "name": "Cooling",
            "value": 0.0
          },
          {
            "name": "DHW",
            "value": 0.0
          },
          {
            "name": "Lighting",
            "value": 0.0
          },
          {
            "name": "Equipment",
            "value": 0.0
          },
          {
            "name": "Fans & Pumps",
            "value": 0.0
          }
        ],
        "pv": 0.0
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
            "value": 3.9
          },
          {
            "name": "Equipment",
            "value": 49.9
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
            "value": 43.8
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
            "value": 43.8
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
            "value": 44.7
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
            "value": 45.4
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

// New Buildings Images mapping to merge
{
  "Detached Houses": "Content/Images_Buildings/two-story house.png",
  "Attached Houses": "Content/Images_Buildings/attached house.png",
  "Mid Rise": "Content/Images_Buildings/midrise apartment.png",
  "Midrise": "Content/Images_Buildings/midrise apartment.png",
  "High Rise": "Content/Images_Buildings/highrise apartment.png",
  "Quick Service Restaurant": "Content/Images_Buildings/quick service restaurant.png",
  "Small Retail": "Content/Images_Buildings/small retail.png",
  "Full Service Restaurant": "Content/Images_Buildings/full service restaurant.png",
  "Small Office": "Content/Images_Buildings/small office.png",
  "Primary School": "Content/Images_Buildings/primary school.png",
  "Secondary School": "Content/Images_Buildings/secondary school.png",
  "Medium Office": "Content/Images_Buildings/medium office.png",
  "Hospital": "Content/Images_Buildings/hospital.png",
  "Small Hotel": "Content/Images_Buildings/small hotel.png",
  "Large Hotel": "Content/Images_Buildings/large hotel.png",
  "Large Office": "Content/Images_Buildings/large office.png",
  "Standalone Retail": "Content/Images_Buildings/standalone retail.png",
  "Supermarket": "Content/Images_Buildings/supermarket.png",
  "Warehouse": "Content/Images_Buildings/warehouse.png",
  "Small Warehouse": "Content/Images_Buildings/warehouse.png",
  "Attached House": "Content/Images_Buildings/attached house.png",
  "Outpatient Health Care": "Content/Images_Buildings/outpatient healthcare.png",
  "Mid Rise Apartment": "Content/Images_Buildings/midrise apartment.png",
  "High Rise Apartment": "Content/Images_Buildings/highrise apartment.png",
  "Data Center Large<br>High ITE": "Content/Images_Buildings/large datacenter.png",
  "Data Center Large<br>Low ITE": "Content/Images_Buildings/large datacenter.png",
  "Small Data Center<br>Low ITE": "Content/Images_Buildings/small data center.png",
  "College": "Content/Images_Buildings/college.png",
  "Midrise Apartment": "Content/Images_Buildings/midrise apartment.png",
  "Laboratory": "Content/Images_Buildings/Laboratory.png",
  "Outpatient": "Content/Images_Buildings/outpatient healthcare.png",
  "Small Data Center<br>High ITE": "Content/Images_Buildings/small data center.png",
  "Tall Building": "Content/Images_Buildings/tall building.png",
  "Super Tall Building": "Content/Images_Buildings/super tall building.png",
  "Hotel Small": "Content/Images_Buildings/small hotel.png",
  "Retail Standalone": "Content/Images_Buildings/standalone retail.png",
  "Office Large": "Content/Images_Buildings/large office.png",
  "Hotel Large": "Content/Images_Buildings/large hotel.png",
  "Retail Strip Mall": "Content/Images_Buildings/retail strip mall.png",
  "Office Medium": "Content/Images_Buildings/medium office.png"
};

