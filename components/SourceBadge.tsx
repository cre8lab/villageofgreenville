import type { TrustTier } from '@/types'

interface SourceBadgeProps {
  tier: TrustTier
  label?: string
  url?: string
  className?: string
}

const tierConfig: Record<TrustTier, { label: string; classes: string; dot: string }> = {
  primary_official: {
    label: 'Primary Official',
    classes: 'bg-status-official-bg text-status-official border border-status-official-border',
    dot: 'bg-status-official',
  },
  secondary_official: {
    label: 'Secondary Official',
    classes: 'bg-gold-pale text-gold border border-gold-muted',
    dot: 'bg-gold',
  },
  unofficial: {
    label: 'Unofficial',
    classes: 'bg-status-unofficial-bg text-status-unofficial border border-status-unofficial-border',
    dot: 'bg-status-unofficial',
  },
  community_submitted: {
    label: 'Community',
    classes: 'bg-warm-border/30 text-warm-text border border-warm-border',
    dot: 'bg-warm-text',
  },
}

export default function SourceBadge({ tier, label, url, className = '' }: SourceBadgeProps) {
  const config = tierConfig[tier] ?? tierConfig.unofficial
  const displayLabel = label ?? config.label

  const inner = (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[0.65rem] font-sans font-bold tracking-wider uppercase ${config.classes} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} aria-hidden="true" />
      {displayLabel}
    </span>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline hover:opacity-80 transition-opacity"
        aria-label={`Source: ${displayLabel}`}
      >
        {inner}
      </a>
    )
  }

  return inner
}
