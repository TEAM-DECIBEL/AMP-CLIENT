import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  padding: '0 2rem',
});

export const title = style({
  padding: '2rem 0',
  ...ampThemeVars.font.heading_sb_20,
  color: ampThemeVars.color.gray_900,
});

export const imageContainer = style({
  marginTop: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  paddingBottom: '4rem',
});
