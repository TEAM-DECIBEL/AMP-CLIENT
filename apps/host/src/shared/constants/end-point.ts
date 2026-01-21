export const END_POINT = {
  // 홈 화면
  GET_HOME_FESTIVALS: '/organizer/me/festivals/active',

  // 공연 혼잡도 조회
  GET_FESTIVAL_CONGESTION: (eventId: number) =>
    `festivals/${eventId}/congestion`,
} as const;
