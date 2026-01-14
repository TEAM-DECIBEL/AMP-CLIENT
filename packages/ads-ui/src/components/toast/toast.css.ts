import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const toast = style({
  borderRadius: '16px',
  padding: '1rem 1.6rem',
  display: 'flex',
  gap: '1rem',
  background: ampThemeVars.color.gray_900,
  width: '31.5rem',
});

export const title = style({
  ...ampThemeVars.font.caption_m_12,
  color: ampThemeVars.color.gray_000,
});

export const description = style({
  ...ampThemeVars.font.caption_r_10,
  color: ampThemeVars.color.gray_400,
});
