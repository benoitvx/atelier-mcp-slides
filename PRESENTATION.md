# Les MCP : Connecter l'IA aux données vivantes

**Votre passerelle vers les données en temps réel**

---

**Présentateur :** Benoit Vinceneux
**Fonction :** CPO Données & MCP @ IAE / DINUM
**Événement :** Rencontre ALLiaNCE — Mardi 20 Janvier 2026

---

## Ma mission

Piloter la brique données & MCP du socle IA interministériel :

- Développer des fonctionnalités IA d'accès à la donnée publique
- Faire le lien avec les équipes data.gouv
- Explorer les sujets agentique & données

> **En clair :** Comment rendre les données de l'État accessibles aux IA ?

**Mon profil :** Background produit et entrepreneuriat, ancien directeur produit de Datalma.

---

## Objectifs de l'atelier

> Ce n'est **PAS** un atelier technique, mais découverte, produit et partage d'expérience.

**En 45 minutes, vous allez :**

1. Comprendre ce qu'est un MCP (et ce que ce n'est pas)
2. Voir la différence et la complémentarité avec le RAG
3. Découvrir des exemples concrets dans l'État
4. Identifier si c'est pertinent pour vos projets

---

## Sondage express

- **Question 1 :** Vous avez déjà entendu parler des MCP ?
- **Question 2 :** Vous avez déjà testé un MCP ? (Claude Desktop, Cursor, etc.)
- **Question 3 :** Vous avez un projet qui pourrait créer ou utiliser un MCP ?

---

# Partie 1 : MCP de quoi parle-t-on ?

---

## Le problème aujourd'hui

**Chaque outil = une intégration custom**

Le problème : **N clients × M outils = N×M intégrations à maintenir**

Aujourd'hui, Claude, ChatGPT, Cursor et autres clients IA doivent chacun développer leurs propres intégrations pour accéder à data.gouv et autres sources de données.

---

## La solution MCP

**Un protocole standard**

**1 standard = tout client peut parler à tout outil**

Avec MCP, tous les clients IA (Claude, ChatGPT, Cursor...) utilisent le même protocole standardisé pour accéder aux sources de données.

---

## MCP en une phrase

> **MCP = Model Context Protocol**
>
> Un standard ouvert qui permet à n'importe quelle IA de se connecter à n'importe quelle source de données ou outil.

### L'analogie : c'est l'USB de l'IA

- **Avant l'USB :** chaque périphérique avait son propre connecteur
- **Après l'USB :** un standard, tout marche partout
- **MCP** fait la même chose pour les connexions IA ↔ outils

**Gouvernance :** protocole ouvert, désormais sous la **Linux Foundation** → garantie de pérennité et de neutralité (comme Linux, Kubernetes, etc.)

---

## Comment ça marche ?

### Architecture simplifiée

```
Client IA  ←→  Serveur MCP  ←→  Ressource
```

**Exemple concret :**
```
Claude/ChatGPT/Cursor  ←→  datagouv-mcp  ←→  API data.gouv
```

- Le serveur MCP expose des "tools" que l'IA peut appeler
- Exemple : `search_datasets(query="qualité air")`

---

## RAG vs MCP : la question qui tue

> "J'ai déjà un RAG, pourquoi j'aurais besoin d'un MCP ?"

**Réponse courte :** Ce n'est pas le même problème.

---

## RAG : c'est quoi ?

**Retrieval-Augmented Generation**

```
Documents (statiques) → Vectorisation (build-time) → Base vectorielle
                                                           ↓
Question utilisateur → Recherche sémantique → Contexte + LLM → Réponse
```

### Caractéristiques :

- Données **préparées à l'avance** (indexation)
- Recherche par **similarité sémantique**
- Idéal pour les **bases de connaissances stables**

---

## MCP : comment ça marche ?

**Model Context Protocol**

```
Question utilisateur → LLM décide d'appeler un tool MCP → Appel MCP (runtime)
                                                                    ↓
                                                           API / DB (données fraîches)
```

### Caractéristiques :

- Données récupérées **en temps réel**
- Accès **direct aux sources**
- Idéal pour les **données dynamiques**

---

## Typologie des serveurs MCP

