import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // CRUCIAL: Esto permite que el sitio funcione en subdirectorios (como GitHub Pages)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});