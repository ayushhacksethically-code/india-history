# Subcontinental Historiographical Gap Audit: Balanced Evidence-First Assessment

**Repository:** `INDIA: The History of India`  
**Date of Audit:** 5 October 2026  
**Auditor:** Antigravity AI (Pair Programming Audit)  
**Standard:** Evidence-First Historiography (Transcending Left vs. Right Dichotomies)

---

## Executive Summary

This comprehensive audit was commissioned to systematically identify evidentiary omissions, interpretive imbalances, and framing overshoots across the entire codebase of *The History of India* educational project. 

The site's current framing is broadly scholarly and high quality, but it exhibits systemic leanings that risk vulnerability to legitimate academic criticism:
1. **Left-leaning overshoots:** An over-reliance on social-constructionist theories that treat caste rigidity, communal antagonism, and national division almost exclusively as artificial British colonial contrivances, while downplaying pre-colonial state enforcement, indigenous orthodoxies, and Congress political missteps.
2. **Right-leaning missing evidence:** Omission of historical realities that complicate romanticized nationalist narratives, such as widespread Indian princely collaboration in suppressing the 1857 rebellion, the millions of Indian soldiers who staffed the British imperial military in two World Wars, Maratha atrocities during the 18th-century Bengal raids, and uncritical sanitization of regional rulers like Tipu Sultan.
3. **Neutral geographic and temporal blindspots:** Significant regional neglect of Peninsular empires (Chalukyas, Rashtrakutas), Goa's 451-year Portuguese colonial history, Kashmir's imperial and philosophical heights, deep Southern Iron Age urbanism (Keezhadi), the Maritime/Oceanic civilizational axis, and an almost complete post-1950 historiographical void on `republic.html` (missing the Emergency, all external wars, linguistic reorganization, and the 1991 economic reforms).

The objective of this audit is **NOT** to enforce political centrism or false equivalencies, but to ground the site strictly in **evidence-first historiography**: following empirical evidence wherever it leads, regardless of ideological comfort.

---

## Summary Counts

### Directional Distribution
- **Left-Leaning Overshoot Gaps (L):** 16 (33.3%)  
  *(Where critical or social-constructionist framing overshoots empirical evidence or ignores pre-colonial precedents)*
- **Right-Leaning Missing Evidence Gaps (R):** 12 (25.0%)  
  *(Where evidence complicating nationalist or sanitized regional narratives is omitted)*
- **Neutral Coverage Gaps (N):** 20 (41.7%)  
  *(Underrepresented regions, marginalized communities, and omitted historical epochs)*
- **Total Gaps Cataloged:** **48**

### Severity Breakdown
- 🔴 **CRITICAL (Accusation of bias or major factual/interpretive distortion):** 25 (52.1%)
- 🟡 **MODERATE (Evidence exists that substantially complicates framing):** 20 (41.7%)
- 🟢 **MINOR (Enhancement / completeness improvement):** 3 (6.2%)

### Priority Distribution
- **P1 (Must fix before public promotion):** 25 (52.1%)
- **P2 (Should fix within 3 months):** 20 (41.7%)
- **P3 (Future enhancement):** 3 (6.2%)

---

## Full Audit Table (48 Gaps)

