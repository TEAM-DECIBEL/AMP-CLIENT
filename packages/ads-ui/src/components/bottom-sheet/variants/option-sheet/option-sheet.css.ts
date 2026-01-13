import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../../styles';

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 2rem 2rem',
});

export const item = style({
  width: '100%',
  padding: '2rem',
  borderTop: `1px solid ${ampThemeVars.color.gray_200}`,
  background: 'transparent',
  textAlign: 'center',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_14,
});

export const firstItem = style({
  borderTop: 'none',
});
