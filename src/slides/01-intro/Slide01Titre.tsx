import { SlideHeader } from '../../components/SlideHeader'

interface SlideProps {
  totalSlides: number
}

export function Slide01Titre({ totalSlides: _totalSlides }: SlideProps) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    }}>
      {/* Header blanc */}
      <SlideHeader />

      {/* Zone principale bleue */}
      <div style={{
        flex: 1,
        backgroundColor: '#000091',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        position: 'relative'
      }}>
        {/* Titre principal */}
        <h1 style={{
          color: '#ffffff',
          fontSize: '3rem',
          fontWeight: 700,
          textAlign: 'center',
          margin: 0,
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          Les MCP :<br />Connecter l'IA aux données vivantes
        </h1>

        {/* Sous-titre */}
        <p style={{
          color: '#ffffff',
          fontSize: '1.5rem',
          fontStyle: 'italic',
          textAlign: 'center',
          margin: 0,
          marginBottom: '3rem',
          opacity: 0.9
        }}>
          Votre passerelle vers les données en temps réel
        </p>

        {/* Séparateur */}
        <div style={{
          width: '200px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          marginBottom: '2rem'
        }} />

        {/* Bloc présentateur */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* Avatar photo */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid rgba(255, 255, 255, 0.8)',
            flexShrink: 0
          }}>
            <img
              src="/images/benoitvinceneux.png"
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
              color: '#ffffff',
              margin: 0,
              marginBottom: '0.25rem'
            }}>
              Benoit Vinceneux
            </p>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              margin: 0,
              fontSize: '1rem'
            }}>
              CPO Données & MCP @ IAE / DINUM
            </p>
          </div>
        </div>

        {/* Date */}
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '1rem',
          margin: 0,
          textAlign: 'center'
        }}>
          Rencontre ALLiaNCE — Mardi 20 Janvier 2026
        </p>
      </div>
    </div>
  )
}
