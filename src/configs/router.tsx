import PageLayout from '@/components/layouts/PageLayout';
import type { RouteObject } from 'react-router-dom';
import MySettings from '@/pages/settings';
import LoginPage from '@/pages/login';
import HomePage from '@/pages/Home';

export const routes = [
  {
    element: <PageLayout />,
    path: '/',
    children: [
      {
        path: '/settings',
        index: true,
        element: <MySettings />,
      },
      {
        path: '/home',
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <LoginPage />,
    path: '/login',
  },
] as RouteObject[];
