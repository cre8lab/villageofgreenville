import type { TimelineEvent } from '@/types'
import type { Source } from '@/types'

interface TimelineProps {
  events: TimelineEvent[]
  sources: Source[]
  compact?: boolean
}

const categoryColors: Record<string, string> = {
  founding: 'bg-gold text-navy-dark',
  'name-change': 'bg-warm-border text-warm-text',
  incorporation: 'bg-status-official bg-status-official-bg text-status-official',
  growth: 'bg-navy text-warm-white',
  government: 'bg-navy-light text-warm-white',
  other: 'bg-warm-border text-warm-text',
}

export default function Timeline({ events, sources, compact = false }: TimelineProps) {
  const getSource = (sourceId: string | null) =>
    sourceId ? sources.find((s) => s.id === sourceId) : undefined

  return (
    <ol className="relative" aria-label="Greenville timeline">
      {/* Vertical rule */}
      <div className="absolute left-6 top-3 bottom-3 w-px bg-warm-border" aria-hidden="true" />

      {events.map((event, idx) => {
        const source = getSource(event.sourceId)
        const dotColor = categoryColors[event.category] ?? categoryColors.other

        return (
          <li key={event.id} className={`relative flex gap-6 ${idx < events.length - 1 ? 'pb-10' : ''}`}>
            {/* Year marker */}
            <div className="flex-shrink-0 w-12 flex flex-col items-center z-10">
              <div
                className={`w-3 h-3 rounded-full border-2 border-cream mt-1 ${dotColor.split(' ')[0]}`}
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-serif text-2xl font-semibold text-navy tabular-nums leading-none">
                  {event.year}
                </span>
                <span className={`text-[0.6rem] font-bold font-sans tracking-wider uppercase px-1.5 py-0.5 rounded ${dotColor}`}>
                  {event.category.replace('-', ' ')}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-text-primary leading-snug mb-1">
                {event.event}
              </h3>

              {!compact && event.detail && (
                <p className="font-sans text-sm text-warm-text leading-relaxed mb-2">
                  {event.detail}
                </p>
              )}

              {source && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-navy no-underline hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  Source: {source.name}
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60">
                    <path d="M2 10L10 2M10 2H5M10 2v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}

              {!source && (
                <span className="text-xs font-sans text-warm-muted italic">Source not yet documented</span>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
