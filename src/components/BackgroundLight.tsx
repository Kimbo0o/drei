import { useState, useEffect } from "react";
import { calculateNextValues } from "../lib/rgb";

const BackgroundLight = () => {
  const [colorValue, setColorValue] = useState({ r: 0, g: 0, b: 255 });

  useEffect(() => {
    const interval = setInterval(() => {
      const { r, g, b } = calculateNextValues(
        colorValue.r,
        colorValue.g,
        colorValue.b
      );
      setColorValue({ r, g, b });
    }, 50);
    return () => clearInterval(interval);
  }, [colorValue]);

  return (
    <rectAreaLight
      color={`rgb(${colorValue.r}, ${colorValue.g}, ${colorValue.b})`}
      intensity={50}
      width={0.7}
      height={0.3}
      position={[-1.4, 1.5, -0.15]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

export default BackgroundLight;
