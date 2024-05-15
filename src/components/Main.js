import React, { useEffect, useRef, useState } from 'react';
import './Main.css';
import NeuronAnimation from './NeuronAnimation';
import NewSvgComponent from './NeuronSVGSmall.js'; // New SVG component for smaller screens
import { useTranslation } from 'react-i18next';

function Main() {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language.startsWith('ja');
  const writeClass = isJapanese ? 'handwrite-jp' : 'handwrite-en';
  const nameClass = isJapanese ? 'name-jp' : 'name-en';
  const profClass = isJapanese ? 'prof-jp' : 'prof-en';
  const motoClass = isJapanese ? 'moto-jp' : 'moto-en';



  const textRef = useRef(null); // Reference for text section
  const imageRef = useRef(null); // Reference for image section
  const newSvgRef = useRef(null); // Reference for new SVG component

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000); // State for smaller screens

  useEffect(() => {
    // Define media query for 1000px or smaller
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    // Handler for media query changes
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches); // Update state based on media query
    };

    // Add event listener for media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Apply animation when in view
            observer.unobserve(entry.target); // Prevent re-triggering
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current); // Start observing the text section
    }
    if (imageRef.current) {
      observer.observe(imageRef.current); // Observe the image section
    }
    if (isSmallScreen && newSvgRef.current) {
      observer.observe(newSvgRef.current); // Only observe new SVG component on small screens
    }

    // Cleanup observer and media query event listener
    return () => {
      observer.disconnect(); // Disconnect observer
      mediaQuery.removeEventListener('change', handleMediaQueryChange); // Cleanup media query listener
    };
  }, []); // Ensure this only runs once when the component is mounted

  return (
    <div className='main-layout' id='home'>
      <div className='main-container'>
        <div className='display-text' ref={textRef}>
          
          <h1 className={ nameClass }>{t('name')}</h1>
          <h2 className={ profClass }>{t('prof')}</h2>
          <h3 className={ motoClass }>{t('moto')}</h3>
          <div className={ writeClass }>
            <p>{t('handwrite')}</p>
          </div>
        </div>
      {/* <div className='display-image' ref={imageRef}> 
          {isSmallScreen && (
            <div ref={newSvgRef}> 
              <NewSvgComponent /> 
            </div>
          )}
          {isSmallScreen ? null : <NeuronAnimation />} 
        </div> */}
      </div>  
    </div>
  );
}

export default Main;
