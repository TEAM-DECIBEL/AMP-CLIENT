import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const previewContainer = style({
  position: 'relative',
  width: '9rem',
  height: '9rem',
  flexShrink: 0,
  overflow: 'visible',
});

export const previewImg = style({
  borderRadius: '16px',
  objectFit: 'cover',
});

export const removeButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '-0.6rem',
  right: '-0.6rem',
  width: '2.2rem',
  height: '2.2rem',
  borderRadius: '30px',
  backgroundColor: ampThemeVars.color.gray_900,
  color: ampThemeVars.color.gray_000,
  cursor: 'pointer',
});
