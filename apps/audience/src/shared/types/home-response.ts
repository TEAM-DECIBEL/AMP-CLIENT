import { Festival, PaginationResponse } from './festival';

export interface UpcomingFestivalItem {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  dday: number;
}

export interface FestivalsResponse {
  festivals: Festival[];
  pagination: PaginationResponse;
}

export interface UpcomingFestivalsResponse {
  festivals: UpcomingFestivalItem[];
  pagination: PaginationResponse;
}

export interface NicknameResponse {
  nickname: string;
}
