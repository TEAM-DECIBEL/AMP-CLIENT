import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const labelContainer = style({
  display: 'flex',
});

export const label = style({
  padding: '0 0.5rem',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_14,
});

export const requiredStar = style({
  color: ampThemeVars.color.primary,
  ...ampThemeVars.font.title_sb_14,
});
