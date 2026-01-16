import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const tabsSticky = style({
  position: 'sticky',
  top: 0,
  zIndex: ampThemeVars.zIndex.sticky,
  backgroundColor: ampThemeVars.color.gray_000,
});

export const content = style({
  padding: '2rem',
});

export const cardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
