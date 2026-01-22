export const END_POINT = {
  // 홈 화면
  GET_HOME_FESTIVALS: '/organizer/me/festivals/active',

  // 공지 업로드
  POST_FESTIVAL_NOTICE: (festivalId: number) =>
    `/organizer/festivals/${festivalId}/notices`,

  // 공지 상세
  GET_NOTICE_DETAIL: (noticeId: number) => `/common/notices/${noticeId}`,

  // 공지 수정
  PUT_NOTICE: (noticeId: number) => `/organizer/notices/${noticeId}`,

  // 주최 공지
  GET_FESTIVAL_NOTICES: (eventId: number) =>
    `/common/festivals/${eventId}/notices`,

  // 온보딩
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete',
} as const;
