import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./normalize.css";
import "./index.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <App></App>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </StrictMode>,
);
