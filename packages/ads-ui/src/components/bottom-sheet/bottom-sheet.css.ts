import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../styles';

export const container = style({
  position: 'fixed',
  inset: 0,
  zIndex: 100, // 추후 토큰으로 변경
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export const overlay = style({
  position: 'absolute',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.45)',
});

export const sheet = style({
  position: 'relative',
  width: '100%',
  maxWidth: '430px',
  background: ampThemeVars.color.gray_000,
  borderTopLeftRadius: '32px',
  borderTopRightRadius: '32px',
  minHeight: '17.6rem',
  maxHeight: '57.2rem', // 수정하기
  overflow: 'hidden',
});

export const handleWrap = style({
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const handle = style({
  width: '42px',
  height: '3px',
  borderRadius: '20px',
  background: ampThemeVars.color.gray_300,
});

export const content = style({
  overflow: 'auto',
  maxHeight: 'calc(80vh - 24px)',
});
