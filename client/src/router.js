import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootRoute } from './routes';
import { HomePage, ErrorPage } from './pages';
import { ROUTES_PATH } from './constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.root,
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
