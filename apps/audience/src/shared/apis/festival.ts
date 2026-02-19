import { put } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import type {
  WishListRequest,
  WishListResponseData,
} from '@shared/types/festival';

export const putWishList = (festivalId: number, body: WishListRequest) =>
  put<WishListResponseData, WishListRequest>(
    END_POINT.PUT_WISH_LIST(festivalId),
    body,
  );
