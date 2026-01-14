import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const banner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '5.2rem 3.2rem 2rem 3.2rem',
});

export const text = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.heading_sb_22,
});

export const nickname = style({
  color: ampThemeVars.color.primary,
});
