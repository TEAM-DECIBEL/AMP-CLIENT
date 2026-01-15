import { ROUTE_PATH } from '@shared/constants/path';

import {
  EventCreatePage,
  HomePage,
  MyPage,
  NoticeCreatePage,
  NoticeDetailsPage,
  NoticeListPage,
} from './lazy';

export const globalRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: ROUTE_PATH.EVENT_CREATE,
    element: <EventCreatePage />,
  },
  {
    path: ROUTE_PATH.NOTICE_LIST,
    element: <NoticeListPage />,
  },
  {
    path: ROUTE_PATH.NOTICE_CREATE,
    element: <NoticeCreatePage />,
  },
  {
    path: ROUTE_PATH.NOTICE_DETAILS,
    element: <NoticeDetailsPage />,
  },
  {
    path: ROUTE_PATH.MYPAGE,
    element: <MyPage />,
  },
];
