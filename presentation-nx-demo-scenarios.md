# 🎯 Scénarios de Démo Nx - TaskFlow (Version 12 Slides)

> 🎬 **Démo Live : 30 minutes** (5 scénarios de 6 minutes chacun)
>
> Cette démo suit la présentation condensée de 12 slides (30 minutes)

## 📋 Architecture du Projet

**TaskFlow** est un monorepo Nx avec :

- 🎨 **Frontend** : Application Angular (`taskflow-frontend`)
- 🔌 **API** : Backend Express (`taskflow-api`)
- 📚 **3 Libraries** : `data-models`, `ui-components`, `utils`
- 🧪 **Tests E2E** : Playwright + Jest
- ☁️ **Nx Cloud** : Configuré (ID: `6909f2504beabea108ef73ba`)

---

## 🎭 Vue d'ensemble de la Démo (30 minutes)

| Scénario                 | Durée | Objectif                                     | Temps cumulé  |
| ------------------------ | ----- | -------------------------------------------- | ------------- |
| 1. Explorer le workspace | 6 min | Comprendre la structure du monorepo          | 0:00 - 6:00   |
| 2. Développement local   | 6 min | Lancer et développer l'application           | 6:00 - 12:00  |
| 3. Cache en action       | 6 min | Voir les gains de performance spectaculaires | 12:00 - 18:00 |
| 4. Affected commands     | 6 min | Optimiser le CI/CD avec les affected         | 18:00 - 24:00 |
| 5. Nx Cloud dashboard    | 6 min | Analytics et cache distribué                 | 24:00 - 30:00 |

---

## 🎯 Préparation avant la Démo

### Checklist de préparation

```bash
# 1. Vérifier que le workspace fonctionne
npm install

# 2. Vider le cache pour des démos propres
npx nx reset

# 3. S'assurer que Nx Cloud est connecté
cat nx.json | grep nxCloudId

# 4. Tester le graphe
npx nx graph

# 5. Préparer 2-3 terminaux
# - Terminal 1 : Commandes Nx principales
# - Terminal 2 : Commandes parallèles (optionnel)
# - Terminal 3 : Serveurs dev (optionnel)

# 6. Avoir le dashboard Nx Cloud ouvert dans un navigateur
# https://cloud.nx.app
```

### 💡 Conseils pour la démo

- ✅ **6 minutes par scénario** : C'est court, restez focalisé
- ✅ **Expliquer avant d'exécuter** : Dire ce qu'on va faire
- ✅ **Montrer les résultats** : Laisser le temps de voir les outputs
- ✅ **Comparer** : Toujours montrer avant/après
- ✅ **Pas de panique** : Si un bug survient, restez calme et passez au suivant

### ⚠️ Pièges à éviter

- ❌ Ne pas aller trop vite (6 min = confortable)
- ❌ Ne pas lancer trop de commandes à la fois
- ❌ Ne pas minimiser les gains ("300x" est impressionnant !)
- ❌ Ne pas oublier de montrer le graphe visuel

---

## 🎬 SCÉNARIO 1 : Explorer le Workspace (6 minutes)

### 🎯 Objectif

Comprendre la structure du monorepo, découvrir les projets et visualiser les dépendances.

### 📝 Script de démonstration

**1. Présentation de la structure (1 min 30)**

```bash
# Lister tous les projets du workspace
npx nx show projects

# Résultat attendu :
# - taskflow-frontend
# - taskflow-frontend-e2e
# - taskflow-api
# - taskflow-api-e2e
# - data-models
# - ui-components
# - utils
```

**💬 Speech :**  
_"Nous avons 7 projets : 4 applications et 3 librairies partagées. Regardez la structure."_

```bash
# Voir la structure des dossiers
ls -la apps/
ls -la libs/
```

**💬 Speech :**  
_"Applications dans `apps/`, librairies dans `libs/`. C'est la convention Nx."_

---

**2. Visualiser le graphe complet (3 min)**

```bash
# Ouvrir le graphe interactif complet
npx nx graph
```

**💬 Speech :**  
_"Voici le graphe de dépendances. Vous voyez `data-models` au centre ? C'est parce qu'il est partagé entre le frontend et le backend. C'est la single source of truth dont je parlais."_

**Dans le navigateur, montrer :**

