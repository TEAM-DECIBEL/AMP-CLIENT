import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const liveButtonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '16.2rem',
  height: '13.4rem',
  padding: '0.8rem',
  gap: '0.5rem',
  backgroundColor: ampThemeVars.color.gray_000,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '16px',
});

export const contentContainer = style({
  display: 'flex',
  paddingLeft: '0.5rem',
  gap: '0.4rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const title = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_sb_13,
});

export const subText = style({
  minHeight: '1.8rem',
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.caption_r_12,

  selectors: {
    '&:empty': {
      visibility: 'hidden',
    },
  },
});

export const iconContainer = style({
  marginTop: 'auto',
});

export const icon = style({
  flexShrink: 0,
  width: '2.3rem',
  height: '2.3rem',
});

export const img = style({
  flexShrink: 0,
  width: '100%',
  height: '7.5rem',
  borderRadius: '8px',
  objectFit: 'cover',
  overflow: 'hidden',
});
