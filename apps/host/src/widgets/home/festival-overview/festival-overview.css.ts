import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '1.4rem',
  width: '100%',
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignSelf: 'stretch',
  width: '100%',
});
