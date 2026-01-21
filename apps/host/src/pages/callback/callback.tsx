import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { ROUTE_PATH } from '@shared/constants/path';

const Callback = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const token = params.get('token');
  const status = params.get('status');

  useEffect(() => {
    if (!token) {
      navigate(ROUTE_PATH.LOGIN, { replace: true });
      return;
    }

    localStorage.setItem('accessToken', token);

    if (status === 'PENDING') {
      navigate(ROUTE_PATH.ONBOARDING, { replace: true });
      return;
    }

    if (status === 'COMPLETED') {
      navigate(ROUTE_PATH.HOME, { replace: true });
    }
  }, [token, status, navigate]);

  return null;
};

export default Callback;
