import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide13MessageCle({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={13}
      title="Le message clé"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      background="alt"
      totalSlides={totalSlides}
    >
      <p style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#161616'
      }}>
        RAG et MCP sont <span style={{
          color: '#000091',
          backgroundColor: '#cacafb',
          padding: '0.1em 0.4em',
          borderRadius: '4px'
        }}>complémentaires</span>
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          backgroundColor: '#e3e3fd',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ fontWeight: 700, color: '#000091', marginBottom: '0.5rem', fontSize: '1.1rem' }}>RAG</p>
          <p style={{ margin: 0, color: '#161616' }}>Connaissances<br/>stables</p>
        </div>
        <div style={{
          backgroundColor: '#b8fec9',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ fontWeight: 700, color: '#18753c', marginBottom: '0.5rem', fontSize: '1.1rem' }}>MCP</p>
          <p style={{ margin: 0, color: '#161616' }}>Données live<br/>+ Actions</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderLeft: '4px solid #000091',
          padding: '1rem 1.5rem',
          borderRadius: '0 8px 8px 0'
        }}>
          <p style={{ margin: 0, color: '#161616' }}>
            Si votre RAG répond "je ne sais pas" sur des données récentes → <strong style={{ color: '#18753c' }}>MCP</strong>
          </p>
        </div>
        <div style={{
          backgroundColor: '#ffffff',
          borderLeft: '4px solid #000091',
          padding: '1rem 1.5rem',
          borderRadius: '0 8px 8px 0'
        }}>
          <p style={{ margin: 0, color: '#161616' }}>
            Si vous voulez que l'IA agisse (pas juste réponde) → <strong style={{ color: '#18753c' }}>MCP</strong>
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
