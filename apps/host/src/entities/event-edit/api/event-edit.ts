import { get, put } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';

import { FestivalDetail, UpdateFestivalResponse } from '../types/event-edit';

export const getFestivalDetail = (festivalId: number) =>
  get<FestivalDetail>(END_POINT.GET_FESTIVAL_DETAIL(festivalId));

export const putFestival = (festivalId: number, formData: FormData) =>
  put<UpdateFestivalResponse, FormData>(
    END_POINT.PUT_FESTIVAL(festivalId),
    formData,
  );
