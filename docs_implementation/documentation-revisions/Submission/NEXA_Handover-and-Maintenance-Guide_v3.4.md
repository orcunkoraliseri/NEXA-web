# NEXA Tool, Handover and Maintenance Guide

**Version:** 3.4
**Guide date:** 2026-09-11
**Release described:** NEXA V1, model and data version 1.0.0
**Live at:** https://orcunkoraliseri.github.io/LMN-tool/, published 2026-08-24
**Repositories:** `github.com/orcunkoraliseri/LMN-tool`, which serves the site, and
`github.com/CarolineHVermette/LMN-Web`, which mirrors the code and serves nothing
**Prepared by:** Orcun Koral Iseri, Postdoc, Resilient Habitat Lab, Concordia University
**Prepared for:** Dr. Caroline Hachem-Vermette / RHLab

---

## How to read this guide

Two files carry the same text. **Read the `.html`**, which is the easier one on screen.
**Comment in the `.docx`**, which is the one Word can mark up and track changes in. Send
the marked-up `.docx` back and your comments become the next revision.

**This guide contains no passwords, tokens or API keys.** It records which accounts and
permissions are required, not their secrets.

### Structure

| If you are | Read | About |
|------------------------------------------------------------|---------------------------------------|---------------------|
| Going to **use or present** the tool | **Part I** | 20 minutes |
| Going to **change** the tool | Part I, then **Part II** | 40 minutes |
| Going to **own, run and maintain** it | **Part III**, with Parts I and II as orientation | It is a reference, not a read |

Part I answers *what is this and what does the number mean*. Part II answers
*where do I start and how do I change something*. **Part III is the reference**,
and it is the part that lets RHLab run the tool without the author. Parts I and
II summarise; where they and Part III disagree, **Part III is current**.

### Where to start

| If you want | Read |
|--------------------------------------------------|----------------------------------------------------------------------|
| The one thing that matters most for the handover | **Section 6.0**, where the numbers actually come from |
| Whether a number on screen can be traced | **Section 5**, the results data map, and **5.1**, the floor area rule |
| What the tool cannot do | **Part I, section G**, and **section 12.3** |
| How to run it without the author | **Part II**, then sections 8, 10 and 11 |
| **How to add new information to the tool** | **Section 8**, which opens with a table routing every kind of change to its procedure and its files |

### Relationship to the public methodology

The tool's own `documentation.html` explains the science to a stakeholder. **This guide
explains the system to a maintainer.** The separation was an explicit instruction, given
twice: internal material must not leak into the public methodology, and this guide must
not be reduced to a pointer at it. All three of the documents merged into this one were
internal, so merging them does not touch that boundary.

*The revision history of this guide is Appendix D.*

---

# Part I. The tool and its results

> **For a reader who will use or present the tool.** No code, no procedures.
> The same material in the form the public sees it is the tool's own
> `documentation.html` page.


## A. The NEXA tool

**NEXA stands for Neighbourhood Energy eXploration & Analysis.** It is an interactive
neighbourhood energy explorer. You compose a neighbourhood by typology, then
overlay energy demand and generation systems, electric mobility and green
infrastructure, and the tool shows what each choice does to a small set of
energy indicators.

The important idea is what sits behind the choices. **Energy and solar results
for every neighbourhood in the tool come from completed EnergyPlus simulation campaigns**,
across a ladder of efficiency scenarios and across seven climates, of which five are
published today. They are never simulated on demand; the indicators built from them
(the ratio of performance, absolute totals, net grid demand, landscape solar and the V2G
chain) are calculated in the page from those results and stated constants (see section 5).
That is why results appear instantly, and why the tool answers for the archetypes and
climates that were simulated.

**A dozen choices in front, 2,974 simulated results behind.**

### Intended use

NEXA is an **early stage comparison tool**, for a planner, a municipality or a
researcher who wants to see how neighbourhood form, envelope standard, on site
generation and electric mobility move a small set of energy indicators, before
any design work begins.

It is **not**, in this version, a design or compliance tool for an individual
building; **not an optimisation engine** — no formal optimisation method is
implemented, so the tool never ranks the scenarios and never recommends one; and
not a substitute for a project specific energy model.

The distinction matters when the tool is presented. **NEXA answers "how do these
options compare to one another", not "what should be built here".**

---

## B. The four layers

A session is a sequence of choices, each one narrowing what comes next. The
sidebar keeps every earlier choice visible, so the design under discussion is
always on screen.

| Layer | You choose | The tool answers |
|---------------------|----------------------------------------------------|-----------------------------------------------|
| **1. Neighbourhood** | Land use, context, density, layout, and the climate and envelope code | The matching neighbourhood units, their composition, floor area, and a 3D model of each |
| **2. Energy** | The efficiency scenario, the heating and hot water systems, and which generation technologies to install | Annual energy use intensity, the end use breakdown as a treemap, and the rooftop solar result |
| **3. Mobility** (preliminary) | Electric vehicle uptake, public transport, charging stations, vehicle to grid | Daily charging demand, charger counts, and the vehicle to grid energy available |
| **4. Green infrastructure** (preliminary) | Green roofs, vertical greening, green spaces, urban agriculture, landscape solar (selection and visualisation across eight options, with one quantified option) | Selection and visualisation; landscape solar generation (the single quantified option) |
| **Summary** | Nothing, it consolidates | The whole design on one dashboard, with the net energy balance |

The layers are deliberately independent: a mobility choice can be revised without
losing the energy scenario. **Combinations that have no simulated answer are
disabled as you choose**, so an unanswerable design cannot be assembled.

---

## C. Basis of the results

### The 35 neighbourhood units

A neighbourhood unit is a **fixed composition of buildings**, not a single
building. There are 35.

| Family | Code | Count | What they are |
|----------------------------|---------|---------:|-------------------------------------------------------------------------|
| Compact residential | `RC-*` | 10 | Detached, townhouse, mid rise and high rise research sets |
| Residential | `RS-*` | 5 | Single family, semi detached, townhouse, low and mid rise apartment |
| Mixed use | `MU-*` | 9 | Commercial ground floor with housing above, main street retail, mixed high rise |
| Commercial and civic | `CC-*` | 9 | Office parks, retail, supermarkets, schools, outpatient healthcare, food service |
| Industrial and data centre | `IC-*` | 2 | Large data centres, edge computing, light industrial |

The buildings inside them are not invented. They begin from internationally
recognised reference prototypes — sixteen ASHRAE 90.1-2022 commercial prototypes,
three IECC 2024 residential variants, two data centre archetypes and seven
supplementary buildings — and are then transformed to Canadian practice:
**NECB 2017** for commercial and institutional buildings, **NBC 9.36** for
housing, with Canadian occupancy and plug load schedules from NRCan's BTAP data.
*The full account is Part III, section 6.*

### The five climate arms

Seven climate arms were simulated. Five are published in NEXA V1. The ASHRAE arm is a United
States reference case and Zone 8, Chisasibi, is held back at the supervisor's request; both
remain in the research database.

Each unit is simulated in five Canadian NECB 2017 climate zones, each carried by
a real city and a real weather file. Montreal additionally carries a **1983
Quebec reference envelope** arm, for reasoning about the existing stock rather
than about new construction. **154 neighbourhood and climate pairs are
published.**

| Option | Zone | Representative city |
|-----------------------------------------|--------------------------|-----------------------------------------------------|
| NECB Zone 4 | NECB 4 | Vancouver |
| NECB Zone 5 | NECB 5 | Toronto |
| NECB Zone 6 | NECB 6 | Montreal |
| NECB Zone 7A | NECB 7A | Winnipeg |
| NECB Zone 7B | NECB 7B | Fort McMurray |

**Two arms were withdrawn from the public tool, and neither was deleted.** The
**ASHRAE 90.1 arm on Buffalo NY** was withdrawn on 2026-08-17: it is a United
States reference case on a United States weather file, not a Canadian climate.
**NECB Zone 8, Chisasibi**, was withdrawn on 2026-08-24 on Dr. Hachem-Vermette's
instruction. Both remain in the research database and in Part III; only their
quantitative results are not exposed to the public tool.

**Both withdrawals were confirmed as V1 decisions on 2026-09-09**, and each
carries a note about what comes after. Buffalo, her decision E8: it is kept as a
research and reference arm, it is not presented publicly as a Canadian climate,
and **ideally it is re-run later under Canadian weather** rather than retired.
Chisasibi, her decision E7: it stays in the research database and the technical
documentation, and no quantitative public result is shown for Zone 8 in V1.

**"Vintage" is no longer used in the interface.** The Montreal arm reads **1983
Quebec reference envelope**, which is what it is.

### The five scenarios, applied cumulatively

This is the single most misread part of the tool. **Each rung contains everything
below it.** Scenario 3 is not "hot water"; it is envelope plus heat pump plus hot
water. That is why each label names the whole package.

The names on screen are the short ones Dr. Hachem-Vermette asked for on
2026-08-24, with a terminology legend wherever the abbreviations first appear.
**HPerf** is a high performance envelope, **Space HP** a space heating heat pump,
**HPWH** a heat pump water heater and **EEM** the remaining energy efficiency
measures.

| Rung | On screen | What it actually is |
|--------------|--------------------------------|--------------------------------------------------------------------------|
| Baseline | Baseline | Code compliant reference case built to NECB 2017 as designed. Native PV only |
| 1 | HPerf | High performance walls and roof, triple glazing, foundation insulation, air leakage cut to a quarter |
| 2 | HPerf + Space HP | Adds a cold climate air source heat pump, inverter cooling, heat recovery |
| 3 | HPerf + Space HP + HPWH | Adds a transcritical CO2 heat pump water heater with a stratified tank |
| 4 | HPerf + Space HP + HPWH + EEM | Adds automated shading and daylight dimming, LED lighting, occupancy trim, ENERGY STAR plug loads, and electrification of gas appliances in housing |

The Baseline rung is a code-compliant reference case, a new neighbourhood built to NECB 2017. It is not a survey of existing buildings and it is not the current condition of any real neighbourhood. The 1983 Quebec reference envelope (Montreal only) is the closest thing the tool has to an earlier condition; it is an envelope built to the 1983 Quebec construction requirements (Regulation E-1.1, r. 1, Order in Council 89-83), representing a code-era reference rather than a survey of existing stock, and is compared against itself.

A sixth option, **ideal thermal load**, strips out the heating and cooling
equipment to expose the pure thermal demand of the envelope. It is for district
energy sizing, and **it cannot be compared against the other rungs**, because it
is not delivered energy.

---

## D. The two headline indicators

### Energy use intensity

Energy is reported as **site energy**: electricity plus gas as metered, with no
source energy multipliers and no carbon factors applied.

Intensity is per **square metre of heated and cooled floor area**, which is the
area the simulation actually conditions. The floor area printed on the
neighbourhood table is the **total built area**, which includes unheated attics
and basements. On the house based neighbourhoods the total is about twice the
heated and cooled area. **The two are different numbers on purpose**, and the page
says which is which, because dividing by the wrong one changes the answer by a
factor of two. *The rule a maintainer must follow is Part III, section 5.1.*

### Ratio of Performance

In plain words: **what share of the energy this neighbourhood uses in a year can
its own rooftop solar produce in that same year?**

```
RoP = annual PV generation (kWh/m2) / annual energy demand (kWh/m2)
```

Both quantities are annual and both use the same floor area, so the area cancels
and RoP is a pure ratio. RoP of 1.00 means the roof generates over a year as much
as the neighbourhood consumes. RoP of 0.35 means it covers 35 per cent.

**A worked example, detached houses (RC-D) under NECB 2017.** At scenario 1 the
roof produces 100.4 kWh/m2 per year against a demand of 107.0, so RoP is 0.94. At
scenario 4 the roof is unchanged but demand has fallen to 60.6, so RoP is 1.66.
This is the characteristic shape of the result: **RoP rises because demand falls,
not because panels were added.**

**Two things RoP does not say.** It is an annual balance, not an hourly one: a
neighbourhood at RoP 1.00 still imports electricity on a December evening and
exports at midday in June, so **annual net zero is not grid independence**, and RoP
says nothing about storage or peak demand. And it is a ratio of two intensities,
so a low RoP is often a statement about **building form** rather than about the
solar design — a high rise has roughly the same roof as a low rise but many times
the floor area beneath it, so its RoP is structurally lower with an identical
array.

---

## E. Rooftop solar

The solar assumptions belong to the **roof**, not to the neighbourhood, and there
are two roof groups because the two carry genuinely different arrays.

|  | Flat roof | Pitched roof |
|-------------------------------|-----------------------|-------------------------------------------------------------------|
| Neighbourhoods | 31 of 35 | 4 of 35: RC-R, RC-D, RC-ML, RC-T |
| Array | A single south facing rack at 45 degrees tilt | Flush on the south facing pitch, tilt equals the roof pitch |
| **Panel efficiency** | **23 per cent** | **23 per cent** |
| Active fraction of the reference surface | 1.0 on the rack | 0.85 of the south roof face |
| Ground coverage ratio | 0.40 | Does not apply, a flush array has no row spacing |

Common to both: 14 per cent system losses from DC to AC, 96 per cent inverter
efficiency, arrays oriented to true south. *The model itself is Part III, section
6.6; every constant is in the assumptions register, Part III, section 15.2.*

**A correction, made on 2026-08-24, and it was ours.** Earlier versions of this
guide, and the tool itself, named **18.65 per cent** as the module efficiency
behind the published results. That was wrong, and Dr. Hachem-Vermette was right
not to let the question close. **Every published PV number was produced at 23 per
cent panel efficiency.** The figure 18.65 per cent is a **cell** efficiency from a
retired calculation track, behind an active area fraction of 0.80; the 20 per cent
that also circulated is a **module** efficiency from a literature reference, behind
a 0.90 fraction. Comparing them without their fractions compares a cell with a
module, which is why the difference never closed. **The generated energy is
unaffected**, because it is simulation output from the 23 per cent model. What was
wrong was the assumption printed beside it. **No run was repeated and no stored
value moved.**

**Total PV array area, in square metres, is now a headline figure**, taken from the
photovoltaic surfaces of the simulation model itself, and shown for **26 of the 35
neighbourhoods**. For the other nine the row is **absent rather than estimated**:
their stored array does not reproduce the generation the tool publishes, and an
area that does not reproduce the generation is not the area behind it.
**Generation intensity in kWh per square metre of floor area is no longer a
headline figure**, because a generation per square metre of *floor* invites being
read as a figure per square metre of *array*.

**Why solar output per square metre of floor varies so much between
neighbourhoods.** The numerator is limited by roof area, while the denominator
grows with every storey. Low rise forms have a lot of roof per square metre of
floor, and so a high intensity; tall forms spread one roof over many storeys, and
so a low one. Detached houses land near 100 kWh/m2, mid rise near 66 to 75, high
rise near 46 and, for the tallest, near 26. **That spread is physics, not an
inconsistency in the tool.**

---

## F. Maturity of a figure

Four words, and no others, describe the standing of any figure in the tool. They
appear on the pages themselves, not only in this guide.

| Term | Meaning |
|-------------------------------|-----------------------------------------------------------------------------------------|
| **Simulation-backed** | The value comes from an EnergyPlus run |
| **Preliminary** | The value comes from a documented calculation chain, not from a simulation |
| **In development** | Being worked on, no figure is shown |
| **Not modelled yet** | No quantitative method exists. The option is visible, disabled, and the reason is given |

**Maturity is one axis. Provenance is a second, and the tool carries both.**
Beside every result that has one, the pages print where the number came from,
in two words only: **Directly simulated**, meaning it comes straight out of an
EnergyPlus run, or **Derived from simulation**, meaning a calculation was applied
to values that did. The mapping, result by result, is `LMN_CONFIG.provenance.
results` in `js/config.js`, and it is the mapping that decides the label, not the
page. A figure therefore carries a maturity term and, where applicable, a
provenance label: the rooftop solar total is Simulation-backed and Derived from
simulation at once, because it is a simulated intensity multiplied by a simulated
area.

**One inconsistency, and it is CHV's to settle.** Her instruction of 2026-08-24
added "Derived from simulation" to the published list of status terms by name, so
`LMN_CONFIG.statusTerms` now holds five terms and the Scenario Summary page
prints all five in one line. Her closeout checklist of 2026-09-09, item A20, asks
that maturity and provenance be kept separate. **Both cannot hold at once.** The
tool today follows the earlier instruction. Splitting the printed list back to
four maturity terms, with the two provenance labels shown as their own legend, is
one edit in `js/config.js` and one in `js/finish-design.js`, and it waits on her
word.

In practice:

- **Building energy, rooftop solar and the efficiency scenarios are simulation
  backed.** These are the results the tool exists to deliver.
- **Electric vehicle and vehicle to grid figures are preliminary.** They come from
  households times vehicles per household times a daily charging demand.
- **Landscape solar is preliminary.** It is a land area assumption multiplied by a
  specific yield. The same land allocation is applied to every neighbourhood by
  decision, so that figure does not vary between them.
- **Facade solar is restricted.** It was tested on three tall building archetypes
  in Montreal only, is offered only where one of those appears, is marked
  preliminary, and is excluded from the totals.
- **Biomass, wind, geothermal, solar thermal and most green infrastructure options
  are visible and disabled**, because no quantitative model exists for them in this
  round.

---

## G. Limitations

Everything here is also on the tool's own documentation page. It is repeated
because **a reader who is shown the tool should hear it from the person showing
it**, not discover it later from a number.

**In the building simulation.** Duct leakage is not modelled: the detailed airflow
solver was switched off to avoid numerical failures at neighbourhood scale, which
is worth about 5 per cent of energy use intensity and a tenfold saving in run
time. Daylight controls and automated blinds are skipped where they are
impractical or where the engine could not carry them. In the stratified hot water
tank, backup resistance energy is reported by EnergyPlus under space heating rather
than water heating: the total is conserved, the split between those two columns is
not exact. **Data centres and laboratories barely respond to envelope measures**,
because their energy is dominated by process loads that no building level measure
touches.

**In the solar modelling.** Snow is not modelled at all, so **winter yield in zones
7A, 7B and 8 is optimistic by roughly 10 to 25 per cent**, and the results page says
so in those zones. The 45 degree rack tilt is energy optimal for high latitudes but
steeper than the 10 to 15 degrees that wind uplift and ballast limits normally allow
on a commercial flat roof. There is no battery, no peak shaving and no grid feed in
logic: generated electricity simply meets the building's load.

**In coverage.** Five compact residential units outside Montreal rest on a United
States prototype rather than the Canadian baseline, and are **not published**
pending re-simulation. One mixed use case in zone 7B has no baseline upstream,
and the tool declines the combination and says why, rather than filling the hole
with a neighbouring value. That principle holds throughout: **where the tool has
no answer it says so, and never substitutes.**

**In the mobility and green layers.** On site solar is not netted against the electric vehicle
load, so the mobility indicator can only report a deficit. Two efficiency
assumptions in the vehicle to grid chain are still open with the supervisor. *They
are stated with their consequences in Part III, section 15.3.* In green infrastructure,
Layer 4 provides selection and visualisation across eight options, with one quantified
option (landscape PV, a fixed calculation chain). The other seven options are labelled
Not modelled yet.

---

# Part II. Developer orientation

> **For a developer or researcher arriving on the project** who needs to find
> their way around, change something and publish it, without asking the original
> author. **Every path here is a path inside the repository**, not a path on
> anyone's machine. Each section names the place in Part III where the same
> subject is stated in full.


## H. The system in one paragraph

NEXA is a **static site**. No server, no database, no build step, no dependency
install. Clone it, serve the folder over HTTP, and it runs. **Every number it
displays was computed offline and shipped inside `js/data.js`; the website
calculates nothing scientific of its own.** Offline means one of three things, and
the distinction matters more than any other in this guide:

| | Kind | What produced it | Examples |
|-------|------------------------|---------------------------------------------|--------------------------------------------|
| 1 | **Simulation output** | An EnergyPlus campaign, run upstream in `idf_reader` | Building energy use by end use, rooftop solar generation |
| 2 | **Derived from simulation** | A calculation applied to those outputs, upstream or in the page, from stated constants | Energy use intensity, ratio of performance, net grid demand |
| 3 | **Preliminary calculation chain** | A separate offline calculation that is not a simulation at all | Mobility and vehicle to grid (section 6.8), landscape solar (section 6.9) |

Every constant that appears on more than one page lives in `js/config.js` with a
comment saying where it came from. Publishing is a `git push`: GitHub Pages serves
the repository as it stands.

The consequence, and it is the single most important thing to understand: **you
cannot change a result by editing the website.** A wrong number means one of
three things: a wrong value in `js/data.js`, which is fixed by re importing from
the simulation campaign; a wrong simulation, which is fixed upstream and then re
imported; or a wrong input to one of the Preliminary calculation chains, which is
fixed in that chain and the result regenerated. **Which of the three it is, is the
first question to answer, and section 15.0 is how to answer it.**

**Modularity:** The architecture and documentation remain modular so that future
RHLab researchers can maintain and extend NEXA: one page per layer; one script per
page in `js/`; **one source of truth in `js/config.js`**; `js/data.js` generated and
never hand edited; the persistent sidebar generated once by `buildSidebar()` in
`js/sidebar.js`; and a new layer added by following the section 8.9 procedure without
editing the existing layers. The two exceptions where this is not true today are
recorded honestly: `ENERGY_COLORS` **moved to `js/config.js` on 2026-09-09**, which closes
the first of them; and `js/data.js` carries a dead `"MU-S"` breakdown key for a
neighbourhood archetype that does not exist in the published set, found and recorded on
2026-08-27, left in place deliberately because no code path reads it and documented here
so a future maintainer does not spend time investigating what a neighbourhood called
`MU-S` was.

---

## I. Getting started

```bash
git clone https://github.com/CarolineHVermette/LMN-Web.git
cd LMN-Web
python -m http.server 8000
```

Then open `http://localhost:8000/index.html`. **An HTTP server is required**: the
3D models will not load from a `file://` address, because of browser security
rules.

Read in this order:

1. `README.md`, the project overview. It was synchronised with V1 on 2026-09-09,
   so the two agree; where they ever disagree, this guide is current.
2. `js/config.js`. It is **the assumptions register in executable form**, and
   reading its comments is the fastest way to understand what the tool claims and
   why.
3. `documentation.html` in a browser, the public methodology the users read.
4. `docs_methodology/README.md`, the index of the simulation methodology.
5. `docs_implementation/documentation-revisions/`, the working record of the
   current revision round: decisions, defects, results and emails.

*The complete folder and file map is Part III, section 4.*

### Editable and generated files

| Touch | Do not touch without reading Part III first |
|--------------------------------------------------|----------------------------------------------------------------------|
| `js/config.js`, for any shared constant or label | `js/data.js`, which is **generated**, not written |
| The HTML pages, for layout and copy | `previous/`, which is archived and served by nothing |
| `css/styles.css` | `Templates/*.csv`, which are the import layer, not a place to correct a number |

---

## J. Origin of a displayed number

Everything the tool shows resolves through one of five structures in `js/data.js`,
or through `js/config.js`.

| Structure | Holds | Feeds |
|------------------------------|-----------------------------------------------------------------------------|-------------|
| `NEIGHBOURHOODS` | The 35 archetypes: code, land use, context, density, layout, composition, building count, and which envelope keys they support | Layer 1 |
| `ENVELOPE_ENERGY_DATA` | **The core.** `[envelopeKey][NU][scenario]` giving `total`, a six item `breakdown` and `pv`. 17 envelope keys, 35 neighbourhoods, 5 scenarios, **2,974 cells** | Layer 2, and the final summary |
| `GFA_DATA` and `CONDITIONED_AREA_DATA` | Total built floor area, and heated and cooled floor area, per neighbourhood | Absolute totals. **Which one, matters** |
| `EV_V2G_DATA` | Per neighbourhood, per scenario, daily charging and vehicle to grid energy | Layer 3 |
| `LPV_DATA` | The landscape solar configuration and result table | Layer 4 |

`js/config.js` holds everything else: the climate list, the labels, the solar
constants, the scenario names, the status vocabulary, the withheld neighbourhood
and climate pairs, and the landscape solar calculation chain.

**The floor area rule is the easiest thing in this project to get wrong.**
Intensities are per heated and cooled area; absolute totals multiply by
`CONDITIONED_AREA_DATA`, never by `GFA_DATA`. Two separate defects in this round
were the same mistake, and both displayed a total that was **twice** the correct
one. *Stated in full, with the reason, in Part III, section 5.1. Read it before
you write any total.*

*Every displayed field traced to its source is Part III, section 5, the Results
Data Map.*

*Procedures for the three changes a maintainer makes most often are in Appendix E.*

---

## K. Codebase constraints

