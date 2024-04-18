/** @format */

import { useState } from "react";
import { cn } from "@utils/cn";
import { motion } from "framer-motion";

export const BlurImage = ({
  src,
  isHovered,
}: {
  src: string;
  isHovered: boolean;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.img
      src={src}
      onLoad={() => setLoaded(true)}
      className={cn(
        "absolute inset-0 h-full w-full",
        isHovered &&
          "scale-[101%] duration-300 hover:scale-110 hover:brightness-75",
        loaded ? "blur-none" : "blur-md",
      )}
      alt="thumbnail"
    />
  );
};
