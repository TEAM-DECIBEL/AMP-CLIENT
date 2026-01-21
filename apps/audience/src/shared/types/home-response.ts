export interface AllFestivalItem {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  location: string;
  period: string;
  wishList: boolean;
  dDay: number;
}

export interface UpcomingFestivalItem {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  location: string;
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

export interface UpcomingFestivalResponseData {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  dday: number;
}

export interface WishListRequest {
  wishList: boolean;
}

export interface WishListResponseData {
  festivalId: number;
  wishList: boolean;
}
