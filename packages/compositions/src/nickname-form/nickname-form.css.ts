import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const form = style({
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

export const nicknameForm = style({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
});

export const supportingText = style({
  paddingLeft: '1rem',
  ...ampThemeVars.font.body_m_13,
  color: ampThemeVars.color.gray_400,
  marginTop: '0.8rem',
});
