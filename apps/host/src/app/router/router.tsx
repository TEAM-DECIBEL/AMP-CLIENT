import { ROUTE_PATH } from "@shared/constants/path";
import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const mod = await import("@pages/home");
          return { Component: mod.HomePage };
        },
      },
      {
        path: ROUTE_PATH.EVENT_CREATE,
        lazy: async () => {
          const mod = await import("@pages/event-create");
          return { Component: mod.EventCreatePage };
        },
      },
      {
        path: ROUTE_PATH.NOTICE_LIST,
        lazy: async () => {
          const mod = await import("@pages/notice-list");
          return { Component: mod.NoticeListPage };
        },
      },
      {
        path: ROUTE_PATH.NOTICE_CREATE,
        lazy: async () => {
          const mod = await import("@pages/notice-create");
          return { Component: mod.NoticeCreatePage };
        },
      },
      {
        path: ROUTE_PATH.MYPAGE,
        lazy: async () => {
          const mod = await import("@pages/mypage");
          return { Component: mod.MyPage };
        },
      },
    ],
  },
]);
