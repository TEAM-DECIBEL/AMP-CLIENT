import { keyframes, style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';
import { zIndex } from '../../styles/tokens/z-index';

const slideUp = keyframes({
  from: {
    transform: 'translateY(25px)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const toastItem = style({
  pointerEvents: 'auto',
  animation: `${slideUp} 200ms ease-out forwards`,
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const container = style({
  position: 'fixed',
  bottom: '2.5rem',
  left: '50%',
  transform: 'translateX(-50%)',

  display: 'flex',
  flexDirection: 'column-reverse',
  gap: '0.8rem',

  zIndex: zIndex.toast,
  pointerEvents: 'none',
});

export const toast = style({
  pointerEvents: 'auto',

  borderRadius: '16px',
  padding: '1rem 1.6rem',
  display: 'flex',
  gap: '1rem',
  background: ampThemeVars.color.gray_800_90,
  width: '31.5rem',

  animation: `${slideUp} 200ms ease-out forwards`,

  selectors: {
    '&[data-exit="true"]': {
      animation: `${fadeOut} 200ms ease-in forwards`,
    },
  },
});

export const title = style({
  ...ampThemeVars.font.caption_m_12,
  color: ampThemeVars.color.gray_000,
});

export const description = style({
  ...ampThemeVars.font.caption_r_10,
  color: ampThemeVars.color.gray_400,
});
