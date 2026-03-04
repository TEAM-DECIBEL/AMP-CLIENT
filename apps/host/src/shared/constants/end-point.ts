export const END_POINT = {
  // Festival
  POST_FESTIVAL_CREATE: '/festivals', // 공연 등록 화면
  DELETE_FESTIVAL: (festivalId: number) => `/organizer/festivals/${festivalId}`, // 공연 삭제
  GET_FESTIVAL_BANNER: (festivalId: number) => `/festivals/${festivalId}`, // 공연 정보 조회
  GET_FESTIVAL_CONGESTION: (eventId: number) =>
    `/festivals/${eventId}/congestion`, // 공연 별 무대 혼잡도 조회

  // Notice
  POST_FESTIVAL_NOTICE: (festivalId: number) =>
    `/festivals/${festivalId}/notices`, // 공지 생성
  // TODO: 수정, 삭제 하나로 합치기
  PUT_NOTICE: (noticeId: number) => `/notices/${noticeId}`, // 공지 수정
  DELETE_NOTICE: (noticeId: number) => `/notices/${noticeId}`, // 공지 삭제
  GET_FESTIVAL_NOTICES: (festivalId: number) =>
    `/festivals/${festivalId}/notices`, // 공연별 공지 리스트 조회
  //TODO :  공지 상세 조회 하나로 합치기
  GET_NOTICE_DETAIL: (noticeId: number) => `/notices/${noticeId}`, // 공지 상세 조회
  GET_FESTIVAL_NOTICE_DETAIL: (noticeId: number) => `/notices/${noticeId}`, // 공지 상세 조회

  // Organizer
  GET_MY_PAGE: '/organizer/mypage', // 마이페이지
  GET_MY_FESTIVALS_ALL: '/festivals/organizer/all', // 주최사 마이페이지 전체 공연 조회
  GET_HOME_FESTIVALS: '/festivals/organizer/active', // 주최사 진행중 / 예정 공연 조회

  // Auth
  POST_LOGOUT: '/auth/logout', // 로그아웃
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete', // 온보딩
} as const;
