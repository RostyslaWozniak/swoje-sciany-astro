import { LayoutGrid } from "@components/gridLayout/LayoutGrid";
import { images } from "@components/gridLayout/data/data";  
import { useEffect, useState } from "react";

export const ImageGallery = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth])
  const matches = windowWidth <= 1024;
  return (
  <section>
    {!matches ? (
         <div className="relative h-[900px] w-full  py-20">

             <LayoutGrid images={images} />
         </div>
    ) : (
    <div
      className="flex snap-x snap-mandatory items-center gap-5 overflow-x-scroll px-2.5 py-12 scrollbar-hide "
    >
      {
        images.map((img, i) => (
          <img
          key={i}
            src={img.img.src}
            alt="zdjęcie realizacji remontu"
            className="h-full w-[90vw] snap-center rounded-xl shadow-xl shadow-black/30 sm:w-[300px]"
          />
        ))
      }
    </div>
    )}
  </section>
  )
};
