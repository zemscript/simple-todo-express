import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./normalize.css";
import "./index.css";
import GlobalStyles from "./global-styles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles></GlobalStyles>
    <App></App>
  </StrictMode>,
);
