# BEM Reference Report: DOE, NRCan, ASHRAE 90.1-2022, and 2024 IECC

Prepared: 2026-04-05
Source folder: `Content/Resources`

## Scope

This document consolidates four PDFs into one working reference for future BEM tasks in this repo. It keeps the most reusable tables, publication dates, and interpretation notes so benchmark models, code-savings analyses, and national median benchmarking values are not mixed together.

Tables that are most reusable for prototype comparison and sanity checking are intentionally kept. Long appendices, editorial content, and tables that do not directly help with reference-building energy comparison are omitted here and should be read from the original PDFs when needed.

**Unit Conversions Used Throughout:**
- 1 kBtu/ft2 = 3.15459 kWh/m2
- 1 GJ/m2 = 277.778 kWh/m2 (~= 88.1 kBtu/ft2)
- 1 ft2 = 0.09290304 m2

## Cross-Source Reading Guide

| Source | Published | Geography | Stock | What the numbers are | Best use in this repo |
|---|---|---|---|---|---|
| DOE Commercial Building Benchmark Models | July 2008 | U.S. | Commercial | Simulated benchmark model outputs and benchmark definitions | Baseline prototype understanding and commercial EnergyPlus sanity checks |
| NRCan Canadian National Median Reference Values | August 2018 | Canada | Commercial and institutional | National median benchmarking values from survey/reference datasets, not simulation outputs | Real-world benchmarking and rough calibration checks |
| ANSI/ASHRAE/IES Standard 90.1-2022: Energy Savings Analysis | February 2024 | U.S. | Commercial | Weighted simulation results comparing Standard 90.1-2019 vs 90.1-2022 | Code delta expectations for commercial models |
| Energy Savings Analysis: 2024 IECC for Residential Buildings | December 2024 | U.S. | Residential | Weighted simulation results comparing 2021 IECC vs 2024 IECC | Code delta expectations for residential models |

---

## 1. DOE Commercial Building Benchmark Models (July 2008)

Source PDF: `Content/Resources/doe-referenceBuildings-Resutls.pdf`

| Item | Value |
|---|---|
| Full title | DOE Commercial Building Benchmark Models |
| Publication date | July 2008 |
| Authors | P. Torcellini, M. Deru, B. Griffith, K. Benne (NREL); M. Halverson, D. Winiarski (PNNL); D.B. Crawley (DOE) |
| Coverage | U.S. commercial buildings |
| Model family | 15 benchmark building types, 16 climate locations, 3 vintages (pre-1980, post-1980, new construction) |
| Simulation engine | EnergyPlus Version 2.2 |
| Baseline standard | ASHRAE 90.1-2004 (new construction), 90.1-1989 (post-1980) |
| Most useful extracted tables | Table 1 benchmark characteristics, Table 3 climate locations, Table 8 new-construction site annual EUI |
| Interpretation | This is a benchmark-model definition paper. The EUI values are simulated benchmark outputs, not measured stock medians. |

### 1.1 Benchmark Building Characteristics

| Benchmark building | Floor area (ft2) | Floor area (m2) | Floors | Aspect ratio / shape | 2003 CBECS area (ft2) |
|---|---:|---:|---:|---|---:|
| Large Office | 460,240 | 42,758 | 12 | 1.5 | 228,725 |
| Medium Office | 53,630 | 4,982 | 3 | 1.5 | 13,842 |
| Small Office | 5,500 | 511 | 1 | 1.5 | 5,579 |
| Warehouse | 52,050 | 4,836 | 1 | 1.5 | 21,603 |
| Stand-Alone Retail | 41,790 | 3,882 | 1 | 1.3 | 10,028 |
| Strip Mall | 24,010 | 2,231 | 1 | 3 (per store) | 23,223 |
| Primary School | 73,960 | 6,872 | 2 | E-shape | 26,828 |
| Secondary School | 210,890 | 19,594 | 3 | E-shape | 37,024 |
| Supermarket | 45,000 | 4,181 | 1 | 1.3 | 8,314 |
| Fast Food | 2,500 | 232 | 1 | 1 | 3,345 |
| Restaurant | 5,500 | 511 | 1 | 1 | 6,585 |
| Hospital | 201,250 | 18,698 | 5 | 1.3 | 241,416 |
| Outpatient Health Care | 10,000 | 929 | 2 | 1.5 | 10,409 |
| Small Hotel | 21,080 | 1,958 | 2 | L-shape | 14,990 |
| Large Hotel | 100,820 | 9,367 | 6 | 3.8 (1st flr) / 5.1 | 97,102 |

### 1.2 Climate Location Mapping

| Climate zone | Representative city | Weather file location |
|---|---|---|
| 1A | Miami, FL | Miami, FL |
| 2A | Houston, TX | Houston, TX |
| 2B | Phoenix, AZ | Phoenix, AZ |
| 3A | Atlanta, GA | Atlanta, GA |
| 3B | Los Angeles, CA | Los Angeles, CA |
| 3B | Las Vegas, NV | Las Vegas, NV |
| 3C | San Francisco, CA | San Francisco, CA |
| 4A | Baltimore, MD | Baltimore, MD |
| 4B | Albuquerque, NM | Albuquerque, NM |
| 4C | Seattle, WA | Seattle, WA |
| 5A | Chicago, IL | Chicago-O'Hare, IL |
| 5B | Denver, CO | Boulder, CO |
| 6A | Minneapolis, MN | Minneapolis, MN |
| 6B | Helena, MT | Helena, MT |
| 7 | Duluth, MN | Duluth, MN |
| 8 | Fairbanks, AK | Fairbanks, AK |

### 1.3 HVAC Equipment for New Construction and Post-1980

