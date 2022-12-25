import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  useGLTF,
  Center,
  Environment,
  Float,
} from "@react-three/drei";
import { useLayoutEffect } from "react";
import FloorLampLight from "./FloorLampLight";
import Website from "./Website";

const Experience = () => {
  const { scene } = useGLTF("/roomModel.glb");
  useLayoutEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <Canvas
      shadows
      camera={{
        fov: 25,
        near: 0.1,
        far: 2000,
        position: [10, 5, 10],
      }}
    >
      {/* <rectAreaLight /> */}
      <Environment preset="city" />
      {/* <ambientLight color="#ffffff" intensity="0.4" /> */}
      <directionalLight
        position={[5, 3.6, 5]}
        color={"#ffffff"}
        intensity={0.3}
        castShadow
        shadow-bias={-0.0004}
      />

      <color args={["#444"]} attach="background" />
      <OrbitControls makeDefault />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* <Float rotationIntensity={0.3}> */}
      <Center>
        <primitive castShadow receiveShadow object={scene}>
          <Website />
        </primitive>
        {/* <ContactShadows position-y={-0.0} /> */}
        <rectAreaLight
          color={"#0000FF"}
          intensity={50}
          width={0.7}
          height={0.3}
          position={[-1.4, 1.51163, 0.34]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <FloorLampLight />
      </Center>
      {/* </Float> */}
    </Canvas>
  );
};

export default Experience;
