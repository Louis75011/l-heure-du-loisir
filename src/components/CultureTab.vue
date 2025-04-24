<template>
    <!-- role="tabpanel" indique que ce bloc est une section contrôlée par un onglet & aria-labelledby relie ce panneau à l’onglet qui l’active -->
    <section role="tabpanel" aria-labelledby="tab-culture">
      <img src="/img/loisir-patrimoine.jpg" alt="Illustration du patrimoine parisien ancien" class="category-image" />
      <SubSection
        id="culture-eiffel"
        title="Tour Eiffel"
        image=""
        alt=""
        content="Redécouverte des symboles architecturaux emblématiques de Paris."
      />
      <SubSection
        id="culture-conciergerie"
        title="Conciergerie"
        image=""
        alt=""
        content="Exploration des racines du vieux Paris, entre Seine et ancien palais."
      />
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
  