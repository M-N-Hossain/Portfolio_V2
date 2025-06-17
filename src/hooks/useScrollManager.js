import { useCallback, useEffect, useRef, useState } from "react";

const useScrollManager = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  // Smooth scroll to element with offset
  const scrollToElement = useCallback(
    (elementId, offset = -100, duration = 800) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      // Custom smooth scroll animation
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smooth animation
        const ease = (t) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        window.scrollTo(0, startPosition + distance * ease(progress));

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    },
    []
  );

  // Scroll to top smoothly
  const scrollToTop = useCallback((duration = 600) => {
    const startPosition = window.pageYOffset;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t) => 1 - Math.pow(1 - t, 3); // Ease out cubic

      window.scrollTo(0, startPosition * (1 - ease(progress)));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  // Calculate scroll progress
  const calculateScrollProgress = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(Math.min(Math.max(progress, 0), 100));
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
      setIsScrolling(true);

      // Calculate progress
      calculateScrollProgress();

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set scrolling to false after scroll ends
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    calculateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [calculateScrollProgress]);

  return {
    isScrolling,
    scrollDirection,
    scrollProgress,
    scrollToElement,
    scrollToTop,
  };
};

export default useScrollManager;
