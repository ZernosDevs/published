import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouteError } from 'react-router-dom';
import './ErroLayout.css'

const ErrorLayout = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header />
      <main className='error-layout'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. Or did it?</p>
        <p>Are you a developer checking for bugs or loopholes in my portfolio site? If you find any please let me know!</p>
        <p>I would appreciate if you send an email or message me through one of my contacts! </p>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorLayout;