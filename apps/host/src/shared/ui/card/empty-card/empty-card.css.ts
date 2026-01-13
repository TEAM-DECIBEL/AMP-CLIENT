import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const emptyCard = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.1rem',
  borderRadius: '16px',
  border: `1px solid ${ampThemeVars.color.gray_100}`,
  backgroundColor: ampThemeVars.color.gray_000,
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.title_sb_16,
});
