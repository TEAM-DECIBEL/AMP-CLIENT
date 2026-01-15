import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const flagButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  backgroundColor: ampThemeVars.color.gray_000,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  color: ampThemeVars.color.gray_300,

  selectors: {
    '&[aria-pressed="true"]': {
      backgroundColor: ampThemeVars.color.primary_light,
      border: `1px solid ${ampThemeVars.color.primary_light2}`,
    },
  },
});

export const icon = style({
  display: 'block',
  width: '2.4rem',
  height: '2.4rem',
});
