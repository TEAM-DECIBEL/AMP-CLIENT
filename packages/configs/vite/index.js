import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";



/**
 * @param {import('vite').UserConfig} overrides
 * @returns {import('vite').UserConfig}
 */
export function baseViteConfig(overrides = {}) {
  const rootDir = overrides.root ? path.resolve(overrides.root) : process.cwd();

  return {
    ...overrides,
    plugins: [
      react({
        babel: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      svgr(),
      tsconfigPaths({
        projects: [path.join(rootDir, "tsconfig.json")],
      }),
      ...(overrides.plugins ?? []),
    ],
  };
}
