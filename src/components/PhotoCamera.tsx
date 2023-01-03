import { CameraIcon } from "@heroicons/react/20/solid";
import { Box, Html, useGLTF } from "@react-three/drei";
import { useLayoutEffect, useState } from "react";

const PhotoCamera = () => {
  const model = useGLTF("/photoCamera.glb");

  useLayoutEffect(() => {
    model.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  const [showFlash, setShowFlash] = useState(false);

  const takePhoto = () => {
    window.setTimeout(() => {
      setShowFlash(true);
    }, 200);
    window.setTimeout(() => {
      setShowFlash(false);
    }, 300);
    window.setTimeout(() => {
      downloadScreenshot();
    }, 1000);
  };

  const downloadScreenshot = () => {
    const elements = document.getElementsByTagName("canvas");
    const element = elements[0];
    const objectUrl = element.toDataURL("image/jpeg");
    const dl = document.createElement("a");
    dl.setAttribute("href", objectUrl);
    dl.setAttribute("download", "image.jpeg");
    dl.click();
  };

  return (
    <group>
      <Html transform position={[1.05, 1.27, -1.15]} occlude distanceFactor={5}>
        <button
          className="rounded-full p-0.5 bg-white/20 hover:bg-white/50 animate-pulse"
          onClick={takePhoto}
        >
          <CameraIcon className="w-2 h-2 text-white" />
        </button>
      </Html>
      {/* <Box args={[0.1, 0.1, 0.1]} position={[0.84, 1.3, -1.1]}>
        <meshStandardMaterial
          color="#fff"
          emissive="#fff"
          emissiveIntensity={1}
        />
      </Box> */}
      {showFlash && (
        <directionalLight
          position={[5, 3.6, 5]}
          color={"#ffffff"}
          intensity={5}
          castShadow
          shadow-bias={-0.0004}
        />
      )}
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default PhotoCamera;
