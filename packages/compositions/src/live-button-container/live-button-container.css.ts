import { style } from '@vanilla-extract/css';

export const liveButtonContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: '1rem',
  columnGap: '1.2rem',
  padding: '2rem 0 2rem 0',
  width: '100%',
  boxSizing: 'border-box',
});
