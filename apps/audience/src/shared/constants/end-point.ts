export const END_POINT = {
  // 주최 공지
  GET_FESTIVAL_NOTICES: (festivalId: number) =>
    `/common/festivals/${festivalId}/notices`,

  // 공지 상세
  GET_FESTIVAL_NOTICE_DETAIL: (noticeId: number | string) =>
    `/common/notices/${noticeId}`,
} as const;
