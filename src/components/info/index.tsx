import React, { useEffect, useState } from "react";
import { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import icon from "@/assets/icon.png";
import { motion } from "framer-motion";
import Rules from "../rules/Rules";
import Loading from "../Loading";
import axios from "axios";

const Info: FC<propTypes> = ({ data }) => {
  const [streamerData, setStreamerData] = useState<any>([]);

  useEffect(() => {
    async function getStreamer() {
      const res = await axios.get("/api/getLive");
      setStreamerData(res.data);
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
          {streamerData?.length !== 0 ? (
            <div className={style.live__bottom}>
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
              <p>|</p>
              <p className={style.live__game}>{streamerData[0].game_name}</p>
              <p>|</p>
              <div className={style.live__viewers}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <p>{streamerData[0].viewer_count}</p>
              </div>
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
