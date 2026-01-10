import { lazy } from 'react';

export const EventCreatePage = lazy(
  () => import('@pages/event-create/event-create'),
);

export const HomePage = lazy(() => import('@pages/home/home'));

export const MyPage = lazy(() => import('@pages/mypage/mypage'));

export const NoticeCreatePage = lazy(
  () => import('@pages/notice-create/notice-create'),
);
export const NoticeDetailsPage = lazy(
  () => import('@pages/notice-details/notice-details'),
);

export const NoticeListPage = lazy(
  () => import('@pages/notice-list/notice-list'),
);