- Les 7 projets
- Les relations entre eux
- Cliquer sur `data-models` pour voir qui en dépend
- Montrer que frontend ET backend utilisent data-models

---

**3. Focus sur un projet spécifique (1 min 30)**

```bash
# Focus sur le frontend
npx nx graph --focus=taskflow-frontend
```

**💬 Speech :**  
_"Avec `--focus`, je peux zoomer sur un seul projet. Ici, le frontend dépend clairement de `data-models` et `ui-components`."_

---

### ✅ Points clés à souligner

✅ **7 projets** : 4 apps + 3 libs  
✅ **Organisation claire** : `apps/` vs `libs/`  
✅ **Graphe interactif** : Visualisation immédiate  
✅ **Single source of truth** : data-models partagé  
✅ **Navigation facile** : Focus sur un projet

---

## 🎬 SCÉNARIO 2 : Développement Local (6 minutes)

### 🎯 Objectif

Lancer l'application en local et montrer le workflow de développement fluide.

### 📝 Script de démonstration

**1. Détails d'un projet (1 min)**

```bash
# Voir la configuration complète du frontend
npx nx show project taskflow-frontend

# Résultat : liste des targets disponibles
# - build, serve, test, lint, etc.
```

**💬 Speech :**  
_"Chaque projet a des 'targets' : build, serve, test, lint. Nx sait comment exécuter chacune de ces tâches. Voyons le serve."_

---

**2. Lancer le frontend (2 min)**

```bash
# Démarrer le serveur de développement
npx nx serve taskflow-frontend

# Accéder à http://localhost:4200
```

**💬 Speech :**  
_"Je lance le frontend. Nx a automatiquement buildé les dépendances nécessaires : `data-models` et `ui-components`. L'application démarre sur le port 4200."_

**Montrer rapidement l'interface dans le navigateur.**

---

**3. Lancer l'API en parallèle (2 min)**

```bash
# Dans un autre terminal (ou en arrière-plan)
npx nx serve taskflow-api &

# API disponible sur http://localhost:3333/api
```

**💬 Speech :**  
_"Je peux lancer l'API en parallèle. Les deux s'exécutent simultanément. C'est l'intérêt du monorepo : tout est au même endroit."_

**Tester un endpoint de l'API (optionnel) :**

```bash
curl http://localhost:3333/api
```

---

**4. Hot reload (1 min)**

```bash
# Modifier un fichier dans ui-components
# Par exemple : libs/ui-components/src/lib/button/button.component.ts
# Ajouter un commentaire ou changer un style

# Observer le hot reload automatique dans le navigateur
```

**💬 Speech :**  
_"Si je modifie un composant dans `ui-components`, Nx détecte le changement et recharge automatiquement. Le workflow est fluide."_

---

### ✅ Points clés à souligner

✅ **Targets préconfigurés** : serve, build, test, lint  
✅ **Dépendances automatiques** : Nx build les libs nécessaires  
✅ **Développement parallèle** : Frontend + API simultanément  
✅ **Hot reload** : Rechargement automatique  
✅ **Workflow fluide** : Pas de configuration manuelle

---

## 🎬 SCÉNARIO 3 : Cache en Action (6 minutes)

### 🎯 Objectif

Démontrer le cache intelligent et les gains de performance spectaculaires (300x).

### 📝 Script de démonstration

**1. Vider le cache (30 sec)**

```bash
# Arrêter les serveurs dev (Ctrl+C)

# Vider le cache Nx
npx nx reset

# Confirmer
ls .nx/cache  # Dossier vide

rm -rf .nx/cache
```

**💬 Speech :**  
_"Je vide le cache pour partir de zéro."_

---

**2. Premier build SANS cache (2 min)**

```bash
# Mesurer le temps du premier build du frontend
time npx nx build taskflow-frontend --skip-nx-cache

# Résultat attendu : ~20-30 secondes
# Exemple : 28.5s
```

**💬 Speech :**  
_"Premier build sans cache : environ 30 secondes. C'est normal, Nx doit tout compiler."_

**Attendre que le build se termine, montrer le temps.**

---

**3. Deuxième build AVEC cache (2 min)**

```bash
# Relancer exactement le même build
time npx nx build taskflow-frontend

# Résultat attendu : ~0.1 seconde !
# Exemple : 0.12s
```

