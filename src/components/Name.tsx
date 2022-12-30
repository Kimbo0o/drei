import { Text3D, Float } from "@react-three/drei";

const Name = () => {
  return (
    <Float rotationIntensity={0.1} floatIntensity={0.5}>
      <Text3D
        curveSegments={32}
        bevelEnabled
        height={0.02}
        lineHeight={0.6}
        size={0.18}
        font="/Inter_Bold.json"
        position={[-1.37, 2.4, 1]}
        rotation={[0, Math.PI / 2, 0]}
        castShadow
      >
        {`Kim\nDaniel`}
        <meshNormalMaterial />
      </Text3D>
    </Float>
  );
};

export default Name;
