import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const empty = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',
});

export const image = style({
  width: '14rem',
  height: '14rem',
  backgroundColor: ampThemeVars.color.gray_200,
});

export const textGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
});

export const titleWithDescription = style({
  textAlign: 'center',
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.title_sb_18,
});

export const titleOnly = style({
  textAlign: 'center',
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.title_sb_16,
});

export const description = style({
  textAlign: 'center',
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.caption_m_12,
});
