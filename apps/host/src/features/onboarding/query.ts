import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { OnboardingCompleteBody } from '@shared/types/onboarding';

export const postOnboardingComplete = (body: OnboardingCompleteBody) =>
  post<OnboardingCompleteBody>(END_POINT.POST_ONBOARDING_COMPLETE, body);
