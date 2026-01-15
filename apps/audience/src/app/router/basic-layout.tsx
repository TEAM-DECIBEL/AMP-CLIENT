import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const BasicLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
