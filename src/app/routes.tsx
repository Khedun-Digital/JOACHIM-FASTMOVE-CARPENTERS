import React from 'react';
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom';
import App from './App';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Work from '../pages/Work';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';
import { getConfig } from '../lib/config';

const { site } = getConfig();

const normalizePath = (path: string): string => path.replace(/^\//, '');

const resolveElement = (sectionKey: string) => {
  switch (sectionKey) {
    case 'home':
      return <Home />;
    case 'services':
      return <Services />;
    case 'work':
      return <Work />;
    case 'reviews':
      return <Reviews />;
    case 'contact':
      return <Contact />;
    default:
      return <Home />;
  }
};

const childRoutes: RouteObject[] = site.pages.map((page) => {
  const element = resolveElement(page.sectionsKey);
  if (page.sectionsKey === 'home') {
    return { index: true, element } as const;
  }

  return {
    path: normalizePath(page.path),
    element
  } as const;
});

const homePath = site.pages.find((page) => page.sectionsKey === 'home')?.path ?? '/';
const absoluteHomePath = homePath.startsWith('/') ? homePath : `/${homePath}`;

const routes: RouteObject[] = [
  ...childRoutes,
  {
    path: '*',
    element: <Navigate to={absoluteHomePath} replace />
  }
];

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: routes
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);
