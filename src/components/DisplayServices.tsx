import { useState } from "react";
import HoverImageBackground from "./gridLayout/ui/HoverImageBackground";
import type { MarkdownInstance } from "astro";
import { cn } from "@utils/cn";

export const DisplayServices = ({
  data,
  className,
}: {
  data: MarkdownInstance<Record<string, any>>[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div
      className={cn("relative flex gap-10", className)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {data.map(({ url, frontmatter }, i) => (
        <a
          key={i}
          href={url}
          onMouseOver={() => setActiveIndex(i)}
          className="group relative flex flex-col items-center space-y-5 p-2  capitalize"
        >
          <div className="relative z-10 h-[230px] w-[350px]  overflow-hidden rounded-2xl border-2 shadow-xl shadow-black/30">
            <img
              src={frontmatter.image.url}
              alt={frontmatter.image.alt}
              className="z-10 h-full w-full object-cover duration-300 group-hover:scale-105"
            />
            <h3 className="absolute -left-1 bottom-5 z-50 rounded-r-lg border-2 bg-black/60 px-5  py-1 text-2xl font-bold">
              {frontmatter.title}
            </h3>
          </div>
          {activeIndex === i && <HoverImageBackground className="-top-5" />}
        </a>
      ))}
    </div>
  );
};
