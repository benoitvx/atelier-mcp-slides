import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide25Ressources({ totalSlides }: SlideProps) {
  const linkStyle = {
    color: '#000091',
    textDecoration: 'underline'
  }

  return (
    <SlideLayout
      number={25}
      title="Ressources pour aller plus loin"
      section="Usages MCP"
      partNumber={5}
      totalSlides={totalSlides}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{
          backgroundColor: '#ffffff',
          padding: '1.25rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#000091' }}>Documentation :</p>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '1.8', color: '#161616' }}>
            <li>
              Site officiel : <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                modelcontextprotocol.io
              </a>
            </li>
            <li>
              Spec technique : <a href="https://spec.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                spec.modelcontextprotocol.io
              </a>
            </li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '1.25rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#000091' }}>Exemples de serveurs MCP :</p>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '1.8', color: '#161616' }}>
            <li>
              Liste officielle : <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                github.com/modelcontextprotocol/servers
              </a>
            </li>
            <li>
              MCP data.gouv : <a href="https://github.com/datagouv/datagouv-mcp" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                github.com/datagouv/datagouv-mcp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}
