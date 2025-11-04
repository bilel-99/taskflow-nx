# Instructions

## Vue d'ensemble

Nom de l'application : "TaskFlow" Une mini application de gestion de tâches avec :

## Création du projet

Frontend Angular : interface utilisateur pour créer, afficher et gérer des tâches.
Backend Node.js (Express) : API REST pour gérer les tâches (CRUD).
Librairies Nx :

Une lib partagée pour les modèles (Task), les types et les services communs.
Une lib UI pour des composants réutilisables (boutons, cartes, etc.).
Une lib utils pour des fonctions utilitaires (formatage de date, etc.).

Structure du monorepo Nx
apps/
taskflow-frontend/ → Angular app
taskflow-api/ → Node.js Express app

libs/
data-models/ → Interfaces & types partagés
ui-components/ → Composants Angular réutilisables
utils/ → Fonctions utilitaires JS/TS

Fonctionnalités de la démo

Créer une tâche avec titre, description, date limite.
Afficher la liste des tâches.
Marquer une tâche comme terminée.
Supprimer une tâche.
Utiliser les librairies Nx pour montrer la modularité et le partage de code.

🛠️ Technologies

Angular 16+ avec Nx
Node.js + Express
Nx CLI pour la gestion du monorepo
TypeScript partout
Optionnel : TailwindCSS ou Angular Material pour le style
