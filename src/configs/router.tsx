import PageLayout from '@/components/layouts/PageLayout';
import type { RouteObject } from 'react-router-dom';
import MySettings from '@/pages/settings';
import LoginPage from '@/pages/login';
import HomePage from '@/pages/Home';
import JobsBoard from '@/pages/jobs';

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
      {
        path: '/jobs',
        index: true,
        element: <JobsBoard />,
      },
    ],
  },
  {
    element: <LoginPage />,
    path: '/login',
  },
] as RouteObject[];
