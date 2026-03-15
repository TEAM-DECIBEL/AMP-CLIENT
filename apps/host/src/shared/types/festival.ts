export type FestivalStatus = '진행 중' | '진행 예정' | '진행 완료';

export interface FestivalBase {
  festivalId: number;
  imageUrl?: string;
  mainImageUrl?: string;
  title: string;
  period: string;
  status: FestivalStatus;
  dDay?: number;
}

export interface ActiveCategory {
  categoryId: number;
  categoryName: string;
  categoryCode: string;
}

export interface FestivalNoticeBanner {
  festivalId: number;
  title: string;
  location: string;
  period: string;
  isWishlist: boolean;
  dDay: number;
  activeCategories: ActiveCategory[];
}
