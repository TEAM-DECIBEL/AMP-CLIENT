import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

import { ROUTE_PATH } from '@shared/constants/path';

interface SubLayoutProps {
  title: string;
}

export const SubLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header variant='host' kind='main' myPagePath={ROUTE_PATH.MYPAGE} />
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
