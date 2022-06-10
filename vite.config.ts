import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/cps/index.js",
      name: 'cesium-plotting-symbol',
    },
    rollupOptions: {
      external: ['vue', 'cesium']
    }
  }
})
