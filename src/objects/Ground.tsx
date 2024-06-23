import * as THREE from "three";
import { useTexture } from "@react-three/drei";

import img from "@/assets/tes.jpg";

export const Ground = () => {
  const texture = useTexture(img.src);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={texture} map-repeat={[10, 10]} />
    </mesh>
  );
};
