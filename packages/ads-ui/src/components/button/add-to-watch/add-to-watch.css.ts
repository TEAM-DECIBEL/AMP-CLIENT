import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const addToWatch = style({
  display: 'inline-flex',
  padding: '0.6rem 1.2rem',
  gap: '0.8rem',
  borderRadius: '8px',
  backgroundColor: ampThemeVars.color.gray_000,
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.body_sb_13,

  selectors: {
    '&[aria-pressed="true"]': {
      backgroundColor: ampThemeVars.color.primary_deep,
      color: ampThemeVars.color.sub_1,
    },
  },
});

export const icon = style({
  marginTop: '0.2rem',
  width: '1.4rem',
  height: '1.4rem',
});
