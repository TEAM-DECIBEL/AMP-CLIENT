import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../styles';

export const root = style({
  display: 'block',
});

export const list = recipe({
  base: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
  },
  variants: {
    variant: {
      viewer: {
        padding: '1rem 2rem',
      },
      notice: {
        gap: '6px',
        padding: '1.6rem 0 0 2rem',
        height: '5rem',
        borderRadius: '16px 16px 0 0',
        borderBottom: `1px solid ${ampThemeVars.color.gray_200}`,
      },
    },
  },
});

export const trigger = recipe({
  base: {
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    display: 'inline-flex',
    alignItems: 'center',
    padding: 0,
  },
  variants: {
    variant: {
      viewer: {
        ...ampThemeVars.font.title_sb_18,
        color: ampThemeVars.color.gray_300,
        selectors: {
          '&:not(:last-child)::after': {
            content: '"|"',
            margin: '0 1rem',
            color: ampThemeVars.color.gray_900,
          },
        },
      },
      notice: {
        ...ampThemeVars.font.body_m_16,
        color: ampThemeVars.color.gray_300,
        textAlign: 'center',
        paddingBottom: '1rem',
        position: 'relative',
        width: '8rem',
        justifyContent: 'center',
      },
    },
    selected: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'viewer', selected: true },
      style: {
        color: ampThemeVars.color.gray_900,
      },
    },
    {
      variants: { variant: 'notice', selected: true },
      style: {
        ...ampThemeVars.font.title_sb_16,
        color: ampThemeVars.color.gray_900,
        selectors: {
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8rem',
            bottom: 0,
            height: '0.2rem',
            backgroundColor: ampThemeVars.color.gray_900,
          },
        },
      },
    },
  ],
});
