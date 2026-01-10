import { ampThemeVars } from "@amp/ads-ui/styles";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  padding: "11.488px 15.318px",
  borderRadius: "16px",
  backgroundColor: ampThemeVars.color.gray_900,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

export const title = style({
  margin: 0,
  ...ampThemeVars.font.body_m_14,
  color: ampThemeVars.color.gray_000,
});

export const description = style({
  margin: 0,
  ...ampThemeVars.font.caption_r_12,
  color: ampThemeVars.color.gray_300,
});
