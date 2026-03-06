import { Festival, PaginationResponse } from './festival';

export interface MyEventsResponse {
  festivals: Festival[];
  pagination: PaginationResponse;
}
