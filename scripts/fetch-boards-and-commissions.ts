/**
 * fetch-boards-and-commissions.ts
 *
 * Monitors the Village of Greenville Boards and Commissions page for changes.
 * When changes are detected, extracts the current roster and flags it for human review
 * before any updates are applied to civic-roster.json.
 *
 * Source: https://www.townofgreenville.com/government/boards_and_commissions.php
 * Trust tier: primary_official
 * Monitoring method: html_change_detection
 *
 * Run: npx ts-node scripts/fetch-boards-and-commissions.ts
 *
 * TODO: Implement the following steps —
 *   1. Fetch the HTML from SOURCE_URL
 *   2. Compare a hash of the relevant content section to the stored hash in .cache/boards-hash.txt
 *   3. If changed:
 *      a. Parse the page HTML to extract board member names, offices, and any term info
 *      b. Write extracted data to .cache/boards-and-commissions-pending.json
 *      c. Set reviewStatus: 'pending_review' on all extracted records
 *      d. Send a notification (email, webhook, or log) that human review is needed
 *      e. Do NOT automatically write to data/civic-roster.json
 *   4. If unchanged: log "No change detected" and exit
 *
 * Expected output shape (pending review):
 * [
 *   {
 *     "id": "...",
 *     "name": "...",
 *     "office": "...",
 *     "status": "needs_review",
 *     "termNote": "...",
 *     "electedYear": null,
 *     "email": null,
 *     "sourceId": "greenville-boards",
 *     "lastVerified": "YYYY-MM-DD",
 *     "reviewStatus": "pending_review"
 *   }
 * ]
 */

const SOURCE_URL = 'https://www.townofgreenville.com/government/boards_and_commissions.php'
const CACHE_FILE = '.cache/boards-hash.txt'
const PENDING_OUTPUT = '.cache/boards-and-commissions-pending.json'

// TODO: implement fetch, hash comparison, HTML parsing, and review notification
async function main() {
  console.log('[fetch-boards-and-commissions] Starting...')
  console.log(`[fetch-boards-and-commissions] Source: ${SOURCE_URL}`)
  console.log('[fetch-boards-and-commissions] TODO: Not yet implemented.')
  console.log(`[fetch-boards-and-commissions] When implemented, pending changes will be written to ${PENDING_OUTPUT}`)
  console.log('[fetch-boards-and-commissions] IMPORTANT: This script must never auto-publish. Review is required.')
}

main().catch(console.error)
