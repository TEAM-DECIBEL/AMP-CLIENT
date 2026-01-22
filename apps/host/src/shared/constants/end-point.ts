export const END_POINT = {
  // 홈 화면
  GET_HOME_FESTIVALS: '/organizer/me/festivals/active',

  // 공지 업로드
  POST_FESTIVAL_NOTICE: (festivalId: number) =>
    `/organizer/festivals/${festivalId}/notices`,

  // 온보딩
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete',
} as const;
