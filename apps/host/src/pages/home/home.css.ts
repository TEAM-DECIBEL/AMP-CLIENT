import { style } from '@vanilla-extract/css';

export const page = style({
  minHeight: '100dvh',
  paddingBottom: '8rem',
});

export const content = style({
  padding: '2rem',
});

export const ctaArea = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center',
});
