import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

function ScrollProgress({ locoScroll, color = '#4caf50' }) { 
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (!locoScroll || !locoScroll.scroll) return; // Ensure locoScroll is defined

    const updateScrollProgress = () => {
      const scrollTop = locoScroll.scroll.instance.scroll.y;
      const scrollHeight = locoScroll.scroll.instance.limit.y;
      const scrollProgress = (scrollTop / scrollHeight) * 100;

      setScrollWidth(scrollProgress);
    };

    locoScroll.on('scroll', updateScrollProgress);

    return () => {
      locoScroll.off('scroll', updateScrollProgress);
    };
  }, [locoScroll]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollWidth}%`, backgroundColor: color }} />
    </div>
  );
}

export default ScrollProgress;
