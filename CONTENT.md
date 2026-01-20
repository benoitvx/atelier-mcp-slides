# Atelier MCP - ALLiaNCE

---

# PARTIE 1 : Introduction (3 min)

---

## Slide 1.1 - Titre

**Les MCP : connecter l'IA aux données vivantes**

Atelier ALLiaNCE - 20 Janvier 2026

Benoit Vinceneux
EIG CPO Données & MCP @ AIE / DINUM

---

## Slide 1.2 - Ma mission

**EIG CPO Données & MCP**

Depuis janvier 2026, au sein du département AIE de la DINUM :

- Piloter la brique **données & MCP** du socle IA interministériel
- Développer des fonctionnalités IA d'**accès à la donnée publique**
- Faire le lien avec les équipes **data.gouv**
- Explorer les sujets **agentique & données**

→ En clair : comment rendre les données de l'État accessibles aux IA ?

**Mon profil :** background produit et entrepreneuriat
Anciennement : Directeur Produit de la start-up d'état [Datalma](https://beta.gouv.fr/startups/datalma.html)

---

## Slide 1.3 - Objectif de l'atelier

**Ce n'est PAS un atelier technique**

C'est un atelier **découverte, produit et partage d'expérience**

**En 45 minutes :**

1. Comprendre ce qu'est un MCP (et ce que ce n'est pas)
2. Voir la différence et la complémentarité avec le RAG
3. Découvrir des exemples concrets dans l'État
4. Identifier si c'est pertinent pour vos projets

---

# PARTIE 2 : Ice breaker (5 min)

---

## Slide 2.1 - Sondage express

**Levez la main si...**

🙋 Vous avez déjà **entendu parler** des MCP ?

🙋🙋 Vous avez déjà **testé** un MCP ? (Claude Desktop, Cursor, etc.)

🙋🙋🙋 Vous avez un projet qui pourrait **créer ou utiliser** un MCP ?

→ *Pour ceux qui ont levé la main sur le 3ème point : quel projet ? On reviendra vers vous en fin d'atelier.*

---

# PARTIE 3 : Pédagogie MCP (12 min)

---

## Slide 3.1 - Le problème aujourd'hui

**Chaque outil = une intégration custom**

```
┌─────────────┐     intégration A     ┌──────────────┐
│   Claude    │◄────────────────────► │ API data.gouv│
└─────────────┘                       └──────────────┘
       │
       │        intégration B     ┌──────────────┐
       └─────────────────────────►│ Base interne │
                                  └──────────────┘

┌─────────────┐     intégration C     ┌──────────────┐
│   ChatGPT   │◄────────────────────► │ API data.gouv│
└─────────────┘                       └──────────────┘
```

**Problème :** N clients × M outils = N×M intégrations à maintenir

---

## Slide 3.2 - La solution MCP

**Un protocole standard**

```
┌─────────────┐                       ┌──────────────┐
│   Claude    │◄──┐                ┌─►│ API data.gouv│
└─────────────┘   │                │  └──────────────┘
                  │    ┌───────┐   │
┌─────────────┐   ├────┤  MCP  ├───┤  ┌──────────────┐
│   ChatGPT   │◄──┤    └───────┘   ├─►│ Base interne │
└─────────────┘   │                │  └──────────────┘
                  │                │
┌─────────────┐   │                │  ┌──────────────┐
│   Cursor    │◄──┘                └─►│ Autre outil  │
└─────────────┘                       └──────────────┘
```

**1 standard = tout client peut parler à tout outil**

---

## Slide 3.3 - MCP en une phrase

> **MCP = Model Context Protocol**
> 
> Un standard ouvert qui permet à n'importe quelle IA 
> de se connecter à n'importe quelle source de données ou outil.

**L'analogie :** c'est l'USB de l'IA

- Avant l'USB : chaque périphérique avait son propre connecteur
- Après l'USB : un standard, tout marche partout
- MCP fait la même chose pour les connexions IA ↔ outils

