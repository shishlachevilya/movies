import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootRoute } from './routes';
import { HomePage, ErrorPage, AboutPage, ContactPage } from './pages';
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
      {
        path: ROUTES_PATH.about,
        element: <AboutPage />,
      },
      {
        path: ROUTES_PATH.contact,
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