| # | PAGE | SECTION | GAP DESCRIPTION | DIRECTION | SEVERITY | PRIORITY | STATUS |
|---|------|---------|-----------------|:---------:|:--------:|:--------:|:------:|
| 1 | `origins.html` | From Village to Veda | Steppe pastoralist migration framed as an unsettled debate rather than global archaeogenetic and linguistic consensus (Narasimhan et al. 2019; Reich 2018). | L | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 2 | `origins.html` | Before the Cities | Omission of deep Paleolithic & AASI (Ancient Ancestral South Indian) genetic baseline (>65,000 BP) in favor of agrarian origins (9000 BP). | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 3 | `origins.html` | Other Civilizations | Northeast Neolithic (Daojali Hading cord-marked ceramics, Austroasiatic & East Asian linkages) omitted from contemporary regional cultures. | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 4 | `antiquity.html` | What India Can Claim | Southern Iron Age & urbanization (Keezhadi, Kodumanal, Adichanallur dated to 6th c. BCE) omitted, skewing civilizational antiquity entirely northwest. | N | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 5 | `antiquity.html` | Question 2: Continuity | Continuity narrative centers Vedic/Sanskrit oral transmission while under-indexing Dravidian linguistic antiquity and Sangam literary heritage. | R | 🟡 MODERATE | P2 | ⏳ PENDING |
| 6 | `antiquity.html` | What India Cannot Claim | Downplays physical civilizational ruptures, major library burnings (Nalanda, Vikramashila), and wholesale destruction of urban imperial centers. | L | 🟡 MODERATE | P2 | ⏳ PENDING |
| 7 | `civilizations.html` | Social Order (Varna/Jati) | Overstates colonial construction of caste; claims 1871 census ossified what was fluid, ignoring strict pre-colonial Peshwa, Rajput, and Vijayanagara enforcement of varna and untouchability (Bayly 1999; Guha 2013). | L | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 8 | `civilizations.html` | Three Axes of History | Complete omission of Maritime / Oceanic Civilizational Axis (Chola maritime expeditions, Indian Ocean spice networks, Roman trade at Muziris/Arikamedu, Kalinga Bali Yatra). | N | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 9 | `civilizations.html` | Three Expressions | Absence of Shramana/Heterodox axis; ignores Buddhism, Jainism, and Charvaka as endogenous internal philosophical rebellions against Brahminical orthodoxy. | L | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 10 | `civilizations.html` | Hindurāya Subsection | Omission of recorded pre-colonial Hindu-Muslim theological boundaries, friction, and sectarian violence prior to 14th-century Vijayanagara courtly epigraphy. | R | 🟡 MODERATE | P2 | ⏳ PENDING |
| 11 | `civilizations.html` | Expressions of Civilization | Absence of Lakshadweep from maritime and regional civilizational mosaic (Arabian Sea trade, Buddhist-Islamic transition). | N | 🟢 MINOR | P3 | ⏳ PENDING |
| 12 | `dynasties.html` | Tipu Sultan Card | Uncritical portrayal of Tipu Sultan as enlightened modernizer and rocket pioneer; complete omission of forced conversions, captive deportations, and temple destructions in Kodagu (Coorg) and Malabar. | L | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 13 | `dynasties.html` | Shivaji / Marathas | Glorifies Shivaji but ignores later Maratha expansion realities: the catastrophic Bargi raids in Bengal (1741–1751) with massive civilian slaughter, and Maratha-Rajput warfare. | R | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 14 | `dynasties.html` | Post-Gupta / Peninsular | Complete omission of great Peninsular dynasties: Chalukyas of Vatapi (Pulakeshin II), Rashtrakutas (Amoghavarsha, Ellora Kailasa), and Hoysalas. | N | 🔴 CRITICAL | P1 | 🟡 PARTIAL |
| 15 | `dynasties.html` | Ashoka / Early Historic | Omission of Pushyamitra Shunga’s coup against the Mauryas and recorded textual accounts of Buddhist persecution (Divyavadana, Ashokavadana). | R | 🟡 MODERATE | P2 | ✅ RESOLVED |
| 16 | `dynasties.html` | Akbar / Mughal Era | Total absence of Delhi Sultanate monarchs (Alauddin Khalji, Razia Sultana) and later Mughal religious reversal under Aurangzeb (re-imposition of jizya, temple destructions). | L | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 17 | `dynasties.html` | Women Rulers | Omission of Ahilyabai Holkar (famed for administrative justice and pan-Indian temple/ghat rebuilding) and Rani Abbakka Chowta (who defeated Portuguese invasions). | R | 🟡 MODERATE | P2 | ⏳ PENDING |
| 18 | `dynasties.html` | Kashmir Dynasties | Absence of Karkota Empire (Lalitaditya Muktapida), Queen Didda, Kalhana’s Rajatarangini, and Trika Kashmir Shaivism (Abhinavagupta). | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 19 | `colonial-india.html` | The 1857 Turning Point | Complete silence on crucial Indian princely collaboration: Scindia, Nizam, Rajput rulers, Sikh states, and Gurkhas actively crushed the revolt (Lord Canning’s “breakwaters in the storm”). | R | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 20 | `colonial-india.html` | How the British Ruled | Omission of massive Indian military collaboration in imperial defense: 1.3 million soldiers in WWI and 2.5 million in WWII (largest volunteer army in human history). | R | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 21 | `colonial-india.html` | How the British Ruled | Frames communal antagonism purely as British “divide-and-rule” (1909 separate electorates), ignoring centuries of pre-colonial religious boundaries and sporadic sectarian riots. | L | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 22 | `colonial-india.html` | Social Impact: Caste | Attributes modern caste rigidity entirely to Herbert Risley and the 1871 census, obscuring indigenous structural inequality and orthodox enforcement. | L | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 23 | `colonial-india.html` | How the British Arrived | Omission of Portuguese colonial rule in Goa, Daman, and Diu (1510–1961: 451 years!), the Goa Inquisition, and French enclaves (Pondicherry). | N | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 24 | `colonial-india.html` | Economic Impact | Omission of Indian commercial collaboration: Parsi, Marwari, and Gujarati mercantile elites profiting from agency houses and British opium/cotton trade with China. | R | 🟡 MODERATE | P2 | ⏳ PENDING |
| 25 | `colonial-india.html` | Economic Impact | Colonial famines analyzed without acknowledging recurring ENSO climate/drought triggers and pre-colonial subcontinental famine vulnerabilities. | L | 🟡 MODERATE | P2 | ⏳ PENDING |
| 26 | `colonial-india.html` | Social Impact | Indentured labour diaspora (over one million Girmitiyas transported to Fiji, Mauritius, Caribbean, and South Africa) omitted from human cost of empire. | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 27 | `freedom-struggle.html` | Visible Layer (Resistance) | Marginalization of Revolutionary Nationalists (Bhagat Singh, Chandrashekhar Azad, Surya Sen, Bagha Jatin), subordinating armed struggle to the Congress non-violence narrative. | R | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 28 | `freedom-struggle.html` | Visible Layer (Resistance) | Total omission of Veer Savarkar (Abhinav Bharat, Cellular Jail / Kala Pani imprisonment, Hindutva 1923) and the Hindu Mahasabha from anti-colonial history. | R | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 29 | `freedom-struggle.html` | Partition: Cost of Freedom | Blames Partition solely on Cyril Radcliffe’s hasty borders and British cynicism; omits Congress political errors (1937 UP coalition rejection, 1946 Cabinet Mission grouping repudiation). | L | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 30 | `freedom-struggle.html` | Partition: Cost of Freedom | Depicts Muslim League solely as communal opportunists, ignoring genuine Muslim minority anxieties regarding majoritarian disenfranchisement in a unitary state (Ayesha Jalal thesis). | L | 🔴 CRITICAL | P1 | ⏳ PENDING |
| 31 | `freedom-struggle.html` | Parallel Layers (Caste) | Asymmetric framing of Gandhi-Ambedkar dispute; omits Gandhi’s principled rationale against permanent statutory caste separation and his vast nationwide anti-untouchability campaigns. | L | 🟡 MODERATE | P2 | ⏳ PENDING |
| 32 | `freedom-struggle.html` | Parallel Layers (Communities) | Absence of early religious minority communities: Kerala Syrian / St. Thomas Christians (1st c. CE), Bene Israel / Cochin Jews, and Zoroastrian Parsis seeking refuge from Persian conquest. | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 33 | `freedom-struggle.html` | 1946 Turning Points | Under-weighting of INA Red Fort trials and 1946 Royal Indian Navy Revolt; omits Clement Attlee’s testimony that armed force unreliability compelled the swift British departure. | R | 🟡 MODERATE | P2 | ⏳ PENDING |
| 34 | `freedom-struggle.html` | Parallel Layers (Labour) | Omission of major radical peasant uprisings: Bengal Tebhaga movement and armed Telangana peasant insurrection (1946–1951) against feudal Deshmukhs. | L | 🟡 MODERATE | P2 | ⏳ PENDING |
| 35 | `freedom-struggle.html` | Unfinished Struggles | Complete absence of Andaman & Nicobar penal colony (Cellular Jail), Japanese occupation (1942–45), Netaji’s provisional government, and indigenous tribes (Jarawa, Sentinelese). | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 36 | `freedom-struggle.html` | Parallel Layers (Gender/Soc) | Complete silence on subcontinental LGBTQ+ / queer history (Hijra/Kinnar traditions, Kamasutra/Khajuraho representations, Section 377 IPC criminalization). | N | 🟢 MINOR | P3 | ⏳ PENDING |
| 37 | `republic.html` | Democratic Experiment | Complete omission of The Emergency (1975–1977) — the 21-month suspension of fundamental rights, press censorship, and mass jailing — the greatest constitutional crisis in republican history. | L | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 38 | `republic.html` | Territorial Integration | Total omission of major external wars shaping republican sovereignty: 1947–48 Kashmir, 1962 Sino-Indian War, 1965, 1971 Bangladesh Liberation, and 1999 Kargil. | N | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 39 | `republic.html` | Constitutional Pluralism | Total omission of the States Reorganisation Act (1956) and linguistic state movements (Potti Sreeramulu), the cornerstone of Indian cooperative federalism. | N | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 40 | `republic.html` | Democratic Experiment | Absence of 1984 Anti-Sikh pogrom, Operation Blue Star, and the decade-long Punjab insurgency. | L | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 41 | `republic.html` | Economic & Tech Cards | Omission of 1991 Economic Liberalization (dismantling the License Raj; Rao-Manmohan reforms), creating a false leap directly from 1960s Green Revolution to modern digital UPI. | R | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 42 | `republic.html` | Social / Democratic Cards | Omission of the Mandal Commission (OBC reservations) and the Ram Janmabhoomi movement / Babri Masjid demolition (1992), which fundamentally reshaped contemporary politics. | N | 🔴 CRITICAL | P1 | ✅ RESOLVED |
| 43 | `republic.html` | Democratic Experiment | Absence of post-2014 constitutional and political contestations (abrogation of Article 370 in Jammu & Kashmir, CAA-NRC protests). | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 44 | `timeline.html` | Early Medieval | Omission of the Tripartite Struggle (Gurjara-Pratiharas, Palas, Rashtrakutas) and early Rajput polities, creating an artificial dark age between Harsha and the Delhi Sultanate. | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 45 | `timeline.html` | Deccan & South | Bahmani Sultanate and the five Deccan Sultanates (Bijapur, Golconda, Ahmadnagar) omitted from chronology. | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 46 | `timeline.html` | Modern Era | Timeline terminates abruptly in 1950, omitting 75+ years of post-independence history (wars, Emergency, 1991 reforms). | N | 🟡 MODERATE | P2 | ⏳ PENDING |
| 47 | `references.html` | Reading List | Reading list exclusively cites Marxist, subaltern, and Nehruvian historians (Thapar, Chandra, Habib, Guha); omits respected conservative/nationalist scholars (R.C. Majumdar, Jadunath Sarkar, Dharampal). | L | 🔴 CRITICAL | P1 | 🟡 PARTIAL |
| 48 | `living-civilizations.html` | Survival vs Extinction | Civilizational continuity thesis risks exceptionalism; oversimplifies extinction of Greco-Roman/Egyptian traditions while understating severe Indian historical ruptures. | L | 🟡 MODERATE | P2 | ⏳ PENDING |

