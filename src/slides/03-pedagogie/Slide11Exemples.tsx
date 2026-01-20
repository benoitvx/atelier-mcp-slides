import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide11Exemples({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={11}
      title="Exemples concrets"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      totalSlides={totalSlides}
    >
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: 0, tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '60%' }} />
            <col style={{ width: '20%', minWidth: '120px' }} />
            <col style={{ width: '20%', minWidth: '120px' }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#e3e3fd', borderBottom: '2px solid #cacafb', color: '#000091' }}>Question</th>
              <th style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#e3e3fd', borderBottom: '2px solid #cacafb', color: '#000091' }}>RAG</th>
              <th style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#b8fec9', borderBottom: '2px solid #8eeaa0', color: '#18753c' }}>MCP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616', fontSize: '0.95rem' }}>"Que dit le code des marchés publics sur les seuils ?"</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Parfait</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#e1000f' }}>❌</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616', fontSize: '0.95rem' }}>"Quels datasets sur data.gouv ont été mis à jour cette semaine ?"</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#e1000f' }}>❌ Périmé</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Parfait</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616', fontSize: '0.95rem' }}>"Résume-moi la doctrine CNIL sur les cookies"</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Parfait</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#e1000f' }}>❌</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', color: '#161616', fontSize: '0.95rem' }}>"Crée un ticket JIRA pour ce bug"</td>
              <td style={{ padding: '0.875rem 1rem', textAlign: 'center', color: '#e1000f' }}>❌ Impossible</td>
              <td style={{ padding: '0.875rem 1rem', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Parfait</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SlideLayout>
  )
}
