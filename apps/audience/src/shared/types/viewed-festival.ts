export interface ViewedFestival {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  status: '관람 중' | '관람 예정' | '관람 완료';
  wishList: boolean;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ViewedFestivalsResponse {
  festivals: ViewedFestival[];
  pagination: Pagination;
}
