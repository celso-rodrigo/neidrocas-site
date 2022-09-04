import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BiruProvider from "./context/BiruProvider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BiruProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BiruProvider>
  </React.StrictMode>
);

reportWebVitals();
