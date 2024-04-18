/** @format */

import { cn } from "@utils/cn";
import { motion } from "framer-motion";

const HoverImageBackground = ({ className }: { className?: string }) => {
  return (
    <motion.span
      className={cn(
        "absolute inset-0 block  h-full w-full  rounded-3xl  bg-light",
        className,
      )}
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
