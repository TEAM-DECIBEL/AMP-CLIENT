import { createBrowserRouter } from 'react-router';

import { BasicLayout } from './basic-layout';
import { globalRoutes } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [...globalRoutes],
  },
]);
