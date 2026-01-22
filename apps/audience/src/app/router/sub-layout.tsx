import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

import { ROUTE_PATH } from '@shared/constants/path';

interface SubLayoutProps {
  title?: string;
  hasNewAlert?: boolean;
}

export const SubLayout = ({ hasNewAlert }: SubLayoutProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Header
        variant='audience'
        kind='main'
        hasNewAlert={hasNewAlert}
        myPagePath={ROUTE_PATH.MYPAGE}
        alertPath={ROUTE_PATH.NOTIFICATION}
      />
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
