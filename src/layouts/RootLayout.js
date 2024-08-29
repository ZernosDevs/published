import React from 'react';
import { Outlet, useRouteError, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorLayout from './ErrorLayout';
import ScrollToTop from '../components/ScrollTop';
import ScrollProgress from '../components/ScrollProgress';
import './RootLayout.css';

const RootLayout = () => {
  const error = useRouteError();
  const location = useLocation();

  // Define color logic based on the current route and set visibility of the scroll progress bar
  let scrollProgressColor = '#4caf50'; // Default color
  let shouldShowScrollProgress = false; // Default to not showing the scroll progress bar

  if (location.pathname.startsWith('/unibuzz')) {
    scrollProgressColor = '#6744ff'; // Color for Unibuzz page
    shouldShowScrollProgress = true;
  } else if (location.pathname.startsWith('/sip')) {
    scrollProgressColor = '#FDA5AF'; // Color for Sip page
    shouldShowScrollProgress = true;
  } else if (location.pathname.startsWith('/esports')) {
    scrollProgressColor = '#D4D4D4'; // Color for Esports page
    shouldShowScrollProgress = true;
  }

  return (
    <>
      {shouldShowScrollProgress && (
        <ScrollProgress color={scrollProgressColor} />
      )}
      <div className="rootlayout">
        <ScrollToTop />
        <Header />
        {error ? <ErrorLayout error={error} /> : <Outlet />}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
