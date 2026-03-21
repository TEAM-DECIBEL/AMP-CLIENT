export const ROUTE_PATH = {
  EVENT_CREATE: '/events/new',
  EVENT_EDIT: '/events/:eventId/edit',
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
  NOT_FOUND: '/not-found',
  LOGIN_ERROR: '/login/error',
  PWA_GUIDE: '/pwa-guide',
} as const;

export const NAV_PATH = {
  noticeList: (eventId: number) => `/events/${eventId}/notices`,
  noticeCreate: (eventId: number) => `/events/${eventId}/notices/new`,
  noticeDetails: (eventId: number, noticeId: number) =>
    `/events/${eventId}/notices/${noticeId}`,
  noticeEdit: (eventId: number, noticeId: number) =>
    `/events/${eventId}/notices/${noticeId}/edit`,
} as const;
