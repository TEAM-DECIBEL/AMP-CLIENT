import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

import { IMAGES } from '../../assets/index';

export const banner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  height: '25.7rem',
  padding: '5.2rem 3.2rem 2rem 3.2rem',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

export const bannerCard = style({
  backgroundImage: `url(${IMAGES.HOME_BANNER_AUDIENCE})`,
});

export const bannerNone = style({
  backgroundImage: `url(${IMAGES.HOME_BANNER_AUDIENCE_NONE})`,
});

export const text = style({
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.heading_sb_22,
});

export const nickname = style({
  color: ampThemeVars.color.primary,
});
