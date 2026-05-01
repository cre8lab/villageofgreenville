import type { StatusLabel, DocumentStatus, DocumentReviewStatus, CivicStatus, AutomationReadiness, SourceRegistryStatus, GrowthSignalStatus } from '@/types'

// ─── Civic roster status ───────────────────────────────────────────────────────

interface StatusBadgeProps {
  status: StatusLabel
  className?: string
}

const statusConfig: Record<StatusLabel, { label: string; classes: string }> = {
  current_official: {
    label: 'Current — Official',
    classes: 'bg-status-official-bg text-status-official border border-status-official-border',
  },
  official_document: {
    label: 'Official Document',
    classes: 'bg-status-official-bg text-status-official border border-status-official-border',
  },
  adopted: {
    label: 'Adopted',
    classes: 'bg-status-adopted-bg text-status-adopted border border-status-adopted-border',
  },
  pending: {
    label: 'Pending',
    classes: 'bg-status-pending-bg text-status-pending border border-status-pending-border',
  },
  unofficial: {
    label: 'Unofficial',
    classes: 'bg-status-unofficial-bg text-status-unofficial border border-status-unofficial-border',
  },
  superseded: {
    label: 'Superseded',
    classes: 'bg-status-superseded-bg text-status-superseded border border-status-superseded-border',
  },
  needs_review: {
    label: 'Needs Review',
    classes: 'bg-status-needs_review-bg text-status-needs_review border border-status-needs_review-border',
  },
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status] ?? statusConfig.needs_review
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-sans font-bold tracking-wider uppercase ${config.classes} ${className}`}>
      {config.label}
    </span>
  )
}

// ─── Document status badges ───────────────────────────────────────────────────

interface DocumentStatusBadgeProps {
  documentStatus: DocumentStatus
  reviewStatus: DocumentReviewStatus
  civicStatus: CivicStatus
  className?: string
}

const docStatusConfig: Record<DocumentStatus, { label: string; classes: string }> = {
  official_document_posted: {
    label: 'Posted — Official',
    classes: 'bg-status-official-bg text-status-official border border-status-official-border',
  },
  draft: {
    label: 'Draft',
    classes: 'bg-status-pending-bg text-status-pending border border-status-pending-border',
  },
  superseded_document: {
    label: 'Superseded',
    classes: 'bg-status-superseded-bg text-status-superseded border border-status-superseded-border',
  },
  archived: {
    label: 'Archived',
    classes: 'bg-warm-border/40 text-warm-text border border-warm-border',
  },
}

const reviewStatusConfig: Record<DocumentReviewStatus, { label: string; classes: string }> = {
  reviewed_source_link: {
    label: 'Source Reviewed',
    classes: 'bg-civic-green-pale text-civic-green border border-civic-green-border',
  },
  pending_review: {
    label: 'Pending Review',
    classes: 'bg-status-pending-bg text-status-pending border border-status-pending-border',
  },
  auto_detected: {
    label: 'Auto-Detected',
    classes: 'bg-status-unofficial-bg text-status-unofficial border border-status-unofficial-border',
  },
}

const civicStatusConfig: Record<CivicStatus, { label: string; classes: string }> = {
  adoption_status_not_independently_verified: {
    label: 'Adoption unverified',
    classes: 'bg-status-needs_review-bg text-status-needs_review border border-status-needs_review-border',
  },
  formally_adopted_confirmed: {
    label: 'Adoption confirmed',
    classes: 'bg-status-official-bg text-status-official border border-status-official-border',
  },
  pending_vote: {
    label: 'Vote pending',
    classes: 'bg-status-pending-bg text-status-pending border border-status-pending-border',
  },
  withdrawn: {
    label: 'Withdrawn',
    classes: 'bg-status-superseded-bg text-status-superseded border border-status-superseded-border',
  },
}

export function DocumentStatusBadge({ documentStatus, reviewStatus, civicStatus, className = '' }: DocumentStatusBadgeProps) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-sans font-bold tracking-wider uppercase ${docStatusConfig[documentStatus].classes}`}>
        {docStatusConfig[documentStatus].label}
      </span>
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-sans font-bold tracking-wider uppercase ${reviewStatusConfig[reviewStatus].classes}`}>
        {reviewStatusConfig[reviewStatus].label}
      </span>
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-sans font-bold tracking-wider uppercase ${civicStatusConfig[civicStatus].classes}`}>
        {civicStatusConfig[civicStatus].label}
      </span>
    </div>
  )
}

