import { Notice } from '@amp/shared/types';

export interface PaginationResponse {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface FestivalNoticesResponseData {
  announcements: Notice[];
  paginationResponse: PaginationResponse;
}
