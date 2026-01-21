import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '3rem',
});

export const fieldLabel = style({
  marginLeft: '0.5rem',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_14,
});
