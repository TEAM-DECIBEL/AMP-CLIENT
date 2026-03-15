export type FestivalStatus = '관람 중' | '관람 예정' | '관람 완료';

export interface Festival {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  status: FestivalStatus;
  wishList: boolean;
  dDay?: number;
}

export interface PaginationResponse {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface WishListRequest {
  wishList: boolean;
}

export interface WishListResponseData {
  festivalId: number;
  wishList: boolean;
}

// TODO: 추후 전체 공연 대상 관련 타입 해당 파일로 이동
