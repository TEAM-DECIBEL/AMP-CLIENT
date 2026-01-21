export const ORGANIZERS_QUERY_KEY = {
  ALL: ["organizers"],
  HOME_FESTIVALS: () => [...ORGANIZERS_QUERY_KEY.ALL, "home-festivals"],
} as const;
