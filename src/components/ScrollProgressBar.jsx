import { motion } from "framer-motion";
import React from "react";
import useScrollManager from "../hooks/useScrollManager";

const ScrollProgressBar = () => {
  const { scrollProgress, isScrolling } = useScrollManager();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"
      style={{
        transformOrigin: "0%",
      }}
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: scrollProgress / 100,
        opacity: isScrolling ? 1 : 0.7,
      }}
      transition={{
        scaleX: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 },
      }}
    />
  );
};

export default ScrollProgressBar;
