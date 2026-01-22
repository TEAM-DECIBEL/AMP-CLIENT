import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const unsaved = style({
  backgroundColor: ampThemeVars.color.gray_000,
  color: ampThemeVars.color.gray_400,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  height: '5rem',
});

export const unsavedIcon = style({
  color: ampThemeVars.color.gray_400,
  height: '5rem',
});
