import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const notice = style({
  display: 'flex',
  gap: '2rem',
  position: 'relative',
  padding: '0.5rem 0',
  backgroundColor: ampThemeVars.color.gray_000,
});

export const image = style({
  width: '6.4rem',
  height: '6.4rem',
  borderRadius: '14px',
  flexShrink: 0,
  objectFit: 'cover',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
});

export const title = style({
  width: '15.9rem',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_14,

  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  overflow: 'hidden',
});

export const status = style({
  position: 'absolute',
  top: '0.5rem',
  right: 0,
});

export const date = style({
  color: ampThemeVars.color.gray_400,
  ...ampThemeVars.font.caption_m_12,
});

export const content = style({
  width: '22rem',
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.body_r_13,
  whiteSpace: 'pre-line',

  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
});

export const icon = style({
  width: '2.2rem',
  height: '2.2rem',
  color: ampThemeVars.color.primary,
});
