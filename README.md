# 🏞️ L’Heure du loisir

**Curriculum ludique, loisirs enracinés et présentation augmentée en ligne.**  
[Démo locale] : http://localhost:5173/  
[Déploiement Vercel] : à venir (voir infra)

---

## ✨ Présentation

**L’Heure du loisir** se veut une application web personnelle à la fois contemplative et interactive, destinée à exposer de façon moderne et raffinée ses centres d’intérêt – entre culture, sport, technologie et littérature.

Pensée comme un **CV augmenté** ou un carnet thématique dynamique, cette interface met en valeur des **activités choisies** dans un cadre accessible, animé et bien structuré.

---

## 🧱 Fonctionnalités clés

- 🎯 **Système à onglets dynamiques** (`Vue.js`) :  
  Présentation fluide de 4 grandes catégories (Sports, Tech, Culture, Littérature) avec contenus injectés à la volée via `v-for` et `<component :is="...">`.

- 📱 **Responsive & PWA** (Progressive Web App) :  
  L’application peut être **installée sur mobile** (Android et iOS) comme une app autonome. Elle propose un **bouton d’ajout à l’accueil** si elle détecte un support compatible (`beforeinstallprompt`).

- ♿ **Accessibilité native** avec `ARIA roles` :  
  Chaque onglet, panneau ou contenu est annoté pour une parfaite lecture par les technologies d’assistance (narrateurs, lecteurs d’écran).

- 🧪 **Tests unitaires** (`Vitest`, `@vue/test-utils`) :  
  Couverture des composants principaux : `App.vue`, `Tabs.vue`, `SubSection.vue`. Les tests vérifient la présence d’éléments structurants, le comportement des onglets, et l'injection correcte des sous-composants.

- 🎨 **Design responsive et stylé SCSS** :  
  Composants stylisés avec SCSS modulaire, responsivité dès 768px, alternance des couleurs animée pour les titres.

- 🧠 **Usage d’IA générative (DALL·E)** pour les illustrations d’univers littéraires ou imaginaires (non intégrée automatiquement dans ce repo mais simulée dans le contenu).

- 🗂️ **Déploiement continu avec Git & Vercel** :  
  Le projet est versionné sur [GitHub](https://github.com/Louis75011/l-heure-du-loisir), avec gestion propre des clés SSH (`.ssh/config`) et build automatique via Vercel (compatibilité Vite).

---

## 🧭 Arborescence des sections

- **Sports** : Piscine, Randonnée
- **Tech** : PWA, Accessibilité ARIA, Tests unitaires, IA générative
- **Culture** : Patrimoine parisien (Tour Eiffel, Conciergerie)
- **Littérature** : Voyage en Occident, Virgile, Anatole France

---

## 🚀 Installation locale

```bash
git clone git@github.com:Louis75011/l-heure-du-loisir.git
cd l-heure-du-loisir
npm install
npm run dev

🧪 Lancer les tests
bash
Copier
Modifier
npx vitest run
📦 Déploiement Vercel (fix)
Si des erreurs apparaissent dans vue-tsc au build :

Exclure tests du tsconfig.json :

json
Copier
Modifier
"exclude": ["tests", "node_modules"]
Installer les types :

bash
Copier
Modifier
npm install --save-dev vitest @testing-library/jest-dom @types/node
Ajouter à tsconfig.json :

json
Copier
Modifier
"compilerOptions": {
  "types": ["vitest"]
}
📜 Licence
Projet personnel librement consultable, à but démonstratif.
Toute adaptation ou réutilisation doit mentionner l’auteur : Louis Rouanet.

🖋️ Remerciements
Projet structuré avec goût, syntaxe, et rigueur grâce à l’usage concerté de :

Vue 3 + SCSS

PWA APIs (Web App Manifest & Service Worker)

Accessibilité by design (WAI-ARIA)

CI/CD avec Git SSH & Vercel

Vitest + Vue Testing Library

🎓 En résumé :
Un site personnel, mais exemplaire, démontrant ce que peut être un portfolio enraciné et modernisé, fidèle au principe de Cultura et Natura.