export const ROUTE_PATH = {
  NOTICE_LIST: '/events/:eventId/notices',
  NOTICE_DETAILS: '/events/:eventId/notices/:noticeId',
  NOTIFICATION: '/notifications',
  MYPAGE: '/mypage',
  MY_EVENTS: '/my-events',
  SAVED_NOTICES: '/saved-notices',
  ONBOARDING: '/onboarding',
  LOGIN: '/login',
  HOME: '/',
  AUTH_REQUIRED: '/auth/required',
  NOTICE_EDIT: '/events/:eventId/notices/:noticeId/edit',
  CALLBACK: '/callback',
} as const;
