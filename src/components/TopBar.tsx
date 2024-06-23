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
          <h1>Колёсница</h1>
          <div className={style.space}>
            <button disabled className={style.btn}>
              Редактировать
            </button>
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
