// import { useState } from 'react'
import { Leva } from "leva";
import "./App.css";

import Experience from "./components/Experience";
import Info from "./components/Info";

function App() {
  return (
    <div className="w-screen h-screen relative">
      <Leva hidden={!window.location.search.includes("debug")} />
      <Experience />
      <Info />
    </div>
  );
}

export default App;
