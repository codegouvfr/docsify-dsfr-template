Ce dépôt permet de générer un template de site de documentation basé sur le [DSFR](https://www.systeme-de-design.gouv.fr/) et [docsify](https://github.com/docsifyjs/docsify).

## Fonctionnalités

- Fonctionne via simple ajout de fichiers.
- Configurable via les [options de docsify](https://docsify.js.org/#/configuration).

## Utilisation

- Télécharger le répertoire ([/docs](/docs)) contenant les fichiers du template.
- Déposer les fichiers dans votre répertoire contenant la documentation, ou commencer votre documentation à partir de ce répertoire.

## Développement

- Cloner le dépôt :
```
git clone git@github.com:codegouvfr/docsify-dsfr-template.git
```
- Installer les dépendances :
```
npm install
```
- Construire le livrable dans [`/docs`](/docs) :
```
npm run build
```
- Lancer le serveur pour visualiser les modifications en temps réel (SCSS seulement) :
```
npm run serve-sass
```
