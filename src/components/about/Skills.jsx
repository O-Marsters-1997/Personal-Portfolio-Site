import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import HTML from "../../assets/images/html-white.svg";
import CSS from "../../assets/images/css-white.svg";
import JS from "../../assets/images/javascript-white.svg";
import SASS from "../../assets/images/sass-white.svg";
import RE from "../../assets/images/react-white.svg";
import FIRE from "../../assets/images/firebase-white.svg";
import PY from "../../assets/images/python-white .svg";
import JAVA from "../../assets/images/java-white.svg";
import SPR from "../../assets/images/spring-white.svg";
import PSQL from "../../assets/images/postgresql-white.svg";
import GIT from "../../assets/images/git-white.svg";
import LIN from "../../assets/images/linux-white.svg";

const Skills = () => {
  const MySkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    paddingTop: "8.5rem",

    ".skills-grid-container": {
      width: "clamp(250px, 75vw, 1250px)",
      margin: "0 auto",

      ".MuiTypography-h3": {
        textTransform: "uppercase",
        margin: "0 auto",
        width: "fit-content",

        ".underline": {
          width: "60%",
          margin: "1.8rem auto 3.2rem auto",
          height: "4px",
          backgroundColor: theme.palette.text.primary,
          borderRadius: "5px",
        },
      },

      ".skills-grid-item": {
        textAlign: "center",
        margin: "0 auto",

        img: {
          height: "3rem",
          marginTop: "1rem",
        },

        ".MuiTypography-subtitle": {
          display: "block",
        },
      },
    },
  }));
  return (
    <MySkills component="div">
      <Grid className="skills-grid-container" container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Skills
            <Box component="div" className="underline"></Box>
          </Typography>
          <Grid container spacing={2} className="inner-skills-grid">
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={HTML} className="skills-grid-image"></img>
                <Typography variant="subtitle">Html</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={CSS} className="skills-grid-image"></img>
                <Typography variant="subtitle">Css</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={JS} className="skills-grid-image"></img>
                <Typography variant="subtitle">Javascript</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={SASS} className="skills-grid-image"></img>
                <Typography variant="subtitle">Sass</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={RE} className="skills-grid-image"></img>
                <Typography variant="subtitle">React</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={FIRE} className="skills-grid-image"></img>
                <Typography variant="subtitle">Firebase</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={PY} className="skills-grid-image"></img>
                <Typography variant="subtitle">Python</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={JAVA} className="skills-grid-image"></img>
                <Typography variant="subtitle">Java</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={SPR} className="skills-grid-image"></img>
                <Typography variant="subtitle">Spring</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={PSQL} className="skills-grid-image"></img>
                <Typography variant="subtitle">PostgreSQL</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={GIT} className="skills-grid-image"></img>
                <Typography variant="subtitle">Git</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Box className="skills-grid-item">
                <img src={LIN} className="skills-grid-image"></img>
                <Typography variant="subtitle">Linux</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MySkills>
  );
};

export default Skills;
