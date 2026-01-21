import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.4rem',
});

export const list = style({
  width: '100%',
  maxWidth: '335px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const item = style({
  width: '100%',
});
