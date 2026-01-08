import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

/**
 * @param {import('vite').UserConfig} overrides
 * @returns {import('vite').UserConfig}
 */
export function baseViteConfig(overrides = {}) {
  const rootDir = process.env.INIT_CWD || process.cwd();

  return {
    ...overrides,

    resolve: {
      ...overrides.resolve,
      alias: {
        "@app": path.join(rootDir, "src/app"),
        "@pages": path.join(rootDir, "src/pages"),
        "@widgets": path.join(rootDir, "src/widgets"),
        "@features": path.join(rootDir, "src/features"),
        "@entities": path.join(rootDir, "src/entities"),
        "@shared": path.join(rootDir, "src/shared"),
      },
    },

    plugins: [
      react({
        babel: { plugins: ["babel-plugin-react-compiler"] },
      }),
      svgr(),
      tsconfigPaths(),
      ...(overrides.plugins ?? []),
    ],
  };
}
