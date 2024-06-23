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

const vec = new Vector3(0, 0, 0);

export default function Home() {
  const [grabbing, setGrabbing] = useState(false);
  // const [{ objects, cycle }, set] = useState({ objects: [], cycle: 0 });
  const currentStep = 64;

  const controller = useRef();

  // console.log(objects);
  // if (objects.length) {
  //   objects[0].object.material.color.b = 1;
  //   console.log(objects[0].object.material.color.b);
  // }

  function ChangeHeight(e: MouseEvent) {
    if (!grabbing) return;
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
          maxDistance={20}
          onStart={() => setGrabbing(true)}
          onEnd={() => setGrabbing(false)}
          enablePan={false}
        />
        <Cylinder position={[0, 25, 0]} args={[1, 1, 50]}>
          <meshStandardMaterial color="gray" />
        </Cylinder>
        {[...Array(100)].map((_, index) => (
          <Steps currentStep={currentStep} key={index} num={index} />
        ))}
        <Ground />
        <Controller controller={controller} active={grabbing} vec={vec} />
        {/* <CycleRaycast onChanged={(objects, cycle) => set({ objects, cycle })} /> */}
      </Canvas>
    </main>
  );
}
