<template>
    <!-- role="tabpanel" indique que ce bloc est une section contrôlée par un onglet & aria-labelledby relie ce panneau à l’onglet qui l’active -->
    <section role="tabpanel" aria-labelledby="tab-sports">
        <img src="/img/loisir-piscine.jpg" alt="Image représentative des activités sportives" class="category-image" />
        <SubSection id="sport-piscine" title="Piscine" image="" alt=""
            content="Pratique régulière de la natation, crawl méditatif et brasse tonique." />
        <SubSection id="sport-randonnee" title="Randonnée" image="" alt=""
            content="Randonnées pédestres, souvent en forêt ou en zone montagneuse, avec découverte et dépassement." />
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
