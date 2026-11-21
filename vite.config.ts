import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const src = (dir: string) => resolve(import.meta.dirname, 'src', dir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gandalfio/',
  resolve: {
    alias: {
      pages: src('pages'),
      components: src('components'),
      assets: src('assets'),
      data: src('data'),
      theme: src('theme'),
      models: src('models'),
      test: src('test'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: false,
  },
});
