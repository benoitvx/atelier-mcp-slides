import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide15TitreSection({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={15}
      title="Exemples dans l'État"
      section="Exemples dans l'État"
      partNumber={4}
      background="alt"
      isSectionSlide
      totalSlides={totalSlides}
    >
      <ol style={{ fontSize: '1.4rem', lineHeight: '2.2', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '1.25rem' }}>
          <strong style={{ color: '#000091' }}>datagouv-mcp</strong>
          <br />
          <span style={{ fontSize: '1rem', color: '#666666' }}>
            Un serveur MCP pour data.gouv.fr
          </span>
        </li>
        <li style={{ marginBottom: '1.25rem' }}>
          <strong style={{ color: '#000091' }}>App ChatGPT data.gouv</strong>
          <br />
          <span style={{ fontSize: '1rem', color: '#666666' }}>
            Preuve de l'interopérabilité
          </span>
        </li>
        <li>
          <strong style={{ color: '#000091' }}>POC Mediatech + MCP + Albert</strong>
          <br />
          <span style={{ fontSize: '1rem', color: '#666666' }}>
            Le meilleur des deux mondes
          </span>
        </li>
      </ol>
    </SlideLayout>
  )
}