| Building Type | Heating | Cooling | Air Distribution |
|---|---|---|---|
| Large Office | Boiler | Chiller | MZ VAV |
| Medium Office | Furnace | PACU | MZ VAV |
| Small Office | Furnace | PACU | SZ CAV |
| Warehouse | Furnace | PACU | SZ CAV |
| Stand-Alone Retail | Furnace | PACU | SZ CAV |
| Strip Mall | Furnace | PACU | SZ CAV |
| Primary School | Boiler | PACU | CAV |
| Secondary School | Boiler | Chiller | MZ VAV |
| Supermarket | Furnace | PACU | CAV |
| Fast Food | Furnace | PACU | SZ CAV |
| Restaurant | Furnace | PACU | SZ CAV |
| Hospital | Boiler | Chiller | FCU, CAV and VAV |
| Outpatient Health Care | Furnace | PACU | CAV |
| Small Hotel (Motel) | ISH | IRAC | SZ CAV |
| Large Hotel | Boiler | Chiller | FCU and VAV |

*PACU = Packaged Air Conditioning Unit; ISH = Individual Space Heater; IRAC = Individual Room Air Conditioner; SZ = Single Zone; MZ = Multizone; CAV = Constant Volume; VAV = Variable Air Volume; FCU = Fan Coil Units*

### 1.4 New-Construction Site Annual EUI

Units below are from DOE Table 8: `1000 Btu/ft2`, effectively `kBtu/ft2-yr`.

#### Warm and Mixed Climates

| Building type | 1A Miami | 2A Houston | 2B Phoenix | 3A Atlanta | 3B Los Angeles | 3B Las Vegas | 3C San Francisco | 4A Baltimore | 4B Albuquerque | 4C Seattle |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Large Office | 49.5 | 51.5 | 51.1 | 49.2 | 42.6 | 53.3 | 42.6 | 52.6 | 51.4 | 44.8 |
| Medium Office | 48.3 | 49.0 | 50.6 | 47.5 | 41.3 | 47.2 | 42.0 | 50.9 | 46.5 | 44.7 |
| Small Office | 36.7 | 33.6 | 35.2 | 29.1 | 26.1 | 30.1 | 26.1 | 30.5 | 28.9 | 28.2 |
| Warehouse | 18.2 | 21.4 | 21.8 | 26.6 | 17.9 | 24.4 | 25.1 | 34.7 | 29.6 | 32.9 |
| Stand-Alone Retail | 37.4 | 33.7 | 33.8 | 32.0 | 30.1 | 33.1 | 29.8 | 32.6 | 32.1 | 30.3 |
| Strip Mall | 38.1 | 36.2 | 37.6 | 35.2 | 29.2 | 36.1 | 32.3 | 38.5 | 36.3 | 35.4 |
| Primary School | 94.5 | 93.0 | 91.3 | 85.5 | 72.3 | 82.5 | 91.8 | 92.9 | 82.5 | 79.5 |
| Secondary School | 86.5 | 85.0 | 92.3 | 78.8 | 66.4 | 83.0 | 84.7 | 85.1 | 81.7 | 71.0 |
| Supermarket | 180.9 | 185.4 | 171.7 | 180.8 | 158.4 | 163.6 | 167.3 | 191.0 | 171.8 | 181.1 |
| Fast Food | 454.5 | 464.4 | 431.7 | 476.2 | 365.9 | 439.5 | 400.3 | 552.5 | 483.1 | 486.1 |
| Restaurant | 260.4 | 266.4 | 249.0 | 274.7 | 204.0 | 253.7 | 228.7 | 324.5 | 278.4 | 283.2 |
| Hospital | 126.1 | 128.7 | 132.5 | 121.9 | 99.8 | 122.6 | 107.8 | 132.6 | 123.9 | 113.6 |
| Outpatient Health Care | 40.2 | 37.0 | 37.7 | 34.4 | 29.7 | 35.6 | 29.1 | 36.8 | 34.4 | 32.5 |
| Small Hotel | 60.7 | 60.3 | 59.4 | 60.6 | 58.0 | 59.1 | 58.4 | 63.4 | 63.5 | 61.0 |
| Large Hotel | 68.3 | 72.9 | 75.9 | 64.7 | 50.3 | 63.8 | 57.6 | 73.7 | 65.3 | 65.5 |

#### Cold Climates and 2003 CBECS Comparison

| Building type | 5A Chicago | 5B Denver | 6A Minneapolis | 6B Helena | 7 Duluth | 8 Fairbanks | 2003 CBECS avg |
|---|---:|---:|---:|---:|---:|---:|---:|
| Large Office | 51.5 | 52.7 | 54.7 | 56.7 | 55.9 | 68.0 | 98.6 |
| Medium Office | 50.1 | 47.6 | 53.9 | 50.6 | 54.8 | 66.3 | 93.8 |
| Small Office | 31.7 | 29.4 | 34.6 | 32.1 | 35.3 | 47.3 | 79.9 |
| Warehouse | 42.0 | 36.9 | 53.3 | 47.9 | 58.5 | 87.6 | 47.8 |
| Stand-Alone Retail | 32.8 | 32.0 | 34.8 | 33.3 | 35.1 | 41.1 | 70.1 |
| Strip Mall | 40.9 | 37.9 | 46.6 | 43.5 | 48.5 | 63.4 | 110.0 |
| Primary School | 100.0 | 88.0 | 115.2 | 99.9 | 121.8 | 165.5 | 68.3 |
| Secondary School | 88.9 | 84.2 | 100.6 | 92.5 | 105.2 | 144.0 | 79.9 |
| Supermarket | 200.1 | 181.3 | 213.6 | 197.0 | 222.1 | 264.1 | 214.4 |
| Fast Food | 621.6 | 543.5 | 709.1 | 626.1 | 781.3 | 1043.6 | 450.9 |
| Restaurant | 366.4 | 314.6 | 421.0 | 367.0 | 464.0 | 633.1 | 231.2 |
| Hospital | 140.6 | 130.3 | 154.2 | 140.2 | 161.3 | 206.8 | 249.2 |
| Outpatient Health Care | 37.5 | 34.1 | 41.5 | 37.3 | 41.2 | 56.0 | 94.6 |
| Small Hotel | 67.2 | 66.2 | 73.2 | 70.6 | 77.6 | 92.5 | 74.9 |
| Large Hotel | 81.1 | 70.3 | 90.8 | 80.3 | 95.8 | 129.2 | 110.0 |

