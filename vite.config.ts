import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@client': path.resolve(__dirname, 'src/client'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@games': path.resolve(__dirname, 'src/games'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@core': path.resolve(__dirname, 'src/redux/features/core'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    }
  }
})
