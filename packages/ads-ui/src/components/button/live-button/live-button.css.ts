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
  height: '13.4rem',
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
  gap: '0.4rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  paddingLeft: '0.5rem',
  width: '12rem',
});

export const title = style({
  width: '100%',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_sb_13,
  ...singleLineEllipsis,
});

export const subText = style({
  width: '100%',
  minHeight: '1.8rem',
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.caption_r_12,
  ...singleLineEllipsis,

  selectors: {
    '&:empty': {
      visibility: 'hidden',
    },
  },
});

export const iconContainer = style({
  marginTop: 'auto',
  width: '2.3rem',
  height: '2.3rem',
});

export const img = style({
  width: '100%',
  height: '7.5rem',
  borderRadius: '8px',
  objectFit: 'cover',
  overflow: 'hidden',
});
