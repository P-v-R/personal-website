import React from "react";
import { BrowserRouter } from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


import NavBarMain from "./NavBarMain";
import Routes from "./Routes";
import './App.css';

library.add(fab) // font awesome brands


/** Renders routes and navbar that remain 
 *  present throughout sight
 */
function App() {
  return (
    <div className="AppBody">
      <BrowserRouter>
        <NavBarMain />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App;
