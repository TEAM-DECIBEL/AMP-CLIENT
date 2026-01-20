import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ctaButtonContainer = style({
  padding: '2rem',
  width: '100%',
});
