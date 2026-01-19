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
      port: 5173,
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
          name: 'AMP',
          short_name: 'AMP',
          description: '작은 공지도 크게 울리게 공연 공지의 공식, AMP',
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
