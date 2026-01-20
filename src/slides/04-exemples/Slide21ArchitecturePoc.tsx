import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide21ArchitecturePoc({ totalSlides }: SlideProps) {
  const diagram = `┌─────────────────────────────────────────────────────────────────────┐
│                         Question utilisateur                        │
│         "Quelles sont les stats de vaccination COVID récentes ?"    │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           ALBERT API                                │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
              ┌─────────────────┼─────────────────┐
              ▼                                   ▼
┌─────────────────────────┐         ┌─────────────────────────┐
│       MEDIATECH         │         │      DATAGOUV-MCP       │
│  (catalogue vectorisé)  │────────►│    (accès temps réel)   │
│                         │         │                         │
│  "Quel dataset parle    │         │  "Récupère les données  │
│   de vaccination ?"     │         │   de ce dataset"        │
└─────────────────────────┘         └─────────────────────────┘
              │                                   │
              └─────────────────┬─────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Réponse contextualisée                      │
│  "Le dataset 'Données de vaccination COVID-19' (MAJ: hier)..."      │
└─────────────────────────────────────────────────────────────────────┘`

  return (
    <SlideLayout
      number={21}
      title="Exemple 3 : Architecture possible du POC"
      section="Exemples dans l'État"
      partNumber={4}
      background="alt"
      totalSlides={totalSlides}
    >
      <div style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '8px',
        fontFamily: "'Fira Code', 'Consolas', monospace",
        fontSize: '0.6rem',
        lineHeight: '1.3',
        overflowX: 'auto',
        whiteSpace: 'pre',
        color: '#161616'
      }}>
        {diagram}
      </div>
    </SlideLayout>
  )
}
