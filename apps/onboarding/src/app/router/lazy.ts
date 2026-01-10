import { lazy } from "react";

export const LoginPage = lazy(() => import("@pages/login/login"));
export const OnboardingPage = lazy(
  () => import("@pages/onboarding/onboarding")
);
