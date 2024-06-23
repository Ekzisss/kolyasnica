"use client";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import {
  Sky,
  Cylinder,
  OrbitControls,
  PerspectiveCamera,
  CycleRaycast,
} from "@react-three/drei";
import { Ground } from "@/objects/Ground";
import { Steps } from "@/objects/steps/Steps";
import { Vector3 } from "three";
import { MouseEvent, useRef, useState } from "react";
import { Controller } from "@/objects/Controller";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const vec = new Vector3(0, 5, 0);

function stepProgression(num: number, current: number) {
  if (num < current) return 0;
  else if (num === current) return 1;
  else return 2;
}

export default function Home() {
  const [grabbing, setGrabbing] = useState(false);
  const currentStep = 40;

  const controller = useRef<OrbitControlsImpl>(null);

  function ChangeHeight(e: MouseEvent) {
    if (!grabbing) return;
    if (vec.y + e.movementY * 0.05 < 1) vec.set(vec.x, 1, vec.z);
    if (vec.y + e.movementY * 0.05 > 28) vec.set(vec.x, 28, vec.z);

    vec.set(vec.x, vec.y + e.movementY * 0.05, vec.z);
  }

  return (
    <main className={styles.main}>
      <Canvas
        onPointerMove={ChangeHeight}
        camera={{ position: [0, 0, 8] }}
        className={styles.canvas}
      >
        {/* <Sky sunPosition={[100, 20, 100]}></Sky> */}
        {/* <PerspectiveCamera ref={cam} makeDefault /> */}
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
        {/* <CycleRaycast onChanged={(objects, cycle) => set({ objects, cycle })} /> */}
      </Canvas>
      <div
        // style={{ display: grabbing ? "none" : "block" }}
        id="123"
        className={styles.popup}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          quasi modi aut placeat hic voluptatum rerum praesentium, ab et,
        </p>
      </div>
    </main>
  );
}
