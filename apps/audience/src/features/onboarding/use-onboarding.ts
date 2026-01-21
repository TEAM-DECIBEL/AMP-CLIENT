import { useMutation } from '@tanstack/react-query';

import { postOnboardingComplete } from '@features/onboarding/query';

export const useOnboardingCompleteMutation = () => {
  return useMutation({
    mutationFn: (body: { nickname: string; userType: string }) =>
      postOnboardingComplete(body),
  });
};