**3 grandes familles :**

| Type | Ce que ça fait | Exemples |
|------|----------------|----------|
| **Accès données** | Lire des informations | APIs publiques, bases internes, fichiers |
| **Actions** | Faire quelque chose | Créer un ticket, envoyer un mail, publier |
| **Outils** | Transformer / calculer | Conversion, validation, analyse |

> Un même serveur MCP peut **combiner plusieurs types**.

---

## Tableau comparatif RAG vs MCP

| Critère | RAG | MCP |
|---------|-----|-----|
| **Moment** | Build-time (préparé) | Runtime (temps réel) |
| **Données** | Statiques, vectorisées | Dynamiques, fraîches |
| **Fraîcheur** | Date de l'indexation | Toujours à jour |
| **Requêtes** | Sémantiques ("parle-moi de...") | Structurées ("liste-moi les X où Y") |
| **Actions** | ❌ Lecture seule | ✅ Peut agir (créer, modifier) |

---

## Exemples concrets

| Question | RAG | MCP |
|----------|-----|-----|
| "Que dit le code des marchés publics sur les seuils ?" | ✅ Parfait | ❌ |
| "Quels datasets sur data.gouv ont été mis à jour cette semaine ?" | ❌ Périmé | ✅ Parfait |
| "Résume-moi la doctrine CNIL sur les cookies" | ✅ Parfait | ❌ |
| "Crée un ticket JIRA pour ce bug" | ❌ Impossible | ✅ Parfait |

---

## Le message clé

> **RAG et MCP sont complémentaires**

| RAG | MCP |
|-----|-----|
| Connaissances stables | Données live + Actions |

### Quand utiliser MCP ?

- Si votre RAG répond "je ne sais pas" sur des données récentes → **MCP**
- Si vous voulez que l'IA agisse (pas juste réponde) → **MCP**

---

## Quiz rapide

**Votre projet a besoin de :**

1. Répondre sur la réglementation RGPD → **RAG**
2. Afficher les dernières alertes météo → **MCP**
3. Expliquer les démarches administratives → **RAG**
4. Vérifier le statut d'un dossier en cours → **MCP**
5. Les deux ensemble → **RAG + MCP** 🎯

---

# Partie 2 : Exemples dans l'État

1. **datagouv-mcp** — Un serveur MCP pour data.gouv.fr
2. **App ChatGPT data.gouv** — Preuve de l'interopérabilité
3. **POC Mediatech + MCP + Albert** — Le meilleur des deux mondes

---

## Exemple 1 : MCP officiel data.gouv

**Un serveur MCP open source pour data.gouv.fr**

