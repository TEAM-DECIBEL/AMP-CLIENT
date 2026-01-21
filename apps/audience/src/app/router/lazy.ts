import { lazy } from 'react';

export const HomePage = lazy(() => import('@pages/home/home'));

export const MyEventsPage = lazy(() => import('@pages/my-events/my-events'));

export const MyPage = lazy(() => import('@pages/mypage/mypage'));

export const NoticeDetailsPage = lazy(
  () => import('@pages/notice-details/notice-details'),
);

export const NoticeListPage = lazy(
  () => import('@pages/notice-list/notice-list'),
);

export const NotificationPage = lazy(
  () => import('@pages/notification/notification'),
);

export const SavedNoticesPage = lazy(
  () => import('@pages/saved-notices/saved-notices'),
);

export const OnboardingPage = lazy(
  () => import('@pages/onboarding/onboarding'),
);

export const LoginPage = lazy(() => import('@pages/login/login'));

export const AuthRequiredPage = lazy(
  () => import('@pages/auth-required/auth-required'),
);

export const NotFoundPage = lazy(() => import('@pages/not-found/not-found'));

export const CallbackPage = lazy(() => import('@pages/callback/callback'));
