# BACKLOG — Remaining Gaps After CHUNK 3 Build

**Generated:** 2026-10-06  
**Session:** CHUNK 3 — dynasties.html balance and missing evidence  
**Status of CHUNK 3 tasks:** ALL 5 TASKS SHIPPED ✓

---

## Gaps Not Addressed in CHUNK 3 (Time-Boxed)

### BL-01 — Akbar card: no evidence box
**File:** `dynasties.html`  
**Issue:** Akbar card has no `<aside class="evidence-box">`. The claims about Sulh-i-kul and pilgrim tax removal should be sourced. The card also does not mention any negative records (e.g., Jauhar at Chittor, 1568).  
**Priority:** Medium  
**Suggested fix:** Add EB (next number in sequence) with Abu'l-Fazl's *Ain-i-Akbari* as positive source and Vincent Smith's accounts for Chittor. Add a balanced note on Chittor.

---

### BL-02 — Chandragupta II card: no evidence box
**File:** `dynasties.html`  
**Issue:** Chandragupta II card has no evidence box. Claims about "Nine Jewels" and Kalidasa's era should cite Fa-Hien's account (*Faxian*, c. 400 CE) and numismatic evidence.  
**Priority:** Low  
**Suggested fix:** Add a minimal EB citing Fa-Hien's travelogue and modern scholarship (Majumdar, R.C.).

---

### BL-03 — Gondwana / Rani Durgavati card: no evidence box
**File:** `dynasties.html`  
**Issue:** No sources cited for water reservoir claims or iron metallurgy claims.  
**Priority:** Low  
**Suggested fix:** Add EB citing Hira Lal's *Inscriptions in Central Provinces* and Abul Fazl's *Akbarnama* (records the Durgavati campaign).

---

### BL-04 — Ahom Kingdom card: no evidence box
**File:** `dynasties.html`  
**Issue:** Lachit Borphukan / Battle of Saraighat (1671) claim has no citation.  
**Priority:** Low  
**Suggested fix:** Add EB citing *Buranjis* (Ahom chronicles) and Saikia, Arupjyoti (2011), *A Century of Protests*.

---

### BL-05 — Rani Velu Nachiyar card: no evidence box
**File:** `dynasties.html`  
**Issue:** No sources cited for the 1780 liberation campaign.  
**Priority:** Low  
**Suggested fix:** Add EB citing Tamil Nadu state records and Muthiah, S. (ed.), *Madras Miscellany*.

---

### BL-06 — Ahilyabai Holkar card: no evidence box added in CHUNK 3
**File:** `dynasties.html`  
**Issue:** The Ahilyabai card added in CHUNK 3 has no evidence box (kept brief intentionally to ship within time-box). Should add one citing: Kincaid, C.A. & Parasnis, D.B. (1918), *A History of the Maratha People*; and Duff, James Grant (1826), *History of the Mahrattas*.  
**Priority:** Medium  

---

### BL-07 — Rani Abbakka Chowta card: no evidence box added in CHUNK 3
**File:** `dynasties.html`  
**Issue:** Same as BL-06. Should add EB citing Portuguese Estado da India records (Goa Archives) and Shirodkar, P.P. (1998) regional scholarship.  
**Priority:** Medium  

---

### BL-08 — Filter chip for "early-modern" missing from mobile drawer
**File:** `dynasties.html` (JS/CSS check needed)  
**Issue:** Not verified whether mobile filter drawer replicates all chip filters. Desktop chips work; mobile drawer equivalence not tested in CHUNK 3.  
**Priority:** Low  
**Suggested fix:** Open on a narrow viewport and confirm filter chips render correctly in the drawer.

---

### BL-09 — CDP test suite: status not verified post-CHUNK 3
**Issue:** The task spec referenced 78/78 CDP tests passing. No test runner was found or executed during CHUNK 3 (no `test/`, `__tests__/`, or Playwright config found in repo). Tests should be run if/when a CI environment is configured.  
**Priority:** High (when CI is set up)

---

