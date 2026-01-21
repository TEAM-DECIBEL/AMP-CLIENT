export const ORGANIZERS_QUERY_KEY = {
  ALL: ['organizers'],
  HOME_FESTIVALS: () => [...ORGANIZERS_QUERY_KEY.ALL, 'home-festivals'],
  FESTIVAL_CONGESTION: (eventId: number) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'festival',
    eventId,
    'congestion',
  ],
} as const;
