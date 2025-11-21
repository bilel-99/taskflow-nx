---
marp: true
theme: default
paginate: true
backgroundColor: #fff
style: |
  /* Generali Brand Colors */
  :root {
    --generali-red: #B91D1D;
    --generali-dark-red: #8B0000;
    --generali-gray: #58595B;
    --generali-light-gray: #E6E7E8;
    --generali-white: #FFFFFF;
  }

  /* Global Section Styling */
  section {
    font-size: 18px;
    font-family: 'Arial', 'Helvetica', sans-serif;
    color: var(--generali-gray);
    padding: 40px 50px;
    line-height: 1.4;
    overflow: hidden;
  }

  /* Header - Logo Generali */
  header {
    position: absolute;
    top: 15px;
    right: 30px;
    width: 120px;
    height: 120px;
    z-index: 1000;
  }

  section::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 30px;
    width: 120px;
    height: 120px;
    background-image: url('./presentation-assets/logo-generali.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 999;
  }

  /* Footer - Page Number with Generali Style */
  section::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, var(--generali-red) 0%, var(--generali-dark-red) 100%);
  }

  /* Titles */
  h1 {
    color: var(--generali-red);
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 15px;
    border-bottom: 3px solid var(--generali-red);
    padding-bottom: 10px;
  }

  h2 {
    color: var(--generali-red);
    font-size: 26px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  h3 {
    color: var(--generali-gray);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  /* Lead slides (title slides) */
  section.lead {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(135deg, var(--generali-white) 0%, var(--generali-light-gray) 100%);
  }

  section.lead h1 {
    font-size: 48px;
    border-bottom: none;
    padding-bottom: 0;
  }

  section.lead h2 {
    color: var(--generali-gray);
    font-size: 28px;
    font-weight: 400;
  }

  /* Lists */
  ul, ol {
    margin-left: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.4;
  }

  /* Strong emphasis with Generali red */
  strong {
    color: var(--generali-red);
    font-weight: bold;
  }

  /* Tables */
  table {
    font-size: 16px;
    border-collapse: collapse;
    width: 100%;
    margin: 15px 0;
  }

  thead {
    background: var(--generali-red);
    color: white !important;
  }

  th {
    padding: 10px;
    text-align: left;
    font-weight: bold;
    font-size: 17px;
    color: white !important;
    background: var(--generali-red);
  }

  td {
    padding: 8px 10px;
    border-bottom: 1px solid var(--generali-light-gray);
  }

  tr:nth-child(even) {
    background: #F9F9F9;
  }

  tr:hover {
    background: var(--generali-light-gray);
  }

  /* Code blocks */
  code {
    background: var(--generali-light-gray);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    color: var(--generali-dark-red);
    font-size: 16px;
  }

  pre {
    background: #2B2B2B;
    color: #F8F8F2;
    padding: 12px;
    border-radius: 6px;
    overflow-x: auto;
    border-left: 3px solid var(--generali-red);
    font-size: 15px;
    margin: 10px 0;
  }

  pre code {
    background: transparent;
    color: #F8F8F2;
    padding: 0;
  }

  /* Blockquotes */
  blockquote {
    border-left: 3px solid var(--generali-red);
    padding-left: 15px;
    margin: 12px 0;
    font-style: italic;
    color: var(--generali-gray);
  }

  /* Links */
  a {
    color: var(--generali-red);
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Pagination styling */
  section[data-marpit-pagination]::after {
    color: var(--generali-gray);
    font-size: 18px;
    bottom: 25px;
    right: 40px;
  }

  /* Emojis and icons sizing */
  img[alt*="emoji"], img[alt*="icon"] {
    height: 1.2em;
    vertical-align: middle;
  }

  /* Checkmarks and icons in green */
  section :is(ul, ol) li::marker {
    color: var(--generali-red);
  }
---

<!-- _class: lead -->

# Nx : La Solution Moderne pour les Monorepos

## Améliorer la productivité et la scalabilité de vos projets

**Démo : Application TaskFlow**

- Frontend Angular + Backend Node.js + Librairies partagées
- Monorepo complet avec 4 apps et 3 libs

**Durée :** 30 min présentation + 30 min démo

---

# Agenda de la Session

## 📊 Partie 1 : Présentation Nx (30 min)

1. **Introduction & Les 3 piliers** - Définition, monorepo structuré, cache, affected
2. **Architecture TaskFlow** - Structure du monorepo et flux de dépendances
3. **Problèmes résolus** - Avant vs Après Nx
4. **Graphe de dépendances** - Visualisation et analyse d'impact
5. **Cache intelligent** - Gains de performance 300x
6. **Affected commands** - Optimisation CI/CD (60-70% de gain)
7. **Nx Cloud** - Cache distribué et analytics
8. **ROI** - 150k€ d'économies par an
9. **Conclusion** - Récapitulatif et prochaines étapes

## 🎬 Partie 2 : Démo Live (30 min)

Explorer workspace • Dev local • Cache • Affected • Nx Cloud

---

# Qu'est-ce que Nx ?

## Définition

- **Framework de build intelligent** pour monorepos
- Créé par **Nrwl** (ex-développeurs Angular chez Google)
- Open-source : **23k+ ⭐** sur GitHub
- Support : Angular, React, Vue, Node.js, etc.

## Les 3 Piliers Fondamentaux

**1. 🏗️ Monorepo structuré**

- Organisation `apps/` et `libs/` - Code partagé facilement

**2. ⚡ Cache intelligent**

- Builds **300x plus rapides** - Cache local + distribué (Nx Cloud)

**3. 🎯 Affected commands**

- Build/test uniquement ce qui a changé - **60-70% de réduction** du temps CI/CD

---

# Architecture TaskFlow : Structure du Monorepo

## Applications (4)

```
apps/
├── taskflow-frontend/         # Angular (Interface utilisateur)
├── taskflow-frontend-e2e/     # Tests E2E Playwright
├── taskflow-api/              # Express API (Node.js)
└── taskflow-api-e2e/          # Tests API Jest
```

## Librairies partagées (3)

```
libs/
├── data-models/               # Types TypeScript communs
├── ui-components/             # Composants Angular réutilisables
└── utils/                     # Fonctions utilitaires
```

## Flux de Dépendances

**Frontend :** `data-models` + `ui-components` | **Backend :** `data-models` + `utils`

**→ Single source of truth** pour les types entre frontend et backend !

---

# Les Problèmes Résolus par Nx

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">

<div>

## ❌ Avant Nx

- Code dupliqué entre repositories
- Impossible de partager du code
- Pas de visibilité sur dépendances
- Tout rebuilder à chaque fois
- Difficile de coordonner changements

**Exemple :** Types `Task` définis 2 fois
→ Risque désynchronisation

</div>

<div>

## ✅ Avec Nx

- Tout le code au même endroit
- Librairies partagées (data-models, ui-components, utils)
- Graphe de dépendances interactif
- Cache : builds instantanés
- Affected : tester uniquement ce qui change
- Une seule version par dépendance

**Exemple :** Type `Task` défini 1 fois
→ Changement propagé automatiquement

</div>

</div>

---

# Graphe de Dépendances : Visualisation & Analyse

## Le Graphe Interactif

**Visualisation complète** de tous les projets et leurs relations

- Identification des dépendances circulaires
- Compréhension de l'architecture
- **Analyse d'impact en temps réel**

## Dans TaskFlow

- `data-models` **au centre** (partagé par tout le monde)
- `taskflow-frontend` dépend de `data-models` + `ui-components`
- `taskflow-api` dépend de `data-models` + `utils`

## Cas d'usage

**Scénario 1 :** Je modifie `data-models` → 4 projets affectés (frontend, api, ui-components, data-models)

**Scénario 2 :** Je modifie `taskflow-api` → Impact limité au backend, frontend ignoré ✅

**Commandes :** `nx graph` • `nx graph --focus=taskflow-frontend` • `nx affected:graph`

---

# Cache Intelligent : Performance 300x

## Comment ça fonctionne ?

**1. Nx calcule un hash** basé sur : Code source • Dépendances • Configuration • Variables env

**2. Vérification du cache**

- Hash identique → Résultat en cache ✅ Instantané !
- Hash différent → Exécution de la tâche 🔄

**3. Deux niveaux de cache**

- **Local** : Sur votre machine
- **Distribué** (Nx Cloud) : Partagé entre équipe et CI

## Gains de Performance Mesurés

| Tâche           | Sans cache | Avec cache | Gain        |
| --------------- | ---------- | ---------- | ----------- |
| Build frontend  | 30s        | 0.1s       | **300x** ⚡ |
| Tests unitaires | 15s        | 0.1s       | **150x** ⚡ |
| Lint            | 5s         | 0.05s      | **100x** ⚡ |

**Avec Nx Cloud :** Si la CI a déjà build, tous les devs bénéficient du cache !

---

# Affected Commands : Optimiser le CI/CD

## Le Problème

**CI/CD classique sur monorepo :**
❌ Tout rebuilder/tester à chaque commit → 15-30 minutes
❌ Gaspillage de ressources → Feedback lent

## La Solution Nx

Nx analyse votre commit et détecte automatiquement les projets affectés

## Scénarios Réels avec TaskFlow

| Modification                   | Projets affectés | Action Nx                  |
| ------------------------------ | ---------------- | -------------------------- |
| `data-models`                  | 4 projets        | Build/test ces 4 projets   |
| `taskflow-api`                 | 2 projets        | Build/test ces 2 projets   |
| `taskflow-frontend/styles.css` | 1 projet         | Build ce projet uniquement |

**Commandes :** `nx show projects --affected` • `nx affected:graph` • `nx affected -t build test lint --parallel=3`

## Impact Mesurable

**Avant Nx :** 25-30 min | **Avec Nx Affected :** 5-10 min → **60-70% de réduction** 🚀

---

# Nx Cloud : Cache Distribué & Analytics

## Qu'est-ce que Nx Cloud ?

Service cloud officiel de Nx :

- **Cache distribué** partagé entre tous les devs et la CI
- **Distributed Task Execution (DTE)** - Parallélisation massive
- **Analytics et insights** - Optimisation des performances
- **Intégration GitHub/GitLab/Bitbucket** - Commentaires sur PR

## Le Pouvoir du Cache Distribué

**Développeur A** build le frontend : `30s` → Stocké dans Nx Cloud
**Développeur B** (même code) : `0.1s` (cache hit) ⚡
**Pipeline CI** (même code) : `0.1s` (cache hit) ⚡

**→ Tout le monde bénéficie du travail de chacun !**

## Fonctionnalités Avancées

**📊 Analytics Dashboard :** Performances, taux de cache hit, bottlenecks
**🔄 DTE :** Distribution sur N agents → **Gain jusqu'à 90% du temps CI**
**🎯 Intégration PR :** Commentaires automatiques, liens vers logs

---

# Nx Cloud : Plans Tarifaires & ROI

## Plans Disponibles

<br>

| Plan           | Prix          | Utilisateurs | Cache       | DTE                 | Support           |
| :------------- | :------------ | :----------- | :---------- | :------------------ | :---------------- |
| **Hobby**      | **Gratuit**   | Illimités    | ✅ 50GB     | ❌                  | Community         |
| **Pro**        | **$49/mois**  | Illimités    | ✅ 500GB    | ✅ 2 agents         | Email             |
| **Enterprise** | **Sur devis** | Illimités    | ✅ Illimité | ✅ Agents illimités | Prioritaire + TAM |

<br>

## 💼 Recommandation pour Generali

**Plan Enterprise** - Adapté pour :

- Grande équipe (100+ développeurs)
- Sécurité & conformité renforcées
- Cache distribué illimité
- DTE avec agents illimités → Pipeline 10x plus rapide
- Support prioritaire + Technical Account Manager
- **Coût estimé : ~2000€/mois** vs **Économies : 150 000€/an** → **ROI < 1 mois**

---

# Le ROI de Nx : Exemple Concret

## Équipe de 10 développeurs

<table style="width: 100%; border: none;">
<tr style="vertical-align: top;">
<td style="width: 48%; border: none; padding-right: 2%;">

### ❌ Sans Nx

| Poste                 | Coût                  |
| :-------------------- | :-------------------- |
| CI/CD : 30 min/commit | 50 commits/j = 25h CI |
| Infrastructure CI/CD  | ~1000€/mois           |
| Temps attente devs    | 5h/j = ~15 000€/mois  |
| **TOTAL**             | **~16 000€/mois**     |

</td>
<td style="width: 48%; border: none; padding-left: 2%;">

### ✅ Avec Nx Enterprise

| Poste                 | Coût                   |
| :-------------------- | :--------------------- |
| CI/CD : 8 min/commit  | 50 commits/j = 6h40 CI |
| Infra + Nx Enterprise | ~2000€/mois            |
| Temps attente devs    | 1h/j = ~3 000€/mois    |
| **TOTAL**             | **~5 000€/mois**       |

</td>
</tr>
</table>

## 💰 ROI pour Generali

**Économie mensuelle : 11 000€** | **Économie annuelle : 132 000€** | **ROI : < 1 mois**

---

# Bénéfices Mesurables & Impact

## Performance

- ⚡ **70%** de réduction du temps CI/CD
- ⚡ Builds jusqu'à **300x** plus rapides
- ⚡ **50%** de réduction des ressources d'infrastructure

## Productivité

- 🚀 **+40%** de productivité développeur
- 🚀 Feedback instantané (cache)
- 🚀 Moins de contexte switching

## Qualité

- ✅ Architecture claire et maintenable
- ✅ Code partagé = moins de duplication
- ✅ Tests automatisés sur tout changement

## Bénéfices Non-Quantifiables

😊 Meilleure expérience développeur • 🤝 Collaboration facilitée • 📈 Scalabilité pour la croissance • 🛡️ Moins de dette technique

---

<!-- _class: lead -->

# Récapitulatif : Nx en 3 Points Clés

---

# 1. 🏗️ Architecture Moderne

- Monorepo structuré et scalable
- Graphe de dépendances interactif
- Code partagé entre apps (frontend ↔️ backend)

# 2. ⚡ Performance Exceptionnelle

- Cache intelligent (local + cloud)
- Affected commands : **60-70% de temps gagné**
- Builds jusqu'à **300x plus rapides**

# 3. 🚀 ROI Prouvé

- Économie de **150 000€/an** (équipe de 10 devs)
- Retour sur investissement **< 1 mois**
- Productivité **+40%**

---

# Ce que TaskFlow Démontre & Prochaines Étapes

## ✓ TaskFlow en Action

**4 applications** : frontend, api, tests E2E
**3 librairies** partagées entre frontend et backend
**Types communs** : pas de duplication, pas de désynchronisation
**Cache efficace** : 0.1s au lieu de 30s
**CI/CD optimisé** : affected commands

## 📅 Prochaines Étapes Recommandées

**Court terme (2-4 semaines) :** Analyse du projet • Identification modules réutilisables • POC avec module pilote

**Moyen terme (2-3 mois) :** Migration progressive vers Nx • Création librairies partagées • Setup CI/CD avec affected • Activation Nx Cloud

**Long terme :** Optimisation continue • Formation équipe • Expansion du monorepo

## 🎯 Actions Immédiates

`npx create-nx-workspace@latest demo-nx` • 📚 https://nx.dev • 💬 Discord communauté

---

<!-- _class: lead -->

# Place à la Démo Live ! 🚀

## 5 scénarios pratiques (30 minutes)

1. **Explorer le workspace** - Comprendre la structure
2. **Développement local** - Lancer l'application
3. **Cache intelligent** - Voir les gains de performance
4. **Affected commands** - Optimiser le CI
5. **Nx Cloud dashboard** - Analytics et insights

---

<!-- _class: lead -->

# Questions ? 🎉

**Ressources :**

- 🌐 https://nx.dev
- 💬 Discord : https://go.nx.dev/community
- 📝 GitHub : https://github.com/nrwl/nx
- 📧 Support : support@nrwl.io

**Merci pour votre attention !**
