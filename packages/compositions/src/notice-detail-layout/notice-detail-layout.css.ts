import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100dvh - var(--header-height))',
  overflow: 'hidden',
});

export const img = style({
  width: '100%',
  height: '36.6rem',
  flexShrink: 0,
  objectFit: 'cover',
  scrollSnapAlign: 'start',
  userSelect: 'none',
});

export const imageSection = style({
  position: 'relative',
});

export const imageItem = style({
  flexShrink: 0,
  width: '100%',
  listStyle: 'none',
});

export const imageTrack = style({
  display: 'flex',
  overflowX: 'auto',
  padding: 0,
  margin: 0,
  scrollSnapType: 'x mandatory',
  scrollBehavior: 'smooth',
  scrollbarWidth: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&[data-dragging="true"]': {
      scrollSnapType: 'none',
      scrollBehavior: 'auto',
    },
  },
});

export const indicator = style({
  position: 'absolute',
  top: '2rem',
  right: '2rem',
});

export const noticeDetail = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  overflowY: 'auto',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.2rem 2rem',
});

export const contents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '2rem 2rem calc(13.5rem + env(safe-area-inset-bottom))',
});

export const category = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_m_14,
});

export const date = style({
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.body_r_13,
});

export const title = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.heading_sb_20,
});

export const text = style({
  color: ampThemeVars.color.gray_700,
  ...ampThemeVars.font.body_r_13,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
});

export const button = style({
  display: 'flex',
  gap: '1rem',
  padding: '1.7rem 2rem calc(1.7rem + env(safe-area-inset-bottom))',
});
