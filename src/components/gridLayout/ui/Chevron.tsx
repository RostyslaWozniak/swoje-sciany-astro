/** @format */

import { ChevronLeft, ChevronRight } from "lucide-react";

type ChevronProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const LeftChevron = ({ onClick }: ChevronProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed left-10 top-1/2 z-[100] cursor-pointer text-4xl  text-white"
    >
      <ChevronLeft size="48" />
    </div>
  );
};

export const RightChevron = ({ onClick }: ChevronProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed right-10 top-1/2 z-[100] cursor-pointer text-4xl  text-white"
    >
      <ChevronRight size="48" />
    </div>
  );
};
