export const END_POINT = {
  // 공연 혼잡도 조회
  GET_FESTIVAL_CONGESTION: (eventId: number) =>
    `common/festivals/${eventId}/congestion`,
} as const;
