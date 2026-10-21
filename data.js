// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.


const creatures = [
  {
    id: "#001",
    name: "Bulbizarre",
    type: "Plante",
    level: "Base",
    stats: { hp: 45, attack: 49, defence: 49 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    description: "Un Pokémon de type Plante avec une graine sur le dos."
  },
  {
    id: "#002",
    name: "Herbizarre",
    type: "Plante",
    level: "Évolution 1",
    stats: { hp: 60, attack: 62, defence: 63 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    description: "Une évolution de Bulbizarre, plus grande et plus puissante."
  },
  {
    id: "#003",
    name: "Florizarre",
    type: "Plante",
    level: "Évolution 2",
    stats: { hp: 80, attack: 82, defence: 83 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    description: "Un Pokémon puissant avec une grande fleur sur le dos."
  },
  {
    id: "#004",
    name: "Salamèche",
    type: "Feu",
    level: "Base",
    stats: { hp: 39, attack: 52, defence: 43 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    description: "Un petit Pokémon de type Feu avec une flamme sur la queue."
  },
  {
    id: "#005",
    name: "Reptincel",
    type: "Feu",
    level: "Évolution 1",
    stats: { hp: 58, attack: 64, defence: 58 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    description: "Une évolution de Salamèche avec des griffes puissantes."
  },
  {
    id: "#006",
    name: "Dracaufeu",
    type: "Feu",
    level: "Évolution 2",
    stats: { hp: 78, attack: 84, defence: 78 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    description: "Un Pokémon volant capable de cracher des flammes."
  },
  {
    id: "#007",
    name: "Carapuce",
    type: "Eau",
    level: "Base",
    stats: { hp: 44, attack: 48, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    description: "Une petite tortue Pokémon qui utilise des attaques Eau."
  },
  {
    id: "#008",
    name: "Carabaffe",
    type: "Eau",
    level: "Évolution 1",
    stats: { hp: 59, attack: 63, defence: 80 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    description: "Une évolution de Carapuce avec une carapace résistante."
  },
  {
    id: "#009",
    name: "Tortank",
    type: "Eau",
    level: "Évolution 2",
    stats: { hp: 79, attack: 83, defence: 100 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    description: "Un Pokémon avec deux canons à eau sur sa carapace."
  },
  {
    id: "#025",
    name: "Pikachu",
    type: "Électrik",
    level: "Base",
    stats: { hp: 35, attack: 55, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    description: "Un Pokémon électrique qui produit des décharges."
  },
  {
    id: "#026",
    name: "Raichu",
    type: "Électrik",
    level: "Évolution 1",
    stats: { hp: 60, attack: 90, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    description: "Une évolution de Pikachu capable de produire une forte électricité."
  },
  {
    id: "#133",
    name: "Évoli",
    type: "Normal",
    level: "Base",
    stats: { hp: 55, attack: 55, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    description: "Un Pokémon avec plusieurs possibilités d'évolution."
  }
];

