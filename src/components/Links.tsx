import React from "react";
import { FC, HTMLAttributes } from "react";

const Links: FC<propTypes> = () => {
  return (
    <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
      <a href="https://github.com/Ekzisss/kolyasnica">Github</a>{" "}
      <span> | </span>
      <a href="https://www.twitch.tv/f1ashko">Twitch</a>
    </div>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default Links;
