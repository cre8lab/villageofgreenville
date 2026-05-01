# VillageOfGreenville.com — Claude Project Handoff

**Prepared for:** Claude Code / project build continuation  
**Prepared date:** 2026-05-01  
**Primary site:** VillageOfGreenville.com  
**Current deployed preview supplied by user:** `https://villageofgreenville-jezn37a1x-adammwaite-6026s-projects.vercel.app/`  
**Access note:** External review attempt returned `401 Unauthorized`. Claude should inspect the local project or an accessible Vercel preview before making UI-specific edits.

---

## 1. Project Identity

### Site name
**VillageOfGreenville.com**

### Product title
**The Community Record**

### Primary positioning line
> **A community record built on facts, public sources, and respect for Greenville residents.**

### Core purpose
Build an independent, non-government, source-linked community portal for Greenville, Wisconsin that helps residents understand:

- local history
- growth and development
- public decisions
- official records
- elected/local government representation
- official-source changes over time
- how public information connects to daily life in Greenville

This should become a calm, professional, AI-assisted civic intelligence portal — not a local gossip site, not a government clone, and not a partisan watchdog page.

---

## 2. Relationship to SiftForward

VillageOfGreenville.com is a standalone community site, but it can also serve as a proof-of-work example for the SiftForward methodology.

### SiftForward brand context
SiftForward is the user's Wisconsin-rooted applied-software / SaaS / API / AI integration umbrella brand.

- Domain: `siftforward.com`
- Repo: `https://github.com/cre8lab/siftforward-site`
- Tagline: **Finding meaning inside noise.**
- Core positioning: practical software, AI workflows, API integrations, and applied systems that turn messy information into clear, useful action.

### How SiftForward should show up here
Do **not** make VillageOfGreenville.com feel like a SiftForward ad.

Instead, show SiftForward's thinking through the product itself:

> public source identified → record registered → change detected or manually reviewed → facts extracted and labeled → human review completed → plain-English record published

Possible subtle methodology label:

> **Sift → Verify → Explain → Publish**

Or, in civic context:

> **Find the source. Label the record. Explain the change. Publish carefully.**

SiftForward may later have a case-study page about VillageOfGreenville.com, but the community site itself should remain independent, respectful, and resident-first.

---

## 3. First-Principles Methodology

The site should be designed from first principles around civic trust.

### The site should answer
1. What is true?
2. Where did the information come from?
3. What changed?
4. Why might it matter to residents?
5. What is still unknown or pending?
6. How can someone verify or correct it?

### Operating principles
- Trust first.
- Facts before opinion.
- Public sources before commentary.
- Context without spin.
- Numbers and dates whenever available.
- Clear source links.
- Correction path.
- Label uncertainty and status.
- AI assists organization but should not auto-publish unreviewed claims.
- Automate discovery and organization first; keep publication human-reviewed.
- Respect residents and public officials.
- Do not overemphasize residential addresses even if they appear in official public records.

### Site behavior standard
The user wants the site to feel almost like the page itself were “running for city office” in terms of character:

- civic-minded
- trustworthy
- transparent
- calm
- accountable
- service-oriented
- fact-based
- careful with claims
- respectful of Greenville residents

---

## 4. Public-Facing Tone

### Do
- Use plain English.
- Use calm, factual language.
- Show sources.
- Label uncertainty.
- Explain status.
- Separate facts from context.
- Say when something is proposed, pending, unofficial, certified, adopted, superseded, or still under review.
- Provide useful resident context without telling people what to think.

### Do not
- Do not imply official government affiliation.
- Do not mimic an official municipal seal or government visual identity.
- Do not use outrage language.
- Do not summarize rumors as facts.
- Do not auto-publish AI-generated claims.
- Do not claim live monitoring unless a scheduled monitor is actually running.
- Do not list someone as a current official based only on election-night results.
- Do not show residential addresses on the community site; link to official sources instead.

