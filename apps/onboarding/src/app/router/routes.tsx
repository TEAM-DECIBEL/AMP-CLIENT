import { ROUTE_PATH } from "@shared/constants/path";
import LoginPage from "@pages/login/login";
import OnboardingPage from "@pages/onboarding/onboarding";

export const globalRoutes = [
  {
    index: true,
    element: <LoginPage />,
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_PATH.ONBOARDING,
    element: <OnboardingPage />,
  },
] as const;
