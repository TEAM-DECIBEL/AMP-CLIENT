import { defineConfig } from 'vite';

import { baseViteConfig } from '@amp/vite-config';

export default defineConfig(
  baseViteConfig({
    root: __dirname,
    server: {
      port: 5175,
    },
  }),
);
