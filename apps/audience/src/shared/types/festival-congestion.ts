export type CongestionLevel = 'SMOOTH' | 'NORMAL' | 'CROWDED' | 'NONE';

export interface StageCongestion {
  stageId: number;
  title: string;
  location: string;
  congestionLevel: CongestionLevel;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface FestivalCongestionResponseData {
  isInputAvailable: boolean;
  stages: StageCongestion[];
  pagination: Pagination;
}