#### CZ6A (Minneapolis) Summary in kWh/m2

| Building Type | Site EUI (kBtu/ft2) | Site EUI (kWh/m2) |
|---|---:|---:|
| Large Office | 54.7 | 172.5 |
| Medium Office | 53.9 | 170.0 |
| Small Office | 34.6 | 109.1 |
| Warehouse | 53.3 | 168.1 |
| Stand-Alone Retail | 34.8 | 109.8 |
| Strip Mall | 46.6 | 147.0 |
| Primary School | 115.2 | 363.4 |
| Secondary School | 100.6 | 317.3 |
| Supermarket | 213.6 | 673.6 |
| Fast Food | 709.1 | 2,237.0 |
| Restaurant | 421.0 | 1,328.0 |
| Hospital | 154.2 | 486.4 |
| Outpatient Health Care | 41.5 | 130.9 |
| Small Hotel | 73.2 | 230.9 |
| Large Hotel | 90.8 | 286.3 |

### 1.5 Practical Reading Notes

- DOE 2008 is the oldest source in this set, but it is still important because it defines the benchmark-model logic that later commercial prototype work builds on.
- The paper includes three vintages, but the most reusable comparative energy table in the paper is Table 8 for new construction.
- CBECS 2003 averages include all building vintages (not just new construction), which explains why some CBECS values are higher than the new-construction benchmarks.
- For repo work, this source is strongest when you need archetype shape, size, HVAC type, and climate sensitivity, not current code compliance targets.

---

## 2. NRCan Canadian National Median Reference Values (August 2018)

Source PDF: `Content/Resources/NRcan_commercialResults.pdf`

| Item | Value |
|---|---|
| Full title | Canadian National Median Reference Values for All Portfolio Manager Property Types |
| Publication date | August 2018 |
| Coverage | Canada, commercial and institutional property types |
| Base datasets | SCIEU 2014, SECA 2014, CIBEUS 2000, EPA data for data centres, AWWA data for water/wastewater |
| Interpretation | This is a benchmarking reference sheet for national medians. Except for data-centre PUE, these values are not simulation outputs. |
| Best use | Post-simulation benchmarking, calibration sanity checks, and Canadian-market context |

### 2.1 Dataset Basis Called Out by NRCan

| Dataset | Role in the NRCan sheet |
|---|---|
| SCIEU 2014 | Main source for many commercial and institutional medians |
| SECA 2014 | Arena-related medians |
| CIBEUS 2000 | Older legacy categories and gaps not covered well in SCIEU |
| EPA Data Center reference | Used for data-centre PUE where Canadian equivalent data was not available |
| AWWA references | Used for drinking-water and wastewater treatment facilities |

### 2.2 Selected Archetypes Relevant to BEM Work

NRCan reports source and site EUI in `GJ/m2`. Approximate converted values use `1 GJ/m2 ~= 88.1 kBtu/ft2` and `1 GJ/m2 = 277.778 kWh/m2`.

| Property type | Source EUI (GJ/m2) | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Approx site (kBtu/ft2) | Peer-group reference |
|---|---:|---:|---:|---:|---|
| Office* | 1.55 | 0.99 | 275.0 | 87.2 | SCIEU - Offices |
| Medical Office* | 1.48 | 0.98 | 272.2 | 86.3 | SCIEU - Medical Offices |
| K-12 School* | 1.07 | 0.75 | 208.3 | 66.0 | SCIEU - Primary and High Schools |
| College/University | 1.44 | 1.01 | 280.6 | 88.9 | SCIEU - Other (Post Secondary) |
| Hospital (General Medical & Surgical)* | 3.09 | 2.22 | 616.7 | 195.5 | SCIEU - Hospitals |
| Urgent Care/Clinic/Other Outpatient | 1.47 | 1.02 | 283.3 | 89.8 | CIBEUS - Out Patient Care |
| Hotel | 1.37 | 0.88 | 244.4 | 77.5 | SCIEU - Hotel and Motel |
| Multifamily Housing | N/A | N/A | N/A | N/A | N/A in source sheet |
| Supermarket/Grocery Store* | 3.50 | 1.91 | 530.6 | 168.2 | SCIEU - Food and Beverage Sales |
| Convenience Store* | 3.50 | 1.91 | 530.6 | 168.2 | SCIEU - Food and Beverage Sales |
| Fast Food Restaurant | 4.12 | 3.17 | 880.6 | 279.1 | SCIEU - Other (Restaurants) |
| Restaurant | 4.12 | 3.17 | 880.6 | 279.1 | SCIEU - Other (Restaurants) |
| Retail Store | 1.60 | 1.13 | 313.9 | 99.5 | SCIEU - Retail (Standalone) |
| Strip Mall | 0.84 | 0.74 | 205.6 | 65.2 | SCIEU - Retail (Strip Malls) |
| Enclosed Mall | 4.73 | 4.51 | 1,252.8 | 397.1 | SCIEU - Retail (Enclosed Malls) |
| Warehouse/Distribution Centre | 1.02 | 0.63 | 175.0 | 55.5 | SCIEU - Non-refrigerated Warehouse |
| Refrigerated Warehouse | 2.38 | 1.33 | 369.4 | 117.1 | SCIEU - Refrigerated Warehouse |
| Ice/Curling Rink* | 1.76 | 1.15 | 319.4 | 101.3 | SECA - Arenas |
| Indoor Arena | 2.49 | 1.65 | 458.3 | 145.3 | SECA - Large Facilities (limited data) |
| Data Centre (PUE, not EUI) | 1.82 | 1.82 | -- | 160.3 | EPA - Data Center |

