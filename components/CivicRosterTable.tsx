import type { CivicMember } from '@/types'
import StatusBadge from './StatusBadge'
import type { Source } from '@/types'

interface CivicRosterTableProps {
  members: CivicMember[]
  sources: Source[]
}

export default function CivicRosterTable({ members, sources }: CivicRosterTableProps) {
  const getSource = (sourceId: string) => sources.find((s) => s.id === sourceId)

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="civic-table">
          <thead>
            <tr className="bg-cream">
              <th scope="col">Office</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Term Note</th>
              <th scope="col">Last Verified</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              const source = getSource(member.sourceId)
              return (
                <tr key={member.id}>
                  <td className="font-sans text-sm font-semibold text-navy">{member.office}</td>
                  <td className="font-serif text-sm font-medium">{member.name}</td>
                  <td>
                    <StatusBadge status={member.status} />
                  </td>
                  <td className="font-sans text-sm text-warm-text">{member.termNote}</td>
                  <td className="font-sans text-xs text-warm-muted tabular-nums">{member.lastVerified}</td>
                  <td>
                    {source ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-sans text-navy no-underline hover:text-gold transition-colors flex items-center gap-1"
                      >
                        Official source
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60">
                          <path d="M2 10L10 2M10 2H5M10 2v5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-xs text-warm-muted">—</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
