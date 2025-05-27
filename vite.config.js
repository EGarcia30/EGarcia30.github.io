import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ...otras opciones
  assetsInclude: ['**/*.PNG'], // Así Vite reconoce los archivos .PNG como assets
})
