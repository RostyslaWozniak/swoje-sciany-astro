import { phoneNumber } from "@assets/contact-details";
import { useState } from "react";
import { cn } from "src/utils/cn";

export const HomeBtn = () => {
    const [isNumberVisible, setIsNumberVisible] = useState(false);

  return(       
    <button
     onClick={() => setIsNumberVisible(true)}
        className="relative bg-accent/70 w-[min(400px,100%)] flex flex-col items-center  rounded-full border-2 h-14 font-bold text-2xl overflow-hidden [text-shadow:_1px_1px_0_rgb(5_5_5_)] hover:bg-accent/50 duration-300"
        >
            <div className={cn("h-20 top-0 leading-[50px]   absolute", {"-top-14": isNumberVisible})}>Skontaktuj się z nami</div>
            <a href={`tel:${phoneNumber}`} className={cn("transition-all w-full -bottom-14 leading-[50px] absolute", {"bottom-0": isNumberVisible})}>{phoneNumber}</a>
    </button>
 )
};
