import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HashRouter>
      <App />
    </HashRouter>
  </>
);
