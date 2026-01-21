import { style } from '@vanilla-extract/css';

export const liveButtonContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: '1rem',
  columnGap: '1.2rem',
  width: '100%',
  boxSizing: 'border-box',
});
