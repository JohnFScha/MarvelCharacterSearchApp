import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyle } from "./styles/componentStyles.js";
import { BrowserRouter as Router } from "react-router-dom";
import { MarvelProvider } from "./context/MarvelContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <MarvelProvider>
      <GlobalStyle />
      <App />
    </MarvelProvider>
  </Router>
);
