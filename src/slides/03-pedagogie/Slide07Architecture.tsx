import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide07Architecture({ totalSlides }: SlideProps) {
  const diagram = `┌────────────────┐     ┌─────────────────┐     ┌────────────────┐
│   Client IA    │     │   Serveur MCP   │     │   Ressource    │
│                │     │                 │     │                │
│  Claude        │◄───►│  datagouv-mcp   │◄───►│  API data.gouv │
│  ChatGPT       │     │                 │     │                │
│  Cursor        │     │  Expose :       │     │                │
│  ...           │     │  - tools        │     │                │
│                │     │  - resources    │     │                │
└────────────────┘     └─────────────────┘     └────────────────┘`

  return (
    <SlideLayout
      number={7}
      title="Comment ça marche ?"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      background="alt"
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, marginBottom: '1.5rem', color: '#000091' }}>
        Architecture simplifiée
      </p>

      <div style={{
        backgroundColor: '#ffffff',
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
        <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#000091' }}>
          Le serveur MCP expose des "tools" que l'IA peut appeler
        </p>
        <p style={{ color: '#666' }}>
          Exemple : <code style={{
            backgroundColor: '#f6f6f6',
            padding: '0.2em 0.5em',
            borderRadius: '4px',
            fontSize: '0.9rem'
          }}>search_datasets(query="qualité air")</code>
        </p>
      </div>
    </SlideLayout>
  )
}
