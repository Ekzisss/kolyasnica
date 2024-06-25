import { useTexture, useGLTF, Cylinder } from "@react-three/drei";
import * as THREE from "three";

import color from "@/assets/brick/Bricks076A_1K-JPG_Color.jpg";
import ambientOcclusion from "@/assets/brick/Bricks076A_1K-JPG_AmbientOcclusion.jpg";
import displacement from "@/assets/brick/Bricks076A_1K-JPG_Displacement.jpg";
import normal from "@/assets/brick/Bricks076A_1K-JPG_NormalDX.jpg";
import roughness from "@/assets/brick/Bricks076A_1K-JPG_Roughness.jpg";

export function Pillar() {
  const texture = useTexture({
    map: color.src,
    roughnessMap: roughness.src,
    normalMap: normal.src,
    displacementMap: displacement.src,
    aoMap: ambientOcclusion.src,
  });
  texture.map.wrapS = texture.map.wrapT = THREE.RepeatWrapping;
  texture.roughnessMap.wrapS = texture.roughnessMap.wrapT =
    THREE.RepeatWrapping;
  texture.normalMap.wrapS = texture.normalMap.wrapT = THREE.RepeatWrapping;
  texture.displacementMap.wrapS = texture.displacementMap.wrapT =
    THREE.RepeatWrapping;
  texture.aoMap.wrapS = texture.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <Cylinder
      onPointerMove={(e) => e.stopPropagation()}
      position={[0, 12.5, 0]}
      args={[1, 1, 25]}
    >
      <meshStandardMaterial
        {...texture}
        map-repeat={[2, 10]}
        roughnessMap-repeat={[2, 10]}
        normalMap-repeat={[2, 10]}
        displacementMap-repeat={[2, 10]}
        aoMap-repeat={[2, 10]}
      />
    </Cylinder>
  );
}

useGLTF.preload("/greek_pillar.glb");
