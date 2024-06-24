import React from "react";
import { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";
import Loading from "../Loading";
import jsonData from "@/data.json";

const Table: FC<propTypes> = ({ data }) => {
  const newData = [...Array(50)].map((_, index) =>
    data.filter((item: any) => item.Step == index + 1)
  );

  return (
    <div className={style.main}>
      {newData[0].length ? (
        <div className={style.table}>
          <div className={style.row}>
            <p>Ступень</p>
            <p>Победитель аука</p>
            <p>Итог</p>
            <p>Комментарий</p>
          </div>

          {newData.map((item, index) => (
            <div key={index} className={style.row}>
              <p>
                {item[0].Step}. {jsonData.data[item[0].Step]}
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
}

export default Table;