🔗 [github.com/datagouv/datagouv-mcp](https://github.com/datagouv/datagouv-mcp)

### Ce qu'il fait :

- Permet à n'importe quel client IA de chercher des datasets sur data.gouv.fr
- Expose des "tools" : `search_datasets`, `get_dataset_info`...
- Données toujours **fraîches** (requêtes API en temps réel)

### Exemples de questions que l'IA peut résoudre :

- "Quels datasets sur la qualité de l'air ont été mis à jour cette semaine ?"
- "Télécharge les données de population de l'INSEE pour Paris"
- "Liste les datasets de transport les plus téléchargés"

---

## Exemple 1 : Démo MCP data.gouv dans l'Assistant IA

*[Démonstration en direct du serveur MCP data.gouv]*

---

## Exemple 2 : POC App ChatGPT data.gouv

**Une app ChatGPT pour explorer les données publiques françaises**

### 3 widgets fonctionnels :

| Widget | Ce qu'il montre | Prompt exemple |
|--------|-----------------|----------------|
| **Carte interactive** | Données géolocalisées | "Bornes de recharge à Toulouse" |
| **DVF Paris** | Prix immobilier au m² | "Prix dans le 11ème" |
| **Vaccination grippe** | Évolution campagne 2025-2026 | "Stats vaccination grippe" |

---

## Exemple 2 : Démo POC App ChatGPT data.gouv

*[Démonstration de l'App ChatGPT data.gouv avec widgets interactifs]*

---

## Exemple 3 : POC Mediatech + MCP + Albert

**Combiner le meilleur des deux mondes**

### Le problème :

- **Mediatech** = super pour la découverte sémantique des datasets
- **MCP** = super pour l'accès temps réel aux données
- Seuls, ils répondent à des besoins différents

### L'idée du POC :

- Utiliser **Mediatech** pour trouver le bon dataset (via embeddings)
- Utiliser **MCP** pour récupérer les données fraîches
- Le tout propulsé par **Albert API** (souverain)

---

## Exemple 3 : Architecture possible du POC

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Question utilisateur                        │
│         "Quelles sont les stats de vaccination COVID récentes ?"    │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           ALBERT API                                │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
              ┌─────────────────┼─────────────────┐
              ▼                                   ▼
┌─────────────────────────┐         ┌─────────────────────────┐
│       MEDIATECH         │         │      DATAGOUV-MCP       │
│  (catalogue vectorisé)  │────────►│    (accès temps réel)   │
│                         │         │                         │
│  "Quel dataset parle    │         │  "Récupère les données  │
│   de vaccination ?"     │         │   de ce dataset"        │
└─────────────────────────┘         └─────────────────────────┘
              │                                   │
              └─────────────────┬─────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Réponse contextualisée                      │
│  "Le dataset 'Données de vaccination COVID-19' (MAJ: hier)..."      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Apprentissages du POC

**Pour vos projets RAG + chatbot :**

| Situation actuelle | Avec Mediatech + MCP |
|--------------------|----------------------|
| RAG statique, données figées | Découverte sémantique + données fraîches |
| "Je ne sais pas" sur l'actualité | Accès temps réel aux sources |
| Dépendance à OpenAI/Anthropic | Stack souveraine (Albert API) |

### Ce que ça démontre :

- RAG et MCP ne sont pas concurrents → **ils se complètent**
- On peut construire des **solutions souveraines performantes**
- Le standard MCP permet l'**interopérabilité**

---

## Ce qu'on retient

**3 briques complémentaires :**

| Brique | Rôle | Exemple |
|--------|------|---------|
| **Albert API** | Inférence souveraine | LLM hébergé en France |
| **Mediatech** | Découverte sémantique | "Quel dataset pour mon besoin ?" |
| **MCP** | Accès temps réel | "Récupère les données maintenant" |

> **La vision idéale :** chaque ministère expose ses données via MCP, les agents IA y accèdent de manière standardisée, le tout propulsé par une infra souveraine.

---

# Partie 3 : Usages MCP

---

## Est-ce que MCP est pertinent pour mon projet ?

**Checklist rapide :**

| Situation | MCP pertinent ? |
|-----------|-----------------|
| Mon RAG répond "je ne sais pas" sur des données récentes | ✅ Oui |
| Je veux que l'IA agisse (pas juste réponde) | ✅ Oui |
| J'ai une API métier que je veux exposer à l'IA | ✅ Oui |
| Mes données sont stables et ne changent jamais | ❌ RAG suffit |
| Je veux juste un chatbot sur de la documentation | ❌ RAG suffit |

---

## Ressources pour aller plus loin

### Documentation

- **Site officiel :** [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **Spec technique :** [spec.modelcontextprotocol.io](https://spec.modelcontextprotocol.io)

### Exemples de serveurs MCP

- **Liste officielle :** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- **MCP data.gouv :** [github.com/datagouv/datagouv-mcp](https://github.com/datagouv/datagouv-mcp)

---

# Conclusion

---

## Vos questions

**Questions pour lancer la discussion :**

- Quels freins voyez-vous à l'adoption des MCP ?
- Quels cas d'usage envisagez-vous pour vos projets ?
- Qui a déjà expérimenté et veut partager son retour ?

> Le département IAE de la DINUM est là pour vous accompagner dans vos projets MCP.

---

## Merci !

**Benoit Vinceneux**
CPO Données & MCP @ IAE / DINUM

📧 [benoit.vinceneux@numerique.gouv.fr](mailto:benoit.vinceneux@numerique.gouv.fr)
🔗 [linkedin.com/in/benoitvinceneux](https://linkedin.com/in/benoitvinceneux/)

---

*Présentation créée pour la rencontre ALLiaNCE — Janvier 2026*
