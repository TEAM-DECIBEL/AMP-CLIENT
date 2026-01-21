import { style } from '@vanilla-extract/css';

export const chipGroupContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  paddingLeft: '0.5rem',
  marginTop: '2rem',
});

export const row = style({
  display: 'flex',
  gap: '0.6rem',
});
