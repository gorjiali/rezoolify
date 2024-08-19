import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'rezoolify',
      formats: ['es'],
    },
  },
});
