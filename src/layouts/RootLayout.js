import React from 'react';
import { Outlet, useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorLayout from './ErrorLayout'

const RootLayout = () => {
  const error = useRouteError();

  return (
    <div>
      <Header />
      {error ? <ErrorLayout error={error} /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default RootLayout;