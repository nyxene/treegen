import { defineConfig, splitVendorChunkPlugin } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  resolve: {
    extensions: ['.ts', '.tsx', 'json'],
  },
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    splitVendorChunkPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        dir: 'build',
      },
    },
  },
  server: {
    port: 2304,
    host: 'localhost',
  },
});
