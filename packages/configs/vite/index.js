import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

/**
 * @param {import('vite').UserConfig} overrides
 * @returns {import('vite').UserConfig}
 */
export function baseViteConfig(overrides = {}) {
  return {
    ...overrides,
    plugins: [
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
