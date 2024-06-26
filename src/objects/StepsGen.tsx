import React from "react";
import { FC, HTMLAttributes } from "react";
import { Steps } from "./Steps";
import { useGLTF } from "@react-three/drei";
import { stepProgression, calculatePosition } from "@/utils";

const StepsGen = (props: any) => {
  const { nodes, materials } = useGLTF("/steps.glb");
  console.log("rerender steps");

  return (
    <>
      {[...Array(50)].map((_, index) => (
        <Steps
          nodes={nodes}
          materials={materials}
          stepProg={stepProgression(index, props.currentStep)}
          key={index}
          num={index}
          {...props}
        />
      ))}
    </>
  );
};

useGLTF.preload("/steps.glb");

export default StepsGen;
