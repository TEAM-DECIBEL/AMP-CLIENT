import { ROUTE_PATH } from "@shared/constants/path";
import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { Layout } from "./layout";

const HomePage = lazy(() =>
  import("@pages/home").then((res) => ({
    default: res.HomePage,
  }))
);

const EventCreatePage = lazy(() =>
  import("@pages/event-create").then((res) => ({
    default: res.EventCreatePage,
  }))
);

const NoticeListPage = lazy(() =>
  import("@pages/notice-list").then((res) => ({ default: res.NoticeListPage }))
);

const NoticeCreatePage = lazy(() =>
  import("@pages/notice-create").then((res) => ({
    default: res.NoticeCreatePage,
  }))
);

const MyPage = lazy(() =>
  import("@pages/mypage").then((res) => ({ default: res.MyPage }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
    ],
  },
]);
