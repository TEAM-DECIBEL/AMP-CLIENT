import { ReactElement } from 'react';

import { ROUTE_PATH } from '@shared/constants/path';

import {
  AuthRequiredPage,
  EventCreatePage,
  EventEditPage,
  HomePage,
  LoginErrorPage,
  LoginPage,
  MyHistoryPage,
  MyPage,
  NotFoundPage,
  NoticeCreatePage,
  NoticeDetailsPage,
  NoticeListPage,
  OnboardingPage,
  PwaGuidePage,
} from './lazy';
import { SubLayout, SubLayoutBackOnly, SubLayoutWithBack } from './sub-layout';

const subLayoutTitles = {
  eventCreate: '공연 등록',
  eventEdit: '공연 수정',
  noticeCreate: '공지 작성',
  noticeEdit: '공지 수정',
  noticeDetails: '주최 공지',
  myPage: '마이페이지',
  myHistory: '진행 공연',
} as const;

const withLayoutIndex = (page: ReactElement) => ({
  element: <SubLayout />,
  children: [{ index: true, element: page }],
});

const withLayoutPath = (path: string, page: ReactElement) => ({
  path,
  element: <SubLayout />,
  children: [{ index: true, element: page }],
});

const withBackLayout = (title: string, page: ReactElement) => ({
  element: <SubLayoutWithBack title={title} />,
  children: [{ index: true, element: page }],
});

const withBackOnlyLayout = (path: string, page: ReactElement) => ({
  path,
  element: <SubLayoutBackOnly />,
  children: [{ index: true, element: page }],
});

export const globalRoutes = [
  withLayoutIndex(<HomePage />),
  withLayoutPath(ROUTE_PATH.NOTICE_LIST, <NoticeListPage />),
  {
    path: ROUTE_PATH.EVENT_CREATE,
    ...withBackLayout(subLayoutTitles.eventCreate, <EventCreatePage />),
  },
  {
    path: ROUTE_PATH.EVENT_EDIT,
    ...withBackLayout(subLayoutTitles.eventEdit, <EventEditPage />),
  },

  {
    path: ROUTE_PATH.NOTICE_CREATE,
    ...withBackLayout(subLayoutTitles.noticeCreate, <NoticeCreatePage />),
  },
  {
    path: ROUTE_PATH.NOTICE_EDIT,
    ...withBackLayout(subLayoutTitles.noticeEdit, <NoticeCreatePage />),
  },
  {
    path: ROUTE_PATH.NOTICE_DETAILS,
    ...withBackLayout(subLayoutTitles.noticeDetails, <NoticeDetailsPage />),
  },
  {
    path: ROUTE_PATH.MYPAGE,
    children: [
      withBackLayout(subLayoutTitles.myPage, <MyPage />),
      {
        path: 'history',
        ...withBackLayout(subLayoutTitles.myHistory, <MyHistoryPage />),
      },
    ],
  },
  withBackOnlyLayout(ROUTE_PATH.PWA_GUIDE, <PwaGuidePage />),

  { path: ROUTE_PATH.ONBOARDING, element: <OnboardingPage /> },
  { path: ROUTE_PATH.LOGIN, element: <LoginPage /> },
  { path: ROUTE_PATH.AUTH_REQUIRED, element: <AuthRequiredPage /> },

  { path: ROUTE_PATH.NOT_FOUND, element: <NotFoundPage /> },
  { path: ROUTE_PATH.LOGIN_ERROR, element: <LoginErrorPage /> },
  { path: '*', element: <NotFoundPage /> },
];
