export const END_POINT = {
  // 공연 혼잡도 조회
  GET_FESTIVAL_CONGESTION: (eventId: number) =>
    `common/festivals/${eventId}/congestion`,

  // 저장한 공지
  GET_SAVED_NOTICES: '/users/me/bookmark',

  // 공지 상세
  GET_FESTIVAL_NOTICE_DETAIL: (noticeId: number | string) =>
    `/common/notices/${noticeId}`,
  GET_FESTIVAL_NOTICES: (eventId: number) =>
    `/common/festivals/${eventId}/notices`,
  POST_FESTIVAL_NOTIFICATIONS_SUBSCRIBE: (
    festivalId: number,
    categoryCode: string,
  ) => `/festivals/${festivalId}/users/notifications/${categoryCode}/subscribe`,
  GET_FESTIVAL_BANNER: (festivalId: number) =>
    `/common/festivals/${festivalId}`,

  // 홈 화면
  GET_ALL_FESTIVALS: '/users/festivals',
  GET_PLANNED_FESTIVALS: '/users/me/festivals',
  GET_UPCOMING_FESTIVAL: '/users/me/festivals/recent',
  GET_MY_FESTIVALS_ALL: '/users/me/festivals/all',
  PUT_WISH_LIST: (festivalId: number) =>
    `/users/me/festivals/${festivalId}/wishList`,

  //온보딩
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete',

  // 현장 혼잡도 입력
  POST_STAGE_CONGESTION: (stageId: number) =>
    `/users/stages/${stageId}/congestion`,

  // 북마크
  POST_NOTICE_BOOKMARK: (noticeId: number) =>
    `/users/notices/${noticeId}/bookmark`,

  // 마이페이지
  GET_MY_PAGE: '/users/mypage',

  // 로그아웃
  POST_LOGOUT: '/auth/logout',

  // 알림 스테이션
  GET_NOTIFICATIONS: '/users/notifications',
  POST_NOTIFICATIONS: (notificationId: number) =>
    `users/notifications/${notificationId}/read`,

  // 마이페이지 관람 공연
  GET_VIEWED_FESTIVALS: '/users/me/festivals/all',
} as const;
