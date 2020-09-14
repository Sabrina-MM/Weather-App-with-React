import React from "react";

import Footer from "./Footer";
import PanelRight from "./PanelRight";
import PanelLeft from "./PanelLeft";
import TypeCity from "./TypeCity";

import "./PanelRight.css";
import "./App.css";
import "./C-F.css";

export default function App() {
  return (
    <div className="container" style={{ maxWidth: 830 }}>
      <div className="card-bodyfirstbox border 1px solid" color="#dee2e6">
        <TypeCity city="London" />
        <div>
          <div className="allHeading" />

          <PanelRight />
          <PanelLeft />

          <div className="App">
            <form>
              <div className="card-group" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
