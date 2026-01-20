import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const ctaButtonArea = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '43rem',
  padding: '2rem',
  backgroundColor: ampThemeVars.color.gray_000,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 'calc(-10rem - 1px)',
      height: 'calc(10rem + 2px)',
      background: `linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 15%,
    rgba(255, 255, 255, 0.08) 30%,
    rgba(255, 255, 255, 0.22) 50%,
    rgba(255, 255, 255, 0.55) 70%,
    rgba(255, 255, 255, 0.9) 85%,
    rgba(255, 255, 255, 1) 95%,
    ${ampThemeVars.color.gray_000} 100%
  )`,

      pointerEvents: 'none',
    },
  },
});
