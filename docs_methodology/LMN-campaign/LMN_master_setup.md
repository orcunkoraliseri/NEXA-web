# LMN — 16 / 32 / 48-Variant Simulation Master Setup

**Status:** simulation-setup spec (no new measures). All measures already exist in `BEM_utils/idf_eem_applier.py`; LMN is a new master that wires existing EEM1/2/3/4 building blocks into a 2⁴ scenario factorial × N standards for **database generation** by an external tool.

**Scope:** add LMN as a new master in `main_BEM.py` next to `EEM_Journal`. Covers Options **6, 7, 8, 9i** (single-IDF, Option-7 single-building batch, neighbourhood Option-8, neighbourhood multi-master Option-9i).

**Variant count:** flexible — 16 (one standard) · 32 (two standards) · 48 (all three). Driven entirely by the standards-picker selection at run time.

**PV policy:** native on `DEFAULT`, Tier-3 improved injector on all 15 other scenarios (mirrors EEM_Journal).

---

## 1. Factor design

5 factors → **16 scenarios × N standards** (N ∈ {1, 2, 3}):

| Factor      | Levels                                  | Source                                          |
|-------------|-----------------------------------------|-------------------------------------------------|
| `STD`       | `CAN_MTL`, `CAN_CLG`, `US_ASHRAE`       | baseline-set picker (existing)                  |
| `ENV` (EEM1)| off / on                                | `_apply_envelope_block` in `idf_eem_applier.py` |
| `HVAC`(EEM2)| off / on                                | `_apply_hvac_block` (ASHP COP=4.0 + CCHP curves)|
| `DHW` (EEM3)| off / on                                | `_apply_dhw_block` (HPWH transcritical CO₂)     |
| `EEM4`      | off / on                                | `_apply_eem4_bundle` in `idf_eem_applier.py:8271` (C4/L4/E4 — cooling/lighting/equipment) |

Pick 1 / 2 / 3 standards at run time → 16 / 32 / 48 sims per building. US_IECC_SF is intentionally not exposed (add later if needed).

---

## 2. Scenario-tag table (16 cells, × selected standards)

The applier dispatcher in `create_eem_journal_idf` (`idf_eem_applier.py:7872`) is a 4-Boolean union (`apply_envelope`, `apply_hvac`, `apply_dhw`, `apply_eem4`). Eight of the sixteen cells reuse existing tags (the 2³ ENV×HVAC×DHW factorial plus the two EEM4 corners — `EEM_J_EEM4_ONLY` and `EEM_J_ENV_HVAC_DHW_EEM4` — already in the dispatcher). **Six new tags** must be added to the `assert` set and to the relevant `apply_*` sets:

| #  | ENV | HVAC | DHW | EEM4 | Scenario tag                  | New? |
|----|-----|------|-----|------|-------------------------------|------|
|  1 | 0   | 0    | 0   | 0    | `EEM_J_DEFAULT`               |      |
|  2 | 1   | 0    | 0   | 0    | `EEM_J_ENVELOPE`              |      |
|  3 | 0   | 1    | 0   | 0    | `EEM_J_HVAC_ONLY`             |      |
|  4 | 0   | 0    | 1   | 0    | `EEM_J_DHW_ONLY`              |      |
|  5 | 1   | 1    | 0   | 0    | `EEM_J_ENV_HVAC`              |      |
|  6 | 1   | 0    | 1   | 0    | `EEM_J_ENV_DHW`               |      |
|  7 | 0   | 1    | 1   | 0    | `EEM_J_HVAC_DHW`              |      |
|  8 | 1   | 1    | 1   | 0    | `EEM_J_ENV_HVAC_DHW`          |      |
|  9 | 0   | 0    | 0   | 1    | `EEM_J_EEM4_ONLY`             |      |
| 10 | 1   | 0    | 0   | 1    | **`EEM_J_ENVELOPE_EEM4`**     | NEW  |
| 11 | 0   | 1    | 0   | 1    | **`EEM_J_HVAC_ONLY_EEM4`**    | NEW  |
| 12 | 0   | 0    | 1   | 1    | **`EEM_J_DHW_ONLY_EEM4`**     | NEW  |
| 13 | 1   | 1    | 0   | 1    | **`EEM_J_ENV_HVAC_EEM4`**     | NEW  |
| 14 | 1   | 0    | 1   | 1    | **`EEM_J_ENV_DHW_EEM4`**      | NEW  |
| 15 | 0   | 1    | 1   | 1    | **`EEM_J_HVAC_DHW_EEM4`**     | NEW  |
| 16 | 1   | 1    | 1   | 1    | `EEM_J_ENV_HVAC_DHW_EEM4`     |      |

