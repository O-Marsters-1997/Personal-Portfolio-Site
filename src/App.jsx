import "./styles/css/style.css";
import { Route, Routes } from "react-router-dom";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import Canvas from "./components/Canvas";
import { ThemeProvider, Button } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Canvas theme={theme}/>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