// ─── Automation readiness badge ────────────────────────────────────────────────

interface AutomationBadgeProps {
  readiness: AutomationReadiness
  className?: string
}

const readinessConfig: Record<AutomationReadiness, { label: string; classes: string; dot: string }> = {
  high: {
    label: 'High readiness',
    classes: 'bg-civic-green-pale text-civic-green border border-civic-green-border',
    dot: 'bg-civic-green',
  },
  medium: {
    label: 'Medium readiness',
    classes: 'bg-status-pending-bg text-status-pending border border-status-pending-border',
    dot: 'bg-status-pending',
  },
  low: {
    label: 'Low readiness',
    classes: 'bg-warm-border/30 text-warm-text border border-warm-border',
    dot: 'bg-warm-text',
  },
}

export function AutomationBadge({ readiness, className = '' }: AutomationBadgeProps) {
  const config = readinessConfig[readiness]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[0.6rem] font-sans font-bold tracking-wider uppercase ${config.classes} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} aria-hidden="true" />
      {config.label}
    </span>
  )
}

// ─── Source registry status badge ─────────────────────────────────────────────

interface RegistryStatusBadgeProps {
  status: SourceRegistryStatus
  className?: string
}

const registryConfig: Record<SourceRegistryStatus, { label: string; classes: string }> = {
  registered: {
    label: 'Registered',
    classes: 'bg-status-unofficial-bg text-status-unofficial border border-status-unofficial-border',
  },
  reviewed: {
    label: 'Reviewed',
    classes: 'bg-civic-green-pale text-civic-green border border-civic-green-border',
  },
  needs_review: {
    label: 'Needs Review',
    classes: 'bg-status-needs_review-bg text-status-needs_review border border-status-needs_review-border',
  },
  active_monitoring_future: {
    label: 'Monitoring planned',
    classes: 'bg-status-pending-bg text-status-pending border border-status-pending-border',
  },
}

export function RegistryStatusBadge({ status, className = '' }: RegistryStatusBadgeProps) {
  const config = registryConfig[status]
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-sans font-bold tracking-wider uppercase ${config.classes} ${className}`}>
      {config.label}
    </span>
  )
}

// ─── Growth signal status badge ───────────────────────────────────────────────

interface GrowthSignalBadgeProps {
  status: GrowthSignalStatus
  className?: string
}

const growthStatusConfig: Record<GrowthSignalStatus, { label: string; classes: string }> = {
  data_available: {
    label: 'Data available',
    classes: 'bg-civic-green-pale text-civic-green border border-civic-green-border',
  },
  source_registered: {
    label: 'Source registered',
    classes: 'bg-status-unofficial-bg text-status-unofficial border border-status-unofficial-border',
  },
  extraction_pending: {
    label: 'Extraction pending',
    classes: 'bg-status-pending-bg text-status-pending border border-status-pending-border',
  },
  monitoring_planned: {
    label: 'Monitoring planned',
    classes: 'bg-status-needs_review-bg text-status-needs_review border border-status-needs_review-border',
  },
}

export function GrowthSignalBadge({ status, className = '' }: GrowthSignalBadgeProps) {
  const config = growthStatusConfig[status]
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-sans font-bold tracking-wider uppercase ${config.classes} ${className}`}>
      {config.label}
    </span>
  )
}
