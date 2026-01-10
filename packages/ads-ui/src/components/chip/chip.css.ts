import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ampThemeVars } from '../../styles';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '2rem',
});

export const chip = recipe({
  base,

  variants: {
    variant: {
      chip_status: {
        padding: '0.4rem 1.2rem',
        ...ampThemeVars.font.caption_m_12,
      },
      chip_day: {
        padding: '0.2rem 1rem',
        ...ampThemeVars.font.caption_m_12,
      },
      chip_mypage: {
        padding: '0.3rem 2.5rem',
        backgroundColor: ampThemeVars.color.primary,
        color: ampThemeVars.color.gray_000,
        ...ampThemeVars.font.body_sb_13,
      },
    },
    status: {
      current: {
        backgroundColor: ampThemeVars.color.primary_light2,
        color: ampThemeVars.color.primary_deep,
      },
      upcoming: {
        backgroundColor: ampThemeVars.color.gray_100,
        color: ampThemeVars.color.gray_500,
      },
      dday: {
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_500,
      },
      color: {
        backgroundColor: ampThemeVars.color.primary_deep,
        color: ampThemeVars.color.gray_000,
      },
      gray: {
        border: `1px solid ${ampThemeVars.color.gray_200}`,
        backgroundColor: ampThemeVars.color.gray_000,
        color: ampThemeVars.color.gray_500,
      },
    },
  },

  compoundVariants: [
    { variants: { variant: 'chip_status', status: 'current' }, style: {} },
    { variants: { variant: 'chip_status', status: 'upcoming' }, style: {} },
    { variants: { variant: 'chip_status', status: 'dday' }, style: {} },
    { variants: { variant: 'chip_day', status: 'color' }, style: {} },
    { variants: { variant: 'chip_day', status: 'gray' }, style: {} },
  ],
});
