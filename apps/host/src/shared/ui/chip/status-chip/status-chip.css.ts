import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  display: 'flex',
  width: '33.5rem',
  height: '3.5rem',
  padding: '0.7rem 1.2rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  borderRadius: '12px',
  backgroundColor: ampThemeVars.color.gray_100,
  color: ampThemeVars.color.gray_900,
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.1rem',
});

export const title = style({
  color: ampThemeVars.color.gray_800,
  ...ampThemeVars.font.title_sb_14,
});

export const count = style({
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.caption_m_12,
});
