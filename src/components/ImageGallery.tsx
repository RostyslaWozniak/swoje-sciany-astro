import { LayoutGrid } from "@components/gridLayout/LayoutGrid";
import { gridImages, scrollImages } from "@components/gridLayout/data/data";
import { useEffect, useState } from "react";
import { ScrollGallery } from "./ScrollGallery";
import H2 from "./ui/H2.astro";

export const ImageGallery = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  const matches = windowWidth <= 1024;
  return (
    <section>
      {!matches ? (
        <LayoutGrid images={gridImages} />
      ) : (
        <ScrollGallery images={scrollImages} />
      )}
    </section>
  );
};