### 2.3 Full NRCan Reference by Category

#### Office and Financial

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Bank Branch / Financial Office | 1.55 | 430.6 | 0.99 | SCIEU - Offices |
| Office | 1.55 | 430.6 | 0.99 | SCIEU - Offices |
| Medical Office | 1.48 | 411.1 | 0.98 | SCIEU - Medical Offices |
| Veterinary Office | 1.47 | 408.3 | 1.02 | CIBEUS - Out Patient Care |

#### Education

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Adult Education | 1.41 | 391.7 | 1.18 | CIBEUS - Adult Education |
| College/University | 1.44 | 400.0 | 1.01 | SCIEU - Other (Post Secondary) |
| K-12 School | 1.07 | 297.2 | 0.75 | SCIEU - Primary and High Schools |
| Pre-school/Daycare | 1.37 | 380.6 | 0.83 | SCIEU - Other |
| Vocational School | 1.41 | 391.7 | 1.18 | CIBEUS - Adult Education |
| Other - Education | 1.24 | 344.4 | 0.92 | CIBEUS - Education |

#### Healthcare

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Hospital (General Medical & Surgical) | 3.09 | 858.3 | 2.22 | SCIEU - Hospitals |
| Other/Specialty Hospital | 3.09 | 858.3 | 2.22 | SCIEU - Hospitals |
| Ambulatory Surgical Centre | 1.47 | 408.3 | 1.02 | CIBEUS - Out Patient Care |
| Outpatient Rehab/Physical Therapy | 1.47 | 408.3 | 1.02 | CIBEUS - Out Patient Care |
| Residential Care Facility | 1.47 | 408.3 | 1.04 | SCIEU - Nursing Care |
| Senior Care Community | 1.47 | 408.3 | 1.04 | SCIEU - Nursing Care |
| Urgent Care/Clinic/Other Outpatient | 1.47 | 408.3 | 1.02 | CIBEUS - Out Patient Care |

#### Lodging and Residential

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Barracks | 1.98 | 550.0 | 1.45 | CIBEUS - Accommodation |
| Hotel | 1.37 | 380.6 | 0.88 | SCIEU - Hotel and Motel |
| Multifamily Housing | N/A | N/A | N/A | N/A |
| Prison/Incarceration | 1.67 | 463.9 | 1.28 | CIBEUS - Public Order/Safety |
| Residence Hall/Dormitory | 1.98 | 550.0 | 1.45 | CIBEUS - Accommodation |
| Other - Lodging/Residential | 1.37 | 380.6 | 0.88 | SCIEU - Hotel and Motel |

#### Retail

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Retail Store | 1.60 | 444.4 | 1.13 | SCIEU - Retail (Standalone) |
| Automobile Dealership | 1.60 | 444.4 | 1.13 | SCIEU - Retail (Standalone) |
| Wholesale Club/Supercentre | 1.60 | 444.4 | 1.13 | SCIEU - Retail (Standalone) |
| Strip Mall | 0.84 | 233.3 | 0.74 | SCIEU - Retail (Strip Malls) |
| Enclosed Mall | 4.73 | 1,313.9 | 4.51 | SCIEU - Retail (Enclosed Malls) |

#### Food Sales and Food Service

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Convenience Store (with/without gas) | 3.50 | 972.2 | 1.91 | SCIEU - Food & Beverage |
| Supermarket/Grocery Store | 3.50 | 972.2 | 1.91 | SCIEU - Food & Beverage |
| Fast Food Restaurant | 4.12 | 1,144.4 | 3.17 | SCIEU - Other (Restaurants) |
| Restaurant/Bar | 4.12 | 1,144.4 | 3.17 | SCIEU - Other (Restaurants) |

#### Warehouse and Storage

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Self-Storage Facility | 1.02 | 283.3 | 0.63 | SCIEU - Non-refrig. Warehouse |
| Distribution Centre | 1.02 | 283.3 | 0.63 | SCIEU - Non-refrig. Warehouse |
| Non-Refrigerated Warehouse | 1.02 | 283.3 | 0.63 | SCIEU - Non-refrig. Warehouse |
| Refrigerated Warehouse | 2.38 | 661.1 | 1.33 | SCIEU - Refrig. Warehouse |

#### Entertainment, Public Assembly, Public Services, and Other

| Primary Function | Site EUI (GJ/m2) | Site EUI (kWh/m2) | Source EUI (GJ/m2) | Reference Data |
|---|---:|---:|---:|---|
| Convention Centre / Museum / Performing Arts | 2.43 | 675.0 | 1.74 | CIBEUS - Public Assembly |
| Movie Theatre / Bar / Nightclub / Casino | 1.59 | 441.7 | 0.93 | CIBEUS - Casino, Movie, Night Club |
| Ice/Curling Rink | 1.76 | 488.9 | 1.15 | SECA - Arenas |
| Fitness Centre/Health Club/Gym | 1.89 | 525.0 | 1.51 | CIBEUS - Fitness Centre |
| Indoor Arena | 2.49 | 691.7 | 1.65 | SECA - Large Facilities |
| Courthouse / Police Station / Prison | 1.67 | 463.9 | 1.28 | CIBEUS - Public Order/Safety |
| Library / Social Hall | 2.43 | 675.0 | 1.74 | CIBEUS - Public Assembly |
| Fire Station | 1.59 | 441.7 | 1.23 | CIBEUS - Municipal Admin. |
| Worship Facility | 0.84 | 233.3 | 0.69 | SCIEU - Place of Worship |
| Laboratory / Mixed Use / Other | 1.42 | 394.4 | 0.98 | SCIEU - Other |
| Data Centre (PUE, not EUI) | 1.82 | -- | 1.82 | EPA - Data Center |

