import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const banner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  padding: '2.8rem 2rem 7.2rem 2rem',

  // 임시 이미지 대신 backgroundColor 설정
  backgroundColor: '#A6E6CA',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  paddingLeft: '0.5rem',
});

export const title = style({
  color: ampThemeVars.color.gray_000,
  ...ampThemeVars.font.heading_b_22,
});

export const description = style({
  color: ampThemeVars.color.gray_100,
  ...ampThemeVars.font.body_m_14,
});

export const date = style({
  ...ampThemeVars.font.caption_r_12,
});

export const button = style({
  display: 'flex',
  justifyContent: 'flex-end',
});
