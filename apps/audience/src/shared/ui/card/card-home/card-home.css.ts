import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

import fixedBgImage from '@shared/assets/home/card_home.webp';

export const background = style({
  padding: '1.2rem 1.5rem',
  backgroundImage: `url(${fixedBgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  paddingLeft: '0.1rem',
});

export const titleSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  paddingRight: '0.5rem',
});

export const title = style({
  margin: 0,
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  overflow: 'hidden',
});

export const descriptionSection = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const description = style({
  display: 'flex',
  flexDirection: 'column',
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.caption_m_12,
});

export const location = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const dday = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: ampThemeVars.color.primary,
  ...ampThemeVars.font.heading_b_22,
});

export const ddayText = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.35rem 1rem',
  backgroundColor: ampThemeVars.color.primary_light2,
  borderRadius: '6px',
});

export const wifiIcon = style({
  width: '2.2rem',
  height: '2.2rem',
  flexShrink: 0,
});

export const locateIcon = style({
  width: '1.4rem',
  height: '1.4rem',
  flexShrink: 0,
});
