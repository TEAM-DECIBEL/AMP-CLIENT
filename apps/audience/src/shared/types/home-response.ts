import type { Festival, PaginationResponse } from './festival';

export interface FestivalsResponse {
  festivals: Festival[];
  pagination: PaginationResponse;
}

export interface UpcomingFestivalResponse {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  dday: number;
}

export interface NicknameResponse {
  nickname: string;
}
