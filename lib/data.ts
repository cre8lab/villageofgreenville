import sourcesData from '@/data/sources.json'
import civicRosterData from '@/data/civic-roster.json'
import timelineData from '@/data/timeline.json'
import documentsData from '@/data/documents.json'
import editorialStandardsData from '@/data/editorial-standards.json'

import type {
  Source,
  CivicMember,
  TimelineEvent,
  PublicDocument,
  EditorialPrinciple,
} from '@/types'

export function getSources(): Source[] {
  return sourcesData as Source[]
}

export function getSourceById(id: string): Source | undefined {
  return (sourcesData as Source[]).find((s) => s.id === id)
}

export function getCivicRoster(): CivicMember[] {
  return civicRosterData as CivicMember[]
}

export function getTimeline(): TimelineEvent[] {
  return (timelineData as TimelineEvent[]).sort((a, b) => a.year - b.year)
}

export function getDocuments(): PublicDocument[] {
  return documentsData as PublicDocument[]
}

export function getEditorialStandards(): EditorialPrinciple[] {
  return editorialStandardsData as EditorialPrinciple[]
}

export function getDocumentsByCategory(): Record<string, PublicDocument[]> {
  const docs = getDocuments()
  return docs.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) acc[doc.category] = []
      acc[doc.category].push(doc)
      return acc
    },
    {} as Record<string, PublicDocument[]>
  )
}
