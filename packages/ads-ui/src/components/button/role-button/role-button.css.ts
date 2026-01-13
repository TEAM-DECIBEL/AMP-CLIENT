import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const roleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  padding: '1.6rem',
  gap: '1rem',
  backgroundColor: ampThemeVars.color.gray_000,
  color: ampThemeVars.color.gray_800,
  ...ampThemeVars.font.title_sb_14,

  selectors: {
    '&[aria-pressed="true"]': {
      border: `1px solid ${ampThemeVars.color.primary}`,
    },
  },
});

export const image = style({
  flexShrink: 0,
  width: '12.8rem',
  height: '12.8rem',
  objectFit: 'cover',
});
