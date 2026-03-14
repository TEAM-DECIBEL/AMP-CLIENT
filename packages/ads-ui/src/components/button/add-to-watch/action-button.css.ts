import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.6rem 1.2rem',
  gap: '0.8rem',
  borderRadius: '8px',
  backgroundColor: ampThemeVars.color.gray_000,
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.body_sb_13,

  selectors: {
    '&[data-selected="true"], &[data-emphasized="true"]': {
      backgroundColor: ampThemeVars.color.primary_deep,
      color: ampThemeVars.color.sub_1,
    },
  },
});
