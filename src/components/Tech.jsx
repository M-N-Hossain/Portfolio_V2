import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

export default function Tech({ imgUrl, name }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="tech"
    >
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </motion.div>
  );
}
