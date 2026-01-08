import { Suspense } from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
