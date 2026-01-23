import { style } from '@vanilla-extract/css';

export const moreButton = style({
  display: 'flex',
  alignItems: 'center',
});

export const cardButton = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.6rem',
  position: 'relative',
  cursor: 'pointer',
});
