import { style } from '@vanilla-extract/css';

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
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
});

export const imageTrack = style({
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  padding: 0,
  margin: 0,
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  overscrollBehaviorX: 'contain',
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
