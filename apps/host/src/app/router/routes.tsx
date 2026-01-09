import { ROUTE_PATH } from "@shared/constants/path";
import EventCreatePage from "@pages/event-create/event-create";
import HomePage from "@pages/home/home";
import MyPage from "@pages/mypage/mypage";
import NoticeCreatePage from "@pages/notice-create/notice-create";
import NoticeDetailsPage from "@pages/notice-details/notice-details";
import NoticeListPage from "@pages/notice-list/notice-list";

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