---

## 5. Required Disclaimer

Use this language in the header/footer and on the About page:

> **Independent community website. Not affiliated with the official Village of Greenville government.**

Expanded footer copy:

> VillageOfGreenville.com is an independent community website and is not affiliated with the official Village of Greenville government. For official services, notices, permits, ordinances, meetings, and public records, please visit the official Village website.

---

## 6. Current Known Source Landscape

The following sources are the initial source registry for the site. Treat them as source records, not as blindly trusted content. Each record should include `lastChecked`, `lastReviewed`, `trustTier`, `sourceType`, and `monitoringMethod`.

### 6.1 Village of Greenville official site
URL: `https://greenvillewi.gov/`  
Use for: official site entry point, government navigation, community info, departments, events, maps, legal notices, agendas, boards, staff, elections, finance/taxes, strategic plan, municipal code, open records, planning, zoning, TIDs, housing reports, parks, public works, fire/EMS, utilities.

Suggested source record:

```json
{
  "id": "greenville-official-site",
  "name": "Village of Greenville Official Site",
  "publisher": "Village of Greenville",
  "url": "https://greenvillewi.gov/",
  "sourceType": "official_webpage",
  "trustTier": "primary_official",
  "monitoringMethod": "html_change_detection",
  "reviewRequired": true
}
```

### 6.2 Our Community page
URL: `https://greenvillewi.gov/our_community/index.php`  
Use for: history timeline seed, community description, current official population statement, employer context.

Verified content as of 2026-05-01:

- Est. 1848.
- Greenville is described as west of Appleton.
- Population stated by Village page: 13,163 and growing.
- Founded as Greenville Station in 1848.
- Name changed to Becker in 1879.
- Name changed to Town of Greenville in 1896.
- Incorporated as Village of Greenville in 2021.

Timeline seed:

```json
[
  {
    "date": "1848",
    "title": "Greenville founded as Greenville Station",
    "category": "history",
    "sourceId": "greenville-our-community",
    "confidence": "high",
    "status": "official_historical"
  },
  {
    "date": "1879",
    "title": "Name changed to Becker",
    "category": "history",
    "sourceId": "greenville-our-community",
    "confidence": "high",
    "status": "official_historical"
  },
  {
    "date": "1896",
    "title": "Name changed to Town of Greenville",
    "category": "history",
    "sourceId": "greenville-our-community",
    "confidence": "high",
    "status": "official_historical"
  },
  {
    "date": "2021",
    "title": "Town of Greenville incorporated as Village of Greenville",
    "category": "government",
    "sourceId": "greenville-our-community",
    "confidence": "high",
    "status": "official_historical"
  }
]
```

### 6.3 Boards and Commissions
URL: `https://www.townofgreenville.com/government/boards_and_commissions.php`  
Use for: Village Board roster, board/commission membership, meeting cadence, committee membership.

Automation readiness: **High**. Plain HTML can be scraped and diffed.

Verified board seed as of 2026-05-01:

- Jack Anderson — Village President — current_official — Elected April 2025
- Andy Peters — Trustee — current_official — Elected April 2025
- Dean Culbertson — Trustee — current_official — Elected April 2025
- Mark Strobel — Trustee — current_official — Elected April 2026
- Brittany Helf — Trustee — current_official — Elected April 2026

Important privacy/respect rule:

The official page may list residential addresses and personal phone numbers. **Do not display residential addresses on VillageOfGreenville.com.** Prefer name, office, status, election/term note, official email if appropriate, and source link.

### 6.4 Staff Directory
URL: `https://www.townofgreenville.com/government/staff_directory.php`  
Use for: department/contact map, resident “who handles what?” feature.

Automation readiness: **High**. The page exposes department, first name, last name, position, email, and phone in a simple structure.

Seed staff roles include:

