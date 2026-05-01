import type { Metadata } from 'next'
import { getSources } from '@/lib/data'
import SourceBadge from '@/components/SourceBadge'

export const metadata: Metadata = {
  title: 'Growth & Development',
  description:
    'Population trends, land use, TIF districts, and development data for Greenville, Wisconsin — drawn from official GIS and state sources.',
}

const growthTopics = [
  {
    id: 'population',
    label: 'Population',
    heading: 'Population Estimates',
    description:
      'Wisconsin DOA publishes annual population estimates for all municipalities. Greenville has grown rapidly since incorporation. Exact figures will be added as data is sourced and verified.',
    sourceId: 'wi-doa-population',
    placeholder: true,
    stats: [
      { label: 'Incorporated', value: '2021' },
      { label: 'County', value: 'Outagamie' },
      { label: 'ZIP Code', value: '54942' },
      { label: 'Source', value: 'WI DOA (pending)' },
    ],
  },
  {
    id: 'land-use',
    label: 'Land Use & Zoning',
    heading: 'Land Use & Zoning',
    description:
      'The Village GIS hub provides maps of parcel data, zoning districts, and comprehensive plan tiers. Zoning map amendments are tracked in the Public Records index.',
    sourceId: 'greenville-gis',
    placeholder: false,
    stats: [
      { label: 'Zoning authority', value: 'Village Board' },
      { label: 'Comp plan tiers', value: 'I, II, III' },
      { label: 'TIF Districts', value: 'No. 1 (active)' },
      { label: 'GIS source', value: 'ArcGIS Hub' },
    ],
  },
  {
    id: 'tax-data',
    label: 'Municipal Taxes',
    heading: 'Municipal Tax Data',
    description:
      'The Wisconsin Department of Revenue publishes town, village, and city tax data annually. This includes levy information, equalized values, and mill rates.',
    sourceId: 'wi-dor-taxes',
    placeholder: true,
    stats: [
      { label: 'Data source', value: 'WI DOR' },
      { label: 'Update frequency', value: 'Annual' },
      { label: 'Status', value: 'Pending sourcing' },
    ],
  },
  {
    id: 'gis-maps',
    label: 'County GIS',
    heading: 'Outagamie County GIS',
    description:
      'Outagamie County maintains parcel maps, property ownership records, and GIS layers covering Greenville. These are authoritative sources for property-level information.',
    sourceId: 'outagamie-gis',
    placeholder: false,
    stats: [
      { label: 'Authority', value: 'Outagamie County' },
      { label: 'Content', value: 'Parcels, ownership, zoning' },
    ],
  },
]

export default function GrowthDevelopmentPage() {
  const sources = getSources()
  const getSource = (id: string) => sources.find((s) => s.id === id)

  const gisSource = getSource('greenville-gis')
  const doapopSource = getSource('wi-doa-population')
  const outagamieGis = getSource('outagamie-gis')

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Page header */}
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-4">Community Development</p>
        <div className="w-12 h-0.5 bg-gold mb-6" aria-hidden="true" />
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
          Growth &amp; Development
        </h1>
        <p className="font-sans text-lg text-warm-text leading-relaxed mb-4">
          Greenville has grown significantly since incorporation in 2021, reflecting broader growth in the Fox Cities region. This section tracks population data, land use decisions, TIF districts, and development information from official sources.
        </p>
        <div className="card p-4 inline-flex items-start gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold mt-0.5 flex-shrink-0">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="font-sans text-sm text-warm-text">
            <span className="font-semibold text-navy">Data note:</span> Some data fields in this section are pending sourcing and will be populated as official figures are verified. All placeholders are clearly marked.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {growthTopics.map((topic) => {
            const source = getSource(topic.sourceId)
            return (
              <section key={topic.id}>
                <div className="civic-rule mb-6">
                  <div className="flex items-center justify-between pt-4">
                    <h2 className="font-serif text-2xl font-semibold text-navy">{topic.heading}</h2>
                    {topic.placeholder && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-sans font-bold tracking-wider uppercase bg-status-needs_review-bg text-status-needs_review border border-status-needs_review-border">
                        Pending Data
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-sans text-sm text-warm-text leading-relaxed mb-5">{topic.description}</p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {topic.stats.map((stat) => (
                    <div key={stat.label} className="card p-3">
                      <p className="font-sans text-[0.65rem] font-bold uppercase tracking-wider text-warm-muted mb-1">{stat.label}</p>
                      <p className="font-serif text-base font-semibold text-navy">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {source && (
                  <div className="flex items-center gap-2">
                    <SourceBadge tier={source.trustTier} />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-sans text-navy no-underline hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      {source.name}
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 10L10 2M10 2H5M10 2v5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  </div>
                )}
              </section>
            )
          })}

          {/* TIF District note */}
          <section>
            <div className="civic-rule mb-6">
              <h2 className="font-serif text-2xl font-semibold text-navy pt-4">TIF District No. 1</h2>
            </div>
            <p className="font-sans text-sm text-warm-text leading-relaxed mb-4">
              The Village of Greenville established Tax Increment Financing District No. 1 to support economic development. Resolution No. 13-26 amended the project plan and boundaries in 2026.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {[
                { label: 'District', value: 'TID No. 1' },
                { label: 'Status', value: 'Active' },
                { label: 'Amended', value: 'Resolution 13-26' },
              ].map((s) => (
                <div key={s.label} className="card p-3">
                  <p className="font-sans text-[0.65rem] font-bold uppercase tracking-wider text-warm-muted mb-1">{s.label}</p>
                  <p className="font-serif text-base font-semibold text-navy">{s.value}</p>
                </div>
              ))}
            </div>
            <a
              href="/public-records"
              className="font-sans text-sm font-semibold text-navy no-underline hover:text-gold transition-colors inline-flex items-center gap-1.5"
            >
              See Resolution No. 13-26 in Public Records
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">GIS Resources</h2>
            <div className="space-y-3">
              {[gisSource, outagamieGis, doapopSource].filter(Boolean).map((s) => s && (
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

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">About Greenville</h2>
            <div className="card p-5 space-y-3">
              {[
                { label: 'Municipality type', value: 'Village' },
                { label: 'County', value: 'Outagamie County, WI' },
                { label: 'ZIP Code', value: '54942' },
                { label: 'Incorporated', value: '2021' },
                { label: 'Region', value: 'Fox Cities / Fox Valley' },
                { label: 'Governing body', value: 'Village Board (5 members)' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-2 text-sm font-sans">
                  <span className="text-warm-muted font-medium">{item.label}</span>
                  <span className="text-navy font-semibold text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="inset-block">
            <p className="font-sans text-sm font-semibold text-navy mb-2">Future data plan</p>
            <p className="font-sans text-sm text-warm-text leading-relaxed">
              Planned additions: population estimate chart from WI DOA, annual mill rate table from WI DOR, and a development project tracker linked to Legal Notices postings. See the project README for the data roadmap.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
