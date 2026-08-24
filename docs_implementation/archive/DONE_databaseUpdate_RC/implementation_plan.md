# LMN-tool Database Consistency & Cleanup

Implementation plan to resolve data inconsistencies across the CSV template files, restructure energy data, and add a 4th envelope option.

---

## Understanding: Envelope ↔ Data Mapping

The archive files are the **true source of truth**:

| UI Envelope Selection | Source File | Column Used | Description |
|---|---|---|---|
| **NECB 2017** | [CAN_MTL.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/CAN_MTL.csv) | `DEFAULT` | Canadian baseline code |
| **ASHRAE** | [ASHRAE.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/ASHRAE.csv) | `DEFAULT` | US baseline code |
| **High-Performance (NECB)** | [CAN_MTL.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/CAN_MTL.csv) | `EEM1` | Best-practice on CAN_MTL baseline |
| **High-Performance (ASHRAE)** 🆕 | [ASHRAE.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/ASHRAE.csv) | `EEM1` | Best-practice on ASHRAE baseline |

The remaining columns (IAL, EEM2–EEM4) are used for the energy breakdown slider/comparison within the energy selection layer, **not** for envelope selection.

```
Archive CSVs (source of truth)
├── CAN_MTL.csv ─── DEFAULT col ──→ "NECB 2017" envelope
│                └── EEM1 col ────→ "High-Performance (NECB)" envelope
│                └── EEM2-4 cols ─→ Energy efficiency measure comparisons
│
└── ASHRAE.csv ──── DEFAULT col ──→ "ASHRAE" envelope
                 └── EEM1 col ────→ "High-Performance (ASHRAE)" envelope 🆕
                 └── EEM2-4 cols ─→ Energy efficiency measure comparisons
```

---

## Issue 1: Add 4th Envelope Button — High-Performance (ASHRAE)

Yes, this is absolutely possible. We already have the data in [ASHRAE.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/ASHRAE.csv) `EEM1` column.

---

### [MODIFY] [layer1_NUs_selection.html](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html#L104-L121)

**Live site:** https://orcunkoraliseri.github.io/LMN-tool/layer1_NUs_selection.html

Add a 4th envelope button card:

```diff
 <!-- Envelope - With Images -->
 <div class="parameter-group">
     <div class="parameter-label">Envelope</div>
     <div class="envelope-cards">
         <button class="envelope-card" data-category="envelope" data-value="necb-2017">
             <img src="Content/Images_Envelope_Parameters/necb 2017.png" alt="NECB 2017">
             <span>NECB 2017</span>
         </button>
         <button class="envelope-card" data-category="envelope" data-value="ashrae">
             <img src="Content/Images_Envelope_Parameters/ashrae.png" alt="ASHRAE">
             <span>ASHRAE</span>
         </button>
-        <button class="envelope-card" data-category="envelope" data-value="high-performance construction">
-            <img src="Content/Images_Envelope_Parameters/high-performance construction.png" alt="High-Performance Construction">
-            <span>high-performance</span>
+        <button class="envelope-card" data-category="envelope" data-value="high-performance-necb">
+            <img src="Content/Images_Envelope_Parameters/high-performance construction.png" alt="High-Performance (NECB)">
+            <span>High-Performance (NECB)</span>
+        </button>
+        <button class="envelope-card" data-category="envelope" data-value="high-performance-ashrae">
+            <img src="Content/Images_Envelope_Parameters/high-performance construction.png" alt="High-Performance (ASHRAE)">
+            <span>High-Performance (ASHRAE)</span>
         </button>
     </div>
 </div>
```

> [!NOTE]
> Both high-performance buttons will share the same image initially. We can create a distinct image later if desired.

---

### [MODIFY] [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js)

**Changes needed in data.js:**

1. **NEIGHBOURHOODS array** (line 32, 46, 60, etc.) — update `envelope` arrays from 3 to 4 values:
```diff
-envelope: ["necb-2017", "ashrae", "high-performance construction"],
+envelope: ["necb-2017", "ashrae", "high-performance-necb", "high-performance-ashrae"],
```

2. **ENVELOPE_ENERGY_DATA** (lines 238–393) — replace the current alias with a proper 4th entry:
```diff
-// High-performance uses CAN_MTL (necb-2017) data with EEM1 as default
-ENVELOPE_ENERGY_DATA["high-performance construction"] = ENVELOPE_ENERGY_DATA["necb-2017"];
+// High-Performance (NECB): uses CAN_MTL EEM1 as DEFAULT
+ENVELOPE_ENERGY_DATA["high-performance-necb"] = { /* CAN_MTL data with DEFAULT→EEM1 */ };
+
+// High-Performance (ASHRAE): uses ASHRAE EEM1 as DEFAULT
+ENVELOPE_ENERGY_DATA["high-performance-ashrae"] = { /* ASHRAE data with DEFAULT→EEM1 */ };
```

