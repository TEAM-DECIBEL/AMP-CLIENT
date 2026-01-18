import { ROUTE_PATH } from '@shared/constants/path';

import {
  EventCreatePage,
  HomePage,
  LoginPage,
  MyHistoryPage,
  MyPage,
  NoticeCreatePage,
  NoticeDetailsPage,
  NoticeListPage,
  OnboardingPage,
} from './lazy';
import { SubLayout, SubLayoutWithBack } from './sub-layout';

const subLayoutTitles = {
  eventCreate: '공연 등록',
  noticeCreate: '공지 작성',
  noticeDetails: '주최 공지',
  myPage: '마이페이지',
  myHistory: '진행 공연',
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
  {
    path: ROUTE_PATH.EVENT_CREATE,
    element: <SubLayoutWithBack title={subLayoutTitles.eventCreate} />,
    children: [
      {
        index: true,
        element: <EventCreatePage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.NOTICE_CREATE,
    element: <SubLayoutWithBack title={subLayoutTitles.noticeCreate} />,
    children: [
      {
        index: true,
        element: <NoticeCreatePage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.NOTICE_DETAILS,
    element: <SubLayoutWithBack title={subLayoutTitles.noticeDetails} />,
    children: [
      {
        index: true,
        element: <NoticeDetailsPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.MYPAGE,
    children: [
      {
        element: <SubLayoutWithBack title={subLayoutTitles.myPage} />,
        children: [
          {
            index: true,
            element: <MyPage />,
          },
        ],
      },
      {
        path: 'history',
        element: <SubLayoutWithBack title={subLayoutTitles.myHistory} />,
        children: [
          {
            index: true,
            element: <MyHistoryPage />,
          },
        ],
      },
    ],
  },
  {
    element: <SubLayout />,
    children: [
      {
        path: ROUTE_PATH.NOTICE_LIST,
        element: <NoticeListPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.ONBOARDING,
    element: <OnboardingPage />,
  },
  {
    path: ROUTE_PATH.ONBOARDING,
    element: <OnboardingPage />,
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <LoginPage />,
  },
];