| Constraint | Consequence |
|------------------------------------------------------|------------------------------------------------------------------|
| `js/data.js` is about 1.7 MB and loads on every page | First paint carries a real download. Fine on a desktop connection, noticeable on mobile |
| No module system, scripts are plain globals loaded in order | `config.js` must load **before** `data.js` on every page. The order is part of the contract |
| State is kept in `sessionStorage` | Closing the tab loses the design. There is no save or share of a configuration |
| Every asset is stamped `?v=N` | Browsers cache aggressively. **If you change a script or the data and do not bump `N`, the deploy will appear to do nothing** |
| No silent climate fallback remains | Removed 2026-09-09 under A15, in the last 16 sites across 8 files. With no climate chosen, a built link now carries an empty envelope and the page it opens states the refusal instead of drawing Montreal |

**Case sensitivity is the recurring trap.** Development is on Windows, which
ignores case; **GitHub Pages is Linux, which does not.** A path built by
interpolating a display label into a filename works locally and returns a 404
live. That is the cause of the broken icons that were reported on the live site
and were not reproducible on the developer machine. Every icon path now lives as
an explicit string in `js/config.js` beside its label, and is asserted against the
real directory listing.

### Verification

There is no test framework and no continuous integration. Verification is by
**standalone Node scripts** under
`docs_implementation/documentation-revisions/Results/`, one per stage group, which
load the real `js/data.js` and `js/config.js`, run the real page logic against a
stub DOM, and assert against the data rather than against a snapshot. **Eight
suites, 706 checks, 685 passing as measured on 2026-09-09.** All 21 failures are checks
written against interface details that changed afterwards; none is a data check, and no
data check fails. The two that were a real defect, the mixed line endings of `js/pv.js`,
closed the same day with `DBG-051`, which is why the figure reads 685 and not the 683
measured earlier in the day. The earlier figure of 696 was measured before the line ending
assertions were rewritten. *Why, and what to do
about it, is Part III, section 10.2.*

**What the suites cannot reach, and what does.** No stub DOM can test a click, the
back button, a reload, the print output or whether a 3D model actually draws.
Those are tested by driving a real browser against the served site. **That pass is
what found eight of the nine defects of 2026-08-24**, and what it did and found
is Appendix F.

---

# Part III. Reference

> **This is the part that lets RHLab run the tool without its author.** Parts I
> and II summarise; this one states. All fifteen sections and the three appendices
> are carried over whole from version 0.8.


## 1. Purpose and scope

This guide is the single reference that allows CHV and RHLab to understand,
maintain, update, deploy and continue developing the NEXA tool independently,
without depending on any personal file, personal account, personal machine or
personal memory.

It is deliberately **separate** from the user facing methodology published at
`documentation.html`. That document explains the science to a stakeholder. This
one explains the system to a maintainer. The separation was an explicit
instruction, given twice: internal material must not leak into the public
methodology, and this guide must not be reduced to a pointer at it.

**Test of completeness.** The guide is written to make it possible for a new
RHLab member, given this guide and repository access and nothing else, to:
find where any displayed number comes from, update an existing neighbourhood
result, add a new neighbourhood or climate zone, deploy an updated live version,
and restore the site if it breaks. The independent handover test in Appendix G
is the practical test of this capability; it has not yet been conducted.

**What this version does not yet do.** Backup and recovery, section 13, has been
tested **once and in one direction only**, by the mirror push of 2026-08-24.
Restoring *from* the mirror has never been rehearsed. Adding a new neighbourhood, section 8.2, is written from
the code rather than from a rehearsal. Both are marked in place.

---

## 2. System description

**NEXA, Neighbourhood Energy eXploration & Analysis,** is an early stage neighbourhood energy
planning and pre feasibility tool. A user selects a neighbourhood archetype and
a climate and code context, then applies efficiency measures, on site
generation, electric mobility and green infrastructure options, and sees the
resulting energy performance against a baseline.

It is a **static website**: HTML, CSS and plain JavaScript, with all data pre
computed and shipped in `js/data.js`. There is no backend, no database and no
build step. Simulation happens offline; the website only reads results.

**What it is not.** It is not an optimisation engine, not a design tool, and not
a substitute for detailed simulation. No formal optimisation method is
implemented and none is planned in the current round. The landing page states
this in a box, on CHV's instruction of 2026-08-13.

### Scale

| Quantity | Value |
|----------------------------------------------------------------------------------------|-------------------------------:|
| Neighbourhood archetypes | 35 |
| Envelope and climate keys | 17 |
| Efficiency scenarios per case | 5, plus an ideal thermal load option |
| Stored scenario results | 2,974 |
| Interactive pages | 14 |
| JavaScript modules | 13 |
| External libraries | 1 |

---

## 3. Repository and deployment

| Item | Value |
|-------------------------------|-----------------------------------------------------------------------------------------|
| **Repository** | `https://github.com/CarolineHVermette/LMN-Web` |
| **Owner** | CHV account. This is the destination repository; see section 14 for what remains of the transfer |
| **Predecessor repository** | `github.com/orcunkoraliseri/LMN-tool`, the original personal repository. Still a configured remote in the working copy |
| **Branch used for the live tool** | `main` |
| **Hosting** | GitHub Pages, served from the repository root of `main` (served today from `orcunkoraliseri/LMN-tool`, moving to `CarolineHVermette/LMN-Web`, with the transfer tracked at section 14.4) |
| **`.nojekyll`** | Present at the repository root, and **required**. Without it, GitHub Pages applies Jekyll processing and silently drops every folder whose name begins with an underscore |
| **Custom domain** | None. The site is served on the default `github.io` address |
| **Build step** | None. What is committed is what is served |
| **Deployment latency** | One to two minutes after a push, occasionally longer |
| **Cache behaviour** | Aggressive. Scripts and stylesheets are versioned with a `?v=N` query parameter. **`?v=16` on 65 tags across 15 pages** on the published site, 2026-08-24. Two verification suites assert that every page carries the same stamp and that no other stamp survives, so a page left behind fails a check rather than going out quietly. See section 11 |
| **Branch strategy** | Currently single branch. For the revision round the recommendation is a `revision` branch merged to `main` at each publish, so that `main` is always the live state |

## 4. Folder and file map

### 4.1 Pages, repository root

| File | Role |
|-----------------------------------------------|-------------------------------------------------------------------------|
| `index.html` | Layer 0, the entry page. Canonical. The near duplicate `layer0_initial.html` was archived to `previous/` on 2026-08-10 |
| `layer1_NUs_selection.html` | Layer 1, land use, context, density, layout, climate and envelope filter |
| `layer1_output.html` | Layer 1, the matching archetype cards with composition, floor area and 3D links |
| `layer2_energy_selection.html` | Layer 2, efficiency scenario, energy system and generation technology selection |
| `layer2_energy_breakdown.html` | Layer 2, the demand breakdown treemap |
| `layer2_pv_breakdown.html` | Layer 2, the solar generation profile |
| `layer3_mobility_selection.html` | Layer 3, mobility and transport selection |
| `layer3_ev_v2g_mobility_output.html` | Layer 3, the mobility and vehicle to grid result |
| `layer4_green_selection.html` | Layer 4, green infrastructure and landscape solar selection |
| `layer4_output_selection.html` | Layer 4, the green performance result |
| `layer4_lpv_breakdown.html` | Layer 4, the landscape solar analysis |
| `layer4_finish_design.html` | The final consolidated summary dashboard |
| `3dviewer.html` | Standalone 3D model viewer. **The only page with an external dependency** |
| `documentation.html` | The public methodology and references |

There is **no Layer 2 output page**. `layer2_output_energy.html` was archived on
2026-08-10: it was titled "Energy Selection Results", held no energy value,
was reachable only by pressing Back, and rendered broken because a `div` was
never closed. Layer 2 now goes straight from the selection screen to the two
breakdown pages.

### 4.2 Scripts, `js/`

| File | Size | Role |
|--------------------------------|--------:|------------------------------------------------------------------------------|
| `config.js` | 120 kB | **Single source of truth for every shared constant.** Created 2026-08-10, and the six hand-maintained data blocks joined it on 2026-09-09. Must load before `data.js` on every page |
| `data.js` | 1.7 MB | **All generated tool data.** `NEIGHBOURHOODS`, `BUILDING_IMAGES`, `PV_GENERATION_DATA`, `ENVELOPE_ENERGY_DATA`, `ENERGY_DATA_ARCHIVED`, `LPV_DATA`, `EV_V2G_DATA`. **Generated, not written by hand.** A result is never typed into `js/data.js` or into a page; it is produced by the pipeline, or it does not change. **On 2026-09-09 the six blocks that were maintained by hand moved to `js/config.js`**: `CONCEPTS`, `ENERGY_COLORS`, `ENERGY_STATUS_IMAGES`, `GFA_DATA`, `CONDITIONED_AREA_DATA` and `PV_AREA_DATA`. That is A12, and it is why this file can now be regenerated without losing anything |
| `app.js` | 38 kB | Layer 1 filtering, archetype table rendering, navigation |
| `finish-design.js` | 40 kB | The final consolidated summary |
| `energy.js` | 31 kB | The demand treemap |
| `pv.js` | 23 kB | The solar profile page |
| `sidebar.js` | 19 kB | The persistent selection sidebar, on every page |
| `energy-selection.js` | 14 kB | Layer 2 selection state |
| `lpv.js` | 11 kB | Landscape solar analysis |
| `ev-v2g-breakdown.js` | 10 kB | Mobility and vehicle to grid result, scenario resolution |
| `mobility-selection.js` | 7 kB | Layer 3 selection state |
| `green-selection.js` | 4 kB | Layer 4 selection state |
| `output_green.js` | 2 kB | Layer 4 green output |

Removed from the live set during this round, and why:

- `heatmap-data.js`, deleted 2026-08-10. It held hourly irradiation data for 5
  of the 35 neighbourhoods, `layer2_pv_breakdown.html` had no canvas to draw
  into, and the drawing function was never called. It was downloaded on every
  visit and rendered nothing. The source CSVs under `Content/Images_PVpage/RC/`
  are untouched, so it is recoverable if the other 30 neighbourhoods are ever
  produced upstream.
- `ev.js` and `output_energy.js`, moved to `previous/` with the pages they
  served.

### 4.3 Styles, `css/`

`styles.css` is live and is the whole design system. `styles.backup.css`,
`styles.v1.backup.css` and `styles.v2.backup.css` are historical and are
removal candidates.

### 4.4 Content, `Content/`

Twenty five image folders plus `Glb_Models/` for the 3D models, `IFC_Models/`
for the BIM interchange models, and `References & Methodology/` for the
reference PDFs.

**Folder and file names contain spaces and mixed case.** This is the root cause
of the live site icon failures described in section 12. It has been contained by
storing every icon path explicitly rather than building it, but the underlying
naming is unchanged.

### 4.5 Data pipeline, `Templates/`

| Path | Role |
|-----------------------------------------------------|-------------------------------------------------------------------|
| `scripts/convert_master_csv.py` | Campaign master CSV to per climate CSV |
| `scripts/patch_data_js.py` | Per climate CSV into `js/data.js` |
| `scripts/check_keys.py` | Key coverage validation |
| `scripts/test_data_flow.py` | End to end data flow test |
| `scripts/out_data.js` | Generated intermediate output |
| `CAN_Z4.csv` … `CAN_Z8.csv`, `ASHRAE.csv` | Per climate energy results, the import layer |
| `PV_generation.csv` | Solar generation lookup |
| `NUS_EV.csv`, `NUs_LPV.csv` | Mobility and landscape solar parameters |
| `Interface_Connections.csv` | Navigation flow matrix |
| `Welcome_Page_Parameters.csv` | Landing page parameters |
| `1983-Quebec/`, `2026-07-19/`, `2026-07-21/` | Dated source datasets |
| `archive/`, `*.bak` | Historical |

**This pipeline is the single most important thing in this guide.** It is how
new simulation results become tool results, and it is the part most dependent on
one person's knowledge. Section 7 documents it.

### 4.6 Documentation folders

| Folder | Content |
|------------------------------------------------------|------------------------------------------------------------------|
| `docs_methodology/` | **New, 2026-08-14.** The curated simulation methodology, copied into the repository so citations resolve. See section 6 |
| `docs_implementation/documentation-revisions/` | The revision round working record: `Implementation/` stage plans, `Progress/` decisions and status, `Debugs/` the defect register, `Results/` verification scripts and evidence, `Emails/` the correspondence, `Submission/` this guide and, in `previous/`, the drafts and the two shorter reports it replaces |
| `docs/` | The original page by page implementation specifications |
| `previous/` | Archived pages, scripts and design images |

---

## 5. Results Data Map

**The required table. Every displayed result, traced to its source.**

CHV specified the minimum columns. They are kept, in her order.

| Displayed result | Unit | Web data file | Variable or key | Original source or model | How generated or updated | Used on which page |
|-----------|-----------|---------------|-----------------------|-----------------------|-----------------------|----------------|
| Annual energy use intensity | kWh/m2 of heated and cooled area per year | `js/data.js` | `ENVELOPE_ENERGY_DATA[env][NU][scenario].total` | EnergyPlus neighbourhood simulation, campaign `option_9_j_20260707_v2`; Montreal from `option_9_qc1983nu_20260807_all35` | `convert_master_csv.py` then `patch_data_js.py` | Layer 2 breakdown, final summary |
| Demand breakdown, six end uses | kWh/m2 of heated and cooled area per year | `js/data.js` | `…[scenario].breakdown[]`, in the order Heating, Cooling, DHW, Lighting, Equipment, Fans and Pumps | EnergyPlus end use output | same | Layer 2 breakdown |
| "Other" end use block | kWh/m2 of heated and cooled area per year | computed at render | `total` minus the sum of `breakdown` | The seven EnergyPlus end use buckets the tool does not chart: exterior lighting, refrigeration, heat rejection, humidification, heat recovery | Computed by `js/energy.js`, never stored | Layer 2 breakdown |
| Rooftop solar generation intensity | kWh/m2 of heated and cooled area per year | `js/data.js` | `ENVELOPE_ENERGY_DATA[env][NU][scenario].pv` | Tier 3 geometry sized solar injector, from EEM1 on. Native prototype solar only at DEFAULT | same | Solar profile, final summary |
| **Authoritative solar source** | | | `LMN_CONFIG.pv.authoritativeSource` names the field above. `PV_GENERATION_DATA[NU].generation` was a second, non reproducing figure and was **deleted** on 2026-08-10 | Verified against the simulation output for all 35: the energy data reproduces it 35 of 35, the deleted field 2 of 35 | | |
| **Total rooftop solar array area** | m2 | `js/data.js` | `PV_AREA_DATA[NU]`. **26 of 35 neighbourhoods only**; the other 9 keys are absent and `js/pv.js` hides the row rather than estimating | **Not an EnergyPlus output and not in any results CSV.** A parse of the `Generator:Photovoltaic` surfaces in the injected IDF of the EEM4 run, campaign `option_9_qc1983nu_20260807_all35`, summed per neighbourhood and multiplied by the injector's active fraction for that roof group, 0.85 pitched and 1.0 flat | Extracted once by the X23 pass, 2026-08-24, and gated: a neighbourhood is listed only if its own EEM4 generation reproduces the shipped `ENVELOPE_ENERGY_DATA["necb-z6"][NU]["EEM4"].pv × CONDITIONED_AREA_DATA[NU]` to within 2 per cent. The 9 that fail are all pitched roof archetypes, all short in the same direction, logged as DBG-038 and unresolved. **Never fill a gap here with an estimate** | Solar profile, final summary |
| Solar array parameters: surface, mounting, tilt, efficiency, ground coverage ratio | text | `js/config.js` | `LMN_CONFIG.pv.roofGroups.pitched` and `.flat`, resolved per neighbourhood by `roofGroupFor()` | `docs_methodology/PV/PV_methodology.md` sections 3 and 6 | Manual, one place | Solar profile, final summary |
| Absolute solar generation | MWh per year | computed at render | `pv` intensity × `CONDITIONED_AREA_DATA[NU]` | Derived | Computed by `js/pv.js` and `js/finish-design.js` | Solar profile, final summary |
| Ratio of Performance | dimensionless | computed at render | `pv / total` | Published metric of the neighbourhood paper | Computed at render time, never stored, so it cannot go stale | Solar profile |
| Heated and cooled floor area | m2 | `js/data.js` | `CONDITIONED_AREA_DATA[NU]` | EnergyPlus Net Conditioned Building Area, from `LMN1983_NU_validation_all35.csv` column `area_cond` | Manual import, 2026-08-10 | **The denominator of every intensity and the multiplier of every absolute total** |
| Total built floor area | m2 | `js/data.js` | `GFA_DATA[NU]` | EnergyPlus Total Building Area, same source file, column `area_gfa` | Manual import, 2026-08-10 | Displayed on the neighbourhood table and the solar page. **Feeds no calculation** |
| Neighbourhood composition and building count | counts | `js/data.js` | `NEIGHBOURHOODS[].content`, `.buildingCount` | The merged sector IDF listing of the campaign | Manual, cross checked three ways in 2026-08-10 | Layer 1 |
| Supported climates per neighbourhood | list | `js/data.js` | `NEIGHBOURHOODS[].envelope[]` | Which arms of the campaign completed | Manual | Layer 1 filter |
| Withheld neighbourhood and climate pairs | text | `js/config.js` | `LMN_CONFIG.dataGaps[]` | Defect analysis, DBG-027 and DBG-028 | Manual, one place, gated on four pages | Layer 1, Layer 2, solar profile, final summary |
| Electric vehicle daily charging demand | kWh per day | `js/data.js` | `EV_V2G_DATA[NU][EV1\|EV2].totalEvEnergyDemand` | Fixed calculation: households × vehicles per household × daily demand per vehicle | Manual, from `Templates/NUS_EV.csv` | Layer 3 result, final summary |
| Storage loss | kWh per day | `js/data.js` | `….storageLoss` | Same calculation chain | same | Layer 3 result |
| Vehicle to grid energy available | kWh per day | `js/data.js` | `….v2gPowerAvailable`. **Named a power, holds an energy.** The display label comes from `LMN_CONFIG.ev.dailyV2gEnergyLabel` instead | Same calculation chain | same | Layer 3 result |
| Net grid demand, total | kWh per day | `js/data.js` | `….netEnergyBalance_kWh` | Derived | same | Layer 3 result, final summary |
| Net grid demand intensity | kWh/(m2 per day) | `js/data.js` | `….netEnergyBalance_kWh_m2` | Derived, against the heated and cooled area | Recomputed 2026-08-12 against `CONDITIONED_AREA_DATA` | Layer 3 result |
| System status | label | `js/data.js` | `….systemStatusIndicator` | Derived. Displayed through `LMN_CONFIG.ev.statusStates`, never raw | same | Layer 3 result, status image |
| Landscape solar, land and site area | m2 | `js/config.js` | `LMN_CONFIG.lpv.siteAreaM2` = 20,234 | Project decision: a uniform 5 acres for every neighbourhood | Manual, one place | Layer 4 landscape solar |
| Landscape solar, land allocation | % and m2 | `js/config.js` | `landAllocationFraction` = 0.20 | Assumption | Manual | same |
| Landscape solar, usable area | % and m2 | `js/config.js` | `usableFraction` = 0.10, applied **in series** with the allocation | Assumption | Manual | same |
| Landscape solar, installed capacity | kWp | `js/config.js` chain | site × 0.20 × 0.10 × 0.200 kW/m2 = 80.9 kWp | Derived | `LMN_CONFIG.lpvChain()`, and `js/data.js` values are generated from it | same |
| Landscape solar, annual generation | MWh per year | `js/config.js` chain | 80.9 kWp × 1,280 kWh/kWp per year = 103.6 MWh per year | Derived | same | same, and final summary |
| 3D model | GLB file | `Content/Glb_Models/` | Filename by neighbourhood code | Morphology model export | Manual | 3D viewer |
| Neighbourhood, building and status images | PNG | `Content/Images_*/` | Explicit path strings in `LMN_CONFIG.selectionLabels` | Project assets | Manual, asserted against the real directory listing with exact case | Every layer |
| Scenario and measure labels | text | `js/config.js` | `LMN_CONFIG.eemLabels`, `eemDetails`, `selectionLabels`, `envelopeLabels` | The upstream ladder documentation | Manual, one place | Every layer |

**Acceptance criterion.** No cell in this table is empty. Three cells that were
marked "to confirm" in the v0.1 draft are now filled: the electric vehicle units
are daily energy throughout, not power; the vehicle to grid field name is wrong
and the display label corrects it; and the landscape solar chain is generated
rather than stored.

### 5.1 The floor area rule

There are two floor areas per neighbourhood and they are **not**
interchangeable. On the house neighbourhoods they differ by exactly a factor of
two, because the attic and the unheated basement are half the built area and
neither is conditioned.

| Quantity | Denominator or multiplier |
|-------------------------------------------------|-----------------------------------------------------------------------|
| Any intensity, kWh/m2 | Heated and cooled area, `CONDITIONED_AREA_DATA` |
| Any absolute total, kWh or MWh | Heated and cooled area, `CONDITIONED_AREA_DATA` |
| The area shown on the neighbourhood table | Total built area, `GFA_DATA`, display only |

Two separate defects in this round were caused by multiplying an intensity by
`GFA_DATA`. Both printed a total that was twice the correct one, on the solar
page and again on the final summary. **If you write a new absolute total,
multiply by the conditioned area.**

**Floor area ratio is not implemented in V1.** FAR is not computed, not stored
and not displayed anywhere in the tool. What V1 offers in its place is the pair
above, the two floor areas, together with the density and building count carried
per neighbourhood in `NEIGHBOURHOODS[]` and shown in the sidebar. **Do not record
a FAR request as delivered**: density plus floor area is a different quantity,
and a reader who needs FAR would have to divide the built area by a site area the
tool does not hold.

---

## 6. Simulation and model sources

### 6.0 Origin of every published number

**The NEXA tool generates none of its own numbers.** Every value on the website
was produced offline in a separate project, `idf_reader`, and transcribed into
`js/data.js`. Nobody can maintain this tool without being able to reach that
project, read its methodology, and re run it.

**Produced offline, but not all by the same means.** Building energy and rooftop
solar are EnergyPlus campaign outputs. The two headline indicators are derived
from those outputs by calculation, from stated constants. **Mobility and vehicle
to grid, and landscape solar, are not simulations at all**: they are separate
fixed calculation chains, marked Preliminary everywhere they appear, and sections
6.8 and 6.9 set out exactly what each one does. Any sentence anywhere that says
every displayed number came out of EnergyPlus is wrong, and this section is the
one that governs.

**Where that project is.** It is a second repository, `idf_reader`, and every
part of it a maintainer needs is version controlled and pushed. Earlier versions
of this guide said the simulation code, the input models and the raw outputs
were "outside, on a personal machine". **That was wrong, and it understated the
handover badly.** They are in a repository, and that repository already carries a
second remote pointing at CHV's own GitHub account.

| | Where it is | Contents |
|---------------|---------------------------------------|------------------------------------------------------------------|
| **Methodology** | ✅ **In the website repository**, `docs_methodology/` | Building sources and modelling assumptions, the Canadian code transformation, the efficiency measure catalogue, the solar model, the campaign specification, the validation tables |
| **Simulation code** | ✅ **In the `idf_reader` repository**, branch `main` | The EnergyPlus toolkit: the appliers, the injector, the neighbourhood registry, the run harness. The Python modules at the repository root |
| **Input models** | ✅ **Same repository** | **4,655 IDF files** tracked, including the prototype models and the merged neighbourhood models, under `Content/`. **33 weather files** under `Content/WeatherFiles/`, the Canadian CWEC2020v2 files among them |
| **Raw outputs** | ✅ **Same repository** | **12,734 tracked files** under `outputs/`, and **3,451 CSV files** in total, the per building results the master CSVs were built from |

**The simulation repository, in full.**

| Item | Value |
|-------------------------|-----------------------------------------------------------------------------------------------|
| Repository | `github.com/orcunkoraliseri/idf_reader` |
| Branch | `main` |
| Tracked files | **19,701** |
| Second remote | `github.com/CarolineHVermette/LMN-Desktop`, on CHV's account |
| State on 2026-08-24 | Local `main`, `origin/main` and **the remote on CHV's account all agree.** It was two commits behind that morning, `5a1ee23b` against `ee32e462`, and was pushed the same afternoon |

**What is not in that repository, and why it still matters.** The working
directory on the machine is roughly 500 GB, of which the repository is a small
part. The bulk is untracked: `0_BEM_Setup` at about 257 GB and `tmp` at about
197 GB. **Most of it is intermediate run space, but not all of it.**
`0_BEM_Setup/SimResults_neighbourhoods/`, about 252 GB, holds the raw
neighbourhood campaign runs, and those exist in one copy on one machine. They are
not needed to re run the campaign, and they are the only record of the runs that
produced the published numbers. **Section 13.2 sets out the four classes and what
would be lost**; archiving that folder is item A5 of the 2026-09-09 closeout
checklist and is not done. Nothing of the true scratch belongs in a repository,
and none of it belongs in the website repository, which serves GitHub Pages and
is capped at 1 GB.

**So the transfer that was called T12 was smaller than this guide claimed, and
it is done.** It was never a copy of half a terabyte. It was one push to bring
CHV's remote up to date, and that push went out on 2026-08-24. What remains is
her confirmation that she can read both repositories.

