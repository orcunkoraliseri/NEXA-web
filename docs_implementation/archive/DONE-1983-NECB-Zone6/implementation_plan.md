# Add 1983 Vintage (Quebec NECB Zone 6) to LMN Tool

Integrate 1983-vintage EnergyPlus simulation results into the LMN tool as a new envelope performance tier, available **only for NECB Zone 6 (Montréal)**. Add a corresponding documentation chapter and link to the validation report.

## User Review Required

> [!IMPORTANT]
> The 1983 vintage is only available for **NECB Zone 6 (Montréal)** — the popup "1983" button will only appear when the user clicks the NECB Zone 6 region card. All other zones will continue showing only "Standard" and "HPENV".

> [!IMPORTANT]
> The CSV contains two `arm` values: `CAN_MTL_1983` (1983 vintage envelope) and `CAN_MTL` (current NECB 2017 baseline). We will use the `CAN_MTL_1983` arm data for the new `"vintage-1983-z6"` envelope key in `ENVELOPE_ENERGY_DATA`. The `CAN_MTL` arm data appears to match existing `necb-z6` data and will be ignored (already loaded).

## Open Questions

> [!NOTE]
> **Scenario tag mapping**: The CSV uses `EEM_J_*` scenario tags with 16 combinations per NU. We'll map them to the standard 5 legacy keys, following the same mapping as [the previous database expansion](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/docs_implementation/DONE_databaseUpdate_Full/implementation_plan.md):
>
> | data.js Key | CSV scenario_tag |
> |---|---|
> | `DEFAULT` | `EEM_J_DEFAULT` |
> | `EEM1` | `EEM_J_ENVELOPE` |
> | `EEM2` | `EEM_J_ENV_HVAC` |
> | `EEM3` | `EEM_J_ENV_HVAC_DHW` |
> | `EEM4` | `EEM_J_ENV_HVAC_DHW_EEM4` |

---

## Proposed Changes

### Component 1: Data Conversion Script

#### [NEW] [convert_1983_csv.py](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/1983-Quebec/convert_1983_csv.py)

Python script to parse `LMN1983_NU_all_results.csv` and generate JavaScript data entries:
1. Read CSV, filter to `arm == "CAN_MTL_1983"` only (560 rows → 35 NUs × 16 scenarios)
2. Map `EEM_J_*` scenario tags → `DEFAULT`, `EEM1`, `EEM2`, `EEM3`, `EEM4`
3. For each NU, extract the 6 EUI breakdown components (Heating, Cooling, DHW, Lighting, Equipment, Fans & Pumps), total EUI, and PV generation
4. Output JavaScript object literal for `ENVELOPE_ENERGY_DATA["vintage-1983-z6"]` containing all 35 NUs with 5 scenarios each

---

### Component 2: ENVELOPE_ENERGY_DATA in data.js

#### [MODIFY] [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js)

Add a new top-level key `"vintage-1983-z6"` to `ENVELOPE_ENERGY_DATA` (after all existing zone entries, before the `getEnergyData` function). This block will contain all 35 NUs with the same `{ total, breakdown[], pv }` structure as existing entries, but using the 1983-vintage simulation values from the CSV.

The data structure will be:
```javascript
"vintage-1983-z6": {
    "CC-B": {
        "DEFAULT": { "total": 191.4, "breakdown": [...], "pv": 3.4 },
        "EEM1": { ... },  // EEM_J_ENVELOPE
        "EEM2": { ... },  // EEM_J_ENV_HVAC
        "EEM3": { ... },  // EEM_J_ENV_HVAC_DHW
        "EEM4": { ... }   // EEM_J_ENV_HVAC_DHW_EEM4
    },
    // ... all 35 NUs
}
```

---

### Component 3: NEIGHBOURHOODS Array in data.js

#### [MODIFY] [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js) — `NEIGHBOURHOODS` array (lines 24–1240)

Add `"vintage-1983-z6"` to the `envelope` array of **every** neighbourhood entry. This enables all 35 NUs to be selectable when the 1983 vintage is chosen.

Example change for each NU:
```diff
 "envelope": [
   "necb-z6",
   "ashrae",
   "necb-z4",
   ...
+  "vintage-1983-z6"
 ]
```

---

### Component 4: Popup Modal — Add "1983" Button (Zone 6 Only)

#### [MODIFY] [layer1_NUs_selection.html](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html) (lines 149–166)

Add a third button to the popup modal options, conditionally visible only for NECB Zone 6:

```html
<button class="envelope-tier-btn" data-tier="vintage-1983" id="tier-btn-1983" style="display:none;">
    <span class="tier-label">1983</span>
    <span class="tier-sub">Quebec Vintage</span>
</button>
```

#### [MODIFY] [app.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/app.js) — `setupEnvelopeCards()` (lines 234–315)

1. **Show/hide 1983 button**: When the popup opens, check if `pendingRegion === 'necb-z6'`. If yes, show the 1983 button; otherwise hide it.

2. **`getEnvelopeValue()`** (line 202): Add a `vintage-1983` tier case:
   ```javascript
   if (tier === 'vintage-1983') {
       return 'vintage-1983-z6';
   }
   ```

3. **`parseEnvelopeValue()`** (line 218): Add parsing for vintage keys:
   ```javascript
   if (envelopeValue.startsWith('vintage-1983-')) {
       return { region: 'necb-z6', tier: 'vintage-1983' };
   }
   ```

4. **Badge text** (line 286): Add `vintage-1983` case:
   ```javascript
   badge.textContent = tier === 'high-performance' ? 'HPENV' : tier === 'vintage-1983' ? '1983' : 'Standard';
   ```

