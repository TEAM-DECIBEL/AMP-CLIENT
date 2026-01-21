export const ORGANIZERS_QUERY_KEY = {
  ALL: ["organizers"],
  HOME_FESTIVALS: () => [...ORGANIZERS_QUERY_KEY.ALL, "home-festivals"],
  MY_PAGE: () => [...ORGANIZERS_QUERY_KEY.ALL, "my-page"],
} as const;
