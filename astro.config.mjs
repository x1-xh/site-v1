// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://httpparam.me/',
  vite: {
    define: {
      'import.meta.env.COMMIT_HASH': JSON.stringify(process.env.COMMIT_HASH || 'unknown'),
    },
  },
});
