<p align="center"><img src="public/assets/logo.svg" width="560" alt="Escales — l’Espagne à son rythme"></p>

# Escales · Guide d’Espagne

Un guide indépendant en français pour explorer l’Espagne à pied, en train et au bord de la mer. Des promenades à composer, des cafés, des tables et des musées moins évidents, avec des informations pratiques pour voyager sereinement.

**Application : https://mtl2espagne2026.github.io/** · Le fichier `index.html` à la racine est le point d’entrée du site ; ce README est la documentation du dépôt.

## Ce que propose le guide

- 29 recommandations à rechercher et à filtrer par destination, envie, distance et terrain ; favoris conservés localement.
- Madrid, les transferts depuis l’aéroport, Fuengirola, la Costa del Sol et Valence.
- Des idées de promenade à Barcelone et des modules d’escales atlantiques **conditionnels**, sans navire ni réservation présumés.
- Une carte schématique locale, des points d’intérêt documentés et une localisation facultative.
- Un téléchargement explicite pour consulter le guide sans réseau.

Les distances et durées de promenade sont indicatives. Vérifiez les horaires, travaux, fermetures, tarifs et conditions d’accès auprès des sources officielles avant de vous déplacer. Les informations ne garantissent aucune correspondance.

## Emporter le guide hors connexion

1. Ouvrir le site en ligne avec un navigateur récent.
2. Choisir **À emporter**, puis **Télécharger le guide hors ligne**.
3. Attendre le message **« Téléchargement vérifié : le guide est prêt hors connexion »**.
4. Activer le mode avion et recharger le guide pour vérifier le téléchargement avant de partir.

Le premier chargement et le téléchargement nécessitent du réseau. Ensuite, les pages, la recherche, les filtres, les illustrations et la carte embarquée fonctionnent hors connexion. Les horaires en temps réel, billets et liens vers des sites externes demandent toujours une connexion.

Le navigateur peut proposer **Installer l’application** ou **Ajouter à l’écran d’accueil**, selon l’appareil. L’installation n’est pas nécessaire pour consulter le guide. Elle ne remplace pas le téléchargement explicite de son contenu. Le navigateur peut effacer son stockage, notamment si l’espace manque ou en navigation privée : vérifier le téléchargement avant chaque départ.

Une nouvelle version se télécharge complètement avant d’être proposée. Le bouton **Mettre à jour** active cette version ; l’ancienne copie n’est retirée qu’une fois la nouvelle complète.

## Localisation et carte

La géolocalisation est désactivée par défaut. Le bouton **Me situer sur la carte** déclenche une demande ponctuelle au navigateur. Une autorisation refusée, un appareil incompatible ou une position indisponible n’empêche pas de consulter la carte.

La position reste en mémoire dans la page : elle n’est ni transmise au serveur, ni enregistrée. **Effacer ma position**, changer de rubrique ou fermer la page la supprime de l’application. Les distances affichées sont à vol d’oiseau, pas des trajets praticables.

Le GPS peut fonctionner sans réseau selon l’appareil, ses réglages et la réception. À l’intérieur ou sans assistance réseau, le délai et la précision peuvent se dégrader. HTTPS ou localhost est nécessaire. Le navigateur et le système d’exploitation gèrent eux-mêmes le service de localisation.

La carte est une illustration schématique originale : aucun fond de carte tiers, aucune tuile téléchargée en masse, aucun guidage routier. Les repères documentés ne désignent pas forcément les entrées. Les établissements sans coordonnées vérifiées restent des fiches avec adresse.

## Vie privée

Aucun compte, publicité, outil d’analyse ou traceur. Aucun itinéraire personnel, nom de voyageur, date de voyage, adresse de courriel ou identifiant de réservation ne doit entrer dans les fichiers publics ou l’historique Git.

Le stockage du navigateur sert aux ressources hors ligne et à la liste des favoris, sans compte ni synchronisation. Les billets et adresses privées doivent être conservés séparément. L’hébergeur peut traiter les données techniques habituelles d’une connexion web ; les sites externes ont leurs propres politiques. La politique CSP limite les ressources de l’application à sa propre origine.

## Développement

Prérequis : **Node.js 22+**, **Python 3**. L’application n’a aucune dépendance JavaScript d’exécution et ne nécessite aucun secret.

```sh
npm run build
npm start
```

Ouvrir http://localhost:4173. Un simple double-clic sur `index.html` via `file://` ne permet pas de tester le service worker.

| Fichier | Rôle |
| --- | --- |
| `public/content.js` | Recommandations, sources et coordonnées documentées |
| `public/app.js` | Navigation, recherche, filtres, GPS et téléchargement |
| `public/style.css` | Présentation responsive et contrôles accessibles |
| `public/assets/` | Illustrations et identité visuelle embarquées |
| `build.mjs` | Construction de `dist/` et service worker versionné par empreinte du contenu |
| `tests/browser.mjs` | Vérifications navigateur, hors ligne et mise à jour |
| `.github/workflows/pages.yml` | Construction et publication GitHub Pages |

## Tests

Démarrer le serveur local, puis exécuter :

```sh
npm test
```

