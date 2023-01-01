import { Html } from "@react-three/drei";
import { useControls } from "leva";
import {
  InformationCircleIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";

const Website = (props: {
  isActive: boolean;
  onGoToScreen: () => void;
  onGoBack: () => void;
}) => {
  const { x, y, z, distanceFactor } = useControls("html", {
    x: { value: -1.3, min: -5, max: 5, step: 0.01 },
    y: { value: 1.51, min: -5, max: 5, step: 0.01 },
    z: { value: -0.135, min: -5, max: 5, step: 0.01 },
    distanceFactor: { value: 0.15, min: 0, max: 1, step: 0.001 },
  });

  return (
    <group>
      {/* infopoint button */}
      {!props.isActive && (
        <Html
          transform
          position={[x, y + 0.3, z]}
          rotation-y={Math.PI / 2}
          occlude
          distanceFactor={5}
        >
          <button
            className="rounded-full p-0.5 bg-white/20 hover:bg-white/50 animate-pulse"
            onClick={props.onGoToScreen}
          >
            <InformationCircleIcon className="w-2 h-2 text-white" />
          </button>
        </Html>
      )}
      {/* back button */}
      {props.isActive && (
        <Html
          transform
          position={[x, y + 0.3, z]}
          rotation-y={Math.PI / 2}
          occlude
          distanceFactor={3}
        >
          <button
            className="rounded-full p-0.5 bg-white/20 hover:bg-white/50 animate-pulse"
            onClick={props.onGoBack}
          >
            <ArrowUturnLeftIcon className="w-2 h-2 text-white " />
          </button>
        </Html>
      )}

      {/* iframe */}
      <Html
        transform
        distanceFactor={distanceFactor}
        position={[x, y, z]}
        rotation-y={Math.PI / 2}
        occlude
      >
        <iframe
          src="https://kimdanielkoch.de"
          width={1600}
          height={900}
          className="border-none w-[1600px] h-[900px] rounded-lg bg-black"
        />
      </Html>
    </group>
  );
};

export default Website;
