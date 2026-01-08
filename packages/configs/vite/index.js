import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';

/**
 * @param {import('vite').UserConfig} overrides
 * @returns {import('vite').UserConfig}
 */
export function baseViteConfig(overrides = {}) {
  const excludeDeps = [
    '@amp/ads-ui',
    '@amp/ads-ui/styles',
    ...((overrides.optimizeDeps && overrides.optimizeDeps.exclude) || []),
  ];

  return {
    ...overrides,
    optimizeDeps: {
      ...(overrides.optimizeDeps || {}),
      exclude: [...new Set(excludeDeps)],
    },
    plugins: [
      vanillaExtractPlugin(),
      react({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
      svgr(),
      ...(overrides.plugins ?? []),
    ],
  };
}
