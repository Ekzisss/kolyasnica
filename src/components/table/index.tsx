import React, { useEffect } from "react";
import { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";
import Loading from "../Loading";
import jsonData from "@/data.json";
import { animateScroll as scroll } from "react-scroll";

const Table: FC<propTypes> = ({ data, hoveredStep }) => {
  const newData = [...Array(50)].map((_, index) =>
    data.filter((item: any) => item.Step == index + 1)
  );

  useEffect(() => {
    if (!hoveredStep) return;
    const windowHeight = window.innerHeight;
    const elem = document.getElementById(`${hoveredStep}_row`);

    elem?.offsetTop &&
      scroll.scrollTo(elem?.offsetTop - windowHeight / 2, {
        smooth: true,
        containerId: "main",
        duration: 200,
      });
  }, [hoveredStep]);

  return (
    <div id="main" className={style.main}>
      {newData[0].length ? (
        <div className={style.table}>
          <div className={`${style.row} ${style.row_top}`}>
            <p>Ступень</p>
            <p>Победитель аука</p>
            <p>Итог</p>
            <p>Комментарий</p>
          </div>

          {newData.map((item, index) => (
            <div
              key={`${index}_row`}
              id={`${index}_row`}
              className={`${style.row} ${
                hoveredStep == item[0].Step ? style.row_glow : ""
              }`}
            >
              <p>
                {item[0].Step}. {jsonData.data[item[0].Step - 1]}
              </p>
              <div className={style.double}>
                {item.map((item: any, index: any) => (
                  <div key={index} className={style.row}>
                    <p>{item.Winner}</p>
                    <p
                      style={{
                        color: `${
                          item.Result?.value === "Дропнуто"
                            ? "#bd2f2f"
                            : "#2a7a29"
                        }`,
                      }}
                    >
                      {item.Result?.value}
                    </p>
                    <p>{item.Description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  data: any;
  hoveredStep: any;
}

export default Table;
