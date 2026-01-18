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