**💬 Speech :**  
_"Deuxième build : 0.1 seconde ! C'est **300 fois plus rapide**. Nx a récupéré le résultat depuis le cache."_

**Montrer le temps, insister sur le gain.**

---

**4. Build après modification (1 min 30)**

```bash
# Modifier un fichier dans une lib
echo "// Modification test 2" >> libs/utils/src/lib/utils.ts

# Rebuilder le frontend
time npx nx build taskflow-frontend

# Résultat : cache hit pour les libs non modifiées
```

**💬 Speech :**  
_"J'ai modifié `utils`. Regardez : seuls les projets qui dépendent de `utils` sont rebuildés. Le reste vient du cache."_

---

### ✅ Points clés à souligner

✅ **300x plus rapide** : 30s → 0.1s avec cache  
✅ **Cache intelligent** : Hash basé sur code + dépendances  
✅ **Rebuild sélectif** : Seul ce qui change est rebuild  
✅ **Cache local** : Stocké dans `.nx/cache`  
✅ **Productivité** : Feedback instantané

### 📊 Tableau comparatif

| Build                  | Temps | Cache Hit |
| ---------------------- | ----- | --------- |
| 1er build (sans cache) | ~30s  | 0%        |
| 2e build (cache local) | ~0.1s | 100%      |
| Après modif utils      | ~10s  | 60%       |

---

## 🎬 SCÉNARIO 4 : Affected Commands (6 minutes)

### 🎯 Objectif

Montrer comment Nx optimise le CI/CD en ne testant/buildant que ce qui a changé.

### 📝 Script de démonstration

**1. État initial (1 min)**

```bash
# Vérifier la branche
git branch

# Voir les projets affectés par rapport à main
npx nx show projects --affected --base=main

# Résultat : probablement aucun si pas de changement
```

**💬 Speech :**  
_"Nx peut détecter automatiquement quels projets sont affectés par mes changements."_

---

**2. Modifier une library centrale (2 min)**

```bash
# Modifier data-models (utilisé par tout le monde)
echo "export const APP_VERSION = '2.0.0';" >> libs/data-models/src/lib/data-models.ts

# Voir les projets affectés
npx nx show projects --affected --base=main --exclude='*-e2e'

# Résultat attendu : 4 projets
# - data-models
# - taskflow-frontend
# - taskflow-api
# - ui-components
```

**💬 Speech :**  
_"J'ai modifié `data-models`. Nx détecte que 4 projets sont affectés : data-models, le frontend, l'API, et ui-components."_

---

**3. Visualiser dans le graphe (1 min)**

```bash
# Voir le graphe des projets affectés
npx nx graph --affected --base=main
```

**💬 Speech :**  
_"Le graphe montre les 4 projets affectés en surbrillance. C'est très visuel."_

---

**4. Build des affected seulement (2 min)**

```bash
# Builder uniquement les projets affectés
npx nx affected -t build --base=main

# Résultat : seulement 4 projets sont buildés au lieu de 7
```

**💬 Speech :**  
_"Avec `nx affected -t build`, je ne build que les 4 projets affectés. Au lieu de builder tous les 7 projets, j'économise 60% du temps. C'est exactement ce qu'on fait dans notre CI/CD !"_

**Montrer le temps d'exécution, comparer avec un build complet.**

---

### ✅ Points clés à souligner

✅ **Détection Git automatique** : Compare avec la branche de base  
✅ **Analyse de dépendances** : Calcul intelligent de l'impact  
✅ **60-70% de temps gagné** : Ne teste que le nécessaire  
✅ **CI/CD optimisé** : Pipeline ultra-rapide  
✅ **Visualisation** : Graphe des affected

### 📊 Gain de temps

| Scénario                | Projets affectés | Temps (avec cache)  |
| ----------------------- | ---------------- | ------------------- |
| Modif data-models       | 4/7 (57%)        | ~40% du temps total |
| Modif taskflow-api seul | 1/7 (14%)        | ~15% du temps total |
| Aucune modif            | 0/7 (0%)         | 0s (cache 100%)     |

---

## 🎬 SCÉNARIO 5 : Nx Cloud Dashboard (6 minutes)

### 🎯 Objectif

Montrer le cache distribué et les analytics de Nx Cloud.

### 📝 Script de démonstration

**1. Introduction (30 sec)**

```bash
# Vérifier la connexion Nx Cloud
cat nx.json | grep nxCloudId

# Résultat : "nxCloudId": "6909f2504beabea108ef73ba"
```

