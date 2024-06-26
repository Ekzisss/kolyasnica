import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useRef } from "react";
import { Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const currentStep: number = Number(process.env.NEXT_PUBLIC_CURRENT_STEP);
const vec = new Vector3(0, currentStep * 0.5 + 1.3, 0);

function ChangeHeight(y: number) {
  if (vec.y - y * 7 < 1) vec.set(vec.x, 1, vec.z);
  if (vec.y - y * 7 > 28) vec.set(vec.x, 28, vec.z);

  // vec.set(vec.x, vec.y - y * 7, vec.z);
  vec.lerp(new Vector3(vec.x, vec.y - y * 7, vec.z), 1);
}

function ChangeHeight2(y: number, originVec: number) {
  if (originVec + y * 5 < 1) vec.set(vec.x, 1, vec.z);
  else if (originVec + y * 5 > 28) vec.set(vec.x, 28, vec.z);
  else {
    vec.set(vec.x, originVec + y * 5, vec.z);
  }

  // vec.set(vec.x, vec.y - y * 5, vec.z);
  // vec.lerp(new Vector3(vec.x, vec.y - y * 5, vec.z), 1);
  // console.log(originVec + y * 5);
  // vec.set(vec.x, originVec + y * 5, vec.z);
}

// let mouseY: number | null = null;
let secondFrame: boolean = false;

let originY: number | null = null;
let originVec = vec.y;

export const Controller = () => {
  const [grabbing, setGrabbing] = useState(false);
  const controller = useRef<OrbitControlsImpl>(null);

  // useFrame(({ mouse }) => {
  //   if (!grabbing) mouseY = mouse.y;

  //   if (mouseY && secondFrame) {
  //     // console.log(
  //     //   `previus = ${mouseY} ; current = ${mouse.y} ; diff = ${
  //     //     mouse.y - mouseY
  //     //   }`
  //     // );
  //     ChangeHeight(mouse.y - mouseY);
  //     // vec.set(vec.x, vec.y - (mouse.y - mouseY) * 5, vec.z);
  //     // console.log(`vec = ${vec.y}`);
  //   }

  //   // console.log(`debug; prev = ${mouseY} ; cur = ${mouse.y}`);
  //   if (mouseY && !secondFrame) secondFrame = true;
  //   mouseY = mouse.y;
  //   if (controller.current) controller.current.target = vec;
  // });

  useFrame(({ mouse }) => {
    if (!grabbing) originY = mouse.y;
    if (!secondFrame) {
      secondFrame = true;
      originY = mouse.y;
      return;
    }
    if (!originY) return;
    // if (mouseY && secondFrame) {
    //   ChangeHeight(mouse.y - mouseY);
    // }

    // if (mouseY && !secondFrame) secondFrame = true;
    // mouseY = mouse.y;
    // const a = originY - mouse.y;
    // vec.set(vec.x, originVec + (originY - mouse.y) * 4, vec.z);
    ChangeHeight2(originY - mouse.y, originVec);
    if (controller.current) controller.current.target = vec;
  });

  return (
    <OrbitControls
      ref={controller}
      dampingFactor={0.05}
      target={vec}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      minDistance={4}
      maxDistance={10}
      onStart={() => {
        setGrabbing(true);
        originVec = vec.y;
      }}
      onEnd={() => {
        setGrabbing(false);
        secondFrame = false;
        originVec = vec.y;
      }}
      enablePan={false}
    />
  );
};
