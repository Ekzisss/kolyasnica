import React from "react";
import { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";
import data from "@/data.json";

const Rules: FC<propTypes> = () => {
  return (
    <div className={style.main}>
      <h2>Правила</h2>
      <ol>
        {data.rules.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default Rules;
