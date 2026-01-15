import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const base = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: ampThemeVars.color.gray_000,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '20px',
  padding: '0.7rem 1.5rem',
  ...ampThemeVars.font.body_m_13,
  color: ampThemeVars.color.gray_900,
  cursor: 'pointer',
});

export const categoryButton = recipe({
  base,

  variants: {
    selected: {
      true: {},
      false: {},
    },
    variant: {
      neutral: {},
      primary: {},
    },
  },

  compoundVariants: [
    {
      variants: { selected: true, variant: 'neutral' },
      style: {
        backgroundColor: ampThemeVars.color.gray_900,
        border: 'none',
        padding: '0.8rem 1.6rem',
        color: ampThemeVars.color.gray_000,
      },
    },
    {
      variants: { selected: true, variant: 'primary' },
      style: {
        backgroundColor: ampThemeVars.color.primary,
        border: 'none',
        padding: '0.8rem 1.6rem',
        color: ampThemeVars.color.gray_000,
      },
    },
  ],
});
