import { post } from '@amp/apis';

import { END_POINT } from '@entities/auth/model/end-point';
import type { RegistrationVerifyRequest } from '@entities/auth/types/auth';

export const postRegistrationVerify = (body: RegistrationVerifyRequest) =>
  post(END_POINT.POST_REGISTRATION_VERIFY(), body);