### 6.1 EnergyPlus models

| Item | Value |
|-----------------------------------------|-------------------------------------------------------------------------------|
| Engine | **EnergyPlus 22.1.0** for the campaign that produced this website's data |
| Version pinning | Each source model is pinned to the version it was authored for, detected from its own `Version` field. Pinning one engine across a mixed set fails within a second with fatal errors |
| Campaign, seven climate arms (five published, Zone 8 and ASHRAE) | `option_9_j_20260707_v2` |
| Campaign, corrected Montreal | `option_9_qc1983nu_20260807_all35` |
| Both recorded in | `LMN_CONFIG.dataCampaign` |

### 6.2 Building prototypes

| Source | Count | Used for |
|------------------------------------------------------|--------:|---------------------------------------------------------|
| ASHRAE 90.1-2022 DOE and PNNL commercial prototypes, Buffalo NY base form | 16 | Commercial, mixed use, institutional |
| IECC 2024 single family, Climate Zone 6A, three variants | 3 | Housing |
| ASHRAE 90.1-2019 data centre prototypes | 2 | Data centre neighbourhoods |
| OpenStudio and DOE supplementary buildings | 7 | College, Supermarket, Laboratory, Tall, SuperTall, two small data centres |
| Project developed near zero energy retail | 1 | A high performance archetype not covered by the standard sets |

Three prototypes are used at **50 per cent floor area** to fit neighbourhood
plots: Primary School, Secondary School and Warehouse. Full detail:
`docs_methodology/BEM/BEM_methodology.md` section 3, and
`docs_methodology/BEM/Resizing_methodology.md`.

### 6.3 Weather files

**Every published climate arm is driven by a Canadian weather file.** The five
published arms each use the CWEC2020v2 file of their representative city, named
on the result page and in the assumptions block of the tool itself. The 33
weather files are tracked in the simulation repository under
`Content/WeatherFiles/`.

| Published climate arm | Weather file |
|-----------------------------------|-------------------------------------------------------------------------------------|
| Vancouver, NECB Zone 4 | `CAN_BC_Vancouver.Intl.AP.718920_CWEC2020v2.epw` |
| Toronto, NECB Zone 5 | `CAN_ON_Bishop-Toronto.City.AP.712650_CWEC2020v2.epw` |
| Montreal, NECB Zone 6 | `CAN_QC_Montreal-Trudeau.Intl.AP.716270_CWEC2020v2.epw` |
| Winnipeg, NECB Zone 7A | `CAN_MB_Winnipeg-Richardson.Intl.AP.718520_CWEC2020v2.epw` |
| Fort McMurray, NECB Zone 7B | `CAN_AB_Fort.McMurray.AP.716890_CWEC2020v2.epw` |

**A note on the prototype file names.** The DOE and PNNL prototype library
contains no Canadian city, so the American prototype names survive inside the
file names of the Canadian runs. **The name records the geometry the model
started from, before the Canadian code transformation of section 6.4 was
applied. The weather file that drove the simulation is the Canadian one listed
above.** Full rationale, for a maintainer who needs it:
`docs_methodology/BEM/ClimateZone6ASelection_Reason.md`.

### 6.4 The Canadian transformation

Every US prototype is converted to the Canadian codes before simulation.

| | Commercial, institutional, industrial | Housing |
|------------------------------------|-----------------------------------------|-------------------------------------------|
| Code | **NECB 2017** | **NBC 9.36** |
| Wall U cap, Zone 6 | 0.247 W/m2K | NBC 9.36 table, wood frame |
| Roof U cap, Zone 6 | 0.183 W/m2K | NBC 9.36 table |
| Window U cap, Zone 6 | 1.90 W/m2K | 1.60 W/m2K |
| Air tightness | 0.25 L/s per m2 at 75 Pa | 2.5 air changes per hour at 50 Pa |
| Lighting power density | Clamped by space type, NECB Table 4.2.1.6 | Not clamped, governed by EnerGuide labelling |
| HVAC efficiency floors | NECB section 5.2 minimums | Not clamped, same reason |
| Internal loads and schedules | **BTAP** Canadian occupancy, plug load and thermostat schedules | Prototype native |

Every clamp uses **skip when better**: a component that already meets the
Canadian cap is left untouched. A US prototype that was already better than
NECB therefore shows no change from the transformation. That is correct
behaviour, not a bug. Full detail:
`docs_methodology/BEM/CAN_transformation.md`.

### 6.5 Energy Efficiency Measures

The website's five rungs are the campaign's scenario tags. The mapping is
recorded in `LMN_CONFIG.eemCampaignTags` so a rung can always be traced back.
The Baseline rung is a code-compliant reference case, a new neighbourhood built
to NECB 2017. It is not a survey of existing buildings and it is not the current
condition of any real neighbourhood.

| Website rung | Campaign tag | Contains |
|--------------------------|----------------------------|------------------------------------------------------------------|
| Baseline (reference case) | `EEM_J_DEFAULT` | Code-compliant reference case as designed. Native solar only |
| + Envelope | `EEM_J_ENVELOPE` | High performance opaque assemblies, triple glazing U 0.85 SHGC 0.40, foundation and slab insulation in the cold zones, infiltration reduced to a quarter |
| + Envelope, heat pump | `EEM_J_ENV_HVAC` | Adds a cold climate air source heat pump, cold climate performance curves, inverter cooling, per zone units in housing, on demand defrost, backup lockout |
| + Envelope, heat pump, hot water | `EEM_J_ENV_HVAC_DHW` | Adds a transcritical CO2 heat pump water heater, stratified tank, outdoor air intake, off peak boost, R-25 jacket |
| + Envelope, heat pump, hot water, lighting, equipment and cooling | `EEM_J_ENV_HVAC_DHW_EEM4` | Adds automated blinds, daylight dimming, LED lighting, occupancy trim, ENERGY STAR plug loads, gas appliance electrification in housing |

Each rung is a **strict superset** of the one below, which is why each names its
whole package rather than only what it adds. The provisional label that called
the last rung a "deep retrofit" was wrong and was corrected: it adds lighting,
equipment and cooling, not a deeper envelope. Measure by measure catalogue, with
the published reference behind each measure and the buildings it is skipped on:
`docs_methodology/EEM/EEM_setup.md`.

### 6.6 The solar model

Two tracks:

| Track | Behaviour |
|-------------------|-----------------------------------------------------------------------------------------------------|
| Baseline | Whatever solar the source prototype ships with. **Zero for every Canadian baseline**, since neither NECB 2017 nor NBC 9.36 ships native solar |
| Every other rung | A geometry aware injector sizes an array from the actual roof |

| | Pitched roofs, four house neighbourhoods | Flat roofs, the other thirty one |
|----------------------------------------|------------------------------------------------|--------------------------------|
| Neighbourhoods | RC-R, RC-D, RC-ML, RC-T | All others |
| Mounting | Flush on the south facing roof face | Fixed open rack |
| Tilt | Follows the roof pitch | 45 degrees, facing south |
| **Panel efficiency** | **23 per cent** | **23 per cent** |
| **Active fraction of the reference surface** | **0.85 of the south roof face** | **1.0 on the rack** |
| Ground coverage ratio | **Does not apply** | 0.40 |
| System losses | 14 per cent | 14 per cent |
| Inverter efficiency | 96 per cent | 96 per cent |

**Corrected on 2026-08-24.** This table previously read 18.65 per cent for flat roofs
and 20 per cent of aperture for pitched. **Neither produced a number in this tool.**
Every published PV value came from the Tier 3 injector at a **panel** efficiency of
0.230, fixed in `BEM_utils/pv_tier3.py` line 50 and selected in `main_BEM.py` line 757.
The 18.65 per cent is a **cell** efficiency from the Tier 1 injector, retired on
2026-05-29, sitting behind an active fraction of 0.80. The 20 per cent is a **module**
efficiency of aperture area behind a 0.90 fraction, quoted in the PV methodology as a
literature reference. **Comparing the two without their active fractions compares a cell
with a module**, which is why the difference never closed. On the surfaces actually
used: pitched, 0.230 x 0.85 gives 19.55 per cent of the south roof face; flat, the cells
fill a 45 degree rack whose area is the roof area times a ground coverage ratio of 0.40
divided by cos 45. **No simulation was re-run and no stored value moved.** Only the
assumption printed beside the results was wrong.

Group membership is not guessed: the four are exactly the neighbourhoods whose
solar ratio falls in the 1.68 to 1.73 band that the 2026-05-29 south face only
fix explains. RS-S has an 18.8 degree mean roof tilt but sits in the flat roof
band and the pipeline treats it as flat.

**The rooftop figure is identical on every rung, by design.** The injector sizes
the array from the roof, and no envelope or heat pump measure changes the roof.
The page says so, because without that sentence a user clicking through the
ladder sees a frozen number and reasonably concludes the page is broken.

**Snow cover is not modelled.** Rooftop solar is optimistic by roughly 10 to 15
per cent in Zone 7A, 15 to 20 per cent in Zone 7B and 20 to 25 per cent in Zone
8. The numbers are not changed; a note is shown in those three zones. Full
model: `docs_methodology/PV/PV_methodology.md`.

### 6.7 Facade solar

Tested upstream on **three single buildings, Montreal only**. No neighbourhood
level facade result exists. It is therefore restricted to the nine Montreal
neighbourhoods containing one of those three archetypes, labelled preliminary,
and **excluded from the totals**. Outside those nine the card is greyed with a
badge reading "Montreal only" and a line saying why.

### 6.8 Mobility and vehicle to grid

**Not a simulation.** A fixed calculation chain: households x vehicles per
household x (daily charging demand / charging efficiency), where charging
efficiency grosses the demand up (`demand = households x 1.5 x (15 / 0.90)`),
it does not reduce it. The whole of Layer 3 is marked **Preliminary** in the
interface and in this guide.

On disk, the six calculation values are the default arguments of
`Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py`. The equations
in that file are numbered 12 to 18, so they were transcribed from a
document whose equations 1 to 11 came first. **That document is identified,
2026-08-31:**

> Hachem-Vermette, C. (2025). Designing energy-positive neighborhoods: a modular
> framework for integrated planning and policy guidance. *Energy Reports*, **14**,
> 4492 to 4507. **Section 2.4**, equations **12 to 18**. Local copy:
> `docs_implementation/documentation-revisions/Resources/1-s2.0-S2352484725006365-main.pdf`.

**The match is exact, symbol for symbol**, for all seven equations, and
**equations 1 to 11 of the paper are the photovoltaic, district heating and
heat pump chain**, which is why the electric vehicle block starts at 12. The
earlier bibliographic search, sixteen publications with four read in full text,
did not reach it and is kept for the record in
`docs_implementation/documentation-revisions/DeepResearchPrompts/responses/RT02_chv_ev_v2g_source_paper.md`.
The 15 kWh per EV daily demand carries a stated basis in `Templates/NUS_EV.csv`,
a 200 km daily range, and section 2.4 of the paper states the same figure and
cites Dalla Chiara et al. (2019). Dr. Hachem-Vermette's instruction of
2026-08-30 was to use her paper's assumptions as the provisional basis, and the
paper is now named. As noted in her instruction of 2026-08-30, the V2G
methodology, efficiencies and losses will require further development and
validation in future work.

**Both method flags are now closed, by CHV's decisions of 2026-09-09** (her
closeout checklist, items E1 to E3). Her ruling on the module as a whole comes
first: **the paper-based chain is retained as a provisional basis for V1**, the
whole of Layer 3 stays marked Preliminary, and the methodology, the efficiencies
and the loss assumptions are named as requiring future development and
validation. Neither flag is redesigned now. Both become stated V1 limitations:

- **f1, the discharge efficiency: closed 2026-09-09.** Her decision: *"Do not
  claim that the 90 per cent numeric value comes from the paper. It is a
  provisional code assumption. The current export equation does not apply a
  discharge-efficiency term; state this transparently as a V1 limitation and
  future validation item rather than redesigning the module now."* The 90 per
  cent therefore stays where it is, is not applied, and is a limitation of V1,
  not an open question.
- **f2, the stationary storage share: closed 2026-09-09.** Her decision: retain
  the 50 per cent provisionally because it is the paper's own value, state that
  it is an assumption and not a validated universal value, and treat the
  resulting storage loss figure as Preliminary and a subject for future work.

The two flags as they were recorded, and the evidence behind them, are kept
below because the reasoning is what a future maintainer needs:

- The discharge efficiency is **displayed but not applied** to the exported
  energy. The page states this rather than implying a hundred per cent
  discharge. **The paper does the same**: its equation 17 subtracts the vehicle
  to grid discharge without an efficiency term, and it never gives the battery
  efficiency a numeric value. The 90 per cent in the tool is a default argument,
  not a figure read from the paper. Whether to apply it was open flag f1,
  **closed on 2026-09-09**: it is not applied, and that is a stated V1 limitation.
- The storage loss of 5 per cent is derived from an assumed 50 per cent stationary
  storage share (`calculate_ev_scenarios.py` line 31). **That share is the
  paper's own**, written inside equation 13, and the paper sets it without
  justification: section 2.4.1 says only that a portion of the demand is routed
  through stationary storage. No literature convention sets it either. A
  candidate physical reading,
  **not confirmed and not the origin of the constant**, is that the 5 per cent
  stands in for the standby drain of a parked vehicle, 10 to 40 W continuously,
  which is 0.25 to 0.80 kWh per vehicle per day against the tool's 0.83. Whether
  to relabel the term on that basis was open flag f2, **closed on 2026-09-09**:
  the share is retained as the paper's own value, called an assumption rather
  than a validated one, and the loss it produces is Preliminary.

**Sign convention**, which must be stated in words on screen because it collides
with a common one: **positive means the grid must supply**, following the grid
delivery convention. In the net zero and positive energy district literature,
positive usually means surplus.

### 6.9 Landscape solar

Of the eight Layer 4 green infrastructure options, only one is quantified (1 of 8):

| Group | Options | Quantified? |
|----------------------------------|---------------------------------------------------------------|-----------------------|
| `infrastructure` | Green Roofs, Vertical Greening Systems, Linear Greenery, Green Spaces | **No** |
| `urbanAgriculture` | Roof Gardens, Food Gardens | **No** |
| `energyIntegrated` | PV-Green Roofs Integrated Modules | **No** |
| `energyIntegrated` | **Landscape PV** | **Yes**, and it is a fixed arithmetic chain, section 6.9, not EnergyPlus |

**Not a simulation.** A fixed land area assumption multiplied by a specific
yield. The chain, and it is now written in exactly one place:

```
20,234 m2 site          (a uniform 5 acres, by decision, for every neighbourhood)
  × 0.20 allocation  =   4,046.8 m2 allocated
  × 0.10 usable      =     404.7 m2 usable      (in series, not in parallel)
  × 0.200 kW/m2      =      80.9 kWp installed
  × 1,280 kWh/kWp    =     103.6 MWh per year
```

The uniform allocation is a project decision, not a defect, and the page says
so, because an identical value on 35 neighbourhoods otherwise reads as a bug.
The 10 per cent usable fraction is **below** the published range for fixed tilt
ground mount, 30 to 50 per cent; raising it is a redesign of the facility, not a
correction, and belongs to a later round.

### 6.10 Modelling choices held out of the public methodology

| Choice | Effect | Why it is internal |
|-------------------------|----------------------------------------------------|--------------------------------------------|
| **AirflowNetwork without distribution** at neighbourhood scale | Duct leakage is dropped. Estimated at most 5 per cent absolute effect on intensity. All neighbourhood variants use the same mode, so relative comparisons stay valid. Wall time drops roughly tenfold | It is a solver stability decision. At neighbourhood scale the duct solver goes singular in high wind weather and the run dies |
| **Ground coupling is not harmonised** | 23 of the 35 archetypes combine more than one ground boundary method inside a single neighbourhood. The split runs through the density ladder, so comparing a low density archetype against a high density one crosses a method boundary | Inherited from the source prototypes; nobody chose it. Measured worth 1.8 to 2.4 per cent of site energy on the one archetype tested under both models |
| **The ground temperature series is lagged Buffalo air temperature** | About 12 K too warm through the heating season, so heating is understated for the affected buildings. The annual mean looks correct, so an annual sanity check does not catch it | Not a project error and not a prototype error: the EnergyPlus specification prescribes exactly this. The defect is in the prescription |
| **Electrochromic and already performant glazing are preserved** | Windows that already beat the high performance target are left alone | Replacing them would raise solar gain and increase cooling by up to 54 per cent on small internally loaded buildings, and would orphan the switchable glazing control |

**How to answer a reviewer on the ground coupling today, before anything is re
run:** state the ground model per building family, state the direction of the
error, heating understated on the affected buildings, and give the measured
magnitude. Do not claim the models share identical boundary conditions across
the archetype series, because they do not. Full account:
`docs_methodology/BEM/NUs_Setup_Matrix.md` sections 3 and 6.

### 6.11 Superseded results

Five compact residential archetypes, **RC-D, RC-ML, RC-MR1, RC-R and RC-T**,
were merged upstream from a US detached house prototype rather than from the
Canadian baseline, by a silent fall through in the baseline resolver. The
upstream project fixed the code and re simulated. **For a period, the corrected
results were not imported into `js/data.js`.**

Montreal was corrected on 2026-08-10 from the corrected campaign, 800 of 800
fields verified with zero unexpected changes. The other five NECB climates have
no corrected campaign, so those 25 neighbourhood and climate pairs are withheld
on CHV's decision of 2026-08-13 not to launch a re run campaign yet. **The wording
"results under revision" was removed from the interface on 2026-08-24 at her request;
the affected cases are now simply not offered.**

**Two whole climate arms have since been withdrawn from the public tool, and neither
was deleted.** The ASHRAE arm was withdrawn on **2026-08-17**, on her point that it is a
United States reference case on a United States weather file rather than a Canadian
climate. **NECB Zone 8, Chisasibi, was withdrawn on 2026-08-24**, on her instruction
that it stay in the research database and the technical documentation without its
quantitative results being exposed. Both remain in the CSV set and in this guide. **Five
arms and 154 neighbourhood and climate pairs are published.** Restoring either one is a
change in `js/config.js`, not a re-run.

**The lesson for section 8.** An update procedure that only answers "how do I
change a number" is not enough. It must also answer **"how do we know the
website is showing the current run"**. That is what the campaign stamp in
`LMN_CONFIG.dataCampaign` and the Results Data Map in section 5 are for.

### 6.12 Naming and organisation of the simulation files

**Status:** **In progress** *(pattern settled on 2026-08-27; rename pass has not been run)*

To ensure that a future researcher can identify the NU/building, climate, envelope/scenario,
IDF name, weather file and corresponding outputs without opening the file, standard naming
patterns were settled on 2026-08-27 (recorded in
`docs_implementation/documentation-revisions/Submission/previous/PROPOSAL_Simulation-File-Naming_v0.3.md`).

#### The two naming patterns

**1. Building models:**
```
{library}_{prototype}_{source}_{code}_{zone}_{vintage}_{engine}.idf
```
- `library`: Prototype library (`ASHRAE901`).
- `prototype`: Building type (`ApartmentHighRise`, `OfficeMedium`, `Warehouse`, etc.).
- `source`: Source prototype location the geometry and loads came from (`Buffalo`), kept for provenance.
- `code`: Code applied (`NECB17`, `QC1983`, `ASHRAE901`).
- `zone`: Climate zone (`Z4`, `Z5`, `Z6`, `Z7A`, `Z7B`, `Z8`, `US`), mapping directly to Canadian CWEC weather files.
- `vintage`: Envelope vintage (`STD2022`, `1983`).
- `engine`: EnergyPlus engine version (`v221`).

*Example:* `ASHRAE901_ApartmentHighRise_Buffalo_NECB17_Z6_STD2022_v221.idf`

**2. Neighbourhood models:**
```
NU_{code}_{climate}_{scenario}_{engine}.idf
```
- `NU`: Fixed prefix indicating a neighbourhood model.
- `code`: Neighbourhood unit archetype code (`CC-B`, `RC-HR2`, `MU-C1`, etc., 35 total).
- `climate`: Combined code and zone (`NECB17-Z6`, `QC1983-Z6`, `ASHRAE901-US`), mapping to CWEC weather files.
- `scenario`: Efficiency scenario rung (`BASE`, `HPERF`, `HPERF-HP`, `HPERF-HP-DHW`, `HPERF-HP-DHW-LEC`).
- `engine`: Engine version (`v221`).

*Example:* `NU_CC-B_NECB17-Z6_BASE_v221.idf`

#### Recovery of the six fields

| Required field | How it is recovered from the model name and mapping |
|--------------------------------|----------------------------------------------------------------------------------------|
| **NU / Building** | Recovered directly from `{code}` in neighbourhood models or `{prototype}` in building models |
| **Climate** | Recovered directly from `{zone}` or `{climate}` |
| **Envelope / Scenario** | Recovered from `{vintage}`/`{code}` in building models and `{scenario}` in neighbourhood models |
| **IDF file name** | Stated explicitly as the model file name |
| **Weather file** | Recovered by mapping the `{zone}` code to the standard CWEC weather file table below |
| **Corresponding outputs** | Recovered via the unique timestamped campaign run folder (e.g. `{NU}_{EEM}_{TAG}_{TIMESTAMP}`) referenced in `LMN_national_NU_master.csv` |

#### Climate zone to weather file mapping

