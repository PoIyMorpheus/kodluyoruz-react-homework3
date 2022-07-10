import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import SearchCity from "./components/SearchCity";
import Instant from "./components/Instant";
import Today from "./components/Today";
import Weekly from "./components/Weekly";
import Footer from "./components/Footer";
import { CityProvider } from "./context/CityContext";
import background from "./background/1387720.jpg"

function App() {
  return (
    <div className="App">
      <section className="vh-150" style={{ backgroundColor: "#C1CFEA",backgroundImage:`url(${background})` }}>
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            style={{ color: "#282828"}}
          >
            <div className="col-md-9 col-lg-7 col-xl-5">
              <CityProvider>
                <SearchCity />
                <br />
                <Instant />
                <Today />
                <Weekly />
              </CityProvider>
              
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
