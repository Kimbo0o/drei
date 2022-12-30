import { useGLTF } from "@react-three/drei";
import { useLayoutEffect } from "react";

const VrGlasses = () => {
  const model = useGLTF("/vrGlasses.glb");

  useLayoutEffect(() => {
    model.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default VrGlasses;
