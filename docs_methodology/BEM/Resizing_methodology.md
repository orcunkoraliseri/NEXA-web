# Secondary School Layout Investigation Report

## Overview
This report explains why the secondary school does not fit within the allocated ground in the `RS-I4_onesquare_preview.html` and compares it with the example where a school fits easily in a 70x70 plot.

## 1. Dimensional Analysis

### Current Building in RS-I4
The simulation for `RS-I4` is configured to use the **ASHRAE 901.1 Secondary School (Buffalo)** model.
- **IDF Path:** `Content/ASHRAE901_STD2022/ASHRAE901_SchoolSecondary_STD2022_Buffalo.idf`
- **Footprint Area:** ~11,902 m²
- **Actual Dimensions:** **141.0m (Width) x 104.0m (Depth)**
- **Building Height:** 8.0m (2 floors)

### Allocated Plot in RS-I4
In the `RS-I4` registry, the secondary school is assigned to **Sector 8**.
- **Plot Dimensions:** **142.5m x 71.2m** (Ground 2)
- **The Conflict:** While the building's width (141m) just barely fits the plot width (142.5m), the **104m depth significantly exceeds the 71.2m plot depth**. This causes the building to overflow the ground by **32.8 meters** in the Y-direction.

## 2. Comparison with the 70m x 70m Example
The example provided (`secondarySchool_ground.png`) shows a school fitting into a 70m x 70m ground with room to spare. This is possible because it uses a **resized** version of the school.

### Resized School Model
The project contains a resized version of the Calgary school:
- **IDF Path:** `Content/CHV_buildings/MT_8. Secondary School - Calgary RESIZED.idf`
- **Footprint Area:** **~1,266 m²** (nearly 10 times smaller than the Buffalo version)
- **Approximate Dimensions:** **~45m x ~33m**
- **Fit:** This resized version fits easily within a 70m x 70m (4,900 m²) plot and even leaves enough space for additional buildings on the same ground.

## 3. Root Cause
The `RS-I4` neighbourhood definition in `Content/neighbourhoods/neighbourhood_registry.py` is hardcoded to use the full-sized Buffalo school rather than the resized model.

```python
# Current RS-I4 assignment in neighbourhood_registry.py
8: ("Content/ASHRAE901_STD2022/ASHRAE901_SchoolSecondary_STD2022_Buffalo.idf", 0, 0, "Secondary School"),
```

## 4. Conclusion & Recommendation
The secondary school in `RS-I4` does not fit because the **Buffalo Secondary School model is physically too deep (104m) for the designated ground (71.2m)**. 

To resolve the layout issue and match the efficiency seen in your example, the `RS-I4` configuration should be updated to use a resized school model (like the Calgary RESIZED version) that aligns with the intended site density.