For the high-performance entries, the `DEFAULT` key will map to the `EEM1` column values from the source CSV, meaning users see the high-performance baseline when they first view energy data.

3. **getEnergyData()** (lines 403–413) — simplify since the aliasing is now baked into the data:
```diff
 function getEnergyData(envelope, nuCode, column) {
-  let resolvedColumn = column;
-  if (envelope === "high-performance construction" && column === "DEFAULT") {
-    resolvedColumn = "EEM1";
-  }
   const dataset = ENVELOPE_ENERGY_DATA[envelope];
   if (!dataset || !dataset[nuCode]) return null;
-  return dataset[nuCode][resolvedColumn] || null;
+  return dataset[nuCode][column] || null;
 }
```

---

## Issue 2: Restructure Energy CSV Files

### [MODIFY] [CAN_MTL.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/CAN_MTL.csv) → move to Templates/

**Current location:** `Templates/archive/CAN_MTL.csv` (73 rows, row-per-metric)
**New location:** `Templates/CAN_MTL.csv`

**Current format (8 rows per NU):**
```csv
NU,Archetype,Metric,IAL,DEFAULT,EEM1,EEM2,EEM3,EEM4
RC-D,Detached,EUI,163.9,138.6,108.2,93.1,81.0,61.1
RC-D,Detached,Htg,64.9,51.7,21.7,6.5,9.2,10.9
RC-D,Detached,Clg,24.8,6.3,6.8,6.2,6.3,5.0
RC-D,Detached,DHW,22.1,22.1,21.7,21.7,6.6,6.6
RC-D,Detached,Ltg,4.7,4.7,4.7,4.7,4.7,2.6
RC-D,Detached,Equip,47.4,46.6,46.6,46.6,46.6,28.3
RC-D,Detached,F+P,0.0,6.3,5.9,6.6,6.8,6.8
RC-D,Detached,PV,77.0,0.0,174.5,174.5,174.5,174.5
```

**Proposed pivoted format (1 row per NU per EEM level = 6 rows per NU):**
```csv
NU,Archetype,EEM_Level,EUI,Htg,Clg,DHW,Ltg,Equip,F+P,PV
RC-D,Detached,IAL,163.9,64.9,24.8,22.1,4.7,47.4,0.0,77.0
RC-D,Detached,DEFAULT,138.6,51.7,6.3,22.1,4.7,46.6,6.3,0.0
RC-D,Detached,EEM1,108.2,21.7,6.8,21.7,4.7,46.6,5.9,174.5
RC-D,Detached,EEM2,93.1,6.5,6.2,21.7,4.7,46.6,6.6,174.5
RC-D,Detached,EEM3,81.0,9.2,6.3,6.6,4.7,46.6,6.8,174.5
RC-D,Detached,EEM4,61.1,10.9,5.0,6.6,2.6,28.3,6.8,174.5
```

**Benefits:**
- Each row is a **complete, self-contained record** — all metrics visible at a glance
- **9 NUs × 6 levels = 54 rows** (down from 72 rows)
- Easy to compare EEM levels for a given NU by reading consecutive rows
- Adding a new NU = +6 rows instead of +8

> [!IMPORTANT]
> The archive files have the **correct non-zero IAL PV values** (e.g., RC-D = 77.0 in CAN_MTL, 74.3 in ASHRAE). The merged `LMN_Energy_Database.csv` incorrectly zeroed these out. The archive values will be used in `data.js` — IAL will show real PV generation, consistent with how EEM1–EEM4 already show improved PV values.

---

### [MODIFY] [ASHRAE.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/ASHRAE.csv) → move to Templates/

Same pivoted restructure. Also **54 rows** after pivoting.

---

### [DELETE] [LMN_Energy_Database.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/LMN_Energy_Database.csv)

This merged file is replaced by the two restructured source files above. It was a derivative that:
- Introduced IAL PV data discrepancies (zeroed out values that had real data in archives)
- Added an unnecessary `Envelope` column (redundant with the filename)
- Made the file hard to maintain at 145 rows

---

## Issue 3: Expand Envelope Values in Parameter CSVs

---

### [MODIFY] [Welcome_Page_Parameters.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/Welcome_Page_Parameters.csv)

Update Envelope row to reflect all 4 options:

```diff
-Envelope,High-Performance Construction,High-Performance Construction,...(×12)
+Envelope,NECB-2017 / ASHRAE / High-Performance (NECB) / High-Performance (ASHRAE),... (×12)
```

---

### [MODIFY] [Interface_Connections.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/Interface_Connections.csv)

Expand from 9 rows to **36 rows** (9 NUs × 4 envelopes):

