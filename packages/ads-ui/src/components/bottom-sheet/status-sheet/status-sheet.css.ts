import { style } from '@vanilla-extract/css';

import { ampThemeVars } from '../../../styles';

export const options = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '1rem',
  padding: '1.6rem 2.5rem 2rem',
});

export const emptyWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4.9rem 2.5rem 7.1rem',
});

export const option = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '0.8rem',
  borderRadius: '8px',
  border: `1px solid ${ampThemeVars.color.gray_200}`,
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.body_m_14,
  selectors: {
    '&[data-selected="true"]': {
      borderColor: ampThemeVars.color.primary,
    },
  },
});

export const optionMedia = style({
  width: '100%',
  aspectRatio: '1 / 1',
  backgroundColor: ampThemeVars.color.gray_100,
});

export const actions = style({
  padding: '0 2rem 4.6rem',
  display: 'flex',
  justifyContent: 'center',
});

export const empty = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const emptyIcon = style({
  display: 'block',
  marginBottom: '1.6rem',
});

export const emptyTitle = style({
  margin: 0,
  color: ampThemeVars.color.gray_900,
  ...ampThemeVars.font.title_sb_18,
  marginBottom: '0.2rem',
});

export const emptyDescription = style({
  margin: 0,
  color: ampThemeVars.color.gray_500,
  ...ampThemeVars.font.body_m_14,
});
