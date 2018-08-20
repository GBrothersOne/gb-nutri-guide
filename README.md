## Table des matières
- [Prérequis](#prérequis)
  - [NodeJs](#nodeJs)
  - [Git](#git)
- [Récupérer et installer le projet](#récupérer-et-installer-le-projet)
- [Architecture](#architecture)
  - [Arborescence](#arborescence)
  - [React](#react)
  - [Redux](#redux)
  - [GBComponents](#gbcomponents)
- [Git](#git)
  - [Commandes basiques](#commandes-basiques)
  - [Précisions](#précisions)
  - [Pour aller plus loin](#pour-aller-plus-loin)

## Prérequis
J'ai créé le projet avec `create-react-app` (CRA).
C'est un utilitaire qui permet de générer une base fonctionnelle pour une application React sans avoir à se taper toute la partie configuration du serveur NodeJs. 

Pour récupérer et faire fonctionner le projet, il va te falloir télécharger et installer NodeJs et Git.

### NodeJs
NodeJs est nécessaire pour faire tourner notre appli.
Son installation inclut celle de l'outil NPM que nous utiliserons pour gérer nos dépendances (les dernières versions de NPM sont à priori meilleures que Yarn).

[Installer node](https://nodejs.org/en/)

### Git
Git va te servir à récupérer le projet et le mettre à jour chaque fois que tu aura une modif à apporter. Tu en connais le fonctionnement de base mais je te rapellerai plus loin les bonnes pratiques et les commandes à utiliser. 

Je me sers de Git en lignes de commandes via le bash fourni à l'installation. Mes explications seront donc basées sur les commandes à utiliser.

[Installer Git](https://git-scm.com/downloads)

Penses à bien configurer Git avec les commandes suivantes:

* `git config --global user.name "john doe"` pour définir ton nom d'utilisateur.
* `git config --global user.email johndoe@example.com` pour définir ton adresse e-mail.

## Récupérer et installer le projet
Ouvre **`Git Bash`** et vas te placer dans le dossier où tu souhaite installer le projet avec la commande `cd nomdedossier`.

* `git clone https://github.com/GBrothersOne/gb-nutri-guide.git` pour récupérer le repo.
* `cd gb-nutri-guide` pour se placer dans le dossier.
* `npm install` pour installer toutes les dépendances (ça peut prendre un petit moment et des Warnings peuvent s'afficher. C'est normal).
* `npm start` te permet de lancer le projet sur un build local pour le tester (ouverture automatique de ton navigateur).

L'appli devrait fonctionner normalement (sinon appelle moi). 

Toute modification du code du sous-dossier **`src`** de ton projet doit maintenant se répercuter en temps réel sur le rendu de ton appli ouverte dans ton navigateur.

**ATTENTION ! À ce stade, tu es câblé sur la branche master du repo github online, donc pas de push. Évite également les commits locaux tant que tu ne sera pas recâblé sur la branche develop**

## Architecture
L'application repose sur deux principaux outils:
* **`React`** pour la gestion du front (articulation des pages en composants et DOM virtuel)
* **`Redux`** pour la gestion du back (déporter les traitements, le stockage des données et la logique de calcul hors du front)

Je te conseille de regarder quelques tutos pour comprendre leur philosophie principale

### Arborescence
- **`node-modules`** : c'est le dossier d'installation des dépendances, ne pas toucher
- **`public`** : c'est le dossier du point d'entrée de notre site, pas besoin d'y toucher
  - `index.html` : c'est le point d'entrée de notre site (root html), tu peux y modifier le nom du site. Ne surtout pas changer le nom ! Nécessaire à notre appli React
  - `favicon.ico` : icone du site
  - `manifest.json` : aucune idée, pas encore regardé
- **`src`** : contient tous les fichiers sources de notre site. C'est ici que nous allons travailler
  - **`containers`** : contient les pages de notre site. Tu dois créer un nouveau sous dossier ici pour chaque nouvelle page que tu veux rajouter
    - **`about`** : une page lambda pour exemple
    - **`app`** : c'est le conteneur principal de notre site. Toutes les autres pages seront rendues à l'intérieur
    - **`home`** : page contenant mon application
  - **`GBComponents`** : c'est le dossier de notre framework perso. Tu peux y trouver tous les composants que j'ai déjà créés
    - **`css`** : dossier contenant toutes les feuilles css de notre framework perso
    - `GBStyleSheets.js` : ce fichier rassemble toutes les feuilles de style du dossier css. Si tu en crée une nouvelle, penses à la rajouter
  - **`modules`** : c'est le dossier de notre appli Redux
    - `GBCalculator.js` : c'est notre calculateur perso. Il contient notre logique de calcul. Il rassemble nos reducers et nos actions Redux en un même fichier. Je risque probablement de le scinder dans un futur proche.
    - `index.js` : sert à combiner nos différents reducers Redux
  - `index.js` : c'est le coeur de notre appli React, pas besoin d'y toucher. Ne surtout pas changer le nom !
  - `store.js` : c'est le coeur de notre appli Redux, il sert à stocker l'état de notre appli et ses données. Pas besoin d'y toucher.

### React
Tu peux regarder les GBComponents pour voir comment je procède pour créer mes composants réact.
Il y a plusieurs types de composants:

* *`GBUserForm`* : super composant qui correspond au formulaire de notre app. Ce type de composant est destiné à la fois à recevoir des informations pour les afficher et à en envoyer au store redux pour les stocker ou les utiliser. Tu peux également remarquer qu'il contient d'autres GBComponents plus simples. Note qu'il est créé sur un modèle de Classe.
* *`GBAgeInput`* : composant beaucoup plus simple qui sert à récupérer une donnée et à en afficher une. Il est également conçu sur un modèle de Classe.
* *`GBMacroDisplayer`* : composant dédié à l'affichage. Ces composants sont les plus simples et ne servent qu'à afficher une information. Cette fois tu peux voir qu'il est conçu sur un modèle de fonction et non un modèle de classe.

### Redux
Je débute à peine l'apprentissage Redux et j'aurai donc du mal à te l'expliquer. L'idée c'est d'avoir un store (sorte d'espace de stockage) pour stocker les états et données de ton appli.
Tes composants déclenchent des actions (demande de faire quelque chose) qui sont traitées par des reducers (fait le quelque chose qui a été demandé). Le résultat peut ensuite servir à mettre à jour le store.

Par exemple: je stocke mes données issues du formulaire dans le store. Ces données stockées me servent à calculer les macro-nutriments qui sont aussi stockés dans le store. Le bilan nutritionnel affiche en temps réel les macros stockés dans le store.

Exemple plus concret sur mes fichiers:

Dans *`src/containers/home/index.js`*
```
import {  handleModeChange,
          handleSexChange,
          handleAgeChange,
          handleHeightChange,
          handleWeightChange,
          handleAimChange,
          handleBodyfatChange,
          handleActivityChange, } from '../../modules/GBCalculator'
```
Ce bout de code permet d'importer les actions Redux de mon GBCalculator

```
const mapDispatchToProps = dispatch => bindActionCreators({
  handleModeChange,
  handleSexChange,
  handleAgeChange,
  handleHeightChange,
  handleWeightChange,
  handleAimChange,
  handleBodyfatChange,
  handleActivityChange,
  changePage: () => push('/about-us')
}, dispatch)
```
Ce bout ce code montre comment les binder afin de pouvoir les utiliser dans les composants

```
onAgeChange={props.handleAgeChange}
```
Celui-ci montre comment les utiliser à l'intérieur des composants React

```
const mapStateToProps = ({ GBCalculator }) => ({
  mode: GBCalculator.mode,
  sex: GBCalculator.sex,
  age: GBCalculator.age,
  height: GBCalculator.height,
  weight: GBCalculator.weight,
  aim: GBCalculator.aim,
  bodyfat: GBCalculator.bodyfat,
  activity: GBCalculator.activity,
  energy: GBCalculator.energy,
  proteins: GBCalculator.proteins,
  lipids: GBCalculator.lipids,
  carbohydrats: GBCalculator.carbohydrats,
})
```
Tu peux voir ici  comment récupérer des données stockées dans le store

```
age={props.age}
```
Et ici comment les récupérer pour, par exemple, les afficher dans un composant

```
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
```
L'export a été modifié afin de connecter le composant du fichier à Redux

Tu peux aller voir les actions et reducers dans *`src/modules/GBCalculator.js`*

## Git

### Commandes basiques
Les commandes suivantes permettent de configurer Git:
* `git config --global user.name "Votre nom ou pseudo"`
* `git config --global user.email "votre@email.com"`

Récupérer le repo distant (se placer dans le dossier où l'on souhaite l'installer):
* `git clone https://github.com/GBrothersOne/gb-nutri-guide.git`

Se placer à l'intérieur du dossier récupéré:
* `cd gb-nutri-guide`

Créer une branche locale develop et régler le repo local dessus:
* `git checkout -b develop`

Câbler notre branche locale develop sur celle du repo distant par défaut (comme ça les prochains push / pull seront fait dessus automatiquement):
* `git branch -u origin/develop`

Une fois que des modif ont été faites, les ajouter au suivi avec la commande:
* `git add .`

Puis enregistrer un commit (il faut *impérativement* un message concis et clair):
* `git commit -m "message de commit"`

Lorsqu'une fonctionnalité complète a été développée, il faut l'envoyer sur le repo distant:
* `git push` (si la branche locale a été au préalable câblée par défaut sur la bonne branche distante)

Pour vérifier que notre branche locale est à jour, il faut commencer par récupérer les informations de la branche distante:
* `git fetch`

Ensuite, il est possible de consulter l'état de notre repo pour savoir si il est à jour:
* `git status`

Si notre repo n'est pas à jour, il faut 'tirer' le code depuis le repo distant:
* `git pull` (si la branche locale a été au préalable câblée par défaut sur la bonne branche distante)

A tout moment, l'historique du repo local peut être consulté avec:
* `git log`

### Précisions
La commande `git checkout -b develop` peut être décomposée en deux étapes:
* `git branch develop` pour créer la nouvelle branche
* `git checkout develop` pour se positionner dessus

Si tu n'as pas configuré de branche par défaut ou souhaite push/pull sur une branche ou remote différents de ceux configurés, tu peux utiliser les commandes complètes:
* `git pull origin develop` -> récupérer le code de la branche develop située sur la remote distante origin
* `git push origin develop` -> envoyer le code de la branche locale sur la branche develop située sur la remote distante origin

Si tu souhaite travailler sur une autre remote, tu peux en ajouter une nouvelle:
* `git remote add "nom choisi" "url de la remote"`

Tu peux aussi changer le nom d'une remote existante:
* `git remote set-url "nom de la remote" "nouvelle url"`

Ou voir les remotes existantes:
* `git remote -v`

### Pour aller plus loin
Si tu souhaite progresser et maîtriser Git pour évoluer dans un environnement professionnel, il faut maîtriser les notions de workflow et d'historique propres. Ce qui ne sera pas le cas avec la méthode que nous allons utiliser. Je te conseille donc de te renseigner sur les commandes suivantes et les concepts qui y sont associés:
* `git commit --amend`
* `git merge`
* `git rebase`
* `git cherry-pick`
