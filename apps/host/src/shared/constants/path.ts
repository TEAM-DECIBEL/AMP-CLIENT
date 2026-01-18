export const ROUTE_PATH = {
  EVENT_CREATE: 'events/new',
  NOTICE_LIST: 'events/:eventId/notices',
  NOTICE_CREATE: 'events/:eventId/notices/new',
  NOTICE_DETAILS: 'events/:eventId/notices/:noticeId',
  MYPAGE: 'mypage',
  ONBOARDING: 'onboarding',
  MY_HISTORY: 'mypage/history',
  LOGIN: 'login',
  HOME: '/',
} as const;
