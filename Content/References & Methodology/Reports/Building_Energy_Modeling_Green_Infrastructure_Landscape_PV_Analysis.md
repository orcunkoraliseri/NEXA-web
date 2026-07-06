# Layer 4: Green Infrastructure and Landscape PV (LPV) Report

This report provides a detailed technical breakdown of the parameters, configurations, calculations, and modeling limitations under **Layer 4: Green Infrastructure & Landscape PV (LPV)** within the LMN Neighbourhood Design Tool.

---

## 1. Core Objectives
Layer 4 enables stakeholders to integrate urban greening, local agricultural systems, and energy-integrated landscape photovotaics (LPV) at the neighbourhood scale. It balances local solar energy generation against urban microclimate improvements and pedestrian shading comfort.

---

## 2. Green Infrastructure and Urban Agriculture Configurations
The tool allows selecting and overlaying three categories of green elements:

### 2.1 Greening Infrastructure
* **Green Roofs**: Extensive or intensive vegetative roof coverings.
* **Vertical Greening Systems**: Green walls or facades providing vertical insulation and shading.
* **Linear Greenery**: Continuous vegetative borders along pedestrian pathways.
* **Green Spaces**: Neighbourhood parks and grassed areas.

### 2.2 Urban Agriculture
* **Roof Gardens**: Vegetative systems optimized for localized rooftop agriculture.
* **Food Gardens**: Community plots and agricultural areas at ground level.

### 2.3 Energy-Integrated GI
* **PV-Green Roofs Integrated Modules**: Co-located solar panel arrays and vegetative roof layers, leveraging transpirative cooling to enhance PV efficiency.
* **Landscape PV (LPV)**: Shading structures over walking lanes, parking spaces, and bus stops.

---

## 3. Landscape PV (LPV) Sizing and Generation Calculations
LPV sizing is based on standardized block allocations. The following parameters and values are uniform across all Neighbourhood Units (NUs) in `NUs_LPV.csv`:

### 3.1 Core Sizing Parameters
* **Base Block Land Area**: 21,717 $m^2$ (~5 acres) for all neighbourhood configurations.
* **Land Allocation**: 20% of block land area is allocated to LPV structures (equivalent to 4,343.4 $m^2$ or 4,046 $m^2$ in the simplified template).
* **Usable Area (Aperture)**: 10% of total block area is covered by active solar cells (equivalent to 2,171.7 $m^2$ or 2,023 $m^2$ in the simplified template).
* **Module Capacity**: 400W panels.
* **Installed Capacity**: 475 kWp.
* **Annual Energy Generation**: 608 MWh/year.
* **Land Use Efficiency**: 185 kWh/$m^2$/year (Total annual generation divided by total land area covered).

### 3.2 Visual Clearances & Height Parameters
Clearance levels can be adjusted based on the functional location:
* **Pedestrian**: 2.5 meters.
* **Vehicle**: 3.0 meters.
* **Service**: 4.5+ meters.

---

## 4. Urban Heat Island (UHI) Mitigation & Pedestrian Comfort
* **Surface Temperature Reduction**: LPV structures act as a shade canopy, reducing ground-level surface temperatures by up to -14°C (25°F) under peak solar conditions.
* **Transparency Trade-offs**: Panel transparency can be configured to 25%, 50%, or 75%.
  * **Higher transparency**: Enhances visual comfort, allows more natural ambient light to reach pedestrian paths, and supports vegetation growth underneath.
  * **Lower transparency**: Restricts light transmission but maximizes active solar cell area, thereby achieving the standard 608 MWh/year energy generation target.

---

## 5. Known Limitations
* **Static Generation Calculations**: LPV energy output is modeled as a static 608 MWh/year for all NUs, neglecting differences in local microclimatic conditions, solar shading from surrounding buildings, and spatial structural configurations.
* **Uniform Temperature Reduction**: The -14°C temperature drop is a static benchmark value rather than a dynamically simulated microclimatic metric accounting for wind patterns or local albedo.
* **Qualitative Non-Energy GI**: The benefits of vegetative infrastructure (green roofs, vertical greening) are described qualitatively. They lack active quantitative calculations for local cooling, carbon capture, or stormwater runoff mitigation.
* **Fixed Block Geometries**: Sizing relies on a fixed block footprint (21,717 $m^2$), which does not capture varying real-world block configurations and boundary dimensions.
