/** @format */

import { motion } from 'framer-motion';

const HoverImageBackground = () => {
  return (
    <motion.span
      className="absolute inset-0 h-full w-full  bg-light z-10  block  rounded-3xl"
      layoutId="hoverBackground"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.15 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.15, delay: 0.2 },
      }}
    />
  );
};

export default HoverImageBackground;
