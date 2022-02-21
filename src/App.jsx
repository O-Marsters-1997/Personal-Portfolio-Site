import "./styles/css/style.css";
import { Route, Routes } from "react-router-dom";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import CanvasContainer from "../src/containers/CanvasContainer";
import { ThemeProvider, Grid, CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <CanvasContainer theme={theme} />
          </Grid>
          <Grid item xs={12}>
            <Navbar theme={theme} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