### 2.4 Practical Reading Notes

- NRCan is the only Canadian source in this set and the only one built primarily from survey/reference datasets rather than simulation runs.
- It is useful for benchmarking output ranges, but it should not be treated as a direct replacement for DOE or ASHRAE prototype simulations.
- Canadian climate is generally colder than U.S. averages, which contributes to higher heating loads.
- Multifamily Housing has no NRCan median value (N/A).
- Data-centre values in the source are PUE-based, not true building EUI, so they should be handled separately from other building types.

---

## 3. ANSI/ASHRAE/IES Standard 90.1-2022: Energy Savings Analysis (February 2024)

Source PDF: `Content/Resources/Standard_90.1-2022_Commercial.pdf`

| Item | Value |
|---|---|
| Full title | ANSI/ASHRAE/IES Standard 90.1-2022: Energy Savings Analysis |
| Publication date | February 2024 |
| Coverage | U.S. commercial buildings |
| Model family | 16 commercial prototype buildings with national floor-area weights |
| Simulation engine | EnergyPlus (current at time of study) |
| Main comparison | Standard 90.1-2019 vs Standard 90.1-2022 |
| Key distinction | Reports both "Gross" (total energy consumed) and "Net" (minus on-site renewable generation) |
| Interpretation | This is a weighted code-savings simulation study, not a benchmark-model-definition paper and not a measured stock median dataset. |

### 3.1 National Weighted Summary

| Metric | 90.1-2019 | 90.1-2022 (Net) | Net Savings |
|---|---:|---:|---:|
| Site EUI (kBtu/ft2-yr) | 47.8 | 41.1 | 14.0% |
| Source EUI (kBtu/ft2-yr) | 108.5 | 92.5 | 14.7% |
| Energy Cost ($/ft2-yr) | 1.35 | 1.15 | 14.8% |
| Carbon Emissions (tons/kft2-yr) | 7.5 | 6.4 | 14.7% |

### 3.2 Building-Type Comparison (Net Energy, including on-site renewables)

| Category | Prototype | Weight | 2019 site | 2022 site | Site savings | 2019 source | 2022 source | Source savings |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Office | Small Office | 3.8% | 28.2 | 25.3 | 10.3% | 78.3 | 70.1 | 10.5% |
| Office | Medium Office | 5.0% | 30.8 | 24.8 | 19.5% | 79.6 | 62.8 | 21.1% |
| Office | Large Office | 3.9% | 53.9 | 49.2 | 8.7% | 147.6 | 134.8 | 8.7% |
| Retail | Standalone Retail | 10.9% | 46.8 | 36.7 | 21.6% | 103.7 | 80.4 | 22.5% |
| Retail | Strip Mall | 3.7% | 50.2 | 37.8 | 24.7% | 121.4 | 92.0 | 24.2% |
| Education | Primary School | 4.8% | 43.9 | 38.9 | 11.4% | 101.6 | 89.4 | 12.0% |
| Education | Secondary School | 10.9% | 39.1 | 33.7 | 13.8% | 94.0 | 80.2 | 14.7% |
| Healthcare | Outpatient Healthcare | 3.4% | 99.6 | 88.2 | 11.4% | 228.9 | 200.4 | 12.5% |
| Healthcare | Hospital | 4.5% | 100.4 | 91.5 | 8.9% | 236.7 | 214.6 | 9.3% |
| Lodging | Small Hotel | 1.6% | 61.3 | 51.9 | 15.3% | 119.0 | 99.5 | 16.4% |
| Lodging | Large Hotel | 4.2% | 84.4 | 73.5 | 12.9% | 164.8 | 143.8 | 12.7% |
| Warehouse | Warehouse | 18.6% | 13.8 | 10.6 | 23.2% | 27.1 | 18.6 | 31.4% |
| Food Service | Quick-Service Restaurant | 0.3% | 502.2 | 469.4 | 6.5% | 860.8 | 808.9 | 6.0% |
| Food Service | Full-Service Restaurant | 1.0% | 341.5 | 316.5 | 7.3% | 641.8 | 600.0 | 6.5% |
| Apartment | Mid-Rise Apartment | 13.7% | 39.3 | 33.6 | 14.5% | 103.6 | 88.7 | 14.4% |
| Apartment | High-Rise Apartment | 9.6% | 45.3 | 39.0 | 13.9% | 95.3 | 82.4 | 13.5% |
| **National** | **Weighted Average** | **100%** | **47.8** | **41.1** | **14.0%** | **108.5** | **92.5** | **14.7%** |

*Site EUI units: kBtu/ft2-yr. Source EUI units: kBtu/ft2-yr.*

### 3.3 Climate-Zone Comparison (Net Energy, including on-site renewables)

| Climate zone | Weight | 2019 site | 2022 site | Site savings | 2019 source | 2022 source | Source savings |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1A | 0.04 | 46.5 | 40.6 | 12.7% | 115.6 | 100.2 | 13.3% |
| 2A | 0.17 | 45.3 | 39.2 | 13.5% | 113.1 | 96.8 | 14.4% |
| 2B | 0.03 | 41.2 | 35.2 | 14.6% | 103.6 | 87.5 | 15.5% |
| 3A | 0.15 | 45.8 | 39.6 | 13.5% | 107.4 | 91.6 | 14.7% |
| 3B | 0.09 | 39.4 | 33.4 | 15.2% | 95.3 | 79.9 | 16.2% |
| 3C | 0.02 | 39.0 | 33.3 | 14.6% | 96.9 | 81.6 | 15.8% |
| 4A | 0.21 | 48.2 | 41.4 | 14.1% | 106.2 | 90.8 | 14.5% |
| 4B | 0.00 | 49.4 | 42.1 | 14.8% | 113.0 | 95.5 | 15.5% |
| 4C | 0.03 | 41.0 | 35.4 | 13.7% | 93.5 | 80.4 | 14.0% |
| 5A | 0.18 | 55.0 | 47.1 | 14.4% | 113.0 | 96.3 | 14.8% |
| 5B | 0.05 | 48.8 | 41.7 | 14.5% | 107.8 | 91.5 | 15.1% |
| 5C | 0.00 | 54.4 | 46.7 | 14.2% | 116.9 | 100.9 | 13.7% |
| 6A | 0.03 | 64.8 | 55.4 | 14.5% | 129.5 | 110.2 | 14.9% |
| 6B | 0.01 | 60.5 | 51.7 | 14.5% | 123.5 | 105.6 | 14.5% |
| 7 | 0.00 | 70.2 | 60.7 | 13.5% | 137.5 | 118.8 | 13.6% |
| 8 | 0.00 | 87.5 | 75.7 | 13.5% | 156.4 | 136.0 | 13.0% |
| **National** | **1.00** | **47.8** | **41.1** | **14.0%** | **108.5** | **92.5** | **14.7%** |

