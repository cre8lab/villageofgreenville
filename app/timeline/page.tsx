import type { Metadata } from 'next'
import { getTimeline, getSources } from '@/lib/data'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'Greenville Timeline',
  description:
    'A documented history of Greenville, Wisconsin — from its founding in 1848 as Greenville Station to its incorporation as a Village in 2021.',
}

export default function TimelinePage() {
  const events = getTimeline()
  const sources = getSources()

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Page header */}
      <div className="max-w-3xl mb-16">
        <p className="section-label mb-4">Community History</p>
        <div className="w-12 h-0.5 bg-gold mb-6" aria-hidden="true" />
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
          Greenville Timeline
        </h1>
        <p className="font-sans text-lg text-warm-text leading-relaxed mb-6">
          A record of key events in the development of Greenville, Wisconsin — from earliest settlement through incorporation as a Village in 2021. All current events are sourced to the official Village Our Community page.
        </p>
        <div className="card p-4 inline-flex items-start gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold mt-0.5 flex-shrink-0">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="font-sans text-sm text-warm-text">
            All current timeline entries are source-linked. Future entries without primary documentation will be clearly labeled for review.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Timeline events={events} sources={sources} />
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">Quick Reference</h2>
            <div className="card overflow-hidden">
              <table className="civic-table">
                <thead>
                  <tr className="bg-cream">
                    <th scope="col">Year</th>
                    <th scope="col">Event</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td className="font-serif font-semibold text-gold tabular-nums">{event.year}</td>
                      <td className="font-sans text-sm text-warm-text">{event.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="inset-block">
            <p className="font-sans text-sm font-semibold text-navy mb-2">Know something we don&apos;t?</p>
            <p className="font-sans text-sm text-warm-text leading-relaxed">
              If you have a primary source — a document, newspaper archive, or official record — that adds to or corrects this timeline, we welcome that information. See the{' '}
              <a href="/about" className="text-gold underline underline-offset-2 hover:text-gold-light">
                About &amp; Standards
              </a>{' '}
              page for the correction path.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
