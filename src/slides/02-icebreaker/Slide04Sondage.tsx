import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide04Sondage({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={4}
      title="Sondage express"
      section="Ice breaker"
      partNumber={2}
      background="alt"
      totalSlides={totalSlides}
    >
      <p style={{
        fontWeight: 600,
        fontSize: '1.25rem',
        marginBottom: '2rem',
        color: '#000091'
      }}>
        Levez la main si...
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#ffffff',
          padding: '1.25rem 1.5rem',
          borderRadius: '8px'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#6a6af4',
            minWidth: '2rem'
          }}>1.</span>
          <p style={{ fontSize: '1.15rem', margin: 0, color: '#161616' }}>
            Vous avez déjà <strong style={{ color: '#000091' }}>entendu parler</strong> des MCP ?
          </p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#ffffff',
          padding: '1.25rem 1.5rem',
          borderRadius: '8px'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#6a6af4',
            minWidth: '2rem'
          }}>2.</span>
          <p style={{ fontSize: '1.15rem', margin: 0, color: '#161616' }}>
            Vous avez déjà <strong style={{ color: '#000091' }}>testé</strong> un MCP ? (Claude Desktop, Cursor, etc.)
          </p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#ffffff',
          padding: '1.25rem 1.5rem',
          borderRadius: '8px'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#6a6af4',
            minWidth: '2rem'
          }}>3.</span>
          <p style={{ fontSize: '1.15rem', margin: 0, color: '#161616' }}>
            Vous avez un projet qui pourrait <strong style={{ color: '#000091' }}>créer ou utiliser</strong> un MCP ?
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