### Dispatcher patch (`idf_eem_applier.py:7885-7898`)

```python
assert scenario in {
    "EEM_J_DEFAULT",              # handled upstream, not via this fn
    "EEM_J_ENVELOPE", "EEM_J_HVAC_ONLY", "EEM_J_DHW_ONLY",
    "EEM_J_ENV_HVAC", "EEM_J_ENV_DHW", "EEM_J_HVAC_DHW",
    "EEM_J_ENV_HVAC_DHW",
    "EEM_J_EEM4_ONLY",
    "EEM_J_ENVELOPE_EEM4", "EEM_J_HVAC_ONLY_EEM4", "EEM_J_DHW_ONLY_EEM4",
    "EEM_J_ENV_HVAC_EEM4", "EEM_J_ENV_DHW_EEM4", "EEM_J_HVAC_DHW_EEM4",
    "EEM_J_ENV_HVAC_DHW_EEM4",
}, f"Invalid scenario: {scenario!r}"
apply_envelope = scenario in {"EEM_J_ENVELOPE", "EEM_J_ENV_HVAC", "EEM_J_ENV_DHW", "EEM_J_ENV_HVAC_DHW",
                              "EEM_J_ENVELOPE_EEM4", "EEM_J_ENV_HVAC_EEM4", "EEM_J_ENV_DHW_EEM4", "EEM_J_ENV_HVAC_DHW_EEM4"}
apply_hvac     = scenario in {"EEM_J_HVAC_ONLY", "EEM_J_ENV_HVAC", "EEM_J_HVAC_DHW", "EEM_J_ENV_HVAC_DHW",
                              "EEM_J_HVAC_ONLY_EEM4", "EEM_J_ENV_HVAC_EEM4", "EEM_J_HVAC_DHW_EEM4", "EEM_J_ENV_HVAC_DHW_EEM4"}
apply_dhw      = scenario in {"EEM_J_DHW_ONLY", "EEM_J_ENV_DHW", "EEM_J_HVAC_DHW", "EEM_J_ENV_HVAC_DHW",
                              "EEM_J_DHW_ONLY_EEM4", "EEM_J_ENV_DHW_EEM4", "EEM_J_HVAC_DHW_EEM4", "EEM_J_ENV_HVAC_DHW_EEM4"}
apply_eem4     = scenario in {"EEM_J_EEM4_ONLY", "EEM_J_ENVELOPE_EEM4", "EEM_J_HVAC_ONLY_EEM4", "EEM_J_DHW_ONLY_EEM4",
                              "EEM_J_ENV_HVAC_EEM4", "EEM_J_ENV_DHW_EEM4", "EEM_J_HVAC_DHW_EEM4", "EEM_J_ENV_HVAC_DHW_EEM4"}
```

Cache key already includes the scenario tag (`cache_key = f"EEM_Journal_v4_{scenario}"`), so the six new tags get isolated `applier_hash` sidecars automatically. No cache invalidation needed for existing 10 tags (8 original ENV×HVAC×DHW + the 2 EEM4 corners already wired).

---

## 3. Output directory layout

Mirror Option-`i` conventions exactly. Per-job E+ run outputs land under a versioned **option_7_j / option_9_j** root with date stamp, plus a top-level master CSV for the external DB tool to ingest.

### Option 7 (single-building batches, Options 6/7)

```
0_BEM_Setup/SimResults_modified/option_7_j_<YYYYMMDD>_v<N>/
    <building>__<STD>__LMN_<SCENARIO>/
        eplusout.csv, eplusout.err, eplustbl.htm, ...
    LMN_<YYYYMMDD>_master.csv
```

### Option 9i (neighbourhood multi-master)

```
0_BEM_Setup/SimResults_neighbourhoods/option_9_j_<YYYYMMDD>_v<N>/
    <NU_id>/<building>__<STD>__LMN_<SCENARIO>/eplusout.csv, ...
    LMN_NU_<YYYYMMDD>_master.csv
```

