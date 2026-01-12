import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const base = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '5rem',
  height: '5rem',
  borderRadius: '50px',
});

export const circleButton = recipe({
  base,
  variants: {
    type: {
      share: {
        backgroundColor: ampThemeVars.color.gray_000,
        border: `1px solid ${ampThemeVars.color.gray_300}`,
      },
      write: {
        backgroundColor: ampThemeVars.color.gray_900,
        color: ampThemeVars.color.gray_000,
      },
    },
  },
});

export const iconContainer = recipe({
  base: {
    display: 'inline-flex',
    flexShrink: 0,
  },
  variants: {
    type: {
      share: { width: '2.7rem', height: '2.7rem' },
      write: { width: '2.2rem', height: '2.2rem' },
    },
  },
});

export const icon = style({
  display: 'block',
  flexShrink: 0,
});
