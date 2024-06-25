// @ts-nocheck
import React, { useState } from "react";
import {
  useGLTF,
  Edges,
  Decal,
  Text,
  RenderTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import jsonData from "@/data.json";
import { calculatePosition2 } from "@/utils";

const colors = [
  ["#49e946", "#3cb83a"],
  ["#e08f2b", "#b27122"],
  ["#ffffff", "#d4d4d4"],
];

export function Steps({
  num,
  stepProg,
  setLocked,
  locked,
  data,
  setHoveredStep,
}: {
  num: number;
  stepProg: number;
  setLocked: Function;
  locked: number | null;
  data: any;
  setHoveredStep: Function;
}) {
  const { nodes, materials } = useGLTF("/steps.glb");
  const [active, setActive] = useState(false);

  // materials["Material.002"].color = "red";

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
            item.Result?.value === "Дропнуто" ? "#bd2f2f" : "#2a7a29"
          }">${item.Result ? item.Result.value : ""}</span> </p>`
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
    setHoveredStep(num + 1);
    if (locked) return;
    updateMsg(e);
  }

  function mouseLaveHandler(e: any) {
    setActive(false);
    setHoveredStep(null);
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
        geometry={arr[num % 12].geometry}
        position={[0, num * 0.5, 0]}
        scale={[2.6, 2, 2.6]}
        onClick={clickHandler}
        onPointerOver={mouseEnterHandler}
        onPointerMove={mouseMoveHandler}
        onPointerOut={mouseLaveHandler}
        material={materials["Material.002"]}
      >
        {true ? (
          <Decal
            position={calculatePosition2(num)}
            rotation={[0, Math.PI * (((num + 9) % 12) / 6) - 0.2, 0]}
            scale={[0.2, 0.2, 0.4]}
          >
            <meshStandardMaterial
              roughness={1}
              transparent
              polygonOffset
              polygonOffsetFactor={-1}
            >
              <RenderTexture attach="map">
                <PerspectiveCamera
                  makeDefault
                  manual
                  aspect={0.9 / 0.25}
                  position={[0, 0, 5]}
                />
                <Text
                  scale={[2.5, 1, 1]}
                  rotation={[0, 0, 0]}
                  fontSize={4}
                  color={active ? colors[stepProg][0] : colors[stepProg][1]}
                >
                  {num + 1}
                </Text>
              </RenderTexture>
            </meshStandardMaterial>
          </Decal>
        ) : (
          ""
        )}
        <Edges linewidth={1} scale={1.001} threshold={15} color="#2a2a2a" />
      </mesh>
    </>
  );
}

useGLTF.preload("/steps.glb");
