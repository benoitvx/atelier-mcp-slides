import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide10Comparatif({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={10}
      title="Tableau comparatif"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      background="alt"
      totalSlides={totalSlides}
    >
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: 0 }}>
          <thead>
            <tr>
              <th style={{
                padding: '1rem 1.25rem',
                textAlign: 'left',
                backgroundColor: '#f6f6f6',
                borderBottom: '2px solid #e5e5e5',
                color: '#161616',
                fontWeight: 600
              }}>Critère</th>
              <th style={{
                padding: '1rem 1.25rem',
                textAlign: 'center',
                backgroundColor: '#e3e3fd',
                borderBottom: '2px solid #cacafb',
                color: '#000091',
                fontWeight: 700
              }}>RAG</th>
              <th style={{
                padding: '1rem 1.25rem',
                textAlign: 'center',
                backgroundColor: '#b8fec9',
                borderBottom: '2px solid #8eeaa0',
                color: '#18753c',
                fontWeight: 700
              }}>MCP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#161616' }}>Moment</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#161616' }}>Build-time (préparé)</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#161616' }}>Runtime (temps réel)</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#161616' }}>Données</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#161616' }}>Statiques, vectorisées</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#161616' }}>Dynamiques, fraîches</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#161616' }}>Fraîcheur</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#161616' }}>Date de l'indexation</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#161616' }}>Toujours à jour</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#161616' }}>Requêtes</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#666', fontSize: '0.95rem' }}>Sémantiques ("parle-moi de...")</td>
              <td style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#666', fontSize: '0.95rem' }}>Structurées ("liste-moi les X où Y")</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1.25rem', fontWeight: 600, color: '#161616' }}>Actions</td>
              <td style={{ padding: '0.875rem 1.25rem', textAlign: 'center', color: '#e1000f', fontWeight: 600 }}>❌ Lecture seule</td>
              <td style={{ padding: '0.875rem 1.25rem', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Peut agir (créer, modifier)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SlideLayout>
  )
}
