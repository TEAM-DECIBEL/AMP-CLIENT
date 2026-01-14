import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const listContainer = style({
  display: 'flex',
  width: '33.5rem',
  flexDirection: 'column',
  padding: '2rem 1.8rem',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '16px',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_m_13,
});

export const listItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${ampThemeVars.color.gray_200}`,
      paddingTop: '1.2rem',
      marginTop: '1.2rem',
    },
  },
});

export const icon = style({
  flexShrink: 0,
  width: '2.2rem',
  height: '2.2rem',
});
