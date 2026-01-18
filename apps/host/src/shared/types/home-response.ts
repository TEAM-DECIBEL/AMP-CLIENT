export interface HomeSummary {
  ongoingCount: number;
  upcomingCount: number;
}

export interface Festival {
  festivalId: number;
  mainImageUrl: string;
  title: string;
  period: string;
  status: '진행 중' | '진행 예정';
  dDay: number;
}

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
