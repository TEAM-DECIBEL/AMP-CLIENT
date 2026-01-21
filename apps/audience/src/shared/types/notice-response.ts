export interface PaginationResponse {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface SavedNotice {
  savedNoticeId: number;
  noticeId: number;
  festivalTitle: string;
  categoryName: string;
  title: string;
  imageUrl: string;
}

// 최종 API 응답 data 타입
export interface SavedNoticesResponseData {
  notices: SavedNotice[];
  pagination: PaginationResponse;
}
