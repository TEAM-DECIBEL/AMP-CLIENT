import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const base = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.8rem 1.6rem',
  borderRadius: '20px',
  color: ampThemeVars.color.gray_000,
  ...ampThemeVars.font.title_sb_16,
  textAlign: 'center',
});

export const ctaButton = recipe({
  base,

  variants: {
    tone: {
      primary: {
        backgroundColor: ampThemeVars.color.primary,
        selectors: {
          '&:disabled': {
            backgroundColor: ampThemeVars.color.primary_light3,
            cursor: 'not-allowed',
          },
        },
      },
      gray: {
        backgroundColor: ampThemeVars.color.gray_900,
        selectors: {
          '&:disabled': {
            backgroundColor: ampThemeVars.color.gray_300,
            cursor: 'not-allowed',
          },
        },
      },
      social: {
        gap: '1.6rem',
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_900,
      },
      icon: {
        gap: '1rem',
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_900,
        selectors: {
          '&[data-selected="true"]': {
            border: 'none',
            backgroundColor: ampThemeVars.color.gray_900,
            color: ampThemeVars.color.gray_000,
          },
          '&:disabled': {
            border: 'none',
            backgroundColor: ampThemeVars.color.gray_400,
            color: ampThemeVars.color.gray_000,
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
});
