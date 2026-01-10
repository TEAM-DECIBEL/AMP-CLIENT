import { createGlobalTheme } from "@vanilla-extract/css";

import { color } from "./tokens/color";
import { font } from "./tokens/font";
import { typography } from "./tokens/typography";
import { zIndex } from "./tokens/z-index";

const tokens = {
  color: color,
  font: font,
  zIndex: zIndex,
  ...typography,
};

const ampThemeVars = createGlobalTheme(':root', tokens);

export { ampThemeVars, tokens };
