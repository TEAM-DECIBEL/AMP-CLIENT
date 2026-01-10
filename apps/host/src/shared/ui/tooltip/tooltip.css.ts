import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const content = style({
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.4rem',
  padding: '1.1488rem 1.5318rem',
  borderRadius: '16px',
  backgroundColor: ampThemeVars.color.gray_900,
  zIndex: ampThemeVars.zIndex.tooltip,
});

export const container = style({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  margin: 0,
  ...ampThemeVars.font.body_m_14,
  color: ampThemeVars.color.gray_000,
});

export const description = style({
  margin: 0,
  ...ampThemeVars.font.caption_r_12,
  color: ampThemeVars.color.gray_300,
});

export const arrowIcon = style({
  display: 'block',
});
