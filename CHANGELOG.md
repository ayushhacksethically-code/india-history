# Changelog
All notable changes to this project.

## [Unreleased]
### Planned
- Ruler sub-pages for 79 pending entries (2 per day)
- Kashmir section in republic.html
- Northeast India section
- Maritime civilizational axis
- Portuguese Goa (1510–1961)
- Peninsular dynasties (Chalukyas, Rashtrakutas)
- Kashmir dynasties (Karkota, Didda — currently brief)
- Hindi version (base-language approach)
- Post-2014 events (scope note only)

## [0.7.0] — 2026-10-11
### Added
- Harappan Seals section on origins.html ("The Seals of the Harappan World" — 5 cards, Pashupati contested label, trade network, Marshall/Mackay/Parpola sources)
- 4 new ruler pages: ashoka.html, akbar.html, aurangzeb.html, shivaji.html (each 3,400–4,500 words, 6 Evidence Boxes)
- Ghaznavid & Ghurid dynasty card in dynasties.html (Mahmud of Ghazni, Muhammad Ghori, Subuktigin, Bakhtiyar Khalji)
- Sikh Persecution entry in Mughal card (1606–1716 CE — Guru Arjan Dev, Guru Hargobind, Guru Tegh Bahadur, Sahibzadas, Banda Singh Bahadur)
- references.html: glossary converted from grid to list (52 terms, .content-list)
- R.C. Majumdar added to civilizations.html source line

### Changed
- dynasties.html: rebuilt as hub/directory (83 ruler entries, 4-line format: name, reign, summary, link)
- dynasties.html: Sections 4-5 styling aligned with Sections 1-3 (removed uppercase button-style links, unified .ruler-row canonical style)
- civilizations.html: 8 neutrality fixes applied (equal partners → unequal/collaborative, evidence shows → most current scholarship, textbook strawman → accurate-as-far, dark age → fragmentation, plurality editorial → both readings, so-called → proposed/disputed, CTA link title, Sultanate/Mughal urban examples)
- Nav/title/breadcrumb audit: 4 pages fixed (civilizations, dynasties, living-civilizations titles; references breadcrumb)
- IIPA claims corrected: "first urban civilization" → "one of the earliest"; "Pashupati is the name" → "identified by Marshall (1931), contested"

### Fixed
- Tall-element reveal bug (dynamic threshold for elements >50% viewport height)
- Duplicate SVG block on origins.html
- 4 CSS class mismatches (.cta-btn modifiers, .sr-only, .origins-badge--blue, .hero-tagline)

### Verified
- Byte-identical header/footer across 17 pages
- CDP tests: 102/102 viewport configs pass
- Zero horizontal overflow at 320/375/768/1024/1440/1920
- Total content: ~52,000 words across 17 pages

## [0.5.0] — 2026-10-05 (Phase C)
### Added
- 20 new glossary terms (32 → 52 total)
- "How to Read This Site" section on references.html
- Review schedule in footers site-wide
- CORRECTIONS.md at repo root
- Hindurāya section on civilizations.html
- "Pre-Colonial Caste Enforcement" section on civilizations.html + colonial-india.html nuance
- Ruler self-identification lines deferred to Phase C·7

## [0.2.0] — Phase B complete (2026-10-04)
### Added
- 18 Evidence Boxes across content pages
- 8 "How Do We Know?" panels
- 10 per-page Source Lines
- New CSS: .evidence-box, .how-do-we-know, .source-line

## [0.1.5] — Phase A complete (2026-10-04)
### Changed
- Sharpened core thesis to "plurality-in-connection" site-wide
- Fixed hero inconsistency on index.html
- Corrected Koldihwa dating (origins.html)
- Added Indus-to-Veda steppe migration evidence
- Corrected Chola attribution (dynasties.html)
- Added Partition death-toll range (freedom-struggle.html)
- Added Colonial drain methodology disclosure (colonial-india.html)
- Reframed Living Civilizations from binary to spectrum
- Added Three Axes diagram (civilizations.html)
- Added Working Definitions section (references.html)
- Added 5 missing glossary terms

## [0.1.0] — 2026-10-03
### Added
- colonial-india.html (context hub)
- freedom-struggle.html (resistance hub)
- Mobile drawer updated to 11 items
- Desktop nav updated with Colonial India

## [0.0.5] — 2026-10-03
- Fixed CTA button class mismatch site-wide
- Fixed duplicate SVG in origins.html
- Added .sr-only accessibility utility
- Added .origins-badge--blue modifier
- Added .hero-tagline and .hero-italic styles
- Replaced <object> with <img> for regional map

## [0.0.1] — 2026-10-03
- 10-page educational site launched
