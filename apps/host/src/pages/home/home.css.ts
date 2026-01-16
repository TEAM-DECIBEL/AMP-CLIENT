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
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '43rem',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',
});
