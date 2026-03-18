import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  padding: '1.6rem',
  background: ampThemeVars.color.gray_50,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '20px',
});

export const title = style({
  display: 'flex',
  gap: '1.2rem',
});

export const step = style({
  width: '2.4rem',
  height: '2.4rem',
  ...ampThemeVars.font.body_m_16,
  color: ampThemeVars.color.gray_000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: ampThemeVars.color.primary,
  borderRadius: '6px',
});

export const description = style({
  ...ampThemeVars.font.body_m_16,
  color: ampThemeVars.color.gray_900,
});
