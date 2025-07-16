import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    // Optimizaciones de build
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Separar vendor chunks para mejor caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router'],
          animations: ['gsap']
        },
        // Nombres de archivos con hash para cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Optimizar tamaño de chunk
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    // Incluir dependencias que necesitan ser pre-bundled
    include: ['react', 'react-dom', 'react-router', 'gsap']
  },
  server: {
    // Configuración de desarrollo
    port: 5137,
    open: true,
    cors: true
  },
  preview: {
    port: 4173,
    open: true
  }
})
