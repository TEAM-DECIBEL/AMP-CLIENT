import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const crowdLevelButton = style({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.8rem',
  gap: '0.8rem',
  backgroundColor: ampThemeVars.color.gray_000,
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  borderRadius: '8px',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_m_14,
  cursor: 'pointer',

  selectors: {
    '&[aria-pressed="true"]': {
      border: `1px solid ${ampThemeVars.color.primary}`,
    },
  },
});

export const image = style({
  flexShrink: 0,
  objectFit: 'cover',
  width: '8.4rem',
  height: '8.4rem',
});
