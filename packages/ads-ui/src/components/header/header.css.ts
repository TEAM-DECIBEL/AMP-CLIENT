import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const header = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const mainRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.6rem 1.6rem',
});

export const mainIcons = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const iconButton = style({
  padding: '0.5rem',
});

export const subRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  padding: '1.2rem 0',
});

export const backButton = style({
  position: 'absolute',
  left: 0,
  paddingLeft: '1.3rem',
});

export const title = style({
  margin: 0,
  flex: 1,
  textAlign: 'center',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_16,
});
