export const END_POINT = {
  // 홈 화면
  GET_HOME_FESTIVALS: '/organizer/me/festivals/active',

  // 주최 공지
  GET_FESTIVAL_NOTICES: (festivalId: number) =>
    `/common/festivals/${festivalId}/notices`,
} as const;
