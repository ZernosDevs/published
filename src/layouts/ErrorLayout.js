import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouteError } from 'react-router-dom';

const ErrorLayout = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header />
      <main>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorLayout;