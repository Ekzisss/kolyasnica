import React, { useEffect, useState } from "react";
import { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import icon from "@/assets/icon.png";
import { motion } from "framer-motion";
import Rules from "../rules/Rules";
import Loading from "../Loading";

const Info: FC<propTypes> = ({ data }) => {
  const [live, setLive] = useState(false);

  console.log(data);

  useEffect(() => {
    async function getStreamer() {
      let a = await fetch(`https://www.twitch.tv/f1ashko`);
      setLive((await a.text()).includes("isLiveBroadcast"));
    }
    try {
      getStreamer();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={style.main}>
      <div className={style.live}>
        <a href="https://www.twitch.tv/f1ashko">
          <Image width={70} height={70} alt="icon" src={icon}></Image>
        </a>
        <div className={style.live__info}>
          <a href="https://www.twitch.tv/f1ashko">F1ashko</a>
          {live ? (
            <div className={style.live__detection}>
              <div className={style.live__circle}>
                <motion.div
                  animate={{ scale: 1, opacity: 0 }}
                  initial={{ scale: 0, opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    duration: 2,
                  }}
                ></motion.div>
                <motion.div
                  animate={{ scale: 1, opacity: 0 }}
                  initial={{ scale: 0, opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    duration: 2,
                    delay: 0.66,
                  }}
                ></motion.div>
                <motion.div
                  animate={{ scale: 1, opacity: 0 }}
                  initial={{ scale: 0, opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    duration: 2,
                    delay: 1.33,
                  }}
                ></motion.div>
              </div>
              <p>В эфире</p>
            </div>
          ) : (
            <div className={style.live__detection}>
              <div
                className={`${style.live__circle} ${style.live__circle_offline}`}
              ></div>
              <p>Оффлайн</p>
            </div>
          )}
        </div>
      </div>
      <div className={style.card}>
        <h3>Текущая игра</h3>
        <p>baldur&apos;s gate 3</p>
      </div>
      <div className={style.card}>
        <h3>Последний просмотренный фильм</h3>
        {!data.length ? (
          <Loading />
        ) : (
          <p>
            {
              data.findLast((item: any) => item.Result?.value === "Просмотрено")
                .Winner
            }
          </p>
        )}
      </div>
      <Rules />
    </div>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  data: any;
}

export default Info;
