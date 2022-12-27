// import { useState } from 'react'
import { Leva } from "leva";
import "./App.css";

import Experience from "./components/Experience";
import Controls from "./components/Controls";
import { useState } from "react";

// const tourSteps = [{
//   lookAt: []
// }]

function App() {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className="w-screen h-screen relative">
      <Leva hidden={!window.location.search.includes("debug")} />
      <Experience lightMode={lightMode} />
      <Controls lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
}

export default App;
