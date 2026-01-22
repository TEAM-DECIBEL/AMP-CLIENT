import { config } from '@amp/eslint-config/react';

export default [
  ...config,
  {
    files: ['**/src/shared/ui/form/added-item/added-item.js'],
    rules: {
      'react/prop-types': 'off',
    },
  },
];
