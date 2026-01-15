import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const bannerContainer = style({
  position: 'relative',
});

export const tabBar = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  backgroundColor: ampThemeVars.color.gray_000,
  borderRadius: '16px 16px 0 0',
});

export const chipSection = style({});
