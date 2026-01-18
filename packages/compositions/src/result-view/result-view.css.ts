import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const content = style({
  padding: '2rem',
});

export const title = style({
  ...ampThemeVars.font.heading_sb_20,
  color: ampThemeVars.color.gray_900,
});

export const description = style({
  ...ampThemeVars.font.heading_sb_20,
  color: ampThemeVars.color.gray_500,
});

export const image = style({
  padding: '0 2rem',
});
