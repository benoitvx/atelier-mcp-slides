import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide08RagSchema({ totalSlides }: SlideProps) {
  const diagram = `┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Documents   │────►│  Vectorisation   │────►│  Base       │
│  (statiques) │     │  (build-time)    │     │  vectorielle│
└──────────────┘     └──────────────────┘     └──────┬──────┘
                                                     │
                                                     ▼
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Question    │────►│  Recherche       │────►│  Contexte   │
│  utilisateur │     │  sémantique      │     │  + LLM      │
└──────────────┘     └──────────────────┘     └─────────────┘`

  return (
    <SlideLayout
      number={8}
      title="RAG : c'est quoi ?"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      background="alt"
      totalSlides={totalSlides}
    >
      <div style={{
        backgroundColor: '#f6f6f6',
        padding: '0.75rem 1.25rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        display: 'inline-block'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic', color: '#666666', fontSize: '0.95rem' }}>
          "J'ai déjà un RAG, pourquoi j'aurais besoin d'un MCP ?" → <strong style={{ color: '#000091' }}>Ce n'est pas le même problème</strong>
        </p>
      </div>

      <p style={{
        fontWeight: 600,
        fontSize: '1.1rem',
        marginBottom: '1rem',
        color: '#000091'
      }}>
        <span style={{
          backgroundColor: '#e3e3fd',
          padding: '0.1em 0.4em',
          borderRadius: '4px'
        }}>Retrieval-Augmented Generation</span>
      </p>

      <div style={{
        backgroundColor: '#ffffff',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: "'Fira Code', 'Consolas', monospace",
        fontSize: '0.65rem',
        lineHeight: '1.3',
        overflowX: 'auto',
        whiteSpace: 'pre',
        marginBottom: '1rem'
      }}>
        {diagram}
      </div>

      <div>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#000091', fontSize: '0.95rem' }}>Caractéristiques :</p>
        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#161616', margin: 0 }}>
          <li>Données <strong style={{ color: '#000091' }}>préparées à l'avance</strong> (indexation)</li>
          <li>Recherche par <strong style={{ color: '#000091' }}>similarité sémantique</strong></li>
          <li>Idéal pour les <strong style={{ color: '#000091' }}>bases de connaissances stables</strong></li>
        </ul>
      </div>
    </SlideLayout>
  )
}
