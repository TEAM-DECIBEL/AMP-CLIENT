import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 2rem',
});

export const ctaButtonContainer = style({
  padding: '2rem 0',
  width: '100%',
});
