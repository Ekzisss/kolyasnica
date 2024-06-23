import React from "react";
import { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";

const Container: FC<propTypes> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default Container;
