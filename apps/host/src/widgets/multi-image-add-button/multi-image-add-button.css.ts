import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const button = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.9rem 2.1rem',
  width: '9rem',
  height: '9rem',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '16px',
  backgroundColor: ampThemeVars.color.gray_000,
  color: ampThemeVars.color.gray_400,
  cursor: 'pointer',
  flexShrink: 0,
});

export const icon = style({
  width: '2.5rem',
  height: '2.5rem',
  marginBottom: '0.4rem',
  flexShrink: 0,
});

export const text = style({
  textAlign: 'center',
  ...ampThemeVars.font.caption_r_10,
});

export const input = style({
  display: 'none',
});
