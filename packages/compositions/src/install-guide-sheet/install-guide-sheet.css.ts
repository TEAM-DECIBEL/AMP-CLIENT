import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',
  paddingTop: '2rem',
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
  padding: '0.2rem 0',
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.caption_m_12,
  textDecoration: 'underline',
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
  marginTop: '0.6rem',
  paddingBottom: '1.8rem',
});
