import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.4rem 1.4rem',
  borderRadius: '20px',
  backgroundColor: ampThemeVars.color.gray_800_90,
  color: ampThemeVars.color.gray_50,
  ...ampThemeVars.font.body_m_13,
});

export const slash = style({
  marginInline: '0.2rem',
});
