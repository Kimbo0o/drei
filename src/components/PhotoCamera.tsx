import { useGLTF } from "@react-three/drei";

const PhotoCamera = () => {
  const model = useGLTF("/photoCamera.glb");

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default PhotoCamera;
