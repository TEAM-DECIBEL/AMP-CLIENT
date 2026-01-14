import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.4rem',
});
