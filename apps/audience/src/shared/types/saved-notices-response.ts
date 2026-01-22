export interface SavedNoticeItem {
  savedNoticeId: number;
  noticeId: number;
  festivalTitle: string;
  categoryName: string;
  title: string;
  imageUrl: string;
}

export interface SavedNoticesPagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface SavedNoticesResponse {
  notices: SavedNoticeItem[];
  pagination: SavedNoticesPagination;
}
