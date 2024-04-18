/** @format */

import { cn } from "@utils/cn";
import { motion } from "framer-motion";
type OutsideBackgroundProps = {
  handleOutsideClick: () => void;
  selectedId: number | null;
};
const OutsideBackground = ({
  handleOutsideClick,
  selectedId,
}: OutsideBackgroundProps) => {
  return (
    <motion.div
      onClick={handleOutsideClick}
      className={cn(
        "fixed left-0 top-0 z-10 h-full w-full  bg-black opacity-0 duration-300",
        selectedId
          ? "pointer-events-auto z-40 opacity-60"
          : "pointer-events-none",
      )}
    />
  );
};

export default OutsideBackground;
