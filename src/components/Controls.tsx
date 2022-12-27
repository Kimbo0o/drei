import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Controls = (props: {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
}) => {
  const onClickLightMode = () => {
    props.setLightMode(!props.lightMode);
  };

  return (
    <div className="absolute top-0 left-0 p-4 flex gap-4 text-white">
      <button
        className="rounded-full  p-2 bg-white/20 hover:bg-white/50"
        onClick={onClickLightMode}
      >
        {props.lightMode && <SunIcon className="w-6 h-6" />}
        {!props.lightMode && <MoonIcon className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default Controls;
