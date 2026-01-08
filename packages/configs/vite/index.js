import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

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
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      svgr(),
      tsconfigPaths(),
      ...(overrides.plugins ?? []),
    ],
  };
}
