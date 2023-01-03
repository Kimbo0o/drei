import {
  isChrome,
  isChromium,
  isOpera,
  isEdgeChromium,
} from "react-device-detect";
import { Leva } from "leva";
import "./App.css";

import Experience from "./components/Experience";
import Info from "./components/Info";

function App() {
  const isRecommendedBrowser =
    isChrome || isChromium || isOpera || isEdgeChromium;

  return (
    <div className="w-screen h-screen relative">
      <Leva hidden={!window.location.search.includes("debug")} />
      <Experience />
      <Info />
      {!isRecommendedBrowser && (
        <div className=" absolute top-4 left-0 w-full text-center text-gray-300">
          For an optimal experience please use a Chromium-based browser
        </div>
      )}
    </div>
  );
}

export default App;
