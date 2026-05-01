/**
 * fetch-legal-notices.ts
 *
 * Monitors the Village of Greenville Legal Notices and Postings page for new
 * document links. When new documents are detected, extracts metadata and
 * queues them for human review before appearing in data/documents.json.
 *
 * Source: https://www.townofgreenville.com/government/legal_notices_and_postings.php
 * Trust tier: primary_official
 * Monitoring method: document_link_detection
 *
 * Run: npx ts-node scripts/fetch-legal-notices.ts
 *
 * TODO: Implement the following steps —
 *   1. Fetch the HTML from SOURCE_URL
 *   2. Extract all document links (PDF, DOC, etc.) and their anchor text
 *   3. Compare to the known-documents list in .cache/known-documents.json
 *   4. For each new document link:
 *      a. Infer document type from anchor text (Resolution, Ordinance, Notice, etc.)
 *      b. Extract document number and title from anchor text where possible
 *      c. Generate a record with reviewStatus: 'auto_detected'
 *      d. Append to .cache/legal-notices-pending.json
 *      e. Do NOT write to data/documents.json without human review
 *   5. Notify reviewer of new document count
 *   6. Update .cache/known-documents.json with the current link list
 *
 * Title parsing examples:
 *   "Resolution No. 6-26 - Adopting the..." → type: 'resolution', id: 'res-6-26'
 *   "Ordinance No. 2-26 - Amending..." → type: 'ordinance', id: 'ord-2-26'
 *
 * Expected output shape (auto-detected, awaiting review):
 * [
 *   {
 *     "id": "res-6-26",
 *     "title": "Resolution No. 6-26 — ...",
 *     "type": "resolution",
 *     "date": null,
 *     "status": "needs_review",
 *     "sourceId": "greenville-legal-notices",
 *     "reviewStatus": "auto_detected",
 *     "category": null,
 *     "url": "https://...",
 *     "notes": null
 *   }
 * ]
 */

const SOURCE_URL =
  'https://www.townofgreenville.com/government/legal_notices_and_postings.php'
const KNOWN_DOCS_CACHE = '.cache/known-documents.json'
const PENDING_OUTPUT = '.cache/legal-notices-pending.json'

// TODO: implement fetch, link extraction, diff against known list, metadata inference, review queue
async function main() {
  console.log('[fetch-legal-notices] Starting...')
  console.log(`[fetch-legal-notices] Source: ${SOURCE_URL}`)
  console.log('[fetch-legal-notices] TODO: Not yet implemented.')
  console.log('[fetch-legal-notices] When implemented, new documents will be queued for review.')
  console.log('[fetch-legal-notices] IMPORTANT: auto_detected records must be reviewed before publication.')
}

main().catch(console.error)
