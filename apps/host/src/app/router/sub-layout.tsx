import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@amp/ads-ui';

interface SubLayoutProps {
  title: string;
}

export const SubLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header variant='host' kind='main' />
      <Outlet />
    </Suspense>
  );
};

export const SubLayoutWithBack = ({ title }: SubLayoutProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header variant='host' kind='sub' title={title} />
      <Outlet />
    </Suspense>
  );
};
