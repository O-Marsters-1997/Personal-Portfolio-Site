import React from "react";
import { Box } from "@mui/material";
import AboutMe from "../components/about/AboutMe";
import Skills from "../components/about/Skills";

const AboutContainer = () => {
  return (
    <Box component="div">
      <AboutMe />
      <Skills />
    </Box>
  );
};

export default AboutContainer;
