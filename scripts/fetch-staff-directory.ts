/**
 * fetch-staff-directory.ts
 *
 * Monitors the Village of Greenville Staff Directory page for changes.
 * Useful for tracking Village Administrator, Clerk, and departmental staff changes.
 * All changes require human review before appearing on the site.
 *
 * Source: https://www.townofgreenville.com/government/staff_directory.php
 * Trust tier: primary_official
 * Monitoring method: html_change_detection
 *
 * Run: npx ts-node scripts/fetch-staff-directory.ts
 *
 * TODO: Implement the following steps —
 *   1. Fetch the HTML from SOURCE_URL
 *   2. Compare a hash of the staff section to the stored hash in .cache/staff-hash.txt
 *   3. If changed:
 *      a. Parse the page HTML to extract staff names, titles, departments, and official email addresses
 *      b. Write extracted data to .cache/staff-directory-pending.json
 *      c. Do NOT extract or store phone numbers or addresses beyond official office contacts
 *      d. Flag all records with reviewStatus: 'pending_review'
 *      e. Notify the reviewer
 *   4. If unchanged: log "No change detected" and exit
 *
 * Privacy note:
 *   Do NOT collect or store residential addresses or personal phone numbers.
 *   Only official role titles and official contact emails are in scope.
 *
 * Expected output shape:
 * [
 *   {
 *     "name": "...",
 *     "title": "...",
 *     "department": "...",
 *     "email": "official@greenvillewi.gov",
 *     "sourceId": "greenville-staff",
 *     "lastChecked": "YYYY-MM-DD",
 *     "reviewStatus": "pending_review"
 *   }
 * ]
 */

const SOURCE_URL = 'https://www.townofgreenville.com/government/staff_directory.php'
const CACHE_FILE = '.cache/staff-hash.txt'
const PENDING_OUTPUT = '.cache/staff-directory-pending.json'

// TODO: implement fetch, hash comparison, HTML parsing, privacy filtering, and review notification
async function main() {
  console.log('[fetch-staff-directory] Starting...')
  console.log(`[fetch-staff-directory] Source: ${SOURCE_URL}`)
  console.log('[fetch-staff-directory] TODO: Not yet implemented.')
  console.log('[fetch-staff-directory] PRIVACY: Only official role and email — no addresses or personal phones.')
  console.log(`[fetch-staff-directory] When implemented, pending changes will be written to ${PENDING_OUTPUT}`)
}

main().catch(console.error)
