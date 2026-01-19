import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

interface SubLayoutProps {
  title: string;
}

export const SubLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header variant='host' kind='main' />
      <Outlet />
    </Suspense>
  );
};

export const SubLayoutWithBack = ({ title }: SubLayoutProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Header variant='host' kind='sub' title={title} />
      <Outlet />
    </Suspense>
  );
};
