import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';

export type CongestionLevel = 'SMOOTH' | 'NORMAL' | 'CROWDED';

export interface PostStageCongestionRequest {
  congestionLevel: CongestionLevel;
}

export const postStageCongestion = (
  stageId: number,
  congestionLevel: CongestionLevel,
) =>
  post<void, PostStageCongestionRequest>(
    END_POINT.POST_STAGE_CONGESTION(stageId),
    { congestionLevel },
  );
