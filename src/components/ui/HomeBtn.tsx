import { phoneNumber } from "@assets/contact-details";
import { useState } from "react";
import { cn } from "src/utils/cn";

export const HomeBtn = () => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);

  return (
    <button
      onClick={() => setIsNumberVisible(true)}
      className="relative  flex h-12 w-[min(400px,100%)]   flex-col items-center overflow-hidden rounded-full  bg-primary text-2xl  font-bold text-primary-foreground  shadow-lg duration-300  "
    >
      <div
        className={cn("absolute -top-0.5 h-16  leading-[50px]", {
          "-top-12": isNumberVisible,
        })}
      >
        Skontaktuj się z nami
      </div>
      <a
        href={`tel:${phoneNumber}`}
        className={cn(
          "absolute -bottom-12 w-full leading-[50px] transition-all",
          { "bottom-0": isNumberVisible },
        )}
      >
        {phoneNumber}
      </a>
    </button>
  );
};