- Travis Parish — Administrator
- Katrina Knuth — Interim Village Clerk
- Lisa Beyer — Village Treasurer
- Mark Mommaerts — Village Planner
- Elisabeth Racine — Chief Building Inspector
- Keith Curran — Director of Public Works
- Cody Simonis — Water & Sewer Superintendent
- Chris Pagels — Stormwater Utility Superintendent
- Loren Dieck — Director of Parks and Recreation
- Eamonn Lenaghan — Village Forester/Arborist
- Eric Kitowski — Deputy Chief - Fire Prevention Officer
- Joshua Lambie — Captain - Fire Prevention Officer

### 6.5 Legal Notices and Postings
URL: `https://www.townofgreenville.com/government/legal_notices_and_postings.php`  
Use for: legal notices, resolutions, ordinances, bids/RFPs/RFQs, public document index, official-source change log.

Automation readiness: **Very high** for link detection and document indexing. The page states documents are sorted by date descending within categories.

Important status language:

Use `official_document_posted` unless the document itself or meeting minutes confirm formal adoption. Do not call something “adopted” simply because the Legal Notices page lists it.

Seed records from page as of 2026-05-01:

- Resolution No. 6-26 - Adopting the Village of Greenville Comprehensive Outdoor Recreation Plan 2026 - 2030 — document date 04-20-2026
- Resolution No. 7-26 - Approving a Special Exception for a CSM in Comprehensive Plan Tier II Parcels #111077403 and 111077402 — document date 04-20-2026
- Resolution No. 8-26 - Approving a Special Exception for Home Business Locate at N952 Fox Springs Drive, Parcel 111080215 — document date 04-20-2026
- Resolution No. 10-26 - Approving a CSM for Parcels 111048000 & 111048100 — document date 04-20-2026
- Resolution No. 13-26 - Approving an Amended Project Plan and Boundaries for TID District No. 1, Village of Greenville — document date 04-20-2026
- Ordinance No. 6-26 Amend Ch. 23 Fire Commission — document date 04-20-2026
- Ordinance 2-26 - Amending the Village of Greenville Zoning Map — document date 03-26-2026
- Ordinance 4-26 - Amending the Village of Greenville Zoning Map — document date 02-19-2026
- RFQ for Legal Services 1.30.2026 - Final.pdf — document date 01-29-2026

### 6.6 Elections page
URL: `https://www.townofgreenville.com/government/elections.php`  
Use for: local election calendar, notices, sample ballot links, polling place, absentee voting instructions, links to Outagamie results and MyVote.

Automation readiness: **High** for page change and link detection.

### 6.7 Outagamie County Election Results
URL: `https://www.outagamie.gov/Our-County/County-Clerk/Elections/Outagamie-County-Election-Results`  
Use for: unofficial election result PDFs, precinct reports, summary reports, provisional ballot reports.

Important: election-night results are unofficial.

Verified context from page as of 2026-05-01:

- The page has an Unofficial Precinct Report and Unofficial Summary Report for the 4/7/26 Spring Election.
- The reports were last updated 4/7/2026 at 10:17 p.m.
- The page notes that the Village of Greenville fully reported municipal unofficial results.

Recommended status pipeline:

1. candidate_filed
2. on_ballot
3. unofficial_result
4. certified_or_confirmed
5. term_started
6. current_official

### 6.8 MyVote Wisconsin — Election Results
URL: `https://myvote.wi.gov/en-us/Election-Results`  
Use for: explaining Wisconsin election result process and certification caveats.

Critical rule:

Wisconsin does not have one statewide central site for unofficial election-night results. Results are transmitted from municipal clerks to county clerks and posted on county websites. Election-night results are always unofficial; winners are never certified on election night.

### 6.9 MyVote Wisconsin — My Elected Officials
URL: `https://myvote.wi.gov/en-us/My-Elected-Officials`  
Use for: address-specific elected official lookup.

Privacy rule:

Do **not** collect resident addresses on VillageOfGreenville.com. Instead, link residents to MyVote for address-specific officials.

