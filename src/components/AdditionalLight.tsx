import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AdditionalLight = () => {
  const directionalLight = useRef();
  //   useHelper(directionalLight, THREE.DirectionalLightHelper);

  return (
    <directionalLight
      position={[5, 3.6, 5]}
      color={"#ffffff"}
      intensity={0.3}
      castShadow
      shadow-bias={-0.0004}
      ref={directionalLight as any}
    />
  );
};

export default AdditionalLight;
