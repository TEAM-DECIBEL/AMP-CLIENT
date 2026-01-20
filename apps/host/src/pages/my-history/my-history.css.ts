import { style } from '@vanilla-extract/css';

export const page = style({
  padding: '2rem',
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const empty = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
