import type { StatusLabel } from '@/types'

interface StatusBadgeProps {
  status: StatusLabel
  className?: string
}

const statusConfig: Record<
  StatusLabel,
  { label: string; classes: string }
> = {
  current_official: {
    label: 'Current — Official',
    classes:
      'bg-status-official-bg text-status-official border border-status-official-border',
  },
  official_document: {
    label: 'Official Document',
    classes:
      'bg-status-official-bg text-status-official border border-status-official-border',
  },
  adopted: {
    label: 'Adopted',
    classes:
      'bg-status-adopted-bg text-status-adopted border border-status-adopted-border',
  },
  pending: {
    label: 'Pending',
    classes:
      'bg-status-pending-bg text-status-pending border border-status-pending-border',
  },
  unofficial: {
    label: 'Unofficial',
    classes:
      'bg-status-unofficial-bg text-status-unofficial border border-status-unofficial-border',
  },
  superseded: {
    label: 'Superseded',
    classes:
      'bg-status-superseded-bg text-status-superseded border border-status-superseded-border',
  },
  needs_review: {
    label: 'Needs Review',
    classes:
      'bg-status-needs_review-bg text-status-needs_review border border-status-needs_review-border',
  },
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status] ?? statusConfig.needs_review

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-sans font-bold tracking-wider uppercase ${config.classes} ${className}`}
    >
      {config.label}
    </span>
  )
}
