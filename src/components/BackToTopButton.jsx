import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useScrollManager from "../hooks/useScrollManager";

const BackToTopButton = () => {
  const { scrollToTop, scrollProgress } = useScrollManager();

  // Show button when scrolled down more than 20%
  const showButton = scrollProgress > 20;

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg backdrop-blur-sm border border-white/20 hover:shadow-xl"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          onClick={() => scrollToTop()}
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
