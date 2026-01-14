import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@amp/ads-ui';

export const SubLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header variant='audience' kind='sub' />
      <Outlet />
    </Suspense>
  );
};
