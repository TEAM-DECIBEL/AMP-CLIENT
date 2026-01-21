export const ORGANIZERS_QUERY_KEY = {
  ALL: ["organizers"],
  HOME_FESTIVALS: () => [...ORGANIZERS_QUERY_KEY.ALL, "home-festivals"],
  MY_PAGE: () => [...ORGANIZERS_QUERY_KEY.ALL, "my-page"],
  MY_FESTIVALS_ALL: () => [...ORGANIZERS_QUERY_KEY.ALL, "my-festivals-all"],
} as const;
