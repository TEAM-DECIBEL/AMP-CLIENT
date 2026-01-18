import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const bannerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
  backgroundColor: ampThemeVars.color.gray_50,
});

export const imgStyle = style({
  width: '5.3rem',
  height: '5.8rem',
  flexShrink: 0,
  objectFit: 'contain',
});

export const textStyle = style({
  margin: 0,
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
});

export const nickname = style({
  color: ampThemeVars.color.primary,
});
