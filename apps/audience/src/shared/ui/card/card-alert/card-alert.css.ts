import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const alertCard = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  padding: '0.5rem 1.75rem 0.5rem 1rem',
  backgroundColor: ampThemeVars.color.gray_000,
  textAlign: 'left',
});

export const read = style({});

export const titleSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  margin: 0,
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_14,
  selectors: {
    [`${read} &`]: { color: ampThemeVars.color.gray_400 },
  },
});

export const description = style({
  margin: 0,
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.body_r_13,
  selectors: {
    [`${read} &`]: { color: ampThemeVars.color.gray_400 },
  },
});

export const time = style({
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.caption_r_12,
  selectors: {
    [`${read} &`]: { color: ampThemeVars.color.gray_400 },
  },
});
