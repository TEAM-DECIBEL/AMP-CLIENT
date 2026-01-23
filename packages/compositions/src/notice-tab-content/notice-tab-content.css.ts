import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';
import { zIndex } from '@amp/ads-ui/styles/tokens/z-index.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const ctaButtonContainer = style({
  padding: '0 2rem',
  height: '3.9rem',
  marginBottom: '1.6rem',
});

export const ctaButton = style({
  height: '3.9rem',
  ...ampThemeVars.font.body_m_14,
});

export const stickySection = style({
  position: 'sticky',
  top: '5rem',
  zIndex: zIndex.overlay,
  backgroundColor: ampThemeVars.color.gray_000,
});
