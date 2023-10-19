import logo from "./logo.svg";
import LandingPage from "./components/LandingPage.js";
import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const defaultTheme = createTheme();
function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
