export interface AllFestivalItem {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  wishList: boolean;
  dDay: number;
}

export interface UpcomingFestivalItem {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  status: string;
  wishList: boolean;
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

export interface AllFestivalsResponseData {
  festivals: AllFestivalItem[];
  pagination: PaginationResponse;
}

export interface UpcomingFestivalsResponseData {
  festivals: UpcomingFestivalItem[];
  pagination: PaginationResponse;
}
