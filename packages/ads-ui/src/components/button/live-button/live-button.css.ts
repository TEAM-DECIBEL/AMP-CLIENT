import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

const singleLineEllipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
} as const;

export const liveButtonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  aspectRatio: '1.95 / 1',
  padding: '0.7rem',
  gap: '0.5rem',
  backgroundColor: ampThemeVars.color.gray_000,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '16px',
  textAlign: 'left',
});

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.3rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  maxWidth: '100%',
  minHeight: '3.8rem',
  paddingLeft: '0.5rem',
  minWidth: 0,
  overflow: 'hidden',
});

export const title = style({
  width: '11.5rem',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_sb_13,
  ...singleLineEllipsis,
});

export const subText = style({
  width: '11.5rem',
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.caption_r_12,
  ...singleLineEllipsis,
});

export const iconContainer = style({
  flexShrink: 0,
  marginTop: 'auto',
  width: '2.3rem',
  height: '2.3rem',
});

export const img = style({
  width: '100%',
  aspectRatio: '1.95 / 1',
  borderRadius: '8px',
  objectFit: 'cover',
});
