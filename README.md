## 🏴‍☠️ Grand Line Dex — One Piece

Grand Line Dex est une application web interactive inspirée de l'univers One Piece, réalisée avec HTML, Tailwind CSS et JavaScript (ES Modules). Elle permet d'explorer des personnages, de consulter leurs caractéristiques, d'ajouter des personnages personnalisés et de constituer une équipe.

## Installation

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
npm install
npm run dev
```

`npm run dev` surveille vos fichiers et régénère `dist/output.css` à chaque modification. Ouvrez ensuite `index.html` dans votre navigateur (ou avec l'extension Live Server).

Avant de mettre en ligne sur GitHub Pages :

```bash
npm run build
```

Puis committez `dist/output.css` : GitHub Pages ne lance pas Tailwind pour vous.

## Contenu du dépôt

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page Dex, statique, avec 6 cartes écrites à la main |
| `tailwind.config.js` | Le thème neutre à remplacer par celui de votre univers |
| `src/input.css` | Les directives Tailwind et quelques classes de composants |
| `dist/output.css` | Le CSS généré par Tailwind (ne pas modifier à la main) |
| `data.js` | Le tableau `creatures`, à remplir avec au moins 12 créatures |
| `script.js` | Votre JavaScript, avec la liste des fonctionnalités à coder |
| `design/` | La maquette de la version finale |

## À compléter par vous

- **Univers choisi :** [ONE PIECE]
- **Lien GitHub Pages :** [https://github.com/Fertaqfatimaezzahra/brief1-s2.git]
- **Sources des images :** [https://github.com/optc-db/optc-db.github.io]
- **Tests des expressions régulières :** [ID — /^#\d{3}$/

Valides : #001, #017

Invalides : 001, #1234

Nom — /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/

Valides : Monkey D. Luffy, Roronoa Zoro

Invalides : A, @Luffy

Niveau — /^[\s\S]{2,30}$/

Valides : Capitaine, Empereur

Invalides : A, une chaîne de 31 caractères

Statistiques (PV, Attaque, Défense) — /^\d{1,3}$/

Valides : 950, 99

Invalides : 1000, -50]
- **Bonus réalisés :** [liste]
