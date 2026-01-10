import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

import baseConfig from "./base.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,

  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],
            ["^react$", "^@?\\w"],
            ["^@amp/", "^@ads/"],
            ["^@app/"],
            ["^@pages/"],
            ["^@widgets/"],
            ["^@features/"],
            ["^@entities/"],
            ["^@shared/"],
            ["^\\u0000"],
            ["^\\."],
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
];

export default config;
