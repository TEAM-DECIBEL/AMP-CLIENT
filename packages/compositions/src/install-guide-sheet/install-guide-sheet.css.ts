import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '2rem',
  gap: '1.6rem',
});

export const icon = style({
  width: '7rem',
  height: '7rem',
});

export const title = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
  textAlign: 'center',
});

export const button = style({
  ...ampThemeVars.font.caption_m_12,
  color: ampThemeVars.color.gray_500,
  textDecoration: 'underline',
  padding: '0.2rem 0',
});

export const buttonContainer = style({
  marginTop: '0.6rem',
  flexDirection: 'column',
  display: 'flex',
  gap: '1.4rem',
  paddingBottom: '1.8rem',
});
