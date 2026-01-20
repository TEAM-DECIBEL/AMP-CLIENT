import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const pageContainer = style({
  minHeight: '100dvh',
  padding: '2rem',
});

export const scrollArea = style({
  display: 'flex',
  flexDirection: 'column',
});

export const bottom = style({
  position: 'sticky',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1.7rem 0',
});

export const sectionText = recipe({
  base: {
    marginTop: '0.2rem',
    marginLeft: '0.5rem',
  },
  variants: {
    kind: {
      title: {
        color: ampThemeVars.color.gray_900,
        ...ampThemeVars.font.title_sb_18,
      },
      subText: {
        color: ampThemeVars.color.gray_500,
        ...ampThemeVars.font.body_m_14,
      },
    },
  },
});

export const divider = style({
  height: '1px',
  backgroundColor: ampThemeVars.color.gray_200,
  margin: '4rem 0',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1rem',
});

export const addButton = style({
  borderRadius: '99px',
  backgroundColor: ampThemeVars.color.gray_800,
  color: ampThemeVars.color.gray_000,
  ...ampThemeVars.font.body_sb_13,

  selectors: {
    '&:disabled': {
      border: `1px solid ${ampThemeVars.color.gray_200}`,
      backgroundColor: ampThemeVars.color.gray_000,
      color: ampThemeVars.color.gray_500,
    },
  },
});

export const addImageContainer = style({
  marginLeft: '0.5rem',
});