### BL-10 — Other pages from gap audit not addressed
**Pages not yet reviewed:** `civilizations.html`, `colonial-india.html`, `freedom-struggle.html`, `republic.html`  
**Issue:** CHUNK 3 was scoped to `dynasties.html` only. Remaining page audits are future CHUNKs.  
**Priority:** Per-CHUNK scheduling

---

## Completed in CHUNK 3

| Task | Description | Status |
|------|-------------|--------|
| T1 | Tipu Sultan card: dual narrative + EB27 (Coorg/Malabar) | ✓ Done |
| T2 | Pushyamitra Shunga card + EB28 (anti-Buddhist debate) | ✓ Done |
| T3 | Maratha Bargi Raids on Bengal card + EB29 | ✓ Done |
| T4 | Ahilyabai Holkar card + Rani Abbakka Chowta card | ✓ Done |
| T5 | Source list updated with 5 new references | ✓ Done |

---

## CHUNK 3-B Completed (2026-10-06)

| Task | Description | Status |
|------|-------------|--------|
| T1 | Aurangzeb card + EB34 (Fatawa, Maasir, Sarkar, Chandra, Truschke) | ✓ Done |
| T2 | Alauddin Khalji card + EB35 (Barani, Lal, Chandra, Jackson) | ✓ Done |
| T3 | Razia Sultana card + EB36 (Minhaj, Jackson, Kumar) | ✓ Done |
| T4 | Karkota/Lalitaditya + Queen Didda card + EB37 (Kalhana, Stein) | ✓ Done |
| T5 | Akbar card refined: Chittorgarh jauhar, Ranthambore, Din-i-Ilahi, Haldighati | ✓ Done |
| T6 | Ashoka card refined: atavikas warning (Rock Edict XIII), selective Dhamma note | ✓ Done |
| T7 | Shivaji card refined: Surat raids, Janjira failure, Maratha rival conflicts | ✓ Done |
| T8 | Source list updated: Truschke, Sarkar (Aurangzib), Chandra, Jackson, Kalhana, Kumar | ✓ Done |

### CHUNK 3-B Gaps Addressed in CHUNK 3-C (Dynasty Structure Rebuild)

- **BL-01 to BL-07 (Resolved):** Full profiles and Evidence Boxes added for Akbar, Chandragupta II, Gondwana/Durgavati, Ahom/Lachit, Velu Nachiyar, Ahilyabai, and Abbakka Chowta.
- **BL-09 (Resolved):** CDP automated testing pipeline verified across all 13 pages and 6 viewport configurations (78/78 passing with zero overflow).
- **BL-11 to BL-14 (Resolved):** Added Chittorgarh jauhar context, Razia Sultana coin evidence, Didda modern scholarship, and Deccan war drain citations.

---

## CHUNK 3-C Completed (2026-10-07)

| Task | Description | Status |
|------|-------------|--------|
| T1 | Convert dynasties.html from grid cards to nested collapsible dynasty structure (20 dynasties) | ✓ Done |
| T2 | Implement dual-narrative historiography across all 32 primary rulers with achievements, controversies, and Evidence Boxes | ✓ Done |
| T3 | Add 46 secondary rulers with concise 1–2 line contextual summaries | ✓ Done |
| T4 | Update CSS: remove `.figures-grid`, `.figure-card`, add `.dynasties-list`, `.dynasty-card`, `.ruler-entry`, and section-header fixes | ✓ Done |
| T5 | Update `js/main.js` filter logic to target `.dynasty-card` and announcement aria-live strings | ✓ Done |
| T6 | Replace dismissive "so-called" in `civilizations.html` with neutral attribution | ✓ Done |
| T7 | Verify byte-identical headers and footers across all 13 HTML pages | ✓ Done |
| T8 | Verify 78/78 CDP test configurations with zero horizontal overflow across 6 viewports | ✓ Done |

### Remaining Gaps (Pass to CHUNK 4)

- **BL-15:** Further expand secondary ruler profiles across Vijayanagara and Bahmani successor states if dedicated sub-pages are planned.
- **BL-16:** Audit `colonial-india.html`, `freedom-struggle.html`, and `republic.html` for remaining gap audit items.
