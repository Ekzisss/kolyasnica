"use client";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import {
  Sky,
  Cylinder,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Ground } from "@/objects/Ground";
import { Steps } from "@/objects/steps/Steps";
import { Vector3 } from "three";
import { MouseEvent, useRef, useState } from "react";
import { Controller } from "@/objects/Controller";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Rules from "@/components/rules/Rules";
import TopBar from "@/components/TopBar";
import { Car } from "@/objects/Car";
import { Person } from "@/objects/Person";

const vec = new Vector3(0, 5, 0);

function stepProgression(num: number, current: number) {
  if (num < current) return 0;
  else if (num === current) return 1;
  else return 2;
}

function calculatePosition(currentStep: number) {
  let x;
  const y = currentStep * 0.5 + 1.3;
  let z;
  switch (currentStep % 12) {
    case 0:
      x = -1.7;
      z = -0.5;
      break;
    case 1:
      x = -1.5;
      z = 0.5;
      break;
    case 2:
      x = -1.2;
      z = 1.5;
      break;
    case 3:
      x = -0.3;
      z = 1.7;
      break;
    case 4:
      x = 0.5;
      z = 1.8;
      break;
    case 5:
      x = 1.3;
      z = 1.1;
      break;
    case 6:
      x = 1.7;
      z = 0.4;
      break;
    case 7:
      x = 1.8;
      z = -0.5;
      break;
    case 8:
      x = 1.0;
      z = -1.2;
      break;
    case 9:
      x = 0.5;
      z = -1.8;
      break;
    case 10:
      x = -0.6;
      z = -1.8;
      break;
    case 11:
      x = -1.2;
      z = -1.2;
      break;
  }
  return [x, y, z];
}

export default function Home() {
  const [grabbing, setGrabbing] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const currentStep = 40;

  console.log(showRules);

  const controller = useRef<OrbitControlsImpl>(null);

  function ChangeHeight(e: MouseEvent) {
    if (!grabbing) return;
    if (vec.y + e.movementY * 0.05 < 1) vec.set(vec.x, 1, vec.z);
    if (vec.y + e.movementY * 0.05 > 28) vec.set(vec.x, 28, vec.z);

    vec.set(vec.x, vec.y + e.movementY * 0.05, vec.z);
  }

  return (
    <>
      <TopBar showRules={showRules} setShowRules={setShowRules} />
      <main className={styles.main}>
        <Canvas
          onPointerMove={ChangeHeight}
          camera={{ position: [0, 0, 8] }}
          className={styles.canvas}
        >
          <ambientLight intensity={1.5} />
          <OrbitControls
            ref={controller}
            dampingFactor={0.05}
            target={vec}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minDistance={4}
            maxDistance={10}
            onStart={() => setGrabbing(true)}
            onEnd={() => setGrabbing(false)}
            enablePan={false}
          />
          <Cylinder position={[0, 12.5, 0]} args={[1, 1, 25]}>
            <meshStandardMaterial color="gray" />
          </Cylinder>
          {[...Array(50)].map((_, index) => (
            <Steps
              stepProg={stepProgression(index, currentStep)}
              key={index}
              num={index}
            />
          ))}
          <Ground />
          <Controller controller={controller} active={grabbing} vec={vec} />
          <Car />
          <Person
            rotation={[0, (Math.PI / 6) * (currentStep % 12), 0]}
            position={calculatePosition(currentStep)}
            // position={[0, 4, 2]}
          />
        </Canvas>
        <div
          style={{ display: "none" }}
          id="123"
          className={styles.popup}
        ></div>
        <Rules showRules={showRules} />
      </main>
    </>
  );
}
