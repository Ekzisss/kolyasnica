import * as THREE from "three";
import { Box, useTexture } from "@react-three/drei";

import texturePng from "@/assets/lava/lava_06_emissive-1K.png";

export const Step = ({ num }: { num: Number }) => {
  // const texture = useTexture(texturePng.src);

  return (
    <Box args={[2, 0.8, 0.5]} position={[2, num * 0.4, num * 0.4]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
};