Suggested copy:

> For address-specific elected officials, use MyVote Wisconsin. This site does not collect resident addresses.

### 6.10 Greenville GIS / ArcGIS Hub
URL: `https://village-of-greenville-greenville-wi.hub.arcgis.com/`  
Use for: GIS maps, zoning, public mapping, future growth/development dashboard.

Automation readiness: **High** if ArcGIS datasets and metadata endpoints are accessible.

### 6.11 Outagamie County GIS Maps & Property Information
URL: `https://www.outagamie.gov/County-Services/Development-Land-Services/GIS-Maps-Property-Information`  
Use for: parcels, property info, floodplain data, PLSS, historical air photos, LiDAR, county open data.

Automation readiness: **High** for ArcGIS/open-data endpoints and map metadata.

### 6.12 Wisconsin DOA Population Estimates
URL: `https://doa.wi.gov/Pages/LocalGovtsGrants/Population_Estimates.aspx`  
Use for: population and housing unit estimates, long-term population charting, growth dashboard.

Verified context:

The Wisconsin Department of Administration Demographic Services Center annually produces population estimates for Wisconsin counties and municipalities. Preliminary estimates are released by August 10 and final estimates by October 10, with a January 1 reference date.

### 6.13 Wisconsin DOR Town, Village and City Taxes
URL: `https://www.revenue.wi.gov/Pages/RA/TVC-Taxes.aspx`  
Use for: local tax, levy, equalized value, tax-rate explainers, financial dashboard.

---

## 7. First Public Pages

### 7.1 Home
Goal: create immediate trust and show the portal’s forward-looking direction.

Hero copy:

> **Greenville’s public record, organized for residents.**
>
> VillageOfGreenville.com is an independent community record for Greenville, Wisconsin — organizing local history, civic records, public decisions, and growth signals from source-linked public information.

Keep visible:

> **The Community Record**  
> **A community record built on facts, public sources, and respect for Greenville residents.**

Dashboard cards:

1. Civic Roster
   - Current Village Board and local representation records, labeled by source and verification status.
2. Public Records
   - Resolutions, ordinances, notices, and official documents indexed for resident understanding.
3. Growth Signals
   - Planning, land use, GIS, population, tax, and development indicators connected to official sources.
4. Source Health
   - A transparent view of which public sources are registered, reviewed, and ready for automation.

### 7.2 About / Standards
Goal: define trust, sourcing, AI use, corrections, independence, and resident respect.

Must include:

- What this site is
- What this site is not
- Source policy
- Review status policy
- AI use disclosure
- Correction path
- Privacy and respect policy
- Non-government disclaimer

Suggested line:

> This site is designed to be useful before it is fast.

### 7.3 Greenville Timeline
Goal: durable historical record that expands over time.

Seed with:

- 1848 — Greenville founded as Greenville Station
- 1879 — Name changed to Becker
- 1896 — Name changed to Town of Greenville
- 2021 — Incorporated as Village of Greenville

Each item needs source, status, confidence, and last-reviewed date.

### 7.4 Who Represents Greenville?
Goal: plain-English, source-linked civic roster.

Show:

- Village Board
- key boards/commissions
- staff/departments
- election status caveats
- MyVote link for address-specific officials

Do not show residential addresses.

### 7.5 Public Records
Goal: source-linked index of legal notices, resolutions, ordinances, bids/RFPs/RFQs, agendas/minutes later.

Fields:

- title
- document type
- document date
- source
- documentStatus
- reviewStatus
- civicStatus
- category
- resident impact tag
- source link

### 7.6 Source Health
Goal: show how the site knows what it knows.

Fields:

- source name
- publisher
- source type
- trust tier
- monitoring method
- automation readiness
- review status
- last checked
- last reviewed
- public notes

Public copy:

> Source Health shows how this site knows what it knows. Each source is labeled before its information is used in the public record.

