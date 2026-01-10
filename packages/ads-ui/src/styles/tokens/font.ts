import { typography } from './typography';

export const font = {
  // heading
  heading_b_22: {
    fontSize: typography.fontSize.size22,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.lh130,
  },
  heading_sb_22: {
    fontSize: typography.fontSize.size22,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.lh130,
  },
  heading_sb_20: {
    fontSize: typography.fontSize.size20,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.lh150,
  },

  // title
  title_sb_18: {
    fontSize: typography.fontSize.size18,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.lh150,
  },
  title_sb_16: {
    fontSize: typography.fontSize.size16,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.lh150,
  },
  title_sb_14: {
    fontSize: typography.fontSize.size14,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.lh150,
  },

  // body
  body_m_16: {
    fontSize: typography.fontSize.size16,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.lh150,
  },
  body_m_14: {
    fontSize: typography.fontSize.size14,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.lh150,
  },
  body_sb_13: {
    fontSize: typography.fontSize.size13,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.lh150,
  },
  body_m_13: {
    fontSize: typography.fontSize.size13,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.lh150,
  },
  body_r_13: {
    fontSize: typography.fontSize.size13,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.lh150,
  },

  // caption
  caption_m_12: {
    fontSize: typography.fontSize.size12,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.lh150,
  },
  caption_r_12: {
    fontSize: typography.fontSize.size12,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.lh150,
  },
  caption_r_10: {
    fontSize: typography.fontSize.size10,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.lh150,
  },
} as const;
