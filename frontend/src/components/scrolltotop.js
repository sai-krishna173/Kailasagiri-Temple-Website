import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component scrolls the window to the top every time the route changes.
 * It uses the `useLocation` hook to detect a change in the page's pathname.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls the window to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component doesn't render any visible UI
}