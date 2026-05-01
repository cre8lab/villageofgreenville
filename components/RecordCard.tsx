import type { PublicDocument } from '@/types'
import StatusBadge from './StatusBadge'
import SourceBadge from './SourceBadge'
import type { Source } from '@/types'

interface RecordCardProps {
  document: PublicDocument
  source?: Source
}

const typeLabels: Record<PublicDocument['type'], string> = {
  resolution: 'Resolution',
  ordinance: 'Ordinance',
  notice: 'Notice',
  report: 'Report',
  plan: 'Plan',
}

export default function RecordCard({ document, source }: RecordCardProps) {
  return (
    <article className="card p-5 transition-all duration-150 hover:shadow-sm group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="section-label">{typeLabels[document.type]} &middot; {document.category}</span>
        <StatusBadge status={document.status} className="flex-shrink-0" />
      </div>

      <h3 className="font-serif text-base font-semibold text-navy leading-snug mb-3 group-hover:text-navy-light transition-colors">
        {document.url ? (
          <a
            href={document.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
          >
            {document.title}
          </a>
        ) : (
          document.title
        )}
      </h3>

      {document.notes && (
        <p className="text-sm text-warm-text mb-4 leading-relaxed">{document.notes}</p>
      )}

      <div className="flex items-center justify-between gap-3 pt-3 border-t border-warm-border">
        <div className="flex items-center gap-2">
          {document.date && (
            <span className="text-xs font-sans text-warm-muted">{document.date}</span>
          )}
          {document.reviewStatus === 'reviewed' && (
            <span className="text-xs font-sans text-status-official flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-status-official" aria-hidden="true" />
              Reviewed
            </span>
          )}
        </div>
        {source && (
          <SourceBadge tier={source.trustTier} url={source.url} label="Source" />
        )}
      </div>
    </article>
  )
}
