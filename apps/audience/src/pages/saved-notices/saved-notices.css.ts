import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const page = style({
  padding: '2rem',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
});

export const divider = style({
  height: '1px',
  backgroundColor: ampThemeVars.color.gray_200,
  margin: '1rem 0',
});
