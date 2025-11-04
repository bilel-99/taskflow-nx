# TaskFlow

Une application de gestion de tâches construite avec Nx, Angular et Node.js/Express.

## 📋 Description

TaskFlow est une mini-application de démonstration qui illustre l'utilisation d'un monorepo Nx avec :

- **Frontend Angular** : Interface utilisateur moderne et réactive
- **Backend Node.js/Express** : API REST pour la gestion des tâches
- **Librairies partagées** : Code réutilisable entre les applications

## 🏗️ Architecture

```
taskflow/
├── apps/
│   ├── taskflow-frontend/    # Application Angular
│   └── taskflow-api/          # API Node.js Express
├── libs/
│   ├── data-models/           # Interfaces & types partagés
│   ├── ui-components/         # Composants Angular réutilisables
│   └── utils/                 # Fonctions utilitaires
```

## ✨ Fonctionnalités

- ✅ Créer une tâche avec titre, description et date limite
- ✅ Afficher la liste des tâches (en cours et terminées)
- ✅ Marquer une tâche comme terminée/non terminée
- ✅ Supprimer une tâche
- ✅ Statistiques en temps réel
- ✅ Interface moderne et responsive

## 🛠️ Technologies

- **Nx** : Monorepo et outils de build
- **Angular 19+** : Framework frontend
- **Node.js + Express** : Backend API
- **TypeScript** : Langage de programmation
- **RxJS** : Programmation réactive

## 🚀 Démarrage

### Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install
```

### Lancement

**Démarrer le backend (API) :**

```bash
npx nx serve taskflow-api
```

L'API sera accessible sur `http://localhost:3000`

**Démarrer le frontend (dans un autre terminal) :**

```bash
npx nx serve taskflow-frontend
```

L'application sera accessible sur `http://localhost:4200`

### Build

**Build du backend :**

```bash
npx nx build taskflow-api
```

**Build du frontend :**

```bash
npx nx build taskflow-frontend
```

**Build de toutes les librairies :**

```bash
npx nx run-many --target=build --projects=data-models,ui-components,utils
```

## 📦 Librairies

### data-models

Contient les interfaces et types TypeScript partagés :

- `Task` : Interface de tâche
- `CreateTaskDto` : DTO pour créer une tâche
- `UpdateTaskDto` : DTO pour mettre à jour une tâche

### ui-components

Composants Angular réutilisables :

- `TaskCardComponent` : Carte d'affichage d'une tâche

### utils

Fonctions utilitaires :

- `formatDate()` : Formatage de dates
- `isPastDue()` : Vérification d'échéance
- `daysUntil()` : Calcul de jours restants
- `generateId()` : Génération d'identifiants

## 🧪 Tests

**Lancer les tests :**

```bash
# Tests unitaires
npx nx test taskflow-frontend
npx nx test taskflow-api
npx nx test data-models
npx nx test ui-components
npx nx test utils

# Tous les tests
npx nx run-many --target=test --all
```

## 📊 Graph de dépendances

Visualisez les dépendances entre les projets :

```bash
npx nx graph
```

## 🎯 Scripts utiles

```bash
# Linter
npx nx lint taskflow-frontend
npx nx lint taskflow-api

# Formater le code
npx nx format:write

# Vérifier les dépendances
npx nx affected:graph
```

## 📝 API Endpoints

### GET /api/tasks

Récupère toutes les tâches

### GET /api/tasks/:id

Récupère une tâche spécifique

### POST /api/tasks

Crée une nouvelle tâche

**Body :**

```json
{
  "title": "Titre",
  "description": "Description",
  "dueDate": "2025-11-10"
}
```

### PUT /api/tasks/:id

Met à jour une tâche

**Body :**

```json
{
  "title": "Nouveau titre",
  "completed": true
}
```

### DELETE /api/tasks/:id

Supprime une tâche

## 🤝 Contribution

Ce projet est une démonstration. N'hésitez pas à l'utiliser comme base pour vos propres projets !

## 📄 Licence

MIT

---

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

Créé avec ❤️ en utilisant [Nx](https://nx.dev)

````

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To install a new plugin you can use the `nx add` command. Here's an example of adding the React plugin:
```sh
npx nx add @nx/react
````

Use the plugin's generator to create new projects. For example, to create a new React app or library:

```sh
# Generate an app
npx nx g @nx/react:app demo

# Generate a library
npx nx g @nx/react:lib some-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
