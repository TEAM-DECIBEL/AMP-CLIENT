import { style } from '@vanilla-extract/css';

export const page = style({
  minHeight: '100dvh',
  paddingBottom: '8rem',
});

export const content = style({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '20px',
});

export const ctaArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',
});
