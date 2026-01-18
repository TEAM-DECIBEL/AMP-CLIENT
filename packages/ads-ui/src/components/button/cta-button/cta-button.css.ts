import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const base = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '1.3rem 0',
  textAlign: 'center',
  color: ampThemeVars.color.gray_000,
  ...ampThemeVars.font.title_sb_16,
});

export const ctaButton = recipe({
  base,

  variants: {
    color: {
      primary: {
        backgroundColor: ampThemeVars.color.primary,
        selectors: {
          '&:disabled': {
            backgroundColor: ampThemeVars.color.primary_light2,
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
      white: {
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_900,
        border: `1px solid ${ampThemeVars.color.gray_200}`,
      },
    },

    type: {
      common: {
        borderRadius: '20px',
      },
      icon: {
        display: 'flex',
        gap: '1rem',
        borderRadius: '40px',
      },
      alert: {
        gap: '1rem',
        padding: '0.8rem 0',
        border: `1px solid ${ampThemeVars.color.gray_900}`,
        borderRadius: '40px',
        backgroundColor: ampThemeVars.color.gray_900,
        color: ampThemeVars.color.gray_000,
        ...ampThemeVars.font.body_m_14,
      },
    },
  },
});