### 7.7 What Changed?
Goal: future-ready, human-reviewed changelog.

For now, seed manually from JSON. Later, populate from automated source-change detection.

Fields:

- change title
- source
- change type
- date detected
- public status
- review status
- summary
- link to source

Important copy:

> Future automation will detect changes. Publication will remain human-reviewed.

### 7.8 Growth & Development
Goal: turn planning, GIS, land use, population, tax, and public works source material into resident-understandable records.

Cards:

- Population
- Land Use
- TID Districts
- Transportation
- Parks & Recreation
- Water / Wastewater
- Public Works
- GIS & Maps
- Development Records

Use honest placeholder status:

> Registered source — data extraction pending.

---

## 8. Greenville 2030 Design Direction

The site should feel like:

> A calm civic dashboard for the future of Greenville — built from official sources, local history, public records, and human-reviewed AI organization.

### Design tone
- clean
- professional
- civic
- modern
- source-linked
- dashboard-like
- public-interest technology
- calm, not flashy
- trustworthy, not bureaucratic

### Visual direction
- warm greens
- deep navy/charcoal
- off-white backgrounds
- subtle gray borders
- restrained teal/cyan highlights where useful
- rounded cards
- source badges
- status badges
- timeline paths
- grid/map/topographic accents
- no fake seal
- no official-looking crest
- no partisan red/blue theme

### Motifs
- signal from noise
- public record ledger
- source-to-summary flow
- timeline path
- map/grid overlay
- civic dashboard

---

## 9. Data Files

Recommended local JSON files:

```text
/data/sources.json
/data/source-health.json
/data/civic-roster.json
/data/staff-directory.json
/data/timeline.json
/data/documents.json
/data/change-log.json
/data/growth-signals.json
/data/editorial-standards.json
```

### 9.1 `sources.json` shape

```json
{
  "id": "greenville-boards-commissions",
  "name": "Village of Greenville Boards and Commissions",
  "publisher": "Village of Greenville",
  "url": "https://www.townofgreenville.com/government/boards_and_commissions.php",
  "sourceType": "official_webpage",
  "jurisdiction": "Village of Greenville",
  "trustTier": "primary_official",
  "monitoringMethod": "html_change_detection",
  "automationReadiness": "high",
  "reviewRequired": true,
  "lastChecked": "2026-05-01",
  "lastReviewed": "2026-05-01"
}
```

### 9.2 `civic-roster.json` shape

```json
{
  "id": "jack-anderson-village-president",
  "name": "Jack Anderson",
  "office": "Village President",
  "body": "Village Board",
  "jurisdiction": "Village of Greenville",
  "status": "current_official",
  "termNote": "Elected April 2025",
  "sourceId": "greenville-boards-commissions",
  "lastVerified": "2026-05-01",
  "displayContactPolicy": "source_link_preferred",
  "privacyNote": "Residential addresses from official source are intentionally not republished."
}
```

### 9.3 `documents.json` shape

```json
{
  "id": "resolution-6-26",
  "title": "Resolution No. 6-26 - Adopting the Village of Greenville Comprehensive Outdoor Recreation Plan 2026 - 2030",
  "documentType": "resolution",
  "documentDate": "2026-04-20",
  "publisher": "Village of Greenville",
  "sourceId": "greenville-legal-notices",
  "documentStatus": "official_document_posted",
  "reviewStatus": "source_link_reviewed",
  "civicStatus": "adoption_status_requires_document_or_minutes_review",
  "residentImpactCategory": "parks_recreation",
  "lastReviewed": "2026-05-01"
}
```

### 9.4 `change-log.json` shape

```json
{
  "id": "legal-notices-2026-resolutions-indexed",
  "title": "2026 resolutions indexed from Legal Notices page",
  "sourceId": "greenville-legal-notices",
  "changeType": "document_index_seeded",
  "dateDetected": "2026-05-01",
  "publicStatus": "manual_seed",
  "reviewStatus": "needs_document_text_review",
  "summary": "The Legal Notices page lists 2026 resolutions and ordinances with document dates. Items are indexed as official documents posted, not independently summarized or interpreted yet."
}
```