Le test utilise les installations Playwright et Chromium de l’environnement de développement (`/opt/codex/cua_node/lib/node_modules/playwright` et `/usr/bin/chromium`). Sur un autre poste, adapter ces deux chemins à une installation locale. Le test modifie temporairement le service worker généré puis le restaure ; utiliser un serveur de test dédié.

Les contrôles couvrent les largeurs 320, 390, 768 et 1440 px, la recherche sans accents, les filtres, les résultats vides, l’historique précédent/suivant, la localisation autorisée/refusée/indisponible, le rechargement hors ligne, les assets locaux et le cycle de mise à jour. Ils vérifient aussi l’absence d’erreurs JavaScript et de requêtes tierces pendant l’usage. Les résultats sont dans `test-results/results.json`.

Les tests Chromium ne remplacent pas une vérification physique sur iPhone/Safari, une installation réelle ou un essai GPS sur place. Après publication, refaire les contrôles sur l’origine HTTPS finale.

## Publication GitHub Pages

Organisation choisie : **mtl2espagne2026**. Dépôt : **mtl2espagne2026.github.io**.

1. Créer le dépôt public dans cette organisation et vérifier l’accès en écriture du compte autorisé.
2. Publier ce code sur la branche `main`, sans ajouter de données privées. Les commits locaux de ce projet utilisent une identité générique avec adresse de courriel vide.
3. Le dépôt contient aussi une copie statique à la racine : **Deploy from a branch → main → / (root)** sert directement `index.html`. **GitHub Actions** peut également publier `dist/`.
4. Après modification du contenu, exécuter `npm run publish:root` et committer les fichiers générés à la racine. Le workflow **Validate and publish guide** vérifie la construction à chaque push. Son lancement manuel publie `dist/` pour les installations dont la source Pages est GitHub Actions ; la publication depuis `main / (root)` utilise le mécanisme Pages natif.
5. Attendre le succès du workflow et vérifier https://mtl2espagne2026.github.io/ avant d’annoncer la publication.

Si l’application GitHub ne voit pas le dépôt, vérifier la sélection des dépôts autorisés dans l’installation de l’organisation. Ne jamais déposer de jeton ou de clé dans le code, les issues ou une conversation. Vérifier le dernier déploiement Pages et la réponse HTTPS avant d’annoncer une mise en ligne réussie.

## Identité visuelle

Le logo original **Escales** associe une voile, un cap, un soleil et deux vagues. Les fichiers `public/assets/logo.svg`, `icon.svg`, `icon-192.png` et `icon-512.png` servent au README, au site, au favicon et à l’icône d’application. Le PNG 512 px est également prêt à être choisi comme avatar de l’organisation dans les réglages GitHub, si l’interface et les droits le permettent.

Le logo, l’illustration de côte et la carte sont des créations originales de ce projet. Leur reproduction avec le guide est autorisée ; ils ne représentent pas un logo officiel d’une destination ou d’un transporteur.

## Sources et photographies

Chaque recommandation renvoie à une source. La page **Sources & confidentialité** rassemble les offices de tourisme, les sites des établissements, Aena, EMT et Renfe. Les coordonnées disposent de références consultables. Les textes synthétisent la recherche ; les informations changeantes restent à vérifier auprès de l’opérateur concerné.

Six photographies Wikimedia Commons sont intégrées au site et au téléchargement hors ligne (environ 1,7 Mo pour le guide). Le manifeste `public/assets/photos/credits.json` décrit les fichiers utilisés. Les photographies sont redimensionnées, recompressées et recadrées à l’affichage ; les licences et les attributions figurent aussi dans le guide.

| Image | Auteur | Licence |
| --- | --- | --- |
| [Playa de Carvajal, Fuengirola 11](https://commons.wikimedia.org/wiki/File:Playa_de_Carvajal%2C_Fuengirola_11.jpg) | Tyk | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| [Plaza Mayor de Madrid, Panorama 1](https://commons.wikimedia.org/wiki/File:Plaza_Mayor_de_Madrid%2C_Panorama_1.jpg) | D.Rovchak | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| [Mercado Central de Valencia](https://commons.wikimedia.org/wiki/File:Mercado_Central_de_Valencia.JPG) | Karman85 | [CC BY-SA 3.0 ES](https://creativecommons.org/licenses/by-sa/3.0/es/) |
| [Port Vell](https://commons.wikimedia.org/wiki/File:Port_Vell_%287856586122%29.jpg) | Craig Sunter | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| [El Charco de San Ginés](https://commons.wikimedia.org/wiki/File:El_Charco_de_San_Gin%C3%A9s.jpg) | Santamarcanda | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| [Zona Velha, Funchal](https://commons.wikimedia.org/wiki/File:Zona_Velha%2C_Funchal%2C_Madeira_-_2012-03-13_-_DSC06044.jpg) | DarwIn | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

Pour ajouter une photo : vérifier son origine et sa licence, conserver les crédits, signaler les transformations et reconstruire le site. Les adaptations restent soumises à leur licence respective. Les photos d’aéroport et de Tanger initialement envisagées ne sont pas utilisées.
