import { get } from '@amp/apis';

import { AuthStatusResponse } from '@entities/auth/types/response';

import { END_POINT } from '@shared/constants/end-point';

export const getAuthStatus = () =>
  get<AuthStatusResponse>(END_POINT.GET_AUTH_STATUS);
