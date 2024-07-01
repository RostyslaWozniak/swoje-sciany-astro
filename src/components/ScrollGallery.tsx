type ScrollGalleryProps = {
  images: {
    format: string;
    width: number;
    height: number;
    src: string;
  }[];
};

export const ScrollGallery = ({ images }: ScrollGalleryProps) => {
  return (
    <div className="flex snap-x snap-mandatory items-center gap-5 overflow-x-scroll px-2.5 py-12 scrollbar-hide">
      {images.map(({ src }, i) => (
        <img
          key={i}
          src={src}
          alt="zdjęcie realizacji remontu"
          className="h-full w-[90vw] snap-center rounded-xl shadow-xl shadow-black/30 sm:w-[300px]"
        />
      ))}
    </div>
  );
};
