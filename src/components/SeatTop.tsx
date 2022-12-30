import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SeatTop = () => {
  const model = useGLTF("/seatTop.glb");

  useFrame(({ clock }) => {
    if (model?.scene?.children.length) {
      model.scene.children[0].rotation.y =
        Math.sin(clock.getElapsedTime()) * 0.5 + 0.1;
      // model.scene.children[0].position.x = 1;
      // model.scene.children[0].position.y = 0;
      // model.scene.children[0].position.z = 0;
    }
  });

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default SeatTop;
