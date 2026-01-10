import { ROUTE_PATH } from "@shared/constants/path";
import {
  HomePage,
  MyEventsPage,
  MyPage,
  NoticeDetailsPage,
  NoticeListPage,
  NotificationPage,
  SavedNoticesPage,
} from "./lazy";

export const globalRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: ROUTE_PATH.MY_EVENTS,
    element: <MyEventsPage />,
  },
  {
    path: ROUTE_PATH.MYPAGE,
    element: <MyPage />,
  },
  {
    path: ROUTE_PATH.NOTICE_DETAILS,
    element: <NoticeDetailsPage />,
  },
  {
    path: ROUTE_PATH.NOTICE_LIST,
    element: <NoticeListPage />,
  },
  {
    path: ROUTE_PATH.NOTIFICATION,
    element: <NotificationPage />,
  },
  {
    path: ROUTE_PATH.SAVED_NOTICES,
    element: <SavedNoticesPage />,
  },
];
