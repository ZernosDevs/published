import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

function ScrollProgress({ color = '#4caf50' }) {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;

      setScrollWidth(scrollProgress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial call to set progress on load
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollWidth}%`, backgroundColor: color }} />
    </div>
  );
}

export default ScrollProgress;
