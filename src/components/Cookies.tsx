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
    setIsVisible(true)
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
      className="fixed bottom-0 z-[99] h-[200px] w-full flex-col items-center justify-center backdrop-blur-lg backdrop-brightness-50 lg:px-40"
      style={{
        display: isVisible ? "flex" : "none",
      }}
    >
      <p className="text-center lg:text-xl">
        Nasza strona internetowa może wykorzystywać pliki cookies w celu poprawy
        jakości naszych usług i dostosowania naszej strony do Twoich potrzeb.
        Możesz zmienić ustawienia plików cookies w swojej przeglądarce
        internetowej.
      </p>
      <button
        onClick={() => setCookie("cookie", true, 30)}
        className="my-5 h-[30px] w-[150px] rounded-lg border-2 bg-accent "
      >
        Ok
      </button>
    </div>
  );
};

