import React, { useState, useRef, useEffect } from "react";

import "./styles/css/style.css";
import { Route, Routes } from "react-router-dom";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import MenuSmall from "./components/navbar/MenuSmall";
import CanvasContainer from "../src/containers/CanvasContainer";
import { ThemeProvider, Grid, CssBaseline } from "@mui/material";
import { ConstructionOutlined, CoPresentOutlined } from "@mui/icons-material";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const onMobileClick = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    let hamburgerLine = document.getElementById("hamburger-line");
    if (mobileMenu) {
      hamburgerLine.classList.remove("hamburger-line-closed");
      hamburgerLine.classList.add("hamburger-line-open");
    } else {
      hamburgerLine.classList.add("hamburger-line-closed");
      hamburgerLine.classList.remove("hamburger-line-open");
    }
  });

 window.addEventListener("resize", ()=> {
   if (window.innerWidth >= 900) {
    setMobileMenu(false)
   }
 })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <CanvasContainer theme={theme} />
          </Grid>
          <Grid item xs={12}>
            <Navbar theme={theme} onMobileClick={onMobileClick} />
          </Grid>
          {/* This is a toggle effect on displaying the mobile menu */}
          {mobileMenu ? (
            <Grid item xs={12}>
              <MenuSmall />
            </Grid>
          ) : null}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