*Site EUI units: kBtu/ft2-yr. Source EUI units: kBtu/ft2-yr.*

### 3.4 Gross Energy Use Intensity by Climate Zone -- Standard 90.1-2022 (excluding renewables)

| Climate Zone | Floor Area Weight | Site EUI (kBtu/ft2) | Site EUI (kWh/m2) | Source EUI (kBtu/ft2) | ECI ($/ft2-yr) | CO2 (tons/kft2) |
|---|---:|---:|---:|---:|---:|---:|
| 1A | 0.04 | 42.5 | 134.1 | 105.5 | $1.34 | 7.5 |
| 2A | 0.17 | 41.4 | 130.6 | 103.1 | $1.31 | 7.3 |
| 2B | 0.03 | 37.7 | 118.9 | 94.6 | $1.20 | 6.7 |
| 3A | 0.15 | 41.8 | 131.8 | 97.8 | $1.23 | 6.8 |
| 3B | 0.09 | 36.0 | 113.6 | 87.2 | $1.10 | 6.1 |
| 3C | 0.02 | 35.5 | 112.0 | 87.9 | $1.11 | 6.2 |
| 4A | 0.21 | 43.2 | 136.2 | 95.8 | $1.19 | 6.6 |
| 4B | 0.00 | 44.8 | 141.3 | 103.0 | $1.29 | 7.2 |
| 4C | 0.03 | 36.9 | 116.4 | 84.6 | $1.06 | 5.9 |
| 5A | 0.18 | 48.9 | 154.3 | 101.4 | $1.24 | 6.8 |
| 5B | 0.05 | 43.8 | 138.1 | 97.6 | $1.21 | 6.7 |
| 5C | 0.00 | 48.5 | 153.0 | 105.9 | $1.31 | 7.2 |
| 6A | 0.03 | 57.2 | 180.4 | 115.5 | $1.41 | 7.7 |
| 6B | 0.01 | 53.6 | 169.1 | 111.2 | $1.36 | 7.5 |
| 7 | 0.00 | 62.5 | 197.2 | 123.8 | $1.50 | 8.2 |
| 8 | 0.00 | 77.1 | 243.2 | 140.0 | $1.67 | 9.0 |
| **National** | **1.00** | **43.1** | **135.9** | **98.3** | **$1.23** | **6.8** |

### 3.5 Gross Energy Use Intensity by Building Type -- Standard 90.1-2022 (excluding renewables)

| Building Type | Prototype | Floor Area Weight | Site EUI (kBtu/ft2) | Site EUI (kWh/m2) | Source EUI (kBtu/ft2) | ECI ($/ft2-yr) |
|---|---|---:|---:|---:|---:|---:|
| Office | Small Office | 3.8% | 25.7 | 81.1 | 71.4 | $0.92 |
| Office | Medium Office | 5.0% | 27.5 | 86.7 | 70.4 | $0.90 |
| Office | Large Office | 3.9% | 50.2 | 158.4 | 137.5 | $1.77 |
| Retail | Standalone Retail | 10.9% | 39.3 | 123.9 | 87.9 | $1.09 |
| Retail | Strip Mall | 3.7% | 40.6 | 128.1 | 99.7 | $1.26 |
| Education | Primary School | 4.8% | 41.6 | 131.2 | 97.0 | $1.22 |
| Education | Secondary School | 10.9% | 36.4 | 114.8 | 87.7 | $1.11 |
| Healthcare | Outpatient | 3.4% | 90.8 | 286.3 | 207.8 | $2.60 |
| Healthcare | Hospital | 4.5% | 93.0 | 293.3 | 218.9 | $2.75 |
| Lodging | Small Hotel | 1.6% | 53.9 | 170.0 | 105.2 | $1.27 |
| Lodging | Large Hotel | 4.2% | 75.0 | 236.6 | 148.1 | $1.80 |
| Warehouse | Warehouse | 18.6% | 12.8 | 40.4 | 25.0 | $0.30 |
| Food Service | Quick-Service Restaurant | 0.3% | 469.4 | 1,480.8 | 808.9 | $9.50 |
| Food Service | Full-Service Restaurant | 1.0% | 316.5 | 998.5 | 600.0 | $7.21 |
| Apartment | Mid-Rise Apartment | 13.7% | 35.5 | 112.0 | 94.2 | $1.21 |
| Apartment | High-Rise Apartment | 9.6% | 40.0 | 126.2 | 85.3 | $1.05 |
| **National** | **Weighted Average** | **100%** | **43.1** | **135.9** | **98.3** | **$1.23** |

### 3.6 Percent Gross Energy Savings by Climate Zone (2022 vs 2019)

