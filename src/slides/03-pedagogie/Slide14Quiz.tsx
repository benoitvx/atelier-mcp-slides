import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide14Quiz({ totalSlides }: SlideProps) {
  const quizItems = [
    { text: 'Répondre sur la réglementation RGPD', answer: 'RAG', color: '#e3e3fd', textColor: '#000091' },
    { text: 'Afficher les dernières alertes météo', answer: 'MCP', color: '#b8fec9', textColor: '#18753c' },
    { text: 'Expliquer les démarches administratives', answer: 'RAG', color: '#e3e3fd', textColor: '#000091' },
    { text: 'Vérifier le statut d\'un dossier en cours', answer: 'MCP', color: '#b8fec9', textColor: '#18753c' },
    { text: 'Les deux ensemble', answer: 'RAG + MCP', color: '#feecc2', textColor: '#716043', highlight: true },
  ]

  return (
    <SlideLayout
      number={14}
      title="Quiz rapide"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, marginBottom: '1.5rem', color: '#000091' }}>
        Votre projet a besoin de :
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {quizItems.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.25rem',
            backgroundColor: '#f6f6f6',
            borderRadius: '8px'
          }}>
            <span style={{ fontWeight: 600, minWidth: '1.5rem', color: '#6a6af4' }}>{index + 1}.</span>
            <span style={{ flex: 1, color: '#161616' }}>{item.text}</span>
            <span style={{
              fontWeight: 600,
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              fontSize: '0.875rem',
              backgroundColor: item.color,
              color: item.textColor
            }}>
              {item.answer} {item.highlight && '🎯'}
            </span>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
