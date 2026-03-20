import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.6rem',
  background: ampThemeVars.color.gray_50,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '20px',
});

export const title = style({
  display: 'flex',
  gap: '1.2rem',
});

export const step = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2.4rem',
  height: '2.4rem',
  background: ampThemeVars.color.primary,
  borderRadius: '6px',
  color: ampThemeVars.color.gray_000,
  ...ampThemeVars.font.body_m_16,
});

export const description = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_m_16,
});
