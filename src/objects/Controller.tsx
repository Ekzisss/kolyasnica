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

    vec.set(vec.x, vec.y, vec.z);

    controller.current.target = vec;
  });

  return <></>;
};
