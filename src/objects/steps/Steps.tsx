// @ts-nocheck
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Steps({
  num,
  currentStep,
}: {
  num: number;
  currentStep: number;
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

  function clickHandler(e: any) {
    e.stopPropagation();
    console.log(num);
  }

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={arr[num % 12].geometry}
      position={[0, num * 0.5, 0]}
      scale={[2.6, 2, 2.6]}
      onClick={clickHandler}
      onPointerOver={(e) => (e.stopPropagation(), setActive(true))}
      onPointerOut={() => setActive(false)}
    >
      <meshStandardMaterial color={active ? "pink" : "hotpink"} />
    </mesh>
  );
}

useGLTF.preload("/untitled.glb");
