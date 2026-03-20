import type { ReactElement } from 'react';

import { ROUTE_PATH } from '@shared/constants/path';

import {
  AuthRequiredPage,
  HomePage,
  LoginPage,
  MyEventsPage,
  MyPage,
  NotFoundPage,
  NoticeDetailsPage,
  NoticeListPage,
  NotificationPage,
  OnboardingPage,
  PwaGuidePage,
  SavedNoticesPage,
} from './lazy';
import { SubLayout, SubLayoutBackOnly, SubLayoutWithBack } from './sub-layout';

const subLayoutTitles = {
  myEvents: '내 관람 공연',
  myPage: '마이페이지',
  noticeDetails: '주최 공지',
  notification: '알림',
  savedNotices: '저장한 공지',
} as const;

const withSubLayout = (
  routes: Array<{ path: string; element: ReactElement }>,
) => ({
  element: <SubLayout />,
  children: routes,
});

const withBackLayout = (path: string, title: string, page: ReactElement) => ({
  path,
  element: <SubLayoutWithBack title={title} />,
  children: [{ index: true, element: page }],
});

const withBackOnlyLayout = (path: string, page: ReactElement) => ({
  path,
  element: <SubLayoutBackOnly />,
  children: [{ index: true, element: page }],
});

export const globalRoutes = [
  withSubLayout([
    { path: ROUTE_PATH.NOTICE_LIST, element: <NoticeListPage /> },
    { path: ROUTE_PATH.HOME, element: <HomePage /> },
  ]),

  { path: ROUTE_PATH.ONBOARDING, element: <OnboardingPage /> },
  { path: ROUTE_PATH.LOGIN, element: <LoginPage /> },
  { path: ROUTE_PATH.AUTH_REQUIRED, element: <AuthRequiredPage /> },

  withBackLayout(
    ROUTE_PATH.NOTICE_DETAILS,
    subLayoutTitles.noticeDetails,
    <NoticeDetailsPage />,
  ),
  withBackLayout(
    ROUTE_PATH.MY_EVENTS,
    subLayoutTitles.myEvents,
    <MyEventsPage />,
  ),
  withBackLayout(ROUTE_PATH.MYPAGE, subLayoutTitles.myPage, <MyPage />),
  withBackLayout(
    ROUTE_PATH.NOTIFICATION,
    subLayoutTitles.notification,
    <NotificationPage />,
  ),
  withBackLayout(
    ROUTE_PATH.SAVED_NOTICES,
    subLayoutTitles.savedNotices,
    <SavedNoticesPage />,
  ),
  withBackOnlyLayout(ROUTE_PATH.PWA_GUIDE, <PwaGuidePage />),

  { path: ROUTE_PATH.NOT_FOUND, element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];
