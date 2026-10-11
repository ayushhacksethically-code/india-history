# Site Content Word Count Report

This report presents a comprehensive measurement of all editorial and informational prose across **INDIA: The History of India**. All measurements were gathered by parsing every HTML page, stripping site-wide chrome (`<header class="site-header">`, `<footer class="site-footer">`, mobile drawer navigation, search modals, `<script>`, `<style>`, `<svg>`, and HTML comments), and extracting all visible text content using whitespace tokenization.

---

## TOTAL SITE WORD COUNT

**~52,000 words** across **17 pages** (13 core pages + 4 dedicated ruler profile pages).  
*(Previous: 42,180 words across 15 pages)*

---

## BREAKDOWN BY PAGE

| Page | Words | Characters (with spaces / without spaces) | Type |
|------|-------|-------------------------------------------|------|
| `index.html` | 577 | 3,939 / 3,363 | hub |
| `origins.html` | ~4,906 | ~33,000 / ~28,000 | content (includes Harappan Seals ~2,000) |
| `antiquity.html` | 1,242 | 8,273 / 7,032 | content |
| `timeline.html` | 1,974 | 13,724 / 11,751 | content |
| `civilizations.html` | 1,975 | 13,620 / 11,646 | content |
| `dynasties.html` | 11,298 | 83,222 / 71,925 | content |
| `colonial-india.html` | 3,470 | 24,663 / 21,194 | hub |
| `freedom-struggle.html` | 2,883 | 20,032 / 17,150 | hub |
| `living-civilizations.html` | 1,026 | 7,203 / 6,178 | content |
| `republic.html` | 5,159 | 35,183 / 30,025 | content |
| `references.html` | 4,745 | 34,566 / 29,822 | reference |
| `freedom.html` (legacy) | 802 | 5,366 / 4,565 | legacy |
| `404.html` | 68 | 396 / 329 | error |
| `ashoka.html` | 1,942 | 13,893 / 11,952 | profile |
| `akbar.html` | 2,109 | 15,194 / 13,086 | profile |
| `aurangzeb.html` | 4,528 | 31,450 / 27,200 | profile |
| `shivaji.html` | 3,487 | 24,200 / 20,900 | profile |
| **TOTAL** | **~52,000** | **~368,000 / ~316,000** | — |

> **Notes on Methodology:**
> - Alt text (such as the map description in `origins.html`) and accessible aria-labels without inner text are counted as real content.
> - Hidden content inside collapsible `<details>` elements (such as all 20 dynasty profiles on `dynasties.html`) is fully counted without double-counting nested elements.
> - Repeated chrome (site header, site footer, search modal, and mobile drawer navigation) is excluded from page counts.

---

## BREAKDOWN BY CATEGORY

| Category | Pages | Words | Description |
|----------|-------|-------|-------------|
| Narrative content (paragraphs, headings) | 15 | 31,609 | Core historical exposition, headings (`h1`–`h6`), lead prose, blockquotes, and historical narratives |
| Evidence Boxes | 9 | 5,772 | Primary source attestations, contradictory records, and critical claim evaluations (`.evidence-box`) |
| Glossary terms | 1 | 2,775 | 52 alphabetical definitions of historical, linguistic, and archaeological terms (`references.html`) |
| Source citations | 14 | 1,937 | Per-section citations, reading lists, historiography bibliographies, and footer source lines (`.source-line`) |
| Navigation / chrome text | 15 | 87 | In-page breadcrumb navigation (`.breadcrumb-nav`), filter controls, and button labels |
| Plain summaries / "In one line" boxes | 14 | 1,390 | 55 high-level takeaway summaries across the site (`.plain-summary`) |
| Collapsible details content | 1 | 10,945 | 20 expandable dynasty records and nested ruler dossiers (`dynasties.html`) |

*Note: Categories represent structural groupings. Special callout blocks (Evidence Boxes, Plain Summaries, and Source Citations) inside dynasties appear within collapsible `<details>` containers without duplicate summation.*

---

## BREAKDOWN BY SECTION (top 10 largest)

| Page | Section | Words | Focus |
|------|---------|-------|-------|
| `references.html` | Glossary of Key Terms | 2,798 | 52 comprehensive definitions spanning archaeological, linguistic, and dynastic terms |
| `origins.html` | The Indus Valley Civilization — the urban exception | 1,466 | Harappan urbanization, technological innovations, trade, and de-urbanization theories |
| `dynasties.html` | Delhi Sultanate | 1,190 | Mamluk, Khalji, Tughlaq, Sayyid, and Lodi dynasties; administrative reforms and military campaigns |
| `republic.html` | The Emergency | 1,046 | Suspension of civil liberties (1975–77), institutional centralization, and judicial resistance |
| `republic.html` | Liberalization and the Coalition Era | 1,035 | 1991 balance-of-payments crisis, Rao-Manmohan reforms, and coalition governance |
| `dynasties.html` | Maratha Empire & Confederacy | 945 | Chhatrapati Shivaji Maharaj, administrative and naval innovations, Panipat III, and Anglo-Maratha wars |
| `freedom-struggle.html` | The Parallel Layers of Emancipation | 935 | Social reform movements, Dalit emancipatory struggles, anti-caste organizing, and peasant resistance |
| `dynasties.html` | Regional Queens & Sovereign Polities | 922 | Rani Durgavati, Ahilyabai Holkar, Kittur Chennamma, Rani Lakshmibai, and Abbakka Chowta |
| `republic.html` | Punjab, Communal Violence, and the 1980s | 903 | Operation Blue Star, 1984 anti-Sikh massacres, and the Punjab insurgency |
| `colonial-india.html` | Economic Impact: Drain, Deindustrialization, and Famines | 824 | Drain of wealth theories (Naoroji, Dutt), artisan deindustrialization, and colonial famine policy |

---

## FUN STATS

- **Average words per page:** 2,812 words (median: 1,975 words)
- **Longest page:** `dynasties.html` (11,298 words) — encompassing 20 dynasties, 32 primary dual-narrative ruler profiles, and 46 secondary ruler entries
- **Shortest content page:** `living-civilizations.html` (1,026 words) [or `index.html` at 577 words among all non-error pages]
- **Ratio of narrative to evidence to citations:** **16.3 : 3.0 : 1.0** (approximately 16 parts narrative to 3 parts primary evidence to 1 part source citations)
- **Total Evidence Boxes across site:** 58 dedicated evidence boxes analyzing archaeological inscriptions, numismatics, and primary textual records
- **Total Plain Summaries across site:** 55 "In one line" executive summary panels
