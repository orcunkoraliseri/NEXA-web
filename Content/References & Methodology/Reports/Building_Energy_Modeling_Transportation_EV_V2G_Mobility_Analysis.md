# Layer 3: Transportation, EV, and V2G Mobility Report

This report provides a detailed technical breakdown of the parameters, calculations, household configurations, and modeling limitations under **Layer 3: Mobility** within the LMN Neighbourhood Design Tool.

---

## 1. Core Objectives
Layer 3 integrates electric vehicle (EV) charging demands and Vehicle-to-Grid (V2G) bi-directional discharge contribution profiles at the neighbourhood scale. It quantifies the net energy balance shift and grid stress levels under different vehicle electrification scenarios.

---

## 2. Authoritative Sizing Parameters & Sizing Formulas
Daily charging loads and discharge contributions are calculated using the following parameters and formulas from the tool's core logic:

### 2.1 Core Assumptions
* **EV Penetration Rate**: 1.5 EVs per household.
* **Daily Energy Demand (200 km Range)**: 15.0 kWh per EV.
* **Charging Efficiency ($\eta_{\text{charging}}$)**: 90% (0.90).
* **Battery Storage Efficiency ($\eta_{\text{battery}}$)**: 90% (0.90).
* **V2G Participation Rate ($p_{\text{v2g}}$)**: 50% (0.50) of the EV fleet.
* **V2G Daily Discharge ($E_{\text{v2g\_per\_day}}$)**: 10.0 kWh per participating vehicle.

### 2.2 Mathematical Formulas
1. **Total EV Energy Demand ($E_{\text{EV\_total}}$)**:
   $$E_{\text{EV\_total}} = N_{\text{households}} \times N_{\text{EV/household}} \times \frac{E_{\text{EV\_demand}}}{\eta_{\text{charging}}}$$
   $$E_{\text{EV\_total}} = N_{\text{households}} \times 1.5 \times \frac{15.0 \text{ kWh}}{0.90} = N_{\text{households}} \times 25.0 \text{ kWh/day}$$

2. **Storage Round-Trip Loss ($E_{\text{storage\_loss}}$)**:
   Assumes 50% of the daily charging demand passes through stationary battery storage systems:
   $$E_{\text{storage\_loss}} = \left(E_{\text{EV\_total}} \times 0.5\right) \times (1 - \eta_{\text{battery}})$$
   $$E_{\text{storage\_loss}} = \left(E_{\text{EV\_total}} \times 0.5\right) \times (1 - 0.90) = E_{\text{EV\_total}} \times 0.05 = N_{\text{households}} \times 1.25 \text{ kWh/day}$$

3. **EV1 Scenario (Charging-Only)**:
   * **Total EV1 Load ($E_{\text{total\_EV1}}$)**:
     $$E_{\text{total\_EV1}} = E_{\text{EV\_total}} + E_{\text{storage\_loss}} = N_{\text{households}} \times 26.25 \text{ kWh/day}$$
   * **Net Energy Balance (EV1)**:
     $$E_{\text{balance\_EV1}} = E_{\text{balance\_base}} - E_{\text{total\_EV1}}$$

4. **EV2 Scenario (V2G-Enabled)**:
   * **V2G Discharge Contribution ($E_{\text{v2g\_discharge}}$)**:
     $$E_{\text{v2g\_discharge}} = N_{\text{households}} \times N_{\text{EV/household}} \times p_{\text{v2g}} \times E_{\text{v2g\_per\_day}}$$
     $$E_{\text{v2g\_discharge}} = N_{\text{households}} \times 1.5 \times 0.50 \times 10.0 \text{ kWh/day} = N_{\text{households}} \times 7.5 \text{ kWh/day}$$
   * **Total EV2 Load ($E_{\text{total\_EV2}}$)**:
     $$E_{\text{total\_EV2}} = E_{\text{total\_EV1}} - E_{\text{v2g\_discharge}}$$
     $$E_{\text{total\_EV2}} = N_{\text{households}} \times (26.25 - 7.5) \text{ kWh/day} = N_{\text{households}} \times 18.75 \text{ kWh/day}$$
   * **Net Energy Balance (EV2)**:
     $$E_{\text{balance\_EV2}} = E_{\text{balance\_base}} - E_{\text{total\_EV2}}$$

---

## 3. Dwelling Unit and Household Composition
Residential household ($HH$) counts and gross floor areas ($GFA$) are determined by the building typologies composing each Neighbourhood Unit (NU) row in `Full_NUs_Archetypes.csv`:

| Building Typology | Households per Building | Building GFA ($m^2$) |
|---|---:|---:|
| **Detached (2-Storey)** | 1 | 220 |
| **Attached (2-Storey)** | 1 | 180 (190 for `MU-HS`) |
| **Mid-Rise (4-Storey)** | 32 | 3,136 |
| **High-Rise (10-Storey)** | 160 | 23,512 |
| **High-Rise (15-Storey)** | 240 | 35,268 |
| **High-Rise (20-Storey)** | 320 | 47,024 |

*Note: Non-residential buildings (offices, retail, schools, hotels, hospitals, warehouses, datacenters, laboratories, and commercial towers) contribute 0 EV loads, resulting in zero EV demand for purely commercial or industrial NUs.*

---

## 4. Grid Status & Metrics Normalisation
* **Grid Status Indicator**: Classified as `"Grid Stressed - Deficit"` if the net balance is negative (load > 0), and `"Load Balanced - Net Zero"` otherwise. Since $E_{\text{balance\_base}}$ defaults to 0.0, both EV1 and EV2 represent net deficits, with EV2 reducing the magnitude of grid stress.
* **Normalised Intensity (kWh/$m^2$-day)**: Calculated by dividing the net energy balance (EV1/EV2) by the authoritative total floor area of the neighbourhood ($MORPH\_FLOOR$).

---

## 5. Known Limitations
* **Static Travel Habits**: Daily vehicle mileage is modeled using a static average (15 kWh/day, equivalent to ~200 km range) rather than dynamic agent-based travel diaries or commuting variations.
* **Simplified Round-Trip Battery Loss**: Stationary battery storage loss is fixed to 50% throughput, ignoring battery chemistry, degradation over time, or temperature-dependent capacities.
* **Unconstrained V2G Discharge**: Assumes simultaneous bi-directional charging availability without local transformer constraints, grid congestion limits, or smart peak-shaving dispatch controls.
* **Baseline Decoupling**: Building-level electrical demand profiles are not integrated into the base balance ($E_{\text{balance\_base}} = 0$), leaving the EV loads isolated from daily building peak load shapes.
