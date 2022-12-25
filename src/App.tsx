// import { useState } from 'react'
import { Leva } from "leva";
import "./App.css";

import Experience from "./components/Experience";

function App() {
  console.log("search", window.location.search, "1");
  return (
    <div className="w-screen h-screen">
      <Leva hidden={!window.location.search.includes("debug")} />
      <Experience />
    </div>
  );
}

export default App;
