export const ROUTE_PATH = {
  EVENT_CREATE: '/events/new',
  NOTICE_LIST: '/events/:eventId/notices',
  NOTICE_CREATE: '/events/:eventId/notices/new',
  NOTICE_EDIT: '/events/:eventId/notices/:noticeId/edit',
  NOTICE_DETAILS: '/events/:eventId/notices/:noticeId',
  MYPAGE: '/mypage',
  ONBOARDING: '/onboarding',
  MY_HISTORY: '/mypage/history',
  LOGIN: '/login',
  HOME: '/',
  AUTH_REQUIRED: '/auth/required',
  CALLBACK: '/callback',
} as const;
