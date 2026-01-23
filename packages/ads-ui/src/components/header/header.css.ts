import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const header = style({
  width: '100%',
  height: 'var(--header-height)',
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: ampThemeVars.zIndex.header,
  backgroundColor: ampThemeVars.color.gray_000,
});

export const mainRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.8rem 2rem',
});

export const mainIcons = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const iconButton = style({
  padding: '0.5rem',
});

export const headerIcon = style({
  width: '2.6rem',
  height: '2.6rem',
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

export const logo = style({
  width: '12rem',
  height: '3rem',
  cursor: 'pointer',
});
