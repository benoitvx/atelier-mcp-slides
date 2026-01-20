import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide24Checklist({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={24}
      title="Est-ce que MCP est pertinent pour mon projet ?"
      section="Usages MCP"
      partNumber={5}
      background="alt"
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#000091' }}>
        Checklist rapide :
      </p>

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: 0 }}>
          <thead>
            <tr>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'left', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616', width: '65%' }}>Situation</th>
              <th style={{ padding: '0.875rem 1rem', textAlign: 'center', backgroundColor: '#f6f6f6', borderBottom: '2px solid #e5e5e5', color: '#161616', width: '35%' }}>MCP pertinent ?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Mon RAG répond "je ne sais pas" sur des données récentes</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Oui</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Je veux que l'IA <strong>agisse</strong> (pas juste réponde)</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Oui</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>J'ai une <strong>API métier</strong> que je veux exposer à l'IA</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#18753c', fontWeight: 600 }}>✅ Oui</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', color: '#161616' }}>Mes données sont <strong>stables</strong> et ne changent jamais</td>
              <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #e5e5e5', textAlign: 'center', color: '#666666' }}>❌ RAG suffit</td>
            </tr>
            <tr>
              <td style={{ padding: '0.875rem 1rem', color: '#161616' }}>Je veux juste un chatbot sur de la documentation</td>
              <td style={{ padding: '0.875rem 1rem', textAlign: 'center', color: '#666666' }}>❌ RAG suffit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SlideLayout>
  )
}
