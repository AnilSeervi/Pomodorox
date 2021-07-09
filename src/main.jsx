import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Context from "./Hooks/Context";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <Router>
        <App />
      </Router>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
