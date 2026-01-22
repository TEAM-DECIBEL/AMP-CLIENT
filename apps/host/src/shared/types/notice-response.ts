import type { Announcement } from './announcement';

export interface PaginationResponse {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface FestivalNoticesResponseData {
  announcements: Announcement[];
  paginationResponse: PaginationResponse;
}
