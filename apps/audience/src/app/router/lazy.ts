import { lazy } from "react";

export const HomePage = lazy(() => import("@pages/home/home"));

export const MyEventsPage = lazy(() => import("@pages/my-events/my-events"));

export const MyPage = lazy(() => import("@pages/mypage/mypage"));

export const NoticeDetailsPage = lazy(
  () => import("@pages/notice-details/notice-details")
);

export const NoticeListPage = lazy(
  () => import("@pages/notice-list/notice-list")
);

export const NotificationPage = lazy(
  () => import("@pages/notification/notification")
);

export const SavedNoticesPage = lazy(
  () => import("@pages/saved-notices/saved-notices")
);
