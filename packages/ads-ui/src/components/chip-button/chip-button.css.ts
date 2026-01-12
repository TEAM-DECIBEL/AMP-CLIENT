import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../styles';

export const base = style({
  display: 'inline-flex',
  textAlign: 'center',
  backgroundColor: ampThemeVars.color.gray_000,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '20px',
  padding: '0.8rem 1.6rem',
  ...ampThemeVars.font.body_m_13,
  color: ampThemeVars.color.gray_900,
});

export const chipButton = recipe({
  base,

  variants: {
    selected: {
      true: {},
      false: {},
    },
    selectType: {
      neutral: {},
      primary: {},
    },
  },

  compoundVariants: [
    {
      variants: { selected: true, selectType: 'neutral' },
      style: {
        backgroundColor: ampThemeVars.color.gray_900,
        border: 'none',
        color: ampThemeVars.color.gray_000,
      },
    },
    {
      variants: { selected: true, selectType: 'primary' },
      style: {
        backgroundColor: ampThemeVars.color.primary,
        border: 'none',
        color: ampThemeVars.color.gray_000,
      },
    },
  ],
});
