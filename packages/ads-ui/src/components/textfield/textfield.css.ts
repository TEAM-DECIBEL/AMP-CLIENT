import { style } from '@vanilla-extract/css';
import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../styles';

export const iconColorVar = createVar();

const iconPadding = {
  padding: '1.3rem 1.6rem',
} as const;

export const textfield = recipe({
  base: {
    vars: {
      [iconColorVar]: ampThemeVars.color.gray_400,
    },
    display: 'flex',
    gap: '0.8rem',
    ...ampThemeVars.font.body_m_14,
    borderRadius: '16px',
    background: ampThemeVars.color.gray_000,
    border: `1px solid ${ampThemeVars.color.gray_200}`,

    selectors: {
      '&:focus-within': {
        borderColor: ampThemeVars.color.gray_900,
        vars: {
          [iconColorVar]: ampThemeVars.color.gray_900,
        },
      },
    },
  },

  variants: {
    variant: {
      default: { padding: '1.6rem 2rem' },
      flag: iconPadding,
      location: iconPadding,
      date: iconPadding,
      time: iconPadding,
    },
  },
});

export const icon = style({
  color: iconColorVar,
});

export const input = style({
  selectors: {
    '&::placeholder': {
      color: ampThemeVars.color.gray_400,
    },
  },
  color: ampThemeVars.color.gray_900,
  border: 'none',
  outline: 'none',
  caretColor: ampThemeVars.color.primary,
  width: '100%',
});
