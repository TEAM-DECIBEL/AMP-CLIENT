import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ctaButtonContainer = style({
  padding: '2rem',
});

export const skipButton = style({
  ...ampThemeVars.font.body_r_13,
  color: ampThemeVars.color.gray_700,
  textDecoration: 'underline',
  display: 'inline-flex',
});
