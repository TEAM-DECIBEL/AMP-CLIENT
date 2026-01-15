import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';
import { zIndex } from '@amp/ads-ui/styles/tokens/z-index.ts';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const mainContainer = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

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
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
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

export const emptyContainer = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const emptyText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  justifyContent: 'center',
  alignItems: 'center',
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.title_sb_16,
});

export const buttonContainer = style({
  position: 'fixed',
  bottom: '3rem',
  width: '100%',
  maxWidth: '430px',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '2.3rem',
  pointerEvents: 'none',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const button = style({
  pointerEvents: 'auto',
});

export const ctaButton = style({
  marginBottom: '1.6rem',
});
