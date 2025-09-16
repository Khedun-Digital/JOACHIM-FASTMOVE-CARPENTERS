import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderFooter } from './HeaderFooter';

export function RootLayout(): JSX.Element {
  return (
    <HeaderFooter>
      <Outlet />
    </HeaderFooter>
  );
}

