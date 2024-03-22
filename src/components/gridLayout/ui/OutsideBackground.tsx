/** @format */

import { cn } from '@utils/cn';
import { motion } from 'framer-motion';
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
        'fixed h-full w-full left-0 top-0 bg-black opacity-0 z-10 duration-300',
        selectedId
          ? 'pointer-events-auto opacity-60 z-40'
          : 'pointer-events-none'
      )}
    />
  );
};

export default OutsideBackground;
