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
import { Steps } from "@/objects/Steps";
import { Vector3 } from "three";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { Controller } from "@/objects/Controller";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Rules from "@/components/rules/Rules";
import TopBar from "@/components/TopBar";
import { Car } from "@/objects/Car";
import { Person } from "@/objects/Person";
import { stepProgression, calculatePosition } from "@/utils";
import Links from "@/components/Links";
import axios from "axios";

const currentStep: number = Number(process.env.NEXT_PUBLIC_CURRENT_STEP);
const vec = new Vector3(0, currentStep * 0.5 + 1.3, 0);

export default function Home() {
  const [grabbing, setGrabbing] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [locked, setLocked] = useState(null);
  const [data, setData] = useState([]);

  const controller = useRef<OrbitControlsImpl>(null);

  function ChangeHeight(e: MouseEvent) {
    if (!grabbing) return;
    if (vec.y + e.movementY * 0.05 < 1) vec.set(vec.x, 1, vec.z);
    if (vec.y + e.movementY * 0.05 > 28) vec.set(vec.x, 28, vec.z);

    vec.set(vec.x, vec.y + e.movementY * 0.05, vec.z);
  }

  useEffect(() => {
    async function getData() {
      const data = await axios({
        method: "GET",
        url: "https://api.baserow.io/api/database/rows/table/315007/?user_field_names=true",
        headers: {
          Authorization: `Token ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      });
      setData(data.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    if (locked) return;
    const msg = document.getElementById("123");
    if (msg) {
      msg.style.display = "none";
    }
  }, [locked]);

  return (
    <>
      <TopBar showRules={showRules} setShowRules={setShowRules} />
      <main className={styles.main}>
        <Canvas
          onPointerMove={ChangeHeight}
          camera={{ position: [0, 0, 8] }}
          className={styles.canvas}
          onPointerMissed={() => setLocked(null)}
        >
          <ambientLight intensity={1.5} />
          <Controller controller={controller} active={grabbing} vec={vec} />
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
          <Cylinder
            onPointerMove={(e) => e.stopPropagation()}
            position={[0, 12.5, 0]}
            args={[1, 1, 25]}
          >
            <meshStandardMaterial color="gray" />
          </Cylinder>
          {[...Array(50)].map((_, index) => (
            <Steps
              setLocked={setLocked}
              locked={locked}
              data={data}
              stepProg={stepProgression(index, currentStep)}
              key={index}
              num={index}
            />
          ))}
          <Ground />
          <Car />
          <Person
            rotation={[0, (Math.PI / 6) * (currentStep % 12), 0]}
            position={calculatePosition(currentStep)}
          />
        </Canvas>

        <div
          style={{
            display: "none",
            border: `${locked ? "1px solid #b27122" : ""}`,
          }}
          id="123"
          className={styles.popup}
        ></div>
        <Rules showRules={showRules} />

        <Links />
      </main>
    </>
  );
}
