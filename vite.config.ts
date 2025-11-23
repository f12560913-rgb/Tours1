import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    // 'base' es crucial para GitHub Pages. './' asegura que los assets se carguen 
    // independientemente de si estás en midominio.com o midominio.com/mi-repo
    base: './',
    define: {
      // Esto evita errores de "process is not defined" en el navegador
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env': {}
    }
  };
});