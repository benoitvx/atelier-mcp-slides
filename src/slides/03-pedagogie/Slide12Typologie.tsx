import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide12Typologie({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={12}
      title="Typologie des serveurs MCP"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#000091' }}>
        3 grandes familles :
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
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616' }}>Type</th>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616' }}>Ce que ça fait</th>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616' }}>Exemples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#000091' }}>Accès données</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Lire des informations</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#666666', fontSize: '0.9rem' }}>APIs publiques, bases internes, fichiers</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#18753c' }}>Actions</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Faire quelque chose</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#666666', fontSize: '0.9rem' }}>Créer un ticket, envoyer un mail, publier</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#6a6af4' }}>Outils</td>
              <td style={{ padding: '0.875rem 1rem', color: '#161616' }}>Transformer / calculer</td>
              <td style={{ padding: '0.875rem 1rem', color: '#666666', fontSize: '0.9rem' }}>Conversion, validation, analyse</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{
        backgroundColor: '#feecc2',
        borderLeft: '4px solid #716043',
        padding: '1rem 1.25rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{ margin: 0, color: '#161616' }}>
          Un même serveur MCP peut <strong>combiner plusieurs types</strong>
        </p>
      </div>
    </SlideLayout>
  )
}
