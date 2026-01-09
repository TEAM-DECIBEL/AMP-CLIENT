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
          const mod = await import("@pages/home/home");
          return { Component: mod.HomePage };
        },
      },
      {
        path: ROUTE_PATH.NOTICE_LIST,
        lazy: async () => {
          const mod = await import("@pages/notice-list/notice-list");
          return { Component: mod.NoticeListPage };
        },
      },
      {
        path: ROUTE_PATH.NOTICE_DETAILS,
        lazy: async () => {
          const mod = await import("@pages/notice-details/notice-details");
          return { Component: mod.NoticeDetailsPage };
        },
      },
      {
        path: ROUTE_PATH.NOTIFICATION,
        lazy: async () => {
          const mod = await import("@pages/notification/notification");
          return { Component: mod.NotificationPage };
        },
      },
      {
        path: ROUTE_PATH.MYPAGE,
        lazy: async () => {
          const mod = await import("@pages/mypage/mypage");
          return { Component: mod.MyPage };
        },
      },
      {
        path: ROUTE_PATH.MY_EVENTS,
        lazy: async () => {
          const mod = await import("@pages/my-events/my-events");
          return { Component: mod.MyEventsPage };
        },
      },
      {
        path: ROUTE_PATH.SAVED_NOTICES,
        lazy: async () => {
          const mod = await import("@pages/saved-notices/saved-notices");
          return { Component: mod.SavedNoticesPage };
        },
      },
    ],
  },
]);
