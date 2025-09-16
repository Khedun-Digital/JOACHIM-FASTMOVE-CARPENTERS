import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './app/routes';
import { applyBrandTokens } from './lib/tokens';

console.log('Main.tsx loaded');

try {
  applyBrandTokens();
  console.log('Brand tokens applied');
} catch (error) {
  console.error('Error applying brand tokens:', error);
}

console.log('Router:', router);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

