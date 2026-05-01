import type { Metadata } from 'next'
import { getCivicRoster, getSources } from '@/lib/data'
import CivicRosterTable from '@/components/CivicRosterTable'
import SourceBadge from '@/components/SourceBadge'

export const metadata: Metadata = {
  title: 'Who Represents Greenville?',
  description:
    'Current Village Board members for Greenville, Wisconsin — offices, names, term notes, and official source links.',
}

export default function WhoRepresentsPage() {
  const roster = getCivicRoster()
  const sources = getSources()

  const boardsSource = sources.find((s) => s.id === 'greenville-boards')
  const electionsSource = sources.find((s) => s.id === 'greenville-elections')
  const myvoteSource = sources.find((s) => s.id === 'myvote-elected-officials')

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Page header */}
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-4">Village Government</p>
        <div className="w-12 h-0.5 bg-gold mb-6" aria-hidden="true" />
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
          Who Represents Greenville?
        </h1>
        <p className="font-sans text-lg text-warm-text leading-relaxed">
          The Village Board is the governing body of the Village of Greenville. Members are elected by Village residents. The Board is composed of a Village President and four Trustees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          {/* Village Board */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="civic-rule">
                  <h2 className="font-serif text-2xl font-semibold text-navy pt-4">Village Board</h2>
                </div>
              </div>
              {boardsSource && (
                <SourceBadge tier={boardsSource.trustTier} url={boardsSource.url} />
              )}
            </div>

            <CivicRosterTable members={roster} sources={sources} />

            <div className="mt-3 flex items-center gap-2 text-xs font-sans text-warm-muted">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                Roster sourced from{' '}
                {boardsSource ? (
                  <a href={boardsSource.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-1 hover:text-gold transition-colors">
                    {boardsSource.name}
                  </a>
                ) : (
                  'official Village page'
                )}
                . Residential addresses are not displayed on this site.
              </span>
            </div>
          </section>

          {/* Address-specific officials */}
          <section>
            <div className="civic-rule mb-6">
              <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
                Other Elected Officials
              </h2>
            </div>
            <div className="bg-gold-pale border border-gold-muted rounded p-6">
              <p className="font-serif text-lg font-semibold text-navy mb-3">
                For address-specific officials, use MyVote Wisconsin.
              </p>
              <p className="font-sans text-sm text-warm-text leading-relaxed mb-4">
                Your state legislators, county supervisors, school board members, and other elected officials are determined by your residential address. This site does not collect or store resident addresses.
              </p>
              <p className="font-sans text-sm text-warm-text leading-relaxed mb-5">
                To find all elected officials for a Greenville address, use the official Wisconsin state tool:
              </p>
              <a
                href="https://myvote.wi.gov/en-us/My-Elected-Officials"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy no-underline hover:text-gold transition-colors bg-white border border-gold-muted px-4 py-2.5 rounded"
              >
                MyVote Wisconsin — My Elected Officials
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
              {myvoteSource?.note && (
                <p className="font-sans text-xs text-warm-muted mt-3 leading-relaxed italic">
                  {myvoteSource.note}
                </p>
              )}
            </div>
          </section>

          {/* Elections */}
          {electionsSource && (
            <section>
              <div className="civic-rule mb-6">
                <h2 className="font-serif text-2xl font-semibold text-navy pt-4">Elections</h2>
              </div>
              <p className="font-sans text-sm text-warm-text leading-relaxed mb-4">
                Village Board elections are held in April. For current election notices, candidate filings, and election information, visit the official Village elections page.
              </p>
              <a
                href={electionsSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy no-underline hover:text-gold transition-colors"
              >
                {electionsSource.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">Village Board Structure</h2>
            <div className="card p-5 space-y-3">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-warm-muted mb-1">Village President</p>
                <p className="font-sans text-sm text-warm-text">Elected at-large by Village voters. Chairs Village Board meetings and serves as the chief elected official.</p>
              </div>
              <div className="border-t border-warm-border pt-3">
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-warm-muted mb-1">Trustees (4)</p>
                <p className="font-sans text-sm text-warm-text">Elected at-large. Together with the Village President, form the governing Village Board.</p>
              </div>
              <div className="border-t border-warm-border pt-3">
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-warm-muted mb-1">Term Length</p>
                <p className="font-sans text-sm text-warm-text">Two-year terms, staggered. Elections held each April.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">Official Sources</h2>
            <div className="space-y-3">
              {[boardsSource, electionsSource, myvoteSource].filter(Boolean).map((s) => s && (
                <div key={s.id} className="card p-4">
                  <SourceBadge tier={s.trustTier} className="mb-2" />
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-medium text-navy no-underline hover:text-gold transition-colors block leading-snug"
                  >
                    {s.name}
                  </a>
                  {s.note && (
                    <p className="font-sans text-xs text-warm-muted mt-1 leading-relaxed">{s.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="inset-block">
            <p className="font-sans text-sm font-semibold text-navy mb-2">A note on contact information</p>
            <p className="font-sans text-sm text-warm-text leading-relaxed">
              Residential addresses and personal phone numbers are not published on this site, even when they appear on official pages. For official Village contact information, visit{' '}
              <a href="https://greenvillewi.gov/" target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-2 hover:text-gold-light">
                greenvillewi.gov
              </a>
              .
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
