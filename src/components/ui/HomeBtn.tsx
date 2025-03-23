import { phoneNumber } from "@assets/contact-details";
import { useState } from "react";
import { cn } from "src/utils/cn";

export const HomeBtn = () => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);

  return (
    <button
      onClick={() => setIsNumberVisible(true)}
      className="text-primary-foreground relative flex h-14 w-[min(400px,100%)] flex-col  items-center overflow-hidden rounded-full bg-primary  text-2xl font-bold  shadow-lg duration-300  md:text-3xl"
    >
      <div
        className={cn("absolute top-0 h-20   leading-[50px]", {
          "-top-16": isNumberVisible,
        })}
      >
        Skontaktuj się z nami
      </div>
      <a
        href={`tel:${phoneNumber}`}
        className={cn(
          "absolute -bottom-14 w-full leading-[50px] transition-all",
          { "bottom-1": isNumberVisible },
        )}
      >
        {phoneNumber}
      </a>
    </button>
  );
};
