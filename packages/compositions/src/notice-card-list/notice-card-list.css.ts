import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '@amp/ads-ui/styles';

export const emptyContainer = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cardList = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '0 2rem',
});

export const card = style({
  marginBottom: '1.2rem',
  paddingBottom: '1.2rem',
  cursor: 'pointer',
  borderBottom: `1px solid ${ampThemeVars.color.gray_200}`,
  selectors: {
    '&:last-child': {
      paddingBottom: '1.2rem',
      borderBottom: 'none',
    },
  },
});
