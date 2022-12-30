import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const SeatTop = () => {
  const model = useGLTF("/printerPlate.glb");

  const [positionX, setPositionX] = useState(-1.01);
  const [up, setUp] = useState(true);

  useFrame(() => {
    if (model?.scene?.children.length) {
      if (positionX <= -1.01) {
        setUp(true);
      } else if (positionX >= -0.9) {
        setUp(false);
      }

      if (up) {
        setPositionX(positionX + 0.002);
      } else {
        setPositionX(positionX - 0.002);
      }

      model.scene.children[0].position.x = positionX;
    }
  });

  return (
    <group>
      <primitive castShadow receiveShadow object={model.scene} />
    </group>
  );
};

export default SeatTop;
