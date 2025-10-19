import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import App from "./App.tsx";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
