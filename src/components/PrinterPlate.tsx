import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SeatTop = () => {
  const model = useGLTF("/printerPlate.glb");

  useFrame(({ clock }) => {
    if (model?.scene?.children.length) {
      model.scene.children[0].position.x =
        Math.sin(clock.getElapsedTime() * 3) * 0.05 - 0.95;
    }
  });

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default SeatTop;
