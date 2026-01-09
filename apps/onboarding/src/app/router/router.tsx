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
          const mod = await import("@pages/login/login");
          return { Component: mod.LoginPage };
        },
      },
      {
        path: ROUTE_PATH.LOGIN,
        lazy: async () => {
          const mod = await import("@pages/login/login");
          return { Component: mod.LoginPage };
        },
      },
      {
        path: ROUTE_PATH.ONBOARDING,
        lazy: async () => {
          const mod = await import("@pages/onboarding/onboarding");
          return { Component: mod.OnboardingPage };
        },
      },
    ],
  },
]);
