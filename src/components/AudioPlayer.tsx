import { Html } from "@react-three/drei";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Audioplayer = () => {
  const [audio] = useState(new Audio("/lofi.mp3"));
  audio.loop = true;
  const [playing, setPlaying] = useState(false);

  const onClickedButton = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <group>
        <Html
          transform
          position={[-1.3, 1.48, -0.525]}
          rotation-y={Math.PI / 2.6}
          occlude
          distanceFactor={3}
        >
          <button
            className="rounded-full p-0.5 bg-white/20 hover:bg-white/50 animate-pulse text-white"
            onClick={onClickedButton}
          >
            {playing && <SpeakerXMarkIcon className="w-2 h-2" />}
            {!playing && <SpeakerWaveIcon className="w-2 h-2 " />}
          </button>
        </Html>
      </group>
    </>
  );
};

export default Audioplayer;
