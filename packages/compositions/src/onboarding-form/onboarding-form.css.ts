import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  paddingTop: '8rem',
});

export const title = style({
  ...ampThemeVars.font.heading_sb_20,
  padding: '2rem',
});

export const label = style({
  ...ampThemeVars.font.title_sb_16,
  paddingLeft: '0.5rem',
  marginBottom: '1rem',
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
});

export const supportingTextContainer = style({
  display: 'flex',
  gap: '0.6rem',
  marginTop: '0.8rem',
  paddingLeft: '1rem',
});

export const supportingText = recipe({
  base: {
    ...ampThemeVars.font.body_m_13,
  },
  variants: {
    isError: {
      false: {
        color: ampThemeVars.color.gray_400,
      },
      true: {
        color: ampThemeVars.color.error,
      },
    },
  },
});

export const icon = style({
  color: ampThemeVars.color.error,
  width: '1.8rem',
  height: '1.8rem',
  paddingTop: '0.2rem',
});
