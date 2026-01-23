import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100dvh',
});

export const buttonContainer = style({
  padding: '2rem',
});
