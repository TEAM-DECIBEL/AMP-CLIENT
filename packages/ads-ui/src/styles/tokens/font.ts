import { typography } from "./typography";

export const font = {
  // heading
  heading_b_22: {
    fontSize: typography.fontSize[22],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  heading_sb_22: {
    fontSize: typography.fontSize[22],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  heading_sb_20: {
    fontSize: typography.fontSize[20],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },

  // title
  title_sb_18: {
    fontSize: typography.fontSize[18],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  title_sb_16: {
    fontSize: typography.fontSize[16],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  title_sb_14: {
    fontSize: typography.fontSize[14],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },

  // body
  body_m_16: {
    fontSize: typography.fontSize[16],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  body_m_14: {
    fontSize: typography.fontSize[14],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  body_sb_13: {
    fontSize: typography.fontSize[13],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  body_m_13: {
    fontSize: typography.fontSize[13],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  body_r_13: {
    fontSize: typography.fontSize[13],
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },

  // caption
  caption_m_12: {
    fontSize: typography.fontSize[12],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  caption_r_12: {
    fontSize: typography.fontSize[12],
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
  caption_r_10: {
    fontSize: typography.fontSize[10],
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight["150"],
    letterSpacing: typography.letterSpacing["0"],
  },
} as const;
