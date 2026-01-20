import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide05ProblemeSolution({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={5}
      title="Le problème → La solution"
      section="MCP de quoi parle-t-on ?"
      partNumber={3}
      totalSlides={totalSlides}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Problème */}
        <div>
          <p style={{
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: '0.75rem',
            color: '#e1000f'
          }}>
            Aujourd'hui : intégrations custom
          </p>
          <div style={{
            backgroundColor: '#fee9e6',
            padding: '1rem',
            borderRadius: '8px',
            fontFamily: "'Fira Code', 'Consolas', monospace",
            fontSize: '0.55rem',
            lineHeight: '1.3',
            whiteSpace: 'pre'
          }}>
{`Claude  ◄─── intég. A ───► data.gouv
   │
   └──── intég. B ───► Base interne

ChatGPT ◄─── intég. C ───► data.gouv`}
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            borderLeft: '3px solid #e1000f',
            padding: '0.5rem 0.75rem',
            marginTop: '0.75rem',
            borderRadius: '0 6px 6px 0',
            fontSize: '0.85rem'
          }}>
            <p style={{ margin: 0, color: '#161616' }}>
              <strong style={{ color: '#e1000f' }}>N × M</strong> intégrations à maintenir
            </p>
          </div>
        </div>

        {/* Solution */}
        <div>
          <p style={{
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: '0.75rem',
            color: '#18753c'
          }}>
            Avec MCP : un standard
          </p>
          <div style={{
            backgroundColor: '#b8fec9',
            padding: '1rem',
            borderRadius: '8px',
            fontFamily: "'Fira Code', 'Consolas', monospace",
            fontSize: '0.55rem',
            lineHeight: '1.3',
            whiteSpace: 'pre'
          }}>
{`Claude  ◄──┐           ┌──► data.gouv
           │  ┌─────┐  │
ChatGPT ◄──┼──┤ MCP ├──┼──► Base interne
           │  └─────┘  │
Cursor  ◄──┘           └──► Autre outil`}
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            borderLeft: '3px solid #18753c',
            padding: '0.5rem 0.75rem',
            marginTop: '0.75rem',
            borderRadius: '0 6px 6px 0',
            fontSize: '0.85rem'
          }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#18753c' }}>
              1 standard = tout client parle à tout outil
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
