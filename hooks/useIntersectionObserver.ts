import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fail-safe: If IntersectionObserver is missing, show content immediately
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(element); // Only trigger once
      }
    }, options);

    observer.observe(element);

    // Fallback: Force visible after 3 seconds in case observer hangs on mobile
    const timeout = setTimeout(() => {
        setIsIntersecting(true);
    }, 3000);

    return () => {
      if (element) observer.unobserve(element);
      clearTimeout(timeout);
    };
  }, [options]);

  return { elementRef, isIntersecting };
};