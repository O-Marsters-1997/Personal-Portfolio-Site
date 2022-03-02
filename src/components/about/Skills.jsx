import React, { useRef, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
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
import FLASK from "../../assets/images/flask-white.svg";

const Skills = () => {
  const MySkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: "8.5rem 0",

    ".skills-grid-container": {
      width: "clamp(250px, 75vw, 1250px)",
      margin: "0 auto",

      ".skills-grid-item": {
        textAlign: "center",
        margin: "0 auto",

        img: {
          height: "4rem",
          marginTop: "1rem",
          [theme.breakpoints.down("sm")]: {
            height: "3.5rem",
          },

          "&:hover": {
            filter:
              "brightness(0) saturate(100%) invert(85%) sepia(28%) saturate(2489%) hue-rotate(322deg) brightness(102%) contrast(88%)",
          },
        },
      },
    },
  }));

  const myRef = useRef();

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const variants = {
    skillsStart: { scale: 0.4, opacity: 0, y: 100 },
    skillsEnd: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 40, damping: 12 },
    },
    titleStart: {
      opacity: 0,
    },
    titleEnd: {
      opacity: 1,
      transition: { type: "spring", stiffness: 30, damping: 18, delay: 0.6 },
    },
  };

  const animation = useAnimation();
  const titleAnimation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting && window.innerWidth >= 450) {
        animation.start("skillsStart");
        titleAnimation.start("titleStart");
      }
      if (entry.isIntersecting && window.innerWidth >= 450) {
        animation.start("skillsEnd");
        titleAnimation.start("titleEnd");
      }
    }, options);
    observer.observe(myRef.current);
  });

  return (
    <MySkills>
      <Grid className="skills-grid-container" container spacing={2} ref={myRef}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component={motion.div}
            variants={variants}
            animate={titleAnimation}
          >
            Skills
            <Box component="div" className="underline"></Box>
          </Typography>

          <Grid
            container
            spacing={2}
            className="inner-skills-grid"
            component={motion.div}
            variants={variants}
            animate={animation}
          >
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={HTML} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Html</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={CSS} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Css</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={JS} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Javascript</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={SASS} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Sass</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={RE} className="skills-grid-image"></img>
                <Typography variant="subtitle2">React</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={FIRE} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Firebase</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={PY} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Python</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={JAVA} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Java</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={SPR} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Spring</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={PSQL} className="skills-grid-image"></img>
                <Typography variant="subtitle2">PostgreSQL</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={GIT} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Git</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box className="skills-grid-item">
                <img src={LIN} className="skills-grid-image"></img>
                <Typography variant="subtitle2">Linux</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MySkills>
  );
};

export default Skills;
