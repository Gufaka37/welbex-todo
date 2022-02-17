import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./routes";
import {Navbar} from "./components/navbar/Navbar";




function App() {
  return (
      <BrowserRouter>
          <div className="main-container">
              <div className="navbar-container">
                  <Navbar />
              </div>
              <div className="content-container">
                  <Routes />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
