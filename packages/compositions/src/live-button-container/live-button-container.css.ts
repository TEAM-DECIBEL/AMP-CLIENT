import { style } from '@vanilla-extract/css';

export const liveButtonContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  padding: '2rem',
  width: '100%',
  boxSizing: 'border-box',
});
