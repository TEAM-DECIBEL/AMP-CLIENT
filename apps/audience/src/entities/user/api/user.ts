import { get, post } from '@amp/apis';

import { PostFcmTokenRequest } from '@entities/user/types/request';

import { END_POINT } from '@shared/constants/end-point';
import type { NicknameResponse } from '@shared/types/home-response';

export const getUserNickname = () =>
  get<NicknameResponse>(END_POINT.GET_NICKNAME);

export const postFcmToken = (fcmToken: string) =>
  post<void, PostFcmTokenRequest>(END_POINT.POST_FCM_TOKEN, { fcmToken });
