import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide16DatagouvMcp({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={16}
      title="Exemple 1 : MCP officiel data.gouv"
      section="Exemples dans l'État"
      partNumber={4}
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.5rem', color: '#000091' }}>
        Un serveur MCP open source pour data.gouv.fr
      </p>

      <p style={{ marginBottom: '1.5rem' }}>
        <a
          href="https://github.com/datagouv/datagouv-mcp"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#000091', textDecoration: 'underline' }}
        >
          github.com/datagouv/datagouv-mcp
        </a>
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#161616' }}>Ce qu'il fait :</p>
        <ul style={{ lineHeight: '1.8', color: '#161616', paddingLeft: '1.25rem' }}>
          <li>Permet à n'importe quel client IA de chercher des datasets sur data.gouv.fr</li>
          <li>Expose des "tools" : <code style={{ backgroundColor: '#f6f6f6', padding: '0.1em 0.3em', borderRadius: '3px' }}>search_datasets</code>, <code style={{ backgroundColor: '#f6f6f6', padding: '0.1em 0.3em', borderRadius: '3px' }}>get_dataset_info</code>...</li>
          <li>Données toujours <strong style={{ color: '#18753c' }}>fraîches</strong> (requêtes API en temps réel)</li>
        </ul>
      </div>

      <div style={{
        backgroundColor: '#f6f6f6',
        borderLeft: '4px solid #000091',
        padding: '1rem 1.25rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#000091' }}>Exemples de questions que l'IA peut résoudre :</p>
        <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '1.6', color: '#161616', fontSize: '0.95rem' }}>
          <li>"Quels datasets sur la qualité de l'air ont été mis à jour cette semaine ?"</li>
          <li>"Télécharge les données de population de l'INSEE pour Paris"</li>
          <li>"Liste les datasets de transport les plus téléchargés"</li>
        </ul>
      </div>
    </SlideLayout>
  )
}
