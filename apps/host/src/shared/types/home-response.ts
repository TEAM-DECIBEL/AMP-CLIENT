import type { FestivalWithDDay } from './festival';

export interface HomeSummary {
  ongoingCount: number;
  upcomingCount: number;
}

export type Festival = FestivalWithDDay;

export interface PaginationResponse {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface HomeResponseData {
  summary: HomeSummary;
  ongoingFestivals: Festival[];
  upcomingFestivals: Festival[];
  paginationResponse: PaginationResponse;
}
