// @ts-nocheck
import React, { useState } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import data from "@/data.json";

const colors = [
  ["#2a7a29", "#359733"],
  ["#b27122", "#c67e27"],
  ["#505050", "#636363"],
];

export function Steps({ num, stepProg }: { num: number; stepProg: number }) {
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

  function clickHandler(e: any) {
    e.stopPropagation();
    console.log(num);
  }

  function mouseEnterHandler(e: any) {
    e.stopPropagation();
    setActive(true);
    if (msg) {
      msg.innerHTML = `<h1>Ступень №${num}</h1> <h2 style="color: ${
        colors[stepProg][0]
      }">${
        stepProg == 0
          ? "Пройдено"
          : stepProg === 1
          ? "Проходится"
          : "Не пройдено"
      }</h2> <p>${data.data[num]}</p>`;
      msg.style.display = "block";
    }
  }

  function mouseLaveHandler(e: any) {
    setActive(false);
    if (msg) {
      msg.style.display = "none";
    }
  }

  function mouseMoveHandler(e: any) {
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
