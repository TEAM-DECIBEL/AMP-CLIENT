import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const card = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  gap: '1.6rem',
  backgroundColor: ampThemeVars.color.gray_000,
  borderRadius: '16px',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  padding: '0.9rem 1.2rem',
});

export const image = style({
  width: '6.3rem',
  height: '8.4rem',
  borderRadius: '8px',
  flexShrink: 0,
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const title = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
});

export const duration = style({
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.body_m_13,
});

export const buttonSlot = style({
  position: 'absolute',
  right: '1.2rem',
});

export const iconSlot = style({
  position: 'absolute',
  top: '1rem',
  right: '1.2rem',
  width: '2.2rem',
  height: '2.2rem',
});

export const chip = style({
  display: 'flex',
  gap: '0.5rem',
});
