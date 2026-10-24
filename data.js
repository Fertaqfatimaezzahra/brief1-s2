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



export const creatures = [
  {
    id: "#001",
    name: "Monkey D. Luffy",
    type: "Paramecia",
    level: "Capitaine",
    stats: { hp: 100, attack: 95, defence: 90 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0004.png",
    description: "Capitaine de l'équipage du Chapeau de Paille, il rêve de devenir le Roi des Pirates."
  },
  {
    id: "#002",
    name: "Roronoa Zoro",
    type: "Sabreur",
    level: "Combattant",
    stats: { hp: 90, attack: 98, defence: 85 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0008.png",
    description: "Le maître du style à trois sabres qui vise à devenir le plus grand épéiste du monde."
  },
  {
    id: "#003",
    name: "Vinsmoke Sanji",
    type: "Combattant",
    level: "Cuisinier",
    stats: { hp: 88, attack: 90, defence: 88 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0020.png",
    description: "Le cuisinier hors pair de l'équipage qui combat exclusivement avec ses jambes."
  },
  {
    id: "#004",
    name: "Nami",
    type: "Navigateur",
    level: "Navigateur",
    stats: { hp: 60, attack: 65, defence: 55 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0012.png",
    description: "La navigatrice géniale capable de prédire les pires tempêtes sur Grand Line."
  },
  {
    id: "#005",
    name: "Usopp",
    type: "Tireur",
    level: "Sniper",
    stats: { hp: 65, attack: 70, defence: 50 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0015.png",
    description: "Le sniper courageux (à sa façon) et menteur professionnel de l'équipe."
  },
  {
    id: "#006",
    name: "Tony-Tony Chopper",
    type: "Zoan",
    level: "Médecin",
    stats: { hp: 70, attack: 60, defence: 75 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0021.png",
    description: "Le médecin de bord renne qui a mangé le fruit de l'Humain et utilise des Rumble Balls."
  },
  {
    id: "#007",
    name: "Nico Robin",
    type: "Paramecia",
    level: "Archéologue",
    stats: { hp: 75, attack: 72, defence: 68 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/200/0210.png",
    description: "L'archéologue qui cherche à découvrir la vraie histoire du Siècle Oublié."
  },
  {
    id: "#008",
    name: "Franky",
    type: "Cyborg",
    level: "Charpentier",
    stats: { hp: 85, attack: 80, defence: 85 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/300/0337.png",
    description: "Le cyborg charpentier super-stylé qui a construit le Thousand Sunny."
  },
  {
    id: "#009",
    name: "Brook",
    type: "Paramecia",
    level: "Musicien",
    stats: { hp: 70, attack: 75, defence: 60 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/400/0424.png",
    description: "Le squelette musicien et bretteur ressuscité par le pouvoir du fruit de la Résurrection."
  },
  {
    id: "#010",
    name: "Jinbe",
    type: "Arts Martiaux",
    level: "Barreur",
    stats: { hp: 95, attack: 85, defence: 92 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/400/0410.png",
    description: "L'homme-poisson expert en karaté aquatique et ancien Grand Corsaire."
  },
  {
    id: "#011",
    name: "Trafalgar Law",
    type: "Paramecia",
    level: "Capitaine",
    stats: { hp: 92, attack: 90, defence: 88 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/300/0308.png",
    description: "Le Chirurgien de la Mort, capitaine des Heart Pirates, utilisateur du Ope Ope no Mi."
  },
  {
    id: "#012",
    name: "Eustass Kid",
    type: "Paramecia",
    level: "Capitaine",
    stats: { hp: 94, attack: 93, defence: 89 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/300/0357.png",
    description: "Capitaine de l'équipage de Kid, doté d'un pouvoir magnétique redoutable."
  },
  {
    id: "#013",
    name: "Portgas D. Ace",
    type: "Logia",
    level: "Commandant",
    stats: { hp: 85, attack: 92, defence: 80 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0075.png",
    description: "Le frère de Luffy, commandant de la 2ème flotte de Barbe Blanche, utilisateur du Mera Mera no Mi."
  },
  {
    id: "#014",
    name: "Sabo",
    type: "Logia",
    level: "Révolutionnaire",
    stats: { hp: 88, attack: 94, defence: 84 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/600/0669.png",
    description: "Chef d'état-major de l'Armée Révolutionnaire et frère adoptif de Luffy et Ace."
  },
  {
    id: "#015",
    name: "Kaido",
    type: "Zoan Mythique",
    level: "Empereur",
    stats: { hp: 120, attack: 110, defence: 115 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/2/700/2700.png",
    description: "La créature la plus forte du monde, ancien Empereur des Mers."
  },
  {
    id: "#016",
    name: "Shanks",
    type: "Haki",
    level: "Empereur",
    stats: { hp: 98, attack: 115, defence: 95 },
    image: "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/api/images/full/transparent/0/000/0077.png",
    description: "Le Roux, l'un des Empereurs les plus influents, maître absolu du Haki des rois."
  }
];
