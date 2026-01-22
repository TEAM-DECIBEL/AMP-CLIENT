import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';

export const postLogout = () => post<null>(END_POINT.POST_LOGOUT);
