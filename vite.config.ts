import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shri2024-task/",
  build: {
    cssCodeSplit: true,
  },
  css: {
    postcss: "./postcss.config.cjs"
  }
})
