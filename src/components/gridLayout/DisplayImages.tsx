/** @format */

import { cn } from "@utils/cn";
import { BlurImage } from "./BlurImage";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HoverImageBackground from "./ui/HoverImageBackground";
import { type Image } from "./LayoutGrid";

type DisplayImagesProps = {
  images: Image[];
  handleClick: (id: number) => void;
  selectedId: number | null;
  lastSelectedId: number | null;
};

const DisplayImages = ({
  images,
  handleClick,
  selectedId,
  lastSelectedId,
}: DisplayImagesProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMoseLeave = () => {
    if (selectedId) return;
    setHoveredId(null);
  };

  useEffect(() => {
    if (selectedId) {
      setHoveredId(selectedId);
    }
    if (!selectedId) {
      setHoveredId(null);
    }
  }, [selectedId]);
  return (
    <>
      {images.map(({ img, id, className }) => (
        <div
          key={id}
          className={cn("relative p-2", className)}
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={handleMoseLeave}
        >
          <motion.div
            layout
            onClick={() => handleClick(id)}
            className={cn(
              "relative cursor-pointer overflow-hidden ",
              selectedId === id
                ? className === "col-span-1"
                  ? // if image is opened vertical
                    "fixed inset-0 z-50 m-auto h-[700px] w-[500px] cursor-default rounded-[20px]"
                  : // if image is opened horizontal
                    "fixed inset-0 z-50 m-auto h-[500px] w-[800px] cursor-default rounded-[20px]"
                : lastSelectedId === id
                  ? "z-40 h-full  w-full rounded-[20px]"
                  : "z-20 h-full  w-full rounded-[20px]",
            )}
          >
            <BlurImage src={img.src} isHovered={id !== selectedId} />
          </motion.div>

          {hoveredId === id && <HoverImageBackground />}
        </div>
      ))}
    </>
  );
};

export default DisplayImages;
