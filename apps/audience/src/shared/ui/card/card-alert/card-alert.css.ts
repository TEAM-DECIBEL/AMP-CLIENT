import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const alertCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  padding: '0.5rem 1rem',
  backgroundColor: ampThemeVars.color.gray_000,
  color: ampThemeVars.color.gray_400,
});

export const read = style({
  color: ampThemeVars.color.gray_400,
});

export const titleSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '1.75rem',
});

export const title = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_14,
});

export const description = style({
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.body_r_13,
});

export const time = style({
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.caption_r_12,
});
