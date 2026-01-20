import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide17DemoDatagouvMcp({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={17}
      title="Exemple 1 : Démo MCP data.gouv dans l'Assistant IA"
      section="Exemples dans l'État"
      partNumber={4}
      totalSlides={totalSlides}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        <img
          src={`${import.meta.env.BASE_URL}images/demos/mcp_datagouv.gif`}
          alt="Démonstration du serveur MCP data.gouv dans l'Assistant IA"
          style={{
            maxWidth: '100%',
            maxHeight: '450px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
          }}
        />
      </div>
    </SlideLayout>
  )
}
