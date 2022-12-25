import * as THREE from "three";
import { useRef, useState } from "react";
import { useHelper, SpotLight } from "@react-three/drei";
import { useControls } from "leva";

const FloorLampLight = () => {
  const { position, distance, angle, penumbra, decay } = useControls(
    "floorlamp",
    {
      position: { x: -1.1, y: 2, z: -1.3 },
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
        position={[position.x, position.y, position.z]}
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
