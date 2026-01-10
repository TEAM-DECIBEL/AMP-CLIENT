import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { globalRoutes } from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [...globalRoutes],
  },
]);
