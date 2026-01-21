export const END_POINT = {
  // 홈 화면
  GET_HOME_FESTIVALS: '/organizer/me/festivals/active',
  // 진행 공연
  GET_MY_FESTIVALS_ALL: '/organizer/me/festivals/all',
  // 마이페이지
  GET_MY_PAGE: '/organizer/mypage',
  // 로그아웃
  POST_LOGOUT: '/auth/logout',
} as const;
