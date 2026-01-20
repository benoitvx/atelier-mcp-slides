import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide20PocMediatech({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={20}
      title="Exemple 3 : POC Mediatech + MCP + Albert"
      section="Exemples dans l'État"
      partNumber={4}
      totalSlides={totalSlides}
    >
      <p style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '2rem', color: '#000091' }}>
        Combiner le meilleur des deux mondes
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#161616' }}>Le problème :</p>
        <ul style={{ lineHeight: '1.8', color: '#161616', paddingLeft: '1.25rem' }}>
          <li><strong style={{ color: '#000091' }}>Mediatech</strong> = super pour la découverte sémantique des datasets</li>
          <li><strong style={{ color: '#18753c' }}>MCP</strong> = super pour l'accès temps réel aux données</li>
          <li>Seuls, ils répondent à des besoins différents</li>
        </ul>
      </div>

      <div style={{
        backgroundColor: '#b8fec9',
        borderLeft: '4px solid #18753c',
        padding: '1.25rem 1.5rem',
        borderRadius: '0 12px 12px 0'
      }}>
        <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#18753c' }}>L'idée du POC :</p>
        <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '1.8', color: '#161616' }}>
          <li>Utiliser <strong>Mediatech</strong> pour trouver le bon dataset (via embeddings)</li>
          <li>Utiliser <strong>MCP</strong> pour récupérer les données fraîches</li>
          <li>Le tout propulsé par <strong>Albert API</strong> (souverain)</li>
        </ul>
      </div>
    </SlideLayout>
  )
}
