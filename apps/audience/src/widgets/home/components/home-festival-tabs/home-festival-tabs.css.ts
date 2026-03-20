import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const tabsSticky = style({
  position: 'sticky',
  top: 'var(--header-height)',
  zIndex: ampThemeVars.zIndex.sticky,
  backgroundColor: ampThemeVars.color.gray_000,
});
