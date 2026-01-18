import { style } from '@vanilla-extract/css';

export const content = style({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
});

export const emptyWrapper = style({
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
