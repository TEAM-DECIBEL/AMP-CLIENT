import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const empty = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',
  marginTop: '7rem',
});

export const image = style({
  width: '13.9rem',
  height: '13.9rem',
  backgroundColor: ampThemeVars.color.gray_200,
});

export const text = style({
  margin: 0,
  textAlign: 'center',
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.title_sb_16,
});
