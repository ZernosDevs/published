import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useRouteError, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorLayout from './ErrorLayout';
import ScrollToTop from '../components/ScrollTop';
import ScrollProgress from '../components/ScrollProgress';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './RootLayout.css';

const RootLayout = () => {
  const error = useRouteError();
  const location = useLocation();
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);
  const [isLocoScrollReady, setIsLocoScrollReady] = useState(false); // Track Locomotive Scroll readiness

  // Define color logic based on the current route
  let scrollProgressColor = '#4caf50'; // Default color
  const shouldShowScrollProgress = location.pathname !== '/'; // Modify this condition as needed

  if (location.pathname.startsWith('/unibuzz')) {
    scrollProgressColor = '#6744ff'; // Color for Unibuzz page
  } else if (location.pathname.startsWith('/sip')) {
    scrollProgressColor = '#FDA5AF'; // Color for Sip page
  } else if (location.pathname.startsWith('/esports')) {
    scrollProgressColor = '#D4D4D4'; // Color for Esports page
  } else if (location.pathname.startsWith('/about')) {
    scrollProgressColor = 'none'; // Color for about page
  }
  
  

  useEffect(() => {
    if (scrollRef.current) {
      // Initialize Locomotive Scroll
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        inertia: 0.8,
      });

      // Set Locomotive Scroll as ready
      setIsLocoScrollReady(true);
    }

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
    <>
      {shouldShowScrollProgress && isLocoScrollReady && (
        <ScrollProgress locoScroll={locoScrollRef.current} color={scrollProgressColor} />
      )}
      <div ref={scrollRef} data-scroll-container className="rootlayout">
        <ScrollToTop locoScrollRef={locoScrollRef} />
        <Header />
        {error ? <ErrorLayout error={error} /> : <Outlet context={{ locoScroll: locoScrollRef.current }} />}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
