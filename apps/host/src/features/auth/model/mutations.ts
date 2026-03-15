import { useMutation } from '@tanstack/react-query';

import { postRegistrationVerify } from '@entities/auth/api/auth';
import { RegistrationVerifyRequest } from '@entities/auth/types/auth';

export const usePostRegistrationVerifyMutation = () => {
  return useMutation({
    mutationFn: (body: RegistrationVerifyRequest) =>
      postRegistrationVerify(body),
  });
};