| Climate Zone | Floor Area Weight | Site EUI (%) | Source EUI (%) | ECI (%) | CO2 (%) |
|---|---:|---:|---:|---:|---:|
| 1A | 0.04 | 8.6 | 8.7 | 8.8 | 8.5 |
| 2A | 0.17 | 8.6 | 8.8 | 8.4 | 8.8 |
| 2B | 0.03 | 8.5 | 8.7 | 9.1 | 9.5 |
| 3A | 0.15 | 8.7 | 8.9 | 8.9 | 9.3 |
| 3B | 0.09 | 8.6 | 8.5 | 8.3 | 9.0 |
| 3C | 0.02 | 9.0 | 9.3 | 9.8 | 10.1 |
| 4A | 0.21 | 10.4 | 9.8 | 9.8 | 9.6 |
| 4B | 0.00 | 9.3 | 8.8 | 8.5 | 7.7 |
| 4C | 0.03 | 10.0 | 9.5 | 9.4 | 9.2 |
| 5A | 0.18 | 11.1 | 10.3 | 10.1 | 10.5 |
| 5B | 0.05 | 10.2 | 9.5 | 9.7 | 9.5 |
| 5C | 0.00 | 10.8 | 9.4 | 9.0 | 10.0 |
| 6A | 0.03 | 11.7 | 10.8 | 10.2 | 10.5 |
| 6B | 0.01 | 11.4 | 10.0 | 9.9 | 9.6 |
| 7 | 0.00 | 11.0 | 10.0 | 10.2 | 9.9 |
| 8 | 0.00 | 11.9 | 10.5 | 9.7 | 10.0 |
| **National** | **1.00** | **9.8** | **9.4** | **8.9** | **9.3** |

### 3.7 Practical Reading Notes

- The national weighted average improvement is material: 14.0% net site-EUI savings and 14.7% net source-EUI savings from 90.1-2019 to 90.1-2022.
- Net savings are higher than gross savings because 90.1-2022 introduced mandatory on-site renewable energy requirements (Section 11 / Addendum ap).
- In the building-type results, Warehouse and Strip Mall show the strongest source-EUI savings.
- In the climate-zone results, climate zone 3B shows the strongest source-EUI savings at 16.2%.
- CZ6A gross site EUI: 57.2 kBtu/ft2 (180.4 kWh/m2); CZ6A net site EUI: 55.4 kBtu/ft2 (174.8 kWh/m2).

---

## 4. Energy Savings Analysis: 2024 IECC for Residential Buildings (December 2024)

Source PDF: `Content/Resources/2024_IECC_Residentials.pdf`

| Item | Value |
|---|---|
| Full title | Energy Savings Analysis: 2024 IECC for Residential Buildings |
| Publication date | December 2024 |
| Coverage | U.S. residential buildings |
| Model family | 32 prototype configurations: 2 building types x 4 foundation types x 4 fuel/equipment types; simulated across 18 climate/moisture regimes |
| Simulation engine | EnergyPlus |
| Main comparison | 2021 IECC vs 2024 IECC |
| Interpretation | This is a weighted residential code-savings study, not a measured stock median dataset. |

### 4.1 National Weighted Summary

| Version | Site EUI (kBtu/ft2-yr) | Source EUI (kBtu/ft2-yr) | Energy Cost ($/residence-yr) | CO2 (tons/residence-yr) |
|---|---:|---:|---:|---:|
| 2021 IECC | 31.3 | 68.5 | 2,526 | 10.84 |
| 2024 IECC | 28.9 | 63.9 | 2,360 | 10.13 |
| Savings | 7.80% | 6.80% | 6.60% | 6.51% |

### 4.2 Climate-Zone Comparison

| Climate zone | Weight | 2021 site | 2024 site | Site savings | 2021 source | 2024 source | Source savings | Cost savings | CO2 savings |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 2.12 | 26.7 | 24.8 | 7.07% | 69.4 | 63.9 | 7.95% | 8.09% | 8.15% |
| 2 | 26.02 | 27.0 | 24.9 | 7.90% | 67.4 | 62.0 | 7.96% | 7.97% | 7.97% |
| 3 | 28.84 | 26.4 | 24.7 | 6.38% | 63.9 | 60.0 | 6.13% | 6.08% | 6.06% |
| 4 | 19.07 | 31.3 | 28.9 | 7.43% | 68.1 | 63.4 | 6.90% | 6.79% | 6.74% |
| 5 | 18.33 | 38.7 | 35.9 | 7.31% | 71.7 | 67.5 | 5.88% | 5.53% | 5.36% |
| 6 | 5.05 | 47.0 | 40.8 | 13.23% | 83.6 | 77.6 | 7.20% | 5.64% | 4.87% |
| 7 | 0.55 | 52.0 | 44.8 | 13.84% | 93.1 | 84.0 | 9.79% | 8.74% | 8.23% |
| 8 | 0.01 | 65.8 | 56.4 | 14.29% | 111.8 | 99.8 | 10.73% | 9.74% | 9.26% |
| **National** | **100.00** | **31.3** | **28.9** | **7.80%** | **68.5** | **63.9** | **6.80%** | **6.60%** | **6.51%** |

*Site EUI and Source EUI units: kBtu/ft2-yr.*

### 4.3 Building-Type Comparison

| Building type | Weight | 2021 site | 2024 site | Site savings | 2021 source | 2024 source | Source savings | Cost savings | CO2 savings |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Single-family | 82.12 | 30.9 | 28.4 | 7.94% | 67.6 | 63.0 | 6.77% | 6.54% | 6.43% |
| Multifamily Unit | 17.88 | 34.9 | 32.6 | 6.60% | 76.9 | 71.5 | 7.05% | 7.14% | 7.18% |
| **National** | **100.00** | **31.3** | **28.9** | **7.80%** | **68.5** | **63.9** | **6.80%** | **6.60%** | **6.51%** |

### 4.4 CZ6 Residential EUI in kWh/m2

