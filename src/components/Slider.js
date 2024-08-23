import React, { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
  const containerRef = useRef(null);
  const { locoScroll } = useOutletContext();

  useEffect(() => {
    if (!locoScroll) {
      console.error('Locomotive Scroll is not initialized');
      return;
    }

    const handleScroll = (event) => {
      if (!containerRef.current) return;

      // Get the current vertical scroll position
      const scrollTop = event.scroll.y;
      const maxScrollTop = event.limit.y;

      // Calculate the scroll percentage
      const scrollPercentage = scrollTop / maxScrollTop;

      // Get the bounding rectangle of the container
      const containerRect = containerRef.current.getBoundingClientRect();

      // Check if the container is in the viewport
      if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
        // Apply movement when the container is in view
        const movementFactor = 4000; // Adjust this factor as needed
        const newScrollPosition = scrollPercentage * movementFactor;


        // Move the container right when scrolling down and left when scrolling up
        containerRef.current.style.transform = `translateX(${newScrollPosition}px)`;
        
      }
    };

    locoScroll.on('scroll', handleScroll);

    return () => {
      locoScroll.off('scroll', handleScroll);
    };
  }, [locoScroll]);

  return (
    <div className="scroll-container">
      <div ref={containerRef} className="scrolling-box">
        <div className="box red-box"></div>
        <div className="box green-box"></div>
        <div className="box blue-box"></div>
        <div className="box yellow-box"></div>
        <div className="box purple-box"></div>
      </div>
    </div>
  );
};

export default Slider;
