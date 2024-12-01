// import { useSelector } from "react-redux";
// import "./App.css";
// import { createTheme } from "@mui/material/styles";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { useMemo } from "react";
// import { themeSettings } from "./theme";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./scenes/layout";
// import Dashboard from "./scenes/dashboard";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Layout from "./scenes/layout";
import { ThemeProvider } from "@emotion/react";
import { useMemo } from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";

interface RootState {
  global: {
    mode: "dark" | "light";
  };
}

function App() {
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  console.log(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
