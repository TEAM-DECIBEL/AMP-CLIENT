import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';
import { zIndex } from '@amp/ads-ui/styles/tokens/z-index.ts';

export const header = style({
  position: 'sticky',
  top: 0,
  marginTop: '-5rem',
  borderRadius: '16px 16px 0 0',
  backgroundColor: ampThemeVars.color.gray_000,
  zIndex: zIndex.overlay,
});

export const tabBar = style({
  height: '5rem',
  borderRadius: '16px 16px 0 0',
  borderBottom: `1px solid ${ampThemeVars.color.gray_200}`,
});

export const chipSection = style({
  display: 'flex',
  gap: '0.3rem',
  padding: '1.6rem 2rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  WebkitOverflowScrolling: 'touch',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

export const cardList = style({
  padding: '0 2rem',
});

export const card = style({
  marginBottom: '1.2rem',
  paddingBottom: '1.2rem',
  borderBottom: `1px solid ${ampThemeVars.color.gray_200}`,
  selectors: {
    '&:last-child': {
      paddingBottom: '1.2rem',
      borderBottom: 'none',
    },
  },
});
