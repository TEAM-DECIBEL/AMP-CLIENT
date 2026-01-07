import { createTheme } from "@vanilla-extract/css";
import { color } from "./tokens/color";
import { font } from "./tokens/font";
import { typography } from "./tokens/typography";

const tokens = {
  color: color,
  font: font,
  ...typography,
};

const [ampThemeClass, ampThemeVars] = createTheme(tokens);

export { ampThemeClass, ampThemeVars, tokens };
