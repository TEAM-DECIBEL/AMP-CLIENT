import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const container = style({
  position: 'fixed',
  inset: 0,
  zIndex: ampThemeVars.zIndex.modal,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export const overlay = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: ampThemeVars.color.gray_999_20,
});

export const panel = style({
  position: 'relative',
  width: '100%',
  maxWidth: '43rem',
  borderTopLeftRadius: '32px',
  borderTopRightRadius: '32px',
  backgroundColor: ampThemeVars.color.gray_000,
  overflow: 'hidden',
});

export const handleWrap = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem 0',
});

export const handle = style({
  width: '42px',
  height: '3px',
  borderRadius: '20px',
  background: ampThemeVars.color.gray_200,
});

export const header = style({
  padding: '2rem 2.5rem 0',
  display: 'flex',
  flexDirection: 'column',
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
});

export const content = style({
  padding: '1.6rem 2.5rem 0.6rem',
});

export const actions = style({
  padding: '2rem 2rem 1.4rem',
});
