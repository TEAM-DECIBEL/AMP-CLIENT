import { HomePage } from "@pages/home";
import { EventCreatePage } from "@pages/event-create";
import { NoticeListPage } from "@pages/notice-list";
import { MyPage } from "@pages/mypage";
import { NoticeCreatePage } from "@pages/notice-create";
import { ROUTE_PATH } from "@shared/constants/path";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOST_HOME,
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
    path: ROUTE_PATH.MYPAGE,
    element: <MyPage />,
  },
]);
