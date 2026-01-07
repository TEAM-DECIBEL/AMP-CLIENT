import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import turboPlugin from 'eslint-plugin-turbo';
import globals from 'globals';

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
    languageOptions: {
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
