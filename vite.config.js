import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force dev server restart to clear dependency cache
export default defineConfig({
  plugins: [react()],
})
