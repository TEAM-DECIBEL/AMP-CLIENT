import { Suspense } from 'react';
import { Outlet } from 'react-router';

<<<<<<<< HEAD:apps/audience/src/app/router/sub-layout.tsx
import { Header } from '@amp/ads-ui';

export const SubLayout = () => {
========
export const BaseLayout = () => {
>>>>>>>> b1ddc7eb878c386d8c19275a2a14fcf8e2037d5f:apps/host/src/app/router/basic-layout.tsx
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header variant='audience' kind='sub' />
      <Outlet />
    </Suspense>
  );
};
