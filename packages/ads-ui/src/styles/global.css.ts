import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  width: '100%',
  height: '100dvh',
  padding: '0',
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', sans-serif`,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
});

globalStyle('#root', {
  width: '100%',
  minWidth: '375px',
  maxWidth: '430px',
  minHeight: '100dvh',
  margin: '0 auto',
  vars: {
    '--header-height': '4.8rem',
  },
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
