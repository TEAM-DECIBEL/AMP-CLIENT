import { Festival, PaginationResponse } from './festival';

export interface FestivalsResponse {
  festivals: Festival[];
  pagination: PaginationResponse;
}

export interface NicknameResponse {
  nickname: string;
}
