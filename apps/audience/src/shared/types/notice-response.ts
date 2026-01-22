import { Announcement } from './announcement';

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

export interface SavedNoticesResponseData {
  notices: SavedNotice[];
  pagination: PaginationResponse;
}

export interface FestivalNoticesResponseData {
  announcements: Announcement[];
  paginationResponse: PaginationResponse;
}

