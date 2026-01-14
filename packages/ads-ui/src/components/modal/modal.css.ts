import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: ampThemeVars.color.gray_999_20,
  zIndex: ampThemeVars.zIndex.overlay,
});

export const modal = style({
  width: '100%',
  maxWidth: '30.5rem',
  borderRadius: '20px',
  padding: '2.4rem 2rem 2rem',
  backgroundColor: ampThemeVars.color.gray_000,
  zIndex: ampThemeVars.zIndex.modal,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginTop: '2.4rem',
});

export const title = style({
  margin: 0,
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
});

export const description = style({
  margin: 0,
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.body_m_14,
  whiteSpace: 'pre-line',
});
