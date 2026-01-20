import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide06Definition({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={6}
      title="MCP en une phrase"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      totalSlides={totalSlides}
    >
      <div style={{
        backgroundColor: '#f6f6f6',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <p style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#000091',
          marginBottom: '0.5rem'
        }}>
          MCP = Model Context Protocol
        </p>
        <p style={{
          fontSize: '1.25rem',
          color: '#161616',
          margin: 0,
          lineHeight: 1.5
        }}>
          Un standard ouvert qui permet à n'importe quelle IA de se connecter à n'importe quelle source de données ou outil.
        </p>
      </div>

      <p style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#000091'
      }}>
        L'analogie : c'est l'<span style={{
          backgroundColor: '#cacafb',
          padding: '0.1em 0.4em',
          borderRadius: '4px'
        }}>USB de l'IA</span>
      </p>

      <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#161616' }}>
        <li><strong style={{ color: '#666' }}>Avant l'USB :</strong> chaque périphérique avait son propre connecteur</li>
        <li><strong style={{ color: '#666' }}>Après l'USB :</strong> un standard, tout marche partout</li>
        <li><strong style={{ color: '#000091' }}>MCP</strong> fait la même chose pour les connexions IA ↔ outils</li>
      </ul>

      <div style={{
        backgroundColor: '#ffffff',
        borderLeft: '4px solid #000091',
        padding: '1rem 1.5rem',
        marginTop: '1.5rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{ margin: 0, color: '#161616' }}>
          <strong style={{ color: '#000091' }}>Gouvernance :</strong> protocole ouvert, désormais sous la <strong>Linux Foundation</strong>
          <br />
          <span style={{ color: '#666', fontSize: '0.95rem' }}>
            → garantie de pérennité et de neutralité (comme Linux, Kubernetes, etc.)
          </span>
        </p>
      </div>
    </SlideLayout>
  )
}
