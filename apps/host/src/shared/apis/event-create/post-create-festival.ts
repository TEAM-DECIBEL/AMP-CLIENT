import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';

export interface CreateFestivalResponse {
  festivalId: number;
  mainImageUrl: string;
  title: string;
  createdAt: string;
}

export const postCreateFestival = (formData: FormData) =>
  post<CreateFestivalResponse, FormData>(
    END_POINT.POST_FESTIVAL_CREATE,
    formData,
  );
