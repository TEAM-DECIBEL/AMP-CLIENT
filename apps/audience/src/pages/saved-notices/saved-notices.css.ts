import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const page = style({
  padding: '0 2rem',
  minHeight: 'calc(100dvh - var(--header-height))',
  display: 'flex',
  flexDirection: 'column',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
});

export const empty = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const divider = style({
  height: '1px',
  backgroundColor: ampThemeVars.color.gray_200,
  margin: '1rem 0',
});
