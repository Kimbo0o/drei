import { useGLTF } from "@react-three/drei";

const VrGlasses = () => {
  const model = useGLTF("/vrGlasses.glb");

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default VrGlasses;
