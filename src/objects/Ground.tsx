import * as THREE from "three";
import { useTexture } from "@react-three/drei";

import ambient from "@/assets/lava/lava_06_ambientocclusion-1K.png";
import basecolor from "@/assets/lava/lava_06_basecolor-1K.png";
import emissive from "@/assets/lava/lava_06_emissive-1K.png";
import height from "@/assets/lava/lava_06_height-1K.png";
import metallic from "@/assets/lava/lava_06_metallic-1K.png";
import normal from "@/assets/lava/lava_06_normal-1K.png";
import roughness from "@/assets/lava/lava_06_roughness-1K.png";

export const Ground = () => {
  const texture = useTexture(basecolor.src);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial map={texture} map-repeat={[10, 10]} />
    </mesh>
  );
};
