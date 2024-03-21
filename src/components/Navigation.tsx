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

  return (
    <>
      { toogled && (
           <nav>
        <motion.ul
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="absolute inset-0 top-16 flex h-screen w-screen flex-col items-center justify-center gap-16 bg-[gray] text-2xl"
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
        </motion.ul>
        </nav>
      )}
        <button
          onClick={() => setToogled((prev) => !prev)}
          className="relative h-8 w-8 space-y-1.5"
        >
          <motion.span
            animate={{ rotateZ: toogled ? -45 : 0, y: toogled ? 8 : 0 }}
            className="block h-0.5 w-full bg-white"
          />
          <motion.span
            animate={{ width: toogled ? "0px" : "100%" }}
            className="block h-0.5 w-full bg-white"
          />
          <motion.span
            animate={{
              rotateZ: toogled ? 45 : 0,
              y: toogled ? -8 : 0,
            }}
            className="block h-0.5 w-full bg-white"
          />
        </button>
    </>
  );
};
