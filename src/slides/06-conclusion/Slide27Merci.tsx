import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide27Merci({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={27}
      title="Merci !"
      section="Conclusion"
      partNumber={6}
      totalSlides={totalSlides}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Bloc présentateur avec photo */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1.5rem 2.5rem',
          backgroundColor: '#f6f6f6',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          {/* Avatar photo */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #000091',
            flexShrink: 0
          }}>
            <img
              src={`${import.meta.env.BASE_URL}images/benoitvinceneux.png`}
              alt="Benoit Vinceneux"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Infos présentateur */}
          <div style={{ textAlign: 'left' }}>
            <p style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#000091',
              margin: 0,
              marginBottom: '0.25rem'
            }}>
              Benoit Vinceneux
            </p>
            <p style={{
              color: '#6a6af4',
              margin: 0,
              fontSize: '0.95rem'
            }}>
              CPO Données & MCP @ IAE / DINUM
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a
              href="mailto:benoit.vinceneux@numerique.gouv.fr"
              style={{
                color: '#000091',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem'
              }}
            >
              📧 benoit.vinceneux@numerique.gouv.fr
            </a>

            <a
              href="https://www.linkedin.com/in/benoitvinceneux/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#000091',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem'
              }}
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
