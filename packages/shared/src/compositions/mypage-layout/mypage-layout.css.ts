import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem 2rem 3.6rem',
  color: ampThemeVars.color.gray_900,
});

export const profileSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const profileImage = style({
  width: '9.2rem',
  height: '9.2rem',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const profilePlaceholder = style({
  width: '10.4rem',
  height: '10.4rem',
  borderRadius: '50%',
  backgroundColor: ampThemeVars.color.gray_100,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
});

export const name = style({
  ...ampThemeVars.font.title_sb_18,
  margin: '1.6rem 0 0.6rem',
});