---

## Status Update (As of 2026-10-11)

The following specific gaps from the original 48 have been updated based on editorial and architectural work completed through Phase C (2026-10-11):

- **Gap #1 (Aryan migration "debate"):** ✅ RESOLVED  
  Steppe migration added to `origins.html` Section E with Narasimhan et al. (2019), hedged as scholarly consensus.

- **Gap #3 (Caste colonial construct overshoot):** ✅ RESOLVED  
  "Pre-Colonial Caste Enforcement" section added to `civilizations.html` + nuance paragraph on `colonial-india.html`.

- **Gap #6 (Communalism "divide-and-rule" only):** ⏳ PENDING  
  Pre-colonial communal friction still not addressed.

- **Gap #7 (Total Erasure of Emergency):** ✅ RESOLVED  
  Emergency section added to `republic.html` (1,046 words, ADM Jabalpur, Shah Commission, forced sterilizations).

- **Gap #12 (Tipu Sultan whitewashing):** ✅ RESOLVED  
  Tipu Sultan card on `dynasties.html` now includes Coorg/Malabar atrocities + EB with Habib/Ali/Brittlebank sources.

- **Gap #13 (Maratha Bargi raids missing):** ✅ RESOLVED  
  Maratha Bargi Raids card added to `dynasties.html` with Jadunath Sarkar, Maharashtra Purana sources.

- **Gap #14 (Peninsular dynasties missing):** 🟡 PARTIAL  
  Chalukyas, Pallavas, Rashtrakutas now in `dynasties.html` as primary/secondary entries, but no dedicated pages yet.

- **Gap #15 (Pushyamitra Shunga missing):** ✅ RESOLVED  
  Pushyamitra Shunga card added with EB (Divyavadana, Ashokavadana, Thapar, Upinder Singh).

- **Gap #16 (Aurangzeb card missing):** ✅ RESOLVED  
  Aurangzeb card added to `dynasties.html` + dedicated `aurangzeb.html` page (4,528 words).

- **Gap #19 (1857 princely collaboration):** ⏳ PENDING  
  Not yet added to `colonial-india.html`.

- **Gap #20 (WWI/WWII Indian soldiers):** ⏳ PENDING

- **Gap #21 (Communalism as pure divide-and-rule):** ⏳ PENDING