| Zone code | Representative city | Weather file |
|---------|------------------------------------------------------|---------------------------------------------------------|
| `Z4` | Vancouver (NECB Zone 4) | `CAN_BC_Vancouver.Intl.AP.718920_CWEC2020v2.epw` |
| `Z5` | Toronto (NECB Zone 5) | `CAN_ON_Bishop-Toronto.City.AP.712650_CWEC2020v2.epw` |
| `Z6` | Montreal (NECB Zone 6) | `CAN_QC_Montreal-Trudeau.Intl.AP.716270_CWEC2020v2.epw` |
| `Z7A` | Winnipeg (NECB Zone 7A) | `CAN_MB_Winnipeg-Richardson.Intl.AP.718520_CWEC2020v2.epw` |
| `Z7B` | Fort McMurray (NECB Zone 7B) | `CAN_AB_Fort.McMurray.AP.716890_CWEC2020v2.epw` |
| `Z8` | Chisasibi (NECB Zone 8; **withdrawn 2026-08-24** on Dr. Hachem-Vermette's instruction) | `CAN_QC_La.Grande.Riviere.AP.718270_CWEC.epw` (Proxy: Chisasibi has no CWEC station; Zone 8 uses the La Grande Riviere / CYGL proxy, station 718270, cited in `idf_reader/docs_DONE/docs_LMN_web/LMN-1983/DeepResearch/buildingNECB4-8/00_MASTER_BRIEF.md` lines 40, 50. Note that the file vintage is `_CWEC`, not `_CWEC2020v2`) |
| `US` | Buffalo (ASHRAE reference; **withdrawn 2026-08-17** as US reference case on US weather file) | `USA_NY_Buffalo-Greater.Buffalo.Intl.AP.725280_TMY3.epw` |

#### Four-step run order for execution

The rename pass touches 4,655 input models outside this repository and must be executed in the following strict order:
1. **Archive raw campaign output:** Archive the raw campaign output (`0_BEM_Setup/SimResults_neighbourhoods/`, 27 campaigns, 3,169 run folders) off the machine first, because it is the only copy.
2. **Dry run rename pass:** Run a scripted dry run over the 4,655 input models and review the diff before any files are modified.
3. **Rewrite CSV provenance paths:** In the same pass, rewrite the 2,951 provenance paths in `LMN_national_NU_master.csv`. Step 2 without step 3 breaks the provenance trail.
4. **Re-run verification checks:** Re-run existing checks and verify that published website figures remain identical.

*Note on current state:* The rename pass has not yet been executed. The patterns and procedures are settled for future execution.

---

### 6.13 The Simulation Model Index

**Written 2026-09-09, closeout item A9.** Section 6.12 tells you how to read a
file name. **This is the file that means you do not have to.** One row per
simulation run behind the published tool, searchable in any spreadsheet:

`docs_implementation/documentation-revisions/Submission/submission1/N-LENS_Simulation-Model-Index.csv`

**4,116 rows, 35 neighbourhoods, 7 climate and envelope arms**, built
2026-09-09. Nineteen columns, and every one of them comes from a source rather
than from a judgement:

| Column | What it answers | Where it comes from |
|--------------------------|--------------------------------------------------------------|--------------------------------|
| `nu_code`, `nu_family` | Which neighbourhood | The master CSV |
| `component_buildings`, `component_count`, `source_prototypes` | What it is made of, and which prototype IDF each part came from | `neighbourhood_registry.py`, upstream |
| `code_reference` | NECB 2017, ASHRAE 90.1-2022, or the Quebec 1983 reference envelope | The arm |
| `climate_key`, `climate_zone`, `climate_city`, `weather_file` | Which climate, and **the exact weather file** | `LMN_CONFIG.climates`, the tool's own single source |
| `scenario_tag` | Which rung of the ladder | The master CSV |
| `energyplus_version` | 22.1 | Section 9.3 |
| `campaign_id` | Which campaign folder holds the run | Parsed out of the provenance path |
| `idf_path`, `output_path` | The model and its outputs on disk | The master CSV |
| `n_severes` | Whether EnergyPlus reported severe errors on that run | The master CSV |
| `provenance_complete` | Whether this row can be traced to a model and an output folder | Computed |
| `publication_status` | published, withheld with its defect reference, or withdrawn | `LMN_CONFIG.dataGaps`, `withdrawnClimates`, and `NEIGHBOURHOODS[].envelope` |
| `source_master_csv` | Which master CSV the row was read from | The build |

**What the index says about the state of the evidence, and it is worth reading
before the rename pass of section 6.12 is run:**

| | Rows | |
|-----------------------------|-----------|--------------------------------------------------------------------------------|
| Published | **3,309** | Reachable in the public tool |
| Withheld | **315** | 304 on DBG-028, the five compact residential archetypes; 11 on DBG-027 |
| Withdrawn | **492** | The ASHRAE arm, research only |
| **Provenance complete** | **2,951** | Both an IDF path and an output path. **This is exactly the count of provenance paths section 6.12 says the rename pass has to rewrite**, arrived at independently |
| Provenance incomplete | 1,165 | The Quebec 1983 arm records an output path but no IDF path, and 45 corrected Montreal rows record neither |

**Rebuild it** after any campaign import, in two commands from the repository
root:

```
node docs_implementation/documentation-revisions/Submission/tools/dump_publication_state.js > pubstate.json
python docs_implementation/documentation-revisions/Submission/tools/build_simulation_model_index.py pubstate.json
```

The first executes `js/config.js` and `js/data.js` and writes out what the
website itself considers published; the second joins that to the master CSVs and
the upstream registry. Standard library only, no EnergyPlus, and it does not
touch the 252 GB campaign store.

---

## 7. Processing scripts

The path from raw simulation output to the data the website reads. **A result is never typed into `js/data.js` or into a page. It is produced by the pipeline, or it does not change (`js/data.js` is generated, and hand edits are silently discarded on the next run).**

```
  EnergyPlus campaign  (outside this repository)
      master_summary.csv per climate arm
            │
            ▼
  Templates/<dated folder>/
            │   Templates/scripts/convert_master_csv.py
            ▼
  Templates/CAN_Z4.csv … CAN_Z8.csv, ASHRAE.csv, PV_generation.csv
            │   Templates/scripts/patch_data_js.py
            ▼
  js/data.js
            │   Templates/scripts/check_keys.py
            │   Templates/scripts/test_data_flow.py
            ▼
  the website
```

| Script | Input | Output | How to run |
|--------------------------|----------------------|------------------------------------|------------------------------------|
| `convert_master_csv.py` | A campaign master CSV under `Templates/<date>/` | A pivoted per climate CSV in `Templates/` | `python Templates/scripts/convert_master_csv.py` from the repository root |
| `patch_data_js.py` | The per climate CSVs | Patches the generated structures into `js/data.js` in place | `python Templates/scripts/patch_data_js.py` |
| `check_keys.py` | `js/data.js` | Reports missing or unexpected keys | `python Templates/scripts/check_keys.py` |
| `test_data_flow.py` | `js/data.js` and the CSVs | End to end consistency check | `python Templates/scripts/test_data_flow.py` |

The scripts use only the Python standard library: `csv`, `json`, `os`, `re`,
`sys`. There is no requirements file because there are no third party
requirements.

### 7.1 Manual steps

**This is the highest risk part of the handover.** Each of these is done by
hand today, and each has caused a defect.

1. **Choosing which campaign folder to import.** Nothing enforces that the
   folder you point at is the current run. This is exactly what produced the
   superseded results in section 6.11. Record the campaign identifier in
   `LMN_CONFIG.dataCampaign` as part of the import, every time.
2. **Importing the floor areas.** `GFA_DATA` and `CONDITIONED_AREA_DATA` live
   in `js/config.js` since 2026-09-09. They come
   from a validation CSV, not from the master CSV, and are copied in by hand.
   They must be taken from the **same** file, columns `area_gfa` and
   `area_cond`, so they cannot drift apart.
3. **Importing the composition strings and building counts.** Taken from the
   merged sector listing of the campaign, by hand.
4. **Updating the neighbourhood and climate support lists.** Which arms
   completed for which neighbourhood is a manual edit to
   `NEIGHBOURHOODS[].envelope[]`, and a manual entry in `LMN_CONFIG.dataGaps`
   for anything withheld.
5. **Bumping the `?v=` cache parameter.** Manual, on **65 tags across 15 pages**,
   and if it is forgotten the deploy appears to do nothing. Two verification
   suites assert that every page carries the same stamp, so a page left behind
   fails a check rather than going out quietly.
6. **The mobility and landscape solar tables** are not produced by this pipeline
   at all. They are calculated separately and entered by hand.

---

## 8. Update procedures

> **GOVERNING RULE: Results are updated through the pipeline, never on the page.**
> A result is never typed into `js/data.js` or into a page HTML file. It is produced
> by the pipeline from simulation outputs, or it does not change.
> `js/data.js` is generated: any hand edit is silently discarded the next time the pipeline
> runs.
>
> **The distinction:** A **result** comes from the pipeline; a **label describing a result**
> is edited in `js/config.js`. Both appear on screen, but only the label may be typed by hand.

**What you want to change, and where it is done.** Each row names the procedure
below, and each procedure names the files. They all end the same way: a change
reaches the live tool only through section 11, and until that is done it exists
on one machine.

| What you want to do | Procedure | What is edited |
|------------------------------------------------|-------------|----------------------------------------------------------|
| Add or update simulation results | 8.1 | `Templates/`, then pipeline scripts, which write `js/data.js`, bump `?v=` (11.1), publish (11) |
| Add a neighbourhood or a typology | 8.2 | upstream simulation, pipeline, `NEIGHBOURHOODS` and data tables in `js/data.js`, `Content/`, bump `?v=` (11.1), publish (11) |
| Add a climate or a location | 8.3 | upstream simulation, pipeline, `js/config.js`, `layer1_NUs_selection.html`, bump `?v=` (11.1), publish (11) |
| Add an efficiency scenario | 8.4 | upstream simulation, pipeline, `LMN_CONFIG.eemLabels`, Layer 2 selection page, bump `?v=` (11.1), publish (11) |
| Add a technology option | 8.5 | `LMN_CONFIG.selectionLabels`, bump `?v=` (11.1), publish (11) |
| Update an image or a 3D model | 8.6 | `Content/`, bump `?v=` (11.1), publish (11) |
| Modify a simulation assumption (envelope, COP, infiltration, weather, schedules) | 8.7, 8.1 | upstream model in `idf_reader`, `Templates/`, pipeline scripts, `js/data.js`, bump `?v=` (11.1), publish (11) |
| Modify a post-processing assumption (the EV chain, the LPV chain, a solar efficiency) | 8.7, 15.0 | the calculation source, re-run it, regenerate its block in `js/data.js`, bump `?v=` (11.1), publish (11) |
| Modify a display assumption (unit labels, basis captions, vocabulary, notes) | 8.7 | `js/config.js`, bump `?v=` (11.1), publish (11) |
| Update text, a table or a figure shown in the interface | 8.8 | `js/config.js` for a label or quoted number, page HTML for fixed prose, `Content/` for assets, bump `?v=` (11.1), publish (11) |
| Add a layer or a module, or connect another tool | 8.9 | a new page, a new script in `js/`, `js/sidebar.js`, linking page, bump `?v=` (11.1), publish (11) |
| Change how the interface looks (colours, fonts, cards/buttons, layout, charts) | 8.10 | `css/styles.css` tokens, page HTML, `js/sidebar.js`, bump `?v=` (11.1), publish (11) |

### 8.1 Update an existing neighbourhood's results

**Status:** **To be tested** *(closes in the Appendix G test, task 6)*

The update process follows a strict five-stage chain:
1. **Simulation:** Run the EnergyPlus simulation campaign upstream (in `idf_reader`) and obtain the campaign master CSV.
2. **`Templates/`:** Place the master CSV under `Templates/<YYYY-MM-DD>/`.
3. **Pipeline script:** Run `convert_master_csv.py` to create per-climate CSVs, then run `patch_data_js.py`.
4. **`js/data.js`:** The pipeline updates `js/data.js`. Verify with `check_keys.py`, `test_data_flow.py`, and stage verification scripts.
5. **`?v=` bump and publish:** Bump the cache parameter across pages (section 11.1) and publish to GitHub (section 11).

#### Step by step procedure

1. Obtain the campaign output and note its identifier.
2. Place the master CSV under `Templates/<YYYY-MM-DD>/`.
3. Run `convert_master_csv.py`, then `patch_data_js.py`.
4. Update `LMN_CONFIG.dataCampaign` with the new identifier.
5. Run `check_keys.py` and `test_data_flow.py`.
6. Run the stage verification scripts under
   `docs_implementation/documentation-revisions/Results/` with `node`.
7. Open the affected neighbourhood on the Layer 2 breakdown **and** on the final
   summary. Those two pages read the same stored cell by different routes, so
   disagreement between them is the fastest signal that something is wrong.
8. Bump `?v=` and publish, section 11.

**Never hand edit a value in `js/data.js` to correct it.** The next import
overwrites it and nothing records that it was ever changed.

### 8.2 Add a new neighbourhood

**Status:** **To be tested** *(Appendix G task 5)*

1. Simulate it upstream across the climate arms you intend to publish.
2. Import through 8.1, which will add its rows to `ENVELOPE_ENERGY_DATA`.
3. Add an entry to `NEIGHBOURHOODS` with: `code`, `conceptId`, `usage`,
   `context`, `density`, `layout`, the `envelope` list of supported climate
   keys, `content`, `buildingCount`, `image`, `buildings`.
4. Add its floor areas to `GFA_DATA` and `CONDITIONED_AREA_DATA` in `js/config.js`,
   from the same validation file.
5. Add its column to `LPV_DATA.columns` and a value in every row.
6. Add its entry to `EV_V2G_DATA` for both mobility scenarios.
7. Add the neighbourhood image under `Content/Images_Neighbourhoods/` and the 3D
   model under `Content/Glb_Models/`, **matching case exactly**.
8. Decide its solar roof group: if it is a pitched roof archetype, add it to
   `LMN_CONFIG.pv.roofGroups.pitched.nus`.
9. Run every check in 8.1 step 5 to 7.

### 8.3 Add a new climate zone

**Status:** **To be tested** *(written from the code, not rehearsed)*

1. **Upstream simulation:** Simulate the full 35 neighbourhood set for that zone upstream in EnergyPlus using the appropriate CWEC weather file before modifying configuration.
2. Import, which creates a new envelope key in `ENVELOPE_ENERGY_DATA`.
3. Add the zone to `LMN_CONFIG.climates` with its key, city, zone and standard.
4. Add its display name to `LMN_CONFIG.envelopeLabels`, **and** its high
   performance twin.
5. Add both keys to `LMN_CONFIG.baselineEnvelope` and `LMN_CONFIG.climateOf`.
6. Add the zone's card to `layer1_NUs_selection.html`.
7. Add the climate key to `NEIGHBOURHOODS[].envelope[]` for every neighbourhood
   that has a completed run, and add a `dataGaps` entry for any that does not.
8. If snow loss is material in that zone, add a `LMN_CONFIG.pv.snowCoverNote`
   entry.

### 8.4 Add a new efficiency scenario

**Status:** **To be tested** *(written from the code, not rehearsed)*

1. **Upstream simulation:** Define and simulate the new efficiency scenario rung upstream across all archetypes in EnergyPlus, and generate the master campaign outputs before creating configuration entries.
2. Import through 8.1.
3. Add its label to `LMN_CONFIG.eemLabels` and its long form to `eemDetails`.
4. Add its campaign tag to `LMN_CONFIG.eemCampaignTags`, so the rung stays
   traceable.
5. Add the rung to the Layer 2 selection screen.

### 8.5 Add a new technology option

**Status:** **To be tested** *(written from the code, not rehearsed)*

1. Add the key, display label and **explicit icon path** to the relevant group
   of `LMN_CONFIG.selectionLabels`. Check the path against the real directory
   listing, with exact case.
2. If no quantitative model exists for it, leave it disabled and give it the
   status term "Not modelled yet". Do not ship an option that accepts a click
   and changes no number: that is what facade solar did on all 35
   neighbourhoods before it was restricted.

### 8.6 Update an image or a 3D model

Replace the file, keeping the filename **byte identical including case**, and
bump `?v=` if a script references it. If the filename must change, change it in
`LMN_CONFIG.selectionLabels` in the same commit.

### 8.7 Update an assumption

Maintainers must check section 15.0 first and decide which of the three classes
the assumption belongs to: **simulation**, **post-processing**, or **display and
configuration**. The three are changed in three different places.

#### Simulation assumption (input to EnergyPlus)

If the assumption was an input to EnergyPlus (such as envelope U-values, heat pump COP,
infiltration rates, weather files, schedules, ground boundary conditions, or code vintages),
it **cannot** be changed in `js/config.js` or in this repository. Modifying a simulation
assumption requires modifying the upstream model in `idf_reader` and executing the full
update pipeline:
1. Modify the upstream model in `idf_reader`.
2. Re-run the EnergyPlus simulation campaign.
3. Re-export the campaign master CSV into `Templates/<date>/`.
4. Run the pipeline scripts (`convert_master_csv.py`, `patch_data_js.py`) to generate updated `js/data.js`.
5. Verify data integrity with test scripts (`check_keys.py`, `test_data_flow.py`, stage verifiers).
6. Bump `?v=` cache parameter (section 11.1) and publish (section 11).

Follow the complete procedure in section 8.1.

#### Post-processing assumption (input to an offline calculation, not to EnergyPlus)

If the assumption is an EV or vehicle to grid parameter, a landscape solar chain
constant, or the panel efficiency behind a shipped solar figure, **editing
`js/config.js` will not change the published number.** The number was produced by
a calculation outside the page and transcribed into `js/data.js`. The change is:

1. Edit the calculation source: `Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py` for mobility, the landscape chain for Layer 4, the upstream injector for solar.
2. Re-run it. For Layer 3 and Layer 4 that is `generate_ev_lpv_data.py`, which rewrites `Templates/NUS_EV.csv`, `Templates/NUs_LPV.csv` and the `EV_V2G_DATA` and `LPV_DATA` blocks of `js/data.js`.
3. Update the mirrored value in `js/config.js` so the caption beside the result still matches it.
4. Verify (section 10.2), bump `?v=` (section 11.1), publish.

#### Display and configuration assumption (changes no published number)

If the assumption is a floor area basis label, a unit string, the status
vocabulary, a note, or the mirrored copy of a value from either class above:

**Edit `js/config.js`. Nothing else.** Add a comment saying what changed, the date,
and which decision approved it, in the style of the comments already there. If
the value also appears literally in a page or a script, that is a defect: move
it here and have the page read it. Then bump `?v=` on affected pages (section 11.1)
and publish (section 11). **Nothing a visitor reads as a result will move.**

### 8.8 Update text, a table or a figure shown in the interface

Four kinds of thing appear on screen and they are changed in four different
places. **Decide which kind it is before editing anything.** Editing the wrong
copy is how one value came to be written in three files that then drifted apart,
which was three separate defects in this round.

**A label, a caption, a status word, a note, or a number quoted in prose.**
`js/config.js`, and nothing else. This is where `euiLabel`, `euiBasisCaption`,
`floorAreaBasisNote`, `eemLabels` and `eemDetails`, `selectionLabels`,
`notModelledLabel` and the solar notes live. The pages read them. **A number must
never be typed into a page**, section 8.7.

**A result table or a chart.** These are not edited, because they are not written
anywhere: the page's script builds them at run time from `js/data.js`. To change
what one says, either change the underlying result, section 8.1, or change the
script that lays it out, `js/energy.js`, `js/pv.js`, `js/lpv.js`,
`js/ev-v2g-breakdown.js` or `js/finish-design.js`. **Never hand edit a value in
`js/data.js`**, section 8.1.

**Fixed prose and a hand written table.** These are in the page's own HTML.
`documentation.html` is the public methodology page and carries sections A to O
with their own tables; `index.html` carries the landing text; each selection page
carries its own instructions. Edit the HTML directly. If the passage contains a
number the tool also computes, **stop**: move the number into `js/config.js` and
have the page read it, otherwise the two copies will part company at the next
import.

**A figure, an icon, a 3D model, or a reference PDF.** `Content/`, by the rule in
section 8.6: the filename stays byte identical including case, or it changes in
`js/config.js` in the same commit. The reference PDFs are under
`Content/References & Methodology/` and are linked from `documentation.html`.

Then bump `?v=` on every stylesheet and script reference you touched, in **every**
page that loads it, and publish, section 11. A stale stamp is why a corrected page
can look uncorrected in a browser that has visited it before.

### 8.9 Add a layer or a module, or connect another tool

**Status:** **To be tested** *(written from `layer4_lpv_breakdown.html`, not rehearsed)*

*The worked example is Comparison Mode, which was built this way and is held unpublished behind `LMN_CONFIG.comparisonMode.published`.*

A module here is three things and no more: a page, a script, and the state it
agrees to read. Nothing else in the system has to be told it exists.

1. **Decide what it reads.** Every page reads the same three sources: the query
   string, `neighbourhood` and `envelope`; `sessionStorage`, which carries the
   selections made in the earlier layers; and the stored results, through
   `js/data.js` and `js/config.js`. **A module that needs a number nobody has
   simulated is a simulation task first**, section 8.1, not an interface task.
2. **Create the page** by copying an existing breakdown page, for example
   `layer4_lpv_breakdown.html`. Keep its head block whole, and keep the four
   scripts in their order: `config.js`, `data.js`, `sidebar.js`, then the page's
   own script. The order is not cosmetic; the page's script assumes the other
   three have already run.
3. **Create the script** under `js/`. It must **stop rather than guess** when no
   climate has been chosen, using `LMN_CONFIG.noClimateSelected` as the existing
   pages do. No page in this tool is permitted to supply a default climate on the
   user's behalf, and the reason is recorded in `js/sidebar.js`.
4. **Wire the navigation.** The back and next buttons are ordinary links in the
   page's HTML, so add the link that reaches the new page from the page before it.
   If the module is to appear in the left sidebar, add its key to
   `buildSidebar(currentLayer, mode)` in `js/sidebar.js`, which is a chain of
   named layers rather than a loop over a list, so a new name has to be written
   in by hand.
5. **Gate it if it is not finished.** Add a flag to `js/config.js` carrying the
   reason, in the form `comparisonMode` uses, and have the entry point read the
   flag. An unfinished module ships hidden or does not ship: an option that
   accepts a click and changes no number is the defect described in section 8.5.
6. **Document it.** Add it to `documentation.html` if a stakeholder will meet it,
   and add its data path to section 5 of this guide, so its numbers stay traceable
   in the same way the existing ones are.
7. Run every check in section 8.1, steps 5 to 7, then publish, section 11.

**Connecting another tool or an external data source.** The tool is static, HTML,
CSS and JavaScript served by GitHub Pages, with no server and no build step,
section 3. There is nothing on the server side from which to call anything. Two
routes are therefore open, and **only the first has been used**:

- **Through the pipeline, which is the supported route.** Have the other tool
  write a CSV, place it under `Templates/` with its campaign date, and import it
  by section 8.1 so that its output becomes part of `js/data.js` like every other
  number. It then inherits the key checks, the data flow test and the traceability
  of section 5.
- **From the browser, which has not been done.** A module's own script can call an
  external service directly, but that introduces a network dependency, a failure
  mode on pages that currently have none, and a cross origin requirement, and it
  puts a displayed number outside the provenance chain of section 6.0. **It should
  be decided and recorded in this guide before it is written**, not discovered
  afterwards in a script.

### 8.10 Interface design

**Status:** **To be tested** *(written from codebase audit)*

Where colours, fonts, cards/buttons, layout, charts and other visual elements are
controlled.

The visual design system is centralised in `css/styles.css` using CSS custom
properties (`:root` tokens). Adjusting the interface requires modifying these
tokens and component classes rather than writing ad-hoc inline styles.

| Interface element | Where it is controlled | What must be done |
|------------|---------------------------------------------------------|---------------------------------------------------|
| **Colours** | `css/styles.css`, the `:root` block at the top: `--bg-primary`, `--text-primary`, `--accent-gold`, `--accent-amber`, `--accent-burnt`, `--accent-teal`, `--accent-sage`, the banner tokens (`--banner-*`), and the five parameter button triples (`--usage-*`, `--context-*`, `--diversity-*`, `--density-*`, `--layout-*`) | Change the token, not the individual CSS rule. A colour written into a rule instead of a token is a defect |
| **Fonts** | `--font-primary` ('Inter'), `--font-display` ('Outfit'), `--font-body` (aliased to primary). **Both faces are vendored in the repository** under `vendor/fonts/`, not loaded from Google Fonts or a CDN | Replacing a typeface requires replacing the vendored `.woff2` files in `vendor/fonts/` and updating the `@font-face` blocks at the top of `css/styles.css`, in addition to updating the token |
| **Cards and buttons** | The class families in `css/styles.css` structured by component:<br>- Selection cards: `.usage-card`, `.context-card`, `.density-card`, `.layout-card`, `.concept-card`, `.envelope-card`<br>- Result and summary cards: `.consumption-card`, `.generation-card`, `.demand-card`, `.load-card`, `.mobility-card`, `.summary-card`<br>- Layer 4 landscape PV cards: `.lpv-card--gi`, `.lpv-card--lpv`, `.lpv-card--neighbourhood`, `.lpv-card--empty`, `.lpv-header-card`<br>- Layer 3 header cards: `.ev-header-card`<br>- Card status badges: `.card-status`, `.card-status--preliminary`<br>- Parameter buttons: `.parameter-buttons`, `.ev-parameter-buttons`, `.lpv-parameter-buttons`<br>- Navigation buttons: `.nav-buttons`, `.next-button`, `.back-button`<br>- Selection and action buttons: `.nu-select-btn`, `.nu-action-btn`, `.envelope-tier-btn`, `.toggle-btn`, `.ev-toggle-btn`, `.lpv-toggle-btn`, `.initial-btn`<br>- Modal buttons: `.modal-buttons`, `.confirm-btn`, `.cancel-btn`, `.submit-btn`<br>- Comparison mode: `.comparison-mode-btn`<br>- Base cards and callouts: `.card`, `.info-box`, `.info-box--caution` | Naming convention: card classes are named after the thing they show, and modifiers use the double-dash form (e.g. `.lpv-card--gi`, `.card-status--preliminary`). Apply or extend existing class families; do not inline styles on HTML elements |
| **Layout** | The page's own HTML file, plus the navigation sidebar, which is **generated** by `buildSidebar()` in `js/sidebar.js` | The sidebar is the one layout element that is not in the page HTML; modify `buildSidebar()` to alter sidebar links or structure across all pages |
| **Charts** | Bar and legend colours come from `ENERGY_COLORS`, which lives in `js/config.js`. Chart geometry and layout are in `js/energy.js` and `js/comparison.js` | **To change a chart colour:** edit `ENERGY_COLORS` in `js/config.js`. **This was the documented exception until 2026-09-09**, when the block moved out of the generated file. Before the move it sat in `js/data.js`, where a full regeneration would have lost the edit; routine runs did not, because `Templates/scripts/patch_data_js.py` patches only `NEIGHBOURHOODS`, `PV_GENERATION_DATA` and `ENVELOPE_ENERGY_DATA` and appends to `BUILDING_IMAGES`. The exception is closed |
| **Images and 3D models** | `Content/` directory | Follow the asset update rules in section 8.6. Match filenames byte for byte |
| **After any change** | Bump `?v=` on all affected HTML pages (section 11.1) | Every interface change concludes by cache-busting affected pages and publishing (section 11) |

#### Two critical rules for interface assets

Two operational rules must be observed to prevent defects:

1. **Case sensitivity:** Local development is typically on Windows (case-insensitive file system), whereas GitHub Pages serves from Linux (case-sensitive). A file reference that differs only in case works locally but fails with a silent 404 live on GitHub Pages because `<img>` tags hide themselves on error. Always match file paths and extensions byte-for-byte in exact case.
2. **Never build a path or filename by interpolating a display label:** Never construct an asset path (e.g. icon images) dynamically from a human-readable display string. Display labels change for presentation, which silently breaks asset loading. Always define and look up explicit, hardcoded asset paths in `LMN_CONFIG.selectionLabels`.

#### Worked example: the terminology chip

Added 2026-08-31 at Dr. Hachem-Vermette's request, replacing four definition
paragraphs at the top of three pages. It is the reference pattern for any
future disclosure that should be available without occupying the page.

| Part | Where | What it does |
|---------------|-------------------------------------|--------------------------------------------------------------------|
| The content | `LMN_CONFIG.abbreviations`, `js/config.js` | Four terms, each a `short`, a `full` and a `note`. **The only place they are defined.** No page carries a copy |
| The chip | `LMN_CONFIG.termChipHtml(short)`, `js/config.js` | Returns the short form followed by a real `<button>` and a hidden panel holding the full name and the note |
| The legend | `LMN_CONFIG.terminologyLegendHtml()`, `js/config.js` | One line, the cumulative ladder rule, then the four terms as chips |
| The mount | `.js-terminology-legend`, three pages | The pages carry an empty slot and no definition text. `layer2_energy_selection.html`, `layer2_energy_breakdown.html`, `layer4_finish_design.html` |
| The styling | `.term-chip`, `.term-info-btn`, `.term-info-icon`, `.term-def-panel`, `css/styles.css` | Tokens only: `--bg-secondary`, `--border-subtle`, `--text-primary`, `--text-secondary`, `--accent-teal`, `--bg-card`, `--radius-sm`, `--shadow-card`, `--transition-fast` |

**Four rules the pattern follows, and a new one should follow them too.**

1. **A real `<button>`, never a `<span>` with a click handler.** It carries
   `aria-label`, `aria-describedby` and `aria-expanded`, is reachable by Tab,
   opens on Enter and Space, and shows a `:focus-visible` ring on `--accent-teal`.
2. **Hover and click, not hover alone.** Hover does not exist on a phone. Click
   holds the panel open until a second click, an Escape, or a click elsewhere,
   and opening one panel closes any other.
3. **The mount stays inside `try/catch`.** The verification suites run the pages
   against a stub DOM with no browser, so `js/config.js` must load in node. A
   page that cannot mount the legend must still render: the legend is an
   explanation, never a number.
4. **No new colour.** Every rule uses an existing `:root` token.

**After the change:** bump `?v=` on all fifteen root pages (section 11.1).

---

## 9. Dependencies

### 9.1 Front end

| Asset | Version | How loaded | Used by |
|--------------------|---------------|------------------------------------------------------------------|-------------------|
| Google `model-viewer` | 4.2.0 | **Vendored**, `vendor/model-viewer/`, 1,041,839 bytes, BSD-3-Clause | `3dviewer.html` only |
| Inter and Outfit | Google Fonts, taken 2026-08-24 | **Vendored**, `vendor/fonts/`, four variable `woff2`, about 180 KB, SIL Open Font License 1.1 | `css/styles.css`, every page |

**That is the complete list.** There is no D3.js and no Chart.js in the current
build. Both were used earlier and both are gone: the treemap was rewritten in
plain DOM and CSS, and the hourly charts were removed as dead code. `README.md`
says the same, corrected on 2026-09-09. Every chart, treemap and visual is drawn
by the tool's own code with plain DOM and CSS.

**The tool now calls no external host at all**, and that is recent. Until
2026-08-24 the 3D viewer loaded its library from `ajax.googleapis.com`, so all 35
models depended on a Google CDN and none drew on a restricted or offline network.
The library was vendored the same day, on the owner's decision, as `DBG-044`.
The stylesheet's font `@import` was the last remaining call and was closed as
`DBG-048`; see Appendix F.

**Both are pinned and neither updates itself.** Each carries a `README.md` beside
it recording where it came from, on what date, under what licence, and what
updating it involves. **The version is yours to move**, which is the cost of
vendoring and the reason it was a decision rather than a maintenance fix.

**One thing to watch on the 3D viewer.** The bundle names `gstatic.com`
internally, for the Draco and KTX2 decoders. **None of the 35 models needs them**:
all 35 were checked for `KHR_draco_mesh_compression` and `KHR_texture_basisu` and
none carries either, so the request never fires. **A compressed model added later
would bring that external call back.**

### 9.2 Pipeline

| Item | Version |
|-------------------|-----------------------------------------------------------------------------------------------------|
| Python | 3.x. Standard library only: `csv`, `json`, `os`, `re`, `sys` |
| Node.js | Any current version, for the verification scripts only |

### 9.3 Simulation, outside this repository

**Measured on the working machine, 2026-09-09.** Nothing here is inferred from a
`requirements.txt`, because the upstream project does not have one: these are the
versions actually installed in the environment that produced the published
campaign.

| Item | Version and location |
|----------------------------------|--------------------------------------------------------------------------------------|
| **Python** | **3.14.3**, CPython, in a `uv` managed virtual environment at `idf_reader/.venv`. Invoked in the upstream scripts as `.venv/Scripts/python.exe` |
| **Python packages, required** | `eppy` 0.5.69 (IDF object model), `pandas` 3.0.1, `numpy` 2.4.3, `matplotlib` 3.10.8, `pydantic` 2.12.5, `pytest` 9.0.2. The README's own install line is `pip install matplotlib numpy pandas eppy pytest pydantic`. **There is no `requirements.txt`, no `environment.yml` and no `pyproject.toml` in `idf_reader`; this table is the dependency record** |
| **EnergyPlus** | **22.1.0 produced the campaign behind the published data.** Three versions are installed and supported, at the fixed Windows paths `C:\EnergyPlusV22-1-0`, `C:\EnergyPlusV23-1-0` and `C:\EnergyPlusV24-2-0`. Every IDF declares its own `Version` field and `BEM_utils.config.get_ep_paths()` routes the job to the matching executable and IDD. A neighbourhood whose merged models disagree on version is rejected with `version_mismatch` |
| **Operating system** | **Windows.** The EnergyPlus paths above are hard coded as Windows drive paths, and the runner resolves `energyplus.exe`. There is a documented alternative for batch work, the Concordia Speed cluster, which runs the same jobs through SLURM and Singularity, README section "Cluster / HPC Offload" |
| **Environment variables** | None required. One optional: `BEM_MAX_PREP_WORKERS=N` overrides the neighbourhood preparation worker count, which otherwise comes from `MAX_NEIGHBOURHOOD_WORKERS = 8` in `BEM_utils/config.py`. Each preparation worker uses about 250 to 450 MB |
| **Weather data** | CWEC2020v2 for the Canadian arms, TMY3 for the withdrawn Buffalo arm. 33 files, tracked, in `Content/WeatherFiles/` |
| **Disk** | The tracked repository is modest. A full neighbourhood campaign writes tens of gigabytes into `0_BEM_Setup/SimResults_neighbourhoods/`; the existing campaign store is about 252 GB (section 13.2) |

**The website pipeline shares none of this.** The scripts in `Templates/scripts/`
use only the Python standard library, section 7. A maintainer who only updates
the website needs no EnergyPlus and no virtual environment.

### 9.4 Running the upstream simulation from a clean machine

**Written 2026-09-09, closeout item A2.** This section exists because a new HQP
must be able to reach a simulation result without asking anyone where anything
is. It is the one part of this guide that is entirely about the other
repository. **Work through it in order the first time.**

#### 9.4.1 Set the machine up

1. **Clone the simulation repository.** `git clone https://github.com/orcunkoraliseri/idf_reader`, or, once the transfer of section 14 is complete, the RHLab controlled remote, which is the same history.
2. **Install EnergyPlus 22.1.0**, to the default location `C:\EnergyPlusV22-1-0`. Install 23.1 and 24.2 as well if you intend to run models that declare those versions. **Do not install to a different path**: the routing table in `BEM_utils/config.py` looks for these exact directories.
3. **Create the environment and install the packages**, versions in section 9.3:
   ```
   python -m venv .venv
   .venv\Scripts\activate
   pip install matplotlib numpy pandas eppy pytest pydantic
   ```
4. **Check the install before running anything**: `python -m pytest tests/test_neighbourhood_registry.py`. It loads the canonical registry and fails loudly if the clone is incomplete. It needs no EnergyPlus.

#### 9.4.2 Find what you are going to run

Four registries between them answer "which model, which climate, which
scenario", and none of them is a personal note:

| What you need | Where it is |
|------------------------------------------------------|------------------------------------------------------------------|
| **Which neighbourhoods exist**, what buildings compose each one, how they are placed and rotated | `Content/neighbourhoods/neighbourhood_registry.py`, the canonical registry, about 35 neighbourhoods across the `RC-`, `RS-`, `MU-`, `CC-` and `IC-` families. **Building assignments are defined here and nowhere else** |
| **Which models exist, and for which climate arm** | `Content/00.BaselineBuildings_NUs` holds the prototype buildings. The merged neighbourhood models are foldered by arm: `00.Baseline_NUs_CAN_Z4`, `_Z5`, `_Z6`, `_Z7A`, `_Z7B`, `_Z8`, plus `00.Baseline_NUs_CAN_MTL`, `00.Baseline_NUs_CAN_MTL_1983` for the Quebec 1983 reference envelope, and `00.Neighbourhoods_US_ASHRAE` for the withdrawn Buffalo arm. **The folder is how you pick the climate arm**; the weather file is picked separately and the two must agree. The pipeline menu prints each folder with its file count on start |
| **Which weather files exist**, and which climate each one is | `Content/WeatherFiles/`, 33 `.epw` files. The zone to file mapping this tool publishes is the table in section 6.12 |
| **Which scenarios exist** and what each one adds | The EEM Journal ladder, section 6.5 of this guide and README section "EEM Retrofit Framework": `EEM_J_DEFAULT`, `EEM_J_ENVELOPE`, `EEM_J_ENV_HVAC`, `EEM_J_ENV_HVAC_DHW`, `EEM_J_ENV_HVAC_DHW_EEM4`, cumulative in that order |

#### 9.4.3 Run something, at four scales

Everything is driven from one prompt-driven entry point, `python main_BEM.py`,
whose top menu has eleven options. The four scales the checklist asks for map
onto it as follows. **Start at scale 1 and do not start at scale 4.**

| Scale | What it is | How |
|------------------|------------------------------------|------------------------------------------------------------------|
| **1. One building** | A single prototype, one weather file | Option **1**, or Option **6** with sub-option `b0` for the five rung Journal ladder on one building. It asks for the dataset (`US_ASHRAE`, `CAN_MTL`, `CAN_CLG`), lists the IDFs in that folder, and runs the tags you pick |
| **2. One neighbourhood** | The merged neighbourhood model, one climate, one scenario | Option **8**, then the sub-menu: `0` simulates the merged IDF as is, `b1` to `b4` run one Journal rung. The EPW picker lists `Content/WeatherFiles/` by number |
| **3. One neighbourhood, one climate, the whole ladder** | Five rungs, one neighbourhood, one weather file | Option **8** with sub-option `b0`, the five simulation master. This is the smallest run that produces a complete comparable ladder, and it is the right size for a test |
| **4. A full campaign** | Every saved neighbourhood, every rung | Option **9** with sub-option `b0` (`9i`, the Journal v2 master, five simulations per neighbourhood) or `d1` (`9j`, the LMN sixteen scenario factorial). **This is days of compute**, eight workers by default. The cluster path exists for exactly this, README section "Cluster / HPC Offload" |

Two behaviours worth knowing before the first run. **The version of EnergyPlus
is chosen by the model, not by you**: each IDF's `Version` field is read and
routed. **Neighbourhood runs use a different airflow mode from single buildings**,
`MultizoneWithoutDistribution`, for stability at that scale.

#### 9.4.4 Tell success from failure

**Do not read the console to decide whether a batch worked.** Every batch writes
`master_status.json` into its run folder with every planned row marked `pending`
before anything starts, then flips each row to `PASS` or `FAIL` as jobs finish.

1. **Per job:** the row's state in `master_status.json`, with a failure reason if it failed. `version_mismatch` means mixed EnergyPlus versions in one merged neighbourhood.
2. **Per run:** `eplusout.err` in the run folder. EnergyPlus reports `n_severes` and `n_warnings`, and both are carried through into the master CSV, so a run that completed with severe errors is visible without opening the folder.
3. **Per batch:** `master_summary.csv`, rendered from the status file, one row per planned simulation.
4. **A killed batch is resumable.** Re-run the same command, or rebuild the summary from the status file with `regenerate_master_report.py <batch_root>`. There is also `recover_master_report_from_csvs.py` for the case where the status file is lost but the run folders survive.

Output lands in
`0_BEM_Setup/SimResults_neighbourhoods/<campaign>/<climate>/<neighbourhood>/<run>/`,
where `<run>` is `{NU}_{EEM tag}_{TIMESTAMP}` and holds the injected IDF, the
`results/` folder, `eplusout.sql`, `eplustbl.csv` and the modified IDFs. **That
folder is the only copy of the raw evidence**, section 13.2.

#### 9.4.5 Produce and validate the master CSV

The campaign master CSV is the boundary between the two repositories: it is the
last upstream artefact and the first input the website takes.

1. The batch writes `master_summary.csv` into the campaign root. For the neighbourhood campaigns the consolidated file is `LMN_full_NU_master.csv`, at the root of `SimResults_neighbourhoods/`.
2. **Check it before it travels.** Row count against the plan; `n_severes` zero on every row you intend to publish; `idf_path` and `output_path` present on every row, because they are the provenance trail; and the EUI columns within a plausible range for the climate.
3. **Copy it into the website repository** as `Templates/<date>/LMN_national_NU_master.csv`, a new dated folder, never over an existing one.
4. **Run the website pipeline**, section 7: `convert_master_csv.py`, then `patch_data_js.py`, then `check_keys.py` and `test_data_flow.py`.
5. **Verify and publish**, sections 10.2 and 11.1.

#### 9.4.6 What this section does not cover

**The rename pass of section 6.12 has not been run.** Until it is, the file names
you meet upstream follow the historical patterns, not the settled ones, and the
recovery table in section 6.12 is how you read them. **The archive of the raw
campaign folders does not exist yet either**, section 13.2. Both are open items
on the 2026-09-09 closeout checklist, A5 to A8, and both are recorded there
rather than being quietly left out of this runbook.

---

## 10. Local testing

### 10.1 Serving the site

```bash
python -m http.server 8000
```

Then `http://localhost:8000/index.html`. **A static server is required.** Over a
`file://` address the 3D models will not load, because of browser security
rules on local files.

### 10.2 Checks before committing

1. `python Templates/scripts/check_keys.py`
2. `python Templates/scripts/test_data_flow.py`
3. The stage verification scripts under
   `docs_implementation/documentation-revisions/Results/`, run with `node`.
   They load the real `js/data.js` and `js/config.js`, run the real page logic
   against a stub DOM, and assert against the data rather than against a stored
   snapshot.
4. Walk one complete session by hand: Layer 1 through the final summary, on one
   neighbourhood and one climate.

There is no test framework and no continuous integration. Adding either would be
a genuine improvement and is not blocked by anything.

**The 21 recurring failures, out of 706 checks. A22, closed 2026-09-09.** The
line-ending assertions were the reason ten of them failed on every fresh
checkout: each asserted one fixed convention, CRLF or LF, while `.gitattributes`
normalises the working tree, so they could never pass on any machine. They now
test for **mixed** endings inside a single file, which is the defect that
actually matters, and eight of the ten pass. **The remaining 21 are not
line-ending noise and should not be read as a baseline to ignore:**

- **All 21 are checks that outlived what they asserted**, written against interface
  details from sessions 16, 17, 20 and stages 4 and 6 to 9 that later changed by
  decision. None of them is a data check, and no data check fails.
- **The two that were a real defect are gone.** `js/pv.js` mixed CRLF and bare LF,
  621 against 6, and was normalised to one convention later the same day,
  `DBG-051`. Those two checks now pass, which is the whole of the difference
  between 683 and 685.

Measured 2026-09-09, after that change: **685 pass, 21 fail, 706 total.** Anyone
rerunning the suites should compare against those three numbers and treat any new
failure as real.

### 10.3 Known differences between local and live

**Case sensitivity is the recurring trap, and it has already caused production
only failures.** Development is on Windows, which ignores case. GitHub Pages is
Linux, which does not. A path built by interpolating a display label into a
filename works locally and returns a 404 live. That is exactly what produced the
broken icons reported on the live site and not reproducible on the developer
machine.

Containment now in place: every icon path is an explicit string in
`LMN_CONFIG.selectionLabels`, sitting beside its label as an independent field
so the two cannot drift, and each is asserted against the real directory listing
by a check that walks the listing rather than asking a case insensitive
filesystem. The silent `onerror` image hiding, which made every such failure
invisible, was replaced by one console warning naming the file and a neutral
grey plate.

**Second difference: caching.** A local server sends fresh files. GitHub Pages
plus a browser will hold the old ones. Always test a deploy in a private window
or with the cache disabled.

---

## 11. Deployment

### 11.1 Publish an update

```bash
git add -u                 # NOT -A. See the two warnings below.
git status                 # read every line of it before committing
git commit -m "…"
git push https://github.com/orcunkoraliseri/LMN-tool.git main
```

GitHub Pages redeploys in one to two minutes.

**Live deployment target:** Finalising the live deployment from the supervisor-controlled repository `github.com/CarolineHVermette/LMN-Web` is **Waiting for CHV** (joint item, after CHV's trips, her email of 2026-08-30; tracked as D1, section 14.4 T7).

**Two warnings, corrected on 2026-08-24 after the first real release.**

- **Never `git add -A` here.** The working tree normally carries deletions and
  untracked work that are not meant to go out in the same commit, and `-A` sweeps all
  of them in silently. On the 2026-08-24 release the 24 site files were staged **by
  name** for exactly that reason, so that 28 pending documentation deletions could not
  travel with them.
- **`origin` has two push URLs**, the site repository and the mirror. **A bare
  `git push` writes to both.** That is sometimes what you want. Push by URL when it is
  not.

### 11.2 Before pushing

- [ ] Bump the `?v=` parameter on **every** script and stylesheet tag if any script,
      stylesheet or data file changed. **If you forget this, the deploy will appear
      to do nothing.** It is at **`?v=16`** on the published site of 2026-08-24, on
      65 tags across 15 pages. Bump all of them together: two suites assert that no
      page is left on an older stamp.
- [ ] Confirm `.nojekyll` is still present at the repository root.
- [ ] Confirm no internal working folder is being published that should not be,
      section 3.
- [ ] Confirm no token, password or key is in any tracked file.

### 11.3 Verify the deployment

1. Open the live URL in a private window.
2. Check the version and campaign stamp in `js/config.js` by viewing the file
   directly on the live site.
3. Walk one complete session.
4. Open the browser console and confirm no 404 and no icon warning. This is the
   check that catches case sensitivity failures, and it is the only one that
   does.

### 11.4 Rollback

`git revert` the commit and push. GitHub Pages redeploys the previous state. Do
not use a force push to roll back: it destroys the history that makes it
possible to see what the live site was showing on a given date.

### 11.5 Tagging convention

**Status:** **Waiting for CHV** *(joint item, after CHV's trips, her email of 2026-08-30; tracked as D3)*.

Not yet established. The recommendation is `v<tool version>-<date>`, for example
`v0.9.0-2026-08-14`, tagged at each publish, so that a released state can be
recovered by name and a report can name the exact state it describes.

---

## 12. Known issues, workarounds and unfinished features

Sourced from `docs_implementation/documentation-revisions/Debugs/DEBUG-REGISTER.md`
and this guide's own assumptions register, section 15. The classes below were built
per CHV's instruction (A24) to separate real open defects, accepted V1 limitations,
future research items and user choices, rather than mix them in one table. **They were
built from the existing record, and then confirmed against a fresh real-browser pass:
A23 was run on 2026-09-09** and is recorded in Appendix F2. That pass added three
entries to 12.1, `DBG-052`, `DBG-053` and `DBG-054`, and corrected none of the others.
**Two of those three, and one older entry, closed on 2026-09-09**: `DBG-052`, `DBG-053`
and `DBG-051` are shown below as closed rather than deleted, so that a reader holding the
earlier version can see what became of them. **`DBG-054` was half closed on 2026-09-10**,
when the missing simulations finished and their results were imported: it is repaired on
the standard building and stands as written on the high performance building, which was
never simulated for this case.

### 12.0 Open questions, in plain words

Three questions were asked in this round, and all three are answered. They are written here
without technical wording so that they can be answered without reading the rest of the
section.

1. **The Thermal Load button in Layer 2 did not change any result. Answered on
   2026-09-10: the data was added, for the standard building.** The button was asking for
   a column that had never been simulated. The simulations were commissioned on 2026-09-10
   and finished the same day, 210 runs, all 35 neighbourhoods across the six climate zones,
   and the results were imported into `js/data.js` and checked against the source file
   value by value. **The button now changes the numbers on the standard building in every
   published climate, and it still does not on the high performance building**, because
   the simulations were run against the standard archetypes only. Half of what a visitor
   can reach is repaired and half is not, 175 combinations of 350. `DBG-054` in 12.1 is the
   same account with the measurements attached, and it stays open for that reason.

2. **What should be bought for the archive? Answered at the meeting of 2026-09-10.** One
   terabyte for each project, at a ceiling of CAD 300 to 400, on a portable SSD that Mac and
   Windows both read and write. Two shop links are in the covering letter. The earlier
   recommendation, one 4 TB portable drive and two 8 TB desktop drives, is withdrawn. Nothing
   can be archived or renamed until the drive arrives, which is checklist items A5 to A8.

3. **Comparison Mode works but is hidden from visitors. Answered on 2026-09-10.** It goes
   offline rather than to review, and it is kept in the repository so that it can come back.
   `comparison.html` and `js/comparison.js` stay committed and nothing is deleted; the two
   entry points are now commented out as well, the anchor in `layer4_finish_design.html` and
   the block in `js/finish-design.js`, with `LMN_CONFIG.comparisonMode.published` left `false`
   as the record of the decision. To publish it later: uncomment both, set the flag to `true`,
   and bump the `?v=` stamp on every page in the same commit. That is checklist item A27.

### 12.1 Real open defects

Items still requiring a code, credential or upstream fix.

| Ref | Issue | Priority | State |
|-----------|------------------------------------------|--------------|-----------------------------------------------------|
| **DBG-001** | **A GitHub personal access token was embedded in the remote URLs of the working copy.** Anyone with a copy of that working directory held a live credential, for **both** repositories, because the same token stood in all three URLs | **P0, security** | 🟨 **In progress.** Half closed 2026-08-24. The credential is out of the configuration: all four URLs in the website working copy now read `https://github.com/...` with nothing before the host, and the simulation repository was already clean. A history search confirms **the token was never committed to a tracked file**, so it did not go public with the repository. **What remains is the revoke on GitHub, and it is Koral's alone**: a credential that has sat in a config file for months must be assumed seen. The token pushed on 2026-08-24, so it is the one showing *last used within the last day*. See section 14.5 |
| DBG-004 | The silent climate fallback, last seen in 16 sites across 8 files | P2, downgraded | ✅ **Closed 2026-09-09, A15. Removed, not disclosed.** The last 16 sites built the next page's link rather than a number, and each now carries an empty envelope where it carried `necb-2017`, so the page it opens states the refusal. Two things settled it: the literal is not a key of `ENVELOPE_ENERGY_DATA` at all, so it never selected Montreal, it selected nothing; and the removal was measured in a real browser rather than assumed, 7 built links on six climate-less pages, 0 naming a climate, and the same links still carrying `necb-z6` when one is chosen |
| DBG-051 | `js/pv.js` mixed line endings within itself, 621 CRLF against 6 bare LF. Found 2026-09-09 by the rewritten verification suites, and it was the only real failure among the 23 | P3 | ✅ **Closed 2026-09-09.** Normalised to 627 bare LF as a side effect of the A15 edit. The fear that it would bury the file history did not apply: `core.autocrlf` already keeps LF in the repository blob, so the recorded diff for the file is the A15 lines alone. Its two suite checks now pass |
| DBG-052 | `comparison.html` loads a charting library that was not in the repository, so the request returned 404, `Chart` was never defined, and both charts on the page were blank at every pixel. The same tag was the page's only local reference with no `?v=` stamp, and the page was the only one of fifteen with no icon link. Found 2026-09-09 by the A23 pass | P2 | ✅ **Closed 2026-09-09.** Chart.js 4.4.3 vendored to `vendor/chartjs/`, with a README stating version, licence and provenance, exactly as `model-viewer` and the two fonts are vendored; no CDN call was added. The tag now names the vendored file and carries the stamp, and the missing icon link was added with it. Measured in a real browser: 200 on the request, `typeof Chart` is `function`, no failed request and no external host on the page, and both canvases draw where they were blank. Comparison Mode itself is still gated and unpublished under A27 |
| DBG-053 | The seven card information icons on the option cards could be reached by keyboard and could not be opened by keyboard. Each is a `<span role="button" tabindex="0">` whose only opening handler is a `click` listener. Verified in both directions with real key events: they open on a mouse click, not on Enter or Space, while every popover built as a real `<button>` opens on Enter. Found 2026-09-09 by the A23 pass | P3 | ✅ **Closed 2026-09-09.** A `keydown` branch was added beside the existing `click` branch in `js/config.js`, so Enter, Space and the legacy `Spacebar` key name open the focused icon and the whole behaviour stays in one handler. Escape still closes. The `?v=` stamp moved to 26 on all 15 pages and 66 references in the same edit. Measured with real key events: 7 of 7 open on Enter, 7 of 7 on Space, 7 of 7 still take focus, and the mouse path is unchanged |
| DBG-054 | **The Thermal Load card in Layer 2 was enabled on every neighbourhood and every climate and changed no number.** Both resolvers asked for an `IAL` column, `js/energy.js` line 566 and `js/config.js` line 1707, and no cell in `js/data.js` carried one: 17 envelope keys, 595 cells, `IAL` on 0 of them. Both fell back to the baseline without saying so. Measured on 70 of 70 rows, the intensity shown after clicking the card equals the stored `DEFAULT` total, the same number the page shows with no card clicked, and the end use slices are identical to the decimal. Meanwhile the assumptions box prints "Measures applied: Thermal Load" and "Directly simulated". Found 2026-09-09 by the A23 pass | **P1** | 🟨 **Half closed 2026-09-10. The data import was done and it covers the standard building only.** The simulations the column needed were commissioned and finished on 2026-09-10: **210 runs, 35 neighbourhoods across the six NECB climate zones, zero EnergyPlus Fatals**, and they were imported into `js/data.js` as an `IAL` block on each of those 210 cells. Every one of the 210 was read back out of the loaded file and checked against the source CSV field by field, **8 fields on each of 210 rows and 0 mismatches**, with no all-zero row and no negative residual. Both resolvers now return `IAL` on those cells instead of falling back. **What remains is the other arm**: the campaign was run against the standard archetypes, so the high performance building has no `IAL` column and the card still falls back there without saying so. Measured across what a visitor can actually reach, the five published climates on both arms: **350 combinations, 175 now answer with the simulated ideal load and 175 still fall back**, all 175 of them on `high-performance-z4`, `-z5`, `-z6`, `-z7a` and `-z7b`. The way out is the same as before and now applies to one arm rather than two: run the campaign against the high performance archetypes and import it the same way, or say so on the page. **Published 2026-09-10, commit `5a956fb`, and checked against the deployed server rather than the working copy**: a real headless Chrome driven over the DevTools protocol through the live pages, 30 cases, **30 passing**, no console error and no failed request. On the standard arm the intensity shown after clicking the card changed on 25 of 25 and equalled the stored ideal load total to the decimal on 25 of 25, across all five published climates. On the high performance arm it did not change on 5 of 5 and the assumptions box still printed *"Measures applied: Thermal Load"* beside the HPerf scenario, which is the half that stands open, measured rather than assumed. See Appendix F2 |
| No register entry | The vehicle to grid discharge field is a confirmed naming and unit defect: `dischargeCapacity` in `js/data.js` holds a daily energy, and the interface unit string "10 kW / day" is not a valid unit. Confirmed in section 15.3 | Not yet triaged in the register | Open. Not applied to any published total; display only |

### 12.2 Accepted V1 limitations

Known shortfalls that stand for this release, each with the decision that closed it.

| Ref | Limitation | Decision |
|---------------|---------------------------------------|------------------------------------------------------------------|
| DBG-005 | Two conflicting solar values existed per neighbourhood upstream | ✅ **Closed for V1, 2026-09-09.** Website side resolved: the non-reproducing field was deleted and the authoritative source named. CHV's decision E4: the 23 per cent panel efficiency is accepted for V1 on the basis of the traced Tier 3 injector that produced the published outputs, and the retired 18.65 and 20 per cent tracks are kept as provenance and history, not as competing active assumptions |
| DBG-019 | Rooftop solar is optimistic by 10 to 25 per cent in the three coldest zones because snow is not modelled | ✅ **Closed for V1, 2026-09-09.** CHV's decision E5: do not re-run the V1 campaign for snow alone. The published numbers stand and the cold-climate optimism is disclosed on the page |
| DBG-028 | Five compact residential archetypes carry US prototype results in five NECB climates | ✅ **Closed for V1, 2026-09-09** (open upstream, mitigated in the website). 25 pairs withheld, declared once, filtered from the Layer 1 table, explained in a grouped box, and gated across the four pages that could otherwise print one of their numbers. **Nothing was deleted from `js/data.js`.** CHV's decision E6: no new campaign now, the combinations stay withheld and stay in the research record |
| DBG-027 | One mixed use neighbourhood has no baseline in Zone 7B | ✅ **Completed.** Resolved in website: fabricated baseline deleted, combination withheld with explanation |
| Flag f1, section 15.3 | The 90 per cent V2G discharge efficiency is displayed but is not applied by the export equation | ✅ **Closed 2026-09-09.** CHV's decision E2: not claimed as the paper's value, stated as a V1 limitation, not redesigned now |
| Flag f2, section 15.3 | The 50 per cent stationary storage share is the only unsourced constant in the Layer 3 chain | ✅ **Closed 2026-09-09.** CHV's decision E3: retained provisionally because it is the paper's own figure, stated as an assumption rather than a validated value; the resulting storage-loss figure is Preliminary |
| Facade solar, section 12.3 | Restricted to the nine Montreal neighbourhoods holding one of the three building types it was tested on, labelled Preliminary, excluded from the neighbourhood balance | Built and shown, deliberately limited. The restriction is asserted by an automated check |

### 12.3 Future research items

Work that requires new simulation, calculation or validation, deferred beyond V1.

| Item | Note |
|------------------------------------------------------|------------------------------------------------------------------|
| V2G methodology, efficiencies and loss assumptions | Per Dr. Hachem-Vermette, 2026-08-30 (CHV's decision E1): the whole V2G module stays labelled Preliminary; the methodology requires further development and validation in future work |
| Explicit snow modelling for rooftop PV | Follows DBG-019; not undertaken for V1 |
| Upstream reconciliation of the retired 18.65 and 20 per cent solar tracks against the 23 per cent authoritative source | Follows DBG-005; not a release blocker |
| Re-simulation of the five compact residential archetypes on a Canadian rather than US prototype | Follows DBG-028; only if required, no new campaign scheduled now |
| Buffalo / ASHRAE arm re-run under Canadian weather | CHV's decision E8: kept as a research/reference arm; ideally re-run under Canadian weather |
| Biomass, wind, geothermal, solar thermal, PV thermal generation models | Visible, disabled, marked "Not modelled yet." A generation model for each, and a simulation campaign to produce per neighbourhood results. None was in scope for V1 |
| Most green infrastructure options | Green roofs, vertical greening, roof and food gardens, linear greenery and green spaces have **no energy method** in this round. Landscape solar is the one Layer 4 option with a calculation behind it |
| Facade solar, extended | Extending it means simulating the other building types and climates |
| Hourly solar generation charts | Removed from the interface. The hourly data exists for **5 of the 35** neighbourhoods. Recoverable the day the other 30 are produced upstream |

### 12.4 User choices

Deliberate scope or presentation decisions, not technical shortfalls.

| Item | Decision |
|----------------------------------------------------|--------------------------------------------------------------------|
| DBG-009, landscape solar identical for all 35 neighbourhoods | ✅ **Completed.** Not a defect: the same land allocation is applied to every neighbourhood by decision, the uniformity is stated on the page, and the magnitude was corrected and closed as DBG-014 |
| DBG-020, the landing page's second pathway | ✅ **Completed.** Closed 2026-08-24. "New Neighborhood" is disabled, aria-disabled, unreachable by keyboard, labelled Not modelled yet. CHV's decision E11, 2026-09-09: the pathway stays visible, disabled and labelled in V1; not a handover blocker |
| Buffalo / ASHRAE arm | CHV's decision E8: keep only as a research/reference arm, do not present it publicly as a Canadian public climate in V1 |
| Chisasibi / Zone 8 | CHV's decision E7: keep in the research database and technical documentation, do not expose quantitative public results in V1 |
| Saving or sharing a design | Not built. State is in `sessionStorage` and is lost when the tab closes. **The scenario can already be exported as `.json` and printed**, which is what the round asked for, so nothing is lost that the user cannot keep |

### 12.5 Workarounds in place

| Workaround | Why it exists |
|------------------------------------------------------|------------------------------------------------------------------|
| The "Other" end use block on the demand treemap | EnergyPlus reports 14 end use buckets; the tool charts 6. Before this, the breakdown page rebuilt the total from the six visible uses and disagreed with the final summary in 2,845 of 2,854 cells. The stored total is now rendered and the residual is shown as a seventh block rather than discarded |
| The Ratio of Performance is computed at render time | 2,845 stored derived values would have gone stale the moment a total or a solar figure changed, and three such changes were already scheduled. Removing the stored copy removed the obligation rather than meeting it |
| Landscape solar values in `js/data.js` are generated from the configuration chain | The page used to publish a figure 5.9 times its own three configuration rows. Generating the values means the table and the chain cannot drift again, and a verification script asserts they agree on all 35 |
| Explicit icon path strings | See section 10.3 |

---

## 13. Backup and recovery

*Written as procedure. **Not yet tested end to end.** Testing it once is an
acceptance criterion of this guide and is not met.*

### 13.1 Master copies

| Item | Location | In the repository |
|-------------------------------------------------|--------------------------------------------------|--------------------:|
| Website source, data, content | `github.com/CarolineHVermette/LMN-Web` | Yes |
| Simulation methodology | `docs_methodology/` | **Yes, since 2026-08-14** |
| Simulation code, input models, raw outputs | `github.com/orcunkoraliseri/idf_reader`, mirrored to `github.com/CarolineHVermette/LMN-Desktop` | **Yes.** Corrected 2026-08-24, section 6.0 |
| The revision round record | `docs_implementation/` | Yes |

### 13.2 What is in GitHub, what is only on the machine, and what would be lost

**Written 2026-09-09 against CHV's closeout checklist, item A4, and measured on
the machine the same day.** Earlier versions of this section and of section 6.12
disagreed with each other: one called the campaign run folders reproducible
scratch, the other called them the only copy. **Both statements were too broad.**
The four classes below are the accurate answer, and they are what the archive
decision turns on.

| | Class | What it is | Where it lives | Lost with the machine? |
|-------|-----------------------|-------------------------------------------|------------------------------------|-----------|
| 1 | **Version-controlled inputs** | The EnergyPlus toolkit, 4,655 input models, 33 weather files, the neighbourhood registry; and in the website repository the pipeline scripts, `Templates/`, `Content/`, `js/` | `idf_reader` on `main`, pushed, with a second remote on CHV's account. `LMN-tool` on `main` | **No.** Both are pushed |
| 2 | **Validated and retained outputs** | The 12,734 tracked files under `outputs/`, the per building results the master CSVs were built from; the campaign master CSV in `Templates/<date>/`; `js/data.js` itself | Tracked in the two repositories | **No** |
| 3 | **Unique raw campaign folders** | The neighbourhood run folders: for every run, the injected IDF, `eplusout.sql`, `eplustbl.csv`, the modified IDFs and the previews. **Measured 2026-09-09: 63 top level folders, of which 22 carry the `IAL` tag of a different project, and about 5,623 run folders in total at campaign / climate / neighbourhood / run depth, about 252 GB.** Section 6.12 quotes 27 campaigns and 3,169 run folders, which is a narrower count taken earlier; **the scope of what is archived has to be stated before anything is copied** | `idf_reader/0_BEM_Setup/SimResults_neighbourhoods/`, excluded by `.gitignore` line 60. **Zero files tracked** | **Yes. This is the only copy** |
| 4 | **Reproducible scratch** | Intermediate run space: `tmp/`, the other `0_BEM_Setup/SimResults*` trees, staging for the cluster | Untracked, about 197 GB in `tmp/` | Yes, and it does not matter |

**What would actually be lost if the machine disappeared tonight.** Not the
capability: the toolkit, every input model, every weather file and the per
building outputs are pushed, so every published number could be regenerated,
corrected and extended. What would be lost is **class 3, the raw evidence behind
each published number**: the actual run that produced it, its `eplusout.sql`, and
the injected IDF the rooftop solar array area was parsed out of. Regenerating it
means re-running the campaigns, days of compute, and the new folder names and
timestamps would not match the 2,951 provenance paths recorded in the master CSV.
**The provenance trail, not the science, is what is one disk failure away.**

**This is the archive decision, and it is joint.** It is the same question as the
external drive CHV raised on 2026-09-09, and it is item A5 of her checklist.
Nothing is renamed upstream until class 3 is archived and the archive verified.

### 13.3 Restore the live site

1. `git revert` or `git checkout` the desired commit or tag.
2. Push to `main`.
3. Confirm GitHub Pages is enabled and pointing at `main` at the repository
   root.
4. Confirm `.nojekyll` is present.
5. Verify per section 11.3.

### 13.4 Restore from a clone

The repository is fully self contained for the website. A clone plus a static
server reproduces the tool exactly. There is nothing to install and nothing to
configure.

### 13.5 Backup of simulation models and raw outputs

**In place, through version control.** The toolkit code, the input models, the
weather files and the per campaign outputs are tracked in the `idf_reader`
repository and pushed to `origin`. A second remote already points at CHV's own
account, `github.com/CarolineHVermette/LMN-Desktop`, which is what an RHLab
controlled copy means in practice.

✅ **Done, 2026-08-24.** That second remote was two commits behind on the morning
of that day, `5a1ee23b` against `ee32e462`, and was pushed the same afternoon and
verified against the remote afterwards. **The RHLab copy is now the copy that
produced the published website.** This was the action called T12.

**Status:** **Waiting for CHV** *(joint item, after CHV's trips, her email of 2026-08-30; tracked as D5, Appendix C row 13)* for establishing a long-term RHLab-controlled archive independent of personal accounts.

**What this does and does not prove.** It exercised the backup in one direction:
the copy is current and the push path works. **Restoring from it has never been
tried.** Section 13 stays marked as tested once rather than tested end to end
until someone clones the mirror and serves it.

**Raw simulation campaign archive (SharePoint / Drive):** Does not exist yet. No off-machine archive location has been created or agreed for `0_BEM_Setup/SimResults_neighbourhoods/`, the 27 campaigns and 3,169 run folders from the published runs. This is open items A5 (archive the campaigns) and A6 (verify the archive) on the 2026-09-09 closeout checklist, and it is a precondition for the rename pass, section 6.12, which itself has not been run (A7, A8).

---

## 14. Accounts, access and ownership

**No password, token or key appears in this document.** It records which
accounts and permissions are needed, not their secrets.

### 14.1 Accounts required

| Account | Needed for |
|---------------------------------------------------------|---------------------------------------------------------------|
| GitHub, with write access to the repository | Every change, and every publish |
| GitHub, with admin on the repository | Enabling and configuring Pages, managing collaborators, transferring ownership |
| Access to the machine or archive holding the simulation project | Regenerating, correcting or extending any number |

Nothing else. There is no hosting account, no domain registrar, no database, no
analytics service and no paid service of any kind.

### 14.2 Current state

| Item | Status |
|-----------------------------------|-------------------------------------------------------------------------------------|
| Destination repository | `github.com/CarolineHVermette/LMN-Web`, created and configured as a remote |
| Predecessor repository | `github.com/orcunkoraliseri/LMN-tool`, under a personal account, still a configured remote |
| CHV access | Granted |
| Live site | GitHub Pages |
| Master data copy | The repository, plus a personal machine for the simulation project |

### 14.3 Target state

| Item | Target |
|-------------------------------|-----------------------------------------------------------------------------------------|
| Repository location | RHLab or CHV controlled, which the destination repository satisfies |
| CHV role | **Owner**, able to manage access, settings, deployment and collaborators |
| Koral role | **Not finalised, and deliberately so.** CHV's decision E12, 2026-09-09: the role is settled only after the ownership and deployment transfer is complete. Contributor or collaborator can be considered then. **Ownership remains with CHV and RHLab, and Koral does not remain the system owner** |
| Live site | Served from the RHLab controlled repository |
| Simulation project | Present in an RHLab controlled archive. **Half done:** the mirror on CHV's account is current, an archive independent of either personal account is not agreed |

**Status of handover items:** Finalising owner transfer, role permissions and long-term archive is **Waiting for CHV** *(joint items D1, D5, D6, after CHV's trips, her email of 2026-08-30)*.

### 14.4 Transfer checklist

| # | Step | Owner | Status | Note |
|-------|------------------------------------------------|---------|------------------|--------------------------------------|
| T1 | CHV creates a GitHub account with the Concordia email | CHV | ✅ **Completed** | Done |
| T2 | CHV given access to the repository | Koral | ✅ **Completed** | Done |
| T3 | Walk CHV through the repository live: structure, branches, data location, how the site is generated, tested and deployed | Koral | 🟦 **Waiting for CHV** | joint item, after CHV's trips, her email of 2026-08-30 (D4; also closes Appendix C row 7) |
| T4 | Agree the final destination | Both | ✅ **Completed** | Done, `CarolineHVermette/LMN-Web` |
| T5 | Destination created with CHV at owner level | CHV | ✅ **Completed** | Done |
| T6 | Content transferred | Koral | ✅ **Completed** | Done |
| T7 | GitHub Pages enabled on the destination and the live URL verified | Both | 🟦 **Waiting for CHV** | joint item, after CHV's trips, her email of 2026-08-30 (D1) |
| T8 | Every link updated to the new URL, in the documentation, the README and any published reference | Koral | 🟦 **Waiting for CHV** | joint item, after CHV's trips, her email of 2026-08-30 (D2) |
| T9 | Koral added as contributor or admin on the destination | CHV | 🟦 **Waiting for CHV** | joint item, after CHV's trips, her email of 2026-08-30 (D6) |
| T10 | Confirm the tool builds and deploys with no dependency on a personal machine | Both | 🟦 **Waiting for CHV** | joint item, after CHV's trips, her email of 2026-08-30 (D4) |
| T11 | Repeat the walkthrough until CHV is comfortable navigating and deploying independently | Both | 🟦 **Waiting for CHV** | joint item, after CHV's trips, her email of 2026-08-30 (D4) |
| **T12** | **Bring CHV's mirror of the simulation repository up to date** | Koral | ✅ **Completed** | Done, 2026-08-24. Reduced first and then closed: the simulation project is not on a personal machine, it is the `idf_reader` repository, CHV already has a remote on it, and the two commits it was behind were pushed the same afternoon and verified against the remote. Section 6.0 |

### 14.5 Access and credential handling

The working copy's remotes were configured with an **embedded GitHub personal
access token in the URL**, in **all three** of them, so the one credential carried
write access to the site repository and to the mirror alike. Anyone with a copy of
that working directory, or anyone reading the git configuration on a shared
machine, held it.

**Steps 2 and 4 are done. Steps 1 and 3 are not, and they are the owner's.**

1. ⬜ **Revoke the token** in GitHub, under developer settings, personal access
   tokens. **This is the only step that actually closes the exposure**, because a
   credential that has sat in a configuration file cannot be un-seen. The value is
   no longer on the machine, so identify it by *last used*: it pushed on
   2026-08-24 and will show as used within the last day.
2. ✅ **The remotes are clean**, 2026-08-24. All four URLs in the website working
   copy read `https://github.com/...` with nothing before the host, and the
   simulation repository was already clean.
3. ⬜ **Use the Git Credential Manager or an SSH key.** The next push will ask for
   authentication and the credential manager will offer to remember it. **Do not
   paste a token back into a remote URL** — that is what created this item.
4. ✅ **Verified never committed.** A history search across every tracked file for
   the standard GitHub personal access token prefixes returns nothing, so the credential did
   not go public with the repository. The exposure was local.

**One thing did not change with the cleanup.** `origin` still carries the mirror
as a **second push URL**, so a bare `git push` still writes to both repositories.
Only the credential was removed. Push by explicit URL, section 11.1.

Tracked as **DBG-001**, priority P0 security. **The token value is not written
anywhere in this guide, and must not be written into any document in this
folder.**

---

## 15. Assumptions register

Every value the tool asserts, with where it is stored and where it came from.
The authoritative copy is `js/config.js`, where each entry carries the same
provenance as a comment. This table is that file, read in one place.

### 15.0 Three kinds of assumption

**Before modifying any value, decide which of three classes it belongs to.** The
three are changed in different places, by different people, on different
timescales, and getting the class wrong is the single most expensive mistake a
maintainer can make here: an afternoon's edit in `js/config.js` will not move a
published number, and a campaign re-run to change a caption is a week wasted.

| | **1. Simulation assumption** | **2. Post-processing assumption** | **3. Display and configuration assumption** |
|--------------|--------------------------------|----------------------------------------------|----------------------------|
| **What it is** | A value that was an input to EnergyPlus | A value that is an input to an offline calculation which produces a published number without EnergyPlus | A value the tool shows, labels or formats, which produces no published number |
| **Examples measured in this repository** | Envelope U-values; the heat pump COP; infiltration; the weather file; schedules; the ground boundary method; the NECB or 1983 code arm | The six EV and vehicle to grid values in `calculate_ev_scenarios.py`; the landscape solar chain, 20,234 m2 x 0.20 x 0.10 x 0.200 kW/m2 x 1,280 kWh/kWp; the PV panel efficiency that produced the shipped generation | Unit strings; floor area basis labels; the status vocabulary; every `note` field in `js/config.js`; the mirrored copies of classes 1 and 2 that exist only to be printed beside a result |
| **Where it is changed** | The upstream model in `idf_reader`, not in this repository at all | The calculation source: `Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py` for mobility, the landscape chain for Layer 4, the upstream injector for solar | `js/config.js`, and nothing else |
| **What must follow** | Re-run the campaign, re-export, `Templates/`, pipeline, `js/data.js`, verify, publish (section 8.1) | Re-run that calculation, regenerate its block in `js/data.js`, verify, publish | Bump `?v=`, publish (section 11.1) |
| **How long** | Days, and it changes published numbers | Hours, and it changes published numbers | Minutes, and it changes no number at all |

**The trap is class 2, and it is worth one worked example.** The landscape solar
chain is written out in `LMN_CONFIG.lpv` in `js/config.js`, five constants with
their arithmetic in a comment above them. **Editing those five constants changes
nothing a visitor reads as a result.** The published figures are the strings
already sitting in `LPV_DATA` in `js/data.js`, and `js/config.js` supplies only
the specific yield caption and the two explanatory notes. To change the landscape
solar output, the chain is recomputed and `LPV_DATA` regenerated. Mobility works
the same way: `calculate_ev_scenarios.py` holds the six values, `EV_V2G_DATA` in
`js/data.js` holds what is displayed.

**Documentation mirrors in `js/config.js`:** A simulation assumption may be mirrored into
`js/config.js` as documentation, so that the tool can print it beside the result. The mirror
is a caption or display label. Editing the mirror in `js/config.js` changes the caption and not
one published kilowatt-hour. Changing the value itself is still the upstream, full simulation
re-run path.

**Worked example, three classes on one screen:** the rooftop solar page shows the
panel efficiency that produced the generation figure (class 2, changed upstream in
the injector and re-exported), the envelope U-value of the buildings underneath it
(class 1, changed only by re-running the campaign), and the words "Simulation-backed"
and "kWh/m2 per year" (class 3, changed in `js/config.js` in minutes). **All three
look equally editable, and only one of them is.**

### 15.1 Units and bases

| Assumption | Kind | Value | Stored in | Source or decision | Used by |
|----------------|----------|------------------------------|-----------------------------------|---------------|--------------|
| Energy basis | Display | **Site energy.** EnergyPlus Total End Uses, electricity plus gas, no source multipliers | `js/config.js` `units.energyBasis` | Measured 2026-08-10 | Every intensity |
| Intensity floor area basis | Display | **Heated and cooled floor area**, EnergyPlus Net Conditioned Building Area | `js/config.js` `units.intensityFloorAreaBasis` | Measured: matches the conditioned area 35 of 35, the gross area 11 of 35 | Every intensity, every absolute total |
| Displayed floor area basis | Display | **Total built area**, EnergyPlus Total Building Area | `js/config.js` `units.absoluteFloorAreaBasis` | Same measurement | Display only |
| Intensity unit label | Display | kWh/m2 of heated and cooled floor area per year | `js/config.js` `units.eui` | Decision | Every page carrying an intensity |

### 15.2 Solar

*Note on solar assumptions:* The `js/config.js` entries below are documentation mirrors of inputs to the Tier 3 injector in `idf_reader` (see section 15.0 on documentation mirrors). Editing them in `js/config.js` changes only display labels, not simulation results.

| Assumption | Kind | Value | Stored in | Source |
|----------------|-------------|----------------------------------|----------------------------------|------------------------|
| **Panel efficiency, both roof groups** | Simulation | **0.230, labelled "23 % panel efficiency"** | `js/config.js` `pv.moduleEfficiency` | `BEM_utils/pv_tier3.py` line 50, the Tier 3 injector that produced every published value |
| Active fraction, flat roof | Simulation | 1.0 on the rack | `js/config.js` `pv.roofGroups.flat.activeFraction` | `BEM_utils/pv_tier3.py` lines 617 to 623 |
| Active fraction, pitched roof | Simulation | 0.85 of the south roof face | `js/config.js` `pv.roofGroups.pitched.activeFraction` | `BEM_utils/pv_tier3.py` lines 51, 480 to 485, 651 |
| Retired, never used to produce a value | Simulation | 18.65 % cell efficiency behind a 0.80 fraction; 20 % module efficiency of aperture behind a 0.90 fraction | `js/config.js` `pv.efficiencyNotes.retired` | Tier 1 injector, retired 2026-05-29; and a literature reference |
| Ground coverage ratio, flat roof | Simulation | 0.40 | `js/config.js` `pv.gcr` | Same |
| Ground coverage ratio, pitched roof | Simulation | **Does not apply** | `js/config.js` `pv.roofGroups.pitched.gcrApplies` | Same |
| Array tilt, flat roof | Simulation | 45 degrees, facing south | `js/config.js` `pv.roofGroups.flat.tiltLabel` | Same |
| Array tilt, pitched roof | Simulation | Follows the roof pitch | `js/config.js` `pv.roofGroups.pitched.tiltLabel` | Same |
| DC to AC losses | Simulation | 14 % | `js/config.js` `pv.dcToAcLosses` | Same |
| Inverter efficiency | Simulation | 96 % | `js/config.js` `pv.inverterEfficiency` | Same |
| Authoritative solar field | Display | `ENVELOPE_ENERGY_DATA[env][NU][scenario].pv` | `js/config.js` `pv.authoritativeSource` | Measured: reproduces the simulation output 35 of 35 |
| Snow loss, Zones 7A, 7B, 8 | Display | 10 to 15 %, 15 to 20 %, 20 to 25 % optimistic | `js/config.js` `pv.snowCoverNote` | Upstream validation. **Noted, not applied** |
| Facade solar coverage | Simulation | Nine Montreal neighbourhoods, preliminary, excluded from totals | `js/config.js` `facadePv` | Three single building runs, Montreal only |

### 15.3 Mobility and vehicle to grid

Layer 3 figures are **Preliminary** in the maturity vocabulary of Appendix B (not a building energy simulation). On disk, the six calculation values are the default arguments of `Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py`. The equations there are numbered 12 to 18, and **the source is identified, 2026-08-31**: Hachem-Vermette, C. (2025), *Designing energy-positive neighborhoods: a modular framework for integrated planning and policy guidance*, **Energy Reports 14, 4492 to 4507, section 2.4, equations 12 to 18**. The match is exact, symbol for symbol, and equations 1 to 11 of the paper are the photovoltaic and heating chain. The earlier negative search is kept in `docs_implementation/documentation-revisions/DeepResearchPrompts/responses/RT02_chv_ev_v2g_source_paper.md`. The 15 kWh per EV daily demand carries a stated basis in `Templates/NUS_EV.csv`, a 200 km daily range, and section 2.4 of the paper states the same figure. As stated by Dr. Hachem-Vermette on 2026-08-30, the V2G methodology, efficiencies and losses will require further development and validation in future work.

**Execution and data flow chain:**

```
calculate_ev_scenarios.py  (the six default arguments)
  -> generate_ev_lpv_data.py
     -> rewrites Templates/NUS_EV.csv, Templates/NUs_LPV.csv,
        and the EV_V2G_DATA and LPV_DATA blocks of js/data.js
```

Changing an EV assumption means editing the default arguments in `Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py` and re-running `generate_ev_lpv_data.py`, **not** editing `js/config.js` and **not** editing `js/data.js`.

| Assumption | Kind | Value | Stored in | Note |
|-------------------|---------------------|----------------|----------------------------------------|------------------------|
| Vehicles per household | Post-processing | 1.5 | `calculate_ev_scenarios.py` (`n_ev_per_household`); lands in `js/data.js` `EV_V2G_DATA[NU][scenario].evPenetrationRate` | Default argument (Eq 12); **Energy Reports 14 (2025) 4492 to 4507, Eq 12**, and section 2.4 states 1.5 EVs per household |
| Daily charging demand per vehicle | Post-processing | 15 kWh | `calculate_ev_scenarios.py` (`e_ev_per_day`); lands in `js/data.js` `….dailyEnergyDemand` | Default argument (Eq 12); **Energy Reports 14 (2025), Eq 12**. Basis in NUS_EV.csv is a 200 km daily range, and section 2.4 gives the same figure citing Dalla Chiara et al. (2019) |
| Charging efficiency | Post-processing | 90 % | `calculate_ev_scenarios.py` (`eta_charging`); lands in `js/data.js` `….chargingEfficiency` | Default argument (Eq 12); **Energy Reports 14 (2025), Eq 12**, where it is the divisor grossing up demand. Section 2.4 states 90 per cent |
| Vehicle to grid participation | Post-processing | 50 % | `calculate_ev_scenarios.py` (`p_v2g`); lands in `js/data.js` `….v2gParticipationRate` | Default argument (Eq 16); **Energy Reports 14 (2025), Eq 16**, where section 2.4.2 states 50 per cent. EV2 scenario only |
| Discharge energy per vehicle per day | Post-processing | 10 kWh | `calculate_ev_scenarios.py` (`e_v2g_per_day`); lands in `js/data.js` `….dischargeCapacity` | Default argument (Eq 16); **Energy Reports 14 (2025), Eq 16**, where section 2.4.2 states 10 per participating vehicle per day and writes the unit as kW, which is the same defect. EV2 scenario only. The field name and the interface unit string are a confirmed naming defect, recorded in `js/config.js`: `dischargeCapacity` holds a daily energy, and `10 kW / day` is not a valid unit |
| Discharge efficiency | Post-processing | 90 % | `calculate_ev_scenarios.py` (`eta_battery`); lands in `js/data.js` `….batteryEfficiency` | Default argument (Eq 13); the paper uses it in **Eq 13** but **never gives it a value**, so the 90 per cent is the code’s own. **Displayed but not applied** to exported energy, as in the paper’s Eq 17. Flag f1 **closed 2026-09-09**: not applied, stated as a V1 limitation, not claimed as the paper’s value |
| Stationary storage share | Post-processing | 0.5 | `calculate_ev_scenarios.py` line 31 | **Unsourced**; assumed 50% through stationary storage; only undocumented constant in Layer 3 chain; no literature convention sets a 50 per cent pass through; a candidate reading is a standby drain of about 0.83 kWh per vehicle per day, unconfirmed. Flag f2 **closed 2026-09-09**: retained provisionally as the paper's own value, stated as an assumption, not validated |
| Storage loss | Post-processing | 5 % of total EV demand | Derived as `0.5 x (1 - battery efficiency)`; lands in `js/data.js` `….storageLoss` as kWh/day | Derived calculation output, not an input (`30` kWh/day for RC-R, `60` for RC-D) |
| Sign convention | Display | Positive means the grid must supply | `js/config.js` `ev.positiveMeans` | Stated in words on screen (ISO 52000-1 / ASHRAE 228) |
| Status | Display | **Preliminary** | `js/config.js` `ev.preliminaryNote` | Documented calculation chain, not a simulation (Appendix B) |

### 15.4 Landscape solar

| Assumption | Kind | Value | Stored in | Note |
|-----------------------|--------------------|-------------------------|----------------------------------|------------------|
| Site area | Post-processing | 20,234 m2, a uniform 5 acres | `js/config.js` `lpv.siteAreaM2` | Project decision, identical on every neighbourhood, stated on the page |
| Land allocation | Post-processing | 20 % of the site | `js/config.js` `lpv.landAllocationFraction` | |
| Usable fraction | Post-processing | 10 % of the allocated land, **in series** | `js/config.js` `lpv.usableFraction` | Below the published 30 to 50 % range. Conservative, not wrong |
| Module power density | Post-processing | 200 W/m2 | `js/config.js` `lpv.moduleWattsPerM2` | 400 W modules at 2 m2 |
| Specific yield | Post-processing | 1,280 kWh/kWp per year | `js/config.js` `lpv.specificYieldKWhPerKWpYr` | |
| Resulting installed capacity | Post-processing | 80.9 kWp | Generated | |
| Resulting generation | Post-processing | 103.6 MWh per year | Generated | |
| Status | Display | Preliminary | `js/config.js` `lpv.status` | Not a simulation |

### 15.5 Climates and coverage

| Assumption | Kind | Value | Stored in |
|-----------------------------------------------------------|-----------|----------------------|----------------------------|
| The five **published** climate arms and their representative cities | Display | Part I, section C | `js/config.js` `climates` |
| The two arms present in the data and **not published**, ASHRAE and NECB Zone 8 | Display | Section 6.3 | `js/config.js` `withdrawnClimates` |
| The 17 envelope keys and their display names | Display | | `js/config.js` `envelopeLabels` |
| Withheld neighbourhood and climate pairs | Display | 26 pairs, with the reason for each | `js/config.js` `dataGaps` |
| Climate selection is mandatory | Display | true | `js/config.js` `requireClimateSelection` |

### 15.6 Vocabulary

| Term set | Kind | Values | Stored in |
|-----------------------------|-----------|--------------------------------------------------|-----------------------------|
| Maturity of a number | Display | Simulation-backed, Preliminary, In development, Not modelled yet | `js/config.js` `statusTerms` |
| A modelled but unpublishable result | Display | Not currently available | `js/config.js` `availability` |
| The six charted end uses | Display | Heating, Cooling, DHW, Lighting, Equipment, Fans and Pumps | `js/config.js` `endUses` |

### 15.7 Source publications

One published paper is a direct source of values used by the tool. It is listed here so
that the assumptions above can be checked against it.

| Ref | Publication | What it sources | Where it is cited |
|-------|---------------------------------------|----------------------------------------------------|----------------------|
| **R1** | Hachem-Vermette, C. (2025). Designing energy-positive neighborhoods: a modular framework for integrated planning and policy guidance. *Energy Reports*, **14**, 4492 to 4507 | **Section 2.4, equations 12 to 18**: the whole Layer 3 electric vehicle and vehicle to grid chain, and the six default values it runs on. Equations 1 to 11 of the paper are the photovoltaic, district heating and heat pump chain, which is why the vehicle block starts at 12 | Sections 6.8 and 15.3, and the assumption table of 15.3 row by row |

**Local copy:**
`docs_implementation/documentation-revisions/Resources/1-s2.0-S2352484725006365-main.pdf`.
Identified on 2026-08-31 and verified equation by equation against
`Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py`. **The match is exact,
symbol for symbol, for all seven equations.**

**Two things the paper does not settle**, and both are open questions for
Dr. Hachem-Vermette. It writes the 50 per cent stationary storage share inside equation 13
without justifying it, and it never gives the battery efficiency a numeric value, so the
90 per cent in the code is the code's own. Its equation 17 subtracts the vehicle to grid
discharge with no efficiency term, which is what the tool does.

---

## Appendix A, glossary

### A.1 Terms

| Term | Meaning |
|-----------------------|-------------------------------------------------------------------------------------------------|
| NEXA | Neighbourhood Energy eXploration & Analysis, the tool |
| NU | Neighbourhood Unit, one of the 35 archetypes |
| EEM | Energy Efficiency Measure, the scenario rungs |
| EUI | Energy Use Intensity, annual energy per unit floor area |
| GFA | Gross Floor Area, here the total built area including unheated space |
| Conditioned area | Heated and cooled floor area, the denominator of every intensity |
| LPV | Landscape Photovoltaics |
| V2G | Vehicle to Grid |
| RoP | Ratio of Performance, annual on site solar generation divided by annual total demand, both as site energy. A published metric of the neighbourhood paper |
| NECB | National Energy Code of Canada for Buildings |
| NBC 9.36 | National Building Code of Canada, section 9.36, governing housing |
| BTAP | The NRCan Building Technology Assessment Platform, source of the Canadian occupancy and load schedules |
| GCR | Ground Coverage Ratio, a flat roof array quantity |
| IAL | Ideal Air Loads, the ideal thermal load option |
| PED | Positive Energy District |

### A.2 Folders and files

**Where everything is in the repository**, `github.com/CarolineHVermette/LMN-Web`, top level
first. Section 4 describes each one in full; this table is for finding it. The predecessor
repository, `github.com/orcunkoraliseri/LMN-tool`, holds the same tree and serves the live
site today, see section 3.

| Path | What is in it | Detail |
|-----------------------------------|-------------------------------------------------------------------------|-----------|
| `index.html` | Layer 0, the entry page | 4.1 |
| `layer1_*.html` to `layer4_*.html` | The eleven layer pages, selection then result, in the order a user walks them | 4.1 |
| `layer4_finish_design.html` | The final consolidated summary | 4.1 |
| `documentation.html` | The public methodology and references | 4.1 |
| `3dviewer.html` | The standalone 3D viewer, opened from the archetype cards | 4.1 |
| `comparison.html` | Comparison mode. Present in the repository, not linked from the live navigation | 12 |
| `js/` | Every page's logic, one file per page, plus `config.js`, the shared constants, and `data.js`, generated | 4.2 |
| `css/` | `styles.css`, the whole design system, and three historical backups | 4.3 |
| `Content/` | Images, models and reference PDFs. Twenty five image folders | 4.4 |
| `Content/Glb_Models/` | The 3D models the viewer loads | 4.4 |
| `Content/IFC_Models/` | The BIM interchange models | 4.4 |
| `Content/References & Methodology/` | The reference PDFs | 4.4 |
| `Templates/` | The data pipeline: the per climate CSVs that are the import layer, and the dated source datasets | 4.5 |
| `Templates/scripts/` | The four Python scripts that carry a campaign into `js/data.js` | 4.5, 7 |
| `vendor/` | The libraries and fonts kept in the repository: Chart.js, model-viewer, Inter and Outfit. **No page calls a CDN** | 9.1 |
| `memory/` | Two working notes kept with the code, one of them the EV and landscape solar pipeline note | |
| `README.md` | The repository readme | |
| `CLAUDE.md` | The working rules followed while the revision round was carried out | |
| `GraphicalAbstract.md` | The graphical abstract text | |
| `.nojekyll` | Empty, and required. Without it GitHub Pages drops every folder whose name starts with an underscore | 3 |
| `.gitattributes`, `.gitignore` | Line endings, and what is kept out of the published repository | 10.2 |

**Two folders named in section 4.6 are deliberately not on GitHub.**
`docs_implementation/documentation-revisions/` and `docs_methodology/` are listed in
`.gitignore` and live only on the working machine, because the repository is public and
serves the site. Nothing on the site links to either, so nothing breaks; they are shared as
documents instead.

## Appendix B, status vocabulary

This section defines two distinct vocabularies used throughout this guide and the action plan:
1. **Task status vocabulary**: Describes the execution state of handover tasks, procedures and checklist items.
2. **Number maturity vocabulary**: Describes the scientific confidence and source backing of energy figures and quantities displayed in the tool.

### Task status vocabulary

These four terms govern every task, procedure and checklist status in this guide and in the action plan. No other status terms may be used for tasks.

| Status | Meaning | Symbol |
|---------------------|---------------------------------------------------------------------------------------|:----------:|
| **Completed** | Done and verified | ✅ |
| **In progress** | Started, not finished, and it is in our hands | 🟨 |
| **Waiting for CHV** | Cannot proceed without Dr. Hachem-Vermette (e.g. Group D items, open method questions) | 🟦 |
| **To be tested** | Written and believed correct, never exercised by anyone but the author (Appendix C rows 5 to 8) | ⚠ |

### Number maturity vocabulary

Dr. Hachem-Vermette fixed these four terms and no others may be used to describe the maturity of an energy number or modelled quantity displayed in the interface.

| Term | Meaning |
|-------------------------------|-----------------------------------------------------------------------------------------|
| **Simulation-backed** | From an actual simulation output, for that exact case |
| **Preliminary** | From an implemented calculation whose method is not yet validated (e.g. Layer 3 EV/V2G, Layer 4 LPV) |
| **In development** | Present in the interface, not selectable |
| **Not modelled yet** | No model and no data. Shown only as a future possibility |

One further term exists for a case that **is** modelled but whose result is not publishable: **Not currently available**. It is deliberately kept separate from the four terms above.

## Appendix C, acceptance criteria for this guide

*Criterion 1 is quoted in the words it was set in, on 2026-08-10, when the document was still
called a report. The document is the same one.*

| # | Criterion | Status | Note |
|-------|-----------------------------------------------|:-------------:|---------------------------------------------------|
| 1 | One consolidated report exists, separate from `documentation.html` | ✅ **Completed** | Consolidated into single 3-part guide at v1.0, restructured at v3.1 |
| 2 | Every displayed result has a complete row in the Results Data Map with no empty cells | ✅ **Completed** | Verified in Section 5 data map |
| 3 | The data pipeline is documented from simulation output to live website | ✅ **Completed** | Verified in Section 7 |
| 4 | The manual steps in that pipeline are written out explicitly | ✅ **Completed** | Verified in Section 7.1 |
| 5 | Someone other than the author can update one neighbourhood result from this guide alone | ⚠ **To be tested** | Closes in the Appendix G test, task 6 |
| 6 | Someone other than the author can add a new neighbourhood from this guide alone | ⚠ **To be tested** | Closes in the Appendix G test, task 5 |
| 7 | Someone other than the author can deploy an updated live version from this guide alone | ⚠ **To be tested** | Not covered by Appendix G (which carries no deployment task). Deployment is section 11.1; this criterion is tested by the walkthrough in section 14.4, T3, T10 and T11 (D4, Waiting for CHV) |
| 8 | Backup and recovery are documented **and tested at least once** | ⚠ **To be tested** | Closes in the Appendix G test, task 7 |
| 9 | The guide contains no passwords or tokens | ✅ **Completed** | Verified: clean of secrets, accounts listed by permission |
| 10 | CHV has owner level control of the repository hosting the live tool | ✅ **Completed** | `github.com/CarolineHVermette/LMN-Web` configured at owner level |
| 11 | CHV has reviewed the guide at least three times | 🟦 **Waiting for CHV** | One version has been shared, v1.0 on 2026-08-24, and she has commented twice since, on 2026-08-27 and 2026-08-30. **No further version has been shared**, and three reviews are not yet on record. This one, v3.2, is the second to be sent |
| 12 | The embedded token is revoked and the remote is clean | 🟨 **In progress** | P0 security: remotes are clean; token revoke on GitHub is Koral's personal action (A1, section 14.5) |
| 13 | The simulation project is in an RHLab controlled archive | 🟦 **Waiting for CHV** | Mirror on CHV account current (T12); long-term independent archive is joint item D5 |

Six criteria are **Completed**, four are **To be tested** (rows 5, 6, 7 and 8), two are **Waiting for CHV** (rows 11 and 13), and one is **In progress** (row 12); each is stated where it belongs in the body rather than only here. **Of the four to be tested, three are covered by the independent handover test in Appendix G**, rows 5, 6 and 8. **Row 7 is not**, and is tested instead by the deployment walkthrough of section 14.4.

---

## Appendix D, revision history

**This guide replaces the three documents that came before it.** Until version 0.8 the
handover set was three separate documents: a non technical summary, a technical
orientation and this reference. They were written on different days for different readers,
and the split followed the order they were written in rather than any reader's need. They
became one document in three parts at version 1.0, and the two shorter documents are
archived unchanged in `previous/`. **Nothing in Part III was cut in that merge.** All
fifteen sections and the three appendices were carried over whole; what was shortened is
Parts I and II, which repeated them.

| Version | Date | What changed | Shared with CHV |
|-------------|----------------|----------------------------------------------------------------------------|----------------|
| 0.1 | 2026-08-10 | Skeleton, sections 1 and 2 | ⬜ |
| **0.6** | **2026-08-14** | **All fifteen sections filled.** Written as one pass rather than the planned five, at the request of the supervisor meeting | ⬜ |
| **0.7** | **2026-08-24** | **Brought up to the published release.** The PV efficiency corrected to the value that actually produced the results, the climate coverage reduced to the five published arms, the publish procedure corrected, the verification count updated, and the eight defects of the live check added to section 12 | ⬜ |
| **0.8** | **2026-08-24** | **The simulation sources located**, in a second repository with a remote on CHV's own account. Sections 6.0, 13.2, 13.5 and 14 corrected. **The eight defects closed**, seven of eight fixed and verified | ⬜ |
| **1.0** | **2026-08-24** | **The three reports merged into this one.** Parts I and II added from Reports 1 and 2, shortened to what they did not duplicate. Six figures corrected against the published site rather than against the previous draft: the cache stamp, the external library count, the `model-viewer` size, the mirror state, the remote URLs and the fonts. **Two items closed the same afternoon**, the mirror push and the clean remotes, and **one new defect opened and fixed**, `DBG-048` | ✅ **2026-08-24** |
| **2.0** | **2026-08-27** | **Read this first added**, at the front, in plain language: what the tool is, what is done, what is pending, and the ten questions that are for CHV. **Nothing else changed.** Every section, table and appendix is byte for byte the version 1.0 text. Written because the covering email of 24 August was not clear and CHV said so | ⬜ |
| **2.1** | **2026-08-27** | **Two closures recorded in the opening, and nothing else touched.** Stage 9 item 7 closed: ninety-four old notes, mockups, duplicate start pages and backup pages removed from the published site, kept offline. Stage 11 prepared as far as it can go without CHV. The pending list falls from six items to five | ⬜ |
| **2.2** | **2026-08-27** | **The plain-language opening removed.** *What is done*, *what is still pending* and the ten questions were a second copy of the action plan and are now only in the action plan. Sections 1 to 15 and the three appendices are untouched, and remain the version 1.0 text | ⬜ |
| **3.0** | **2026-08-27** | **Renamed a guide.** `Handover and Maintenance Report` becomes `Handover and Maintenance Guide`, and the document refers to itself as a guide throughout. **No content changed**: sections 1 to 15 and the three appendices are still the version 1.0 text | ⬜ |
| **3.1** | **2026-08-27** | **Restructured as a guide.** The revision history, the common change procedures and the record of the live site check moved out of the body into appendices D, E and F, so that the body carries only what a maintainer needs while working. Every heading rewritten as a plain title. **No technical content changed**: sections 1 to 15 and appendices A to C are the version 1.0 text | ⬜ |
| **3.1**, addendum | **2026-08-27** | **Section 8 completed against CHV's request of 2026-08-27** that the guide state, step by step, how new information is added to the tool. Section 8 now opens with a table routing each kind of change to its procedure and its files, and two procedures were added: **8.8**, updating text, tables and figures shown in the interface, and **8.9**, adding a layer or a module and connecting another tool. **Nothing else changed** | ⬜ |
| **3.2** | **2026-08-31** | **Handover closeout revision.** Responded to Dr. Hachem-Vermette's two emails of 2026-08-30. Standardised four-state task status vocabulary applied throughout (Completed, In progress, Waiting for CHV, To be tested). Group D items marked Waiting for CHV. Added Section 6.12 (simulation file naming), Section 8.10 (interface design), Section 15.0 (configuration vs simulation assumptions), and Appendix G (independent handover test). **Later the same day, the Layer 3 source publication was identified and cited**: Energy Reports 14 (2025) 4492 to 4507, section 2.4, equations 12 to 18, now recorded in sections 6.8, 15.3 and the new **section 15.7, source publications**. Rebuilt HTML and DOCX outputs via `build.sh` | ⬜ |
| **3.3** | **2026-09-09** | **WP7/WP8 of the 2026-09-09 closeout plan (A24, A25).** Resolved the archive placeholder in section 13.5 with the true open state (A5 to A8). Rebuilt section 12 into CHV's four classes: real open defects, accepted V1 limitations, future research items, user choices, folding in the section 15.3 duplicates (flags f1, f2, the V2G unit defect). Fixed the dangling §10.3 cross-reference (now §10.2, where the line-ending baseline is explained). Renamed the product from LMN to **N-LENS** throughout the running text, title block and glossary; code tokens (`LMN_CONFIG`), file and folder names, the LMN sixteen-scenario factorial, repository/URL strings, and dated quoted historical text are unchanged, since they are real identifiers. File renamed to `N-LENS_Handover-and-Maintenance-Guide_v3.3.md`. **A23, the full real-browser QA pass, had not been run at the time of this row**, so this was a restructuring of the existing record rather than a new QA pass. A23 was run later the same day; see the 3.3 second addendum below and Appendix F2 | ⬜ |
| **3.3**, addendum | **2026-09-09** | **WP6 of the same plan (A12, A15, A22, A27, A28), and three defects found by running what this guide tells a new HQP to run.** Six hand-maintained blocks moved out of the generated `js/data.js` into `js/config.js`, which closes the documented chart-colour exception; the climate fallback is 16 sites in 8 files, not the 21 in 10 stated before, measured; the verification suites' line-ending assertions were rewritten to test for mixed endings, and the suite result is now **683 of 706**, explained in section 10.2; a lab attribution block was added to both JSON exports; the cache stamp is `?v=25`. New register entries **DBG-049** and **DBG-050**, both fixed: the data pipeline could only run on one machine, and the two verification scripts named in nine places in this guide had never run at all. **DBG-051** is open and recorded. **A23, the full real-browser QA pass, had still not been run at the time of this row**; it was run in the pass recorded immediately below | ⬜ |
| **3.3**, second addendum | **2026-09-09** | **WP7 of the same plan (A23). The full real-browser QA pass was repeated against the current state and this guide now carries it as Appendix F2.** A real Chrome driven over the DevTools protocol against a served copy of the working tree, every clause of CHV's wording: 385 baseline combinations across eleven envelope keys and all 35 neighbourhoods; 350 rungs of the efficiency ladder driven by clicking, on both arms of NECB Zone 6, against the 5 rungs of 2026-08-24; all 35 three-dimensional models; the eleven-step flow with a reload at every step and a back walk home; all 41 withheld pairs; the export against the screen, 4 of 4 metric rows and 19 of 19 assumption pairs; the print stylesheet; the console on every page; and the cache stamp, `?v=25`, on all 15 pages and 65 references. **Three new register entries, all open: `DBG-052`, `DBG-053` and `DBG-054`.** The first two are not reachable in the published flow. **`DBG-054` is P1 and is**: the Thermal Load card is enabled everywhere and changes no number, because no cell in `js/data.js` carries the `IAL` column both resolvers ask for, 0 of 595, while the page still states that the measure was applied and directly simulated. No published number is wrong; a statement about one is. Section 12 introduction rewritten to say the classes are now confirmed by a fresh pass rather than built from the record alone | ⬜ |
| **3.3**, third addendum | **2026-09-09** | **A15 closed and the last two reachable defects of the A23 pass repaired.** The 16 silent climate defaults are removed from 8 files, so no page defaults to a climate the user did not choose; `DBG-052` is closed by vendoring Chart.js 4.4.3 into `vendor/chartjs/`, no CDN call added; `DBG-053` by a `keydown` branch beside the existing `click` branch, so the seven card information icons open on Enter and Space; and `DBG-051` fell out of the same edit. The cache stamp is now **`?v=26` on all 15 pages and 66 references**, and the verification suites read **685 of 706**, two better, because the mixed line ending pair now passes. Sections 10.2, 12.1, Part II's constraints and verification summaries and Appendix F2 are corrected; the dated appendix text itself is left as written. **`DBG-054` is untouched and is the one open question for CHV** | ⬜ |
| **3.3**, fourth addendum | **2026-09-10** | **Appendix A extended into a directory glossary**, at Dr. Hachem-Vermette request of the same day, so that a reader can find a file or a folder from one table. The existing fifteen terms become **A.1 Terms**, unchanged, and **A.2 Folders and files** is new: every path at the top of the repository, what is in it, and the section that describes it. It also records that docs_implementation/documentation-revisions/ and docs_methodology/, both named in section 4.6, are in .gitignore and are therefore not on GitHub. **Section 12.0, question 2, is now answered**, at the meeting of the same day: 1 TB for each project at a ceiling of CAD 300 to 400, on a portable SSD that Mac and Windows both read and write, the earlier 4 TB and 8 TB recommendation withdrawn. **Section 12.0, question 3, is now answered**, on Koral's decision of the same day: Comparison Mode goes offline rather than to review, is kept in the repository so that it can come back, and its two entry points are commented out rather than deleted, which moved the cache stamp to `?v=27` on all fifteen pages. **No other content changed** | ⬜ |
| **3.3**, fifth addendum | **2026-09-10** | **The Thermal Load data was imported, so `DBG-054` is half closed, and Comparison Mode was taken offline at the page itself.** The simulations the `IAL` column needed were commissioned and finished the same day in the simulation repository: **210 runs, all 35 neighbourhoods across the six NECB climate zones, zero EnergyPlus Fatals**. They were imported into `js/data.js` as an `IAL` block on each of those 210 cells, `total`, the six end uses and `pv`, taken at the one decimal the file already uses, and every one was read back out of the loaded file and checked against the source CSV, **8 fields on each of 210 rows and 0 mismatches**, no all-zero row and no negative residual. Both resolvers now return `IAL` there rather than falling back. **`DBG-054` is half closed and not closed**: the campaign covered the standard archetypes, so the high performance building still has no `IAL` column and the card still falls back there without saying so, **175 of the 350 combinations a visitor can reach**. Sections 12, 12.0 question 1, the 12.1 row and Appendix F2 record that split. Separately, `comparison.html` answered a typed address with the working tool although both its entry points were commented out, so `initComparisonPage` now reads `LMN_CONFIG.comparisonMode.published` first and prints an offline notice instead; nothing was deleted and setting the flag to `true` runs the page as before. The two js changes moved the cache stamp to **`?v=29` on all fifteen pages and 66 references**. **Both changes were published the same day**, commit `5a956fb`, pushed to the site repository and to the mirror on CHV's account, and **verified against the deployed server**: 30 cases in a real headless Chrome, 30 passing, no console error and no failed request | ⬜ |
| **3.4** | **2026-09-11** | **Renamed the tool from N-LENS to NEXA**, on Dr. Hachem-Vermette's email of the same day: *"NEXA, Neighbourhood Energy eXploration & Analysis, Version 1 · Research Preview."* The name was applied in the running text, the title block, the glossary and the Group D items of this guide, in the website's fifteen pages and three scripts, and in the repository `README.md` and the HQP trial package. The tagline is unchanged. **As in the 3.3 rename, code tokens (`LMN_CONFIG`), repository and URL strings, and dated quoted historical text are unchanged**, since they are real identifiers, and so is the revision row of 3.3 above, which records the previous name. The single source of the name remains `LMN_CONFIG.releaseName` and `LMN_CONFIG.productName` in `js/config.js`; no page writes it as a literal. The two js edits moved the cache stamp to **`?v=30` on all fifteen pages and 66 references**. **Nothing was committed, pushed or published**: the rename is local, version 3.3 remains the document submitted on 2026-09-11, and this version is the one prepared for the next submission | ⬜ |

### Items awaiting joint completion with CHV (Group D)

*The following six items from Dr. Hachem-Vermette's email of 2026-08-30 are parked to be completed jointly with her following her upcoming travel. Note that other specific items across the guide (such as Layer 3 provenance in §6.8/§15.3 and solar reconciliation in §12.1) are also marked Waiting for CHV.*

| ID | Item (CHV 2026-08-30) | Where tracked | Status | Date of request |
|-------|---------------------------------------------|-------------------|------------------|------------------------------|
| D1 | Finalise the live NEXA V1 deployment from the CHV or RHLab controlled repository | §11.1, §14.4 (T7) | 🟦 **Waiting for CHV** | 2026-08-30 (joint item, after CHV's trips) |
| D2 | Update the remaining repository and live site links | §14.4 (T8) | 🟦 **Waiting for CHV** | 2026-08-30 (joint item, after CHV's trips) |
| D3 | Establish the final NEXA V1 release or tag | §11.5 | 🟦 **Waiting for CHV** | 2026-08-30 (joint item, after CHV's trips) |
| D4 | Go through repository access, deployment and recovery together until she can manage independently (also closes Appendix C row 7) | §14.4 (T3, T10, T11) | 🟦 **Waiting for CHV** | 2026-08-30 (joint item, after CHV's trips) |
| D5 | Finalise the long term RHLab controlled archive and backup | §13.5, Appendix C (row 13) | 🟦 **Waiting for CHV** | 2026-08-30 (joint item, after CHV's trips) |
| D6 | Koral's access and role after the handover | §14.3, §14.4 (T9) | 🟦 **Waiting for CHV** | 2026-08-30 (joint item, after CHV's trips) |

---

## Appendix E, common change procedures

The common changes a maintainer makes most often. Each names the section of Part III where
the procedure is stated in full, and that full statement is the one to follow.

**Change a label, a caption or a display assumption.** Edit `js/config.js`. Nothing
else. If the value you want to change appears literally in a page or a script,
**that is a defect**: move it to `config.js` and have the page read it. Three
separate defects in this round were the same value written in three files that
then drifted apart. *If you are changing a simulation assumption (an input to EnergyPlus),
follow sections 8.7 and 15.0 instead, which require upstream re-simulation and pipeline re-import.
If you are changing a post-processing assumption (the EV chain, the LPV chain, a solar
efficiency), `js/config.js` holds only the caption: the change is made in the calculation
source and the result regenerated, section 8.7.*

**Change the interface design.** Adjust `:root` design tokens in `css/styles.css` for colours
and typography, or edit `buildSidebar()` in `js/sidebar.js` for navigation layout. Remember that
chart colours reside in `ENERGY_COLORS` in `js/config.js`. Bump `?v=` on affected pages. *Full map in Part III, section 8.10.*

**Update a neighbourhood's results.** Place the new campaign output under
`Templates/<date>/`, run `convert_master_csv.py` then `patch_data_js.py`, then
`check_keys.py` and `test_data_flow.py`, and check the affected neighbourhood on
the Layer 2 pages and on the final summary, which read the same cell by different
routes. **Never hand edit a value in `js/data.js` to correct it**; the next
import overwrites it and nothing records that it was ever changed. *Step by step,
with the failure modes, in Part III, section 8.1.*

**Publish.** *The procedure is Part III, section 11, and it must be read there
rather than summarised here, because two of its steps were wrong in an earlier
draft in a way that would have cost a new developer real damage.* The two things
never to forget:

- **Never `git add -A`.** Stage with `-u` or by name, and read `git status` before
  committing.
- **`origin` has two push URLs.** A bare `git push` writes to **both** the site
  repository and the mirror. Push by explicit URL when you mean one of them.

---

## Appendix F, live site check of 2026-08-24

The tool was published on 2026-08-24 and checked the same day against the deployed
server, first by two external language models and then by a real browser driven through
the whole flow. **One blocking defect was found and fixed the same day**: the final
results page offered a button to a page that is not published, so every click on it
returned a 404. It was invisible in the repository, where that page exists on disk, and
appeared only against the server. **None of what the check then found was
blocking.**

**Nine defects were found and all nine are closed.** Eight are `DBG-040` to
`DBG-047` in the register, seven of them fixed on the spot and the eighth,
`DBG-044`, closed later the same day when the owner decided to vendor the 3D
viewer library. **The ninth, `DBG-048`, was found afterwards** and is the reason
this table has ten rows: it was not part of the browser pass at all, but surfaced
when the question was asked what the last external host actually was. All fixes
are verified in a browser, and the vendoring was verified against the server.

| ID | Where | Problem | Priority | State on 2026-08-24 |
|----------|-------------------|-----------------------------------|-----------|--------------------------------------------|
| STG-01 | Layer 2 PV page, and the scenario summary | The PV generation intensity was still the headline number, at 32px and with no label, although its results row had been replaced by total PV array area on CHV's instruction. **It was on two pages, not one**: the same bar stood on the summary, which is the page a reviewer prints | **P1** | ✅ **Fixed.** The bar is removed from both pages, and the function that drew it is deleted rather than left dead. It was not re pointed at another quantity, because a 0 to 100 kWh/m2 scale cannot be made to read square metres or MWh/yr without inventing a range. **The intensity is still read**, since the total in MWh/yr and the ratio of performance are computed from it, and it is still named in Assumptions and Model Information, which is where CHV asked the parameters to live |
| STG-02 | Landing page | "Get Started" was fully enabled with no pathway chosen and did nothing when clicked: no navigation, no message, no error. **CHV had written the standard herself**, on the button beside it: "It used to accept a click and do nothing, which reads as a choice" | **P1** | ✅ **Fixed.** It now ships `disabled` with `aria-disabled`, prints the reason under it, "Choose a pathway above to continue", and turns on the moment a pathway is chosen. A second gate inside the click handler means the disabled attribute cannot be cleared in the browser inspector to get past it, which is the pattern the climate page already used |
| STG-03 | Final summary, print | The printed scenario never named the tool. It carried the model and data version, but the string LMN appeared nowhere on paper | P2 | ✅ **Fixed.** The printed page now opens "LMN V1, the Layered Modular Neighbourhood tool. Version 1.0.0, last updated 2026-08-24." The line is drawn on paper only, and its text comes from `LMN_CONFIG`, so it cannot drift from the version stamp |
| STG-04 | Final summary, print | The lab attribution and logo did not print, because `.site-footer` was hidden by the print stylesheet along with the navigation | P2 | ✅ **Fixed.** The footer prints, smaller, at the foot of the last page: the lab, the director and the logo. The navigation and the sidebar are still dropped, which is what that rule was for |
| STG-05a | Site wide | `via.placeholder.com` was requested as an image fallback and **failed outright**; the service is dead. Six references in published code | P2 | ✅ **Fixed.** Every reference is gone. An image that will not load is hidden, which is what the landing page already did. **No page contacts that host any more** |
| STG-05b | `3dviewer.html` | `ajax.googleapis.com` serves the `model-viewer` library, so **all 35 models depend on a Google CDN** and none draws on a restricted or offline network | P2 | ✅ **Closed 2026-08-24, on the owner's decision.** Version 4.2.0 is vendored to `vendor/model-viewer/` and the one script tag now points at it. **The library is 1,041,839 bytes, not the third of a megabyte estimated when the defect was written** — the estimate was ours and it was wrong by a factor of three. Verified on the server: the vendored file returns 200 at that exact size and `3dviewer.html` names no external host |
| STG-06 | Layer 3 selection | Four greyed cards gave no reason, while V2G Stations beside them said "Requires EV". A reader could not tell "not built yet" from "not available until you choose something else" | P2 | ✅ **Fixed.** All four now carry NOT MODELLED YET, one of the four status words, and the greyed treatment every other unbuilt option uses. **Every disabled card in the tool now states a reason** |
| STG-07 | Layer 4 selection | The same status text was drawn in capitals on four cards and in title case on three. The source text was identical on all seven; the cause was two stylesheet rules of equal weight and opposite casing | P2 | ✅ **Fixed.** The status badge now states its own casing at a specificity the card rules cannot beat. **One status word, one rendering, on every card on the site** |
| STG-08 | Every page | `/favicon.ico` returned 404 on every page, because no page declared an icon. The console logged an error on every visit, which is the first thing a technical reviewer sees | P2 | ✅ **Fixed.** All 14 pages declare the lab logo as the icon. **Zero 404s across the whole flow** |
| **DBG-048** | `css/styles.css`, every page | **A ninth, found after the other eight and only because the Google Fonts question was asked.** The stylesheet carried one `@import` of `fonts.googleapis.com` at line 3258, **after** the first rule. **CSS discards an `@import` that follows a rule**, so Inter and Outfit had never loaded on any page and everything rendered in the `sans-serif` fallback. The same line was also the last external host the site called | P2 | ✅ **Fixed 2026-08-24.** Both faces vendored to `vendor/fonts/`, four variable `woff2` files covering weights 100 to 900, `latin` and `latin-ext`, about 180 KB, SIL Open Font License 1.1. Four `@font-face` blocks now sit at the top of the file and the `@import` is gone. **Moving the line up would have fixed the loading and kept the external call**, which is why it was vendored instead |

**What the same check confirmed, so that the list above is read in proportion.** All 14
pages load cold with no session and no script error. The state survives a reload at
every one of the ten steps of the flow. The browser back button walks correctly back to
the landing page. **All 26 disabled controls are unreachable by keyboard.** All 166
images load. **All 35 three dimensional models render**, on real graphics hardware.
The exported file agrees with the screen on 47 of 47 numbers.

**How the fixes were checked.** All seven were verified in a real browser, against a
served copy of the corrected code, and then the whole flow was run again: the five
efficiency rungs driven through the interface one at a time by clicking, all 14 pages
opened cold, and the eight verification suites re run. **706 checks, 696 pass**, which is
exactly the count before the fixes, so nothing regressed. The ten failures are all the
same line ending checks, which fail because Git is configured to convert line endings on
checkout; they are recorded in section 10.2 and are not defects in the tool.

**The efficiency ladder, driven one rung at a time.** This was the last open coverage box
of the live site check, and it now passes on every count: the tool's own resolver landed
on the intended rung **5 times out of 5**, the number on screen equalled `js/data.js` **5
times out of 5**, CHV's scenario name was printed for **5 of 5**, and the ladder falls in
the right direction throughout, 119.4, 112.8, 100.0, 86.7, 64.2 kWh/m2 per year.

---

## Appendix F2, live site check of 2026-09-09

`A23` of the closeout checklist asked for the whole live site check to be run again
against the corrected state, and not to rely on the pass of 2026-08-24 recorded in
Appendix F. It was run on 2026-09-09 in a real Chrome driven over the DevTools protocol
against a served copy of the working tree: real navigations, real mouse events at real
coordinates, real key events, with the console, every network request and every dialog
captured per page. The full record is
`docs_implementation/documentation-revisions/Results/RESULT-16_A23_Live-Site-QA_2026-09-09.md`.

**What it covered, against CHV's own wording.**

| | Clause | Result |
|-------|---------------------------------------------|--------------------------------------------------------------------|
| 1 | All 15 pages, cold, no session state | Zero script errors, zero failed requests, zero external hosts, every image drawn |
| 2 | Back, Next, reload, direct URL entry | Eleven steps clicked end to end, reloaded on arrival at each, then walked back to the landing page. Zero findings |
| 3 | All active climates and NUs, baseline | 385 combinations, eleven envelope keys against all 35 neighbourhoods. Every number on screen equals `js/data.js` |
| 4 | The upgraded paths | The five rung efficiency ladder driven by clicking, on all 35 neighbourhoods against both arms of NECB Zone 6, 350 rungs against the 5 of 2026-08-24. The four heat pump rungs matched the stored total on **280 of 280**, and the ladder never rises as a measure is added. **The fifth rung is a defect**, `DBG-054` below |
| 5 | Disabled invalid combinations | All 41 withheld pairs draw their caution notice rather than a blank or a wrong number |
| 6 | Icons, images, 3D | All 35 models load and draw, checked on `model-viewer`'s own `loaded` property. 35 codes, 35 files, no gap either way. The error path prints a named message rather than an empty frame |
| 7 | Labels, units, status | Every greyed option card states its reason; no disabled control on any of the three selection pages takes tab focus |
| 8 | Print and export | The exported `.json` agrees with the screen on all 4 metric rows and all 19 assumption pairs; the print stylesheet drops the navigation and prints the table, the assumptions and the footer, with no horizontal overflow |
| 9 | Browser console | Clean on every page reached in the published flow |
| 10 | Cache and version stamps | `?v=25`, 65 references, all 15 pages, nothing on an older stamp |

**Three defects were found, `DBG-052`, `DBG-053` and `DBG-054`, and all three were open and
recorded in section 12.1 when this appendix was written.**

> **Later the same day, 2026-09-09.** `DBG-052` and `DBG-053` are closed, and `DBG-051`
> with them. The paragraphs below are left as they were written, because they are the
> record of what the pass found. What clause 10 records as `?v=25` on 65 references is
> now `?v=26` on 66, the extra reference being the vendored charting library that closed
> `DBG-052`. **`DBG-054` is unchanged and still open.**

> **2026-09-10, `DBG-054` is half closed.** The paragraph below is left as it was written,
> and one sentence of it has stopped being true. The missing simulations were commissioned
> and finished that day and their results were imported: **210 runs, 35 neighbourhoods
> across the six NECB climate zones, zero EnergyPlus Fatals**, imported into `js/data.js`
> as an `IAL` block on each of those 210 cells and checked back against the source CSV
> field by field, **8 fields on each of 210 rows and 0 mismatches**. So `IAL` is no longer
> present on 0 of 595 cells; it is present on 210, and both resolvers return it rather than
> falling back. **What the paragraph still describes correctly is the high performance
> building**, which the campaign did not cover. Measured over what a visitor can reach, the
> five published climates on both arms: **350 combinations, 175 answer with the simulated
> ideal load and 175 still fall back silently**, all of them on `high-performance-z4` to
> `-z7b`. The stamp that clause 10 records as `?v=25` stood at `?v=27` before this import
> and at `?v=29` after it and the Comparison Mode change of the same day.
>
> **Published and checked on the server the same day, commit `5a956fb`.** Pushed to both
> remotes, the site repository and the mirror on CHV's account, and GitHub Pages rebuilt in
> about 45 seconds. The check was run against the deployed site and not the working copy, the
> same method as the pass above: a real headless Chrome over the DevTools protocol, **30 cases,
> 30 passing**, no console error and no failed request on any page reached. **25 of 25 on the
> standard arm changed when the card was clicked and equalled the stored ideal load total to
> the decimal**, across all five published climates and five neighbourhood types including the
> data centre. **5 of 5 on the high performance arm did not change**, and the assumptions box
> there still prints *"Measures applied: Thermal Load"* beside the HPerf scenario paragraph,
> which is the sentence this appendix describes and the reason the entry is half closed and
> not closed.

`DBG-052` is on `comparison.html`, which is gated and unpublished under `A27`: it loads a
charting library that is not in the repository, so both of its charts are silently blank.
`DBG-053` is the seven card information icons, which take keyboard focus and cannot be
opened from the keyboard because they are spans with a click handler rather than buttons.
Neither is reachable by a user of the published flow.

**`DBG-054` is reachable, and it is the one finding of this pass that needs a decision.**
The Thermal Load card in Layer 2 is offered on every neighbourhood and every climate and
changes no number. Both resolvers ask for an `IAL` column, `js/energy.js` line 566 and
`js/config.js` line 1707, and no cell in `js/data.js` carries one: 17 envelope keys, 595
neighbourhood cells, `IAL` present on 0 of them. Both fall back to the baseline without
saying so. Measured on 70 of 70 rows, the intensity shown after clicking Thermal Load
equals the stored `DEFAULT` total, which is the same number the page shows with no card
clicked, and the seven end use slices are identical to the decimal. What moves is the
wording: the assumptions box prints *"Measures applied: Thermal Load"* while the scenario
line still reads the baseline paragraph and *"Where this number comes from"* still reads
*"Directly simulated"*. **Nothing published is a wrong number.** The value on screen is a
real simulated baseline value. What is wrong is a statement about it. The column exists
upstream, in `LMN-web-full-results/CAN_MTL.csv`, `ASHRAE.csv` and `CAN_CLG.csv`, so the way
out is either a data import under the same traceability gate as every other column, or
withdrawing the card until that import is done. It is not left enabled and inert.

**One method note for whoever repeats this.** The harness is disposable and was written in
a session scratchpad; rebuilding it is about an hour, and the three things that cost time
are worth carrying forward. The site sets `scroll-behavior: smooth`, so a rectangle read
straight after `scrollIntoView` is the old one and every synthetic click lands in the wrong
place unless the scroll is `{behavior: 'instant'}`. A JavaScript dialog freezes the
renderer and every `Runtime.evaluate` with it, so `Page.javascriptDialogOpening` has to be
handled or the run hangs. And `Input.dispatchKeyEvent` with `keyDown` alone does not make a
button fire its click: Enter has to be sent as `rawKeyDown`, then `char` with `text: "\r"`,
then `keyUp`, or every keyboard test reports a false negative.

---

## Appendix G, independent handover test

This protocol provides an independent verification test for new researchers (Shiv and Furqan) to validate that the NEXA tool can be maintained, updated, and operated using this guide alone with minimal assistance from the author.

**Deployment is not part of this test.** The seven tasks are the ones Dr. Hachem-Vermette named, and none of them is a deployment. Publishing an update is section 11.1, and it is covered by the walkthrough in section 14.4, T3, T10 and T11, not here. Appendix C row 7 says the same.

### Environment

Before starting, ensure the working environment satisfies the prerequisites documented in **section 9** (`Dependencies`). Only standard tools are required (Python 3.x, modern web browser, Git, and Node.js for verification scripts). Do not install external frameworks or libraries outside those listed in section 9.

### Test rules and scoring

1. **Self-reliance:** The evaluator works exclusively from this guide and repository files. Minimal author assistance is permitted.
2. **Every question is a finding:** Any question the evaluator must ask the author to complete a task indicates a documentation gap. Record each instance in the findings log against the section that failed to answer it.
3. **Scoring scale:**
   - **Pass:** Task completed successfully using the guide alone with no questions asked.
   - **Pass with questions:** Task completed, but required questions or clarification from the author (logged as findings).
   - **Fail:** Task could not be completed, produced errors, or broke existing functionality.

**Task 5 and task 7 are destructive in shape. Both run on a clone or on a branch. Never on `main`, and never on the live site.**

### Test tasks

| # | Task | Guide section | Pass criterion | Result |
|-------|--------------------------------------|------------|-----------------------------------------------------|----------|
| 1 | Run NEXA locally | 10.1 | The site serves and every page loads with no console error. | |
| 2 | Locate a neighbourhood and its associated simulation and IDF files | 6, 6.12 | Given one NU code, they name the IDF, the weather file and the output folder. | |
| 3 | Trace one displayed result back to its source | 5, 6.0 | Given one number on screen, they reach the CSV row and the campaign that produced it. | |
| 4 | Make a small interface modification | 8.10 | An accent colour, a heading face or one label changes and shows locally. | |
| 5 | Add or duplicate a trial neighbourhood or test case | 8.2 | A duplicated NU appears in the selection with its own data, without breaking the other 35. | |
| 6 | Test one result update | 8.1 | One value changes through the pipeline and shows on the page, not by editing `js/data.js`. | |
| 7 | Test backup and recovery | 13.3, 13.4 | The site is restored from a clone, and the mirror is restored from, not only pushed to. | |

### Findings log

Record every question asked, ambiguity encountered, or documentation fix required:

| # | Guide section | Question asked or gap observed | Required documentation fix |
|----------------|-----------------------------|-------------------------------|--------------------------------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
