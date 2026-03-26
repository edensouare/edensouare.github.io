import React from 'react';
import Diagram from './Diagram';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Slight slide up
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Duration of fade-in
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20, // Slide out
    transition: {
      duration: 0.6, // Duration of fade-out
      ease: "easeIn",
    },
  },
};

function Saetbyeol() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Diagram />
    </motion.div>
  );
}

export default Saetbyeol;