import { useEffect, useState } from "react";
import Logo from "./Logo";
import "./style.css";

const LogoAnimation = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  const delayLoading = 3000;
  useEffect(() => {
    setTimeout(() => {
      setIsLoaderVisible(false);
      document.body.style.overflow = "auto";
    }, delayLoading);
  }, [delayLoading]);

  const delay = delayLoading / 1000 - 1;
  return (
    <div
      onTouchStart={(e) => e.stopPropagation()}
      className="z-[100] h-full w-full backdrop-blur-lg"
      id="loader-container"
      style={{
        display: isLoaderVisible ? "grid" : "none",
        animation: `2s ${delay}s  linear bg-disappear`,
      }}
    >
      <Logo />
    </div>
  );
};

export default LogoAnimation;
