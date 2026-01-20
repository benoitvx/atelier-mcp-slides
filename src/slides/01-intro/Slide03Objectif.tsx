import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide03Objectif({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={3}
      title="Objectifs de l'atelier"
      section="Introduction"
      partNumber={1}
      totalSlides={totalSlides}
    >
      <div style={{
        backgroundColor: '#fff3cd',
        borderLeft: '4px solid #ffc107',
        padding: '1rem 1.5rem',
        marginBottom: '2rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{ margin: 0, fontWeight: 600, color: '#161616' }}>
          Ce n'est PAS un atelier technique
        </p>
      </div>

      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#161616' }}>
        C'est un atelier <span style={{
          backgroundColor: '#cacafb',
          padding: '0.1em 0.4em',
          borderRadius: '4px',
          fontWeight: 600
        }}>découverte, produit et partage d'expérience</span>
      </p>

      <p style={{ fontWeight: 600, marginBottom: '1rem', color: '#000091' }}>
        En 45 minutes :
      </p>

      <ol style={{ fontSize: '1.1rem', lineHeight: '2.2', color: '#161616' }}>
        <li>Comprendre ce qu'est un MCP (et ce que ce n'est pas)</li>
        <li>Voir la différence et la complémentarité avec le RAG</li>
        <li>Découvrir des exemples concrets dans l'État</li>
        <li>Identifier si c'est pertinent pour vos projets</li>
      </ol>
    </SlideLayout>
  )
}
