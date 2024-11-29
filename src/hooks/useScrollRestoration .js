import { useEffect } from "react";

const useScrollRestoration = (scrollKey) => {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(scrollKey);
    if (savedScrollPosition) {
      window.scrollTo(
        { top: 0, left: 0, behavior: "instant" },
        parseInt(savedScrollPosition, 10)
      );
    }

    const handleScroll = () => {
      sessionStorage.setItem(scrollKey, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollKey]);
};

export default useScrollRestoration;
