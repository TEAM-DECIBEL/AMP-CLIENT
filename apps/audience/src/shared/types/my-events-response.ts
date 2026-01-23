export interface MyEventsFestival {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  status: string;
  wishList: boolean;
}

export interface MyEventsPagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface MyEventsResponse {
  festivals: MyEventsFestival[];
  pagination: MyEventsPagination;
}
