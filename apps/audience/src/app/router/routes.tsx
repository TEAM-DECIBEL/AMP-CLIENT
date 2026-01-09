import { ROUTE_PATH } from "@shared/constants/path";
import HomePage from "@pages/home/home";
import MyEventsPage from "@pages/my-events/my-events";
import MyPage from "@pages/mypage/mypage";
import NoticeDetailsPage from "@pages/notice-details/notice-details";
import NoticeListPage from "@pages/notice-list/notice-list";
import NotificationPage from "@pages/notification/notification";
import SavedNoticesPage from "@pages/saved-notices/saved-notices";

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
    pathL: ROUTE_PATH.SAVED_NOTICES,
    element: <SavedNoticesPage />,
  },
];
