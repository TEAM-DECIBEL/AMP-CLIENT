import { style } from '@vanilla-extract/css';

export const chipSection = style({
  display: 'flex',
  gap: '0.3rem',
  padding: '1.6rem 2rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  WebkitOverflowScrolling: 'touch',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});
