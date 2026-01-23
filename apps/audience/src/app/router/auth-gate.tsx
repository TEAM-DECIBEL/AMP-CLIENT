import { Navigate, Outlet, useLocation } from 'react-router';

import { ROUTE_PATH } from '@shared/constants/path';

export default function AuthGate() {
  const isAuthed = Boolean(localStorage.getItem('accessToken'));
  const location = useLocation();

  if (isAuthed) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={ROUTE_PATH.AUTH_REQUIRED}
      replace
      state={{ from: location.pathname + location.search }}
    />
  );
}
