<template>
    <!-- role="group" pour regrouper un titre et contenu lié ; aria-labelledby relie au titre -->
    <section role="group" :aria-labelledby="id">
        <h3 :id="id">{{ title }}</h3>
        <img :src="image" :alt="alt" class="sub-img" />
        <p>{{ content }}</p>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    id: string;
    title: string;
    image: string;
    alt: string;
    content: string;
}>()
</script>

<style scoped lang="scss">
.sub-img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 0.5rem 0 1rem;
}

h3 {
    color: #f7e3c2;
    background-color: #000;
    padding: 0.5rem 1rem;
    width: fit-content;
    margin: 0 auto;
    border-radius: 4px;
}
</style>