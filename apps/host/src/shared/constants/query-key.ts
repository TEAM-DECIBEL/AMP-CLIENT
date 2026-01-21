export const ORGANIZERS_QUERY_KEY = {
  ALL: ['organizers'],
  HOME_FESTIVALS: () => [...ORGANIZERS_QUERY_KEY.ALL, 'home-festivals'],
  FESTIVAL_NOTICES: (eventId: number) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'festival-notices',
    eventId,
  ],
} as const;