5. **`updateAvailableOptions()`** (line 406–418): Add `vintage-1983-z6` to the availability check for region cards:
   ```javascript
   const vintageVal = getEnvelopeValue(region, 'vintage-1983');
   const isSelected = activeFilters.envelope === stdVal || activeFilters.envelope === hpVal || activeFilters.envelope === vintageVal;
   // ... also add vintageVal to the availability check
   ```

---

### Component 5: Envelope Display Names

#### [MODIFY] [energy-selection.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/energy-selection.js) — `envelopeNames` (line 229)

Add: `'vintage-1983-z6': '1983 Vintage — NECB Zone 6 (Montréal)'`

#### [MODIFY] [energy.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/energy.js) — `envelopeNames` (line 388)

Add: `'vintage-1983-z6': '1983 Vintage — NECB Zone 6 (Montréal)'`

#### [MODIFY] [app.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/app.js) — `envelopeImageNames` (line 746) and `envelopeDisplayNames` (line 764)

Add entries:
```javascript
'vintage-1983-z6': 'standard construction'  // image name
'vintage-1983-z6': '1983 Vintage — Zone 6 (Montréal)'  // display name
```

---

### Component 6: Energy Breakdown Logic (Vintage = Standard Tier)

#### [MODIFY] [energy.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/energy.js) (lines 260–278)

The 1983 vintage envelope uses `DEFAULT` as its base level (same as "standard"), not `EEM1` (as "high-performance" does). Add a check so `vintage-1983-*` is treated as a standard-tier envelope:

```javascript
if (envelope.startsWith("high-performance-")) {
    baseLevel = "EEM1";
    // ...existing logic...
}
// vintage-1983 uses DEFAULT as baseline (same as standard)
// No special handling needed — falls through to default baseLevel = "DEFAULT"
```

This means no code change is needed here since `vintage-1983-z6` does NOT start with `"high-performance-"`, so `baseLevel` stays `"DEFAULT"` — which is correct.

---

### Component 7: Validation Report & Documentation

#### [NEW] Copy [LMN1983_NU_validation_all35.pdf](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/1983-Quebec/LMN1983_NU_validation_all35.pdf) → `Content/References & Methodology/Reports/`

Copy the PDF to the reports folder so it can be linked from the documentation page.

#### [MODIFY] [documentation.html](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/documentation.html)

**a) Table of Contents** (line 393–407): Insert new entry after "Validation Summary" (K):
```html
<li><a href="#sec-vintage-1983">1983 Vintage Envelope (Quebec)</a></li>
```
Re-letter subsequent sections (L → M, M → N).

**b) New Section** (insert after Section K — Validation, before Section L — Limitations): Add a new section `N` (or letter of your choice after re-lettering):

```html
<section class="doc-section" id="sec-vintage-1983">
    <h2>L &mdash; 1983 Vintage Envelope (Quebec NECB Zone 6)</h2>
    <!-- Content covering:
         - What is the 1983 vintage? (pre-code building stock representative of Montréal)
         - Why? (retrofit potential analysis for existing buildings)
         - Weather file: CAN_MTL (Montréal CWEC)
         - Key differences vs NECB 2017 (envelope U-values, infiltration rates, WWR)
         - Simulation campaign: 35 NUs × 16 EEM scenarios = 560 runs
         - EUI comparison summary (1983 vs 2017 baseline)
         - Link to validation report PDF
    -->
</section>
```

**c) Detailed Reports box** (line 421–438): Add a link to the 1983 validation report PDF in the "Detailed Reports" box within Section A.

---

### Component 8: Implementation Documentation

#### [NEW] Files in [docs_implementation/1983-NECB-Zone6/](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/docs_implementation/1983-NECB-Zone6)

Create the implementation tracking documents:
- `implementation_plan.md` — Copy of this plan
- `walkthrough.md` — Post-implementation summary with changes made, tests run, and validation results

---

## Execution Summary

| Step | Files | Description |
|---|---|---|
| 1 | `convert_1983_csv.py` | Write and run conversion script to generate JS data |
| 2 | `data.js` — `ENVELOPE_ENERGY_DATA` | Insert `"vintage-1983-z6"` block with 35 NUs × 5 EEM levels |
| 3 | `data.js` — `NEIGHBOURHOODS` | Add `"vintage-1983-z6"` to each NU's envelope array |
| 4 | `layer1_NUs_selection.html` | Add "1983" button to popup modal |
| 5 | `app.js` | Update popup logic, `getEnvelopeValue`, `parseEnvelopeValue`, badge text, availability checks, display names |
| 6 | `energy-selection.js`, `energy.js` | Add display name for `vintage-1983-z6` |
| 7 | `documentation.html` | Add new chapter, TOC entry, validation report link |
| 8 | Copy validation PDF | Move to `Content/References & Methodology/Reports/` |
| 9 | `docs_implementation/1983-NECB-Zone6/` | Create walkthrough document |

## Verification Plan

### Automated Tests
- Run `convert_1983_csv.py` and verify output covers all 35 NUs
- Verify `vintage-1983-z6` key exists in `ENVELOPE_ENERGY_DATA` with correct structure
- Check that all 35 NU codes have 5 scenario keys each (DEFAULT, EEM1–EEM4)

### Manual Verification
- Open `layer1_NUs_selection.html` in browser
- Click NECB Zone 6 → verify popup shows 3 buttons: "Standard", "HPENV", "1983"
- Click any other zone → verify popup shows only 2 buttons (no "1983")
- Select "1983" → proceed through Layer 2 → verify energy breakdown displays with 1983 values
- Verify badge shows "1983" on the region card
- Open `documentation.html` → verify new chapter appears in TOC and content
- Click validation report link → verify PDF opens
- Verify no JavaScript console errors throughout the flow
