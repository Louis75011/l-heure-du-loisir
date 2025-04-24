<template>
    <!-- role="tablist" indique une liste d'onglets -->
    <!-- aria-label décrit le groupe de navigation -->
    <section class="tabs" role="tablist" aria-label="Catégories de loisirs">
      <div class="tab-buttons">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.title"
          :id="`tab-${index}`"
          :aria-selected="selected === index"
          :aria-controls="`tabpanel-${index}`"
          :tabindex="selected === index ? 0 : -1"
          role="tab"
          :class="{ active: selected === index }"
          @click="selected = index"
        >
          {{ tab.title }}
        </button>
      </div>
  
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="selected === index"
        :id="`tabpanel-${index}`"
        role="tabpanel"
        :aria-labelledby="`tab-${index}`"
      >
        <!-- On injecte dynamiquement le composant de l'onglet actif -->
        <component :is="tab.component" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Import des sous-composants de contenu
  import SportsTab from './SportsTab.vue';
  import TechTab from './TechTab.vue';
  import CultureTab from './CultureTab.vue';
  import LitteratureTab from './LitteratureTab.vue';
  
  // Déclaration de chaque onglet avec composant associé
  const tabs = [
    { title: 'Sports', component: SportsTab },
    { title: 'Tech', component: TechTab },
    { title: 'Culture', component: CultureTab },
    { title: 'Littérature', component: LitteratureTab },
  ];
  
  const selected = ref(0);
  </script>
  
  <style scoped lang="scss">
  .tabs {
    margin: 2rem auto;
    max-width: 720px;
    text-align: center;
  
    .tab-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
  
      button {
        padding: 0.5rem 1rem;
        border: 1px solid #2c3e50;
        background-color: white;
        color: #2c3e50;
        cursor: pointer;
        border-radius: 6px;
        transition: 0.2s;
  
        &.active {
          background-color: #2c3e50;
          color: white;
        }
      }
    }
  
    [role="tabpanel"] {
      background-color: #f9f9f9;
      padding: 1.5rem;
    }
  }
  </style>
  