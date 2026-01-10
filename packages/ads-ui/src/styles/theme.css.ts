import { createGlobalTheme } from '@vanilla-extract/css';

import { color } from './tokens/color';
import { font } from './tokens/font';
import { typography } from './tokens/typography';

const tokens = {
  color: color,
  font: font,
  ...typography,
};

const ampThemeVars = createGlobalTheme(':root', tokens);

export { ampThemeVars, tokens };
