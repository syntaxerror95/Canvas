import logo from "./logo.svg";
import "./App.css";
import Canvas from "./components/canvas/canvas";
import SideBar from "./components/sideBar/sidBar";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(14);
  const [color, setColor] = useState("#ffffff");
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="App">
      <Canvas number={number} color={color} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <SideBar
        setNumber={setNumber}
        color={color}
        setColor={setColor}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
    </div>
  );
}

export default App;
