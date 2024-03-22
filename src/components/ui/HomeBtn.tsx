import { phoneNumber } from "@assets/contact-details";
import { useState } from "react";
import { cn } from "src/utils/cn";

export const HomeBtn = () => {
    const [isNumberVisible, setIsNumberVisible] = useState(false);

  return(       
    <button
     onClick={() => setIsNumberVisible(prev=> !prev)}
        className="relative bg-accent w-[min(400px,100%)] flex flex-col items-center  rounded-[25px] border-2 h-14 font-bold sm:text-2xl overflow-hidden"
        >
            <div className={cn("h-20 top-0 leading-[50px]   absolute", {"-top-14": isNumberVisible})}>Skontaktuj się z nami</div>
            <a href={`tel:${phoneNumber}`} className={cn("transition-all w-full -bottom-14 leading-[50px] absolute", {"bottom-0": isNumberVisible})}>{phoneNumber}</a>
    </button>
 )
};
