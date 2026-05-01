import type { Metadata } from 'next'
import { getGrowthSignals, getSourceById } from '@/lib/data'
import SourceBadge from '@/components/SourceBadge'
import { GrowthSignalBadge } from '@/components/StatusBadge'

export const metadata: Metadata = {
  title: 'Growth & Development',
  description:
    'Population trends, land use, TIF districts, transportation, parks, and development data for Greenville, Wisconsin — organized from official registered sources.',
}

export default function GrowthDevelopmentPage() {
  const signals = getGrowthSignals()

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Page header */}
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-4">Greenville 2030</p>
        <div className="w-12 h-0.5 bg-gold mb-6" aria-hidden="true" />
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
          Growth &amp; Development
        </h1>
        <p className="font-sans text-lg text-warm-text leading-relaxed mb-4">
          Greenville has grown significantly since incorporation in 2021, reflecting broader growth in the
          Fox Cities region. This dashboard tracks planning, land use, infrastructure, and development
          signals — organized from official registered sources.
        </p>
        <div className="card p-4 inline-flex items-start gap-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-gold mt-0.5 flex-shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="font-sans text-sm text-warm-text">
            <span className="font-semibold text-navy">Data status:</span> Official sources are registered
            and ready for monitoring. Specific data figures are pending extraction and will be added as they
            are sourced and verified.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap items-center gap-4 mb-12 p-4 card">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-semibold text-navy tabular-nums">
            {signals.length}
          </span>
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-warm-muted">
              Signal categories
            </p>
            <p className="font-sans text-xs text-warm-text">registered and tracked</p>
          </div>
        </div>
        <div className="w-px h-10 bg-warm-border" aria-hidden="true" />
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-semibold text-navy">2021</span>
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-warm-muted">
              Incorporated
            </p>
            <p className="font-sans text-xs text-warm-text">Outagamie County</p>
          </div>
        </div>
        <div className="w-px h-10 bg-warm-border" aria-hidden="true" />
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-semibold text-navy">13,163</span>
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-warm-muted">
              Population
            </p>
            <p className="font-sans text-xs text-warm-text">Village-stated, and growing</p>
          </div>
        </div>
      </div>

      {/* Dashboard grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
        {signals.map((signal) => {
          const source = signal.primarySourceId ? getSourceById(signal.primarySourceId) : undefined

          return (
            <div key={signal.id} className="card p-5 flex flex-col gap-4">
              {/* Card header */}
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-serif text-lg font-semibold text-navy leading-snug">
                  {signal.topic}
                </h2>
                <GrowthSignalBadge status={signal.status} className="flex-shrink-0 mt-0.5" />
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-warm-text leading-relaxed">{signal.description}</p>

              {/* Stats */}
              {signal.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {signal.stats.slice(0, 4).map((stat) => (
                    <div key={stat.label} className="bg-cream rounded p-2.5">
                      <p className="font-sans text-[0.6rem] font-bold uppercase tracking-wider text-warm-muted mb-0.5">
                        {stat.label}
                      </p>
                      <p className="font-serif text-sm font-semibold text-navy leading-tight">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Pending note */}
              {signal.pendingNote && (
                <p className="font-sans text-xs text-warm-muted leading-relaxed italic border-t border-warm-border pt-3">
                  {signal.pendingNote}
                </p>
              )}

              {/* Source footer */}
              {source && (
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-warm-border">
                  <SourceBadge tier={source.trustTier} />
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans text-navy no-underline hover:text-gold transition-colors inline-flex items-center gap-1 truncate"
                  >
                    {source.name}
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M2 10L10 2M10 2H5M10 2v5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer note */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="inset-block">
            <p className="font-sans text-sm font-semibold text-navy mb-2">About this dashboard</p>
            <p className="font-sans text-sm text-warm-text leading-relaxed">
              Each category represents a registered official source. Data figures will be extracted and
              added as they are sourced and verified against official records. This dashboard will grow as
              the site&apos;s data extraction capabilities expand.
            </p>
          </div>
          <div className="inset-block">
            <p className="font-sans text-sm font-semibold text-navy mb-2">Public Records connection</p>
            <p className="font-sans text-sm text-warm-text leading-relaxed">
              Development activity — CSMs, zoning amendments, special exceptions, and TIF actions — is
              tracked in the{' '}
              <a
                href="/public-records"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Public Records index
              </a>
              . Resolution No. 13-26 amended TID District No. 1 in 2026.
            </p>
          </div>
        </div>

        <aside className="space-y-4">
          <div>
            <h2 className="font-serif text-lg font-semibold text-navy mb-3">About Greenville</h2>
            <div className="card p-4 space-y-3">
              {[
                { label: 'Municipality', value: 'Village' },
                { label: 'County', value: 'Outagamie' },
                { label: 'ZIP', value: '54942' },
                { label: 'Incorporated', value: '2021' },
                { label: 'Region', value: 'Fox Cities' },
                { label: 'Board', value: 'President + 4 Trustees' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-2 text-sm font-sans">
                  <span className="text-warm-muted font-medium">{item.label}</span>
                  <span className="text-navy font-semibold text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
