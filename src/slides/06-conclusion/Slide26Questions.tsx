import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide26Questions({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={26}
      title="Vos questions"
      section="Conclusion"
      partNumber={6}
      background="alt"
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#000091' }}>
        Questions pour lancer la discussion :
      </p>

      <ul style={{ fontSize: '1.15rem', lineHeight: '2.2', color: '#161616', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
        <li>Quels <strong style={{ color: '#000091' }}>freins</strong> voyez-vous à l'adoption des MCP ?</li>
        <li>Quels <strong style={{ color: '#18753c' }}>cas d'usage</strong> envisagez-vous pour vos projets ?</li>
        <li>Qui a déjà expérimenté et veut <strong style={{ color: '#6a6af4' }}>partager son retour</strong> ?</li>
      </ul>

      <div style={{
        backgroundColor: '#e3e3fd',
        borderLeft: '4px solid #000091',
        padding: '1.25rem 1.5rem',
        borderRadius: '0 12px 12px 0'
      }}>
        <p style={{ margin: 0, fontWeight: 600, color: '#000091' }}>
          🤗 Le département IAE de la DINUM est là pour vous accompagner dans vos projets MCP
        </p>
      </div>
    </SlideLayout>
  )
}
