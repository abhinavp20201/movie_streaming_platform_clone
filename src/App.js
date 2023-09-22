import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost title="Netflix Originals" />
      <Rowpost title="Action" isSmall />
    </div>
  );
}

export default App;
