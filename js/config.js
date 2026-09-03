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

  // CHV, 2026-08-24: "Please change the title shown in the tool to clearly
  // identify this release as LMN V1, Layered Modular Neighbourhood Tool. I
  // would like LMN V1 to be immediately visible in the main title, not only in
  // the footer or documentation. Please use the same V1 designation
  // consistently in the methodology, README, results/export and handover so
  // that future developments can clearly become V2, etc."
  //
  // These two strings are the single source of the release name. No page, no
  // export and no report writes it as a literal.
  releaseName: "LMN V1",
  productName: "LMN V1, Layered Modular Neighbourhood Tool",

  // 1.0.0, 2026-08-24. The release identity she asked for. The campaign, the
  // stored values and the engine are unchanged: this is the version number of
  // the published tool, not of the simulation data, which carries its own
  // dataCampaign below.
  //
  // 0.10.1, 2026-08-17: presentation only. The ASHRAE card came off the page
  // and the EEM keys came out of the documentation.
  version: "1.0.0",
  lastUpdated: "2026-08-24",

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
  // THE SEVENTH REGION IS WITHDRAWN, 2026-08-17, and NECB ZONE 8 IS WITHDRAWN
  // FROM THE PUBLIC TOOL, 2026-08-24. See withdrawnClimates. Neither is
  // deleted here: both keep every row in js/data.js.

  climates: [
    { key: "ashrae",   city: null,               zone: "ASHRAE",  standard: "ASHRAE 90.1", status: "withdrawn", withdrawn: true, label: "Standard (ASHRAE)", weatherFile: "Buffalo Niagara Intl AP, NY, USA, TMY3, WMO 725280" },
    { key: "necb-z4",  city: "Vancouver",        zone: "NECB 4",  standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_BC_Vancouver.Intl.AP.718920_CWEC2020v2.epw" }, // was wrongly "Windsor"
    { key: "necb-z5",  city: "Toronto",          zone: "NECB 5",  standard: "NECB 2017",   status: "simulation-backed", weatherFile: "CAN_ON_Bishop-Toronto.City.AP.712650_CWEC2020v2.epw" }, // CHV 2026-08-24: "change Toronto / Ottawa to Toronto, since Toronto is the actual weather location used in the simulation". Ottawa is in the same zone and was never run, so it is no longer named
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
  //
  // KORAL, 2026-08-17: the card is off the page as well, not only disabled. His
  // reason: no corrected data can be put behind it, so a permanently dead option
  // is clutter rather than a lesson. The markup is kept commented in
  // layer1_NUs_selection.html so that bringing it back is uncommenting a block
  // and emptying this array. While the array is not empty, every gate in
  // dataGapFor stays on, whether or not a card exists, so the case cannot come
  // back silently.
  //
  // KORAL, 2026-08-17: showOnSelection is false. The box that printed this
  // reason under the climate row is off the page. With the card already gone
  // the box explained an option the visitor never saw, which reads as a note
  // the team left behind rather than as information about the tool. The reason
  // is still written the moment it is needed: a typed address or a session
  // stored before today lands on dataGapNotice and is stopped with this exact
  // sentence. Set showOnSelection back to true to print it under the row again.
  withdrawnClimates: [
    {
      scope: "climate",
      climates: ["ashrae", "high-performance-ashrae"],
      showOnSelection: false,
      label: "Not available in this climate",
      reason: "This is a United States reference case, not a Canadian climate. It was simulated with United States prototypes against ASHRAE 90.1 on a United States weather file, Buffalo Niagara Intl AP, NY. It has been taken out of the climate selection until it can be re-run on the Canadian weather file for the same zone. The six NECB climates are unaffected: each of them runs on its own Canadian CWEC weather file.",
      debugRef: "DBG-034"
    },
    // CHV, 2026-08-24, in her words: "I also do not want Chisasibi published in
    // the public tool at this stage. It can remain part of the research work,
    // database and technical documentation, but please disable it from the
    // public climate selection and do not expose its quantitative results
    // publicly for now."
    //
    // Same mechanism as the ASHRAE withdrawal and for the same reason: the gate
    // lives inside dataGapFor, so a typed address, a bookmark or a session
    // stored before today is stopped on all four result pages without any of
    // them being edited. NOTHING IS DELETED. All 35 neighbourhoods and all 5
    // scenarios stay in js/data.js under "necb-z8" and "high-performance-z8",
    // and the zone stays in the technical register in documentation.html,
    // marked not published in V1, which her own sentence permits.
    //
    // showOnSelection is false, for the reason given above the ASHRAE entry:
    // with the card off the row, a box under the row explains an option the
    // visitor never saw.
    //
    // The reason below is written for a reader, and it is the reason the
    // methodology already carried at documentation.html: Chisasibi has no
    // CWEC2020v2 file, so the run uses La Grande Riviere airport, CYGL, about
    // 90 km inland, and it is the only one of the six on an older CWEC edition.
    {
      scope: "climate",
      climates: ["necb-z8", "high-performance-z8"],
      showOnSelection: false,
      label: "Not available in this climate",
      reason: "NECB Zone 8 is not published in LMN V1. The zone was simulated, and it remains part of the research database and the technical documentation, but its quantitative results are not exposed in the public tool at this stage. It is also the only zone in the campaign without a CWEC2020v2 weather file: the run uses La Grande Riviere airport, CYGL, about 90 km inland from Chisasibi, as a proxy station.",
      debugRef: "CHV-2026-08-24"
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
    "necb-z5":                 "NECB Zone 5 (Toronto)",
    "necb-z6":                 "NECB Zone 6 (Montréal)",
    "necb-z7a":                "NECB Zone 7A (Winnipeg)",
    "necb-z7b":                "NECB Zone 7B (Fort McMurray)",
    "necb-z8":                 "NECB Zone 8 (Chisasibi)",
    "necb-2017":               "NECB Zone 6 (Montréal)",
    "high-performance-ashrae": "High Perf. (ASHRAE 90.1)",
    "high-performance-z4":     "High Perf. Zone 4 (Vancouver)",
    "high-performance-z5":     "High Perf. Zone 5 (Toronto)",
    "high-performance-z6":     "High Perf. Zone 6 (Montréal)",
    "high-performance-z7a":    "High Perf. Zone 7A (Winnipeg)",
    "high-performance-z7b":    "High Perf. Zone 7B (Fort McMurray)",
    "high-performance-z8":     "High Perf. Zone 8 (Chisasibi)",
    "high-performance-necb":   "High Perf. Zone 6 (Montréal)",
    // CHV, 2026-08-24: the displayed name is the reference envelope wording.
    // The KEY stays historical, which is why it still reads "vintage".
    "vintage-1983-z6":         "1983 Quebec reference envelope, NECB Zone 6 (Montréal)"
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
      label: "Not available in this climate",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-ML",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Not available in this climate",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-MR1",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Not available in this climate",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-R",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Not available in this climate",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
      debugRef: "DBG-028"
    },
    {
      nu: "RC-T",
      climates: ["necb-z4", "necb-z5", "necb-z7a", "necb-z7b", "necb-z8", "high-performance-z4", "high-performance-z5", "high-performance-z7a", "high-performance-z7b", "high-performance-z8"],
      label: "Not available in this climate",
      reason: "The results behind them in this climate were merged upstream from a US detached house prototype rather than from the Canadian baseline, so they are not published. The corrected campaign exists for Montreal only. A re-run is needed before this neighbourhood can be shown for this climate.",
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
    // CHV, 2026-08-24, her section 4 item 4: "When a result is calculated from
    // another simulated scenario, label it Derived from simulation rather than
    // Simulation-backed." The point of her item is the classification, not the
    // string: every row that carries a provenance label is one of the two, and
    // the results map below is what decides which.
    derivedLabel: "Derived from simulation",
    simulatedNote: "This number comes straight from an EnergyPlus run of this neighbourhood in this climate.",
    results: {
      eui:            { kind: "simulated", note: "EnergyPlus Total End Uses for this neighbourhood, this climate and this scenario." },
      // CHV, 2026-08-24: the intensity is no longer displayed. It is kept here
      // because it is still the value the total is computed from, and a reader
      // of the assumptions block is entitled to know that.
      pvIntensity:    { kind: "simulated", note: "EnergyPlus PV generation for the same run, divided by the heated and cooled floor area of the same run. It is no longer shown as a result, on her instruction of 2026-08-24, and it remains the value the total below is computed from." },
      pvTotal:        { kind: "derived",   note: "The simulated PV intensity multiplied by the heated and cooled floor area. D0.6." },
      // CHV, 2026-08-24: "Replace it with total PV area (m2)." X23, DBG-038.
      pvArea:         { kind: "simulated", note: "The photovoltaic array area injected on this neighbourhood, read from the simulation input that produced the generation above: the active area of each host roof face, plus the rack area on flat roofs. It is not an estimate and it is absent where the extraction produced no number." },
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
    // DBG-037, P0, closed 2026-08-24. CHV, point 3 of the same date: "one
    // calculation uses 20% and the other 18.65% ... please show me the exact
    // original model/source for both assumptions."
    //
    // Measured in the upstream code on 2026-08-24, and the answer is that
    // NEITHER of those two numbers produced a published result:
    //
    //   main_BEM.py:757  return "T3PV"   the improved PV track is always
    //   Tier 3, Tier 2 retired 2026-05-29, and every Option 9 handler calls
    //   pv_apply.apply_tier3_pv. So Tier 3 made every kWh on this site.
    //
    //   BEM_utils/pv_tier3.py:50  TIER3_PANEL_EFFICIENCY = 0.230, a PANEL
    //   efficiency, injected into PhotovoltaicPerformance:Simple.
    //
    //   BEM_utils/pv_tier1.py:105 cell_efficiency = 0.1865, a CELL efficiency
    //   behind an active fraction of 0.80 that was never stated on this site,
    //   pv_utils.py:247. Tier 1 is retired and survives only in a tier scan.
    //
    //   PV_methodology.md lines 131 and 247, 20 % of APERTURE with a 0.9
    //   active fraction, sourced to NREL [R1] and Ladybug Tools [R8]. It is a
    //   literature reference row, not an injected value.
    //
    // This block used to publish 0.1865 and call it "the flat-roof cell
    // efficiency the pipeline actually uses". That sentence was not true. The
    // values below are the Tier 3 parameters that produced the results. NO
    // RE-RUN: the generated energy is unchanged EnergyPlus output and only the
    // assumption printed beside it was wrong. CHV allowed exactly this: "I do
    // not want a large rerun now solely for this."
    //
    // The field names are kept because they are keys, not names. Anything that
    // knows its neighbourhood should call LMN_CONFIG.roofGroupFor() and read
    // moduleEfficiencyLabel from the group instead.
    injectorTrack: "Tier 3",
    moduleEfficiency: 0.230,
    moduleEfficiencyLabel: "23 % panel efficiency",

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
        // Tier 3, DBG-037. The cells sit on the south facing roof face itself
        // at an active area fraction of 0.85, pv_tier3.py:51 and :651.
        moduleEfficiencyLabel: "23 % panel, active fraction 0.85",
        activeFraction: 0.85,
        mounting: "Flush on the roof face",
        tiltLabel: "Follows the roof pitch",
        gcrApplies: false,
        note: "These are houses. The panels lie flush on the south facing pitched roof and take its slope, so there is no mounting rack and no row spacing. Ground coverage ratio is a flat roof quantity and is not reported here."
      },
      flat: {
        surface: "Flat roof",
        // Tier 3, DBG-037. The rack is a Shading:Building:Detailed surface of
        // area sum(roof_area) x GCR 0.40 / cos 45, and the cells fill it,
        // pv_tier3.py:617 to 623.
        moduleEfficiencyLabel: "23 % panel, active fraction 1.0 on the rack",
        activeFraction: 1.0,
        mounting: "Fixed Open Rack",
        tiltLabel: "45 degrees, facing south",
        gcrApplies: true,
        note: "The array sits on a tilted rack on a flat roof. Rows are spaced so they do not shade each other, which is what the ground coverage ratio describes."
      }
    },

    // CHV, 2026-08-17 point 5, reopened 2026-08-24 point 3: "Please show me
    // the exact original model/source for both assumptions and clarify whether
    // these are two different definitions applied to different reference areas
    // or two legacy modelling conventions."
    //
    // Answered from the upstream code, DBG-037. They are two legacy modelling
    // conventions, applied to two different reference areas, and the model that
    // produced the results is a third one. The block below states the third one
    // first and then names the other two for what they are. The keys are kept
    // so that every page that already reads this block keeps working.
    efficiencyExplanation: {
      sameTechnology: "One panel is assumed on every roof. Every PV number published in this tool was produced by the Tier 3 injector at a panel efficiency of 23.0 %. What changes between roof types is the mounting and the fraction of the surface that carries cells, not the panel. Source: BEM_utils/pv_tier3.py line 50, and main_BEM.py line 757, which fixes the improved PV track to Tier 3.",
      pitched: "Pitched roofs, the four house neighbourhoods: the cells sit flush on the south facing roof face, with an active area fraction of 0.85. Effective on that face, 0.230 x 0.85, so 19.55 %. Source: BEM_utils/pv_tier3.py lines 51, 480 to 485 and 651.",
      flat: "Flat roofs, the other 31 neighbourhoods: the cells sit on a 45 degree open rack whose area is the roof area multiplied by a ground coverage ratio of 0.40 and divided by cos 45. The cells fill the rack, so the active fraction there is 1.0. Source: BEM_utils/pv_tier3.py lines 617 to 623.",
      shared: "Both groups share the rest of the chain: 14 % system DC to AC losses and 96 % inverter efficiency.",
      retired: "Two other efficiency figures appear in the upstream documentation and neither of them produced a number in this tool. 18.65 % is a CELL efficiency from the Tier 1 injector, retired on 2026-05-29, and it sat behind an active area fraction of 0.80, BEM_utils/pv_tier1.py line 105 with pv_utils.py line 247. 20 % is a MODULE efficiency of aperture area with a 0.9 active fraction, quoted in PV_methodology.md lines 131 and 247 as a literature reference from NREL and Ladybug Tools. Comparing 18.65 % with 20 % without their active fractions compares a cell with a module, which is why the difference never closed.",
      correction: "Until 2026-08-24 this tool printed 18.65 % as its own module efficiency. That was a retired convention, not the model behind the results, and it has been corrected here. The generated energy is unchanged: it is EnergyPlus output from the Tier 3 model, and only the assumption stated beside it was wrong. No simulation was re-run.",
      preliminary: "These PV assumptions are Preliminary. Harmonising the three conventions into one upstream figure would change published results and is left to a later version."
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
  // Comparison Mode is built, reviewed and NOT published: comparison.html and
  // js/comparison.js are deliberately not committed. The final results page
  // still carries the entry point, so the button has to be told to stay away.
  // An entry point that reaches a 404 is worse than no entry point.
  //
  // Found on the live site by an external model on 2026-08-24, Stage 10,
  // EXT-01, P0. Turn published to true on the same day comparison.html is
  // committed, and not one day before.
  comparisonMode: {
    published: false,
    reason: "Comparison Mode is not published in LMN V1."
  },

  availability: {
    notModelledLabel: "Not modelled yet",

    // CHV, 2026-08-13, for a case that IS modelled but whose result is not
    // publishable: "mark them clearly as results under revision / not
    // currently available". Deliberately NOT added to statusTerms below,
    // which holds the four release terms she fixed earlier and which the
    // Layer 4 assumptions text is asserted to name in full.
    //
    // REWORDED 2026-08-24 by CHV: "The Results under revision message currently
    // shown at the bottom should not remain in the final published V1. It is
    // fine internally during development, but those cases should either be
    // corrected or disabled before publication."
    //
    // Correcting them is five upstream simulation campaigns and is not
    // available to us, so they are DISABLED: the affected pairs are not offered
    // and the boxes that explained them are off the selection page. The field
    // names are kept because they are keys. The wording that survives is the
    // one a visitor sees only if they type an address for a pair that is not
    // published, and at that point "not available in this climate" is the true
    // and useful sentence. The revision language stays in the debug register,
    // which is where the state of our work belongs.
    underRevisionLabel: "Not available in this climate",
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

  // SHORTENED 2026-08-24 by CHV, in her words: "The cumulative logic is
  // correct, but the current names are too long for the interface. Please use:
  // Baseline / HPerf / HPerf + Space HP / HPerf + Space HP + HPWH / HPerf +
  // Space HP + HPWH + EEM. Please include a clear legend/terminology
  // explanation where these abbreviations first appear ... Please do not use
  // Deep Retrofit."
  //
  // Three strings move. The ladder itself does not: resolveScenarioKey, the
  // gates and the cumulative rule are untouched, and she confirmed the logic is
  // correct. EEM1 to EEM4 remain the DATA KEYS of js/data.js and appear on
  // screen nowhere.
  //
  // The word EEM returns to the interface as the fifth rung name and as a
  // defined abbreviation. That reverses the instruction of 2026-08-17 that "the
  // word EEM appears on no control", and it is her own later instruction, so it
  // is her reversal and not a defect. See LMN_CONFIG.abbreviations, which is
  // the legend she asks for.
  eemLabelsPending: false,    // D3.3 answered, then confirmed and reworded by CHV
  eemLabels: {
    DEFAULT: "Baseline",
    EEM1:    "HPerf",
    EEM2:    "HPerf + Space HP",
    EEM3:    "HPerf + Space HP + HPWH",
    EEM4:    "HPerf + Space HP + HPWH + EEM",
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
    // CHV, 2026-08-24, asked what the 1983 model represents, so that the
    // terminology is correct rather than only shorter. Confirmed from the
    // upstream source, docs_LMN_web/LMN-1983/README.md and the validation
    // report: it is a CODE ERA REFERENCE ENVELOPE, built to Quebec Regulation
    // E-1.1, r. 1, Order in Council 89-83, and it is NOT a survey of existing
    // buildings. Arm CAN_MTL_1983, all 35 neighbourhoods, Montreal only,
    // validated against external statistical benchmarks rather than against
    // measured meters.
    vintage1983:     { short: "1983",     full: "1983 Quebec code-era reference envelope", definition: "An envelope built to the 1983 Quebec construction requirements, Regulation E-1.1, r. 1, Order in Council 89-83. It is a code-era reference, not a survey of the buildings that exist today, and it is available for Montreal only. It is a different code edition from NECB 2017, so it is compared against itself and never mixed with the NECB arms." }
  },
  acronyms: {
    HPerf: "High-Performance Envelope",
    DHW:   "Domestic hot water",
    EUI:   "Energy Use Intensity",
    RoP:   "Ratio of Performance",
    GCR:   "Ground coverage ratio"
  },

  // CHV, 2026-08-24: "Please include a clear legend/terminology explanation
  // where these abbreviations first appear: HPerf = High-Performance Envelope,
  // Space HP = Heat Pump for space conditioning, HPWH = Heat Pump Water Heater,
  // EEM = Energy Efficiency Measures. The terminology should be consistent
  // throughout the selections, graphs, results, summary and methodology."
  //
  // Her four, in her order, in her words. This is the ONLY place they are
  // defined. LMN_CONFIG.terminologyLegendHtml() and LMN_CONFIG.termChipHtml()
  // render them, and every page that needs the legend calls that. acronyms
  // above stays for the other five terms, which are not part of the scenario
  // ladder; HPerf appears in both and both read the same string, which is
  // checked by the verification suite.
  abbreviations: [
    { short: "HPerf",    full: "High-Performance Envelope",         note: "High performance opaque assemblies, triple glazed windows, foundation and slab insulation, and infiltration reduced to a quarter." },
    { short: "Space HP", full: "Heat Pump for space conditioning",  note: "A cold climate air source heat pump for heating and cooling, COP 4.0 to 4.5, with inverter cooling and ventilation heat recovery." },
    { short: "HPWH",     full: "Heat Pump Water Heater",            note: "A transcritical CO2 heat pump water heater with a stratified tank, drain water heat recovery and distribution improvements." },
    { short: "EEM",      full: "Energy Efficiency Measures",        note: "On the top rung only: automated shading and daylight dimming, LED lighting, occupancy sensor trim, ENERGY STAR plug loads, and electrification of gas appliances in the residential archetypes." }
  ],

  // The long form, for tooltips and for the assumptions box. Same source as
  // the labels above. Kept out of eemLabels so that a caller asking for a name
  // can never accidentally print a paragraph.
  // Reworded 2026-08-17 with the labels above. Each rung now names the rung
  // below it by HER name rather than by the data key, because these strings are
  // read on screen, in the tooltip and in the assumptions box. The data keys
  // survive as the keys of this object and in documentation.html.
  eemDetails: {
    DEFAULT: "Code compliant reference case built to NECB 2017 as designed (not a survey of existing buildings). Native PV only.",
    EEM1:    "HPerf, the High-Performance Envelope: high performance opaque assemblies, triple glazed windows (U 0.85, SHGC 0.40), foundation and slab insulation, infiltration reduced to a quarter.",
    EEM2:    "Everything in HPerf, plus Space HP: a cold climate air source heat pump (COP 4.0 to 4.5), inverter cooling, per zone heat pumps and ventilation heat recovery.",
    EEM3:    "Everything in HPerf + Space HP, plus HPWH: a transcritical CO2 heat pump water heater with a stratified tank, drain water heat recovery and distribution improvements.",
    EEM4:    "Everything in HPerf + Space HP + HPWH, plus the EEM package: automated shading and daylight dimming, LED lighting, occupancy sensor trim, ENERGY STAR plug loads and electrification of gas appliances in the residential archetypes.",
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
  // Layer 3 is marked Preliminary (not a building energy simulation).
  // The six calculation values are the default arguments of
  // Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py. The equations
  // in that file are numbered 12 to 18, and the source is identified (2026-08-31):
  // Hachem-Vermette, C. (2025), Designing energy-positive neighborhoods: a modular
  // framework for integrated planning and policy guidance, Energy Reports 14,
  // 4492 to 4507, section 2.4, equations 12 to 18. The match is exact, symbol for
  // symbol, for all seven equations, and equations 1 to 11 of the paper are the
  // photovoltaic, district heating and heat pump chain, which is why the EV block
  // starts at 12. Local copy:
  // docs_implementation/documentation-revisions/Resources/1-s2.0-S2352484725006365-main.pdf
  // (the earlier negative search is kept in
  // docs_implementation/documentation-revisions/DeepResearchPrompts/responses/RT02_chv_ev_v2g_source_paper.md).
  // Dr. Hachem-Vermette's instruction of 2026-08-30 was to use her paper's
  // assumptions as the provisional basis, and the paper is now named.
  // The 50 % stationary storage share (calculate_ev_scenarios.py line 31) is the
  // paper's own, written inside equation 13 and not justified there; a candidate
  // physical reading is vehicle standby drain (0.83 kWh/EV/day, unconfirmed, flag f2).
  // As noted by Dr. Hachem-Vermette (2026-08-30), the V2G methodology,
  // efficiencies and losses will require further development and validation in future work.
  //
  // All four numeric fields are DAILY ENERGY. None of them is a power.
  // Two name collisions were confirmed as Blocking by RT01 section C:
  // "dischargeCapacity" with the unit string "10 kW / day" is not a valid
  // unit, and "v2gPowerAvailable" is named a power while holding kWh/day.
  // The recommended terms below come from IEC, ISO and SAE, not invented.

  ev: {
    ownershipRateLabel: "EV ownership rate (EVs/household)",       // RT01 row 1 (provisional V1 basis: 1.5 EVs/household)
    dailyChargingDemandLabel: "Daily charging demand per EV",      // RT01 row 2 (provisional V1 basis: 15 kWh/(EV·day))
    dailyChargingDemandUnit: "kWh/(EV·day)",

    chargingEfficiencyLabel: "Charging efficiency",                // RT01 row 3 (provisional V1 basis: 90 %)
    v2gParticipationLabel: "V2G participation rate",               // RT01 row 4 (provisional V1 basis: 50 %)
    dischargeEfficiencyLabel: "Discharge efficiency (V2G)",        // RT01 row 5 (provisional V1 basis: 90 %, displayed and not applied)

    dailyV2gExportPerEvLabel: "Daily V2G export per participating EV", // RT01 row 6 (provisional V1 basis: 10 kWh/(EV·day))
    dailyV2gExportPerEvUnit: "kWh/(EV·day)",

    dailyV2gEnergyLabel: "Daily V2G energy delivered",             // RT01 row 7 (provisional V1 basis)
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
    preliminaryNote: "Preliminary. These figures come from a fixed calculation chain, households x EVs per household x daily charging demand, not from a building energy simulation. The V2G methodology, efficiencies and losses will require further development and validation in future work.",

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

  // CHV, 2026-08-24 added the fifth term. The first four are the release terms
  // she fixed on 2026-08-13. "Derived from simulation" joins them because she
  // asked for it by name and because it is the label the provenance block above
  // now prints on every derived row.
  statusTerms: ["Simulation-backed", "Derived from simulation", "Preliminary", "In development", "Not modelled yet"]

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

// ---------------------------------------------------------------------------
// ComparisonMode v2, P3. The neighbourhood energy balance.
//
// Decision V2-D3, 2026-08-21. This is NOT the Ratio of Performance. RoP is
// defined above as building only, on-site PV over building demand, and that
// definition is quoted in documentation.html section D. The balance ratio below
// adds the EV fleet to the demand side and landscape PV to the generation side,
// so it answers a different question and carries a different name. Both are
// shown, side by side, each with its own definition.
//
// The three quantities can legitimately be added because they already share one
// basis: EV_V2G_DATA[nu].totalFloorArea was replaced by CONDITIONED_AREA_DATA
// under DBG-032 / D6.10, so the EV chain and the EUI denominator are the same
// heated and cooled floor area, on all 35 neighbourhoods.
// ---------------------------------------------------------------------------

LMN_CONFIG.neighbourhoodBalance = {
  enabled: true,
  name: "Neighbourhood energy balance ratio",
  abbreviation: "NEB",
  definition: "Annual on-site generation, rooftop PV plus landscape PV, divided by annual neighbourhood demand, building demand plus electric vehicle charging. Site energy, per Neighbourhood Unit.",
  formula: "NEB = (rooftop PV + landscape PV) / (building demand + EV charging), all in MWh/yr",
  unit: "dimensionless",
  interpretation: "The ratio the whole neighbourhood achieves once the vehicles are counted as a load and the landscape array as a supply. It is always lower than RoP whenever an EV fleet is selected.",

  // Which of the two ratios is which, in one line each, for the table.
  ropContrast: "RoP counts the buildings only. The balance ratio counts the buildings, the vehicles and both arrays.",

  // Decision V2-D1, 2026-08-21. Basis: the Layer 3 mobility report, archived
  // 2026-08-27 out of the published tree under docs_implementation/DONE/, which
  // models daily vehicle mileage as a static average of 15 kWh per EV per day,
  // roughly 200 km of range, with no seasonal, vacancy or cold weather term.
  // The stored figure is therefore a daily average and 365 is the right factor,
  // but the assumption is printed beside the number rather than absorbed.
  evAnnualisation: {
    daysPerYear: 365,
    basis: "daily average",
    note: "Preliminary. The stored EV figure is a daily average, so the annual total assumes 365 identical days: no seasonal variation, no vacancy and no cold weather range loss."
  },

  // Decision V2-D2, 2026-08-21. Landscape PV enters the generation sum, but
  // always on its own line, never merged into a single PV figure, because the
  // 5 acre allocation is uniform across all 35 NUs and is a project decision
  // rather than a result. See lpv.uniformityNote.
  lpvInclusion: {
    included: true,
    note: "Landscape PV is kept as a separate line inside the generation total, so a reader can subtract it by eye. The allocation is the same on every neighbourhood."
  },

  // Every row in the balance block is arithmetic on values shown above it.
  // Nothing here is a new simulation.
  derivedNote: "Every row in this block is arithmetic on the intensities above and the heated and cooled floor area. No new simulation."
};

// ---------------------------------------------------------------------------
// ComparisonMode v2, P1. The one scenario resolver.
//
// Until 2026-08-21 the rung was resolved twice, once in finish-design.js and
// once in comparison.js, and the two copies disagreed: comparison.js promoted
// a design to EEM4 on the appliance measure alone. The ladder in data.js is
// cumulative and strictly nested, as eemDetails says in words - every rung
// above EEM1 already contains the heat pump - so a rung cannot be entered
// halfway. The same selections were therefore showing two different EUIs on
// two pages that claim to show the same design.
//
// Both pages now call this function and nothing else. It reads no storage and
// no query string: the caller supplies the selections it holds.
//
//   opts = { envelopeKey, nuCode, load: [...], demand: [...] }
//
// Returns { envelopeKey, refEnvelope, baseLevel, scenario, energyObject,
//           measuresNotRepresented: [...], ladderNote: "" }
//
// ladderNote is a sentence for the screen, empty when the selections land on a
// simulated rung exactly. It is never a silent promotion.
// ---------------------------------------------------------------------------

LMN_CONFIG.eemLadder = {
  // The gate rule, in one place, in words. Quoted in documentation and in the
  // not-a-rung sentence below.
  rule: "The ladder is cumulative. Space HP opens every rung above HPerf, HPWH opens the rung above that, and the EEM package sits on the top rung only.",
  gates: {
    EEM2: ["cop4", "cop3.5", "cop3"],
    EEM3: ["dhw"],
    EEM4: ["appliances"]
  },
  // name plus the verb it takes, so the sentence below reads correctly
  // whether one measure or several are unrepresented.
  measureNames: {
    cop4:     { name: "Space HP", verb: "is" },
    "cop3.5": { name: "Space HP", verb: "is" },
    cop3:     { name: "Space HP", verb: "is" },
    dhw:      { name: "HPWH", verb: "is" },
    appliances: { name: "the EEM package", verb: "is" }
  }
};

LMN_CONFIG.resolveScenarioKey = function (opts) {
  const o = opts || {};
  const envelopeKey = o.envelopeKey || "";
  const nuCode = o.nuCode || "";
  const load = o.load || [];
  const demand = o.demand || [];

  // The high performance arms have no DEFAULT row: they start at EEM1.
  let refEnvelope = envelopeKey;
  let baseLevel = "DEFAULT";
  if (envelopeKey.indexOf("high-performance-") === 0) {
    baseLevel = "EEM1";
    if (envelopeKey === "high-performance-necb") refEnvelope = "necb-2017";
    else if (envelopeKey === "high-performance-ashrae") refEnvelope = "ashrae";
  }

  const nuTable = (typeof ENVELOPE_ENERGY_DATA !== "undefined" &&
                   ENVELOPE_ENERGY_DATA[refEnvelope])
    ? ENVELOPE_ENERGY_DATA[refEnvelope][nuCode]
    : null;

  let scenario;
  const notRepresented = [];

  if (load.indexOf("thermal_load") !== -1) {
    // Ideal air loads, where they were simulated. Nothing else applies.
    scenario = (nuTable && nuTable["IAL"]) ? "IAL" : baseLevel;
  } else {
    const hasHP = demand.indexOf("cop4") !== -1 ||
                  demand.indexOf("cop3.5") !== -1 ||
                  demand.indexOf("cop3") !== -1;
    const hasDhw = demand.indexOf("dhw") !== -1;
    const hasAppliances = demand.indexOf("appliances") !== -1;

    if (hasHP) {
      if (hasDhw && hasAppliances) scenario = "EEM4";
      else if (hasDhw) scenario = "EEM3";
      else scenario = "EEM2";
      // The top rung carries the DHW measure with it, so appliances chosen
      // without DHW cannot be credited.
      if (hasAppliances && !hasDhw) notRepresented.push("appliances");
    } else {
      scenario = baseLevel;
      if (hasDhw) notRepresented.push("dhw");
      if (hasAppliances) notRepresented.push("appliances");
    }
  }

  let ladderNote = "";
  if (notRepresented.length) {
    const entries = notRepresented
      .map(function (k) {
        return LMN_CONFIG.eemLadder.measureNames[k] || { name: k, verb: "is" };
      })
      .filter(function (v, i, a) {
        return a.map(function (x) { return x.name; }).indexOf(v.name) === i;
      });
    const names = entries.map(function (e) { return e.name; });
    const list = names.length > 1
      ? names.slice(0, -1).join(", ") + " and " + names[names.length - 1]
      : names[0];
    const verb = names.length > 1 ? "are" : entries[0].verb;
    ladderNote = LMN_CONFIG.eemLadder.rule +
      " This design therefore resolves to " + LMN_CONFIG.eemLabel(scenario) +
      ", the nearest simulated case, and " + list +
      " " + verb + " not represented in the numbers below.";
  }

  const energyObject = nuTable ? nuTable[scenario] : null;

  // refEnvelope and baseLevel are returned as well, because the baseline column
  // is the same neighbourhood in the same climate at the rung the arm starts
  // from: DEFAULT for the standard arms, EEM1 for the high performance ones.
  return {
    envelopeKey: envelopeKey,
    refEnvelope: refEnvelope,
    baseLevel: baseLevel,
    scenario: scenario,
    energyObject: energyObject || null,
    measuresNotRepresented: notRepresented,
    ladderNote: ladderNote
  };
};

// CHV, 2026-08-24: "Please include a clear legend/terminology explanation
// where these abbreviations first appear ... The terminology should be
// consistent throughout the selections, graphs, results, summary and
// methodology."
//
// One renderer, one definition, one box component. This does NOT invent a
// second box: it builds the same .info-box that every other explanation on the
// site uses. A page opts in by carrying an element with the class
// js-terminology-legend and nothing else.
// =========================================================================
// THE REFERENCE CASE. CHV, 2026-08-24, in her words:
//
//   "I also do not want the 2017 baseline to appear automatically as the
//   reference case and the comparison to be made immediately against it.
//   Ideally, the comparison should eventually allow us to compare the selected
//   scenario with the earlier-period/reference models that better represent the
//   initial condition of the neighbourhood, rather than automatically treating
//   NECB 2017 as the baseline. For V1, please remove the automatic baseline
//   comparison where this would imply that 2017 is the existing/reference
//   condition. The reference/comparison case should be clearly selected or
//   defined rather than assumed."
//
// WHAT WAS WRONG, AND WHAT WAS NOT. The arithmetic was never wrong: the row
// labelled "Baseline" is the same neighbourhood, in the same climate, at the
// rung the arm starts from, which is a NECB 2017 code minimum model with no
// measures applied. What was wrong is that the tool drew it without being
// asked, and called it Baseline, which reads as "the neighbourhood as it exists
// today". Nothing in this tool has ever looked at how those buildings are
// actually built today.
//
// KORAL, 2026-08-24, option A: the reader chooses the reference case, and
// nothing is compared until they do. Montreal offers a real choice, because the
// 1983 Quebec reference envelope exists there. The other four climates carry
// the code minimum only, and the control says so rather than offering a choice
// that is not there.
//
// The DEFAULT IS "none". A page that has not been told what to compare against
// shows the selected case alone.
LMN_CONFIG.referenceCase = {
  storageKey: "referenceCase",
  noneKey: "none",
  noneLabel: "No reference case",
  prompt: "Compare against",
  title: "Reference case",
  intro: "Nothing is compared until you choose a reference case. A reference case is a model of the same neighbourhood, in the same climate, built to a stated code edition. It is not a survey of how the buildings there are built today: no such survey is in this tool.",
  noneNote: "No reference case is selected, so the figures below are the selected scenario alone.",
  singleOptionNote: "One reference case exists for this climate. The 1983 Quebec reference envelope was simulated for Montreal only.",
  options: [
    {
      key: "necb2017",
      label: "NECB 2017 code minimum",
      level: "DEFAULT",
      // The standard arm of whichever climate is active, resolved through
      // baselineEnvelopeFor, which is why no envelope key is written here.
      envelope: null,
      note: "The same neighbourhood, in the same climate, built to the NECB 2017 code minimum with no measures applied. It is a code minimum model, not the existing building stock."
    },
    {
      key: "quebec1983",
      label: "1983 Quebec reference envelope",
      level: "DEFAULT",
      envelope: "vintage-1983-z6",
      climates: ["necb-z6"],
      note: "The same neighbourhood built to the 1983 Quebec construction requirements, Regulation E-1.1, r. 1, Order in Council 89-83. It is the earlier code era, and it is available for Montreal only."
    }
  ]
};

// The options that really exist for this climate. Montreal gets two, every
// other climate gets one, and the caller is expected to say so rather than
// draw a chooser with a single item that looks like a choice.
LMN_CONFIG.referenceOptionsFor = function (envelopeKey) {
  const climate = LMN_CONFIG.climateOfEnvelope(envelopeKey);
  return LMN_CONFIG.referenceCase.options.filter(function (o) {
    return !o.climates || o.climates.indexOf(climate) !== -1;
  });
};

// Read the stored choice, and return "none" when there is none, when the store
// is unreachable, or when the stored key is not offered in this climate. The
// last case matters: a reader who picks the 1983 envelope in Montreal and then
// switches to Vancouver must not carry a Montreal reference into Vancouver.
LMN_CONFIG.selectedReferenceKey = function (envelopeKey, storage) {
  const none = LMN_CONFIG.referenceCase.noneKey;
  let stored = null;
  try {
    stored = storage ? storage.getItem(LMN_CONFIG.referenceCase.storageKey) : null;
  } catch (e) {
    return none;
  }
  if (!stored || stored === none) return none;
  const offered = LMN_CONFIG.referenceOptionsFor(envelopeKey).map(function (o) { return o.key; });
  return offered.indexOf(stored) !== -1 ? stored : none;
};

// Resolve a chosen reference to the pair of keys the data is stored under.
// Returns null when nothing is chosen, which is what stops the comparison.
LMN_CONFIG.resolveReference = function (envelopeKey, refKey) {
  if (!refKey || refKey === LMN_CONFIG.referenceCase.noneKey) return null;
  const opt = LMN_CONFIG.referenceCase.options.find(function (o) { return o.key === refKey; });
  if (!opt) return null;
  const offered = LMN_CONFIG.referenceOptionsFor(envelopeKey).map(function (o) { return o.key; });
  if (offered.indexOf(refKey) === -1) return null;
  return {
    key: opt.key,
    label: opt.label,
    note: opt.note,
    envelope: opt.envelope || LMN_CONFIG.baselineEnvelopeFor(envelopeKey),
    level: opt.level
  };
};

// The control. One radio group, the "no reference case" option first and
// selected by default, so that the page a reader lands on compares nothing.
LMN_CONFIG.referenceChooserHtml = function (envelopeKey, currentKey) {
  const rc = LMN_CONFIG.referenceCase;
  const options = LMN_CONFIG.referenceOptionsFor(envelopeKey);
  const current = currentKey || rc.noneKey;
  const item = function (key, label) {
    const checked = (key === current) ? ' checked' : '';
    return '<label class="reference-option">' +
      '<input type="radio" name="reference-case" value="' + key + '"' + checked + '> ' +
      '<span>' + label + '</span></label>';
  };
  const rows = [item(rc.noneKey, rc.noneLabel)]
    .concat(options.map(function (o) { return item(o.key, o.label); }))
    .join("");
  const tail = (options.length < 2)
    ? '<p class="info-box-line">' + rc.singleOptionNote + '</p>'
    : '';
  const chosen = LMN_CONFIG.resolveReference(envelopeKey, current);
  const chosenNote = chosen
    ? '<p class="info-box-line"><strong>' + chosen.label + '.</strong> ' + chosen.note + '</p>'
    : '<p class="info-box-line">' + rc.noneNote + '</p>';
  return '<div class="info-box reference-chooser">' +
    '<div class="info-box-body">' +
    '<p class="info-box-title">' + rc.title + '</p>' +
    '<p class="info-box-line">' + rc.intro + '</p>' +
    '<div class="reference-options" role="radiogroup" aria-label="' + rc.prompt + '">' + rows + '</div>' +
    chosenNote +
    tail +
    '</div></div>';
};

LMN_CONFIG.termChipHtml = function (short) {
  const term = typeof short === "string" ? short : (short && short.short ? short.short : "");
  let item = null;
  if (Array.isArray(LMN_CONFIG.abbreviations)) {
    for (let i = 0; i < LMN_CONFIG.abbreviations.length; i++) {
      if (LMN_CONFIG.abbreviations[i].short === term || LMN_CONFIG.abbreviations[i].short.toLowerCase() === term.toLowerCase()) {
        item = LMN_CONFIG.abbreviations[i];
        break;
      }
    }
  }
  if (!item) {
    return term;
  }
  const slug = item.short.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const panelId = "term-def-" + slug;
  return '<span class="term-chip">' +
    '<span class="term-chip-label">' + item.short + '</span>' +
    '<span class="term-info-wrap">' +
      '<button type="button" class="term-info-btn" aria-label="Definition of ' + item.short + '" aria-describedby="' + panelId + '" aria-expanded="false">' +
        '<span class="term-info-icon" aria-hidden="true">i</span>' +
      '</button>' +
      '<span id="' + panelId + '" class="term-def-panel" role="tooltip" aria-hidden="true">' +
        '<strong class="term-def-title">' + item.short + ' = ' + item.full + '</strong>' +
        '<span class="term-def-body">' + item.note + '</span>' +
      '</span>' +
    '</span>' +
  '</span>';
};

LMN_CONFIG.terminologyLegendHtml = function () {
  const chips = LMN_CONFIG.abbreviations.map(function (a) {
    return LMN_CONFIG.termChipHtml(a.short);
  }).join("");
  return '<div class="terminology-compact-wrap terminology-legend">' +
    '<button type="button" class="terminology-trigger-btn" aria-expanded="false" aria-label="Toggle Terminology and Cumulative Ladder">' +
      '<span class="term-info-icon" aria-hidden="true">i</span>' +
      '<span class="terminology-trigger-text">Terminology &amp; Cumulative Ladder</span>' +
    '</button>' +
    '<div class="terminology-popover" role="tooltip" aria-hidden="true">' +
      '<div class="terminology-popover-header">' +
        '<strong class="terminology-popover-title">Terminology &amp; Cumulative Ladder</strong>' +
      '</div>' +
      '<p class="terminology-popover-rule">' + LMN_CONFIG.eemLadder.rule + '</p>' +
      '<div class="term-chips-row">' + chips + '</div>' +
    '</div>' +
  '</div>';
};

// The mount and interaction handlers. Several verification suites run the pages
// against a STUB DOM that implements only the handful of methods those pages
// call, so the guard has to test for the method and not only for the object.
// Session 15 rule: config.js must load in node without a browser.
if (typeof document !== "undefined" && typeof document.querySelectorAll === "function") {
  const adjustTermPanelPosition = function (panel, wrap) {
    try {
      if (!panel) { return; }
      const parentWrap = wrap || (typeof panel.closest === "function" ? panel.closest(".term-info-wrap, .terminology-compact-wrap, .info-popover-wrap, .card-info-wrap") : panel.parentElement);
      if (!parentWrap || typeof parentWrap.getBoundingClientRect !== "function") { return; }
      const winWidth = window.innerWidth || (document.documentElement ? document.documentElement.clientWidth : 1024) || 1024;
      const wrapRect = parentWrap.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const panelWidth = panelRect.width || Math.min(300, winWidth - 32);

      let desiredLeft = (wrapRect.left + wrapRect.width / 2) - (panelWidth / 2);
      if (desiredLeft + panelWidth > winWidth - 8) {
        desiredLeft = winWidth - 8 - panelWidth;
      }
      if (desiredLeft < 8) {
        desiredLeft = 8;
      }

      const relLeft = desiredLeft - wrapRect.left;
      panel.style.left = relLeft + "px";
      panel.style.right = "auto";
      panel.style.transform = "none";
    } catch (e) {}
  };

  const closeAllTermPanels = function () {
    try {
      const openWraps = document.querySelectorAll(".term-info-wrap.is-open, .terminology-compact-wrap.is-open, .info-popover-wrap.is-open, .card-info-wrap.is-open");
      if (openWraps) {
        for (let i = 0; i < openWraps.length; i++) {
          openWraps[i].classList.remove("is-open");
        }
      }
      const openBtns = document.querySelectorAll('.term-info-btn[aria-expanded="true"], .terminology-trigger-btn[aria-expanded="true"], .info-popover-btn[aria-expanded="true"], .card-info-btn[aria-expanded="true"]');
      if (openBtns) {
        for (let i = 0; i < openBtns.length; i++) {
          openBtns[i].setAttribute("aria-expanded", "false");
        }
      }
      const openPanels = document.querySelectorAll('.term-def-panel[aria-hidden="false"], .terminology-popover[aria-hidden="false"], .info-popover-panel[aria-hidden="false"]');
      if (openPanels) {
        for (let i = 0; i < openPanels.length; i++) {
          openPanels[i].setAttribute("aria-hidden", "true");
          openPanels[i].style.left = "";
          openPanels[i].style.right = "";
          openPanels[i].style.transform = "";
        }
      }
    } catch (e) {}
  };

  let termEventsInitialized = false;
  const initTerminologyLegendEvents = function () {
    if (termEventsInitialized) { return; }
    if (typeof document.addEventListener !== "function") { return; }
    termEventsInitialized = true;

    try {
      document.addEventListener("click", function (e) {
        const target = e.target;
        if (!target) { return; }

        // Card info buttons
        const cardBtn = (typeof target.closest === "function") ? target.closest(".card-info-btn") : null;
        if (cardBtn) {
          if (typeof e.preventDefault === "function") { e.preventDefault(); }
          if (typeof e.stopPropagation === "function") { e.stopPropagation(); }
          const wrap = (typeof cardBtn.closest === "function") ? cardBtn.closest(".card-info-wrap") : cardBtn.parentElement;
          const wasOpen = wrap && wrap.classList.contains("is-open");
          closeAllTermPanels();
          if (!wasOpen && wrap) {
            wrap.classList.add("is-open");
            cardBtn.setAttribute("aria-expanded", "true");
          }
          return;
        }

        // Terminology trigger button
        const termTrigger = (typeof target.closest === "function") ? target.closest(".terminology-trigger-btn") : null;
        if (termTrigger) {
          if (typeof e.preventDefault === "function") { e.preventDefault(); }
          if (typeof e.stopPropagation === "function") { e.stopPropagation(); }
          const wrap = (typeof termTrigger.closest === "function") ? termTrigger.closest(".terminology-compact-wrap") : termTrigger.parentElement;
          const popover = wrap ? wrap.querySelector(".terminology-popover") : null;
          const wasExpanded = termTrigger.getAttribute("aria-expanded") === "true";
          closeAllTermPanels();
          if (!wasExpanded && wrap && popover) {
            wrap.classList.add("is-open");
            termTrigger.setAttribute("aria-expanded", "true");
            popover.setAttribute("aria-hidden", "false");
            adjustTermPanelPosition(popover, wrap);
          }
          return;
        }

        // Info popover button
        const infoBtn = (typeof target.closest === "function") ? target.closest(".info-popover-btn") : null;
        if (infoBtn) {
          if (typeof e.preventDefault === "function") { e.preventDefault(); }
          if (typeof e.stopPropagation === "function") { e.stopPropagation(); }
          const wrap = (typeof infoBtn.closest === "function") ? infoBtn.closest(".info-popover-wrap") : infoBtn.parentElement;
          const panel = wrap ? wrap.querySelector(".info-popover-panel") : null;
          const wasExpanded = infoBtn.getAttribute("aria-expanded") === "true";
          closeAllTermPanels();
          if (!wasExpanded && wrap && panel) {
            wrap.classList.add("is-open");
            infoBtn.setAttribute("aria-expanded", "true");
            panel.setAttribute("aria-hidden", "false");
            adjustTermPanelPosition(panel, wrap);
          }
          return;
        }

        // Term info button
        const btn = (typeof target.closest === "function") ? target.closest(".term-info-btn") : null;
        if (btn) {
          if (typeof e.preventDefault === "function") { e.preventDefault(); }
          if (typeof e.stopPropagation === "function") { e.stopPropagation(); }
          const wrap = (typeof btn.closest === "function") ? btn.closest(".term-info-wrap") : btn.parentElement;
          const panel = wrap ? wrap.querySelector(".term-def-panel") : null;
          const wasExpanded = btn.getAttribute("aria-expanded") === "true";
          closeAllTermPanels();
          if (!wasExpanded && wrap && panel) {
            wrap.classList.add("is-open");
            btn.setAttribute("aria-expanded", "true");
            panel.setAttribute("aria-hidden", "false");
            adjustTermPanelPosition(panel, wrap);
          }
          return;
        }

        const insideAny = (typeof target.closest === "function") ? target.closest(".term-info-wrap, .terminology-compact-wrap, .info-popover-wrap, .card-info-wrap") : null;
        if (!insideAny) {
          closeAllTermPanels();
        }
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" || e.key === "Esc") {
          closeAllTermPanels();
        }
      });

      document.addEventListener("mouseover", function (e) {
        const target = e.target;
        if (!target || typeof target.closest !== "function") { return; }
        const termWrap = target.closest(".term-info-wrap");
        if (termWrap) {
          const panel = termWrap.querySelector(".term-def-panel");
          if (panel) { adjustTermPanelPosition(panel, termWrap); }
        }
        const termPopWrap = target.closest(".terminology-compact-wrap");
        if (termPopWrap) {
          const popover = termPopWrap.querySelector(".terminology-popover");
          if (popover) { adjustTermPanelPosition(popover, termPopWrap); }
        }
        const infoPopWrap = target.closest(".info-popover-wrap");
        if (infoPopWrap) {
          const panel = infoPopWrap.querySelector(".info-popover-panel");
          if (panel) { adjustTermPanelPosition(panel, infoPopWrap); }
        }
        const cardInfoWrap = target.closest(".card-info-wrap");
        if (cardInfoWrap) {
          const panel = cardInfoWrap.querySelector(".card-info-popover");
          if (panel) { adjustTermPanelPosition(panel, cardInfoWrap); }
        }
      });
    } catch (e) {}
  };

  const mountTerminologyLegend = function () {
    try {
      const slots = document.querySelectorAll(".js-terminology-legend");
      if (slots && slots.length) {
        for (let i = 0; i < slots.length; i++) {
          slots[i].innerHTML = LMN_CONFIG.terminologyLegendHtml();
        }
      }
      initTerminologyLegendEvents();
    } catch (e) {
      // A stub DOM is not a failure condition. The legend is an explanation,
      // never a number, so a page that cannot mount it still renders.
    }
  };
  if (document.readyState === "loading" && typeof document.addEventListener === "function") {
    document.addEventListener("DOMContentLoaded", mountTerminologyLegend);
  } else {
    mountTerminologyLegend();
  }
}

// Make the constants available to a module loader without changing the
// browser behaviour, which relies on the global const above.
if (typeof module !== "undefined" && module.exports) {
  module.exports = LMN_CONFIG;
}
