import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ locoScrollRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (locoScrollRef.current) {
      locoScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [pathname, locoScrollRef]);

  return null;
};

export default ScrollToTop;
