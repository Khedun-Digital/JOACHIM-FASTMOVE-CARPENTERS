import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Work from '../pages/Work';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';
import { getConfig } from '../lib/config';

const { site } = getConfig();

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: site.pages.map((p) => {
      switch (p.sectionsKey) {
        case 'home':
          return { index: true, element: <Home /> } as const;
        case 'services':
          return { path: p.path.replace(/^\//, ''), element: <Services /> } as const;
        case 'work':
          return { path: p.path.replace(/^\//, ''), element: <Work /> } as const;
        case 'reviews':
          return { path: p.path.replace(/^\//, ''), element: <Reviews /> } as const;
        case 'contact':
          return { path: p.path.replace(/^\//, ''), element: <Contact /> } as const;
        default:
          return { path: p.path.replace(/^\//, ''), element: <Home /> } as const;
      }
    })
  }
]);

