import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { ROUTE_PATH } from '@shared/constants/path';

const Callback = () => {
  const [params] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    const status = params.get('status');

    if (!token) {
      navigate(ROUTE_PATH.LOGIN, { replace: true });
      return;
    }

    localStorage.setItem('accessToken', token);

    if (status === 'PENDING') {
      navigate(ROUTE_PATH.ONBOARDING);
    } else if (status === 'COMPLETED') {
      navigate(ROUTE_PATH.HOME);
    }
  }, [params, navigate]);

  return null;
};

export default Callback;
