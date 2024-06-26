"use client";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { Ground } from "@/objects/Ground";
import { Vector3 } from "three";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { Controller } from "@/objects/Controller";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import TopBar from "@/components/TopBar";
import { Car } from "@/objects/Car";
import { Person } from "@/objects/Person";
import { stepProgression, calculatePosition } from "@/utils";
import Links from "@/components/Links";
import axios from "axios";
import Table from "@/components/table";
import Info from "@/components/info";
import { Pillar } from "@/objects/Pillar";
import StepsGen from "@/objects/StepsGen";

const currentStep: number = Number(process.env.NEXT_PUBLIC_CURRENT_STEP);
const vec = new Vector3(0, currentStep * 0.5 + 1.3, 0);

export default function Home() {
  const [grabbing, setGrabbing] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [locked, setLocked] = useState<boolean | null>(null);
  const [data, setData] = useState([]);
  const [hoveredStep, setHoveredStep] = useState(null);

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
        url: `/api`,
      });
      setData(data.data);
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
        <Table hoveredStep={hoveredStep} data={data} />
        <div className={styles.canvas}>
          <Canvas
            onPointerMove={ChangeHeight}
            camera={{ position: [0, 0, 8] }}
            onPointerMissed={() => setLocked(null)}
            frameloop="demand"
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
            <Pillar></Pillar>
            <StepsGen
              setLocked={setLocked}
              locked={locked}
              data={data}
              currentStep={currentStep}
              setHoveredStep={setHoveredStep}
            ></StepsGen>
            <Ground />
            <Car />
            <Person
              rotation={[0, (Math.PI / 6) * (currentStep % 12), 0]}
              position={calculatePosition(currentStep)}
            />
          </Canvas>
          <Loader />
        </div>
        <Info data={data} />

        <div
          style={{
            display: "none",
            border: `${locked ? "1px solid #b27122" : ""}`,
          }}
          id="123"
          className={styles.popup}
        ></div>
        <Links />
      </main>
    </>
  );
}
