import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  useGLTF,
  Center,
  Environment,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import { useLayoutEffect } from "react";
import FloorLampLight from "./FloorLampLight";
import Website from "./Website";
import { Model } from "./Room";

const Experience = () => {
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

  return (
    <Canvas shadows>
      <PerspectiveCamera
        fov={25}
        near={0.1}
        far={2000}
        position={[10, 6, 10]}
        makeDefault
      />
      <OrbitControls makeDefault target={[0, 1.5, 0]} />

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

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <primitive castShadow receiveShadow object={scene}>
        <Website />
      </primitive>
      {/* <Model>
        <Website />
      </Model> */}
      <rectAreaLight
        color={"#0000FF"}
        intensity={50}
        width={0.7}
        height={0.3}
        position={[-1.4, 1.5, -0.15]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <FloorLampLight />
    </Canvas>
  );
};

export default Experience;
