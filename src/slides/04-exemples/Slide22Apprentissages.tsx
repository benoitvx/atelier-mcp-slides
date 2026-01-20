import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide22Apprentissages({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={22}
      title="Apprentissages du POC"
      section="Exemples dans l'État"
      partNumber={4}
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#000091' }}>
        Pour vos projets RAG + chatbot :
      </p>

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        marginBottom: '1.5rem'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: 0 }}>
          <thead>
            <tr>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#fee9e6', borderBottom: '2px solid #fdd', color: '#ce0500', fontSize: '0.9rem' }}>Situation actuelle</th>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#b8fec9', borderBottom: '2px solid #8eeaa0', color: '#18753c', fontSize: '0.9rem' }}>Avec Mediatech + MCP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>RAG statique, données figées</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Découverte sémantique + données fraîches</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>"Je ne sais pas" sur l'actualité</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Accès temps réel aux sources</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', color: '#161616' }}>Dépendance à OpenAI/Anthropic</td>
              <td style={{ padding: '0.875rem 1rem', color: '#161616' }}>Stack souveraine (Albert API)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{
        backgroundColor: '#f6f6f6',
        borderLeft: '4px solid #000091',
        padding: '1rem 1.25rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#000091' }}>Ce que ça démontre :</p>
        <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '1.6', color: '#161616', fontSize: '0.95rem' }}>
          <li>RAG et MCP ne sont pas concurrents → ils se complètent</li>
          <li>On peut construire des solutions souveraines performantes</li>
          <li>Le standard MCP permet l'interopérabilité</li>
        </ul>
      </div>
    </SlideLayout>
  )
}
