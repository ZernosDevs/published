import React, { useEffect, useRef } from 'react';
import './Slider.css';
import UnibuzzMobiles from '../resources/unibuzz/unibuzz-mobile.png';

const SliderReverse = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationSpeed = 2; // Control the speed of the auto-scroll
  const requestId = useRef(null);

  const animateScroll = () => {
    const container = containerRef.current;
    if (!container || isDragging.current) return;

    container.scrollLeft -= animationSpeed; // Reverse the direction of scroll

    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 2; // Loop the scrolling back to start
    }

    requestId.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    // Start the auto-scrolling
    requestId.current = requestAnimationFrame(animateScroll);

    return () => {
      if (requestId.current) {
        cancelAnimationFrame(requestId.current); // Clean up on component unmount
      }
    };
  }, []);

  const startDrag = (e) => {
    isDragging.current = true;

    if (e.touches && e.touches[0]) {
      startX.current = e.touches[0].pageX;  // For touch events
    } else if (e.pageX !== undefined) {
      startX.current = e.pageX;  // For mouse events
    } else {
      return;  // Neither touch nor mouse event, return early to avoid errors
    }

    scrollLeft.current = containerRef.current.scrollLeft;
    cancelAnimationFrame(requestId.current); // Stop the scrolling animation while dragging
  };

  const drag = (e) => {
    if (!isDragging.current) return;

    let x;
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].pageX;  // For touch events
    } else if (e.pageX !== undefined) {
      x = e.pageX;  // For mouse events
    } else {
      return;  // If neither is available, exit the function
    }

    const walk = (x - startX.current) * 1; // Adjust the factor to control drag speed
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const endDrag = () => {
    isDragging.current = false;

    // Restart scrolling animation after a delay
    setTimeout(() => {
      if (!isDragging.current) {
        requestId.current = requestAnimationFrame(animateScroll);
      }
    }, 100); // Small delay before restarting scrolling animation
  };

  return (
    <div
      className="scroll-container"
      ref={containerRef}
      onMouseDown={startDrag}
      onMouseMove={drag}
      onMouseUp={endDrag}

    > 
      <div className="scrolling-box-mobile">
        <img src={UnibuzzMobiles} alt="Unibuzz Mobiles" className="scrolling-image" />
        <img src={UnibuzzMobiles} alt="Unibuzz Mobiles Clone" className="scrolling-image" />
        <img src={UnibuzzMobiles} alt="Unibuzz Mobiles Clone" className="scrolling-image" />
      </div>
    </div>
  );
};

export default SliderReverse;
