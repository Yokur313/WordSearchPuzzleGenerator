// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yokur313.github.io',
  base: '/WordSearchPuzzleGenerator',
  vite: {
    plugins: [tailwindcss()]
  }
});