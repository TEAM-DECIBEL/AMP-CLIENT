import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginTop: '1.6rem',
});

export const addedItemContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr auto',
  alignItems: 'center',
  gap: '0.9rem',
  padding: '1rem 1.2rem',
  borderRadius: '10px',
  backgroundColor: ampThemeVars.color.gray_100,
});

export const textContainer = recipe({
  base: {
    display: 'flex',
    minWidth: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.8rem',
    color: ampThemeVars.color.gray_800,
    ...ampThemeVars.font.body_m_13,
  },

  variants: {
    variant: {
      default: {},

      location: {
        color: ampThemeVars.color.gray_500,
        ...ampThemeVars.font.caption_m_12,
      },
    },
  },
});

export const icon = style({
  flexShrink: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1.6rem',
  height: '1.6rem',
});

export const value = style({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const removeButton = style({
  flexShrink: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.2rem',
  height: '2.2rem',
});
