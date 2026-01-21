import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const pageContainer = style({
  height: '100vh',
  padding: '2rem',
});

export const divider = style({
  height: '0.1rem',
  margin: '1.2rem 0',
  backgroundColor: ampThemeVars.color.gray_200,
});

export const alertCardContainer = style({
  display: 'block',
  width: '100%',
  textAlign: 'left',
});

export const emptyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
  height: '100%',
  textAlign: 'center',
});

export const emptyTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
  color: ampThemeVars.color.gray_500,
});

export const emptyTitle = style({
  ...ampThemeVars.font.title_sb_18,
});

export const emptySubText = style({
  ...ampThemeVars.font.caption_m_12,
});
