/// <reference types="vite/client" />

// Permet d'importer des fichiers .vue en tant que composants Vue
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }