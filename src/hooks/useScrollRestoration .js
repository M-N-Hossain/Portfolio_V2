import { useEffect } from "react";

const useScrollRestoration = (scrollKey) => {
  useEffect(() => {
    // Restore scroll position after component mounts
    const savedScrollPosition = sessionStorage.getItem(scrollKey);

    if (savedScrollPosition) {
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollPosition, 10),
          left: 0,
          behavior: "instant",
        });
      }, 0);
    }

    // Throttled scroll handler for better performance
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        sessionStorage.setItem(scrollKey, window.scrollY.toString());
      }, 100); // Throttle to every 100ms
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [scrollKey]);
};

export default useScrollRestoration;
