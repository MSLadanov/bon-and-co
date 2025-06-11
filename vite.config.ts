import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist', 
    assetsDir: 'assets',
    emptyOutDir: true, 
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', 
        chunkFileNames: 'assets/[name].[hash].js', 
        entryFileNames: 'assets/[name].[hash].js', 
      }
    }
  }
})