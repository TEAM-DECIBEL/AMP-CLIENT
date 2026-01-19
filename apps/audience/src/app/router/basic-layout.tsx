import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Loading } from '@amp/compositions';

export const BasicLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};
