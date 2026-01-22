export const END_POINT = {
  // 홈 화면
  GET_HOME_FESTIVALS: '/organizer/me/festivals/active',

  // 공연 등록 화면
  POST_FESTIVAL_CREATE: '/organizer/festivals',
  // 공연 혼잡도 조회
  GET_FESTIVAL_CONGESTION: (eventId: number) =>
    `common/festivals/${eventId}/congestion`,

  // 진행 공연
  GET_MY_FESTIVALS_ALL: '/organizer/me/festivals/all',
  // 마이페이지
  GET_MY_PAGE: '/organizer/mypage',
  // 로그아웃
  POST_LOGOUT: '/auth/logout',

  // 공지 상세
  GET_FESTIVAL_NOTICE_DETAIL: (noticeId: number | string) =>
    `/common/notices/${noticeId}`,

  // 공지 업로드
  POST_FESTIVAL_NOTICE: (festivalId: number) =>
    `/organizer/festivals/${festivalId}/notices`,

  // 공지 상세
  GET_NOTICE_DETAIL: (noticeId: number) => `/common/notices/${noticeId}`,

  // 공지 수정
  PUT_NOTICE: (noticeId: number) => `/organizer/notices/${noticeId}`,

  // 주최 공지
  GET_FESTIVAL_NOTICES: (festivalId: number) =>
    `/common/festivals/${festivalId}/notices`,

  // 온보딩
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete',
} as const;
