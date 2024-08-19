import React, { useEffect, useRef } from 'react';
import { Outlet, useRouteError, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorLayout from './ErrorLayout';
import ScrollToTop from '../components/ScrollTop';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './RootLayout.css'

const RootLayout = () => {
  const error = useRouteError();
  const location = useLocation();
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.8,
    });

    return () => {
      if (locoScrollRef.current) locoScrollRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    // Update Locomotive Scroll on route change or when images are loaded
    const updateScroll = () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update();
        locoScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
      }
    };

    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let imagesLoaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded += 1;
      } else {
        img.addEventListener('load', () => {
          imagesLoaded += 1;
          if (imagesLoaded === totalImages) {
            updateScroll();
          }
        });
      }
    });

    if (imagesLoaded === totalImages) {
      updateScroll();
    }

  }, [location.pathname]);

  return (
    <div ref={scrollRef} data-scroll-container className="rootlayout">
      <ScrollToTop locoScrollRef={locoScrollRef} />
      <Header />
      {error ? <ErrorLayout error={error} /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default RootLayout;
