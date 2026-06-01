# Walkthrough - LMN-tool Database Update from New Simulation Results

We successfully updated the local database templates and frontend energy data module based on the new neighbourhood simulation results provided in `Templates/new/LMN_RC_NU_20260531_master.csv`.

## Summary of Changes

### 1. Database Template Updates
* **`Templates/CAN_MTL.csv`**:
  * Updated EEM1 through EEM4 `PV` generation values for `RC-D`, `RC-T`, `RC-ML`, and `RC-MR1` archetypes.
  * Preserved the original non-zero IAL (Initial/Baseline) PV values from the database archive.
  * Corrected minor rounding adjustments for `DEFAULT` and `EEM4` EUI and heating/cooling values for `RC-T` based on new simulation parameters.
* **`Templates/ASHRAE.csv`**:
  * Updated EEM1 through EEM4 `PV` generation values for `RC-D`, `RC-T`, `RC-ML`, and `RC-MR1` archetypes.
  * Preserved the original non-zero IAL PV values from the database archive.
  * Updated `RC-HR2` DEFAULT EUI to reflect minor rounding adjustment (155.0 to 154.9).
* **`Templates/PV_generation.csv`**:
  * Synced all `EEM1` through `EEM4` PV generation values across all archetypes to reflect the new simulation data.

### 2. Frontend & JS Synchronization
* **`js/data.js`**:
  * Synced the `PV_GENERATION_DATA` constant with the new simulation PV values.
  * Synced the unified `ENVELOPE_ENERGY_DATA` block for `necb-2017`, `ashrae`, `high-performance-necb`, and `high-performance-ashrae` to fully align with the updated CSV databases.
  * Ensured high-performance envelopes (`high-performance-necb` and `high-performance-ashrae`) correctly reflect the new simulation values with `DEFAULT` inheriting the new `EEM1` parameters.

---

## Git Operations & Deployment

* Verified that the local repository is up to date with the remote origin `main` branch.
* Committed the database and Javascript updates.
* Pushed all committed changes to the GitHub repository `https://github.com/orcunkoraliseri/LMN-tool.git` on the `main` branch.
