import type { FestivalStatus } from './festival';

export interface MyHistoryFestival {
  festivalId: number;
  mainImageUrl: string;
  title: string;
  period: string;
  status: FestivalStatus;
}

export interface MyHistoryPagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface MyHistoryResponse {
  festivals: MyHistoryFestival[];
  pagination: MyHistoryPagination;
}
