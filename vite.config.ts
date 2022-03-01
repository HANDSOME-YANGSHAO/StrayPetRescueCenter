import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      comps: resolve(__dirname, './src/components'),
      store: resolve(__dirname, './src/store')
    },
    extensions: ['.js', '.json', '.ts']
  },
  plugins: [vue()],
  server: {
    open: true
  }
})
