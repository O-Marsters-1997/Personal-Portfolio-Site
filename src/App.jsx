import "./styles/css/style.css";
import { Route, Routes } from "react-router-dom";
import theme from "./theme";
import Navbar from "./components/Navbar";
import CanvasContainer from "../src/containers/CanvasContainer";
import { ThemeProvider, Button, CssBaseline } from "@mui/material";
import styled from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
        <CanvasContainer theme={theme} />
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
