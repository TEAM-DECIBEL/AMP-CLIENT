import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const base = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.3rem 12.4rem',
  borderRadius: '20px',
  color: ampThemeVars.color.gray_000,
  ...ampThemeVars.font.title_sb_16,
  textAlign: 'center',
});

export const ctaButton = recipe({
  base,

  variants: {
    type: {
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
        padding: '1.4rem 5.9rem',
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        borderRadius: '100px',
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_900,
      },
      icon: {
        gap: '1rem',
        padding: '1.3rem',
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        borderRadius: '40px',
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
      add: {
        gap: '1rem',
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        borderRadius: '99px',
        color: ampThemeVars.color.gray_500,
        ...ampThemeVars.font.body_sb_13,
        selectors: {
          '&:disabled': {
            border: 'none',
            backgroundColor: ampThemeVars.color.gray_500,
            color: ampThemeVars.color.gray_000,
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
});