```csv
Concept,Neighbourhood,Function,Context,Density,Layout,Envelope,Energy Status,Buildings
8. Rural Cluster,RC-R,Residential,Rural,Low,Curvilinear,NECB-2017,Positive,24 detached (two-storey house) homes
8. Rural Cluster,RC-R,Residential,Rural,Low,Curvilinear,ASHRAE,Positive,24 detached (two-storey house) homes
8. Rural Cluster,RC-R,Residential,Rural,Low,Curvilinear,High-Performance (NECB),Positive,24 detached (two-storey house) homes
8. Rural Cluster,RC-R,Residential,Rural,Low,Curvilinear,High-Performance (ASHRAE),Positive,24 detached (two-storey house) homes
...
```

> [!NOTE]
> Energy Status (Positive/Negative) is kept the same across all envelopes for now. If envelope affects energy status differently, we can update with specific values later.

---

## Issue 4: Clean Up PV_generation.csv

---

### [MODIFY] [PV_generation.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/PV_generation.csv)

Three changes in one:

1. **Remove CAN_CLG** — orphaned data, misimplemented
2. **Rename column** `Standard` → `Envelope`
3. **Rename values** `CAN_MTL` → `NECB-2017`, `US_ASHRAE` → `ASHRAE`

**Final result:**
```csv
Envelope,NU,Archetype,IAL,DEFAULT,EEM1,EEM2,EEM3,EEM4
NECB-2017,RC-D,Detached,0.0,0.0,174.5,174.5,174.5,174.5
NECB-2017,RC-T,Attached,0.0,0.0,143.2,143.2,143.2,143.2
NECB-2017,RC-ML,MidLow,0.0,0.0,158.9,158.9,158.9,158.9
NECB-2017,RC-R,Detached (row),0.0,0.0,155.5,155.5,155.5,155.5
NECB-2017,RC-HR1,HighRise,1.9,1.9,42.2,42.2,42.2,42.2
NECB-2017,RC-HR2,HighRise,3.3,3.3,22.7,22.7,22.7,22.7
NECB-2017,RC-MR1,MidRise,0.0,0.0,92.4,92.4,92.4,92.4
NECB-2017,RC-MR2,MidRise,0.0,0.0,66.8,66.8,66.8,66.8
NECB-2017,RC-MR3,MidRise,0.0,0.0,66.8,66.8,66.8,66.8
ASHRAE,RC-D,Detached,0.0,0.0,173.8,173.8,173.8,173.8
ASHRAE,RC-T,Attached,0.0,0.0,142.0,142.0,142.0,142.0
ASHRAE,RC-ML,MidLow,0.0,0.0,157.9,157.9,157.9,157.9
ASHRAE,RC-R,Detached (row),0.0,0.0,154.5,154.5,154.5,154.5
ASHRAE,RC-HR1,HighRise,1.9,1.9,41.0,41.0,41.0,41.0
ASHRAE,RC-HR2,HighRise,3.3,3.3,20.8,20.8,20.8,20.8
ASHRAE,RC-MR1,MidRise,0.0,0.0,91.7,91.7,91.7,91.7
ASHRAE,RC-MR2,MidRise,0.0,0.0,66.3,66.3,66.3,66.3
ASHRAE,RC-MR3,MidRise,0.0,0.0,66.3,66.3,66.3,66.3
```

---

## Summary of All File Changes

| File | Action | Details |
|---|---|---|
| [layer1_NUs_selection.html](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html) | MODIFY | Add 4th envelope button, rename existing high-performance label |
| [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js) | MODIFY | Add 4th envelope data, update NEIGHBOURHOODS, simplify getEnergyData() |
| [CAN_MTL.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/CAN_MTL.csv) | MOVE + RESTRUCTURE | Move to `Templates/`, pivot metrics to columns (73→54 rows) |
| [ASHRAE.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/archive/ASHRAE.csv) | MOVE + RESTRUCTURE | Move to `Templates/`, pivot metrics to columns (73→54 rows) |
| [LMN_Energy_Database.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/LMN_Energy_Database.csv) | DELETE | Replaced by restructured source files |
| [Welcome_Page_Parameters.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/Welcome_Page_Parameters.csv) | MODIFY | Envelope row → 4 options |
| [Interface_Connections.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/Interface_Connections.csv) | MODIFY | 9 rows → 36 rows (9 NUs × 4 envelopes) |
| [PV_generation.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/PV_generation.csv) | MODIFY | Remove CAN_CLG, rename Standard→Envelope, rename values |


---

## Verification Plan

### Automated Tests
- Spot-check: randomly sample 5 NU × EEM combinations per envelope and verify `data.js` values match the restructured CSV
- Grep codebase for any remaining references to `CAN_CLG`, `CAN_MTL`, `US_ASHRAE`, `high-performance construction` (old key)
- Verify all 4 envelope keys work in `getEnergyData()` calls

### Manual Verification
- Open the website and confirm 4 envelope buttons appear on Layer 1
- Select each envelope and verify correct energy data appears on Layer 2
- Confirm the energy breakdown chart renders properly for all 4 envelopes
