import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Stars,
  useGLTF,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { useLayoutEffect } from "react";
import FloorLampLight from "./FloorLampLight";
import Website from "./Website";
import BackgroundLight from "./BackgroundLight";
import BikeFrontWheel from "./BikeFrontWheel";
import SeatTop from "./SeatTop";
import VrGlasses from "./VrGlasses";
import PhotoCamera from "./PhotoCamera";
import PrinterPlate from "./PrinterPlate";
import Name from "./Name";
import AdditionalLight from "./AdditionalLight";

const Experience = (props: { lightMode: boolean }) => {
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

      {props.lightMode && <Environment files="/potsdamer_platz_1k.hdr" />}
      {!props.lightMode && <Environment files="/dikhololo_night_1k.hdr" />}

      <AdditionalLight />

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

      <primitive castShadow receiveShadow object={scene} />

      <Website />
      <SeatTop />
      <VrGlasses />
      <PhotoCamera />
      <BikeFrontWheel />
      <PrinterPlate />
      <BackgroundLight />
      <FloorLampLight />
      <Name />
    </Canvas>
  );
};

export default Experience;
