import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';
import { zIndex } from '@amp/ads-ui/styles/tokens/z-index.ts';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100dvh',
});

export const mainContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const contentHeader = style({
  position: 'sticky',
  top: 'var(--header-height)',
  marginTop: '-5rem',
  borderRadius: '16px 16px 0 0',
  backgroundColor: ampThemeVars.color.gray_000,
  zIndex: zIndex.overlay,
});

export const buttonContainer = style({
  position: 'fixed',
  bottom: '3rem',
  width: '100%',
  maxWidth: '43rem',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '2rem',
  pointerEvents: 'none',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const button = style({
  pointerEvents: 'auto',
});
