import { get, post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import type { NicknameResponse } from '@shared/types/home-response';

export const getUserNickname = () =>
  get<NicknameResponse>(END_POINT.GET_NICKNAME);

export const postFcmToken = (fcmToken: string) =>
  post(END_POINT.POST_FCM_TOKEN, { fcmToken });
