/**
 * check-source-changes.ts
 *
 * Master source monitor. Iterates over all sources in data/sources.json
 * that have a monitoringMethod set, and dispatches to the appropriate
 * per-source monitoring script.
 *
 * This is the entry point for automated source monitoring.
 * Intended to run on a schedule (e.g., nightly via cron or Vercel Cron Jobs).
 *
 * Run: npx ts-node scripts/check-source-changes.ts
 *
 * Monitoring methods:
 *   html_change_detection   → hash the relevant page section, compare to cache
 *   document_link_detection → extract all document links, compare to known list
 *
 * TODO: Implement the following —
 *   1. Load data/sources.json
 *   2. Filter to sources with monitoringMethod !== null
 *   3. For each source, run the appropriate check:
 *      - 'html_change_detection': fetch page, hash content section, compare to cache
 *      - 'document_link_detection': fetch page, extract document links, diff against known list
 *   4. For any source with detected changes:
 *      a. Write change details to .cache/<source-id>-changes.json
 *      b. Set reviewStatus: 'needs_review' on all new/changed records
 *      c. Dispatch a review notification (log, webhook, email)
 *   5. Never write directly to any data/*.json file — all changes require human review
 *   6. Write a run summary to .cache/monitor-log.json
 *
 * Sources currently configured for monitoring:
 *   greenville-boards    → html_change_detection
 *   greenville-staff     → html_change_detection
 *   greenville-legal-notices → document_link_detection
 *   greenville-elections → html_change_detection
 *   outagamie-election-results → document_link_detection
 *
 * Run summary output shape:
 * {
 *   "runAt": "YYYY-MM-DDTHH:mm:ssZ",
 *   "sourcesChecked": 5,
 *   "changesDetected": 1,
 *   "sourceResults": [
 *     {
 *       "sourceId": "greenville-boards",
 *       "changed": false,
 *       "checkedAt": "YYYY-MM-DD"
 *     },
 *     {
 *       "sourceId": "greenville-legal-notices",
 *       "changed": true,
 *       "newDocuments": 2,
 *       "pendingReview": true
 *     }
 *   ]
 * }
 */

import sources from '../data/sources.json'

const MONITOR_LOG = '.cache/monitor-log.json'

// TODO: implement per-source dispatch and run summary
async function main() {
  const monitoredSources = sources.filter((s) => s.monitoringMethod !== null)

  console.log('[check-source-changes] Starting source monitor...')
  console.log(`[check-source-changes] ${monitoredSources.length} sources configured for monitoring:`)

  for (const source of monitoredSources) {
    console.log(`  - [${source.monitoringMethod}] ${source.name}`)
    console.log(`    URL: ${source.url}`)
  }

  console.log('')
  console.log('[check-source-changes] TODO: Monitoring not yet implemented.')
  console.log('[check-source-changes] When implemented, all detected changes will require human review.')
  console.log(`[check-source-changes] Run summary will be written to ${MONITOR_LOG}`)
}

main().catch(console.error)
