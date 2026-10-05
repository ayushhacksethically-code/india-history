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

| # | PAGE | SECTION | GAP DESCRIPTION | DIRECTION | SEVERITY | PRIORITY |
|---|------|---------|-----------------|:---------:|:--------:|:--------:|
| 1 | `origins.html` | From Village to Veda | Steppe pastoralist migration framed as an unsettled debate rather than global archaeogenetic and linguistic consensus (Narasimhan et al. 2019; Reich 2018). | L | 🔴 CRITICAL | P1 |
| 2 | `origins.html` | Before the Cities | Omission of deep Paleolithic & AASI (Ancient Ancestral South Indian) genetic baseline (>65,000 BP) in favor of agrarian origins (9000 BP). | N | 🟡 MODERATE | P2 |
| 3 | `origins.html` | Other Civilizations | Northeast Neolithic (Daojali Hading cord-marked ceramics, Austroasiatic & East Asian linkages) omitted from contemporary regional cultures. | N | 🟡 MODERATE | P2 |
| 4 | `antiquity.html` | What India Can Claim | Southern Iron Age & urbanization (Keezhadi, Kodumanal, Adichanallur dated to 6th c. BCE) omitted, skewing civilizational antiquity entirely northwest. | N | 🔴 CRITICAL | P1 |
| 5 | `antiquity.html` | Question 2: Continuity | Continuity narrative centers Vedic/Sanskrit oral transmission while under-indexing Dravidian linguistic antiquity and Sangam literary heritage. | R | 🟡 MODERATE | P2 |
| 6 | `antiquity.html` | What India Cannot Claim | Downplays physical civilizational ruptures, major library burnings (Nalanda, Vikramashila), and wholesale destruction of urban imperial centers. | L | 🟡 MODERATE | P2 |
| 7 | `civilizations.html` | Social Order (Varna/Jati) | Overstates colonial construction of caste; claims 1871 census ossified what was fluid, ignoring strict pre-colonial Peshwa, Rajput, and Vijayanagara enforcement of varna and untouchability (Bayly 1999; Guha 2013). | L | 🔴 CRITICAL | P1 |
| 8 | `civilizations.html` | Three Axes of History | Complete omission of Maritime / Oceanic Civilizational Axis (Chola maritime expeditions, Indian Ocean spice networks, Roman trade at Muziris/Arikamedu, Kalinga Bali Yatra). | N | 🔴 CRITICAL | P1 |
| 9 | `civilizations.html` | Three Expressions | Absence of Shramana/Heterodox axis; ignores Buddhism, Jainism, and Charvaka as endogenous internal philosophical rebellions against Brahminical orthodoxy. | L | 🔴 CRITICAL | P1 |
| 10 | `civilizations.html` | Hindurāya Subsection | Omission of recorded pre-colonial Hindu-Muslim theological boundaries, friction, and sectarian violence prior to 14th-century Vijayanagara courtly epigraphy. | R | 🟡 MODERATE | P2 |
| 11 | `civilizations.html` | Expressions of Civilization | Absence of Lakshadweep from maritime and regional civilizational mosaic (Arabian Sea trade, Buddhist-Islamic transition). | N | 🟢 MINOR | P3 |
| 12 | `dynasties.html` | Tipu Sultan Card | Uncritical portrayal of Tipu Sultan as enlightened modernizer and rocket pioneer; complete omission of forced conversions, captive deportations, and temple destructions in Kodagu (Coorg) and Malabar. | L | 🔴 CRITICAL | P1 |
| 13 | `dynasties.html` | Shivaji / Marathas | Glorifies Shivaji but ignores later Maratha expansion realities: the catastrophic Bargi raids in Bengal (1741–1751) with massive civilian slaughter, and Maratha-Rajput warfare. | R | 🔴 CRITICAL | P1 |
| 14 | `dynasties.html` | Post-Gupta / Peninsular | Complete omission of great Peninsular dynasties: Chalukyas of Vatapi (Pulakeshin II), Rashtrakutas (Amoghavarsha, Ellora Kailasa), and Hoysalas. | N | 🔴 CRITICAL | P1 |
| 15 | `dynasties.html` | Ashoka / Early Historic | Omission of Pushyamitra Shunga’s coup against the Mauryas and recorded textual accounts of Buddhist persecution (Divyavadana, Ashokavadana). | R | 🟡 MODERATE | P2 |
| 16 | `dynasties.html` | Akbar / Mughal Era | Total absence of Delhi Sultanate monarchs (Alauddin Khalji, Razia Sultana) and later Mughal religious reversal under Aurangzeb (re-imposition of jizya, temple destructions). | L | 🔴 CRITICAL | P1 |
| 17 | `dynasties.html` | Women Rulers | Omission of Ahilyabai Holkar (famed for administrative justice and pan-Indian temple/ghat rebuilding) and Rani Abbakka Chowta (who defeated Portuguese invasions). | R | 🟡 MODERATE | P2 |
| 18 | `dynasties.html` | Kashmir Dynasties | Absence of Karkota Empire (Lalitaditya Muktapida), Queen Didda, Kalhana’s Rajatarangini, and Trika Kashmir Shaivism (Abhinavagupta). | N | 🟡 MODERATE | P2 |
| 19 | `colonial-india.html` | The 1857 Turning Point | Complete silence on crucial Indian princely collaboration: Scindia, Nizam, Rajput rulers, Sikh states, and Gurkhas actively crushed the revolt (Lord Canning’s “breakwaters in the storm”). | R | 🔴 CRITICAL | P1 |
| 20 | `colonial-india.html` | How the British Ruled | Omission of massive Indian military collaboration in imperial defense: 1.3 million soldiers in WWI and 2.5 million in WWII (largest volunteer army in human history). | R | 🔴 CRITICAL | P1 |
| 21 | `colonial-india.html` | How the British Ruled | Frames communal antagonism purely as British “divide-and-rule” (1909 separate electorates), ignoring centuries of pre-colonial religious boundaries and sporadic sectarian riots. | L | 🔴 CRITICAL | P1 |
| 22 | `colonial-india.html` | Social Impact: Caste | Attributes modern caste rigidity entirely to Herbert Risley and the 1871 census, obscuring indigenous structural inequality and orthodox enforcement. | L | 🔴 CRITICAL | P1 |
| 23 | `colonial-india.html` | How the British Arrived | Omission of Portuguese colonial rule in Goa, Daman, and Diu (1510–1961: 451 years!), the Goa Inquisition, and French enclaves (Pondicherry). | N | 🔴 CRITICAL | P1 |
| 24 | `colonial-india.html` | Economic Impact | Omission of Indian commercial collaboration: Parsi, Marwari, and Gujarati mercantile elites profiting from agency houses and British opium/cotton trade with China. | R | 🟡 MODERATE | P2 |
| 25 | `colonial-india.html` | Economic Impact | Colonial famines analyzed without acknowledging recurring ENSO climate/drought triggers and pre-colonial subcontinental famine vulnerabilities. | L | 🟡 MODERATE | P2 |
| 26 | `colonial-india.html` | Social Impact | Indentured labour diaspora (over one million Girmitiyas transported to Fiji, Mauritius, Caribbean, and South Africa) omitted from human cost of empire. | N | 🟡 MODERATE | P2 |
| 27 | `freedom-struggle.html` | Visible Layer (Resistance) | Marginalization of Revolutionary Nationalists (Bhagat Singh, Chandrashekhar Azad, Surya Sen, Bagha Jatin), subordinating armed struggle to the Congress non-violence narrative. | R | 🔴 CRITICAL | P1 |
| 28 | `freedom-struggle.html` | Visible Layer (Resistance) | Total omission of Veer Savarkar (Abhinav Bharat, Cellular Jail / Kala Pani imprisonment, Hindutva 1923) and the Hindu Mahasabha from anti-colonial history. | R | 🔴 CRITICAL | P1 |
| 29 | `freedom-struggle.html` | Partition: Cost of Freedom | Blames Partition solely on Cyril Radcliffe’s hasty borders and British cynicism; omits Congress political errors (1937 UP coalition rejection, 1946 Cabinet Mission grouping repudiation). | L | 🔴 CRITICAL | P1 |
| 30 | `freedom-struggle.html` | Partition: Cost of Freedom | Depicts Muslim League solely as communal opportunists, ignoring genuine Muslim minority anxieties regarding majoritarian disenfranchisement in a unitary state (Ayesha Jalal thesis). | L | 🔴 CRITICAL | P1 |
| 31 | `freedom-struggle.html` | Parallel Layers (Caste) | Asymmetric framing of Gandhi-Ambedkar dispute; omits Gandhi’s principled rationale against permanent statutory caste separation and his vast nationwide anti-untouchability campaigns. | L | 🟡 MODERATE | P2 |
| 32 | `freedom-struggle.html` | Parallel Layers (Communities) | Absence of early religious minority communities: Kerala Syrian / St. Thomas Christians (1st c. CE), Bene Israel / Cochin Jews, and Zoroastrian Parsis seeking refuge from Persian conquest. | N | 🟡 MODERATE | P2 |
| 33 | `freedom-struggle.html` | 1946 Turning Points | Under-weighting of INA Red Fort trials and 1946 Royal Indian Navy Revolt; omits Clement Attlee’s testimony that armed force unreliability compelled the swift British departure. | R | 🟡 MODERATE | P2 |
| 34 | `freedom-struggle.html` | Parallel Layers (Labour) | Omission of major radical peasant uprisings: Bengal Tebhaga movement and armed Telangana peasant insurrection (1946–1951) against feudal Deshmukhs. | L | 🟡 MODERATE | P2 |
| 35 | `freedom-struggle.html` | Unfinished Struggles | Complete absence of Andaman & Nicobar penal colony (Cellular Jail), Japanese occupation (1942–45), Netaji’s provisional government, and indigenous tribes (Jarawa, Sentinelese). | N | 🟡 MODERATE | P2 |
| 36 | `freedom-struggle.html` | Parallel Layers (Gender/Soc) | Complete silence on subcontinental LGBTQ+ / queer history (Hijra/Kinnar traditions, Kamasutra/Khajuraho representations, Section 377 IPC criminalization). | N | 🟢 MINOR | P3 |
| 37 | `republic.html` | Democratic Experiment | Complete omission of The Emergency (1975–1977) — the 21-month suspension of fundamental rights, press censorship, and mass jailing — the greatest constitutional crisis in republican history. | L | 🔴 CRITICAL | P1 |
| 38 | `republic.html` | Territorial Integration | Total omission of major external wars shaping republican sovereignty: 1947–48 Kashmir, 1962 Sino-Indian War, 1965, 1971 Bangladesh Liberation, and 1999 Kargil. | N | 🔴 CRITICAL | P1 |
| 39 | `republic.html` | Constitutional Pluralism | Total omission of the States Reorganisation Act (1956) and linguistic state movements (Potti Sreeramulu), the cornerstone of Indian cooperative federalism. | N | 🔴 CRITICAL | P1 |
| 40 | `republic.html` | Democratic Experiment | Absence of 1984 Anti-Sikh pogrom, Operation Blue Star, and the decade-long Punjab insurgency. | L | 🔴 CRITICAL | P1 |
| 41 | `republic.html` | Economic & Tech Cards | Omission of 1991 Economic Liberalization (dismantling the License Raj; Rao-Manmohan reforms), creating a false leap directly from 1960s Green Revolution to modern digital UPI. | R | 🔴 CRITICAL | P1 |
| 42 | `republic.html` | Social / Democratic Cards | Omission of the Mandal Commission (OBC reservations) and the Ram Janmabhoomi movement / Babri Masjid demolition (1992), which fundamentally reshaped contemporary politics. | N | 🔴 CRITICAL | P1 |
| 43 | `republic.html` | Democratic Experiment | Absence of post-2014 constitutional and political contestations (abrogation of Article 370 in Jammu & Kashmir, CAA-NRC protests). | N | 🟡 MODERATE | P2 |
| 44 | `timeline.html` | Early Medieval | Omission of the Tripartite Struggle (Gurjara-Pratiharas, Palas, Rashtrakutas) and early Rajput polities, creating an artificial dark age between Harsha and the Delhi Sultanate. | N | 🟡 MODERATE | P2 |
| 45 | `timeline.html` | Deccan & South | Bahmani Sultanate and the five Deccan Sultanates (Bijapur, Golconda, Ahmadnagar) omitted from chronology. | N | 🟡 MODERATE | P2 |
| 46 | `timeline.html` | Modern Era | Timeline terminates abruptly in 1950, omitting 75+ years of post-independence history (wars, Emergency, 1991 reforms). | N | 🟡 MODERATE | P2 |
| 47 | `references.html` | Reading List | Reading list exclusively cites Marxist, subaltern, and Nehruvian historians (Thapar, Chandra, Habib, Guha); omits respected conservative/nationalist scholars (R.C. Majumdar, Jadunath Sarkar, Dharampal). | L | 🔴 CRITICAL | P1 |
| 48 | `living-civilizations.html` | Survival vs Extinction | Civilizational continuity thesis risks exceptionalism; oversimplifies extinction of Greco-Roman/Egyptian traditions while understating severe Indian historical ruptures. | L | 🟡 MODERATE | P2 |

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

## Conclusion

This audit establishes a concrete, evidence-based benchmark for *The History of India* project. By addressing both left-leaning overshoots and right-leaning omissions with equal rigor, the site will achieve an unassailable standard of scholarly integrity: **loyal not to ideological narratives, but to historical evidence.**