**Gouvernance :** protocole ouvert, désormais sous la **Linux Foundation**
→ garantie de pérennité et de neutralité (comme Linux, Kubernetes, etc.)

---

## Slide 3.4 - Comment ça marche ?

**Architecture simplifiée**

```
┌────────────────┐     ┌─────────────────┐     ┌────────────────┐
│   Client IA    │     │   Serveur MCP   │     │   Ressource    │
│                │     │                 │     │                │
│  Claude        │◄───►│  datagouv-mcp   │◄───►│  API data.gouv │
│  ChatGPT       │     │                 │     │                │
│  Cursor        │     │  Expose :       │     │                │
│  ...           │     │  - tools        │     │                │
│                │     │  - resources    │     │                │
└────────────────┘     └─────────────────┘     └────────────────┘
```

**Le serveur MCP expose des "tools" que l'IA peut appeler**

Exemple : `search_datasets(query="qualité air")`

---

## Slide 3.5 - RAG vs MCP : la question qui tue

**"J'ai déjà un RAG, pourquoi j'aurais besoin d'un MCP ?"**

Réponse courte : **ce n'est pas le même problème**

---

## Slide 3.6 - RAG : c'est quoi ?

**Retrieval-Augmented Generation**

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Documents   │────►│  Vectorisation   │────►│  Base       │
│  (statiques) │     │  (build-time)    │     │  vectorielle│
└──────────────┘     └──────────────────┘     └──────┬──────┘
                                                     │
                                                     ▼
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Question    │────►│  Recherche       │────►│  Contexte   │
│  utilisateur │     │  sémantique      │     │  + LLM      │
└──────────────┘     └──────────────────┘     └─────────────┘
```

**Caractéristiques :**
- Données **préparées à l'avance** (indexation)
- Recherche par **similarité sémantique**
- Idéal pour les **bases de connaissances stables**

---

## Slide 3.7 - MCP : comment ça marche ?

**Model Context Protocol**

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Question    │────►│  LLM décide      │────►│  Appel MCP  │
│  utilisateur │     │  d'appeler un    │     │  (runtime)  │
└──────────────┘     │  tool MCP        │     └──────┬──────┘
                     └──────────────────┘            │
                                                     ▼
                                              ┌─────────────┐
                                              │  API / DB   │
                                              │  (données   │
                                              │  fraîches)  │
                                              └─────────────┘
```

**Caractéristiques :**
- Données récupérées **en temps réel**
- Accès **direct aux sources**
- Idéal pour les **données dynamiques**

---

## Slide 3.8 - Tableau comparatif

| Critère | RAG | MCP |
|---------|-----|-----|
| **Moment** | Build-time (préparé) | Runtime (temps réel) |
| **Données** | Statiques, vectorisées | Dynamiques, fraîches |
| **Fraîcheur** | Date de l'indexation | Toujours à jour |
| **Requêtes** | Sémantiques ("parle-moi de...") | Structurées ("liste-moi les X où Y") |
| **Actions** | ❌ Lecture seule | ✅ Peut agir (créer, modifier) |

---

## Slide 3.9 - Exemples concrets

| Question | RAG | MCP |
|----------|-----|-----|
| "Que dit le code des marchés publics sur les seuils ?" | ✅ Parfait | ❌ Pas adapté |
| "Quels datasets sur data.gouv ont été mis à jour cette semaine ?" | ❌ Données périmées | ✅ Parfait |
| "Résume-moi la doctrine CNIL sur les cookies" | ✅ Parfait | ❌ Pas adapté |
| "Crée un ticket JIRA pour ce bug" | ❌ Impossible | ✅ Parfait |

---

## Slide 3.10 - Le message clé

**RAG et MCP sont complémentaires**

