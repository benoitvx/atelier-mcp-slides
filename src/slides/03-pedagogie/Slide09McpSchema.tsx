import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide09McpSchema({ totalSlides }: SlideProps) {
  const diagram = `┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Question    │────►│  LLM décide      │────►│  Appel MCP  │
│  utilisateur │     │  d'appeler un    │     │  (runtime)  │
└──────────────┘     │  tool MCP        │     └──────┬──────┘
                     └──────────────────┘            │
                                                     ▼
                                              ┌─────────────┐
                                              │  API / DB   │
                                              │  (données   │
                                              │  fraîches)  │
                                              └─────────────┘`

  return (
    <SlideLayout
      number={9}
      title="MCP : comment ça marche ?"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      totalSlides={totalSlides}
    >
      <p style={{
        fontWeight: 600,
        fontSize: '1.25rem',
        marginBottom: '1.5rem',
        color: '#000091'
      }}>
        <span style={{
          backgroundColor: '#b8fec9',
          padding: '0.1em 0.4em',
          borderRadius: '4px'
        }}>Model Context Protocol</span>
      </p>

      <div style={{
        backgroundColor: '#f6f6f6',
        padding: '1.5rem',
        borderRadius: '8px',
        fontFamily: "'Fira Code', 'Consolas', monospace",
        fontSize: '0.8rem',
        lineHeight: '1.4',
        overflowX: 'auto',
        whiteSpace: 'pre'
      }}>
        {diagram}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontWeight: 600, marginBottom: '1rem', color: '#000091' }}>Caractéristiques :</p>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#161616' }}>
          <li>Données récupérées <strong style={{ color: '#18753c' }}>en temps réel</strong></li>
          <li>Accès <strong style={{ color: '#18753c' }}>direct aux sources</strong></li>
          <li>Idéal pour les <strong style={{ color: '#18753c' }}>données dynamiques</strong></li>
        </ul>
      </div>
    </SlideLayout>
  )
}
