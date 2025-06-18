import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@janis-me/ui', '@janis.me/react-themed', '@janis.me/themed'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "/src/styles/global.scss" as *;',
      },
    },
  },
});
