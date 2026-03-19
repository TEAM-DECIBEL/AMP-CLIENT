import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../styles';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
});

export const chip = recipe({
  base,

  variants: {
    variant: {
      status: {
        padding: '0.4rem 1.2rem',
        ...ampThemeVars.font.caption_m_12,
      },
      day: {
        padding: '0.2rem 1rem',
        ...ampThemeVars.font.caption_m_12,
      },
      mypage: {
        padding: '0.3rem 2.5rem',
        backgroundColor: ampThemeVars.color.primary,
        color: ampThemeVars.color.gray_000,
        ...ampThemeVars.font.body_sb_13,
      },
      congestion: {
        width: '4.2rem',
        height: '1.7rem',
        borderRadius: '8px',
        whiteSpace: 'nowrap',
        ...ampThemeVars.font.caption_r_10,
      },
    },
    status: {
      current: {
        backgroundColor: ampThemeVars.color.primary_light,
        color: ampThemeVars.color.primary_deep,
      },
      completed: {
        backgroundColor: ampThemeVars.color.gray_100,
        color: ampThemeVars.color.gray_500,
      },
      dday: {
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_500,
      },
      upcoming: {
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_500,
      },
      color: {
        backgroundColor: ampThemeVars.color.primary_deep,
        color: ampThemeVars.color.gray_000,
      },
      gray: {
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_500,
      },
      smooth: {
        backgroundColor: ampThemeVars.color.congestion_blue_dark,
        color: ampThemeVars.color.congestion_blue_light,
      },
      normal: {
        backgroundColor: ampThemeVars.color.congestion_green_dark,
        color: ampThemeVars.color.congestion_green_light,
      },
      crowded: {
        backgroundColor: ampThemeVars.color.congestion_red_dark,
        color: ampThemeVars.color.congestion_red_light,
      },
      none: {
        backgroundColor: ampThemeVars.color.gray_800,
        color: ampThemeVars.color.gray_000,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: 'status',
        status: 'dday',
      },
      style: {
        padding: '0.3rem 1.2rem',
      },
    },
    {
      variants: {
        variant: 'status',
        status: 'upcoming',
      },
      style: {
        padding: '0.3rem 1.2rem',
      },
    },
  ],
});
