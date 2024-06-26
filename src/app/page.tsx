"use client";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Ground } from "@/objects/Ground";
import { useEffect, useState } from "react";
import { Controller } from "@/objects/Controller";
import TopBar from "@/components/TopBar";
import { Car } from "@/objects/Car";
import { Person } from "@/objects/Person";
import { calculatePosition } from "@/utils";
import Links from "@/components/Links";
import axios from "axios";
import Table from "@/components/table";
import Info from "@/components/info";
import { Pillar } from "@/objects/Pillar";
import StepsGen from "@/objects/StepsGen";

const currentStep: number = Number(process.env.NEXT_PUBLIC_CURRENT_STEP);

export default function Home() {
  const [showRules, setShowRules] = useState(false);
  const [locked, setLocked] = useState<boolean | null>(null);
  const [data, setData] = useState([]);
  // const [hoveredStep, setHoveredStep] = useState(null);

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
        <Table data={data} />
        <div className={styles.canvas}>
          <Canvas
            camera={{ position: [0, 0, 8] }}
            onPointerMissed={() => setLocked(null)}
            // frameloop="demand"
          >
            <ambientLight intensity={1.5} />
            <Controller />
            <Pillar></Pillar>
            <StepsGen
              setLocked={setLocked}
              locked={locked}
              data={data}
              currentStep={currentStep}
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
