import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gandalfio/',
  resolve: {
    alias: {
      pages: path.resolve('src/pages'),
      components: path.resolve('src/components'),
      assets: path.resolve('src/assets'),
      styles: path.resolve('src/styles'),
      types: path.resolve('src/types'),
      data: path.resolve('src/data'),
      theme: path.resolve('src/theme'),
      context: path.resolve('src/context'),
      models: path.resolve('src/models'),
    },
  },
});
