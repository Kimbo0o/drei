// import * as THREE from "three";
// import { useRef } from "react";
// import { useHelper, SpotLight } from "@react-three/drei";
// import { useControls } from "leva";

// const FloorLampLight = () => {
//   // const { floorlamp } = useControls({
//   //   floorlamp: { x: -1, y: 2, z: -1.2, rx: 0, ry: 0, rz: 0 },
//   // });
//   const { floorlamp_position } = useControls({
//     floorlamp_position: { x: -1.1, y: 2, z: -1.3 },
//   });

//   const light = useRef();
//   useHelper(light, THREE.SpotLightHelper);

//   return (
//     <SpotLight
//       ref={light}
//       position={[
//         floorlamp_position.x,
//         floorlamp_position.y,
//         floorlamp_position.z,
//       ]}
//       intensity={2}

//       angle={0.5}
//       color={"#ff0000"}
//       rotation={[Math.PI * 1.2, 0, 0]}
//       castShadow
//     />
//   );
// };

// export default FloorLampLight;

export default {};
