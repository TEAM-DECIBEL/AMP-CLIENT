import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const banner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  height: '24.2rem',
  padding: '2.8rem 2rem 7.2rem 2rem',

  // 임시 이미지 대신 backgroundColor 설정 - 디자인 작업 후 이미지로 변경
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
  margin: 0,
  color: ampThemeVars.color.gray_000,
  ...ampThemeVars.font.heading_sb_22,
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

export const chip = style({
  width: '5.4rem',
});
