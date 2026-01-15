import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const addImageButton = recipe({
  base: {
    width: '9rem',
    height: '9rem',
    border: `1px solid ${ampThemeVars.color.gray_200}`,
    borderRadius: '16px',
  },

  variants: {
    hasImage: {
      true: {
        padding: 0,
        overflow: 'hidden',
      },
      false: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.9rem 2.1rem',
        color: ampThemeVars.color.gray_400,
        ...ampThemeVars.font.caption_r_10,
      },
    },
  },
});

export const icon = style({
  width: '2.5rem',
  height: '2.5rem',
});

export const img = style({
  width: '100%',
  height: '100%',
  flexShrink: 0,
  objectFit: 'cover',
});
