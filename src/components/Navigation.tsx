import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@utils/cn";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const navItems = [
  { id: 1, label: "Główna", path: "/" },
  { id: 2, label: "Usługi", path: "/usługi" },
  { id: 3, label: "Realizacje", path: "/realizacje" },
  { id: 4, label: "Kontakt", path: "/kontakt" },
];
export const Navigation = () => {
  const [toogled, setToogled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleCloseNav = () => {
    setTimeout(() => setToogled(false), 500);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  const matches = windowWidth <= 1024;

  return (
    <>
      {!matches && (
        <nav>
          <ul className="flex items-center justify-center gap-16">
            {navItems.map(({ id, label, path }) => (
              <li key={id}>
                <a
                  className={cn(
                    location.pathname.slice(0, 3) === path.slice(0, 3) &&
                      "border-b-2 border-white",
                  )}
                  href={path}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {matches && toogled && (
        <motion.nav
          variants={navMotion}
          animate="visible"
          exit="hidden"
          initial="hidden"
          className="fixed  left-1/2 top-40 z-10 flex -translate-x-1/2 flex-col items-center justify-center text-2xl"
        >
          <ul className="space-y-8 text-center">
            {navItems.map(({ id, label, path }) => (
              <motion.li key={id} variants={itemMotion}>
                <a
                  href={path}
                  className={cn(
                    location.pathname.slice(0, 3) === path.slice(0, 3) &&
                      "border-b-2 border-white",
                  )}
                >
                  {label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
      {matches && (
        <div
          onClick={() => setToogled((prev) => !prev)}
          className="relative w-8 cursor-pointer space-y-1.5"
        >
          <motion.span
            animate={{ rotateZ: toogled ? -45 : 0, y: toogled ? 8 : 0 }}
            className="block h-0.5 w-full rounded-full bg-white"
          />
          <motion.span
            animate={{ width: toogled ? "0px" : "100%" }}
            className="block h-0.5 w-full rounded-full bg-white"
          />
          <motion.span
            animate={{
              rotateZ: toogled ? 45 : 0,
              y: toogled ? -8 : 0,
            }}
            className="block h-0.5 w-full rounded-full bg-white"
          />
        </div>
      )}
      {toogled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseNav}
          className="fixed left-0 top-0 -z-10 h-screen w-screen bg-black"
        />
      )}
    </>
  );
};
