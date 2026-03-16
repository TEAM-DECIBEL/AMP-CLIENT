import { get, put } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import type {
  WishListRequest,
  WishListResponseData,
} from '@shared/types/festival';
import type {
  FestivalsResponse,
  UpcomingFestivalResponse,
} from '@shared/types/home-response';

export const getAllFestivals = (params: PageSizeParams = {}) =>
  get<FestivalsResponse, PageSizeParams>(END_POINT.GET_ALL_FESTIVALS, params);

export const getWishlists = (params: PageSizeParams = {}) =>
  get<FestivalsResponse, PageSizeParams>(END_POINT.GET_WISHLISTS, params);

export const getUpcomingFestival = (params: PageSizeParams = {}) =>
  get<UpcomingFestivalResponse, PageSizeParams>(
    END_POINT.GET_UPCOMING_FESTIVAL,
    params,
  );

export const putWishList = (festivalId: number, body: WishListRequest) =>
  put<WishListResponseData, WishListRequest>(
    END_POINT.PUT_WISH_LIST(festivalId),
    body,
  );
