import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import NavBarMain from "./NavBarMain";
import Routes from "./Routes";

function App() {
  return (
    <div className="AppBody">
      <BrowserRouter>
    <NavBarMain/>
    <Routes />
    </BrowserRouter>
    </div>
  )
}

export default App;
