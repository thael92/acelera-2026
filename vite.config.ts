import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // IMPORTANTE para deploy em domínio raiz
    base: '/',

    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: [
        'acelera-2026.onrender.com'
      ],
    },

    // Necessário para `vite preview` em produção
    preview: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: [
        'acelera-2026.onrender.com'
      ],
    },

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
