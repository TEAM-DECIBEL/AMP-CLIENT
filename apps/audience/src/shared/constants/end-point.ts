export const END_POINT = {
  // 주최 공지
  GET_FESTIVAL_NOTICES: (festivalId: number) =>
    `/common/festivals/${festivalId}/notices`,
} as const;
