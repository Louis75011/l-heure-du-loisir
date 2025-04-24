<template>
  <!-- role="main" indique la section principale de l’application & aria-label décrit l’intention du contenu (utile aux technologies d’assistance) -->
  <main id="app" aria-label="Application L’Heure du loisir" role="main">
    <div class="layout">
      <aside class="logo-side" role="complementary">
        <img src="/img/logo-lheure_du_loisir.jpg" alt="Logo de L’Heure du loisir" class="logo" />
        <h1 class="site-title animated-title">L’Heure du loisir</h1>
        <h2>
          Centres d’intérêt augmentés, appuyant notre CV.
        </h2>
        <p class="site-desc">
          L’Heure du loisir se présente tel un petit carnet vivant de centres d’intérêt augmentés, à mi-chemin entre la
          contemplation et l'activité. Entre sentier et réflexions, cette page déroule un Curriculum Ludique : la
          natation côtoie la randonnée ; la veille technologique s'enracine dans l'actualité ; le patrimoine, notamment
          parisien, y est redécouvert brièvement ; et la littérature – de Virgile à Dragon Ball (!), en passant par
          Anatole France – y tisse un pont entre Orient et Occident. À la croisée de Cultura & Natura, ces loisirs
          studieux ou divertissements ne sont pas de simples passe-temps, mais des lieux entre la curiosité des choses
          de l’esprit.
        </p>
        <!-- v-if="showInstallButton" -->
        <button @click="installApp" class="install-button"
          aria-label="Ajouter à l'écran d'accueil">
          📱 Ajouter à l’accueil mobile
        </button>
        <button class="site-link-button" aria-label="Visiter notre profile LinkedIn"><a class="site-link"
            href="https://www.linkedin.com/in/louis-rouanet/">Visiter notre profile <i>LinkedIn</i></a></button>
      </aside>

      <section class="content-area">
        <Tabs />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import Tabs from './components/Tabs.vue';
import { onMounted, ref } from 'vue';

const deferredPrompt = ref<Event | null>(null);
const showInstallButton = ref(false);

onMounted(() => {
  // Capture l’événement d'installation différée (Android/Chrome)
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt.value = e;
    showInstallButton.value = true;
  });
});

const installApp = async () => {
  if (deferredPrompt.value) {
    const promptEvent = deferredPrompt.value as any;
    promptEvent.prompt();
    const choiceResult = await promptEvent.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('L’utilisateur a accepté l’installation');
    } else {
      console.log('L’utilisateur a refusé l’installation');
    }
    showInstallButton.value = false;
    deferredPrompt.value = null;
  }
};
</script>

<style scoped lang="scss">
.animated-title {
  animation: colorCycle 10s infinite ease-in-out;
}

@keyframes colorCycle {
  0% {
    color: #88c9f9;
  }

  20% {
    color: #4c8856;
  }

  40% {
    color: #6c6e74;
  }

  60% {
    color: #c48b6a;
  }

  80% {
    color: #f7e3c2;
  }

  100% {
    color: #88c9f9;
  }
}

main {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #ffffff;
}

.layout {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  padding: 2rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.logo-side {
  flex: 0 0 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;

  .logo {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }

  .site-title {
    font-size: 2.4rem;
    margin: 0.5rem 0;
    font-weight: bold;
  }

  .site-desc {
    font-style: italic;
    color: #666;
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
  }

  .site-link {
    color: #000;
    text-decoration: none;
  }

  .site-link-button {
    background-color: #f7e3c2;

    &:hover {
      background-color: #88c9f9;
    }
  }

  button {
    margin-top: 0.5rem;
    padding: 0.6rem 1.4rem;
    width: 275px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
}

.content-area {
  flex: 1;
  width: 100%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    padding: 1rem;
  }

  .logo-side {
    flex: 1 1 100%;
    padding: 1rem 0;
  }

  .content-area {
    padding: 1rem 0;
  }
}

.install-button {
  background-color: #c48b6a;
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #88c9f9;
  }
}
</style>
