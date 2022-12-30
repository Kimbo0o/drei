import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect } from "react";

const BikeFrontWheel = () => {
  const model = useGLTF("/bikeFrontWheel.glb");

  useLayoutEffect(() => {
    model.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  useFrame(({ clock }) => {
    if (model?.scene?.children?.length) {
      model.scene.children[0].rotation.z = clock.getElapsedTime() * -0.5;
    }
  });

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default BikeFrontWheel;
