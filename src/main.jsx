import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CommonProvider } from "./Context/Common.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CommonProvider>
      <App />
    </CommonProvider>
  </BrowserRouter>
);
