import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import type { UserConfig } from 'vite';

export function baseViteConfig(overrides: UserConfig = {}): UserConfig {
  return {
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
      svgr(),
    ],
    ...overrides,
  };
}
