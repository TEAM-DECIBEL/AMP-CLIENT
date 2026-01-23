import AuthGate from '@app/router/auth-gate';

import { ROUTE_PATH } from '@shared/constants/path';

import {
  AuthRequiredPage,
  CallbackPage,
  HomePage,
  LoginPage,
  MyEventsPage,
  MyPage,
  NotFoundPage,
  NoticeDetailsPage,
  NoticeListPage,
  NotificationPage,
  OnboardingPage,
  SavedNoticesPage,
} from './lazy';
import { SubLayout, SubLayoutWithBack } from './sub-layout';

const subLayoutTitles = {
  myEvents: '내 관람 공연',
  myPage: '마이페이지',
  noticeDetails: '주최 공지',
  notification: '알림',
  savedNotices: '저장한 공지',
};

export const globalRoutes = [
  {
    element: <SubLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

  { path: ROUTE_PATH.ONBOARDING, element: <OnboardingPage /> },
  { path: ROUTE_PATH.LOGIN, element: <LoginPage /> },
  { path: ROUTE_PATH.AUTH_REQUIRED, element: <AuthRequiredPage /> },
  { path: ROUTE_PATH.CALLBACK, element: <CallbackPage /> },

  {
    element: <AuthGate />,
    children: [
      {
        path: ROUTE_PATH.MY_EVENTS,
        element: <SubLayoutWithBack title={subLayoutTitles.myEvents} />,
        children: [{ index: true, element: <MyEventsPage /> }],
      },
      {
        path: ROUTE_PATH.MYPAGE,
        children: [
          {
            element: <SubLayoutWithBack title={subLayoutTitles.myPage} />,
            children: [{ index: true, element: <MyPage /> }],
          },
        ],
      },
      {
        path: ROUTE_PATH.NOTICE_DETAILS,
        element: <SubLayoutWithBack title={subLayoutTitles.noticeDetails} />,
        children: [{ index: true, element: <NoticeDetailsPage /> }],
      },
      {
        path: ROUTE_PATH.NOTICE_LIST,
        element: <SubLayout />,
        children: [{ index: true, element: <NoticeListPage /> }],
      },
      {
        path: ROUTE_PATH.NOTIFICATION,
        element: <SubLayoutWithBack title={subLayoutTitles.notification} />,
        children: [{ index: true, element: <NotificationPage /> }],
      },
      {
        path: ROUTE_PATH.SAVED_NOTICES,
        element: <SubLayoutWithBack title={subLayoutTitles.savedNotices} />,
        children: [{ index: true, element: <SavedNoticesPage /> }],
      },
    ],
  },

  { path: '*', element: <NotFoundPage /> },
];
