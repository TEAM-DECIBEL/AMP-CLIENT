import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import turboPlugin from 'eslint-plugin-turbo';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("eslint").Linter.FlatConfig[]} */
export const config = [
  {
    ignores: [
      'dist',
      'build',
      'out',
      'coverage',
      'node_modules',
      '.pnpm-store',
      '.turbo',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,

  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './apps/*/tsconfig.json'],
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'no-console': 'warn',
      curly: ['error', 'all'],
    },
  },
];

export default config;
