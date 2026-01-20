import { SlideLayout } from '../../components/SlideLayout'

interface SlideProps {
  totalSlides: number
}

export function Slide02Mission({ totalSlides }: SlideProps) {
  return (
    <SlideLayout
      number={2}
      title="Ma mission"
      section="Introduction"
      partNumber={1}
      background="alt"
      totalSlides={totalSlides}
    >
      <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#161616' }}>
        <li>Piloter la brique <strong style={{ color: '#000091' }}>données & MCP</strong> du socle IA interministériel</li>
        <li>Développer des fonctionnalités IA d'<strong style={{ color: '#000091' }}>accès à la donnée publique</strong></li>
        <li>Faire le lien avec les équipes <strong style={{ color: '#000091' }}>data.gouv</strong></li>
        <li>Explorer les sujets <strong style={{ color: '#000091' }}>agentique & données</strong></li>
      </ul>

      <div style={{
        backgroundColor: '#ffffff',
        borderLeft: '4px solid #000091',
        padding: '1rem 1.5rem',
        marginTop: '2rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic', color: '#161616' }}>
          En clair : comment rendre les données de l'État accessibles aux IA ?
        </p>
      </div>

      <p style={{ marginTop: '1.5rem', color: '#666' }}>
        <strong>Mon profil :</strong> background produit et entrepreneuriat
        <br />
        <span style={{ fontSize: '0.95rem' }}>
          Anciennement : Directeur Produit de la start-up d'état{' '}
          <a
            href="https://beta.gouv.fr/startups/datalma.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#000091' }}
          >
            Datalma
          </a>
        </span>
      </p>
    </SlideLayout>
  )
}
