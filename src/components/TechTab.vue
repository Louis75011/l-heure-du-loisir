<template>
    <!-- role="tabpanel" indique que ce bloc est une section contrôlée par un onglet & aria-labelledby relie ce panneau à l’onglet qui l’active -->
    <section role="tabpanel" aria-labelledby="tab-tech">
        <img src="/img/loisir-veille.jpg" alt="Illustration de la veille technologique et numérique"
            class="category-image" />
        <SubSection id="tech-pwa" title="Progressive Web App" image="" alt=""
            content="Exploration des possibilités d’une PWA moderne, installable et performante." />
        <SubSection id="tech-accessibilite" title="Accessibilité (ARIA)" image="" alt=""
            content="Soins portés aux rôles ARIA, labels, navigation clavier et compatibilité lecteurs d’écran." />
        <SubSection id="tech-tests" title="Tests unitaires" image="" alt=""
            content="Mise en place de tests robustes pour garantir la stabilité des fonctionnalités." />
        <SubSection id="tech-ia" title="IA créative : DALL·E" image="" alt=""
            content="Utilisation d’outils génératifs pour illustrer, proposer et simuler des contenus." />
    </section>
</template>

<script setup lang="ts">
import SubSection from './SubSection.vue';
</script>

<style scoped lang="scss">
.category-image {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 1rem;
}

section {
    margin: 1rem auto;
    max-width: 720px;
    padding: 1rem;
    background-color: #f8f8f8;
    border-radius: 12px;
    border: 1px solid #ddd;
}
</style>