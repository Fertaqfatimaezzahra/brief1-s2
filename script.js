// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.

import { creatures } from './data.js'
console.log(creatures)
let a = document.getElementById("grid")
console.log(a)
function afficherCreatures(liste) {
  a.innerHTML = "";

  liste.forEach(cart => {
    a.insertAdjacentHTML('beforeend', `<article data-id="${cart.id}"
    class=" dex-card flex flex-col gap-3 rounded-card bg-white p-3 pb-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
    <div class=" character-zone relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
      <img
  src="${cart.image}"
  alt="${cart.name}"
  class="character-img">
    </div>
    <div class="flex items-center justify-between gap-2">
        <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
        <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type}</span>
    </div>
    <p class="text-sm text-muted">${cart.level} · Total ${cart.stats.hp + cart.stats.attack + cart.stats.defence}</p>
    <button
        type="button"
        class="btn-outline
        mt-auto
  focus-visible:outline-none
         focus-visible:ring-2
         focus-visible:ring-brand
         focus-visible:ring-offset-2
         disabled:opacity-50
         disabled:cursor-not-allowed">

        Ajouter à l'équipe

    </button>
</article>`)

});
}

afficherCreatures(creatures);
const recherche = document.getElementById("search");

recherche.addEventListener("input", () => {
  const texte = recherche.value.trim().toLowerCase();

  const resultats = creatures.filter(personnage => {
    return personnage.name.toLowerCase().includes(texte);
  });

  afficherCreatures(resultats);
});



// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


const detail = document.getElementById("detail");
detail.hidden = true;

function afficherDetail(personnage) {
  detail.hidden = false;

  const statistiques = [
    ["PV", personnage.stats.hp],
    ["Attaque", personnage.stats.attack],
    ["Diffense", personnage.stats.defence]
  ];

  detail.innerHTML = `
    <div class="flex items-center justify-between">
      <span class="font-mono text-sm text-muted">
        ${personnage.id} · Detail
      </span>
      <button
        type="button"
        data-close
        aria-label="Fermer le detail"
        class="btn-outline"
      >✕</button>
    </div>

    <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
      <img
        src="${personnage.image}"
        alt="${personnage.name}"
        class="h-full w-full object-contain"
      >
    </div>

    <h2 class="font-display text-3xl font-extrabold">
      ${personnage.name}
    </h2>

    <p class="font-bold">${personnage.type} · ${personnage.level}</p>
    <p>${personnage.description}</p>

    <div class="flex flex-col gap-3">
      ${statistiques.map(([nom, valeur]) => `
        <div>
          <div class="flex justify-between text-sm">
            <span>${nom}</span>
            <span>${valeur}/999</span>
          </div>
          <div class="h-3 rounded-full bg-ground">
            <div
              class="h-3 rounded-full bg-brand"
              style="width: ${valeur / 999 * 100}%"
            ></div>
          </div>
        </div>
      `).join("")}
    </div>
  <button
      type="button"
      class="btn-primary"
      data-add="${personnage.id}"
    >
      Ajouter à l'équipe
    </button>
  `;
}

a.addEventListener("click", (event) => {
  // Le bouton d'ajout sera gere dans l'etape equipe.
  if (event.target.closest("button")) return;

  const carte = event.target.closest("article[data-id]");
  if (!carte) return;

  const personnage = creatures.find(
    personnage => personnage.id === carte.dataset.id
  );

  if (personnage) {
    afficherDetail(personnage);
  }
});

detail.addEventListener("click", (event) => {
  if (event.target.closest("[data-close]")) {
    detail.hidden = true;
  }
});









// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -----------------------------------------------------------  




