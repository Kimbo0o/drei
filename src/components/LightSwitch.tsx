import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Html } from "@react-three/drei";

const LightSwitch = (props: {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
}) => {
  const onClickLightMode = () => {
    props.setLightMode(!props.lightMode);
  };

  return (
    <Html
      transform
      position={[-1.515, 1.442, 1.37]}
      rotation-y={Math.PI / 2}
      occlude
      distanceFactor={0.7}
    >
      <button onClick={onClickLightMode} className="p-4">
        {props.lightMode && <SunIcon className="w-6 h-6 text-gray-900" />}
        {!props.lightMode && <MoonIcon className="w-6 h-6 text-gray-900" />}
      </button>
    </Html>
  );
};

export default LightSwitch;
