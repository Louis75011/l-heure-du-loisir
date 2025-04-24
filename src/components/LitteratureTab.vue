<template>
    <!-- role="tabpanel" indique que ce bloc est une section contrôlée par un onglet & aria-labelledby relie ce panneau à l’onglet qui l’active -->
    <section role="tabpanel" aria-labelledby="tab-litterature">
        <img src="/img/loisir-litterature.jpg" alt="Illustration d’une bibliothèque littéraire classique et moderne"
            class="category-image" />
        <SubSection id="litt-voyage-occident" title="Voyage en Occident / Dragon Ball" image="" alt=""
            content="Pont entre culture chinoise et pop, du Roi des Singes à Son Goku !" />
        <SubSection id="litt-virgile" title="Virgile" image="" alt=""
            content="Lecture de l’Énéide, poème fondateur du génie antique." />
        <SubSection id="litt-anatole" title="Anatole France" image="" alt=""
            content="Exploration du style français codifié, entre satire et finesse." />
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
    background-color: #f9f9f9;
    border-radius: 12px;
    border: 1px solid #ddd;
}
</style>