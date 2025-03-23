import { useEffect, useState } from "react";

export const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const setCookie = (name: string, value: boolean, daysToLive: number) => {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
    setIsVisible(false);
  };
  useEffect(() => {
    setIsVisible(true);
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    cArray.forEach((el) => {
      if (el.indexOf("cookie") === 0) {
        setIsVisible(false);
      }
    });
  }, []);
  return (
    <div
      className="fixed bottom-0 z-[99] min-h-[200px] w-full flex-col items-center justify-center bg-secondary/80 px-2.5 py-8 text-white backdrop-blur-lg lg:px-40"
      style={{
        display: isVisible ? "flex" : "none",
      }}
    >
      <p className="text-center text-lg lg:text-xl">
        Nasza strona internetowa może wykorzystywać pliki cookies w celu poprawy
        jakości naszych usług i dostosowania naszej strony do Twoich potrzeb.
        Możesz zmienić ustawienia plików cookies w swojej przeglądarce
        internetowej.
      </p>
      <button
        onClick={() => setCookie("cookie", true, 30)}
        className="bg-accent my-5 w-full rounded-full border-2 px-8  py-2 text-lg sm:w-auto "
      >
        Rozumiem
      </button>
    </div>
  );
};
