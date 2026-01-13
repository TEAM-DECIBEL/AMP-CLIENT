import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const rectButton = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12.8rem',
    borderRadius: '10px',
    border: 0,
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    padding: '1.35rem 5.15rem',
    ...ampThemeVars.font.title_sb_14,
    selectors: {
      '&:focus-visible': {
        outline: `2px solid ${ampThemeVars.color.primary_light3}`,
        outlineOffset: '2px',
      },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: ampThemeVars.color.primary,
        color: ampThemeVars.color.gray_000,
      },
      secondary: {
        backgroundColor: ampThemeVars.color.gray_100,
        color: ampThemeVars.color.gray_700,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
