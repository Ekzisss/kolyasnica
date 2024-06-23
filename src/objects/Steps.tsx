// @ts-nocheck
import React, { useState } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import jsonData from "@/data.json";

const colors = [
  ["#2a7a29", "#359733"],
  ["#b27122", "#c67e27"],
  ["#505050", "#636363"],
];

function nameToNumber(name: string) {
  switch (name) {
    case "Пройдено":
      break;
    case "Пройдено":
      break;
  }
}

export function Steps({
  num,
  stepProg,
  setLocked,
  locked,
  data,
}: {
  num: number;
  stepProg: number;
  setLocked: Function;
  locked: number | null;
  data: any;
}) {
  const { nodes, materials } = useGLTF("/untitled.glb");
  const [active, setActive] = useState(false);

  const arr = [
    nodes.Circle1,
    nodes.Circle2,
    nodes.Circle3,
    nodes.Circle4,
    nodes.Circle5,
    nodes.Circle6,
    nodes.Circle7,
    nodes.Circle8,
    nodes.Circle9,
    nodes.Circle10,
    nodes.Circle11,
    nodes.Circle12,
  ];

  const newData = data.filter((item) => item.Step == num + 1);

  function updateMsg(e: any) {
    if (msg) {
      msg.innerHTML = `<h1>Ступень №${num + 1}</h1> <h2 style="color: ${
        colors[stepProg][0]
      }">${
        stepProg == 0
          ? "Пройдено"
          : stepProg === 1
          ? "Проходится"
          : "Не пройдено"
      }</h2> 
      <p style="padding-bottom: 10px">${jsonData.data[num]}</p>
      ${newData.map(
        (item) =>
          `<p> ${item.Winner} - <span style="color: ${
            item.Result?.value === "Пройдено" ? "#2a7a29" : "#bd2f2f"
          }">${item.Result?.value}</span> </p>`
      )}
      `;

      msg.style.display = "block";

      msg.style.top = `${e.clientY - 110 - 65}px`;
      msg.style.left = `${e.clientX + 10}px`;
    }
  }

  function clickHandler(e: any) {
    e.stopPropagation();
    if (locked) {
      updateMsg(e);
    }
    setLocked(num);
  }

  function mouseEnterHandler(e: any) {
    e.stopPropagation();
    setActive(true);
    if (locked) return;
    updateMsg(e);
  }

  function mouseLaveHandler(e: any) {
    setActive(false);
    if (locked) return;
    if (msg) {
      msg.style.display = "none";
    }
  }

  function mouseMoveHandler(e: any) {
    if (locked) return;
    if (msg) {
      msg.style.top = `${e.clientY - 110 - 65}px`;
      msg.style.left = `${e.clientX + 10}px`;
    }
  }

  const msg = document.getElementById("123");

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={arr[num % 12].geometry}
        position={[0, num * 0.5, 0]}
        scale={[2.6, 2, 2.6]}
        onClick={clickHandler}
        onPointerOver={mouseEnterHandler}
        onPointerMove={mouseMoveHandler}
        onPointerOut={mouseLaveHandler}
      >
        <meshStandardMaterial
          color={active ? colors[stepProg][0] : colors[stepProg][1]}
        />
        <Edges
          linewidth={1}
          scale={1.01}
          threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
          color="black"
        />
      </mesh>
    </>
  );
}

useGLTF.preload("/untitled.glb");