- **Gap #22 (Caste colonial construction):** ✅ RESOLVED  
  (Same as Gap #3.)

- **Gap #23 (Portuguese Goa missing):** ⏳ PENDING

- **Gap #27 (Armed revolutionaries marginalized):** ⏳ PENDING

- **Gap #28 (Savarkar / Hindu Mahasabha missing):** ⏳ PENDING

- **Gap #29 (Congress Partition causation):** ⏳ PENDING

- **Gap #30 (Muslim League one-sided):** ⏳ PENDING

- **Gap #37 (Emergency erasure):** ✅ RESOLVED  
  (Same as Gap #7.)

- **Gap #38 (Wars missing on republic.html):** ✅ RESOLVED  
  1947–48, 1962, 1965, 1971, 1999 wars all added to `republic.html`.

- **Gap #39 (Linguistic reorganization):** ✅ RESOLVED  
  States Reorganisation Act (1956), Potti Sreeramulu fast added to `republic.html`.

- **Gap #40 (1984 anti-Sikh pogrom):** ✅ RESOLVED  
  1984 section added with Nanavati Commission figures (2,733 official), Sajjan Kumar conviction.

- **Gap #41 (1991 liberalization missing):** ✅ RESOLVED  
  1991 economic reforms section added (Rao–Manmohan, License Raj dismantled, Patnaik/Roy methodology).

- **Gap #42 (Mandal, Babri missing):** ✅ RESOLVED  
  Mandal Commission (1980/1990), Babri Masjid (1992) added.

- **Gap #46 (Timeline stops at 1950):** ⏳ PENDING  
  `timeline.html` still ends at 1950.

- **Gap #47 (Bibliography left-only):** 🟡 PARTIAL  
  R.C. Majumdar added to `civilizations.html` source line, but `references.html` bibliography still needs update.

---

## Top 10 CRITICAL Gaps (P1)

1. **Caste as Colonial Construction Overshoot (`civilizations.html`, `colonial-india.html`):**  
   The site asserts that caste identities were merely fluid, occupational, and locally negotiated prior to the 1871 census, claiming British ethnography "ossified" what had been fluid. This overstates colonial constructionism and erases extensive evidence of pre-colonial state enforcement: Maratha Peshwas imposed brutal physical and social sanctions on Mahars and Atishudras; Rajput kingdoms strictly enforced caste endogamy; and Vijayanagara royal charters enforced varna codes (Bayly 1999; Guha 2013).

2. **Tipu Sultan Whitewashing (`dynasties.html`):**  
   Tipu Sultan is presented solely as an enlightened modernizing ruler and military rocket pioneer who died resisting British imperialism. There is zero acknowledgment of his documented sectarian atrocities, forced conversions, and mass deportations of Kodavas in Coorg and Mangalorean Catholics, or temple demolitions in Malabar, making the card vulnerable to charges of hagiography.

3. **Total Erasure of the Emergency (1975–1977) (`republic.html`):**  
   The Republic page presents Indian democracy as an unbroken triumph of constitutionalism and scientific progress. It completely omits Indira Gandhi’s 21-month Emergency, the suspension of Fundamental Rights (ADM Jabalpur case), press censorship, forced sterilizations, and mass jailing of opposition leaders. This is the single most glaring constitutional blindspot on the site.

4. **Princely Collaboration in Crushing the 1857 Uprising (`colonial-india.html`):**  
   While 1857 is highlighted as a widespread national uprising, the site conceals that the British East India Company was saved by extensive Indian princely military intervention. Scindia of Gwalior, the Nizam of Hyderabad, the rulers of Patiala, Jind, Kapurthala, the Rajput courts, and Nepalese Gurkhas actively mobilized armies to fight alongside the British, leading Governor-General Lord Canning to famously call them "breakwaters in the storm."

5. **One-Sided Causation of Partition (`freedom-struggle.html`):**  
   Partition is portrayed as the sudden, tragic byproduct of Cyril Radcliffe’s rushed border demarcation and colonial malice. Completely absent are the documented political failures of the Indian National Congress: the refusal to form a coalition ministry with the Muslim League in the United Provinces in 1937, and Jawaharlal Nehru’s July 1946 press conference repudiating the compulsory grouping clause of the Cabinet Mission Plan, which directly provoked Jinnah's call for Direct Action Day.

6. **Communalism Framed Exclusively as British Divide-and-Rule (`colonial-india.html`):**  
   Attributing subcontinental communal violence almost entirely to the 1909 Morley-Minto separate electorates and British divide-and-rule statecraft ignores centuries of pre-colonial religious boundaries, iconoclasm, and recorded medieval communal disturbances (e.g. Kalinjar 1203, Somnath 1025, Varanasi 1809).

7. **Total Absence of India's Major Wars (`republic.html`):**  
   `republic.html` leaps from Sardar Patel's princely integration in 1947–48 directly to ISRO and UPI. It omits the 1947–48 Kashmir War, the 1962 Sino-Indian War, the 1965 Indo-Pak War, the 1971 Bangladesh Liberation War (and creation of Bangladesh), and the 1999 Kargil conflict, erasing the military sacrifices that forged the Republic's modern borders and defense posture.

8. **Marginalization of Armed Revolutionaries and Hindu Nationalism (`freedom-struggle.html`):**  
   Bhagat Singh, Chandrashekhar Azad, Surya Sen, Bagha Jatin, and the Hindustan Socialist Republican Association (HSRA) are treated as secondary footnotes to Congress satyagrahas. Furthermore, Veer Savarkar (Abhinav Bharat Society, Cellular Jail imprisonment, *Hindutva* 1923) and the Hindu Mahasabha are completely erased from anti-colonial history.

9. **Omission of the Maritime / Oceanic Axis of Civilization (`civilizations.html`):**  
   The site organizes Indian civilization into three axes: Urban/Imperial, Agrarian/Riverine, and Pastoral/Forest/Tribal. It completely omits the Maritime Axis — Chola naval expeditions across the Bay of Bengal, maritime emporiums of Muziris, Arikamedu, and Korkai, centuries of trans-Indian Ocean trade connecting the Malabar and Coromandel coasts to Rome, Arabia, and Southeast Asia, and Kalinga's *Boita Bandana* traditions.

10. **Omission of the 1991 Economic Liberalization Reforms (`republic.html`):**  
    `republic.html` highlights the Green/White Revolutions and jumps straight to the modern Digital Public Infrastructure (UPI). It completely skips the 1991 Balance of Payments crisis and the historic Rao-Manmohan reforms that dismantled the socialist "License-Permit Raj," opened the economy to foreign trade, and enabled the tech boom the page celebrates.

---

## Top 5 Left-Leaning Overshoot Risks

1. **Over-constructionism on Caste & Census:**  
   Attributing caste rigidity primarily to British administrator Herbert Risley and the 1871 census risks academic disrepute. While the colonial census undeniably codified and aggregated regional jatis into a pan-Indian grid, caste hierarchy, hereditary endogamy, and severe untouchability taboos were codified in Dharmashastric texts and violently enforced by pre-colonial Hindu states for centuries prior to British arrival.
2. **Denial of Pre-Colonial Communal & Religious Friction:**  
   Treating pre-colonial India as an idyll of seamless syncretism that was only disrupted when the British introduced "divide and rule" ignores well-documented instances of sectarian violence, state iconoclasm (Aurangzeb’s temple demolitions), and mutual self-definition between Hindu and Muslim polities.
3. **Whitewashing Tipu Sultan’s Sectarian Violence:**  
   Presenting Tipu Sultan exclusively through the lens of modernizer and anti-imperialist martyr while ignoring his brutal persecutions in Coorg, Malabar, and Mangalore creates severe vulnerability to accusations of partisan bias.
4. **Congress-Centric and Innocent Partition Narrative:**  
   Presenting the Congress leadership as passive victims of imperial partition policy while ignoring their tactical rejections of federal compromise formulas (Cabinet Mission Plan, 1937 UP coalition) robs the Partition narrative of scholarly depth.
5. **Ideological Selection Bias in Academic Bibliography:**  
   `references.html` cites almost exclusively Marxist, Subaltern, and Nehruvian academic authorities (Romila Thapar, Bipan Chandra, Irfan Habib, Ramachandra Guha). Respected nationalist, conservative, or non-Marxist historians (R.C. Majumdar, Jadunath Sarkar, Sita Ram Goel, Dharampal) are entirely excluded.

---

## Top 5 Right-Leaning Missing-Evidence Gaps

1. **Indian Princely Collaboration in 1857:**  
   Omitting that the most powerful Indian dynasties (Scindia, Nizam, Holkar, Rajput houses, Sikh states) fought alongside the British East India Company to crush the 1857 rebellion obscures the foundational reality of Indian feudal collaboration.
2. **Maratha Bargi Raids in Bengal (1741–1751):**  
   Celebrating Maratha expansionism while ignoring the devastating Bargi atrocities in Bengal, where contemporary accounts record hundreds of thousands of Indian peasants slaughtered by Maratha cavalry, presents a sanitized depiction of indigenous empire.
3. **Massive Indian Imperial Military Collaboration (WWI & WWII):**  
   Failing to acknowledge the 1.3 million Indian volunteers in World War I and the 2.5 million in World War II conceals that the British Empire was militarily sustained and garrisoned by Indian personnel.
4. **Underplaying Armed and Naval Pressures in Independence:**  
   Attributing independence exclusively to non-violent Congress mobilization while downplaying the Indian National Army (INA) Red Fort trials, the 1946 Royal Indian Navy Revolt, and British Prime Minister Clement Attlee’s explicit admission that military unrest forced the British exit.
5. **Indian Commercial and Financial Complicity:**  
   Omitting the prominent Indian mercantile elites (Parsi, Marwari, Gujarati commercial families) who grew wealthy through colonial agency houses, railway contracting, and the British East India Company’s opium trade with Qing China.

---

## Recommended Fix Sequence

To resolve these 48 gaps systematically without causing code destabilization, work should proceed in the following prioritized sequence:

### Phase 1: Core Historiographical Balance (Immediate — P1)
- [ ] **Fix 1 (`civilizations.html` & `colonial-india.html`):** Reframe caste section to clearly state that while the 1871 census codified and aggregated caste pan-India, rigid jati hierarchy, endogamy, and untouchability penalties were ancient, codified, and enforced by pre-colonial Hindu states (Bayly, Guha).
- [ ] **Fix 2 (`dynasties.html`):** Add balanced historical context to Tipu Sultan’s card: maintain his rocket artillery and anti-British defense, but add a clear sentence noting his violent campaigns, temple destructions, and forced conversions in Kodagu (Coorg) and Malabar.
- [ ] **Fix 3 (`republic.html`):** Add cards/sections on **The Emergency (1975–1977)** (constitutional crisis and democratic renewal), **Major Wars (1947–48, 1962, 1965, 1971, 1999)**, **Linguistic Reorganisation of States (1956)**, and the **1991 Economic Reforms**.
- [ ] **Fix 4 (`colonial-india.html`):** Add princely collaboration in 1857 (Scindia, Nizam, Sikhs, Gurkhas as "breakwaters") and Indian imperial military service (1.3M in WWI, 2.5M in WWII).
- [ ] **Fix 5 (`freedom-struggle.html`):** Deepen Partition section with Congress’s 1937 and 1946 political miscalculations, and elevate Revolutionary Nationalists (Bhagat Singh, Azad, Savarkar's Cellular Jail imprisonment).

### Phase 2: Regional & Civilizational Scope Expansion (Within 3 Months — P2)
- [ ] **Fix 6 (`civilizations.html`):** Add the **Maritime / Oceanic Axis** (Chola naval trade, Muziris, Roman emporiums, Kalinga Boita Bandana) as a fourth axis alongside Urban, Agrarian, and Forest.
- [ ] **Fix 7 (`antiquity.html`):** Integrate Keezhadi, Kodumanal, and Southern Iron Age urbanization (6th c. BCE) into the antiquity evidence boxes.
- [ ] **Fix 8 (`colonial-india.html`):** Add Portuguese Goa (1510–1961), the Goa Inquisition, and Operation Vijay (1961) to the colonial framework.
- [ ] **Fix 9 (`dynasties.html` & `timeline.html`):** Add Peninsular dynasties (Chalukyas of Vatapi, Rashtrakutas) and Kashmir history (Karkota Empire, Lalitaditya, Didda, Abhinavagupta).
- [ ] **Fix 10 (`references.html`):** Expand bibliography to include foundational non-Marxist / nationalist historians (R.C. Majumdar, Jadunath Sarkar, Dharampal) and add an evidence-based definition of *Hindutva* to the glossary.

### Phase 3: Completeness & Specialized Layers (Future — P3)
- [ ] **Fix 11 (`freedom-struggle.html`):** Add coverage of early religious minorities (Kerala Syrian Christians, Bene Israel / Cochin Jews, Zoroastrian Parsis).
- [ ] **Fix 12 (`civilizations.html` & `freedom-struggle.html`):** Integrate subcontinental LGBTQ+ / queer history (Hijra/Kinnar traditions and Section 377 history) and disability perspectives in ancient medicine (Charaka/Sushruta).
- [ ] **Fix 13 (`timeline.html`):** Extend modern timeline from 1950 to contemporary India (1971 war, 1991 reforms, 2000s).

---

## New Gaps Identified Since Initial Audit

1. **Hub format for Sections 4 & 5 (dynasties.html)** — RESOLVED
   (aligned with Sections 1-3 on 2026-10-11)

2. **Ruler pages pending** — 79 of 83 ruler entries have no
   dedicated page yet. Target: 2 per day.

3. **Maritime axis missing from civilizations.html** — 3-axis
   model still lacks oceanic dimension.

4. **Hindi version pending** — user intent to create base-
   language Hindi version in a future phase.

5. **Style consistency across sections** — RESOLVED
   (Sections 4 & 5 aligned with Sections 1-3).

---

## Conclusion

This audit establishes a concrete, evidence-based benchmark for *The History of India* project. By addressing both left-leaning overshoots and right-leaning omissions with equal rigor, the site will achieve an unassailable standard of scholarly integrity: **loyal not to ideological narratives, but to historical evidence.**

---

## Gap Audit Update — 2026-10-11

### Summary of New Gaps Found

A rigorous audit of the current codebase following the addition of 4 ruler sub-pages (`ashoka.html`, `akbar.html`, `aurangzeb.html`, `shivaji.html`), Harappan Seals documentation, Ghaznavid & Ghurid dynasty additions, Sikh persecution entries, and the dynasties hub rebuild identified **27 new historiographical gaps** (plus 1 in-progress production workflow) not cataloged in the initial 48-gap audit:

- **Total New Historiographical Gaps:** **27** (+ 1 In-Progress Rollout: N5)
- **Directional Breakdown:**
  - **Left-Leaning Overshoot / Framing Gaps (L):** 5 (18.5%)
  - **Right-Leaning Missing Evidence Gaps (R):** 5 (18.5%)
  - **Neutral Coverage / Structural Gaps (N):** 17 (63.0%)
  - **In-Progress Production Workflow (—):** 1 (N5)
- **Severity Breakdown:**
  - 🔴 **CRITICAL (P1):** 9 (33.3%)
  - 🟡 **MODERATE (P2):** 15 (55.6%)
  - 🟢 **MINOR (P3):** 3 (11.1%)

---

### New Gap Table

| # | PAGE | SECTION | GAP DESCRIPTION | DIRECTION | SEVERITY | PRIORITY | NEW? |
|---|------|---------|-----------------|:---------:|:--------:|:--------:|:----:|
| N1 | `akbar.html` | Military Campaigns & Conquest | While Chittorgarh casualties (30,000) are noted in EB-K1, Akbar's official *Fatehnama-i-Chittor* framing the conquest as religious victory/jihad is omitted from sources, creating tension with his later *Sulh-i-Kul* profile. | L | 🔴 CRITICAL | P1 | YES |
| N2 | `aurangzeb.html` | Religious Policy & Iconoclasm | Legacy section presents the Eaton/Truschke political-retaliation thesis as settled objective fact rather than a competing school alongside Jadunath Sarkar's orthodox state-ideology model. | L | 🔴 CRITICAL | P1 | YES |
| N3 | `origins.html` | Harappan Archaeogenetics | Omission of the landmark Rakhigarhi ancient DNA study (Shinde et al. 2019; Niraj Rai), which demonstrated that mature Indus individuals lacked Central Asian Steppe pastoralist ancestry. | R | 🔴 CRITICAL | P1 | YES |
| N4 | `dynasties.html` | Standalone Deccan Sultanates | Absence of dedicated standalone cards for the Deccan Sultanates (Adil Shahi of Bijapur, Qutb Shahi of Golconda, Nizam Shahi of Ahmadnagar), obscuring peninsular Indo-Islamic architecture and Deccani culture. | N | 🔴 CRITICAL | P1 | YES |
| N5 | `dynasties.html` | Sub-Page Coverage (In-Progress) | N5 (In-Progress, not a gap) — 79 of 83 ruler entries are actively being converted to dedicated pages at 2/day. Estimated completion: 40 days. | — | 🟡 MODERATE | P2 | IN-PROGRESS |
| N6 | `republic.html` | Territorial Integration & Kashmir | Complete omission of post-1947 Kashmir history: 1952 Delhi Agreement, Article 370 origins, 1953 arrest of Sheikh Abdullah, 1989–90 insurgency, Exodus of Kashmiri Pandits, and the 2019 reorganization. | N | 🔴 CRITICAL | P1 | YES |
| N7 | `republic.html` | Northeast Integration & Conflicts | Erasure of Northeast post-independence history: Naga nationalist movement, 1966 Mizo uprising and IAF airstrikes, 1979–1985 Assam Agitation, and the enforcement of AFSPA (1958). | N | 🔴 CRITICAL | P1 | YES |
| N8 | `freedom-struggle.html` | Social Reform & Anti-Caste | Omission of foundational 19th/20th-century anti-caste pioneers: Jyotirao and Savitribai Phule (Satyashodhak Samaj), Iyothee Thass, Narayana Guru (Aruvippuram movement), and Periyar E.V. Ramasamy (Self-Respect Movement). | L | 🔴 CRITICAL | P1 | YES |
| N9 | `civilizations.html` | Science, Math & Metallurgy | Complete absence of subcontinental scientific traditions: Aryabhata, Brahmagupta, Madhava of Sangamagrama (Kerala School of Astronomy and Mathematics calculus precursors), and Wootz crucible steel metallurgy. | R | 🔴 CRITICAL | P1 | YES |
| N10 | `references.html` | Bibliographic Balance | Reading lists site-wide remain heavily weighted toward Marxist, Subaltern, and Nehruvian scholars; foundational non-Marxist and conservative historiographical authorities (R.C. Majumdar, Jadunath Sarkar, Dharampal) remain absent from `references.html`. | L | 🔴 CRITICAL | P1 | YES |
| N11 | `aurangzeb.html` | Agrarian Economy & Peasant Revolts | Omission of Irfan Habib's agrarian crisis thesis: crushing imperial land revenue extractions (up to 50% of gross produce) fueling Jat (Gokula), Satnami, and Bundela peasant rebellions against Mughal fiscal pressure. | R | 🟡 MODERATE | P2 | YES |
| N12 | `shivaji.html` | Fiscal Strategy & Border Raids | *Chauth* (25%) and *Sardeshmukhi* (10%) revenue extraction presented without analyzing their coercive fiscal burden on non-Maratha agricultural populations or regional grievances. | R | 🟡 MODERATE | P2 | YES |
| N13 | `shivaji.html` | Social Hierarchy & Coronation | Gagabhatt coronation (1674) contestation: orthodox Brahminical resistance to Shivaji's Kshatriya status and the elaborate rituals and genealogy created to link him to Sisodia Rajputs. | L | 🟡 MODERATE | P2 | YES |
| N14 | `akbar.html` | Religious Syncretism & Discipleship | *Din-i Ilahi* presented without noting modern scholarship consensus (Athar Ali, S.A.A. Rizvi) that it was not a formal new religion, but an elite royal discipleship network (*Iradat-i Muridi*). | N | 🟡 MODERATE | P2 | YES |
| N15 | `ashoka.html` | International & Hellenistic Axis | Absence of Hellenistic diplomatic context: Seleucid treaties, Megasthenes, and bilingual Greek/Aramaic edicts (Kandahar bilingual rock inscription) addressing Hellenistic kings (Antiochos II, Ptolemy II). | N | 🟡 MODERATE | P2 | YES |
| N16 | `ashoka.html` | Demographic Scrutiny | Uncritical acceptance of Rock Edict XIII casualty numbers (100,000 killed, 150,000 deported) without scribal convention caveats or demographic plausibility checks. | N | 🟢 MINOR | P3 | YES |
| N17 | `origins.html` | Iconic Harappan Artworks & Tablets | Over-indexing on stamp seals while omitting iconic sculptural masterpieces (bronze "Dancing Girl", steatite "Priest-King"), Dholavira Signboard, and distinction of inscribed copper/clay tablets. | N | 🟡 MODERATE | P2 | YES |
| N18 | `dynasties.html` | Regional Taxonomy & Filter Chips | Hub lacks regional filter chips (Peninsular, Northern, Eastern, Western, Himalayan), relying exclusively on chronological eras and leaving non-Gangetic polities harder to discover. | N | 🟡 MODERATE | P2 | YES |
| N19 | `republic.html` | Civic Agitations & Jurisprudence | Absence of pivotal post-1950 socio-political events: 1965 anti-Hindi language agitations in Madras State, JP Movement / Total Revolution (1974), landmark Shah Bano case (1985), and 2011–12 civil society agitations. | N | 🟡 MODERATE | P2 | YES |
| N20 | `freedom-struggle.html` | Early Subaltern & Tribal Rebellions | Omission of 19th-century armed indigenous insurrections: Santhal Hool (1855) led by Sidhu and Kanhu Murmu, Kol Uprising (1831), and Rampa Rebellion (1922) under Alluri Sitarama Raju. | N | 🟡 MODERATE | P2 | YES |
| N21 | `civilizations.html` | Traditional Medical Sciences | Omission of Ayurveda's empirical treatises: Charaka Samhita (internal medicine), Sushruta Samhita (pioneering rhinoplasty, cataract surgery, surgical instrumentation), and trans-Eurasian translations. | N | 🟡 MODERATE | P2 | YES |
| N22 | `civilizations.html` | Monumental Architecture & Performing Arts | Omission of classical structural temple typologies (Nagara, Dravida, Vesara), rock-cut sanctuaries (Ajanta murals, Ellora Kailasa), and performing arts traditions (Bharata's *Natya Shastra*, classical music systems). | N | 🟡 MODERATE | P2 | YES |
| N23 | `Site-wide` | Vernacular / Hindi Localization | Monolingual English architecture lacks a Hindi translation framework, terminology glossaries, or a base-language localization strategy for subcontinental audiences. | N | 🟡 MODERATE | P2 | YES |
| N24 | `Site-wide` | Digital Interactive Features | Total absence of client-side fuzzy search, interactive geo-spatial historical mapping, audio pronunciation guides for ancient terminology, PDF export, and print stylesheets. | N | 🟢 MINOR | P3 | YES |
| N25 | `references.html` | Historiographical Glossary Asymmetry | 32 of 52 glossary terms (including contentious concepts like *Aryan*, *Caste*, *Dharma*, *Hinduism*, *Indigenous origin*, *Tribe*, *Rigveda*) lack the "Debates:" section provided for the 20 newer entries. | N | 🟡 MODERATE | P2 | YES |
| N26 | `civilizations.html` | Regional Varna/Jati Taxonomy | Varna/Jati section lacks regional variation analysis, such as South India's distinct social structure lacking indigenous Kshatriya/Vaishya varnas (Brahmin vs. Non-Brahmin / Sat-Shudra / Panchama matrix; Valangai/Idangai divisions). | N | 🟡 MODERATE | P2 | YES |
| N27 | `republic.html` | Strategic Defense & Nuclear Trajectory | Complete omission of India's nuclear trajectory: Pokhran-I (1974 "Smiling Buddha"), Pokhran-II (1998 "Operation Shakti"), and the strategic doctrine of Credible Minimum Deterrence. | R | 🟡 MODERATE | P2 | YES |
| N28 | `Site-wide` | Search & Navigation Aliases / Redirection | Lack of alias search keywords or anchors for ruler titular variants (e.g., *Devanampiya Priyadarsi* for Ashoka, *Alamgir* for Aurangzeb, *Chhatrapati* for Shivaji) and absence of systematic bidirectional contemporary cross-referencing. | N | 🟢 MINOR | P3 | YES |

---

### Top Critical Gaps (P1)

1. **Akbar's Chittorgarh Fatehnama & Religious Framing (1568) (`akbar.html`):**  
   While civilian casualties (30,000) are noted in EB-K1, Akbar's official *Fatehnama-i-Chittor* framing the conquest as religious victory/jihad is omitted from sources, creating tension with his later *Sulh-i-Kul* profile.

2. **Historiographical Disparity in Aurangzeb's Temple Demolitions (`aurangzeb.html`):**  
   The Legacy section presents the Eaton/Truschke political-retaliation thesis as settled objective fact rather than a competing school alongside Jadunath Sarkar's orthodox state-ideology model.

3. **Rakhigarhi Ancient DNA Study (2019) (`origins.html`):**  
   Omits peer-reviewed archaeogenetic evidence (Shinde et al., *Cell*) establishing that Mature Indus individuals lacked Central Asian Steppe pastoralist ancestry, an indispensable anchor in archaeogenetic debates.

4. **Standalone Deccan Sultanates Omission (`dynasties.html`):**  
   The Deccan Sultanates (Adil Shahi of Bijapur, Qutb Shahi of Golconda, Nizam Shahi of Ahmadnagar) lack standalone dynasty cards, subsumed into the Bahmani Sultanate, obscuring unique Deccani Indo-Islamic architecture (Gol Gumbaz, Charminar) and cultural synthesis.

5. **Post-1947 Kashmir Political & Constitutional Trajectory (`republic.html`):**  
   Historiographical void regarding post-1947 Kashmir beyond the first war: Delhi Agreement (1952), Article 370 origins, 1953 Sheikh Abdullah arrest, 1989–90 insurgency, Exodus of Kashmiri Pandits, and the 2019 constitutional reorganization.

6. **Northeast Subcontinental Integration & Insurgencies (`republic.html`):**  
   Omission of post-independence Northeast state-building conflicts: Naga National Council, the 1966 Mizo rebellion and IAF strikes on Aizawl, the 1979–1985 Assam movement, and the Armed Forces Special Powers Act (AFSPA).

7. **Omission of Non-Ambedkarite Radical Anti-Caste Pioneers (`freedom-struggle.html`):**  
   Centers anti-caste history exclusively on Dr. B.R. Ambedkar while omitting 19th-century foundations laid by Jyotirao and Savitribai Phule, Narayana Guru, Iyothee Thass, and Periyar's Self-Respect Movement.

8. **Erasure of Classical Science, Mathematics & Metallurgy (`civilizations.html`):**  
   The site celebrates cultural and spiritual heritage but omits pioneering intellectual contributions: Aryabhata, Brahmagupta, Madhava's Kerala School calculus precursors, and Wootz crucible steel metallurgy.

9. **Systemic Historiographical Imbalance on `references.html`:**  
   While R.C. Majumdar was added to a footer line on `civilizations.html`, the formal bibliography and reading lists on `references.html` remain exclusively populated by Marxist and Subaltern scholars, excluding foundational non-Marxist and nationalist historians (Majumdar, Sarkar, Dharampal).

---

### Progress Since Last Audit

#### Gaps Resolved (✅ 13 Gaps from Original 48 + 2 Structural):
- **Gap #1 (`origins.html`):** Steppe pastoralist migration updated as global archaeogenetic and linguistic consensus (Narasimhan et al. 2019; Reich 2018).
- **Gap #7 (`civilizations.html`):** Pre-colonial state enforcement of caste hierarchy and untouchability added (Peshwa, Rajput, and Vijayanagara records; Bayly, Guha).
- **Gap #12 (`dynasties.html`):** Tipu Sultan card updated with documented Coorg/Malabar atrocities, temple demolitions, and balanced Evidence Box.
- **Gap #13 (`dynasties.html`):** Maratha Bargi raids in Bengal (1741–1751) added with Jadunath Sarkar and *Maharashtra Purana* attestations.
- **Gap #15 (`dynasties.html`):** Pushyamitra Shunga coup and Buddhist persecution accounts added with *Divyavadana* and modern scholarship EB.
- **Gap #16 (`dynasties.html` & `aurangzeb.html`):** Aurangzeb dynasty card added + comprehensive dedicated profile page (4,528 words, 6 Evidence Boxes).
- **Gap #22 (`colonial-india.html`):** Nuance paragraph added dismantling single-origin colonial census construction of caste.
- **Gap #37 (`republic.html`):** The Emergency (1975–1977) section added (1,046 words, ADM Jabalpur, Shah Commission, forced sterilizations).
- **Gap #38 (`republic.html`):** External wars integrated (1947–48 Kashmir, 1962 China, 1965 & 1971 Pakistan, 1999 Kargil).
- **Gap #39 (`republic.html`):** States Reorganisation Act (1956) and linguistic federalism movements (Potti Sreeramulu) added.
- **Gap #40 (`republic.html`):** 1984 Anti-Sikh pogrom added with Nanavati Commission documentation (2,733 official deaths) and judicial convictions.
- **Gap #41 (`republic.html`):** 1991 Economic Liberalization reforms added (Rao-Manmohan, License Raj dismantled, balance of payments crisis).
- **Gap #42 (`republic.html`):** Mandal Commission (OBC reservations) and Babri Masjid / Ram Janmabhoomi movement (1992) added.
- **Structural Gap 1 (`dynasties.html`):** Sections 4 & 5 converted to canonical 4-line `.ruler-row` hub format matching Sections 1–3.
- **Structural Gap 2 (`dynasties.html` & `components.css`):** Site-wide styling consistency fixed, eliminating uppercase button links in favor of unified display serif and subtle inline links.

#### Gaps Partially Resolved (🟡 2 Gaps):
- **Gap #14 (`dynasties.html`):** Chalukyas, Pallavas, and Rashtrakutas integrated into dynasty hub as compact entries; dedicated deep-dive profile pages remain pending.
- **Gap #47 (`civilizations.html` & `references.html`):** R.C. Majumdar added to `civilizations.html` source citation, but `references.html` formal bibliography requires full parity expansion.

#### Gaps Still Pending from Initial Audit (⏳ 33 Gaps):
- Gaps #2, #3, #4, #5, #6, #8, #9, #10, #11, #17, #18, #19, #20, #21, #23, #24, #25, #26, #27, #28, #29, #30, #31, #32, #33, #34, #35, #36, #43, #44, #45, #46, #48.

---

### Recommended Next Steps

1. **Deploy Dedicated Ruler Sub-Pages (Priority P1 / Structural):**  
   Implement the 79 pending ruler profile sub-pages at a cadence of 2 per day, starting with high-impact figures (Pulakeshin II, Rajaraja Chola, Chandragupta Maurya, Samudragupta, Ahilyabai Holkar, Rani Abbakka Chowta).
2. **Add Kashmir & Northeast Post-Independence History on `republic.html` (Priority P1):**  
   Integrate objective, sourced sections on Kashmir's post-1947 constitutional trajectory and Northeast state reorganization/agitations into `republic.html`.
3. **Incorporate Indian Scientific and Mathematical Heritage on `civilizations.html` (Priority P1):**  
   Add a dedicated section/axis evaluating the Kerala School of Mathematics (Madhava), classical astronomy (Aryabhata, Brahmagupta), and ancient metallurgy (Wootz steel).
4. **Expand `references.html` with Conservative and Nationalist Historiography (Priority P1):**  
   Add foundational volumes by R.C. Majumdar (*The History and Culture of the Indian People*), Jadunath Sarkar (*Fall of the Mughal Empire*), and Dharampal (*The Beautiful Tree*) to the formal bibliography.
5. **Incorporate Standalone Deccan Sultanates on `dynasties.html` (Priority P1):**  
   Create dedicated dynasty cards for the **Adil Shahi** (Bijapur), **Qutb Shahi** (Golconda), and **Nizam Shahi** (Ahmadnagar) dynasties.
6. **Harmonize Glossary Debates Annotations on `references.html` (Priority P2):**  
   Retrofit the remaining 32 legacy glossary definitions with dedicated `Debates:` commentary to match the 20 newly expanded terms.
