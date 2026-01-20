# Spécifications - Slides Atelier MCP ALLiaNCE

## Objectif

Créer une application de présentation web (format slides) pour un atelier de 45 minutes sur les MCP (Model Context Protocol). Public : agents publics non-techniques. Ton : pédagogique, accessible, professionnel.

---

## Stack technique

- **Framework** : React 18+ avec TypeScript
- **Design System** : @codegouvfr/react-dsfr (obligatoire, conformité État)
- **Build** : Vite
- **Styling** : CSS modules + tokens DSFR uniquement (pas de Tailwind)
- **Déploiement** : Local + tunnel Cloudflare pour partage

### Dépendances principales

```json
{
  "@codegouvfr/react-dsfr": "^1.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x"
}
```

---

## Structure du projet

```
atelier-mcp-slides/
├── public/
│   ├── dsfr/                    # Assets DSFR (copié via script)
│   ├── images/
│   │   ├── diagrams/            # SVG des schémas (architecture, RAG vs MCP)
│   │   └── demos/               # GIFs des démos
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Slide.tsx            # Conteneur d'une slide
│   │   ├── SlideNavigation.tsx  # Barre de navigation (flèches, compteur)
│   │   ├── SlideProgress.tsx    # Barre de progression
│   │   ├── Diagram.tsx          # Wrapper pour les SVG interactifs
│   │   └── DemoGif.tsx          # Composant pour afficher les GIFs
│   ├── slides/
│   │   ├── index.ts             # Export de toutes les slides
│   │   ├── 01-intro/
│   │   │   ├── Slide01Titre.tsx
│   │   │   ├── Slide02Mission.tsx
│   │   │   └── Slide03Objectif.tsx
│   │   ├── 02-icebreaker/
│   │   │   └── Slide04Sondage.tsx
│   │   ├── 03-pedagogie/
│   │   │   ├── Slide05Probleme.tsx
│   │   │   ├── Slide06Solution.tsx
│   │   │   ├── Slide07Definition.tsx
│   │   │   ├── Slide08Architecture.tsx
│   │   │   ├── Slide09RagIntro.tsx
│   │   │   ├── Slide10RagSchema.tsx
│   │   │   ├── Slide11McpSchema.tsx
│   │   │   ├── Slide12Comparatif.tsx
│   │   │   ├── Slide13Exemples.tsx
│   │   │   ├── Slide14MessageCle.tsx
│   │   │   └── Slide15Quiz.tsx
│   │   ├── 04-exemples/
│   │   │   ├── Slide16TitreSection.tsx
│   │   │   ├── Slide17DatagouvMcp.tsx
│   │   │   ├── Slide18AppChatgpt.tsx
│   │   │   ├── Slide19PocMediatech.tsx
│   │   │   ├── Slide20ArchitecturePoc.tsx
│   │   │   ├── Slide21Apprentissages.tsx
│   │   │   └── Slide22Retenir.tsx
│   │   ├── 05-usages/
│   │   │   ├── Slide23Typologie.tsx
│   │   │   ├── Slide24Checklist.tsx
│   │   │   └── Slide25Ressources.tsx
│   │   └── 06-conclusion/
│   │       ├── Slide26Questions.tsx
│   │       └── Slide27Merci.tsx
│   ├── hooks/
│   │   └── useSlideNavigation.ts  # Gestion clavier + état slide courante
│   ├── content/
│   │   └── slides-content.ts      # Contenu importé depuis le .md parsé
│   ├── styles/
│   │   ├── slides.module.css      # Styles spécifiques aux slides
│   │   └── diagrams.module.css    # Styles pour les SVG
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── CONTENT.md                     # Contenu des slides (à la racine, fourni séparément)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Composant Slide

### Layout de base

Chaque slide occupe 100% du viewport avec :
- Fond : `--background-default-grey` ou `--background-alt-grey` (alterner)
- Padding : `3rem` sur les côtés, `2rem` en haut/bas
- Contenu centré verticalement
- Max-width du contenu : `1200px`

### Structure type

```tsx
<Slide 
  number={5} 
  title="Le problème aujourd'hui"
  section="Pédagogie MCP"
  background="alt" // ou "default"
>
  {/* Contenu de la slide */}
