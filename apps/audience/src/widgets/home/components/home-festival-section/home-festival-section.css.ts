import { style } from '@vanilla-extract/css';

export const section = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  padding: '2rem',
});

export const emptyContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

export const cardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
