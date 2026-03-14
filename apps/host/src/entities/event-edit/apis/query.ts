import { queryOptions } from '@tanstack/react-query';

import { get, put } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

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

export const getFestivalDetail = (festivalId: number) =>
  get<FestivalDetail>(END_POINT.GET_FESTIVAL_DETAIL(festivalId));

export const putFestival = (festivalId: number, formData: FormData) =>
  put<UpdateFestivalResponse, FormData>(
    END_POINT.PUT_FESTIVAL(festivalId),
    formData,
  );

export const EVENT_EDIT_QUERY_OPTIONS = {
  DETAIL: (festivalId: number | null) => {
    const normalizedFestivalId = festivalId ?? Number.NaN;

    return queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.FESTIVAL_DETAIL(normalizedFestivalId),
      queryFn: () => getFestivalDetail(normalizedFestivalId),
      enabled: Number.isFinite(normalizedFestivalId),
    });
  },
} as const;
