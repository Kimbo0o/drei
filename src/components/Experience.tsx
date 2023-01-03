import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useState } from "react";
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
import { useControls } from "leva";
import LightSwitch from "./LightSwitch";
import RoomBase from "./RoomBase";
import Audioplayer from "./AudioPlayer";

const Experience = () => {
  const [currentCamera, setCurrentCamera] = useState<"orbit" | "screen">(
    "orbit"
  );

  const goToScreen = () => {
    setCurrentCamera("screen");
  };

  const goToOrbit = () => {
    setCurrentCamera("orbit");
  };

  const { x, y, z } = useControls("camera", {
    x: { value: 0.1, min: 0, max: 10, step: 0.01 },
    y: { value: 1.51, min: 0, max: 10, step: 0.01 },
    z: { value: -0.135, min: -5, max: 10, step: 0.01 },
  });

  const [lightMode, setLightMode] = useState(true);

  return (
    <>
      <Canvas shadows gl={{ preserveDrawingBuffer: true }} className="z-0">
        {currentCamera === "orbit" && (
          <group>
            <PerspectiveCamera
              fov={25}
              near={0.1}
              far={2000}
              position={[10, 6, 10]}
              makeDefault
            />
            <OrbitControls makeDefault target={[0, 1.5, 0]} />
          </group>
        )}
        {currentCamera === "screen" && (
          <group>
            <PerspectiveCamera
              fov={25}
              near={0.1}
              far={2000}
              position={[x, y, z]}
              makeDefault
            />
            <OrbitControls
              makeDefault
              target={[-1.3, 1.51, -0.135]}
              enableZoom={false}
            />
          </group>
        )}

        {lightMode && <Environment files="/potsdamer_platz_1k.hdr" />}
        {!lightMode && <Environment files="/dikhololo_night_1k.hdr" />}

        <color args={["#444"]} attach="background" />

        <AdditionalLight />

        <Website
          isActive={currentCamera === "screen"}
          onGoToScreen={goToScreen}
          onGoBack={goToOrbit}
        />
        <Audioplayer />
        <BackgroundLight />
        <FloorLampLight />
        <Name />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        {/* <Suspense fallback={null}> */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <RoomBase />
        <VrGlasses />
        <SeatTop />
        <PhotoCamera />
        <BikeFrontWheel />
        <PrinterPlate />
        {/* </Suspense> */}
      </Canvas>
    </>
  );
};

export default Experience;
