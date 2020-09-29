import React from "react";
import ReactDOM from "react-dom";
import App from "./Views/App";
import * as serviceWorker from "./serviceWorker";

// Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./C-F.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
