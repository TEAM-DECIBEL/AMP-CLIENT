import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

interface SubLayoutProps {
  title?: string;
  hasNewAlert?: boolean;
}

export const SubLayout = ({ hasNewAlert }: SubLayoutProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Header variant='audience' kind='main' hasNewAlert={hasNewAlert} />
      <Outlet />
    </Suspense>
  );
};

export const SubLayoutWithBack = ({ title }: SubLayoutProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Header variant='audience' kind='sub' title={title} />
      <Outlet />
    </Suspense>
  );
};
