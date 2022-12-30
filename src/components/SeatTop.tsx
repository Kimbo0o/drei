import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect } from "react";

const SeatTop = () => {
  const model = useGLTF("/seatTop.glb");

  useLayoutEffect(() => {
    model.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  useFrame(({ clock }) => {
    if (model?.scene?.children.length) {
      model.scene.children[0].rotation.y =
        Math.sin(clock.getElapsedTime()) * 0.3 + 0.1;
    }
  });

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default SeatTop;
