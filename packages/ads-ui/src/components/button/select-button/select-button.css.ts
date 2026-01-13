import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../../styles';

export const selectButtonContainer = recipe({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: ampThemeVars.color.gray_000,
    border: `1px solid ${ampThemeVars.color.gray_200}`,

    selectors: {
      '&[aria-pressed="true"]': {
        border: `1px solid ${ampThemeVars.color.primary}`,
      },
    },
  },

  variants: {
    kind: {
      role: {
        borderRadius: '16px',
        padding: '1.6rem',
        gap: '1rem',
        color: ampThemeVars.color.gray_800,
        ...ampThemeVars.font.title_sb_14,
      },
      crowding: {
        borderRadius: '8px',
        padding: '0.8rem',
        gap: '0.8rem',
        color: ampThemeVars.color.gray_900,
        ...ampThemeVars.font.body_m_14,
      },
    },
  },
});

export const image = recipe({
  base: {
    flexShrink: 0,
    objectFit: 'cover',
  },

  variants: {
    kind: {
      role: {
        width: '12.8rem',
        height: '12.8rem',
      },
      crowding: {
        width: '8.4rem',
        height: '8.4rem',
      },
    },
  },
});
