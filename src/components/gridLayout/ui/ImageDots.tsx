/** @format */

import { cn } from '@utils/cn';
import { type Image } from '../LayoutGrid';

type ImageDotsProps = {
  handleClick: (id: number) => void;
  images: Image[];
  selectedId: number | null;
};

const ImageDots = ({ handleClick, images, selectedId }: ImageDotsProps) => {
  return (
    <div className="fixed bottom-2 left-1/2 z-50 flex gap-2 -translate-x-1/2">
      {images.map(({ className }, index) => (
        <div
          key={index}
          onClick={() => handleClick(index + 1)}
          className={cn(
            'aspect-square w-4 bg-white cursor-pointer  rounded-full border-2',
            className,
            selectedId === index + 1 && 'bg-black'
          )}
        />
      ))}
    </div>
  );
};

export default ImageDots;
