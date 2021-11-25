import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  extract: {
    exclude: ['node_modules', '.git'],
  },
})
