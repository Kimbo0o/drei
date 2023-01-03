import { useGLTF } from "@react-three/drei";
import { useLayoutEffect } from "react";

const RoomBase = () => {
  const { scene } = useGLTF("/roomModel.glb");
  console.log("scene", scene);
  useLayoutEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return <primitive castShadow receiveShadow object={scene} />;
};

export default RoomBase;
