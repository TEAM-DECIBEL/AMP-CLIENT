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
  marginBottom: '5rem',
});

export const profileImage = style({
  width: '9.2rem',
  height: '9.2rem',
  borderRadius: '50%',
  objectFit: 'cover',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
});

export const profilePlaceholder = style({
  width: '9.2rem',
  height: '9.2rem',
  borderRadius: '50%',
  backgroundColor: ampThemeVars.color.gray_100,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
});

export const name = style({
  ...ampThemeVars.font.title_sb_18,
  margin: '1.6rem 0 0.6rem',
});

export const menuSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '7rem',
});

export const contentWidth = style({
  width: '33.5rem',
  maxWidth: '100%',
});

export const dashboardSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '4rem',
});

export const logoutButton = style({
  color: ampThemeVars.color.gray_700,
  textAlign: 'center',
  textDecoration: 'underline',
  ...ampThemeVars.font.body_r_13,
});