### 9.5 `growth-signals.json` shape

```json
{
  "id": "population-estimates",
  "title": "Population Estimates",
  "category": "population",
  "sourceIds": ["wisconsin-doa-population-estimates", "greenville-our-community"],
  "status": "registered_source_data_extraction_pending",
  "summary": "Use Village-stated population context and Wisconsin DOA annual population estimates to build a Greenville growth dashboard."
}
```

---

## 10. Status Vocabulary

Use consistent labels:

```text
current_official
official_historical
official_document_posted
source_registered
source_reviewed
needs_review
needs_document_text_review
pending
proposed
unofficial_result
certified_or_confirmed
adopted_verified
superseded
archived
manual_seed
active_monitoring_future
```

Avoid vague labels like “verified” unless the exact verification basis is shown.

---

## 11. Components

Recommended components:

```text
SiteHeader
SiteFooter
DisclaimerBanner
SourceBadge
StatusBadge
ReviewStatusBadge
RecordCard
MetricCard
CivicRosterTable
StaffDirectoryTable
Timeline
DocumentIndex
SourceHealthTable
ChangeLogFeed
GrowthSignalGrid
EditorialPrinciples
MethodologyStrip
CorrectionCallout
```

---

## 12. Route Structure

Suggested App Router routes:

```text
/
/about
/timeline
/who-represents
/public-records
/source-health
/what-changed
/growth-and-development
/methodology
```

Optional future routes:

```text
/construction-clarity
/community-pulse
/maps
/elections
/taxes-and-budget
/development-tracker
```

---

## 13. Automation Roadmap

### Phase 1 — Static, source-linked public record
- Local JSON data.
- Manual source registry.
- Seed civic roster.
- Seed timeline.
- Seed public document index.
- Source Health page.
- What Changed page using manual seed data.
- No live scraping required yet.

### Phase 2 — Source-change detection
Add scripts that check official pages and detect:

- changed HTML hash
- new links
- removed links
- new PDFs
- changed document titles
- document dates
- source metadata changes

Suggested scripts:

```text
scripts/fetch-boards-and-commissions.ts
scripts/fetch-staff-directory.ts
scripts/fetch-legal-notices.ts
scripts/fetch-elections.ts
scripts/check-source-changes.ts
```

### Phase 3 — Private review queue
Add private generated JSON output:

```text
/data/review-queue/generated/*.json
```

Each item should include:

- source
- detected date
- changed text/link
- extracted names/dates/numbers
- suggested category
- AI draft summary
- confidence
- risk flags
- human review required

### Phase 4 — Human-approved publication
Only records with review state `approved_for_publication` should appear in public “What Changed?” summaries.

### Phase 5 — GIS and development tracker
Connect planning documents, GIS sources, TIDs, CSMs, zoning map amendments, special exceptions, parcels, and public notices into resident-friendly development cards.

### Phase 6 — Public API / advanced dashboards
Only after public trust and data shape are stable.

---

## 14. AI Use Policy

Use this on the About page:

> AI may help organize public information, detect source changes, extract names, dates, numbers, and draft plain-English summaries. AI does not replace the public record. Public-facing summaries are reviewed before publication.

Also include:

> AI can help organize the record. It does not replace the record.

---

## 15. Current Priority Fixes / Checks for Claude

Because the latest Vercel preview was not externally accessible, Claude should inspect the local project or an accessible preview, then verify these points.

