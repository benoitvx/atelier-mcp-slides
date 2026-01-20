import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide18AppChatgpt({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={18}
      title="Exemple 2 : POC App ChatGPT data.gouv"
      section="Exemples dans l'État"
      partNumber={4}
      background="alt"
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '1.5rem', color: '#000091' }}>
        Une app ChatGPT pour explorer les données publiques françaises
      </p>

      <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#161616' }}>3 widgets fonctionnels :</p>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', backgroundColor: '#e3e3fd', borderBottom: '2px solid #cacafb', color: '#000091', fontSize: '0.9rem' }}>Widget</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', backgroundColor: '#e3e3fd', borderBottom: '2px solid #cacafb', color: '#000091', fontSize: '0.9rem' }}>Ce qu'il montre</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', backgroundColor: '#e3e3fd', borderBottom: '2px solid #cacafb', color: '#000091', fontSize: '0.9rem' }}>Prompt exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#000091', fontSize: '0.9rem' }}>Carte interactive</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616', fontSize: '0.9rem' }}>Données géolocalisées</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e5e5e5', fontStyle: 'italic', color: '#666666', fontSize: '0.85rem' }}>"Bornes de recharge à Toulouse"</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e5e5e5', fontWeight: 600, color: '#000091', fontSize: '0.9rem' }}>DVF Paris</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616', fontSize: '0.9rem' }}>Prix immobilier au m²</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e5e5e5', fontStyle: 'italic', color: '#666666', fontSize: '0.85rem' }}>"Prix dans le 11ème"</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#000091', fontSize: '0.9rem' }}>Vaccination grippe</td>
              <td style={{ padding: '0.75rem 1rem', color: '#161616', fontSize: '0.9rem' }}>Évolution campagne 2025-2026</td>
              <td style={{ padding: '0.75rem 1rem', fontStyle: 'italic', color: '#666666', fontSize: '0.85rem' }}>"Stats vaccination grippe"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SlideLayout>
  )
}
