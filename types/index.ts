export type TrustTier =
  | 'primary_official'
  | 'secondary_official'
  | 'unofficial'
  | 'community_submitted'

export type MonitoringMethod =
  | 'html_change_detection'
  | 'document_link_detection'
  | 'rss'
  | 'manual'

export type SourceType =
  | 'official_webpage'
  | 'official_document_center'
  | 'official_county_webpage'
  | 'state_official_reference'
  | 'state_official_lookup'
  | 'official_gis_hub'
  | 'county_gis'
  | 'state_data'

export interface Source {
  id: string
  name: string
  url: string
  type: SourceType
  trustTier: TrustTier
  monitoringMethod: MonitoringMethod | null
  note: string | null
  lastChecked: string | null
}

export type StatusLabel =
  | 'current_official'
  | 'official_document'
  | 'unofficial'
  | 'pending'
  | 'adopted'
  | 'superseded'
  | 'needs_review'

export interface CivicMember {
  id: string
  name: string
  office: string
  status: StatusLabel
  termNote: string
  electedYear: number
  email: string | null
  sourceId: string
  lastVerified: string
}

export type TimelineCategory = 'founding' | 'name-change' | 'incorporation' | 'growth' | 'government' | 'other'

export interface TimelineEvent {
  id: string
  year: number
  event: string
  detail: string
  sourceId: string | null
  category: TimelineCategory
}

export type DocumentType = 'resolution' | 'ordinance' | 'notice' | 'report' | 'plan'
export type ReviewStatus = 'reviewed' | 'pending_review' | 'auto_detected'

export interface PublicDocument {
  id: string
  title: string
  type: DocumentType
  date: string | null
  status: StatusLabel
  sourceId: string
  reviewStatus: ReviewStatus
  category: string
  url: string | null
  notes: string | null
}

export interface EditorialPrinciple {
  id: string
  title: string
  body: string
  icon: string
}
