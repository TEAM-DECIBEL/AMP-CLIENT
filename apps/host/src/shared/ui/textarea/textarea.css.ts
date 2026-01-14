import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const textarea = style({
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  background: ampThemeVars.color.gray_000,
  outline: 'none',
  padding: '1.6rem 2rem',
  resize: 'none',
  width: '100%',
  height: '15rem',
  borderRadius: '16px',
  caretColor: ampThemeVars.color.primary,
  ...ampThemeVars.font.body_m_14,

  selectors: {
    '&:focus': {
      borderColor: ampThemeVars.color.gray_900,
    },
    '&::placeholder': {
      color: ampThemeVars.color.gray_400,
    },
  },
});
