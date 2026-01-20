import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const ctaButtonContainer = style({
  padding: '0 2rem',
  height: '3.9rem',
  marginBottom: '1.6rem',
});

export const ctaButton = style({
  height: '3.9rem',
  ...ampThemeVars.font.body_m_14,
});
