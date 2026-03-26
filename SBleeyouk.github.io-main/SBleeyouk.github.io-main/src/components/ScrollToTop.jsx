import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]); // Runs whenever the route changes

  return null; // No UI is rendered
};

export default ScrollToTop;
