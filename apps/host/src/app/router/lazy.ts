import { lazy } from 'react';

export const EventCreatePage = lazy(
  () => import('@pages/event-create/event-create'),
);

export const HomePage = lazy(() => import('@pages/home/home'));

export const MyPage = lazy(() => import('@pages/mypage/mypage'));

export const NoticeCreatePage = lazy(
  () => import('@pages/notice-create/notice-create'),
);
export const NoticeDetailsPage = lazy(
  () => import('@pages/notice-details/notice-details'),
);

export const NoticeListPage = lazy(
  () => import('@pages/notice-list/notice-list'),
);

export const MyHistoryPage = lazy(() => import('@pages/my-history/my-history'));

export const OnboardingPage = lazy(
  () => import('@pages/onboarding/onboarding'),
);

export const LoginPage = lazy(() => import('@pages/login/login'));

export const AuthRequiredPage = lazy(
  () => import('@pages/auth-required/auth-required'),
);

export const NotFoundPage = lazy(() => import('@pages/not-found/not-found'));

export const CallbackPage = lazy(() => import('@pages/callback/callback'));
