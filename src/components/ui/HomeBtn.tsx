import { phoneNumber } from "@assets/contact-details";
import { useState } from "react";
import { cn } from "src/utils/cn";

export const HomeBtn = () => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);

  return (
    <button
      onClick={() => setIsNumberVisible(true)}
      className="relative flex h-14 w-[min(400px,100%)] flex-col items-center  overflow-hidden rounded-full border-2 bg-accent/70 text-2xl font-bold shadow-castom duration-300 [text-shadow:_1px_1px_0_rgb(5_5_5_)] hover:bg-accent/50 md:text-3xl"
    >
      <div
        className={cn("absolute top-0 h-20   leading-[50px]", {
          "-top-14": isNumberVisible,
        })}
      >
        Skontaktuj się z nami
      </div>
      <a
        href={`tel:${phoneNumber}`}
        className={cn(
          "absolute -bottom-14 w-full leading-[50px] transition-all",
          { "bottom-0": isNumberVisible },
        )}
      >
        {phoneNumber}
      </a>
    </button>
  );
};
