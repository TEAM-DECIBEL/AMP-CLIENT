import { get } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import type { NicknameResponse } from '@shared/types/home-response';

export const getUserNickname = () =>
  get<NicknameResponse>(END_POINT.GET_NICKNAME);
