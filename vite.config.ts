import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
