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
  NOT_FOUND: '/not-found',
} as const;

export const ROUTE = {
  noticeList: (eventId: number) => `/events/${eventId}/notices`,
  noticeDetails: (eventId: number, noticeId: number) =>
    `/events/${eventId}/notices/${noticeId}`,
  noticeEdit: (eventId: number, noticeId: number) =>
    `/events/${eventId}/notices/${noticeId}/edit`,
};