```
┌─────────────────────────────────────────────────────────┐
│                    Votre projet IA                      │
│                                                         │
│   ┌─────────────────┐       ┌─────────────────┐         │
│   │      RAG        │       │      MCP        │         │
│   │                 │       │                 │         │
│   │  Connaissances  │   +   │  Données live   │         │
│   │  stables        │       │  + Actions      │         │
│   └─────────────────┘       └─────────────────┘         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Si votre RAG répond "je ne sais pas" sur des données récentes → MCP**

**Si vous voulez que l'IA agisse (pas juste réponde) → MCP**

---

## Slide 3.11 - Quiz rapide

**Votre projet a besoin de :**

1. Répondre sur la réglementation RGPD → **RAG**
2. Afficher les dernières alertes météo → **MCP**
3. Expliquer les démarches administratives → **RAG**
4. Vérifier le statut d'un dossier en cours → **MCP**
5. Les deux ensemble → **RAG + MCP** 🎯

---

# PARTIE 4 : Exemples concrets dans l'État (10 min)

---

## Slide 4.1 - Titre de section

**3 exemples concrets**

1. **datagouv-mcp** : un serveur MCP pour data.gouv.fr
2. **App ChatGPT data.gouv** : preuve de l'interopérabilité
3. **POC Mediatech + MCP + Albert** : le meilleur des deux mondes

---

## Slide 4.2 - Exemple 1 : datagouv-mcp

**Un serveur MCP open source pour data.gouv.fr**

📍 https://github.com/datagouv/datagouv-mcp

**Ce qu'il fait :**
- Permet à n'importe quel client IA de chercher des datasets sur data.gouv.fr
- Expose des "tools" : `search_datasets`, `get_dataset_info`, `download_resource`...
- Données toujours fraîches (requêtes API en temps réel)

**Exemples de questions que l'IA peut résoudre :**
- "Quels datasets sur la qualité de l'air ont été mis à jour cette semaine ?"
- "Télécharge les données de population de l'INSEE pour Paris"
- "Liste les datasets de transport les plus téléchargés"

---

## Slide 4.3 - Exemple 2 : App ChatGPT data.gouv

**Une app ChatGPT pour explorer les données publiques françaises**

📍 POC en cours

**3 widgets fonctionnels :**

| Widget | Ce qu'il montre | Prompt exemple |
|--------|-----------------|----------------|
| **Carte interactive** | Données géolocalisées (bornes recharge, vélos, pharmacies) | "Montre-moi les bornes de recharge à Toulouse" |
| **DVF Paris** | Prix immobilier au m² par arrondissement | "Prix immobilier dans le 11ème" |
| **Vaccination grippe** | Évolution de la campagne 2025-2026 | "Statistiques vaccination grippe" |

---

## Slide 4.4 - Exemple 3 : POC Mediatech + MCP + Albert

**Combiner le meilleur des deux mondes**

Le problème :
- **Mediatech** = super pour la découverte sémantique des datasets
- **MCP** = super pour l'accès temps réel aux données
- Seuls, ils répondent à des besoins différents

L'idée du POC :
- Utiliser **Mediatech** pour trouver le bon dataset (via embeddings)
- Utiliser **MCP** pour récupérer les données fraîches
- Le tout propulsé par **Albert API** (souverain)

---

## Slide 4.5 - Architecture du POC

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Question utilisateur                        │
│         "Quelles sont les stats de vaccination COVID récentes ?"    │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           ALBERT API                                │
│                    (LLM souverain, hébergé FR)                      │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
              ┌─────────────────┼─────────────────┐
              ▼                                   ▼
┌─────────────────────────┐         ┌─────────────────────────┐
│       MEDIATECH         │         │      DATAGOUV-MCP       │
│  (catalogue vectorisé)  │         │    (accès temps réel)   │
│                         │         │                         │
│  "Quel dataset parle    │────────►│  "Récupère les données  │
│   de vaccination ?"     │         │   de ce dataset"        │
│                         │         │                         │
│  → data-gouv-datasets   │         │  → API data.gouv.fr     │
│    -catalog (HF)        │         │                         │
└─────────────────────────┘         └─────────────────────────┘
              │                                   │
              └─────────────────┬─────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Réponse contextualisée                      │
│  "Le dataset 'Données de vaccination COVID-19' (MAJ: hier) montre   │
│   que 85% de la population a reçu au moins une dose..."            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Slide 4.6 - Apprentissages du POC

**Pour vos projets RAG + chatbot :**

| Situation actuelle | Avec l'approche Mediatech + MCP |
|-------------------|----------------------------------|
| RAG statique, données figées | Découverte sémantique + données fraîches |
| "Je ne sais pas" sur l'actualité | Accès temps réel aux sources |
| Dépendance à OpenAI/Anthropic | Stack souveraine (Albert API) |

**Ce que ça démontre :**
- RAG et MCP ne sont pas concurrents → ils se complètent
- On peut construire des solutions souveraines performantes
- Le standard MCP permet l'interopérabilité

---

## Slide 4.7 - Ce qu'on retient

**3 briques complémentaires :**

| Brique | Rôle | Exemple |
|--------|------|---------|
| **Albert API** | Inférence souveraine | LLM hébergé en France |
| **Mediatech** | Découverte sémantique | "Quel dataset pour mon besoin ?" |
| **MCP** | Accès temps réel | "Récupère les données maintenant" |

**La vision :** chaque ministère expose ses données via MCP, les agents IA y accèdent de manière standardisée, le tout propulsé par une infra souveraine.

---

# PARTIE 5 : Qu'est-ce qu'on peut faire avec un MCP ? (8 min)

---

## Slide 5.1 - Typologie des serveurs MCP

**3 grandes familles :**

| Type | Ce que ça fait | Exemples |
|------|----------------|----------|
| **Accès données** | Lire des informations | APIs publiques, bases internes, fichiers |
| **Actions** | Faire quelque chose | Créer un ticket, envoyer un mail, publier |
| **Outils** | Transformer / calculer | Conversion, validation, analyse |

→ Un même serveur MCP peut combiner plusieurs types

---

## Slide 5.2 - Est-ce que MCP est pertinent pour mon projet ?

**Checklist rapide :**

| Situation | MCP pertinent ? |
|-----------|-----------------|
| Mon RAG répond "je ne sais pas" sur des données récentes | ✅ Oui |
| Je veux que l'IA **agisse** (pas juste réponde) | ✅ Oui |
| J'ai une **API métier** que je veux exposer à l'IA | ✅ Oui |
| Mes données sont **stables** et ne changent jamais | ❌ RAG suffit |
| Je veux juste un chatbot sur de la documentation | ❌ RAG suffit |

---

## Slide 5.3 - Ressources pour aller plus loin

**Documentation :**
- Site officiel : https://modelcontextprotocol.io
- Spec technique : https://spec.modelcontextprotocol.io

**Exemples de serveurs MCP :**
- Liste officielle : https://github.com/modelcontextprotocol/servers
- datagouv-mcp : https://github.com/datagouv/datagouv-mcp

**Contact IAE / DINUM :**
- Pour vos projets MCP dans l'État → me contacter

---

# PARTIE 6 : Q&A + partages d'expérience (7 min)

---

## Slide 6.1 - Vos questions

**On reprend les projets notés à l'ice breaker**

Questions pour lancer la discussion :
- Quels **freins** voyez-vous à l'adoption des MCP ?
- Quels **cas d'usage** envisagez-vous pour vos projets ?
- Qui a déjà expérimenté et veut **partager son retour** ?

---

## Slide 6.2 - Merci !

**Benoit Vinceneux**
EIG CPO Données & MCP @ IAE / DINUM

📧 [email]
🔗 [LinkedIn / contact]



---