</Slide>
```

### Props du composant Slide

```typescript
interface SlideProps {
  number: number;
  title: string;
  section?: string;
  background?: 'default' | 'alt';
  children: React.ReactNode;
}
```

---

## Navigation

### Raccourcis clavier

| Touche | Action |
|--------|--------|
| `→` ou `Espace` ou `PageDown` | Slide suivante |
| `←` ou `PageUp` | Slide précédente |
| `Home` | Première slide |
| `End` | Dernière slide |
| `Escape` | Afficher/masquer la vue d'ensemble |
| `1-9` | Aller à la slide N (si < 10) |

### Barre de navigation

Position : fixe en bas de l'écran
Contenu :
- Flèche gauche (désactivée si slide 1)
- Compteur : "5 / 27"
- Flèche droite (désactivée si dernière slide)
- Barre de progression (fine, couleur `--blue-france-sun-113-625`)

### Hook useSlideNavigation

```typescript
interface UseSlideNavigation {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (n: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isFirst: boolean;
  isLast: boolean;
}
```

---

## Design & Composants DSFR à utiliser

### Typographie

- Titre de slide : `<h1>` avec classe `fr-h2` ou `fr-h3`
- Sous-titre : `<p>` avec classe `fr-text--lead`
- Corps : `<p>` standard
- Citation : composant `<Highlight>` du DSFR

### Composants DSFR recommandés

| Usage | Composant DSFR |
|-------|----------------|
| Message clé | `<CallOut>` |
| Point d'attention | `<Alert>` (info, warning) |
| Tableau comparatif | `<Table>` |
| Liste de features | `<Tile>` en grille |
| Étapes/processus | Cards ou liste custom |
| Liens/ressources | `<Card>` horizontal |
| Quiz interactif | `<RadioButtons>` + `<Button>` |

### Palette couleurs (tokens DSFR uniquement)

```css
/* Utiliser uniquement ces variables */
--blue-france-sun-113-625      /* Accent principal */
--blue-france-975              /* Texte sur fond clair */
--background-default-grey      /* Fond par défaut */
--background-alt-grey          /* Fond alternatif */
--background-contrast-grey     /* Fond contrasté */
--text-default-grey            /* Texte principal */
--text-mention-grey            /* Texte secondaire */
--border-default-grey          /* Bordures */
--success-425-625              /* Vert validation */
--warning-425-625              /* Orange attention */
--error-425-625                /* Rouge erreur */
```

---

## SVG - Schémas à créer

### Liste des schémas requis

| ID | Slide | Description | Complexité |
|----|-------|-------------|------------|
| `diagram-problem` | 05 | N clients × M outils = N×M intégrations | Simple |
| `diagram-solution` | 06 | 1 standard MCP au centre | Simple |
| `diagram-architecture` | 08 | Client IA ↔ Serveur MCP ↔ Ressource | Moyenne |
| `diagram-rag` | 10 | Flow RAG (docs → vectorisation → recherche) | Moyenne |
| `diagram-mcp` | 11 | Flow MCP (question → LLM → appel MCP → API) | Moyenne |
| `diagram-complementary` | 14 | RAG + MCP ensemble dans un projet | Simple |
| `diagram-poc` | 20 | Architecture Albert + Mediatech + MCP | Complexe |

### Spécifications SVG

- **Dimensions** : viewBox="0 0 800 450" (ratio 16:9)
- **Style** : flat design, pas d'ombres, traits nets
- **Couleurs** : exclusivement tokens DSFR
- **Typo dans SVG** : Marianne (font DSFR)
- **Animations** : aucune (SVG statiques)
- **Accessibilité** : `<title>` et `<desc>` dans chaque SVG, `role="img"`, `aria-labelledby`

### Structure SVG type

```svg
<svg viewBox="0 0 800 450" role="img" aria-labelledby="title-diagram-xxx desc-diagram-xxx">
  <title id="title-diagram-xxx">Titre du schéma</title>
  <desc id="desc-diagram-xxx">Description détaillée pour lecteurs d'écran</desc>
  