### Must check
1. Does the site clearly show it is independent and non-government?
2. Does it avoid claiming sources are actively monitored unless scheduled monitoring exists?
3. Does it use “registered official sources” or “prepared for monitoring” instead of “currently monitored” unless true?
4. Are source/status labels easy to understand?
5. Does the Timeline use the official Our Community page for the 1848/1879/1896/2021 history entries?
6. Does Public Records avoid calling documents “adopted” unless document text or minutes confirm adoption?
7. Does Who Represents Greenville avoid residential addresses?
8. Is MyVote used as a privacy-preserving link for address-specific elected officials?
9. Does Source Health exist and explain how the site knows what it knows?
10. Does What Changed exist and clearly state future automation will remain human-reviewed?
11. Does Growth & Development feel like a dashboard, not a placeholder page?
12. Does the design feel “Greenville 2030”: modern civic portal, calm, clean, and ahead of a normal local info site?

---

## 16. Construction Clarity / Community Pulse Future Direction

Preserve this as a likely future section or case study.

### Concept
A Greenville **Construction Clarity / Community Pulse** page focused on WIS 76 reconstruction and similar road-construction communication issues.

### Purpose
Collect official/public sources such as:

- WisDOT 511 project updates
- Village project pages
- Citizen Concern/Request forms
- business access/signage information
- official news releases
- public meeting notes
- curated social/community sentiment later

Then organize into:

- plain-English status cards
- trending issue summaries
- resolution tracking
- source-linked updates
- human-reviewed public briefings

### Caution
Social listening is a later feature and requires privacy/legal/platform caution. It is not an MVP dependency.

### Guiding phrase
> Show the truth responsibly: if an issue is trending, show the pattern without exposing individuals, and pair it with action or resolution status.

---

## 17. Suggested Claude Prompt for Next Iteration

Use this prompt inside Claude Code after adding this file to the repo:

```text
Read this project handoff file fully before editing.

Goal:
Upgrade VillageOfGreenville.com into a polished Greenville 2030 community intelligence portal while preserving the site’s identity as The Community Record.

Primary line:
A community record built on facts, public sources, and respect for Greenville residents.

Review the current local code and current UI. Then implement the highest-impact improvements that align with this handoff:

1. Ensure the site does not overclaim live automated monitoring.
2. Add or improve Source Health.
3. Add or improve What Changed?
4. Make the homepage feel more like a calm civic dashboard.
5. Improve Growth & Development into a dashboard of registered source categories.
6. Tighten status labels around public records.
7. Ensure the Timeline entries are sourced to the official Our Community page.
8. Keep residential addresses off the public site.
9. Keep the disclaimer visible but not visually alarming.
10. Keep the site independent, non-government, source-linked, human-reviewed, and resident-respectful.

Do not overbuild authentication, comments, databases, or live scraping yet. Use local JSON as the source of truth. Add TODO scripts only where useful.

Before finishing, provide:
- summary of changes
- files changed
- any assumptions
- next recommended step
```

---

## 18. Definition of Done for Next Version

The next version is successful if it feels like:

> A working prototype of a future community portal: calm, useful, source-linked, AI-assisted, human-reviewed, and clearly ahead of a normal local information website.

It should leave a resident thinking:

- This is not the official Village site.
- This is not gossip or opinion.
- This is useful.
- This shows where the information comes from.
- This respects the community.
- This could become a very powerful local civic dashboard.

---

## 19. Quality Checklist

Before deployment:

- [ ] No official-government impersonation.
- [ ] Independence disclaimer visible.
- [ ] No fake seal/crest.
- [ ] No residential addresses displayed.
- [ ] No “live monitored” claim unless true.
- [ ] Source Health page exists.
- [ ] What Changed page exists.
- [ ] Timeline has official source references.
- [ ] Public Records uses careful status language.
- [ ] MyVote linked for address-specific officials.
- [ ] Election-night results labeled unofficial.
- [ ] AI use disclosure visible.
- [ ] Correction path included.
- [ ] Growth & Development has real registered source categories.
- [ ] Design feels calm, modern, civic, and trustworthy.
- [ ] README documents source policy and future automation roadmap.

