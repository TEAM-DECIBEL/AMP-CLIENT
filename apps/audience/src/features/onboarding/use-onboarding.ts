import { useMutation } from '@tanstack/react-query';

import { postOnboardingComplete } from '@features/onboarding/query';

import type { OnboardingCompleteBody } from '@shared/types/onboarding';

export const useOnboardingCompleteMutation = () => {
  return useMutation({
    mutationFn: (body: OnboardingCompleteBody) => postOnboardingComplete(body),
  });
};
