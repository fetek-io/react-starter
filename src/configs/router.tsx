import PageLayout from '@/components/layouts/PageLayout';
import type { RouteObject } from 'react-router-dom';
import MySettings from '@/pages/settings';
import Home from '@/pages/Home';

export const routes = [
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <PageLayout />,
    path: '/settings',
    children: [
      {
        element: <MySettings />,
        index: true,
      },
    ],
  }
] as RouteObject[];
