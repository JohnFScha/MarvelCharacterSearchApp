import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MarvelProvider } from "./context/MarvelContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MarvelProvider>
      <App />
    </MarvelProvider>
  </React.StrictMode>
);
