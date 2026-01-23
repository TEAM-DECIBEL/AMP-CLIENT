import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

import { IMAGES } from '../../assets/index';

export const banner = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  minHeight: '24.2rem',
  padding: '2.8rem 2rem 7.2rem 2rem',
  backgroundImage: `url(${IMAGES.NOTICE_BANNER})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
  width: '31.5rem',
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.heading_sb_22,

  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const description = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_m_14,
});

export const date = style({
  ...ampThemeVars.font.caption_r_12,
});

export const button = style({
  position: 'absolute',
  bottom: '7.2rem',
  right: '2rem',
});

export const chip = style({
  width: '5.6rem',
});
