/** @format */
import { useState } from 'react';

import { LeftChevron, RightChevron } from './ui/Chevron';
import ImageDots from './ui/ImageDots';
import OutsideBackground from './ui/OutsideBackground';
import DisplayImages from './DisplayImages';

export type Image = {
  id: number;
  className?: string;
  img: {
    format: string;
    height : number;
    src: string;
    width: number;
  };
};

export const LayoutGrid = ({ images }: { images: Image[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [lastSelectedId, setLastSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setLastSelectedId(selectedId);
    setSelectedId(id);
  };

  const handleOutsideClick = () => {
    setLastSelectedId(selectedId);
    setSelectedId(null);
  };
  const handleNextImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (selectedId) {
      const nextImage = images.find((el) => el.id === selectedId + 1);
      setLastSelectedId(selectedId);
      if (!nextImage) {
        setSelectedId(1);
        return;
      }
      setSelectedId(nextImage.id);
    }
  };
  const handlePrevImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (selectedId) {
      const nextImage = images.find((el) => el.id === selectedId - 1);
      setLastSelectedId(selectedId);
      if (!nextImage) {
        setSelectedId(images.length);
        return;
      }
      setSelectedId(nextImage.id);
    }
  };
  return (
    <div className="relative h-[900px] w-full  py-20 grid grid-cols-1 md:grid-cols-6 max-w-7xl mx-auto ">
      {/* LEFT ARROW */}
      {selectedId && <LeftChevron onClick={handlePrevImage} />}
      {/* IMAGES */}

      <DisplayImages
        images={images}
        lastSelectedId={lastSelectedId}
        selectedId={selectedId}
        handleClick={handleClick}
      />

      {/* RIGHT ARROW */}
      {selectedId && <RightChevron onClick={handleNextImage} />}
      {/* DOTS */}
      {selectedId && (
        <ImageDots
          handleClick={handleClick}
          images={images}
          selectedId={selectedId}
        />
      )}
      {/* OUTSIDE BACKGROUND */}
      <OutsideBackground
        handleOutsideClick={handleOutsideClick}
        selectedId={selectedId}
      />
    </div>
  );
};
