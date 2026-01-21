export const USERS_QUERY_KEY = {
  ALL: ['users'],
  FESTIVAL_NOTICES: (festivalId: number) => [
    ...USERS_QUERY_KEY.ALL,
    'festival-notices',
    festivalId,
  ],
} as const;
