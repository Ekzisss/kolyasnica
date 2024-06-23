import React from "react";
import { FC, HTMLAttributes } from "react";
import style from "./TopBar.module.scss";
import Container from "./container";
import Link from "next/link";

const TopBar: FC<propTypes> = () => {
  return (
    <div className={style.main}>
      <Container>
        <nav className={style.nav}>
          <Link href="/info">Инфа</Link>
          <h1>
            <Link href=".">Колёсница</Link>
          </h1>
          <Link href="/redact">Редактировать</Link>
        </nav>
      </Container>
    </div>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default TopBar;