**💬 Speech :**  
_"Notre workspace est connecté à Nx Cloud. Ouvrons le dashboard."_

---

**2. Ouvrir le dashboard (1 min)**

```bash
# Accéder au dashboard
# https://cloud.nx.app

# Ou lancer depuis la CLI
npx nx view-logs
```

**💬 Speech :**  
_"Voici le dashboard Nx Cloud où toute l'équipe peut voir les performances."_

---

**3. Analytics - Vue d'ensemble (2 min)**

**Dans le dashboard, montrer :**

**📊 Statistiques générales :**

- Nombre total de builds
- Taux de cache hit moyen (ex : 85%)
- Temps économisé total
- Projets les plus buildés

**💬 Speech :**  
_"Notre taux de cache hit est de 85%. Ça signifie que 85% des tâches viennent du cache. Regardez le temps économisé : plusieurs heures par semaine pour l'équipe !"_

---

**4. Cache distribué en action (1 min 30)**

**💬 Speech :**  
_"La magie du cache distribué : si un développeur ou la CI a déjà fait un build, tous les autres récupèrent le résultat depuis Nx Cloud. Plus besoin de rebuilder !"_

**Montrer un exemple de run avec cache hit dans le dashboard.**

---

**5. Run Details (1 min)**

**Dans le dashboard :**

- Cliquer sur un run récent
- Montrer les détails :
  - Tâches exécutées
  - Cache hits/misses
  - Temps d'exécution
  - Logs

**💬 Speech :**  
_"Pour chaque exécution, on voit le détail complet : quelles tâches, lesquelles sont venues du cache, et les logs. Parfait pour débugger."_

---

### ✅ Points clés à souligner

✅ **Cache distribué** : Partagé entre équipe et CI  
✅ **Analytics** : Taux de cache hit, temps économisé  
✅ **Run Details** : Traçabilité complète  
✅ **DTE** : Distribution des tâches (mentionner brièvement)  
✅ **Collaboration** : Tout le monde bénéficie du travail de chacun

### 📊 Gains avec Nx Cloud

| Métrique                | Sans Nx Cloud | Avec Nx Cloud | Gain    |
| ----------------------- | ------------- | ------------- | ------- |
| Dev 1 build             | 30s           | 30s           | 0%      |
| Dev 2 build (même code) | 30s           | 0.1s          | **99%** |
| Pipeline CI (affected)  | 15 min        | 5 min         | **66%** |

---

## 🎉 Conclusion de la Démo (Intégrée dans le slide final)

### 📊 Récapitulatif des 5 scénarios

**Ce que nous avons vu :**

1. ✅ **Explorer le workspace** - Structure claire, graphe interactif
2. ✅ **Développement local** - Workflow fluide, hot reload
3. ✅ **Cache intelligent** - **300x plus rapide**
4. ✅ **Affected commands** - **60-70% de temps gagné** en CI/CD
5. ✅ **Nx Cloud** - Cache distribué, analytics

### 💰 ROI rappel

- **150 000€ d'économies par an** (équipe de 10 devs)
- **Retour sur investissement < 1 mois**
- **+40% de productivité**

### ❓ Questions ?

**Ressources :**

- 🌐 https://nx.dev
- 💬 Discord : https://go.nx.dev/community
- 📝 GitHub : https://github.com/nrwl/nx

**Merci ! 🎉**

---

## 🚀 Aide-Mémoire : Commandes Essentielles

### Scénario 1 : Explorer

```bash
npx nx show projects
npx nx graph
npx nx graph --focus=taskflow-frontend
```

### Scénario 2 : Dev local

```bash
npx nx show project taskflow-frontend
npx nx serve taskflow-frontend
npx nx serve taskflow-api
```

### Scénario 3 : Cache

```bash
npx nx reset
time npx nx build taskflow-frontend
time npx nx build taskflow-frontend  # 2e fois
```

### Scénario 4 : Affected

```bash
npx nx show projects --affected --base=main
npx nx graph --affected --base=main
npx nx affected -t build --base=main
```

### Scénario 5 : Nx Cloud

```bash
cat nx.json | grep nxCloudId
npx nx view-logs
# Ouvrir https://cloud.nx.app
```

---

**✨ Bonne démo ! 🚀**