`<N>` auto-increments per same-day rerun (match the helper already used by Option-`i`). `<STD>` ∈ {`CAN_MTL`, `CAN_CLG`, `US_ASHRAE`} — only the standards selected at the picker appear.

### Modified-IDF cache (unchanged location)

```
Content/idfs_modified/<building>_LMN_<SCENARIO>.idf
Content/idfs_modified/<building>_LMN_<SCENARIO>.applier_hash   # cache sidecar
```

Scenario tags used in filenames: `DEFAULT`, `ENVELOPE`, `HVAC_ONLY`, `DHW_ONLY`, `ENV_HVAC`, `ENV_DHW`, `HVAC_DHW`, `ENV_HVAC_DHW`, `EEM4_ONLY`, `ENVELOPE_EEM4`, `HVAC_ONLY_EEM4`, `DHW_ONLY_EEM4`, `ENV_HVAC_EEM4`, `ENV_DHW_EEM4`, `HVAC_DHW_EEM4`, `ENV_HVAC_DHW_EEM4`.

---

## 4. Menu wiring (`main_BEM.py`)

Add a single new top-level letter `j` (next free after `i = EEM_Journal`). **No sub-options** — `j` always runs the full 8-scenario factorial. Variant count is driven by the standards picker (below).

### Option 6 / 7 (single-IDF and Option-7 batch) — around `main_BEM.py:2139`

```
j.  LMN  (16-scenario factorial × selected standards: ENV/HVAC/DHW/EEM4 on/off, 2⁴)
```

### Option 8 / 9i (neighbourhood) — around `main_BEM.py:4093` and `:6547`

Same single letter `j`; the dispatcher iterates LMN's 16-tag scenario list per NU, per selected standard.

### Standard picker (LMN-specific)

Inside the LMN entry, show the picker (around `main_BEM.py:2007`):

```
1. CAN_MTL                          (16 sims/building)
2. CAN_CLG                          (16 sims/building)
3. US_ASHRAE                        (16 sims/building)
4. CAN_MTL & US_ASHRAE              (32 sims/building)
5. CAN_MTL & CAN_CLG & US_ASHRAE    (48 sims/building)  ← default
```

Default = **5** (all three, sequential — full 48-cell factorial). Existing CAN_MTL/CAN_CLG ↔ US baseline translator (`main_BEM.py:199`) handles the per-standard input-IDF resolution; LMN just iterates the picker's standard list.

---

## 5. Master CSV columns (for the external DB tool)

One row per `(building, standard, scenario)` triple → 16 / 32 / 48 rows per building (depends on picker). Recommended schema:

| Column                       | Source / note                                              |
|------------------------------|------------------------------------------------------------|
| `building_id`                | baseline IDF stem                                          |
| `building_type`              | from existing classifier                                   |
| `standard`                   | `US_ASHRAE` \| `CAN_MTL` \| `CAN_CLG`                      |
| `env_flag`                   | 0/1 (EEM1)                                                 |
| `hvac_flag`                  | 0/1 (EEM2)                                                 |
| `dhw_flag`                   | 0/1 (EEM3)                                                 |
| `eem4_flag`                  | 0/1 (EEM4 — cooling/lighting/equipment)                    |
| `scenario_tag`               | one of the 16 `EEM_J_*` tags                               |
| `EUI_total_kWh_m2`           | end-use sum, **PV excluded**                               |
| `EUI_heating_kWh_m2`         | per existing Journal master                                |
| `EUI_cooling_kWh_m2`         | per existing Journal master                                |
| `EUI_DHW_kWh_m2`             | per existing Journal master                                |
| `EUI_lights_kWh_m2`          | per existing Journal master                                |
| `EUI_equip_kWh_m2`           | per existing Journal master                                |
| `EUI_fans_pumps_kWh_m2`      | per existing Journal master                                |
| `PV_gen_kWh_m2`              | native on `DEFAULT`, Tier-3 improved on the other 15       |
| `pv_track`                   | `native` \| `tier3` — explicit PV-track flag per row       |
| `n_severes`, `n_warnings`    | from `eplusout.err`                                        |
| `idf_path`, `output_path`    | for traceability                                           |

