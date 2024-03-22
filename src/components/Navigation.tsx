import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export const Navigation = () => {
  const [toogled, setToogled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth])
  const matches = windowWidth <= 1024;
  return (
    <>{
      !matches && (
        <nav>
        <ul
          className=" flex items-center justify-center gap-16"
        >
          <li>
            <a href="/usługi/">Usługi</a>
          </li>
          <li>
            <a href="#works">Realizacje</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
        </nav>
      )
    }
      {matches && toogled && (
          <motion.nav            
            variants={navMotion}  
            animate="visible"
            initial="hidden" className="fixed flex inset-0 h-screen w-screen flex-col items-center justify-center text-2xl bg-gradient-to-b from-[#404040] from-[64px] to-primary to-[64px] -z-10">
        <ul 
        className="space-y-8 text-center"
        >
          <motion.li variants={itemMotion}>
            <a href="/usługi/">Usługi</a>
          </motion.li>
          <motion.li variants={itemMotion}>
            <a href="#works">Realizacje</a>
          </motion.li>
          <motion.li variants={itemMotion}>
            <a href="#contact">Kontakt</a>
          </motion.li>
        </ul>
        </motion.nav>
      )}
      {matches && 
        <div
          onClick={() => setToogled((prev) => !prev)}
          className="relative w-8 space-y-1.5 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toogled ? -45 : 0, y: toogled ? 8 : 0 }}
            className="block h-0.5 w-full bg-white rounded-full"
          />
          <motion.span
            animate={{ width: toogled ? "0px" : "100%" }}
            className="block h-0.5 w-full bg-white rounded-full"
          />
          <motion.span
            animate={{
              rotateZ: toogled ? 45 : 0,
              y: toogled ? -8 : 0,
            }}
            className="block h-0.5 w-full bg-white rounded-full"
          />
        </div>
        }
    </>
  );
};