  <!-- Contenu -->
</svg>
```

### Style des boîtes/nodes

```css
/* Boîte principale (ex: Client IA) */
.node-primary {
  fill: var(--background-contrast-grey);
  stroke: var(--blue-france-sun-113-625);
  stroke-width: 2;
  rx: 8; /* coins arrondis */
}

/* Boîte secondaire */
.node-secondary {
  fill: var(--background-alt-grey);
  stroke: var(--border-default-grey);
  stroke-width: 1;
  rx: 4;
}

/* Flèches/connexions */
.connector {
  stroke: var(--blue-france-sun-113-625);
  stroke-width: 2;
  fill: none;
  marker-end: url(#arrow);
}

/* Texte dans les boîtes */
.node-label {
  font-family: Marianne, sans-serif;
  font-size: 14px;
  fill: var(--text-default-grey);
  text-anchor: middle;
}
```

---

## GIFs de démo

### Liste des GIFs requis

| ID | Slide | Description | Durée cible |
|----|-------|-------------|-------------|
| `demo-chatgpt-widget` | 18 | Widget carte ou DVF dans ChatGPT | 10-15s |

### Alternatives pour les autres démos

| Slide | Contenu | Solution |
|-------|---------|----------|
| 17 - datagouv-mcp | Pas de GIF | Lien vers le repo GitHub + screenshot statique |
| 19-20 - POC Mediatech | Concept (pas de démo live) | Schéma SVG + mention "notebook en cours" |

### Spécifications GIF

- **Dimensions** : 1200×675 (ratio 16:9) ou 800×450 minimum
- **Framerate** : 15-20 fps (compromis taille/fluidité)
- **Taille max** : 5 Mo par GIF
- **Format alternatif** : prévoir version WebM/MP4 pour fallback
- **Bordure** : arrondie (border-radius: 8px) via CSS, pas dans le GIF

### Composant DemoGif

```tsx
interface DemoGifProps {
  src: string;
  alt: string;
  caption?: string;
  autoPlay?: boolean; // default: true
}
```

Affichage :
- Conteneur avec ombre légère DSFR
- Caption en dessous (optionnel)
- Bouton play/pause au survol
- Fallback image statique si GIF non chargé

---

## Responsive

### Breakpoints DSFR

```css
/* Mobile */
@media (max-width: 575px) { }

/* Tablet */
@media (min-width: 576px) and (max-width: 991px) { }

/* Desktop (cible principale) */
@media (min-width: 992px) { }
```

### Adaptations par breakpoint

| Élément | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Titre slide | `fr-h4` | `fr-h3` | `fr-h2` |
| Padding slide | `1rem` | `2rem` | `3rem` |
| SVG | 100% width | 80% width | max 800px |
| Navigation | Swipe + mini dots | Arrows + counter | Full bar |

**Note** : La présentation est optimisée pour projection desktop. Le responsive est un bonus pour consultation ultérieure.

---

## Accessibilité (RGAA)

### Obligatoire

- [ ] Navigation 100% clavier
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Contraste minimum 4.5:1 (assuré par DSFR)
- [ ] SVG avec `role="img"` et descriptions
- [ ] GIFs avec `alt` descriptif
- [ ] Skip link vers contenu principal
- [ ] `aria-live` pour annonce du changement de slide
- [ ] `aria-current="true"` sur slide active dans la nav

### Structure HTML

```html
<main id="main-content" aria-live="polite">
  <article aria-label="Slide 5 sur 27 : Le problème aujourd'hui">
    <!-- Contenu slide -->
  </article>
</main>
```

---

## Scripts NPM

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "postinstall": "react-dsfr copy-static-assets",
    "tunnel": "cloudflared tunnel --url http://localhost:5173"
  }
}
```

---

## Instructions pour Claude Code

### Ordre de développement recommandé

1. **Init projet** : Vite + React + TypeScript + react-dsfr
2. **Composants de base** : Slide, SlideNavigation, SlideProgress
3. **Hook navigation** : useSlideNavigation avec gestion clavier
4. **Layout App** : Structure globale avec Header DSFR minimaliste
5. **Slides statiques** : Créer chaque slide avec contenu texte (sans visuels)
6. **Intégration SVG** : Ajouter les schémas (placeholders puis vrais SVG)
7. **Intégration GIFs** : Ajouter les démos (placeholders puis vrais GIFs)
8. **Polish** : Transitions, animations subtiles, tests responsive

### Règles de code

- Utiliser les composants DSFR natifs au maximum
- Ne jamais override les styles DSFR, utiliser les classes utilitaires
- TypeScript strict
- Composants fonctionnels uniquement
- Un fichier = un composant (sauf si très petits composants liés)

### Notes spécifiques par slide

| Slide | Note |
|-------|------|
| 17 - datagouv-mcp | Afficher un lien cliquable vers `https://github.com/datagouv/datagouv-mcp` + screenshot ou illustration statique |
| 18 - App ChatGPT | Emplacement pour GIF (placeholder puis vrai GIF) |
| 19-20 - POC Mediatech | Mention "POC en cours de développement (notebook)" + schéma SVG architecture |

### Fichier CONTENT.md

Le contenu textuel de chaque slide sera fourni dans un fichier `CONTENT.md` séparé. Claude Code doit :
1. Lire ce fichier
2. Extraire le contenu de chaque slide
3. L'intégrer dans les composants correspondants

Format attendu dans CONTENT.md :
```markdown
## Slide 1.1 - Titre
[contenu]

## Slide 1.2 - Ma mission  
[contenu]
```

---

## Ressources de référence

### Repo claude-code-react-dsfr

Utiliser comme référence pour les bonnes pratiques DSFR :
- **URL** : https://github.com/thomasguillory-betagouv/claude-code-react-dsfr
- **À récupérer** : `CLAUDE.md`, `.claude/commands/dsfr/`, `docs/DSFR_COMPONENTS.md`
- **Commandes utiles** : `/dsfr:component`, `/dsfr:page`, `/dsfr:check`

---

## Checklist finale

- [ ] Toutes les slides s'affichent correctement
- [ ] Navigation clavier fluide
- [ ] SVG lisibles et accessibles
- [ ] GIF ChatGPT intégré (ou placeholder visible)
- [ ] Lien GitHub datagouv-mcp cliquable
- [ ] Responsive tablet/mobile fonctionnel (bonus)
- [ ] Build production sans erreur
- [ ] Tunnel Cloudflare testé
- [ ] Temps de chargement < 3s
