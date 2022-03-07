import React, { useState, useEffect } from "react";

import "./styles/css/style.css";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import MenuSmall from "./components/navbar/MenuSmall";
import CanvasContainer from "../src/containers/CanvasContainer";
import AboutContainer from "./containers/AboutContainer";
import Projects from "./components/projects/Projects";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 450) {
        setWidth(window.innerWidth);
      }
    });
  });

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

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      setMobileMenu(false);
    }
  });

  const onMobileClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="div" className="App">
        <CanvasContainer theme={theme} />
        <Navbar
          mobileMenu={mobileMenu}
          onMobileClick={onMobileClick}
          sx={{ bgcolor: "red" }}
        />
        {/* This is a toggle effect on displaying the mobile menu */}
        {mobileMenu ? <MenuSmall onMobileClick={onMobileClick} /> : null}
        {!mobileMenu ? (
          <>
            <AboutContainer />
            <Projects />
            <Form />
            <Footer />
          </>
        ) : null}
      </Box>
    </ThemeProvider>
  );
}

export default App;
