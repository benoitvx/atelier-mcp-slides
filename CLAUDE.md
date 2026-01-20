# Atelier MCP - Slides de présentation

## Contexte

Application web de présentation (format slides) pour un **atelier de 45 minutes** sur les MCP (Model Context Protocol).

- **Public** : Agents publics non-techniques (réseau ALLiaNCE)
- **Présentateur** : Benoit Vinceneux, EIG CPO Données & MCP @ Etalab/DINUM
- **Ton** : Pédagogique, accessible, professionnel

## Fichiers clés

| Fichier | Contenu |
|---------|---------|
| `SPECS-SLIDES-MCP.md` | Spécifications techniques complètes (stack, composants, SVG, etc.) |
| `CONTENT.md` | Contenu textuel de chaque slide (à parser) |

**Lire ces deux fichiers avant de commencer.**

## Stack

- React 18 + TypeScript + Vite
- **@codegouvfr/react-dsfr** (obligatoire - design system de l'État)
- CSS modules uniquement (pas de Tailwind)

## Commandes

```bash
npm run dev        # Dev server
npm run build      # Build production
npm run tunnel     # Partage via Cloudflare tunnel
```

## Règles DSFR

1. **Toujours utiliser les composants DSFR** (`<Button>`, `<Card>`, `<Alert>`, `<Table>`, etc.)
2. **Jamais de styles custom** qui overrident le DSFR
3. **Tokens CSS uniquement** : `--blue-france-sun-113-625`, `--background-alt-grey`, etc.
4. **Accessibilité** : navigation clavier, `aria-*`, contrastes RGAA

### Référence DSFR

- Doc : https://react-dsfr.codegouv.studio/
- Storybook : https://components.react-dsfr.codegouv.studio/
- Repo de référence : https://github.com/thomasguillory-betagouv/claude-code-react-dsfr

## Structure slides

27 slides en 6 sections :
1. Introduction (3 slides)
2. Ice breaker (1 slide)
3. Pédagogie MCP (11 slides) - avec schémas SVG
4. Exemples concrets (7 slides) - avec 1 GIF démo
5. Usages (3 slides)
6. Conclusion (2 slides)

## Visuels

### SVG (à créer)
7 schémas statiques avec couleurs DSFR. Voir détails dans `SPECS-SLIDES-MCP.md`.

### GIF (fourni plus tard)
1 seul GIF pour la slide 18 (App ChatGPT data.gouv). Prévoir un placeholder.

## Conventions

- Un composant = un fichier
- Nommage : `SlideXXNom.tsx` (ex: `Slide05Probleme.tsx`)
- TypeScript strict
- Pas de `any`

## À ne pas faire

- ❌ Tailwind ou autre framework CSS
- ❌ Animations complexes
- ❌ Dépendances externes non nécessaires
- ❌ Override des styles DSFR
