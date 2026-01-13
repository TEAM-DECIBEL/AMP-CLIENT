import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const dashboard = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.2rem 0',
  borderRadius: '16px',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  backgroundColor: ampThemeVars.color.gray_000,
});

export const content = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const text = style({
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.title_sb_14,
});

export const count = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.heading_sb_20,
});

export const divider = style({
  margin: '0 0.8rem',
  width: '1px',
  height: '3.3rem',
  backgroundColor: ampThemeVars.color.gray_200,
});
