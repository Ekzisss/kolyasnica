import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export const Controller = ({
  active,
  vec,
  controller,
}: {
  active: boolean;
  vec: any;
  controller: any;
}) => {
  useFrame((state) => {
    if (!active) return;

    controller.current.target = vec;
  });

  return <></>;
};
