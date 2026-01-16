import { createBrowserRouter } from 'react-router';

import { BaseLayout } from './basic-layout';
import { globalRoutes } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [...globalRoutes],
  },
]);
