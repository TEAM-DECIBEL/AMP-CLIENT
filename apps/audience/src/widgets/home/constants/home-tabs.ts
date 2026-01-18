export const TAB_ALL = 'all' as const;
export const TAB_UPCOMING = 'upcoming' as const;
export type TabValue = typeof TAB_ALL | typeof TAB_UPCOMING;
