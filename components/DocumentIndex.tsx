import type { PublicDocument } from '@/types'
import type { Source } from '@/types'
import RecordCard from './RecordCard'

interface DocumentIndexProps {
  documents: PublicDocument[]
  sources: Source[]
  groupByCategory?: boolean
}

export default function DocumentIndex({
  documents,
  sources,
  groupByCategory = true,
}: DocumentIndexProps) {
  const getSource = (sourceId: string) => sources.find((s) => s.id === sourceId)

  if (!groupByCategory) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <RecordCard key={doc.id} document={doc} source={getSource(doc.sourceId)} />
        ))}
      </div>
    )
  }

  // Group by category
  const grouped = documents.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) acc[doc.category] = []
      acc[doc.category].push(doc)
      return acc
    },
    {} as Record<string, PublicDocument[]>
  )

  const categories = Object.keys(grouped).sort()

  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <section key={category}>
          <div className="civic-rule mb-5">
            <h3 className="font-serif text-xl font-semibold text-navy pt-3">{category}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {grouped[category].map((doc) => (
              <RecordCard key={doc.id} document={doc} source={getSource(doc.sourceId)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
