import { createGlobalTheme } from "@vanilla-extract/css";
import { color } from "./tokens/color";
import { font } from "./tokens/font";
import { zIndex } from "./tokens/z-index";
import { typography } from "./tokens/typography";

const tokens = {
  color: color,
  font: font,
  zIndex: zIndex,
  ...typography,
};

const ampThemeVars = createGlobalTheme(":root", tokens);

export { ampThemeVars, tokens };
