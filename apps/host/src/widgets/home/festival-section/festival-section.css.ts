import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '1.4rem',
  width: '100%',
});

export const list = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignSelf: 'stretch',
});

export const item = style({
  width: '100%',
});
