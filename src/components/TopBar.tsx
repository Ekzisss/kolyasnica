import React from "react";
import { FC, HTMLAttributes } from "react";
import style from "./TopBar.module.scss";
import Container from "./container";

const TopBar: FC<propTypes> = ({ setShowRules, showRules }) => {
  return (
    <div className={style.main}>
      <Container>
        <nav className={style.nav}>
          <div className={style.space}>
            <button
              onClick={() => setShowRules(!showRules)}
              className={style.btn}
            >
              Правила
            </button>
          </div>
          <h1>
            Кол <span></span> сница
          </h1>
          <div className={style.space}>
            <a
              href="https://docs.google.com/spreadsheets/d/1XEjHHHd-EGni-rGN_hW1fCuNjn0CcR2BnR9GrBb4diU/edit?gid=442513571#gid=442513571"
              className={style.btn}
            >
              Лог событий
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  setShowRules: Function;
  showRules: boolean;
}

export default TopBar;
