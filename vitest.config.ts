import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.ts', // <- ce fichier
    },
    // test: {
    //   environment: 'jsdom',
    //   exclude: [...configDefaults.exclude, 'e2e/**'],
    //   root: fileURLToPath(new URL('./', import.meta.url)),
    // },
  }),
)
