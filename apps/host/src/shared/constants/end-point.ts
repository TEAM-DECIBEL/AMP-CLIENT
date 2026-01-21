export const END_POINT = {
  // 홈 화면
  GET_HOME_FESTIVALS: '/organizer/me/festivals/active',

  // 주최 공지
  GET_FESTIVAL_NOTICES: (eventId: number) =>
    `/common/festivals/${eventId}/notices`,

  // 온보딩
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete',
} as const;
