export interface MyHistoryFestival {
  title: string;
  period: string;
  status: string;
}

export interface MyHistoryPagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface MyHistoryResponseData {
  festivals: MyHistoryFestival[];
  pagination: MyHistoryPagination;
}
