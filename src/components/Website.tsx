import { Html } from "@react-three/drei";
import { useControls } from "leva";

const Website = () => {
  // const { x, y, z, distanceFactor } = useControls("html", {
  //   x: { value: -1.23, min: -5, max: 5, step: 0.01 },
  //   y: { value: 1.51, min: -5, max: 5, step: 0.01 },
  //   z: { value: 0.355, min: -5, max: 5, step: 0.01 },
  //   distanceFactor: { value: 0.128, min: 0, max: 1, step: 0.001 },
  // });

  return (
    <Html
      transform
      distanceFactor={0.128}
      position={[-1.23, 1.51, 0.355]}
      rotation-y={Math.PI / 2}
    >
      <iframe
        src="https://kimdanielkoch.de"
        className="border-none w-[1920px] h-[1080px] rounded-lg bg-black"
      />
    </Html>
  );
};

export default Website;