| Metric | 2021 IECC | 2024 IECC | Savings |
|---|---:|---:|---:|
| Site EUI | 47.0 kBtu/ft2 (148.3 kWh/m2) | 40.8 kBtu/ft2 (128.7 kWh/m2) | 13.23% |
| Source EUI | 83.6 kBtu/ft2 (263.6 kWh/m2) | 77.6 kBtu/ft2 (244.8 kWh/m2) | 7.20% |
| Energy Cost | $3,231/yr | $3,049/yr | 5.64% |

### 4.5 Weighting Factors

| Category | Subcategory | Weight (%) |
|---|---|---:|
| **Building Type** | Single-family | 82.12 |
|  | Multifamily Unit | 17.88 |
| **Heating System** | Gas-Fired Furnace | 55.60 |
|  | Electric Furnace | 7.88 |
|  | Oil-Fired Furnace | 0.15 |
|  | Heat Pump | 36.37 |
| **Climate Zone** | CZ1 | 2.12 |
|  | CZ2 | 26.02 |
|  | CZ3 | 28.84 |
|  | CZ4 | 19.07 |
|  | CZ5 | 18.33 |
|  | CZ6 | 5.05 |
|  | CZ7 | 0.55 |
|  | CZ8 | 0.01 |

### 4.6 Practical Reading Notes

- The national result is more modest than the 90.1-2022 commercial delta: 7.80% site-EUI savings and 6.80% source-EUI savings versus 2021 IECC.
- Stronger site-EUI savings appear in colder climate zones 6 through 8, with climate zone 8 showing the highest site-EUI savings at 14.29%.
- Multifamily shows lower site-EUI savings than single-family, but slightly higher source-EUI, cost, and CO2 savings.
- CZ6 shows the largest site-EUI savings (13.23%) among regularly weighted climate zones -- this is the most relevant zone for this project's Canadian/cold-climate context.

---

## Appendix A: Cross-Reference Summary for BEM Validation

### Residential Buildings (CZ6, Cold Climate)

| Source | Standard/Year | Site EUI (kBtu/ft2) | Site EUI (kWh/m2) | Notes |
|---|---|---:|---:|---|
| IECC 2024 | 2024 IECC, CZ6 | 40.8 | 128.7 | New construction, weighted avg |
| IECC 2021 | 2021 IECC, CZ6 | 47.0 | 148.3 | New construction, weighted avg |
| IECC 2024 | National, single-family | 28.4 | 89.6 | All CZs weighted |
| IECC 2024 | National, multifamily | 32.6 | 102.8 | All CZs weighted |

### Commercial Buildings (CZ6A, Cold Climate)

| Source | Standard/Year | Site EUI (kBtu/ft2) | Site EUI (kWh/m2) | Notes |
|---|---|---:|---:|---|
| ASHRAE 90.1-2022 | CZ6A Gross | 57.2 | 180.4 | Weighted avg, all 16 prototypes |
| ASHRAE 90.1-2022 | CZ6A Net | 55.4 | 174.8 | Including on-site renewables |
| ASHRAE 90.1-2019 | CZ6A | 64.8 | 204.4 | Baseline |
| DOE 2008 | CZ6A new construction | 34.6-115.2 | 109-363 | Range across building types |

### Selected Building Types -- Multi-Source CZ6A Comparison

| Building Type | ASHRAE 90.1-2022 Gross (kWh/m2) | DOE 2008 CZ6A (kWh/m2) | NRCan Median (kWh/m2) |
|---|---:|---:|---:|
| Small Office | 81.1 | 109.1 | 430.6 |
| Mid-Rise Apartment | 112.0 | -- | N/A |
| High-Rise Apartment | 126.2 | -- | N/A |
| Standalone Retail | 123.9 | 109.8 | 444.4 |
| Primary School | 131.2 | 363.4 | 297.2 |
| Hospital | 293.3 | 486.4 | 858.3 |
| Small Hotel | 170.0 | 230.9 | 380.6 |
| Warehouse | 40.4 | 168.1 | 283.3 |

**Key Observations:**
1. ASHRAE 90.1-2022 values represent code-minimum new construction; NRCan values represent the median of all existing building stock (all ages). The large gap is expected.
2. DOE 2008 benchmarks used Standard 90.1-2004 requirements, which are significantly less stringent than 90.1-2022, explaining their higher values.
3. For CZ6 residential validation: simulation EUI values in the 128-140 kWh/m2 range align well with the 2024 IECC CZ6 reference of 128.7 kWh/m2.
4. Do not compare all four sources as if they were the same kind of number. DOE and ASHRAE/IECC are simulation-based studies; NRCan is a benchmark median sheet from survey data.

---

## Practical Use Notes for This Repo

- Use **DOE 2008** when you need the older benchmark-model archetypes, geometry scale, HVAC system types, and broad climate sensitivity for commercial buildings.
- Use **NRCan 2018** for benchmarking against Canadian medians and for checking whether simulated outputs are broadly plausible in a Canadian context.
- Use **ASHRAE 90.1-2022** for commercial code-delta expectations between recent code editions and for CZ6A EUI validation targets.
- Use **2024 IECC** for residential code-delta expectations between 2021 and 2024, especially the CZ6 reference of 128.7 kWh/m2.
- Do not compare all four sources as if they were the same kind of number. DOE and ASHRAE/IECC are simulation-based studies; NRCan is a benchmark median sheet.

## Progress Log

| Task | Status | Result |
|---|---|---|
| Inventory source PDFs | Complete | Four PDFs reviewed from `Content/Resources` |
| Extract reference tables | Complete | DOE, NRCan, ASHRAE, and IECC tables captured |
| Add kWh/m2 conversions | Complete | All tables include metric unit equivalents |
| Compile reference document | Complete | This Markdown file created for ongoing repo use |
| Merge with codex version | Complete | Adopted structure, reading guide, practical notes, and consolidated table formats |
