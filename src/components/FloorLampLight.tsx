import * as THREE from "three";
import { useRef, useState } from "react";
import { useHelper, SpotLight } from "@react-three/drei";
import { useControls } from "leva";

const FloorLampLight = () => {
  const { x, y, z, distance, angle, penumbra, decay } = useControls(
    "floorlamp",
    {
      x: { value: -1.1, min: -5, max: 5 },
      y: { value: 2, min: -5, max: 5 },
      z: { value: -1.3, min: -5, max: 5 },
      distance: { value: 2, min: 0, max: 100 },
      angle: { value: 0.8, min: 0, max: 1 },
      penumbra: { value: 0.27, min: 0, max: 1 },
      decay: { value: 1.28, min: 1, max: 2 },
    }
  );

  const light = useRef();
  //   useHelper(light, THREE.SpotLightHelper);

  const target = new THREE.Object3D();

  return (
    <mesh>
      <SpotLight
        ref={light as any}
        position={[x, y, z]}
        color={"#E87D0D"}
        target={target}
        attenuation={0}
        intensity={10}
        distance={distance}
        angle={angle}
        penumbra={penumbra}
        decay={decay}
        castShadow={false}
      />
      <primitive object={target} position={[-2, 3, -0.8]} />
    </mesh>
  );
};

export default FloorLampLight;

// export default {};
