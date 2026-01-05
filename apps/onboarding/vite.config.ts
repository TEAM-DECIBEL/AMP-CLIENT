import { baseViteConfig } from '@amp/vite-config';
import { defineConfig } from 'vite';

export default defineConfig(
  baseViteConfig({
    server: {
      port: 5175,
    },
  }),
);
