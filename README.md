# LMN Tool — Neighbourhood Design Interface

A web-based decision-support tool for early-stage design of **positive-energy district (PED) neighbourhoods**. Stakeholders configure urban parameters layer by layer — from spatial layout to energy, mobility, and green infrastructure — progressively building a holistic neighbourhood profile.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Design Philosophy](#design-philosophy)
- [Visual Design System](#visual-design-system)
- [User Flow](#user-flow)
- [Layer Descriptions](#layer-descriptions)
  - [Layer 0 — Entry Point](#layer-0--entry-point)
  - [Layer 1 — Neighbourhood Selection](#layer-1--neighbourhood-selection)
  - [Layer 2 — Energy](#layer-2--energy)
  - [Layer 3 — Mobility](#layer-3--mobility)
  - [Layer 4 — Green Infrastructure](#layer-4--green-infrastructure)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Data Architecture](#data-architecture)
- [Database & Simulation Coverage](#database--simulation-coverage)
- [Development History](#development-history)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [License](#license)

---

## Project Overview

The LMN Tool supports the **Simplistic Modular Holistic (SMH)** methodology for positive-energy district design. Rather than requiring detailed simulation inputs upfront, it allows architects, planners, and researchers to explore compatible neighbourhood configurations by filtering across four thematic layers.

Each layer adds a new set of systems on top of the previous, so the neighbourhood profile grows in complexity and completeness as the user progresses — from a blank canvas to a fully specified, energy-balanced urban unit.

Cross-sectoral systems covered across the layers include:

| System Domain            | Technologies                                                                  |
|--------------------------|-------------------------------------------------------------------------------|
| **Energy Supply**        | PV on Roof/Facade, PV-T, STC, Wind, Geothermal, Biomass                     |
| **Energy Demand**        | Heat Pump (COP 4), Ideal Loads (COP 3), Appliances & Equipment               |
| **Mobility**             | EV, EV Public Transport, EV Charging Stations, V2G, Bicycle, Pedestrian      |
| **Green Systems**        | Green Roofs, Vertical Greening, Linear Greenery, Green Spaces                 |
| **Urban Agriculture**    | Roof Gardens, Food Gardens                                                    |
| **Energy-Integrated GI** | PV-Green Roof Modules, Landscape PV (LPV)                                    |

---

## Design Philosophy

The tool is built around three core principles:

1. **Modularity** — Each layer is self-contained. Users can revisit and revise selections without losing context from other layers.
2. **Progressive Disclosure** — Complexity is introduced gradually. Layer 0 starts with a single intent choice; Layer 4 concludes with a fully integrated urban energy profile.
3. **Persistent Sidebar** — As the user advances through layers, a persistent sidebar accumulates all previously selected parameters, giving continuous visibility into the developing neighbourhood profile without navigating back.

---

## Visual Design System

The interface follows a **"Warm-Tech"** design language — a cool white-gray canvas (~85% of surface area) with warm gold→amber→burnt-orange-red accents (~15%) for highlights, active states, and section banners. This palette has been refined through multiple iterations to match a professional "modern scientific tool" aesthetic.

### Colour Palette

| Token                  | Value       | Role                                           |
|------------------------|-------------|------------------------------------------------|
| `--bg-primary`         | `#FAFAFA`   | Page background — clean cool near-white         |
| `--bg-secondary`       | `#F1F2F4`   | Section / sidebar / table-header background     |
| `--bg-card`            | `#FFFFFF`   | Card / panel — pure white                       |
| `--accent-gold`        | `#F5C400`   | Active tile fill, gradient start, bold highlights|
| `--accent-amber`       | `#E8860A`   | Buttons, glows, active borders, dashboard chips  |
| `--accent-burnt`       | `#C93D0A`   | Gradient end, banner bars, table-header underline|
| `--accent-teal`        | `#6BA8B8`   | Card image hover glow (glass-reflection cue)     |
| `--accent-sage`        | `#8AA88A`   | Green infrastructure / landscape icon tinting    |

### Banner Bar System

Section headers on all selection pages use **filled horizontal banner bars** with white text. Each layer has a semantically mapped banner variant:

| Banner Variant       | Visual                              | Used On                                       |
|----------------------|-------------------------------------|-----------------------------------------------|
| **Warm gradient**    | Gold → Amber → Burnt-red            | Layer 1 all labels, Layer 2 Load & Generation |
| **Dark charcoal**    | Solid `#4A4E57`                     | Layer 2 Energy Systems (hardware)             |
| **Sage → Burnt**     | Sage → Amber → Burnt-red gradient   | Layer 3 Transportation & Mobility             |
| **Burnt-red**        | Solid `#C93D0A`                     | Layer 4 Infrastructure (critical)             |
| **Sage**             | Solid `#8AA88A`                     | Layer 4 Urban Agriculture & Energy-Int. GI    |

### Typography

- **Display font:** Outfit (via Google Fonts)
- **Body font:** Inter (via Google Fonts)
- **Title treatment:** Dark bold uppercase flanked by burnt-red horizontal rules

### Interaction States

Cards follow a three-state visual hierarchy:
1. **Default** — White card with subtle border (`rgba(0,0,0,0.08)`)
2. **Hover** — Faint amber glow + lift transform + teal image glow
3. **Active** — Bold golden-yellow fill (`rgba(245,196,0,0.35)`) with amber border

---

## User Flow

The tool is navigated sequentially. Each layer has a **selection screen** (where parameters are chosen) and an **output/results screen** (where matched neighbourhoods or performance results are displayed). Breakdown pages can be accessed from the output screens for deeper analysis.

```
layer0_initial.html
        │
        │  User selects "New Neighborhood" → clicks "Get Started"
        ▼
layer1_NUs_selection.html   ← Layer 1 Selection
        │
        │  User picks Land Use, Context, Density, Layout, Envelope → "View Neighbourhoods"
        ▼
layer1_output.html          ← Layer 1 Results (matched neighbourhood cards with 3D views)
        │
        │  User selects a neighbourhood → proceeds to Layer 2
        ▼
layer2_energy_selection.html   ← Layer 2 Selection
        │
        │  User picks Load, Energy Systems, Energy Generation → "View Energy Performance"
        ▼
layer2_output_energy.html      ← Layer 2 Results (energy footprint added to profile)
        │   ├─► layer2_energy_breakdown.html  (Energy Demand Treemap — D3.js)
        │   └─► layer2_pv_breakdown.html      (PV Generation Profile — Chart.js)
        │
        │  User proceeds to Layer 3
        ▼
layer3_mobility_selection.html  ← Layer 3 Selection
        │
        │  User picks Transportation, Mobility options → "View Mobility Performance"
        ▼
layer3_ev_v2g_mobility_output.html  ← Layer 3 Results (mobility profile added to sidebar)
        │   └─► layer3_ev_breakdown.html  (EV & V2G Breakdown)
        │
        │  User proceeds to Layer 4
        ▼
layer4_green_selection.html    ← Layer 4 Selection
        │
        │  User picks Infrastructure, Urban Agriculture, Energy-Integrated GI → "View Green Performance"
        ▼
layer4_output_selection.html   ← Layer 4 Results (complete neighbourhood profile)
        │   └─► layer4_lpv_breakdown.html  (Landscape PV Profile)
        │
        ▼
   [ Complete PED Profile ]
```

> **Note:** A `3dviewer.html` is also available for viewing 3D neighbourhood models (GLB format) via Google's `<model-viewer>` component.

---

## Layer Descriptions

### Layer 0 — Entry Point

**File:** `layer0_initial.html` / `index.html`

The entry point of the tool. Users are presented with a single intent question:

> *"What do you have in mind?"*

**Options:**
- **Existing Neighbourhood** — (placeholder; currently routes only for "New")
- **New Neighbourhood** — Proceeds to Layer 1

Clicking **"Get Started"** after selecting "New Neighbourhood" navigates the user to the Layer 1 selection screen. The welcome-page label is intentionally un-bannered to maintain a clean, inviting entry experience.

---

### Layer 1 — Neighbourhood Selection

**Files:** `layer1_NUs_selection.html` → `layer1_output.html`

The foundation layer. The user defines the **spatial and typological character** of the neighbourhood by selecting from five parameter categories:

| Parameter    | Options                                                                     |
|--------------|-----------------------------------------------------------------------------|
| **Land Use** | Residential, Commercial, Mixed-Use, Industrial                              |
| **Context**  | Urban, Suburban, Suburban Edge, Rural                                       |
| **Density**  | High, Medium, Low                                                           |
| **Layout**   | Grid, Curvilinear, Superblock                                               |
| **Envelope** | Standard (NECB-2017), Standard (ASHRAE), High-Performance (NECB), High-Performance (ASHRAE) |

All five labels display **warm gradient banner bars** (gold→amber→burnt-red).

**How it works:**  
Selections are stored in `sessionStorage` and passed to `app.js`, which filters the neighbourhood database (`data.js`) to return only the configurations matching the chosen combination. Matched neighbourhoods are displayed as interactive cards on the output screen, each showing:
- A 3D neighbourhood image (clickable — opens the `3dviewer.html` with the corresponding GLB model)
- Key physical properties (area, number of buildings, building mix, etc.)
- A building composition breakdown with individual building type images

The user selects a neighbourhood from the results to carry it forward into Layer 2.

**Dynamic filtering:** Parameters that would result in zero matching neighbourhoods are automatically disabled (greyed out) as the user makes selections, preventing dead-end combinations.

> **Envelope options:** Four envelope choices are available — two standard code-baseline options (NECB-2017 and ASHRAE) and two high-performance variants. Selecting *High-Performance* replaces the baseline EEM level with the EEM1 (envelope-only efficiency measure) scenario, reflecting improved insulation and fenestration performance.

---

### Layer 2 — Energy

**Files:** `layer2_energy_selection.html` → `layer2_output_energy.html`

**Breakdown Pages:** `layer2_energy_breakdown.html`, `layer2_pv_breakdown.html`

The energy layer overlays **demand-side systems** and **generation technologies** onto the selected neighbourhood. The sidebar from this point forward persistently tracks the Layer 1 neighbourhood selection.

**Selection parameters:**

| Category             | Banner Style   | Options                                                                           |
|----------------------|----------------|-----------------------------------------------------------------------------------|
| **Load**             | Warm gradient  | Thermal Load                                                                      |
| **Energy Systems**   | Dark charcoal  | Heat Pump (COP 4), Ideal Loads (COP 3), Appliances & Equipment, Other (TBA)      |
| **Energy Generation**| Warm gradient  | PV on Roof, PV on Facade, PV-T on Roof, PV-T on Facade, STC on Roof, STC on Facade, Biomass, Wind, Geothermal, Other (TBA) |

**Output:**  
The results page displays the neighbourhood's energy footprint — combining demand and generation profiles. From the sidebar or output table, users can drill into:

- **Energy Demand Treemap** (`layer2_energy_breakdown.html`) — Interactive treemap rendered with **D3.js** visualising the breakdown of thermal, electrical, and equipment loads sized proportionally to demand. Includes Energy Status indicators (Positive/Neutral/Negative) and EUI scale.
- **PV Generation Profile** (`layer2_pv_breakdown.html`) — Dual-layout PV analysis page:
  - **New layout** (for RC-R, RC-D, RC-T, RC-MR2, RC-MR3 configurations): Stats bar with KPIs (PV Surface, Efficiency, Mounting, GCR, Generation, RoP) + wall and roof rows showing hourly charts (**Chart.js** canvas), incident radiation images, and direct sun hours images.
  - **Legacy layout** (for RC-HR2): Two-column layout with pink horizontal bars for input parameters and static chart images.

**Energy data coverage:** All five EEM levels (DEFAULT, EEM1–EEM4) plus the IAL (Initial Loads with Air-conditioning) baseline scenario are stored and correctly rendered for all 35 neighbourhood archetypes across both NECB-2017 and ASHRAE code standards.

---

### Layer 3 — Mobility

**Files:** `layer3_mobility_selection.html` → `layer3_ev_v2g_mobility_output.html`

**Breakdown Page:** `layer3_ev_breakdown.html`

The mobility layer adds **electric mobility infrastructure** and **active transport design** to the neighbourhood profile. The sidebar now shows both Layer 1 (spatial) and Layer 2 (energy) selections.

**Selection parameters:**

| Category           | Banner Style         | Options                                                     |
|--------------------|----------------------|-------------------------------------------------------------|
| **Transportation** | Sage→Amber→Burnt     | EV, EV Public Transport, EV Charging Stations, V2G Stations |
| **Mobility**       | Sage→Amber→Burnt     | Bicycle Infrastructure, Pedestrian-Oriented Design          |

**Output:**  
Results confirm which mobility systems have been integrated. The sidebar aggregates all selections from Layers 1–3.

From the sidebar or output, users can access:

- **EV & V2G Breakdown** (`layer3_ev_breakdown.html`) — Detailed breakdown of electric vehicle demand, V2G grid interaction capacity, and charging station sizing, driven by `ev-v2g-breakdown.js` and CSV reference data from `Templates/NUS_EV.csv`. Graceful null-safety is implemented for neighbourhoods where EV data has not yet been computed.

---

### Layer 4 — Green Infrastructure

**Files:** `layer4_green_selection.html` → `layer4_output_selection.html`

**Breakdown Page:** `layer4_lpv_breakdown.html`

The final layer integrates **green systems** and **biophilic/agricultural elements** into the neighbourhood. This completes the holistic PED profile. The sidebar now reflects the full stack of selections from Layers 1 through 4.

**Selection parameters:**

| Category                  | Banner Style | Options                                                          |
|---------------------------|--------------|------------------------------------------------------------------|
| **Infrastructure**        | Burnt-red    | Green Roofs, Vertical Greening Systems, Linear Greenery, Green Spaces |
| **Urban Agriculture**     | Sage         | Roof Gardens, Food Gardens                                       |
| **Energy-Integrated GI**  | Sage         | PV-Green Roof Integrated Modules, Landscape PV (LPV)            |

**Output:**  
The final output page presents the complete neighbourhood profile with all four layers aggregated in the persistent sidebar. Users can explore:

- **Landscape PV Profile** (`layer4_lpv_breakdown.html`) — LPV (Land-integrated Photovoltaics) performance analysis with three configurable parameters: Application Location (Parking, Walking Lanes, Bus Stops), Height of Structure (Pedestrian, Vehicle, Service), and Transparency (25%, 50%, 75%). Displays Land Use Efficiency and UHI impact metrics with heatmap and cross-section visualisations, powered by `lpv.js`.

---

## Technology Stack

The tool is a **pure client-side web application** — no build tools, bundlers, or server-side code required.

### Core

| Technology        | Version / Source               | Purpose                                            |
|-------------------|--------------------------------|----------------------------------------------------|
| **HTML5**         | —                              | Semantic page structure                            |
| **CSS3**          | Vanilla CSS with CSS Variables | Full design system with custom properties (tokens)  |
| **JavaScript**    | ES6+ (vanilla, no framework)   | All application logic, state, and DOM manipulation |

### External Libraries

| Library                   | Source                                                                    | Purpose                                             |
|---------------------------|---------------------------------------------------------------------------|-----------------------------------------------------|
| **Google Fonts**          | `fonts.googleapis.com` (Inter, Outfit)                                   | Display and body typography                         |
| **D3.js v7**              | `d3js.org/d3.v7.min.js`                                                 | Energy demand treemap visualisation                 |
| **Chart.js**              | `cdn.jsdelivr.net/npm/chart.js`                                         | PV generation hourly charts (bar/line)              |
| **Google Model Viewer**   | `ajax.googleapis.com/ajax/libs/model-viewer/4.2.0/model-viewer.min.js`  | Interactive 3D GLB model rendering                  |

### Data Formats

| Format   | Files                                                                                  | Purpose                                       |
|----------|----------------------------------------------------------------------------------------|-----------------------------------------------|
| **JS**   | `data.js`, `heatmap-data.js`                                                          | Neighbourhood database, heatmap definitions    |
| **CSV**  | `ASHRAE.csv`, `CAN_MTL.csv`, `NUS_EV.csv`, `NUs_LPV.csv`, `PV_generation.csv`, `Welcome_Page_Parameters.csv` | Scenario parameters and reference data |
| **GLB**  | `Content/Glb_Models/*.glb`                                                            | 3D neighbourhood models                       |

### State Management

- **`sessionStorage`** — Persists user selections across page transitions within a session
- **No external state library** — All state flows through sessionStorage keys set on selection pages and read on output pages

---

## Project Structure

```text
LMN-tool/
│
├── index.html                           ─ Alias for Layer 0 entry (GitHub Pages support)
├── layer0_initial.html                  ─ Layer 0: Entry Point
│
├── layer1_NUs_selection.html            ─ Layer 1: Neighbourhood Selection
├── layer1_output.html                   ─ Layer 1: Matched Neighbourhood Results
│
├── layer2_energy_selection.html         ─ Layer 2: Energy Selection
├── layer2_output_energy.html            ─ Layer 2: Energy Performance Results
├── layer2_energy_breakdown.html         ─ Layer 2: Energy Demand Treemap (D3.js)
├── layer2_pv_breakdown.html             ─ Layer 2: PV Generation Profile (Chart.js)
│
├── layer3_mobility_selection.html       ─ Layer 3: Mobility Selection
├── layer3_ev_v2g_mobility_output.html   ─ Layer 3: Mobility Performance Results
├── layer3_ev_breakdown.html             ─ Layer 3: EV & V2G Breakdown
│
├── layer4_green_selection.html          ─ Layer 4: Green Infrastructure Selection
├── layer4_output_selection.html         ─ Layer 4: Full Profile Results
├── layer4_lpv_breakdown.html            ─ Layer 4: Landscape PV Profile
│
├── 3dviewer.html                        ─ Standalone 3D Neighbourhood Viewer (model-viewer)
├── GraphicalAbstract.md                 ─ Image generation prompt for journal graphical abstract
│
├── css/
│   ├── styles.css                       ─ Main design system (~2700 lines, all tokens + components)
│   ├── styles.backup.css                ─ Original purple palette backup
│   ├── styles.v1.backup.css             ─ v1 warm-cream palette backup
│   └── styles.v2.backup.css             ─ v2 pre-banner-bar palette backup
│
├── js/
│   ├── data.js                          ─ Neighbourhood database (~630 KB) — 35 NUs, all EEM levels + IAL
│   ├── app.js                           ─ Layer 1 filtering, dynamic disabling, output rendering
│   ├── sidebar.js                       ─ Persistent multi-layer sidebar construction
│   ├── energy-selection.js              ─ Layer 2 selection state management
│   ├── output_energy.js                 ─ Layer 2 output rendering
│   ├── energy.js                        ─ Energy demand treemap rendering (D3.js)
│   ├── pv.js                            ─ PV generation profile (dual layout: new + legacy)
│   ├── heatmap-data.js                  ─ PV heatmap data definitions (wall/roof irradiation)
│   ├── mobility-selection.js            ─ Layer 3 selection state management
│   ├── ev.js                            ─ EV demand calculations
│   ├── ev-v2g-breakdown.js              ─ EV & V2G breakdown rendering (with null-safety)
│   ├── green-selection.js               ─ Layer 4 selection state management
│   ├── output_green.js                  ─ Layer 4 output rendering
│   └── lpv.js                           ─ Landscape PV analysis and charts
│
├── Content/
│   ├── Glb_Models/                      ─ 3D GLB models for model-viewer (RC1, RC2, etc.)
│   ├── IFC_Models/                      ─ IFC format models (BIM interchange)
│   ├── Images_ProjectType/              ─ Layer 0 entry icons (New / Existing Neighbourhood)
│   ├── Images_Usage_Parameters/         ─ Land use icons (Residential, Commercial, etc.)
│   ├── Images_Context_Parameters/       ─ Context icons (Urban, Suburban, Suburban Edge, Rural)
│   ├── Images_Density_Parameters/       ─ Density icons (High, Medium, Low)
│   ├── Images_Layout_Parameters/        ─ Layout icons (Grid, Curvilinear, Superblock)
│   ├── Images_Envelope_Parameters/      ─ Envelope icons
│   ├── Images_Concept/                  ─ Neighbourhood concept visualisations (with previous/)
│   ├── Images_Neighbourhoods/           ─ 3D neighbourhood renders
│   ├── Images_Buildings/                ─ Building typology images (19+ types incl. datacenter, supermarket)
│   ├── Images_EnergyStatus/             ─ Energy status indicators (Positive, Neutral, Negative)
│   ├── Images_Layer2_ThermalLoad/       ─ Thermal load icon (Layer 2)
│   ├── Images_Layer2_EnergyDemand/      ─ Energy systems icons (Layer 2)
│   ├── Images_Layer2_EnergyGeneration/  ─ Generation technology icons (Layer 2)
│   ├── Images_Layer3_Transportation/    ─ Transportation icons (Layer 3)
│   ├── Images_Layer3_Mobility/          ─ Active mobility icons (Layer 3)
│   ├── Images_Layer4_Infrastructure/    ─ Green infrastructure icons (Layer 4)
│   ├── Images_Layer4_UrbanAgriculture/  ─ Urban agriculture icons (Layer 4)
│   ├── Images_Layer4_EnergyIntegratedGI/ ─ Energy-integrated GI icons (Layer 4)
│   ├── Images_PVProfile/               ─ Solar irradiation and generation charts
│   ├── Images_PVpage/                   ─ PV page-specific visualisation assets
│   ├── Images_LPVProfile/              ─ LPV heatmaps and cross-sections
│   └── Images_EVProfile/               ─ EV impact and charging state charts
│
├── Templates/
│   ├── ASHRAE.csv                       ─ Energy data: all 35 NUs × 5 EEM levels + IAL (ASHRAE code)
│   ├── CAN_MTL.csv                      ─ Energy data: all 35 NUs × 5 EEM levels + IAL (NECB-2017 / CAN_MTL)
│   ├── PV_generation.csv                ─ PV generation scenario parameters (EEM0–EEM4)
│   ├── NUS_EV.csv                       ─ EV scenario parameter data
│   ├── NUs_LPV.csv                      ─ LPV scenario parameter data
│   ├── Welcome_Page_Parameters.csv      ─ Parameter card definitions (all 4 envelopes)
│   ├── Interface_Connections.csv        ─ Navigation flow — 9 NUs × 4 envelope options (36 rows)
│   ├── Content_Layer3_Transportation/   ─ EV calculation reference scripts
│   ├── scripts/                         ─ Data processing scripts
│   │   ├── convert_master_csv.py        ─ Converts master CSV → data.js format
│   │   └── patch_data_js.py             ─ Patches specific data blocks in data.js
│   ├── new/                             ─ Master simulation CSVs (source of truth)
│   │   ├── LMN_full_NU_master.csv       ─ Full 35-NU simulation data (all scenarios)
│   │   ├── IAL_full_NU_master.csv       ─ IAL scenario data for all non-RC neighbourhoods
│   │   └── Full_NUs_Archetypes.csv      ─ Archetype metadata for all 35 NUs
│   └── archive/                         ─ Superseded files kept for reference
│       ├── ASHRAE.csv                   ─ Pre-restructure ASHRAE data (9 NUs only)
│       ├── CAN_MTL.csv                  ─ Pre-restructure CAN_MTL data (9 NUs only)
│       ├── LMN_Energy_Database_archived.csv ─ Legacy energy database (archived)
│       └── LMN_RC_NU_20260531_master.csv    ─ May 2026 simulation run for RC archetypes
│
├── Mockup/                              ─ Design mockups and reference images
│   └── References/                      ─ Design reference images and icons
│
├── previous/                            ─ Previous version screenshots and palette references
│
├── docs/                                ─ Research references and page-level documentation
│   ├── 0_implementation_plan.md         ─ Master implementation plan
│   ├── 01_welcome_page.md              ─ Detailed Welcome Page documentation
│   ├── 02_output_page.md               ─ Detailed Output Page documentation
│   ├── 03_energy_selection_page.md      ─ Detailed Energy Selection documentation
│   ├── 04_energy_breakdown_page.md      ─ Detailed Energy Breakdown documentation
│   ├── 05_pv_profile_page.md           ─ Detailed PV Profile documentation
│   ├── 06_lpv_profile_page.md          ─ Detailed LPV Profile documentation
│   ├── 07_ev_profile_page.md           ─ Detailed EV Profile documentation
│   ├── 08_filter_treemap_selection.md   ─ Dynamic treemap filtering logic
│   ├── project_progress.md             ─ Project progress timeline
│   └── sidebar_layout_implementation_plan.md ─ Persistent sidebar design specification
│
├── docs_html/                           ─ HTML documentation pages
│
└── docs_implementation/                 ─ Implementation plans and completed change logs
    ├── DONE_color palette_implementation_plan.md  ─ v1→v2 cool-white base palette refinement
    ├── DONE_colorPalettev2.md                     ─ v2 banner bars + sage/teal accents
    ├── DONE_color_palette_task.md                 ─ Palette task tracking
    ├── PV_page_layout_update.md                   ─ PV page dual-layout implementation
    ├── 04_LPV_page_implementation.md              ─ LPV page implementation plan
    ├── databaseUpdate_RC/                         ─ RC neighbourhood database restructure records
    │   ├── implementation_plan.md
    │   ├── task.md
    │   ├── walkthrough.md                         ─ Envelope 4-option restructure walkthrough
    │   └── walkthrough_simulation_update.md       ─ May 2026 simulation sync walkthrough
    └── databaseUpdate_Full/                       ─ Full 35-NU expansion records
        ├── implementation_plan.md
        ├── task.md
        └── walkthrough.md                         ─ 9→35 NU expansion walkthrough
```

---

## Data Architecture

### Neighbourhood Database (`js/data.js`)

The central data file (~630 KB) contains:
- **Neighbourhood configurations** — 35 configurations (RS-*, MU-*, CC-*, IC-*, RC-*) store land use, context, density, layout, envelope options, building composition, area, and physical properties.
- **Energy data** — Per-neighbourhood energy demand breakdowns by EEM level (DEFAULT, EEM1–EEM4) and IAL baseline, for both NECB-2017 and ASHRAE code standards, with colour mappings.
- **PV generation data** — Rooftop PV sizing parameters per NU per EEM level.
- **Building types** — 19+ building typologies with images and metadata (including data centers, supermarkets, warehouses, outpatient health care).
- **Energy status thresholds** — Positive / Neutral / Negative energy balance classification.

### Envelope Model

The tool supports four distinct envelope configurations:

| Key                    | Description                                           | EEM Mapping |
|------------------------|-------------------------------------------------------|-------------|
| `necb-2017`            | Standard construction, NECB-2017 code baseline        | DEFAULT     |
| `ashrae`               | Standard construction, ASHRAE code baseline           | DEFAULT     |
| `high-performance-necb`| High-performance envelope, NECB-2017 standard         | EEM1        |
| `high-performance-ashrae` | High-performance envelope, ASHRAE standard         | EEM1        |

EEM1 represents the envelope-only efficiency measure (improved insulation + fenestration). Higher EEM levels (EEM2–EEM4) represent progressively deeper system-level upgrades applied independently of the envelope choice.

### CSV Reference Data (`Templates/`)

| File                    | Purpose                                                                       |
|-------------------------|-------------------------------------------------------------------------------|
| `CAN_MTL.csv`           | Pivoted energy data for all 35 NUs, NECB-2017 code — EEM0–EEM4 + IAL rows   |
| `ASHRAE.csv`            | Pivoted energy data for all 35 NUs, ASHRAE code — EEM0–EEM4 + IAL rows      |
| `PV_generation.csv`     | PV generation values per NU per EEM level (synced with May 2026 simulation)  |
| `Welcome_Page_Parameters.csv` | Parameter card definitions for Layer 1 (all 4 envelopes listed)        |
| `Interface_Connections.csv`   | Page navigation flow — 9 NUs × 4 envelope options (36 rows)            |
| `NUs_LPV.csv`           | LPV (Landscape PV) scenario parameters                                        |
| `NUS_EV.csv`            | EV demand, V2G, and charging station parameters                               |

### State Flow

```
Layer 0 → sessionStorage['projectType']
Layer 1 → sessionStorage['selectedUsage', 'selectedContext', 'selectedDensity', 'selectedLayout', 'selectedEnvelope', 'selectedNeighbourhood']
Layer 2 → sessionStorage['selectedLoad', 'selectedEnergySystems', 'selectedEnergyGeneration']
Layer 3 → sessionStorage['selectedTransportation', 'selectedMobility']
Layer 4 → sessionStorage['selectedInfrastructure', 'selectedUrbanAgriculture', 'selectedEnergyIntegratedGI']
```

Each output page reads upstream selections from `sessionStorage` to render the persistent sidebar and filter results.

---

## Database & Simulation Coverage

### Neighbourhood Archetypes

The tool covers **35 neighbourhood archetypes** across five typological families:

| Family         | Code Prefix | Count | Description                                    |
|----------------|-------------|-------|------------------------------------------------|
| Residential    | `RS-*`      | 5     | Detached, semi-detached, townhouse, apartment  |
| Mixed-Use      | `MU-*`      | 9     | Commercial–residential combinations            |
| Commercial/Civic | `CC-*`    | 9     | Retail, office, education, food service        |
| Industrial     | `IC-*`      | 2     | Data centres (large/edge)                      |
| Residential Compact | `RC-*` | 10   | The original compact residential study set     |

### EEM Scenario Coverage

Each archetype is simulated across **six scenario levels**:

| Level     | Description                                                        |
|-----------|--------------------------------------------------------------------|
| `IAL`     | Initial Loads (air-conditioning reference baseline — no EEMs)     |
| `DEFAULT` | Code-compliant baseline (NECB-2017 or ASHRAE)                     |
| `EEM1`    | Envelope improvement (high-performance insulation + glazing)       |
| `EEM2`    | HVAC upgrade (high-efficiency systems)                             |
| `EEM3`    | DHW upgrade (heat pump water heaters, solar thermal)              |
| `EEM4`    | Lighting & appliance upgrade (LED + efficient equipment)           |

### PV Generation Data

PV generation values are derived from rooftop sizing calculations per archetype and synced with the **May 2026 simulation run** (`LMN_RC_NU_20260531_master.csv`). RC archetypes (RC-D, RC-T, RC-ML, RC-MR1) received updated EEM1–EEM4 PV generation values from this run.

### Data Pipeline

```
Templates/new/LMN_full_NU_master.csv        ← Full simulation output (master source)
Templates/new/IAL_full_NU_master.csv        ← IAL scenario output for all non-RC NUs
Templates/new/Full_NUs_Archetypes.csv       ← Archetype metadata
        │
        ▼ (Templates/scripts/convert_master_csv.py)
        │
Templates/CAN_MTL.csv                       ← Pivoted NECB-2017 energy data
Templates/ASHRAE.csv                        ← Pivoted ASHRAE energy data
Templates/PV_generation.csv                 ← PV generation parameters
        │
        ▼ (Manual sync / patch_data_js.py)
        │
js/data.js                                  ← Frontend database (served directly in browser)
```

---

## Development History

The following major development milestones have been completed in sequence:

### Phase 1 — Core Interface & Layer Architecture
- Built the four-layer sequential interface (Layers 0–4) with selection and output screens for each layer.
- Implemented the persistent sidebar that accumulates all selections across layers.
- Set up `sessionStorage`-based state management for cross-page persistence.
- Integrated 3D model viewer (`model-viewer`) for interactive neighbourhood GLB rendering.

### Phase 2 — Energy & PV Pages
- Implemented the **D3.js energy demand treemap** (`layer2_energy_breakdown.html`) with dynamic sizing by energy category.
- Built the **dual-layout PV generation profile** (`layer2_pv_breakdown.html`):
  - *New layout* for RC-R, RC-D, RC-T, RC-MR2, RC-MR3 — stats bar KPIs + hourly Chart.js charts + incident radiation images.
  - *Legacy layout* for RC-HR2 — two-column format with static chart images.

### Phase 3 — Design System Refinement
- Migrated from a purple accent palette → warm-cream palette → final **"Warm-Tech"** palette (gold/amber/burnt-red on cool white).
- Introduced the **banner bar system** with per-section colour semantics (warm gradient, dark charcoal, sage-to-burnt, burnt-red, sage).
- Standardised typography to Outfit (display) + Inter (body) via Google Fonts.
- Added three-state card interaction (default / hover / active) across all selection layers.

### Phase 4 — RC Database Restructure & Envelope Expansion
- Migrated from a monolithic `LMN_Energy_Database.csv` to **pivoted per-standard CSVs** (`CAN_MTL.csv`, `ASHRAE.csv`) — one row per NU per EEM level.
- Added a **fourth envelope option** (`High-Performance ASHRAE`) alongside the existing three, expanding `Interface_Connections.csv` from 9 to 36 rows.
- Refactored `data.js` to store four independent envelope energy datasets (`necb-2017`, `ashrae`, `high-performance-necb`, `high-performance-ashrae`) and removed legacy dynamic aliasing.
- Updated `layer1_NUs_selection.html` to display all four envelope cards.
- Cleaned up `PV_generation.csv` — removed orphaned `CAN_CLG` rows, renamed column headers, restored correct IAL PV values.

### Phase 5 — Simulation Data Update (May 2026)
- Synced `CAN_MTL.csv` and `ASHRAE.csv` EEM1–EEM4 PV generation values for `RC-D`, `RC-T`, `RC-ML`, and `RC-MR1` from the new `LMN_RC_NU_20260531_master.csv` simulation run.
- Updated `RC-HR2` DEFAULT EUI (155.0 → 154.9) and minor rounding corrections for `RC-T`.
- Synced `PV_generation.csv` and `js/data.js` (`PV_GENERATION_DATA` + `ENVELOPE_ENERGY_DATA`) with new simulation values.
- Committed and pushed all updates to the `main` branch on GitHub.

### Phase 6 — Full 35-NU Database Expansion
- Expanded the neighbourhood database from **9 RC archetypes** to **all 35 neighbourhood types** (RS-*, MU-*, CC-*, IC-*, RC-*) using `LMN_full_NU_master.csv` and `Full_NUs_Archetypes.csv`.
- Wrote `Templates/scripts/convert_master_csv.py` to automate extraction of 16 binary-flag scenarios into the 5-level EEM structure used by the UI.
- Fixed building name parsing in the conversion script — added splitting on both `+` and `·` (middle dot) separators and stripped multipliers and parentheticals, resolving missing building infographics.
- Added mappings in `BUILDING_IMAGES` for new typologies: Outpatient Health Care, Supermarket, Warehouses, and all Data Center size/ITE variants.
- Added the missing **Suburban Edge** context card to `layer1_NUs_selection.html` and a matching `suburban-edge.png` icon, enabling discovery of Industrial and Commercial archetypes on suburban edges.
- Applied null-safety guards to `ev-v2g-breakdown.js` and `pv.js` to gracefully handle neighbourhoods without yet-computed EV or heatmap data.

### Phase 7 — IAL Scenario Population for Non-RC Neighbourhoods
- Populated IAL (Initial Loads with Air-conditioning) scenario rows in both `CAN_MTL.csv` and `ASHRAE.csv` for all **26 non-RC archetypes** (RS-*, MU-*, CC-*, IC-*) using `IAL_full_NU_master.csv`.
- Confirmed complete IAL coverage — all 35 NUs now have a full 6-row scenario set (IAL + DEFAULT + EEM1–EEM4) in both climate-standard CSV files.

---

## Getting Started

### Prerequisites

No build tools or server required. The tool runs entirely in a browser from local files. For the 3D viewer, a local HTTP server is recommended (CORS restrictions may block GLB loading from `file://`).

### Running the Tool

1. **Clone the repository:**
   ```bash
   git clone https://github.com/orcunkoraliseri/LMN-tool.git
   cd LMN-tool
   ```

2. **Start a local server** (recommended):
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000/layer0_initial.html` in any modern browser.

   Alternatively, open `layer0_initial.html` (or `index.html`) directly in a browser — most features work without a server, but the 3D viewer requires HTTP serving.

3. **Select "New Neighbourhood"** and click **"Get Started"** to begin.

4. **Work through each layer** sequentially:
   - **Layer 1** → Choose Land Use, Context, Density, Layout, Envelope → View matched neighbourhoods → Select one
   - **Layer 2** → Choose Load, Energy Systems, Generation technologies → View energy performance → Explore breakdowns (Treemap, PV Profile)
   - **Layer 3** → Choose Transportation and Mobility options → View mobility performance → Explore EV/V2G breakdown
   - **Layer 4** → Choose Green Infrastructure, Urban Agriculture, Energy-Integrated GI → View final profile → Explore LPV breakdown

5. **Sidebar** — The left sidebar accumulates all your selections as you advance, giving a live summary of the neighbourhood profile being built.

6. **3D Viewer** — Click on neighbourhood images in the Layer 1 output to launch the interactive 3D viewer with orbit controls and auto-rotation.

---

## Documentation

Detailed documentation for each page and subsystem is available in the `docs/` directory:

| Document | Description |
|----------|-------------|
| [Implementation Plan](docs/0_implementation_plan.md) | Master project architecture and navigation flow |
| [Welcome Page](docs/01_welcome_page.md) | Layer 0 parameter selection interface |
| [Output Page](docs/02_output_page.md) | Layer 1 neighbourhood results table |
| [Energy Selection](docs/03_energy_selection_page.md) | Layer 2 energy parameter selection |
| [Energy Breakdown](docs/04_energy_breakdown_page.md) | D3.js treemap visualisation |
| [PV Profile](docs/05_pv_profile_page.md) | PV generation analysis |
| [LPV Profile](docs/06_lpv_profile_page.md) | Landscape PV profile |
| [EV Profile](docs/07_ev_profile_page.md) | Electric vehicle integration |
| [Sidebar Layout](docs/sidebar_layout_implementation_plan.md) | Persistent sidebar design |
| [Graphical Abstract](GraphicalAbstract.md) | Journal figure generation prompt |

Implementation change logs are in `docs_implementation/`:

| Document | Description |
|----------|-------------|
| [RC Database Restructure](docs_implementation/databaseUpdate_RC/walkthrough.md) | Envelope 4-option restructure + CSV pivoting |
| [Simulation Sync (May 2026)](docs_implementation/databaseUpdate_RC/walkthrough_simulation_update.md) | Updated RC PV generation values |
| [35-NU Expansion](docs_implementation/databaseUpdate_Full/walkthrough.md) | 9→35 neighbourhood database expansion |

---

## License

This project is part of ongoing academic research. Contact the research group for licensing information.
