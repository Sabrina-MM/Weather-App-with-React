import React from "react";
import FormMainHtml from "./FormMainHtml";
import Footer from "./Footer";

import "./PanelRight.css";
import "./App.css";
import "./C-F.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <FormMainHtml />
        <Footer />
      </div>
    </div>
  );
}
