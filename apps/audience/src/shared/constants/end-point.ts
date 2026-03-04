export const END_POINT = {
  // Festival
  GET_ALL_FESTIVALS: '/festivals',
  GET_FESTIVAL_BANNER: (festivalId: number) => `/festivals/${festivalId}`,
  GET_FESTIVAL_CONGESTION: (eventId: number) =>
    `/festivals/${eventId}/congestion`,

  // Notice
  POST_NOTICE_BOOKMARK: (noticeId: number) => `/notices/${noticeId}/bookmark`,
  GET_FESTIVAL_NOTICE_DETAIL: (noticeId: number) => `/notices/${noticeId}`,
  GET_FESTIVAL_NOTICES: (eventId: number) => `/festivals/${eventId}/notices`,

  // Notification
  GET_NOTIFICATIONS: '/notifications', // 알림 스테이션
  PATCH_NOTIFICATIONS: (notificationId: number) =>
    `/festivals/notifications/${notificationId}/read`, // 알림 읽음 처리
  POST_FESTIVAL_NOTIFICATIONS_SUBSCRIBE: (
    festivalId: number,
    categoryCode: string,
  ) => `/festivals/${festivalId}/notifications/${categoryCode}/subscriptions`, // 카테고리 구독
  POST_FCM_TOKEN: '/audience/notifications/fcm-token', // FCM 토큰 기기 동기화

  // WishList
  //TODO: 하나로 합치기
  GET_MY_FESTIVALS_ALL: '/wishlists', // 홈 화면 관람 예정 공연 리스트
  GET_PLANNED_FESTIVALS: '/wishlists', // 홈 화면 관람 예정 공연 리스트
  GET_VIEWED_FESTIVALS: '/wishlists/all', // 마이페이지 관람 공연 전체 조회
  GET_UPCOMING_FESTIVAL: '/wishlists/recent', // 가장 임박한 관람 예정 공연 조회
  PUT_WISH_LIST: (festivalId: number) => `/wishlists/festivals/${festivalId}`, // 관람 예정 공연 등록 / 해제

  // Stage
  POST_STAGE_CONGESTION: (stageId: number) => `/stages/${stageId}/congestion`,

  // Audience
  GET_NICKNAME: '/audience/nickname',
  GET_MY_PAGE: '/audience/mypage', // 마이페이지
  GET_SAVED_NOTICES: '/audience/bookmarks', // 저장한 공지

  // Auth
  POST_LOGOUT: '/auth/logout',
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete',
} as const;
