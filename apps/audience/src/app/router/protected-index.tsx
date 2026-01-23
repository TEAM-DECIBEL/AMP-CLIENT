import { Navigate } from 'react-router';

import { ROUTE_PATH } from '@shared/constants/path';

import { HomePage } from './lazy';

function ProtectedIndex() {
  const isAuthed = Boolean(localStorage.getItem('accessToken'));

  if (!isAuthed) {
    return <Navigate to={ROUTE_PATH.LOGIN} replace />;
  }
  return <HomePage />;
}

export default ProtectedIndex;
