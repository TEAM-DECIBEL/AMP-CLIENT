export type FestivalStatus = '진행 중' | '진행 예정' | '진행 완료';

export interface FestivalBase {
  festivalId: number;
  mainImageUrl: string;
  title: string;
  period: string;
  status: FestivalStatus;
}

export interface FestivalWithDDay extends FestivalBase {
  dDay: number;
}
