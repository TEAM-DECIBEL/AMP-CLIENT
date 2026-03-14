export interface FestivalDetail {
  festivalId: number;
  title: string;
  location: string;
  mainImageUrl: string;
  activeCategoryIds: number[];
  schedules: {
    id: number;
    festivalDate: string;
    festivalTime: string;
  }[];
  stages: {
    id: number;
    title: string;
    location?: string;
  }[];
}

export interface UpdateFestivalResponse {
  festivalId: number;
  updatedAt: string;
}
