import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/egarcia30.github.io/",
  build: {
    assetsInclude: ["**/*.js"],
    rollupOptions: {
      output: {
        mimeTypes: {
          ".js": "application/javascript"
        }
      }
    }
  }
})
