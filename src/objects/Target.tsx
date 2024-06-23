import { Box } from "@react-three/drei";

export const Target = ({ ref }: { ref: any }) => {
  return (
    <Box ref={ref} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
};
