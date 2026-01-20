import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide23Retenir({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={23}
      title="Ce qu'on retient"
      section="Exemples dans l'État"
      partNumber={4}
      background="alt"
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#000091' }}>
        3 briques complémentaires :
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
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616' }}>Brique</th>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616' }}>Rôle</th>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616' }}>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#000091' }}>Albert API</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Inférence souveraine</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#666666', fontSize: '0.9rem' }}>LLM hébergé en France</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#000091' }}>Mediatech</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Découverte sémantique</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#666666', fontSize: '0.9rem' }}>"Quel dataset pour mon besoin ?"</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#18753c' }}>MCP</td>
              <td style={{ padding: '0.875rem 1rem', color: '#161616' }}>Accès temps réel</td>
              <td style={{ padding: '0.875rem 1rem', color: '#666666', fontSize: '0.9rem' }}>"Récupère les données maintenant"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{
        backgroundColor: '#e3e3fd',
        borderLeft: '4px solid #000091',
        padding: '1.25rem 1.5rem',
        borderRadius: '0 12px 12px 0'
      }}>
        <p style={{ margin: 0, color: '#161616' }}>
          <strong style={{ color: '#000091' }}>La vision idéale :</strong> chaque ministère expose ses données via MCP, les agents IA y accèdent de manière standardisée, le tout propulsé par une infra souveraine.
        </p>
      </div>
    </SlideLayout>
  )
}
