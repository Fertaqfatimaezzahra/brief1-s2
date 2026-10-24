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
    a.insertAdjacentHTML('beforeend', `<article
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
    <p class="text-sm text-muted">${cart.level} · Total ${cart.stats.power + cart.stats.defence + cart.stats.speed}</p>
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




