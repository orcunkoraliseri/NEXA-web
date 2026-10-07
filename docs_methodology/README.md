# docs_methodology, the simulation methodology behind the NEXA-web

Every number the LMN website shows comes from an EnergyPlus simulation campaign
run outside this repository. That campaign has its own documentation. This
folder is a **curated copy** of the parts of it that a maintainer of this
website needs, so that a citation in the handover report resolves here rather
than on a personal machine.

**These documents describe the simulation, not the website.** For the website,
read `docs_implementation/documentation-revisions/Submission/`.

## What is here

### `BEM/`, how the building models were built

| File | What it answers |
|------|-----------------|
| `BEM_methodology.md` | Where the building prototypes come from, the five simulation variants, and the eight modelling assumptions that change how a result must be read. **Start here.** |
| `CAN_transformation.md` | How the US prototypes were converted to the Canadian codes, NECB 2017 for commercial and NBC 9.36 for housing, plus the BTAP internal loads |
| `NUs_Setup_Matrix.md` | The parameter by parameter setup, residential against commercial, with each row marked as a deliberate difference or an inherited one. Section 6 is the honest list of what is not harmonised |
| `System_Setup_NUs_Publications.md` | Why one simulation installation serves five publications, and what changes between them |
| `ClimateZone6ASelection_Reason.md` | Why Buffalo NY is the base city for the commercial prototypes when the target is Montreal |
| `Resizing_methodology.md` | Why three prototypes are used at half floor area |
| `BEM_reference.md` | The published benchmarks the simulated results are checked against |

### `EEM/`, the efficiency measures

`EEM_setup.md` is the catalogue: every measure in every scenario rung, what
EnergyPlus object it touches, which buildings it is skipped on, and the
published reference behind it. The five rungs the website calls **Baseline as
built, + Envelope, + heat pump, + hot water, + lighting, equipment and
cooling** are this document's DEFAULT, EEM1, EEM2, EEM3 and EEM4.

### `PV/`, the solar model

`PV_methodology.md` covers the two track model (native PV at baseline, the
geometry sized injector on every other rung), the split between pitched and
flat roofs, and the assumption table in section 6. Sections 3, 6 and 11 are the
source of the PV constants in `js/config.js`.

### `LMN-campaign/`, the run that produced this website's data

| File | What it answers |
|------|-----------------|
| `LMN_master_setup.md` | The specification of the campaign whose output is `js/data.js`: a 2^4 factorial of envelope, heat pump, hot water and EEM4, run per standard, giving 16 scenarios per building per climate |
| `NECB_Climate_Zone_Representative_Cities.md` | Which city represents each NECB zone. The seven climate options on Layer 1 come from here |
| `RC_full_results.md` | Full result tables for the compact residential sub-campaign |

### `validation/`

| File | What it answers |
|------|-----------------|
| `LMN1983_NU_validation_all35.md` and `.csv` | Per neighbourhood validation across all 35 units. The `area_cond` column of the CSV is the source of `CONDITIONED_AREA_DATA` in `js/data.js` |
| `LMN1983_NU_external_validation.md` | The gross against heated and cooled floor area measurements that decided how intensities are labelled on the website |
| `LMN_RC_d2_literature_validation_REPORT.md` | Comparison of the simulated results against published literature |

## Rules for this folder

1. **It is a copy, and the upstream is authoritative.** If a document here and
   the simulation code disagree, the code wins. Never edit a file here to make
   it agree with the website; correct the upstream document and copy it again.
2. **Curated, not complete.** The full research archive holds several hundred
   documents. What is here is what the website's own numbers depend on. If a
   maintainer needs more, the upstream project is the place to ask for it.
3. **No secrets.** Checked on 2026-08-14: no token, password or key, and no
   personal file path, appears in any file in this folder.

Copied 2026-08-14 for the handover. Source project: the EnergyPlus BEM toolkit
(`idf_reader`), documentation folders `docs_BEM_Explanation` and
`docs_DONE/docs_LMN_web`.
