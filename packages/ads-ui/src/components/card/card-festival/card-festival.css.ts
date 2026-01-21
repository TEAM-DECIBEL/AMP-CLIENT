import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const card = style({
  display: 'flex',
  position: 'relative',
  gap: '1.6rem',
  backgroundColor: ampThemeVars.color.gray_000,
  borderRadius: '16px',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  padding: '0.9rem 1rem',
  textAlign: 'left',
});

export const image = style({
  width: '6.3rem',
  height: '8.4rem',
  borderRadius: '8px',
  flexShrink: 0,
  objectFit: 'cover',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.8rem',
});

export const title = style({
  width: '18.1rem',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  overflow: 'hidden',
});

export const duration = style({
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.body_m_13,
});

export const buttonSlot = style({
  position: 'absolute',
  right: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const iconSlot = style({
  position: 'absolute',
  top: '1.25rem',
  right: '1rem',
  width: '2.2rem',
  height: '2.2rem',
});

export const chip = style({
  display: 'flex',
  gap: '0.5rem',
});
