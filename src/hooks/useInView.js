import { useEffect, useState } from 'react';

/**
 * Hook to detect if an element is in viewport
 * @param {Object} options - Intersection Observer options
 * @returns {[React.MutableRefObject, boolean]} - [ref, isInView]
 */
export function useInView(options = {}) {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isInView];
}
