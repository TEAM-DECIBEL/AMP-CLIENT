import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

import { baseViteConfig } from '@amp/vite-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(
  baseViteConfig({
    root: __dirname,
    server: {
      port: 5175,
    },
  }),
);
