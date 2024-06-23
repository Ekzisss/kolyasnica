import React from "react";
import { FC, HTMLAttributes } from "react";
import style from "./style.module.css";
import data from "@/data.json";
import { motion, AnimatePresence } from "framer-motion";

const Rules: FC<propTypes> = ({ showRules }) => {
  return (
    <AnimatePresence>
      {showRules && (
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          className={style.main}
        >
          <h2>Правила</h2>
          <ol>
            {data.rules.map((item, index) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  showRules: boolean;
}

export default Rules;
