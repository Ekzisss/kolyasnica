import React from "react";
import { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";

const Loading: FC<propTypes> = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.svg
        style={{ width: "30px", fill: "#ebede7" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0,
          duration: 1,
          ease: "linear",
        }}
      >
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </motion.svg>
    </div>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default Loading;
