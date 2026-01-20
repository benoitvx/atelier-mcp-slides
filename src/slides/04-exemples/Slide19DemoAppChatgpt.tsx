import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide19DemoAppChatgpt({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={19}
      title="Exemple 2 : Démo POC App ChatGPT data.gouv"
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
          src="/images/demos/demo-chatgpt-bornes-recharge.gif"
          alt="Démonstration de l'App ChatGPT data.gouv - recherche de bornes de recharge"
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
