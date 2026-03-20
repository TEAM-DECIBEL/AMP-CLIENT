import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const page = style({
  minHeight: '100dvh',
  paddingBottom: 'calc(11rem + env(safe-area-inset-bottom))',
});

export const content = style({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '20px',
  width: '100%',
});

export const ctaArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',
});

export const bannerContainer = style({
  position: 'sticky',
  top: 'var(--header-height)',
  zIndex: ampThemeVars.zIndex.sticky,
});
