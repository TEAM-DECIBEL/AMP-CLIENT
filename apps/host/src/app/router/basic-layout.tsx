import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@amp/ads-ui';

export const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header variant='host' kind='main' />
      <Outlet />
    </Suspense>
  );
};
