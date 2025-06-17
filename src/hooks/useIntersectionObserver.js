import { useCallback, useEffect, useState } from "react";

const useIntersectionObserver = (elementIds, options = {}) => {
  const [activeId, setActiveId] = useState("");

  const defaultOptions = {
    root: null,
    rootMargin: "-10% 0% -80% 0%", // Better margins for section detection
    threshold: [0.1, 0.5, 0.9], // Multiple thresholds for better accuracy
    ...options,
  };

  const updateActiveId = useCallback(
    (entries) => {
      // Find the entry with the highest intersection ratio
      let maxRatio = 0;
      let activeEntry = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeEntry = entry;
        }
      });

      if (activeEntry && activeEntry.target.id !== activeId) {
        setActiveId(activeEntry.target.id);
      }
    },
    [activeId]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(updateActiveId, defaultOptions);

    // Observe all elements
    const elements = elementIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) {
      console.warn("No elements found for intersection observer");
      return;
    }

    elements.forEach((element) => observer.observe(element));

    // Set initial active section
    const currentScroll = window.scrollY;
    const viewportHeight = window.innerHeight;

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + currentScroll;
      const elementBottom = elementTop + rect.height;

      if (
        currentScroll >= elementTop - viewportHeight * 0.3 &&
        currentScroll < elementBottom - viewportHeight * 0.3
      ) {
        setActiveId(element.id);
        break;
      }
    }

    // Cleanup
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [elementIds, updateActiveId]);

  return activeId;
};

export default useIntersectionObserver;