> The four flag columns make the matrix queryable as a 4D factorial directly from SQL/pandas, which is the point of LMN vs the cumulative Journal ladder.

Output master CSV lives **inside** the versioned option directory (see §3):

```
0_BEM_Setup/SimResults_modified/option_7_j_<YYYYMMDD>_v<N>/LMN_<YYYYMMDD>_master.csv
0_BEM_Setup/SimResults_neighbourhoods/option_9_j_<YYYYMMDD>_v<N>/LMN_NU_<YYYYMMDD>_master.csv
```

Co-locating the master with the run dir keeps each invocation self-contained and lets the external DB tool ingest by pointing at a single folder.

---

## 6. PV policy

Mirror the EEM_Journal convention:

- **`EEM_J_DEFAULT` → native PV only** (no injector). This is the only cell without improved PV.
- **All 15 other scenarios** → **Tier-3 improved PV injector** applied, identical to the EEM_Journal active set (see `docs_BEM_explanation/PV_methodology.md` and `BEM_utils/pv_utils.py` / `pv_optimizer.py`).

PV generation reports into the dedicated `PV_gen_kWh_m2` master column and is **never netted into EUI**. The default cell therefore baselines native-PV output and every measure cell carries improved-PV output so the DB tool can isolate PV uplift per scenario.

---

## 7. Out of scope

- BIPV / storage (Tier-3 rack PV is in scope; deeper PV physics is not)
- US_IECC_SF (can be added later by extending the picker; matrix grows to 64 cells)
- New retrofit measures — LMN reuses existing EEM1/2/3/4 code paths byte-for-byte

---

## 8. Implementation checklist (for the employee prompt)

1. **Applier dispatcher patch** — `idf_eem_applier.py:7885-7898`: add the 6 new `_EEM4`-suffixed tags (`EEM_J_ENVELOPE_EEM4`, `EEM_J_HVAC_ONLY_EEM4`, `EEM_J_DHW_ONLY_EEM4`, `EEM_J_ENV_HVAC_EEM4`, `EEM_J_ENV_DHW_EEM4`, `EEM_J_HVAC_DHW_EEM4`) to the assert set and to the relevant `apply_envelope` / `apply_hvac` / `apply_dhw` / `apply_eem4` sets per the table in §2. The 8 original ENV×HVAC×DHW tags + the 2 EEM4 corners (`EEM_J_EEM4_ONLY`, `EEM_J_ENV_HVAC_DHW_EEM4`) are already wired.
2. **Routing tuple** — `main_BEM.py:1596-1600`: add the same 6 new tags to the `_apply_variation_to_building` routing tuple.
3. **Master orchestrator** — `main_BEM.py`:
   - expose the 16-scenario list for LMN (`_LMN_TAGS` constant, 16 entries; 2⁴ Gray-style ordering — DEFAULT first, ENV_HVAC_DHW_EEM4 last),
   - drive the 5-option standards picker (§4) and iterate the chosen standards,
   - reuse the versioned output root helper (`option_7_j_<YYYYMMDD>_v<N>` / `option_9_j_<YYYYMMDD>_v<N>`),
   - reuse `create_eem_journal_idf(...)` per scenario tag,
   - reuse existing runner (`run_idfs(...)` / neighbourhood pool) — no concurrency changes (`MAX_NEIGHBOURHOOD_WORKERS = 8` stays).
4. **Menu strings** — already wired; just update the LMN line text to read `2⁴` / `16-scenario` per §4 (already covers Options 6, 7, 8, 9i).
5. **Master CSV writer** — `_write_lmn_master_csv(...)`: extend `_LMN_FLAG_TABLE` to 16 entries with 4-tuple values `(env, hvac, dhw, eem4)`; add `"eem4_flag"` to the CSV fieldnames between `"dhw_flag"` and `"scenario_tag"`; unpack the 4-tuple.
6. **Sanity gate (Gate 4)** — run Option 7 with picker = **1** (CAN_MTL only) on one SmallOffice or Detached building, confirm 16 sims, 0 Fatals, all 16 scenario tags present in the master CSV, `eem4_flag == 1` on exactly 8 rows. Then expand to picker = 5 for a full 48-cell smoke if desired.

No new tests required beyond reusing existing per-applier acceptance suites (`tests/test_necb_transformations.py` etc.).
