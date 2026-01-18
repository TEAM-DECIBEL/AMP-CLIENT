import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  margin: '3.1rem 2rem 0 2rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '0.5rem',
});

export const title = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
});

export const description = style({
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.body_m_14,
});

export const fixedBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 1.2rem 1rem 1.6rem',
  backgroundColor: ampThemeVars.color.gray_100,
  borderRadius: '10px',
});

export const fixedText = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.caption_m_12,
});
