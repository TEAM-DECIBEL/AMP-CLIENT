import { Festival, PaginationResponse } from './festival';
export interface ViewedFestivalsResponse {
  festivals: Festival[];
  pagination: PaginationResponse;
}
