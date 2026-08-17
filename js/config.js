/**
 * LMN Tool, js/config.js
 *
 * SINGLE SOURCE OF TRUTH for the tool's global constants.
 *
 * Rules for this file, from STAGE-00 task 0.5, 0.6 and 0.8:
 *   1. Every value that appears on more than one page lives here, once.
 *   2. Every value carries a provenance comment: what it is, where it comes
 *      from, and the decision that approved it.
 *   3. No page may hard code a copy of a value defined here.
 *   4. Per NU data stays in js/data.js. This file holds constants only.
 *   5. Load order on every HTML page: config.js BEFORE data.js.
 *      <script src="js/config.js?v=6"></script>
 *      <script src="js/data.js?v=6"></script>
 *
 * "PENDING" marks a value that is not yet decided. Do not invent a value to
 * fill a PENDING slot, and do not display a PENDING value on any page.
 *
 * Decision references (Dx.y) are the decision registers in
 * docs_implementation/documentation-revisions/Progress/ and /Implementation/.
 * Defect references (DBG-xxx) are docs_implementation/documentation-revisions/Debugs/.
 *
 * Created 2026-08-10, STAGE-00 task 0.5.
 */

const LMN_CONFIG = {

  // =====================================================================
  // 0. Identity
  // =====================================================================

  version: "0.10.0",
  lastUpdated: "2026-08-17",

  // Which simulation campaign the shipped numbers come from.
  // Source: option_9_j_20260707_v2 for the six NECB climates and ASHRAE;
  // option_9_qc1983nu_20260807_all35 for the corrected Montreal runs
  // (RC-D, RC-ML, RC-MR1, RC-R, RC-T) imported by DBG-011 on 2026-08-10.
  dataCampaign: {
    climates: "option_9_j_20260707_v2",
    montrealCorrected: "option_9_qc1983nu_20260807_all35",
    engine: "EnergyPlus v22.1"
  },

  // =====================================================================
  // 1. Units and bases
  // =====================================================================

  units: {
    // STAGE-03 task 3.3. Long form for every visible label, compact form only
    // inside dense tables with the long form in a tooltip.
    eui: "kWh/m² of heated and cooled floor area per year",
    euiCompact: "kWh/m²·yr",

    // CHV, 2026-08-17, point 3, answering our D3.2. Her wording, exactly:
    // "Annual EUI (kWh/m2 of heated and cooled floor area per year)" and
    // "identify it as site energy". This is the string the pages print as the
    // headline label. eui above stays as the bare unit, for tables that
    // already carry their own heading.
    euiLabel: "Annual EUI (kWh/m² of heated and cooled floor area per year)",
    euiLabelShort: "Annual EUI",

    // D3.2, measured 2026-08-10, no longer an open question, and CONFIRMED by
    // CHV on 2026-08-17. EnergyPlus "Total End Uses", electricity plus gas, no
    // source multipliers.
    energyBasis: "site",
    energyBasisSentence: "Site energy: EnergyPlus Total End Uses, electricity plus gas, with no source energy multipliers.",

    // CHV, 2026-08-17, point 3: "explain simply that this includes annual
    // electricity and natural-gas energy used by the buildings, without
    // source/primary-energy conversion factors. Please also document how gas
    // is converted to kWh before being combined with electricity."
    //
    // Measured 2026-08-17, not quoted from a summary. Both fuels are read out
    // of the same EnergyPlus End Uses table, in the same reported unit, GJ in
    // these runs, and converted by one function: idf_reader/main_BEM.py line
    // 682, _eui_to_kwh. 1 GJ = 277.778 kWh, which is 1 kWh = 3.6 MJ. kBtu maps
    // at 0.293071. There is no fuel specific weighting and no source energy
    // factor at any point in the chain.
    energyBasisPlain: "This is site energy: the annual electricity and natural gas the buildings themselves use, added together. No source or primary energy conversion factors are applied.",
    gasConversionSentence: "Natural gas and electricity are read from the same EnergyPlus End Uses table in the same unit, gigajoules, and converted to kWh by the same factor: 1 GJ = 277.778 kWh, which is 1 kWh = 3.6 MJ. Nothing is weighted by fuel.",
    gasConversionFactor: 277.778,

    // D6.0, ANSWERED 2026-08-10 by Koral: keep every published number on the
    // basis the simulation actually used, and name that basis in words on the
    // pages that carry it. No value changes, no upstream re-export.
    //
    // The intensities in ENVELOPE_ENERGY_DATA are per EnergyPlus
    // "Net Conditioned Building Area", because main_BEM.py writes through
    // BEM_utils/onesquare.py which prefers that denominator. GFA_DATA in
    // js/data.js is the EnergyPlus "Total Building Area". On the house
    // neighbourhoods the two differ by a factor of exactly 2, because the
    // attic and the unheated basement are half the area and neither is
    // conditioned. Measured, all nine RC neighbourhoods, in
    // docs_LMN_web/LMN-1983/results/NUs/LMN1983_NU_external_validation.md:
    // RC-D 21201 gross against 10600 net conditioned, share 0.50; RC-HR2
    // 31346 against 28240, share 0.90. GFA_DATA matches the gross column.
    //
    // Do NOT resolve this by editing a number. It is a labelling decision.
    // The two technical keys keep the EnergyPlus vocabulary for the register
    // and the documentation; the two Label keys are what the visitor reads.
    intensityFloorAreaBasis: "net-conditioned",
    absoluteFloorAreaBasis: "gross",
    intensityFloorAreaBasisLabel: "heated and cooled floor area",
    absoluteFloorAreaBasisLabel: "total floor area, heated or not",
    euiBasisCaption: "per heated and cooled floor area",
    floorAreaBasisNote: "Intensities are reported per heated and cooled floor area, which is the area the simulation conditions. The floor area listed on the neighbourhood table is the total built area, including unheated attics and basements. On the house neighbourhoods the total is twice the heated and cooled area."
  },

  // =====================================================================
  // 2. Climates. D0.1, DBG-016
  // =====================================================================
  //
  // The six NECB regions are real, validated simulation arms, each on its own
  // Canadian CWEC weather file. D2.1: none of the six is disabled. The defect
  // D0.1 found was that four of the six NECB buttons named the WRONG CITY. The
  // names below are the corrected ones and are the only ones that may be shown.
  //
  // Source: plan_national_zones.md section 1, the standard to zone to city to
  // EPW registry, lines 39 to 44. The exact file per climate is in weatherFile
  // below, added 2026-08-17 on CHV's point 1.
  //
  // THE SEVENTH REGION IS WITHDRAWN, 2026-08-17. See withdrawnClimates.

  climates: [
    { key: "ashrae",   city: null,               zone: "ASHRAE",  standard: "ASHRAE 90.1", status: "withdrawn", withdrawn: true, label: "Standard (ASHRAE)", weatherFile: "Buffalo Niagara Intl AP, NY, USA, TMY3, WMO 725280" },
    { key: "necb-z4",  city: "Vancouver",        zone: "NECB 4",  standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_BC_Vancouver.Intl.AP.718920_CWEC2020v2.epw" }, // was wrongly "Windsor"
    { key: "necb-z5",  city: "Toronto / Ottawa", zone: "NECB 5",  standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_ON_Bishop-Toronto.City.AP.712650_CWEC2020v2.epw" }, // correct as shipped. Toronto ran; Ottawa is in the same zone and was not run
    { key: "necb-z6",  city: "Montréal",         zone: "NECB 6",  standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_QC_Montreal-Trudeau.Intl.AP.716270_CWEC2020v2.epw" }, // correct as shipped
    { key: "necb-z7a", city: "Winnipeg",         zone: "NECB 7A", standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_MB_Winnipeg-Richardson.Intl.AP.718520_CWEC2020v2.epw" }, // was wrongly "Calgary". Edmonton has no CWEC2020v2 file, so Winnipeg substitutes
    { key: "necb-z7b", city: "Fort McMurray",    zone: "NECB 7B", standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_AB_Fort.McMurray.AP.716890_CWEC2020v2.epw" }, // was wrongly "Whitehorse"
    { key: "necb-z8",  city: "Chisasibi",        zone: "NECB 8",  standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_QC_La.Grande.Riviere.AP.718270_CWEC.epw" }  // was wrongly "Yellowknife". La Grande Riviere, CYGL, is a proxy station about 90 km inland
  ],

  // CHV, 2026-08-17, point 1, in her words: "We cannot have Buffalo/Niagara as
  // a climate case in this tool. The simulations need to correspond to the
  // actual Canadian locations represented ... Do not simply rename the existing
  // Buffalo case ... Until this is resolved, do not call the affected case
  // validated."
  //
  // MEASURED 2026-08-17, session 20, before anything was changed:
  //
  //   * The six NECB arms run on the six Canadian CWEC files listed above.
  //     Source: plan_national_zones.md section 1. Her concern does not reach
  //     them.
  //   * The ashrae arm really is a United States arm end to end: US DOE
  //     prototypes, ASHRAE 90.1, and Buffalo Niagara Intl AP TMY3. Read from
  //     the simulation input itself, SITE:LOCATION in
  //     option_9_j3_20260602_v2/US_ASHRAE/CC-B/.../results/in.idf, and from
  //     results/eplustbl.csv line 217.
  //   * "Buffalo" ALSO appears inside DOE prototype file names, for example
  //     ASHRAE901_OfficeMedium_STD2022_Buffalo_NECB17_Z5_v221, where it names
  //     the prototype's source city and NOT the weather used. The naming
  //     grammar is in BEM_utils/results_csv.py, _parse_sim_id. That occurrence
  //     is not a defect and nothing here depends on it.
  //
  // DECIDED by Koral, 2026-08-17: withdraw it from the climate selection. Not
  // renamed, which she ruled out, and not re-simulated. ASHRAE is a CODE arm,
  // not a Canadian climate, so offering it on the same row as six climate zones
  // is what made it read as one.
  //
  // NOTHING IS DELETED. All 35 neighbourhoods and all 5 scenarios stay in
  // js/data.js under "ashrae" and "high-performance-ashrae". This reverses in
  // one line the day a Montreal re-run lands or a code comparison feature is
  // asked for.
  withdrawnClimates: [
    {
      scope: "climate",
      climates: ["ashrae", "high-performance-ashrae"],
      label: "Results under revision",
      reason: "This is a United States reference case, not a Canadian climate. It was simulated with United States prototypes against ASHRAE 90.1 on a United States weather file, Buffalo Niagara Intl AP, NY. It has been taken out of the climate selection until it can be re-run on the Canadian weather file for the same zone. The six NECB climates are unaffected: each of them runs on its own Canadian CWEC weather file.",
      debugRef: "DBG-034"
    }
  ],

  // Display names for every key that can appear in ENVELOPE_ENERGY_DATA or in
  // an ?envelope= query string. D0.1, DBG-016, STAGE-00 task 0.7.
  //
  // Before 2026-08-10 this map existed three times, in js/app.js, in
  // js/energy-selection.js and in js/energy.js, and all three copies named the
  // same four wrong cities. They now read from here. The alias keys
  // "necb-2017" and "high-performance-necb" resolve to their Montreal target,
  // because D2.3 makes them aliases of "necb-z6" and "high-performance-z6".
  envelopeLabels: {
    "ashrae":                  "Standard (ASHRAE 90.1)",
    "necb-z4":                 "NECB Zone 4 (Vancouver)",
    "necb-z5":                 "NECB Zone 5 (Toronto / Ottawa)",
    "necb-z6":                 "NECB Zone 6 (Montréal)",
    "necb-z7a":                "NECB Zone 7A (Winnipeg)",
    "necb-z7b":                "NECB Zone 7B (Fort McMurray)",
    "necb-z8":                 "NECB Zone 8 (Chisasibi)",
    "necb-2017":               "NECB Zone 6 (Montréal)",
    "high-performance-ashrae": "High Perf. (ASHRAE 90.1)",
    "high-performance-z4":     "High Perf. Zone 4 (Vancouver)",
    "high-performance-z5":     "High Perf. Zone 5 (Toronto / Ottawa)",
    "high-performance-z6":     "High Perf. Zone 6 (Montréal)",
    "high-performance-z7a":    "High Perf. Zone 7A (Winnipeg)",
    "high-performance-z7b":    "High Perf. Zone 7B (Fort McMurray)",
    "high-performance-z8":     "High Perf. Zone 8 (Chisasibi)",
    "high-performance-necb":   "High Perf. Zone 6 (Montréal)",
    "vintage-1983-z6":         "1983 Vintage, NECB Zone 6 (Montréal)"
  },

  // D3.5, task 3.2. Which key holds the no-measure baseline for a given
  // selection.
  //
  // "High Performance" is NOT a separate baseline: it is EEM1, the envelope
  // package, verified at 245 of 245 rows where high-performance-zX DEFAULT
  // equals necb-zX EEM1. So it maps back to the standard arm of the same
  // climate, and the envelope gain becomes visible in the reported change.
  //
  // The 1983 vintage maps to ITSELF. It is a different code era, and setting
  // its baseline to NECB 2017 would put two code editions in one comparison.
  baselineEnvelope: {
    "ashrae":                  "ashrae",
    "necb-z4":                 "necb-z4",
    "necb-z5":                 "necb-z5",
    "necb-z6":                 "necb-z6",
    "necb-z7a":                "necb-z7a",
    "necb-z7b":                "necb-z7b",
    "necb-z8":                 "necb-z8",
    "necb-2017":               "necb-2017",
    "high-performance-ashrae": "ashrae",
    "high-performance-z4":     "necb-z4",
    "high-performance-z5":     "necb-z5",
    "high-performance-z6":     "necb-z6",
    "high-performance-z7a":    "necb-z7a",
    "high-performance-z7b":    "necb-z7b",
    "high-performance-z8":     "necb-z8",
    "high-performance-necb":   "necb-z6",
    "vintage-1983-z6":         "vintage-1983-z6"
  },

  // Which climate a key belongs to, for the assumptions box and the snow note.
  climateOf: {
    "ashrae":                  "ashrae",
    "necb-z4":                 "necb-z4",
    "necb-z5":                 "necb-z5",
    "necb-z6":                 "necb-z6",
    "necb-z7a":                "necb-z7a",
    "necb-z7b":                "necb-z7b",
    "necb-z8":                 "necb-z8",
    "necb-2017":               "necb-z6",
    "high-performance-ashrae": "ashrae",
    "high-performance-z4":     "necb-z4",
    "high-performance-z5":     "necb-z5",
    "high-performance-z6":     "necb-z6",
    "high-performance-z7a":    "necb-z7a",
    "high-performance-z7b":    "necb-z7b",
    "high-performance-z8":     "necb-z8",
    "high-performance-necb":   "necb-z6",
    "vintage-1983-z6":         "necb-z6"
  },

  // D2.9, DBG-022, P0. A user must not be able to reach results without
  // choosing a climate. The tool used to fall back to Montreal silently.
  requireClimateSelection: true,

  // Known gaps in the simulation coverage. A neighbourhood listed here is not
  // offered for the climates named, and the reason is printed on the results
  // page rather than left as a silent absence. CHV's release rule forbids an
  // unsupported case producing a normal looking result.
  //
  // DBG-027, P0, task 3.12. Templates/CAN_Z7B.csv holds 174 rows, not 175:
  // the MU-HC baseline run did not complete upstream and was accepted with a
  // note on 2026-07-14. Until 2026-08-10 the site filled the hole with a copy
  // of the EEM1 row, 170.3, which read as a normal baseline.
  dataGaps: [
    {
      nu: "MU-HC",
      climates: ["necb-z7b", "high-performance-z7b"],
      label: "Not currently available",
      reason: "Its baseline simulation did not complete upstream, so there is no baseline to compare the measures against. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-027"
    },

  // DBG-028, P0, and CHV's decision of 2026-08-13. Her wording: "please
  // disable the five affected NU/climate combinations where the results are
  // still based on the US prototype and mark them clearly as results under
  // revision / not currently available", and, in the same answer, that she
  // does not want a new re-run campaign launched for them yet.
  //
  // Measured 2026-08-10 on the merged sector IDFs of
  // option_9_j_20260707_v2: RC-D, RC-ML, RC-MR1, RC-R and RC-T are merged
  // from DetachedHouse+CZ6A+IECC+2024 in all six CAN_Z arms of that
  // campaign. Montreal was corrected on 2026-08-10 from
  // option_9_qc1983nu_20260807_all35, DBG-011, and stays live. The other
  // five climates have no corrected campaign, so the pair is withheld.
  //
  // The ASHRAE arm is deliberately NOT listed. It is a separate campaign,
  // a US arm, where a US prototype is the correct prototype. The defect is
  // a Canadian NECB arm running a US prototype, which ASHRAE is not.
  //
  // The upstream re-runs this queues are listed for CHV in
  // Results/RESULT-10_Upstream-Rerun-List.md.
    {
      nu: "RC-D",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Results under revision",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are under revision and are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-ML",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Results under revision",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are under revision and are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-MR1",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Results under revision",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are under revision and are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-R",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Results under revision",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are under revision and are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-T",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Results under revision",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are under revision and are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    }
  ],

  // The legacy silent fallback. Kept here only so the guard can name it.
  // It must never be used to compute a displayed number.
  //
  // CHV, 2026-08-17, point 2: "Remove any silent default to Montreal/NECB when
  // a valid climate has not been selected." DBG-004, open by decision since
  // 2026-08-10 and audited in full in Results/RESULT-11, is closed by that
  // instruction. The string survives ONLY so that noClimateNotice below can
  // name what used to happen; nothing computes a number from it any more.
  legacyFallbackClimate: "necb-2017",

  // CHV, 2026-08-17, point 2. What a result page shows when it is reached with
  // no climate in the URL and none in the session: a typed address, a bookmark
  // from before a change, or a cleared session. It used to draw Montreal.
  //
  // Same amber caution box as the withheld pairs, for the same reason: this
  // stands where a number would have been, so it is not an explanation, it is a
  // stop.
  noClimateNotice: {
    label: "No climate selected",
    reason: "This page needs a climate before it can show a result, and none was chosen. Nothing is assumed on your behalf. Go back to the neighbourhood selection and choose a climate and an envelope.",
    linkText: "Choose a climate",
    linkHref: "layer1_NUs_selection.html"
  },

  // CHV, 2026-08-17, point 8: "distinguish directly simulated results from
  // results derived from another simulated scenario."
  //
  // Two words only, and every entry names the decision that established it. A
  // result is "simulated" when an EnergyPlus run produced the number that is on
  // screen. It is "derived" when the number on screen is computed from
  // simulated values, or from an assumption chain, at render time.
  //
  // Nothing here is new work: each of these was established in an earlier
  // session and written into its own decision. What is new is that the tool
  // now says which is which, on the page, instead of leaving the reader to
  // guess.
  provenance: {
    simulatedLabel: "Directly simulated",
    derivedLabel: "Derived",
    simulatedNote: "This number comes straight from an EnergyPlus run of this neighbourhood in this climate.",
    results: {
      eui:            { kind: "simulated", note: "EnergyPlus Total End Uses for this neighbourhood, this climate and this scenario." },
      pvIntensity:    { kind: "simulated", note: "EnergyPlus PV generation for the same run, divided by the heated and cooled floor area of the same run." },
      pvTotal:        { kind: "derived",   note: "The simulated PV intensity multiplied by the heated and cooled floor area. D0.6." },
      highPerfBase:   { kind: "derived",   note: "The High-Performance Envelope arm has no baseline run of its own. Its baseline is the standard arm of the same climate, verified equal at 245 of 245 rows. D3.5." },
      rop:            { kind: "derived",   note: "Computed at render time from two simulated values, the PV generation and the total demand of the same run. It is a ratio, so it is never stored. D0.6, DBG-018." },
      landscapePv:    { kind: "derived",   note: "Not a building energy simulation. A fixed land area assumption multiplied by a specific yield, step by step. D7.1." },
      evV2g:          { kind: "derived",   note: "Not a building energy simulation. An assumption chain from the RT01 mobility reference, applied per household." },
      facadePv:       { kind: "derived",   note: "Three single building runs in Montreal, not a neighbourhood result. Preliminary, and excluded from the totals. D0.5." }
    }
  },

  // =====================================================================
  // 3. Photovoltaics
  // =====================================================================

  pv: {
    // D0.2, decided by Koral 2026-08-10. SUPERSEDED IN PART by D4.3 and
    // DBG-013 on the same day: read roofGroups below before using these.
    //
    // The original decision was "18.65 % everywhere". That was right about the
    // 18.68 %, which appeared on all 35 NUs in js/data.js and in NO upstream
    // source at all: it is deleted, and the field with it. It was wrong about
    // the 20 %. The two are not competing estimates of one quantity. 18.65 %
    // is the flat-roof cell efficiency the pipeline actually uses,
    // BEM_utils/pv_tier1.py:105, and 20 % of APERTURE area with a 0.9 active
    // fraction is the pitched-roof assumption, PV_methodology.md section 6.
    //
    // The two values below remain the default and the flat-roof case. Anything
    // that knows its neighbourhood should call LMN_CONFIG.roofGroupFor() and
    // read moduleEfficiencyLabel from the group instead.
    // Source: PV_methodology.md, plus four upstream documents, RESULT-00.
    moduleEfficiency: 0.1865,
    moduleEfficiencyLabel: "18.65 %",

    // Array and system assumptions, carried over from the existing pages.
    gcr: 0.40,
    dcToAcLosses: 0.14,
    inverterEfficiency: 0.96,

    // D0.6. Verified by Koral's own proposed method: this field matches the
    // paper on 9 of 9 NUs and Templates/PV_generation.csv on 8 of 9.
    // PV_GENERATION_DATA matches on only 3 of 9 and is off by 1.68 to 1.73 on
    // the four pitched roof NUs, so it is NOT authoritative.
    authoritativeSource: "ENVELOPE_ENERGY_DATA[envelope][NU][scenario].pv",

    status: "preliminary",

    // STAGE-04 tasks 4.2 and 4.3, wording chosen by Koral 2026-08-10.
    // One sentence under the PV result saying what is being shown.
    //
    // The baseline wording deliberately avoids "native PV", which is
    // simulation vocabulary. The rung wording carries a second line because
    // the rooftop figure is IDENTICAL on every rung (D4.4, verified across
    // all 16 simulated scenario tags): the injector sizes the array from the
    // roof, and no envelope or heat pump measure changes the roof. Without
    // that line a user clicking through the ladder sees a frozen number and
    // reasonably concludes the page is broken.
    scenarioNotes: {
      baseline: "No rooftop solar array is installed in this case. Any value shown is solar generation already present in the base building.",
      rooftop:  "Rooftop solar sized from the roof geometry. This figure is the same on every rung: the measures change the demand, not the roof."
    },

    // DBG-013, closed 2026-08-10 (Stage 4), answered by Koral.
    // The PV page reported one set of parameters for all 35 NUs. Four of them
    // are wrong for the house neighbourhoods: their panels lie flush on a
    // pitched roof, so there is no rack and ground coverage ratio does not
    // apply at all. Source for both groups: PV_methodology.md sections 3 and 6.
    //
    // Group membership is not guessed. The four below are exactly the NUs whose
    // C-over-B PV ratio falls in the 1.68 to 1.73 band that the south-face-only
    // fix explains, RESULT-04 section 5. RS-S has an 18.8 degree mean roof tilt
    // but sits in the 0.872 flat-roof band, so the pipeline treats it as flat
    // and so do we.
    roofGroups: {
      pitched: {
        nus: ["RC-R", "RC-D", "RC-ML", "RC-T"],
        surface: "Pitched roof, south facing face",
        // 20 % of aperture area with a 0.9 active-area fraction, Group A.
        moduleEfficiencyLabel: "20 % of aperture area",
        mounting: "Flush on the roof face",
        tiltLabel: "Follows the roof pitch",
        gcrApplies: false,
        note: "These are houses. The panels lie flush on the south facing pitched roof and take its slope, so there is no mounting rack and no row spacing. Ground coverage ratio is a flat roof quantity and is not reported here."
      },
      flat: {
        surface: "Flat roof",
        moduleEfficiencyLabel: "18.65 %",
        mounting: "Fixed Open Rack",
        tiltLabel: "45 degrees, facing south",
        gcrApplies: true,
        note: "The array sits on a tilted rack on a flat roof. Rows are spaced so they do not shade each other, which is what the ground coverage ratio describes."
      }
    },

    // CHV, 2026-08-17, point 5: "Please recheck the 18.65% versus 20%
    // assumptions. If the same PV technology is used, I would expect one
    // consistent module efficiency; roof differences should normally be
    // represented through available area, tilt, orientation, active fraction,
    // GCR, etc. Please show me clearly what each efficiency represents and the
    // formula/assumptions behind each."
    //
    // RECHECKED 2026-08-17 against the two sources, and she is essentially
    // right. They are not two technologies:
    //
    //   Pitched, the 4 house NUs. 20 % module efficiency OF APERTURE AREA with
    //   a 0.9 active area fraction. PV_methodology.md sections 6 and 11.
    //   Effective on gross area: 0.20 x 0.9 = 0.18, so 18 %.
    //
    //   Flat, the other 31 NUs. 18.65 % CELL efficiency applied to the racked
    //   module area. BEM_utils/pv_tier1.py line 105,
    //   apply_tier1_pv(cell_efficiency=0.1865). PV_methodology.md section 6
    //   also states 200 W/m2 of roof area for this group.
    //
    // 18.0 % against 18.65 % is a difference of 0.65 of a percentage point, and
    // what separates them is the active area fraction and what the figure is
    // applied to, which is exactly the mechanism she names. The panel is the
    // same in both groups.
    //
    // Whether to harmonise the two into one number is an upstream question and
    // it would change published results, so it is NOT decided here and nothing
    // on the site moves because of it.
    efficiencyExplanation: {
      sameTechnology: "The same module technology is assumed on both roof types. The two efficiency figures differ because of the active area fraction and the area each one is applied to, not because of a different panel.",
      pitched: "Pitched roofs, the four house neighbourhoods: 20 % module efficiency of aperture area, with a 0.9 active area fraction. 0.20 x 0.9 = 0.18, so 18 % of the gross roof face. Source: PV_methodology.md, sections 6 and 11.",
      flat: "Flat roofs, the other 31 neighbourhoods: 18.65 % cell efficiency applied to the racked module area. Source: BEM_utils/pv_tier1.py line 105. The same section also states 200 W/m2 of roof area for this group.",
      shared: "Both groups share the rest of the chain: 14 % system DC to AC losses and 96 % inverter efficiency. Array tilt, azimuth, available area and, on flat roofs only, the ground coverage ratio, are what differ between the two."
    },

    // D0.1a, DBG-019. Snow cover is not modelled. Roof PV is optimistic in the
    // cold zones by the amounts below. The NUMBERS ARE NOT CHANGED. A note is
    // shown on the results page for these three zones only.
    snowCoverNote: {
      "necb-z7a": "Roof PV is optimistic by roughly 10 to 15 % in this zone: snow cover is not modelled.",
      "necb-z7b": "Roof PV is optimistic by roughly 15 to 20 % in this zone: snow cover is not modelled.",
      "necb-z8":  "Roof PV is optimistic by roughly 20 to 25 % in this zone: snow cover is not modelled."
    }
  },

  // D0.5, DBG-017, P0. Facade PV was a fully enabled card on all 35 NUs and
  // all 7 climates that changed no number anywhere. Upstream it was tested on
  // three single buildings, Montreal only (PV_methodology.md section 9). No
  // neighbourhood level facade result exists.
  // Restrict to the 9 NUs that actually contain one of those three archetypes,
  // Montreal only, labelled Preliminary, and excluded from the totals.
  // STAGE-05 task 5.2, CHV Stage 5 item 2. A greyed button with no visible
  // reason reads as a broken button. One wording for every technology that is
  // greyed because no quantitative model exists for it yet, chosen by Koral on
  // 2026-08-11, and it goes on Layer 2 generation and on Layer 4 green
  // infrastructure alike. The pages carry the string in their markup; it is
  // written here once so the two can be checked against each other, which
  // Results/verify_stage05.js does.
  // SUPERSEDED IN PART by D9.2, 2026-08-12. Koral chose "Coming soon" on
  // 2026-08-11; CHV's Stage 9 item 6 requires the same four status terms
  // everywhere, and hers for this case is "Not modelled yet". The value
  // changed, and the key changed with it, because a key that still said
  // comingSoonLabel would tell the next maintainer the opposite of the truth.
  availability: {
    notModelledLabel: "Not modelled yet",

    // CHV, 2026-08-13, for a case that IS modelled but whose result is not
    // publishable: "mark them clearly as results under revision / not
    // currently available". Deliberately NOT added to statusTerms below,
    // which holds the four release terms she fixed earlier and which the
    // Layer 4 assumptions text is asserted to name in full.
    underRevisionLabel: "Results under revision",
    notAvailableLabel: "Not currently available"
  },

  facadePv: {
    enabled: true,
    validNUs: ["RC-HR1", "RC-HR2", "MU-C1", "MU-C2", "MU-U1", "MU-HC", "CC-FD1", "CC-FD2", "CC-FD3"],
    validClimates: ["necb-z6"],
    status: "preliminary",
    includedInTotals: false,
    note: "Facade PV is indicative only. It is based on three single building runs in Montreal and is not included in the totals.",
    // STAGE-05 task 5.1. The one line shown under the card when it is greyed.
    restrictionNote: "Facade PV is available only for the nine Montreal neighbourhoods that contain one of the three tall building archetypes it was tested on."
  },

  // =====================================================================
  // 3b. Landscape PV. D7.1, D7.6, D7.7, DBG-014, P0
  // =====================================================================
  //
  // The page used to publish 608 MWh/yr while its own three configuration rows
  // produced 103.6. Three failures in one chain, all corrected on 2026-08-12:
  //
  //   1. The two fractions were applied in parallel, not in series. The usable
  //      area row read 2,023 m2, which is 10 % of the whole site, so the 20 %
  //      allocation was silently discarded.
  //   2. 2,023 m2 x 200 W/m2 gives 404.7 kWp, and the page showed 475. Reaching
  //      475 kWp needs 29.3 acres of land, not 5.
  //   3. Generation inherited both. The 1,280 kWh/kWp yr specific yield is
  //      sound; only the capacity it multiplied was wrong.
  //
  // Correct chain, and it is now the only place these numbers are written:
  //   20,234 x 0.20 = 4,046.8 m2 allocated
  //           x 0.10 =   404.7 m2 usable
  //           x 0.200 kW/m2 = 80.9 kWp installed
  //           x 1,280 kWh/kWp yr = 103.6 MWh/yr
  //
  // The upstream audit reaches the same two numbers independently and marks its
  // acceptance check AC2 FAIL. Source of the land figure:
  // L3_L4_calculation_methodology_applied.md, "uniform 5 acres (= 20,234 m2)
  // for all NUs. Per-NU variation in LPV is intentionally absent by design."
  lpv: {
    siteAreaM2: 20234,            // 5 acres, uniform by decision, not by defect
    landAllocationFraction: 0.20, // of the site
    usableFraction: 0.10,         // of the allocated land, in series, not parallel
    moduleWattsPerM2: 200,        // 400 W modules at 2 m2 each
    specificYieldKWhPerKWpYr: 1280,
    status: "preliminary",        // D7.7
    // The sentence that stops an identical value on 35 NUs reading as a bug.
    uniformityNote: "A uniform 5 acre (20,234 m2) landscape allocation is applied to every neighbourhood unit. It is not scaled to neighbourhood size, and this is a project decision rather than a result.",
    // Recorded so the next round knows the number is conservative, not wrong.
    usableFractionNote: "The 10 % usable fraction is below the published range for fixed tilt ground mount, 30 to 50 %. Raising it is a redesign of the landscape PV facility, not a correction, and belongs to a later round.",
    preliminaryNote: "Preliminary. Landscape PV is a fixed area assumption multiplied by a specific yield, not a building energy simulation."
  },

  // =====================================================================
  // 4. Ratio of Performance (RoP). D0.3, D0.3a, D0.3b
  // =====================================================================
  //
  // RoP was not invented for the website. It is a published metric of the
  // neighbourhood paper. Quoted from NUs_1st_Paper.md line 309:
  //
  //   "The Ratio of Performance (RoP) is defined as the ratio of annual
  //    on-site PV generation to annual total building energy demand (site
  //    energy) per Neighborhood Unit, where RoP > 1 indicates a net
  //    energy-positive archetype and RoP < 1 indicates a net energy-importing
  //    archetype."
  //
  // Floor area cancels out of the ratio, so D6.0 does NOT block RoP.
  // 2,845 values generated, 0 missing. They live in js/data.js (D0.3a).
  // Regeneration obligation after any change to total or pv: DBG-018.

  rop: {
    enabled: true,
    name: "Ratio of Performance (RoP)",
    abbreviation: "RoP",
    definition: "Annual on-site PV generation divided by annual total building energy demand, site energy, per Neighbourhood Unit.",
    formula: "RoP = pv (kWh/m²·yr) / total (kWh/m²·yr)",
    unit: "dimensionless",
    interpretation: "RoP > 1 is net energy positive. RoP < 1 is net energy importing. RoP > 0.95 is near energy positive.",
    nearPositiveThreshold: 0.95,

    // D0.3b. Shown for every demand option except Thermal Load (IAL), where an
    // ideal load makes the ratio meaningless. The old COP 4 display gate is
    // removed: the publication computes RoP at COP 1 and COP 3.5, never COP 4.
    hiddenForScenarios: ["IAL"],
    legacyCop4Gate: false,

    // CHV, 2026-08-13: keep RoP, and give it "a short and understandable
    // explanation in the interface of what the value means and how it
    // should be interpreted". The definition, the formula and the worked
    // examples stay in documentation.html section D; this is the sentence
    // the reader gets without leaving the result page. Rendered by
    // js/pv.js into #pv-rop-note and #pv-rop-note-legacy.
    interfaceNote: "Ratio of Performance is the annual on-site PV generation divided by the annual total energy demand of the same neighbourhood, both as site energy. It is a ratio, so it has no unit and the floor area cancels out of it. A value of 1 means the neighbourhood generates over a year as much energy as it uses, 0.5 means it generates half, and anything above 0.95 is treated as near energy positive. It is an annual balance and not a statement about any given hour."
  },

  // =====================================================================
  // 5. Scenario ladder labels. STAGE-03 task 3.1
  // =====================================================================
  //
  // One shared map. The per file maps in energy-selection.js, output_energy.js,
  // sidebar.js and finish-design.js are to be deleted and read from here.
  //
  // D3.3 ANSWERED 2026-08-10 by Koral: cumulative naming, so that the ladder
  // reads as one ladder and not as five separate options. Each rung names
  // everything it contains, because each rung is a strict superset of the one
  // below it.
  //
  // The wording follows the upstream ladder in
  // docs_LMN_web/22-06-2026-LMN-website-docs/outputs/LMN_academic_documentation_draft.md
  // section 6, which is also the source of the table in documentation.html.
  // The provisional string that stood here called EEM4 a "deep retrofit". That
  // was wrong: EEM4 adds lighting, equipment and cooling, not a deeper
  // envelope. Corrected with the same edit.

  // SUPERSEDED 2026-08-17 by CHV, point 4, which is the answer to D3.3. She
  // gave the five names herself and they replace the cumulative wording chosen
  // on 2026-08-10. Her instruction, in full:
  //
  //   "Please use the cumulative names: Baseline -> HPerf -> HPerf + Heat Pump
  //   -> HPerf + Heat Pump + DHW -> HPerf + Heat Pump + DHW +
  //   Lighting/Equipment/Cooling. Define HPerf once as High-Performance
  //   Envelope. EEM1, EEM2, etc. can remain in the technical documentation, but
  //   not as the main user-facing names. Please remove Deep Retrofit."
  //
  // The ladder is unchanged, only its wording: each rung is still a strict
  // superset of the one below it. EEM1 to EEM4 survive as the DATA KEYS, which
  // is what js/data.js is keyed by, and they appear on screen nowhere. They
  // stay in documentation.html as the technical keys, which is exactly where
  // she allows them.
  //
  // "Deep retrofit" was already removed on 2026-08-10; the comment recording
  // why is above this block and stays, because it is the record of the fix.
  eemLabelsPending: false,    // D3.3 answered, then confirmed and reworded by CHV
  eemLabels: {
    DEFAULT: "Baseline",
    EEM1:    "HPerf",
    EEM2:    "HPerf + Heat Pump",
    EEM3:    "HPerf + Heat Pump + DHW",
    EEM4:    "HPerf + Heat Pump + DHW + Lighting/Equipment/Cooling",
    IAL:     "Ideal thermal load"
  },

  // CHV, 2026-08-17, points 2 and 4: "Replace Hyper-performance with
  // High-Performance Envelope (HPerf)" and "Define HPerf once as
  // High-Performance Envelope".
  //
  // Defined ONCE, here, and read by the Layer 1 performance popup, by the badge
  // on the climate card, and by every page that names the tier. Before this,
  // the popup said "HPENV" and "Hyper-performance" in the markup and js/app.js
  // wrote "HPENV" into the badge from a literal, so the same tier had three
  // names and none of them was hers.
  //
  // dhw is spelled out here for the same reason: her ladder uses the acronym
  // and the tool has to say once what it stands for.
  envelopeTiers: {
    standard:        { short: "Standard", full: "Standard", definition: "The building code baseline for the selected climate." },
    highPerformance: { short: "HPerf",    full: "High-Performance Envelope", definition: "HPerf is the High-Performance Envelope package: high performance opaque assemblies, triple glazed windows, foundation and slab insulation, and infiltration reduced to a quarter." },
    vintage1983:     { short: "1983",     full: "1983 Quebec Vintage", definition: "The 1983 Quebec construction era, kept as a retrofit starting point. It is a different code era and is compared against itself." }
  },
  acronyms: {
    HPerf: "High-Performance Envelope",
    DHW:   "Domestic hot water",
    EUI:   "Energy Use Intensity",
    RoP:   "Ratio of Performance",
    GCR:   "Ground coverage ratio"
  },

  // The long form, for tooltips and for the assumptions box. Same source as
  // the labels above. Kept out of eemLabels so that a caller asking for a name
  // can never accidentally print a paragraph.
  // Reworded 2026-08-17 with the labels above. Each rung now names the rung
  // below it by HER name rather than by the data key, because these strings are
  // read on screen, in the tooltip and in the assumptions box. The data keys
  // survive as the keys of this object and in documentation.html.
  eemDetails: {
    DEFAULT: "Code compliant baseline as designed. Native PV only.",
    EEM1:    "HPerf, the High-Performance Envelope: high performance opaque assemblies, triple glazed windows (U 0.85, SHGC 0.40), foundation and slab insulation, infiltration reduced to a quarter.",
    EEM2:    "Everything in HPerf, plus a cold climate air source heat pump (COP 4.0 to 4.5), inverter cooling, per zone heat pumps and ventilation heat recovery.",
    EEM3:    "Everything in HPerf + Heat Pump, plus a transcritical CO2 heat pump water heater (DHW, domestic hot water) with a stratified tank, drain water heat recovery and distribution improvements.",
    EEM4:    "Everything in HPerf + Heat Pump + DHW, plus automated shading and daylight dimming, LED lighting, occupancy sensor trim, ENERGY STAR plug loads and electrification of gas appliances in the residential archetypes.",
    IAL:     "HVAC replaced by ideal air loads to expose the pure thermal demand, for district energy sizing. Not directly comparable with delivered fuel or electricity."
  },

  // =====================================================================
  // 5a. The user's Layer 2 selections. STAGE-03 task 3.1
  // =====================================================================
  //
  // CHV, Stage 3 item 1: one name per measure, identical on every page. Four
  // files each carried their own map and the same measure had three names:
  // "Heat Pump (COP 4)" on the breakdown title, "Heat Pump COP 4" in the
  // sidebar and "HP COP 4" on the finish page. One map now, here.
  //
  // The image name is part of the same entry ON PURPOSE. The site is served
  // by GitHub Pages, which is Linux and case sensitive, while development is
  // on Windows, which is not. Every path below was checked against the actual
  // directory listing on 2026-08-10. Building a filename by interpolating a
  // display label, which three of those four files did, is what produced the
  // broken icons CHV saw and Koral could not reproduce.

  selectionLabels: {
    load: {
      thermal_load: { label: "Thermal Load", image: "Content/Images_Layer2_ThermalLoad/thermalload.png" }
    },
    demand: {
      "cop4":       { label: "Heat Pump (COP 4)",   image: "Content/Images_Layer2_EnergyDemand/heatpump_cop4.png" },
      "cop3.5":     { label: "HVAC (COP 3.5)",      image: "Content/Images_Layer2_EnergyDemand/hvac_cop3.5.png" },
      "cop3":       { label: "HVAC (COP 3)",        image: "Content/Images_Layer2_EnergyDemand/hvac_cop3.png" },
      "dhw":        { label: "Heat Pump for DHW",   image: "Content/Images_Layer2_EnergyDemand/dhw.png" },
      "appliances": { label: "Efficient Appliances and Equipment", image: "Content/Images_Layer2_EnergyDemand/appliancesequipment.png" }
    },
    generation: {
      "pv_roof":     { label: "PV on Roof",     image: "Content/Images_Layer2_EnergyGeneration/pv on roof.png" },
      "pv_facade":   { label: "PV on Facade",   image: "Content/Images_Layer2_EnergyGeneration/pv on facade.png" },
      "pvt_roof":    { label: "PV-T on Roof",   image: "Content/Images_Layer2_EnergyGeneration/pv-t on roof.png" },
      "pvt_facade":  { label: "PV-T on Facade", image: "Content/Images_Layer2_EnergyGeneration/pv-t on facade.png" },
      "stc_roof":    { label: "STC on Roof",    image: "Content/Images_Layer2_EnergyGeneration/stc on roof.png" },
      "stc_facade":  { label: "STC on Facade",  image: "Content/Images_Layer2_EnergyGeneration/stc on facade.png" },
      "biomass":     { label: "Biomass",        image: "Content/Images_Layer2_EnergyGeneration/biomass.png" },
      "wind":        { label: "Wind",           image: "Content/Images_Layer2_EnergyGeneration/wind.png" },
      "geothermal":  { label: "Geothermal",     image: "Content/Images_Layer2_EnergyGeneration/geothermal.png" }
    },

    // STAGE-05 task 5.3 and 5.5, DBG-006, the second half. Layer 3 and Layer 4
    // built their icon paths by interpolating a title cased display label into
    // a lower case filename, in eight places across js/sidebar.js and
    // js/finish-design.js. That works on Windows and 404s on GitHub Pages,
    // which is Linux and case sensitive, and every one of those <img> tags
    // hides itself on error, so the failure was invisible.
    //
    // Every path below was checked against the real directory listing on
    // 2026-08-10 and is asserted by Results/verify_stage05.js. The label and
    // the filename are two independent fields and can no longer drift.
    transportation: {
      "ev":                   { label: "EV",                    image: "Content/Images_Layer3_Transportation/ev.png" },
      "ev_public_transport":  { label: "EV Public Transport",   image: "Content/Images_Layer3_Transportation/ev public transport.png" },
      "ev_charging_stations": { label: "EV Charging Stations",  image: "Content/Images_Layer3_Transportation/ev charging stations.png" },
      "v2g_stations":         { label: "V2G Stations",          image: "Content/Images_Layer3_Transportation/v2g stations.png" }
    },
    mobility: {
      "bicycle_infrastructure":    { label: "Bicycle Infrastructure",    image: "Content/Images_Layer3_Mobility/bicycle infrastructure.png" },
      "pedestrian_oriented_design": { label: "Pedestrian-oriented design", image: "Content/Images_Layer3_Mobility/pedestrian-oriented design.png" }
    },
    infrastructure: {
      "green_roofs":               { label: "Green Roofs",               image: "Content/Images_Layer4_Infrastructure/green roofs.png" },
      "vertical_greening_systems": { label: "Vertical Greening Systems", image: "Content/Images_Layer4_Infrastructure/vertical greening systems.png" },
      "linear_greenery":           { label: "Linear Greenery",           image: "Content/Images_Layer4_Infrastructure/linear greenery.png" },
      "green_spaces":              { label: "Green Spaces",              image: "Content/Images_Layer4_Infrastructure/green spaces.png" }
    },
    urbanAgriculture: {
      "roof_gardens": { label: "Roof Gardens", image: "Content/Images_Layer4_UrbanAgriculture/roof gardens.png" },
      "food_gardens": { label: "Food Gardens", image: "Content/Images_Layer4_UrbanAgriculture/food gardens.png" }
    },
    energyIntegrated: {
      "pv_green_roofs": { label: "PV-Green Roofs Integrated Modules", image: "Content/Images_Layer4_EnergyIntegratedGI/pv-green roofs integrated modules.png" },
      "pv_vgs":         { label: "Landscape PV",                      image: "Content/Images_Layer4_EnergyIntegratedGI/lpv.png" }
    }
  },

  // What each rung physically is, from the campaign tags. This is fact, not
  // wording, and is not pending. Source: Debugs/DONE/DBG-011 section 4.
  eemCampaignTags: {
    DEFAULT: "EEM_J_DEFAULT",
    EEM1:    "EEM_J_ENVELOPE",
    EEM2:    "EEM_J_ENV_HVAC",
    EEM3:    "EEM_J_ENV_HVAC_DHW",
    EEM4:    "EEM_J_ENV_HVAC_DHW_EEM4"
  },

  // The six stored end uses, in the stored order.
  endUses: ["Heating", "Cooling", "DHW", "Lighting", "Equipment", "Fans & Pumps"],

  // DBG-024, P0. EnergyPlus reports 14 end use buckets. The site stores six
  // and drops seven, so the six do NOT sum to the stored total, and two
  // screens showed two different EUI values for the same design, 72.3 and
  // 86.8. The stored total is the real EUI, confirmed against the EnergyPlus
  // output tables, and the residual equals the seven dropped buckets to the
  // cent in every neighbourhood checked. Render the stored total, and show
  // the residual as a seventh block rather than discarding it.
  otherEndUseLabel: "Other",
  otherEndUseDescription: "Other end uses: exterior lighting, refrigeration, heat rejection, humidification and heat recovery. EnergyPlus reports fourteen end use categories and this tool charts six, so this block is the remainder that makes the six add up to the reported total.",

  // =====================================================================
  // 6. Electric vehicles and V2G. D0.4, D0.4a, source RT01
  // =====================================================================
  //
  // All four numeric fields are DAILY ENERGY. None of them is a power.
  // Two name collisions were confirmed as Blocking by RT01 section C:
  // "dischargeCapacity" with the unit string "10 kW / day" is not a valid
  // unit, and "v2gPowerAvailable" is named a power while holding kWh/day.
  // The recommended terms below come from IEC, ISO and SAE, not invented.

  ev: {
    ownershipRateLabel: "EV ownership rate (EVs/household)",       // RT01 row 1
    dailyChargingDemandLabel: "Daily charging demand per EV",      // RT01 row 2
    dailyChargingDemandUnit: "kWh/(EV·day)",

    chargingEfficiencyLabel: "Charging efficiency",                // RT01 row 3, keep
    v2gParticipationLabel: "V2G participation rate",               // RT01 row 4, keep
    dischargeEfficiencyLabel: "Discharge efficiency (V2G)",        // RT01 row 5

    dailyV2gExportPerEvLabel: "Daily V2G export per participating EV", // RT01 row 6
    dailyV2gExportPerEvUnit: "kWh/(EV·day)",

    dailyV2gEnergyLabel: "Daily V2G energy delivered",             // RT01 row 7
    dailyV2gEnergyUnit: "kWh/day",

    netGridDemandTotalLabel: "Net grid demand (total)",            // RT01 row 8a
    netGridDemandTotalUnit: "kWh/day",
    netGridDemandIntensityLabel: "Net grid demand intensity",      // RT01 row 8b
    netGridDemandIntensityUnit: "kWh/(m²·day)",

    // Sign convention. The tool follows the grid delivery convention of
    // ISO 52000-1 and ASHRAE 228: POSITIVE means the grid must supply.
    // This collides with the NZEB and PED convention where positive means
    // surplus, so the direction must be stated in words on screen.
    positiveMeans: "deficit",
    signSentence: "A positive value means the neighbourhood must draw that much energy from the grid each day (deficit).",

    // D0.4a. Three states. Today the tool can only ever print the deficit one,
    // because flag f3, netting the on-site PV against the EV load, is with CHV.
    statusStates: {
      deficit: "Grid import required (deficit)",
      balanced: "Net zero balance",
      surplus: "Net energy export (surplus)"
    },

    // The stored strings, kept because Content/Images_Layer3_Transportation is
    // named after them. Display goes through statusStates, never through these.
    statusFromStored: {
      "Grid Stressed - Deficit":   "deficit",
      "Load Balanced - Net Zero":  "balanced",
      "Energy Positive - Surplus": "surplus"
    },

    // D6.7, RT01 row 5. The efficiency is displayed and is NOT applied to the
    // exported energy. That is upstream flag f1 and it is CHV's to answer,
    // D6.9, so the page says so rather than implying a 100 % discharge.
    dischargeEfficiencyNote: "Shown for reference. It is not applied to the exported energy in this version; the method is under review.",

    // D6.12, CHV Stage 6 item 9. Why these results are Preliminary, in one line.
    preliminaryNote: "Preliminary. These figures come from a fixed calculation chain, households x EVs per household x daily charging demand, not from a building energy simulation.",

    // D6.13, CHV Stage 6 item 2. What the results page shows when the visitor
    // arrives without having chosen anything. It must show no numbers at all.
    emptyStateTitle: "No mobility scenario selected",
    emptyStateBody: "Choose EV, and V2G if you want it, on the mobility selection page. No result is shown until a scenario exists.",

    // D6.10, DBG-032. The basis of the intensity, in words, beside the number.
    intensityBasis: "per m2 of heated and cooled floor area, per day"
  },

  // =====================================================================
  // 7. Status vocabulary. STAGE-09 task 9.6
  // =====================================================================
  //
  // These four terms, and no others, describe the maturity of a number.

  statusTerms: ["Simulation-backed", "Preliminary", "In development", "Not modelled yet"]

};

/* ---------------------------------------------------------------------------
 * Accessors. Every page reads a label through one of these, never through a
 * literal of its own. Each falls back to the raw key rather than throwing, so
 * an unknown envelope or scenario shows its key instead of blanking a screen.
 * ------------------------------------------------------------------------- */

// D0.1, DBG-016. Replaces the three duplicated maps described above.
LMN_CONFIG.envelopeLabel = function (key) {
  return LMN_CONFIG.envelopeLabels[key] || key;
};

// STAGE-03 task 3.1. Wording settled by D3.3 on 2026-08-10.
LMN_CONFIG.eemLabel = function (key) {
  return LMN_CONFIG.eemLabels[key] || key;
};

// The long form of the same rung, for a title attribute. Empty string rather
// than the key, so that an unknown scenario produces no tooltip at all instead
// of a tooltip repeating the label.
LMN_CONFIG.eemDetail = function (key) {
  return LMN_CONFIG.eemDetails[key] || "";
};

// STAGE-03 task 3.3, D6.0. The one sentence a visitor reads under an intensity.
LMN_CONFIG.euiBasis = function () {
  return LMN_CONFIG.units.euiBasisCaption;
};

// STAGE-04, DBG-013. The PV parameter set that applies to this neighbourhood.
// Defaults to the flat-roof group, which is 31 of the 35 NUs.
// STAGE-04 tasks 4.2 and 4.3. Rooftop PV is present on every rung of the
// ladder and absent from the baseline, so the scenario tag alone decides.
LMN_CONFIG.pvScenarioNote = function (scenarioKey) {
  const n = LMN_CONFIG.pv.scenarioNotes;
  return (typeof scenarioKey === "string" && scenarioKey.indexOf("EEM") === 0)
    ? n.rooftop : n.baseline;
};

LMN_CONFIG.roofGroupFor = function (nuCode) {
  const g = LMN_CONFIG.pv.roofGroups;
  return (g.pitched.nus.indexOf(nuCode) !== -1) ? g.pitched : g.flat;
};

// STAGE-04. The one line that tells a reader what the number on screen is.
// envelopeLabels already names the city, so the caption is standard plus rung,
// in the ladder wording settled by D3.3. The word "EEM" never appears.
LMN_CONFIG.resultCaption = function (envelopeKey, scenarioKey) {
  const standard = LMN_CONFIG.envelopeLabel(envelopeKey);
  const rung     = LMN_CONFIG.eemLabel(scenarioKey);
  if (!rung || rung === standard) return standard;
  // The rung is a name, not a continuation, since CHV's wording of 2026-08-17:
  // "NECB Zone 6 (Montréal), HPerf + Heat Pump".
  return standard + ", " + rung;
};

// D0.1a, DBG-019. Empty string for the four zones that carry no snow note.
LMN_CONFIG.snowNote = function (climateKey) {
  return LMN_CONFIG.pv.snowCoverNote[climateKey] || "";
};

// D3.5, task 3.2. The key holding the no-measure baseline for this selection.
LMN_CONFIG.baselineEnvelopeFor = function (key) {
  return LMN_CONFIG.baselineEnvelope[key] || key;
};

// The climate a key belongs to, for the assumptions box and the snow note.
LMN_CONFIG.climateOfEnvelope = function (key) {
  return LMN_CONFIG.climateOf[key] || key;
};

// STAGE-03 task 3.1. One label and one icon path per selection, for every
// page. Falls back to the raw key so an unknown selection is visible rather
// than blank.
LMN_CONFIG.selection = function (group, key) {
  const g = LMN_CONFIG.selectionLabels[group] || {};
  return g[key] || { label: key, image: "" };
};

// STAGE-05 task 5.6, DBG-006. What an icon does when its file does not load.
//
// Every <img> in the sidebar and in the Layer 4 summary used to carry
// onerror="this.style.display='none'". A 404 therefore removed the picture and
// left a tidy looking row, which is why CHV saw missing icons on the live site
// and Koral, on a case insensitive Windows filesystem, could not reproduce a
// single one. The failure has to be visible to whoever is developing and
// neutral to whoever is reading.
//
// A grey plate keeps the row aligned, the alt text keeps the meaning, and the
// console warning names the file that is missing so the next case is found in
// seconds rather than by eye.
LMN_CONFIG.iconMissing = function (img) {
  if (!img || img.dataset.iconMissing === "1") return;
  img.dataset.iconMissing = "1";
  const src = img.getAttribute("src") || "(no src)";
  if (typeof console !== "undefined" && console.warn) {
    console.warn("[LMN] icon not found, check the path and its case: " + src);
  }
  img.removeAttribute("src");
  img.classList.add("icon-missing");
  img.title = "Icon not available";
};

// STAGE-05 task 5.1, D0.5, DBG-017. Is facade PV offered for this pair?
// Montreal is stored under several keys, necb-z6 and its alias necb-2017, the
// high performance arm and the 1983 vintage, so the test is on the CITY the
// key belongs to rather than on the key itself. D0.5 restricts facade PV to
// Montreal, not to one standard.
LMN_CONFIG.facadePvAllowed = function (nuCode, envelopeKey) {
  const f = LMN_CONFIG.facadePv;
  if (!f.enabled) return false;
  if (f.validNUs.indexOf(nuCode) === -1) return false;
  if (!envelopeKey) return false;
  const climate = LMN_CONFIG.climateOfEnvelope(envelopeKey);
  return f.validClimates.indexOf(climate) !== -1;
};

// The notice a result page shows in place of a withheld result. Caution
// amber, not explanation teal: this one is not a note beside a number, it
// stands where the number would have been. Returns null when the pair is
// fine, so a caller can write
//   const notice = LMN_CONFIG.dataGapNotice(nu, envelope);
//   if (notice) { container.innerHTML = notice; return; }
// and cannot forget to test it. Added 2026-08-13 on CHV's instruction.
LMN_CONFIG.dataGapNotice = function (nuCode, envelopeKey) {
  const gap = LMN_CONFIG.dataGapFor(nuCode, envelopeKey);
  if (!gap) return null;
  const label = gap.label || LMN_CONFIG.availability.notAvailableLabel;
  // A withdrawn climate is not about one neighbourhood, so the sentence names
  // the climate instead. Added 2026-08-17 with withdrawnClimates: every page
  // that already called this function gates the withdrawn arm as well, without
  // being edited, which is the point of writing the notice once.
  const subject = gap.scope === "climate"
    ? '<strong>' + LMN_CONFIG.envelopeLabel(envelopeKey) + '</strong> is not currently offered. '
    : '<strong>' + nuCode + '</strong> is not shown for ' + LMN_CONFIG.envelopeLabel(envelopeKey) + '. ';
  return '<div class="info-box info-box--caution">' +
    '<div class="info-box-body">' +
    '<p class="info-box-title">' + label + '</p>' +
    '<p class="info-box-line">' + subject + gap.reason + '</p>' +
    '</div></div>';
};

// DBG-027, task 3.12. Returns the gap entry when this NU has no usable result
// for this envelope, or null when the pair is fine.
//
// The withdrawn climates are tested FIRST and independently of the
// neighbourhood, because a withdrawn arm withholds all 35 of them. CHV point 1,
// 2026-08-17, DBG-034.
LMN_CONFIG.dataGapFor = function (nuCode, envelopeKey) {
  const withdrawn = LMN_CONFIG.climateWithdrawn(envelopeKey);
  if (withdrawn) return withdrawn;
  for (const gap of LMN_CONFIG.dataGaps) {
    if (gap.nu === nuCode && gap.climates.indexOf(envelopeKey) !== -1) return gap;
  }
  return null;
};

// CHV, 2026-08-17, point 2. The stop a result page shows when it was reached
// with no climate. Written once, here, for the same reason dataGapNotice is:
// five pages must not carry five wordings of the same refusal.
//
// It is the caution box, not the explanation box, because it stands where the
// result would have been.
LMN_CONFIG.noClimateNoticeHtml = function () {
  const n = LMN_CONFIG.noClimateNotice;
  return '<div class="info-box info-box--caution">' +
    '<div class="info-box-body">' +
    '<p class="info-box-title">' + n.label + '</p>' +
    '<p class="info-box-line">' + n.reason + '</p>' +
    '<p class="info-box-line"><a href="' + n.linkHref + '">' + n.linkText + '</a></p>' +
    '</div></div>';
};

// CHV, 2026-08-17, point 2. Read the chosen climate from the URL, then from the
// session, and RETURN AN EMPTY STRING when there is none. This is the function
// that replaces "|| 'necb-2017'" on every page that prints a number.
//
// The old expression made a wrong default look like a choice. DBG-004, audited
// in Results/RESULT-11 section 3, where it was left open by decision on
// 2026-08-10 and disclosed rather than removed. Her instruction closes it.
//
// The pages that read the value only to build the next page's link keep their
// own expression: they draw no number, and rewriting them would be a refactor
// nobody asked for.
LMN_CONFIG.selectedEnvelopeOrEmpty = function (search, storage) {
  try {
    const params = new URLSearchParams(search || "");
    const fromUrl = params.get("envelope");
    if (fromUrl) {
      if (storage) storage.setItem("selectedEnvelope", fromUrl);
      return fromUrl;
    }
    if (storage) {
      const filtersJson = storage.getItem("activeFilters");
      if (filtersJson) {
        const filters = JSON.parse(filtersJson);
        if (filters && filters.envelope) {
          storage.setItem("selectedEnvelope", filters.envelope);
          return filters.envelope;
        }
      }
      const stored = storage.getItem("selectedEnvelope");
      if (stored) return stored;
    }
  } catch (e) {}
  return "";
};

// CHV point 1, 2026-08-17. Is this envelope key part of a withdrawn climate
// arm? Returns the entry, or null. Tested on the envelope KEY rather than on
// the climate, so that both "ashrae" and "high-performance-ashrae" are caught
// without relying on climateOf.
LMN_CONFIG.climateWithdrawn = function (envelopeKey) {
  if (!envelopeKey) return null;
  for (const entry of LMN_CONFIG.withdrawnClimates) {
    if (entry.climates.indexOf(envelopeKey) !== -1) return entry;
  }
  return null;
};

// CHV point 1, 2026-08-17: the public tool must name the weather file under
// Assumptions and Model Information. Returns the exact file, or an empty string
// for a key with no climate entry.
LMN_CONFIG.weatherFileFor = function (envelopeKey) {
  const climateKey = LMN_CONFIG.climateOfEnvelope(envelopeKey);
  for (const c of LMN_CONFIG.climates) {
    if (c.key === climateKey) return c.weatherFile || "";
  }
  return "";
};

// D6.11, CHV Stage 6 item 8. The stored status string is a file name, not a
// label. Everything on screen goes through here, so the three states have one
// wording each and the deficit case cannot be printed under another name.
LMN_CONFIG.evStatusLabel = function (storedString) {
  const key = LMN_CONFIG.ev.statusFromStored[storedString];
  return key ? LMN_CONFIG.ev.statusStates[key] : storedString;
};

// D7.1, DBG-014. The landscape PV chain, computed rather than stored, so the
// rows on screen and the result cannot disagree again. Returns every step, in
// order, which is exactly what CHV Stage 7 item 5 asks to be shown.
LMN_CONFIG.lpvChain = function () {
  const c = LMN_CONFIG.lpv;
  const allocatedM2 = c.siteAreaM2 * c.landAllocationFraction;
  const usableM2 = allocatedM2 * c.usableFraction;
  const installedKWp = usableM2 * c.moduleWattsPerM2 / 1000;
  const generationMWhYr = installedKWp * c.specificYieldKWhPerKWpYr / 1000;
  return {
    siteAreaM2: c.siteAreaM2,
    allocatedM2: Math.round(allocatedM2 * 10) / 10,
    usableM2: Math.round(usableM2 * 10) / 10,
    installedKWp: Math.round(installedKWp * 10) / 10,
    generationMWhYr: Math.round(generationMWhYr * 10) / 10
  };
};

// Make the constants available to a module loader without changing the
// browser behaviour, which relies on the global const above.
if (typeof module !== "undefined" && module.exports) {
  module.exports = LMN_CONFIG;
}
