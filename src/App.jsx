
import "./styles/css/style.css";
import { Route, Routes } from "react-router-dom";
import theme from "./theme";
import Navbar from './components/Navbar';
import Canvas from './components/Canvas'
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Canvas/>
        <Navbar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
