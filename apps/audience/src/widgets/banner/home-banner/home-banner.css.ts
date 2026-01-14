import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const banner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  height: '25.7rem',
  padding: '5.2rem 3.2rem 2rem 3.2rem',

  // TODO: 임시 이미지 대신 backgroundColor 설정 - 디자인 작업 후 이미지로 변경
  backgroundColor: '#A6E6CA',
});

export const text = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.heading_sb_22,
});

export const nickname = style({
  color: ampThemeVars.color.primary,
});
