import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const root = style({
  display: 'inline-grid',
  width: '1.8rem',
  height: '1.8rem',
});

export const input = style({
  gridArea: '1 / 1',
  width: '100%',
  height: '100%',
  margin: 0,

  appearance: 'none',
  WebkitAppearance: 'none',

  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '6px',
  backgroundColor: ampThemeVars.color.gray_000,

  selectors: {
    '&:checked': {
      backgroundColor: ampThemeVars.color.gray_900,
      border: '1px solid transparent',
    },
  },
});

export const iconContainer = style({
  gridArea: '1 / 1',
  display: 'grid',
  placeItems: 'center',
  pointerEvents: 'none',
  opacity: 0,

  selectors: {
    [`${input}:checked + &`]: { opacity: 1 },
  },
});
