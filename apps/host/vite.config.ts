import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { baseViteConfig } from '@amp/vite-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(
  baseViteConfig({
    root: __dirname,
    server: {
      port: 5174,
    },

    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
        },

        includeAssets: [
          'favicon.svg',
          'amp-pwa-logo-192.png',
          'amp-pwa-logo-512.png',
        ],
        manifest: {
          name: 'AMP-HOST',
          short_name: 'AMP',
          description: '공연 공지를 가장 가까이에서',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'amp-pwa-logo-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'amp-pwa-logo-512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'amp-pwa-logo-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
  }),
);
