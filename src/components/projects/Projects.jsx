import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useAnimation, motion } from "framer-motion";
import { styled } from "@mui/system";
import { Grid, Typography, Box, Paper, List, Link } from "@mui/material";
import Github from "../../assets/images/github-white.svg";
import External from "../../assets/images/external-white.svg";
import HTML from "../../assets/images/html-white.svg";
import CSS from "../../assets/images/css-white.svg";
import JS from "../../assets/images/javascript-white.svg";
import SASS from "../../assets/images/sass-white.svg";
import RE from "../../assets/images/react-white.svg";
import MON from "../../assets/images/mongo-white.svg";
import PY from "../../assets/images/python-white .svg";
import PSQL from "../../assets/images/postgresql-white.svg";
import JAV from "../../assets/images/java-white.svg";
import SPR from "../../assets/images/spring-white.svg";
import FIRE from "../../assets/images/firebase-white.svg";
import FLASK from "../../assets/images/flask-white.svg";
import Flask from "../../assets/images/flask.png";
import Sleigh from "../../assets/images/react.jpg";
import Clanhub from "../../assets/images/clanhub.png";

const Projects = () => {
  const MyProjects = styled("div")(({ theme }) => ({
    width: "clamp(250px, 75vw, 1250px)",
    margin: "8.5rem auto 8.5rem auto",
    position: "relative",

    ".MuiTypography-h3": {},

    ".project-item-container": {
      position: "relative",
      width: "100%",

      borderRadius: "10px",
      marginBottom: "12.5rem",
      [theme.breakpoints.down("lg")]: {
        marginBottom: "15rem",
      },
      [theme.breakpoints.down("md")]: {
        height: "65.5vw",
        marginBottom: "12.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        height: "65.5vw",
      },

      ".project-item-wrapper-left": {
        width: "100%",
        height: "100%",
        position: "relative",

        ".project-item-overlay-text": {
          position: "relative",
          height: "100%",
          padding: "2rem",
        },
      },

      ".project-item-image": {
        borderRadius: "10px",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },

      ".project-item-image-overlay": {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.project,
        borderRadius: "10px",
        transition: "all .5s ease-in",
        [theme.breakpoints.down("md")]: {
          backgroundColor: theme.palette.primary.projectSmall,
        },

        "&:hover": {
          [theme.breakpoints.up("md")]: {
            backgroundColor: "transparent",
          },
        },
      },
      ".project-item-external-icons": {
        position: "absolute",
        top: 0,
        padding: "1rem",
        [theme.breakpoints.down("md")]: {
          right: 0,
        },
        img: {
          marginRight: ".8rem",
          height: "2.05rem",
          width: "2.05rem",
          cursor: "pointer",
        },
      },

      // This is the stylings for the small version of the project text, to position it relative within left so that it doesn't expand past the image on mobile

      ".project-item-paper-small": {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    ".project-item-wrapper-right": {
      position: "absolute",
      width: "100%",
      height: "100%",
      padding: "2rem",
      ".MuiPaper-root": {
        marginTop: ".8em",
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "1.5rem",
        [theme.breakpoints.up("md")]: {
          backgroundColor: theme.palette.primary.modifier,
        },
      },
    },
    ".project-item-icons-wrapper, .project-item-icons-wrapper-small": {
      marginTop: "1.2rem",
      display: "flex",
      justifyContent: "space-evenly",

      img: {
        height: "2.75rem",
        "&:hover": {
          filter:
            "brightness(0) saturate(100%) invert(85%) sepia(28%) saturate(2489%) hue-rotate(322deg) brightness(102%) contrast(88%)",
        },
      },
    },

    ".project-item-icons-wrapper-small": {
      position: "absolute",
      left: "10%",
      right: "10%",
      bottom: "10%",
    },

    ".project-item-bullet-wrapper": {
      display: "flex",
      lineHeight: "1.5em",

      ".MuiTypography-body1": {
        marginLeft: ".8rem",
        lineHeight: "1.5em",
        fontSize: "clamp(16px, 3vw, 20px)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      ".project-item-wrapper-right": {
        display: "none",
      },
    },
    [theme.breakpoints.up("sm")]: {
      ".project-item-overlay-text": {
        display: "none",
      },
    },

    [theme.breakpoints.up("md")]: {
      ".project-item-container": {
        height: "28.5vw",
        maxHeight: "500px",
      },

      ".project-item-wrapper-right": {
        left: "40%",
        padding: 0,

        ".project-item-heading": {
          textAlign: "right",
        },
      },

      // Exclusion rules for the second item to switch everything around
      ".project-item-container:nth-of-type(3n)": {
        ".project-item-wrapper-left": {
          marginLeft: "50%",
          ".project-item-external-icons": {
            zIndex: 100,

            img: {
              cursor: "pointer",
            },
          },
        },
        ".project-item-wrapper-right": {
          left: "10%",

          ".project-item-heading": {
            textAlign: "left",
          },
        },
      },
    },
    [theme.breakpoints.up("lg")]: {
      ".project-item-heading": {
        paddingBottom: "2rem",
      },
    },

    // Media query for when the page is medium so split view
  }));

  const project1Ref = useRef();
  const project2Ref = useRef();
  const project3Ref = useRef();
  const titleRef = useRef();

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const variants = {
    projectLeftStart: { scale: 0.8, opacity: 0, x: "-10vw", y: 100 },
    projectLeftEnd: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 40, damping: 12 },
    },
    projectRightStart: { scale: 0.8, opacity: 0, x: "10vw", y: 100 },
    projectRightEnd: {
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

  const leftAnimation = useAnimation();
  const left2Animation = useAnimation();
  const rightAnimation = useAnimation();
  const titleAnimation = useAnimation();

  useEffect(() => {
    // four different intersection observers for three different projects

    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting && window.innerWidth >= 450) {
        leftAnimation.start("projectLeftStart");
        titleAnimation.start("titleStart");
      }
      if (entry.isIntersecting && window.innerWidth >= 450) {
        leftAnimation.start("projectLeftEnd");
        titleAnimation.start("titleEnd");
      }
    }, options);
    observer1.observe(project1Ref.current);

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting && window.innerWidth >= 450) {
        rightAnimation.start("projectRightStart");
      }
      if (entry.isIntersecting && window.innerWidth >= 450) {
        rightAnimation.start("projectRightEnd");
      }
    }, options);
    observer2.observe(project2Ref.current);

    const observer3 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting && window.innerWidth >= 450) {
        left2Animation.start("projectLeftStart");
      }
      if (entry.isIntersecting && window.innerWidth >= 450) {
        left2Animation.start("projectLeftEnd");
      }
    }, options);
    observer3.observe(project3Ref.current);

    const titleObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting && window.innerWidth >= 450) {
        titleAnimation.start("titleStart");
      }
      if (entry.isIntersecting && window.innerWidth >= 450) {
        titleAnimation.start("titleEnd");
      }
    }, options);
    titleObserver.observe(project3Ref.current);
  });

  return (
    <MyProjects id="projects">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            ref={titleRef}
            component={motion.h3}
            variants={variants}
            animate={titleAnimation}
          >
            Projects
            <Box component="div" className="underline"></Box>
          </Typography>
        </Grid>
        <Grid
          container
          className="project-item-container"
          ref={project1Ref}
          component={motion.div}
          variants={variants}
          animate={leftAnimation}
        >
          <Grid item xs={12} md={6} className="project-item-wrapper-left">
            <LazyLoadImage
              src={Flask}
              alt="Flask cricket app"
              className="project-item-image"
            />
            <Box className="project-item-image-overlay">
              <Box className="project-item-overlay-text">
                <Box className="project-item-heading-small">
                  <Typography variant="subtitle">Featured work</Typography>
                  <Typography variant="h4">Flask Cricket App</Typography>
                </Box>
                <Paper elevation={12} className="project-item-paper-small">
                  <List dense={true}>
                    <Box
                      component="div"
                      className="project-item-bullet-wrapper"
                    >
                      <Box
                        component="span"
                        className="project-item-bullet"
                      ></Box>
                      <Typography variant="body1" className="project-text">
                        Created an application for keeping track of the 2021
                        Cricket World Cup.
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      className="project-item-bullet-wrapper"
                    >
                      <Box
                        component="span"
                        className="project-item-bullet"
                      ></Box>
                      <Typography variant="body1" className="project-text">
                        Manipulated relavant data using Python, connecting it to
                        the front-end using Flask and Jinja.
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      className="project-item-bullet-wrapper"
                    >
                      <Box
                        component="span"
                        className="project-item-bullet"
                      ></Box>
                      <Typography variant="body1" className="project-text">
                        Managed relational databases using PostgreSQL.
                      </Typography>
                    </Box>
                  </List>
                </Paper>
                <Box
                  component="div"
                  className="project-item-icons-wrapper-small"
                >
                  <LazyLoadImage src={HTML} alt="Html icon" />
                  <LazyLoadImage src={SASS} alt="Sass icon" />
                  <LazyLoadImage src={PY} alt="Python icon" />
                  <LazyLoadImage src={FLASK} alt="Flask icon" />
                  <LazyLoadImage src={PSQL} alt="Postgresql icon" />
                </Box>
              </Box>
            </Box>
            <Box component="div" className="project-item-external-icons">
              <Link
                href="https://github.com/O-Marsters-1997/Flask_cricket_app"
                target="_blank"
                rel="noopener"
              >
                <LazyLoadImage src={Github} alt="github-cons-to-source-code" />
              </Link>
              <Link
                href="https://cwc-insider.herokuapp.com/"
                target="_blank"
                rel="noopener"
              >
                <LazyLoadImage
                  src={External}
                  alt="external-icon-to-deployed-version"
                />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="project-item-wrapper-right">
            <Box className="project-item-heading">
              <Typography variant="subtitle">Featured work</Typography>
              <Typography variant="h4">Flask Cricket App</Typography>
            </Box>
            <Paper elevation={12}>
              <List dense={true}>
                <Box component="div" className="project-item-bullet-wrapper">
                  <Box component="span" className="project-item-bullet"></Box>
                  <Typography variant="body1" className="project-text">
                    Created an application for keeping track of the 2021 Cricket
                    World Cup.
                  </Typography>
                </Box>
                <Box component="div" className="project-item-bullet-wrapper">
                  <Box component="span" className="project-item-bullet"></Box>
                  <Typography variant="body1" className="project-text">
                    Manipulated relavant data using Python, connecting it to the
                    front-end using Flask and Jinja.
                  </Typography>
                </Box>
                <Box component="div" className="project-item-bullet-wrapper">
                  <Box component="span" className="project-item-bullet"></Box>
                  <Typography variant="body1" className="project-text">
                    Managed relational databases using PostgreSQL.
                  </Typography>
                </Box>
              </List>
            </Paper>
            <Box component="div" className="project-item-icons-wrapper">
              <LazyLoadImage src={HTML} alt="Html icon" />
              <LazyLoadImage src={SASS} alt="Sass icon" />
              <LazyLoadImage src={PY} alt="Python icon" />
              <LazyLoadImage src={FLASK} alt="Flask icon" />
              <LazyLoadImage src={PSQL} alt="Postgresql icon" />
            </Box>
          </Grid>
        </Grid>

        {/* BBC Sleigh Ride starts here */}
        <Grid
          container
          className="project-item-container"
          ref={project2Ref}
          component={motion.div}
          variants={variants}
          animate={rightAnimation}
        >
          <Grid item xs={12} md={6} className="project-item-wrapper-left">
            <LazyLoadImage
              src={Sleigh}
              alt="BBC sleigh ride project"
              className="project-item-image"
            />
            <Box className="project-item-image-overlay">
              <Box className="project-item-overlay-text">
                <Box className="project-item-heading-small">
                  <Typography variant="subtitle">Featured work</Typography>
                  <Typography variant="h4">BBC Sleigh Ride</Typography>
                </Box>
                <Paper elevation={12} className="project-item-paper-small">
                  <List dense={true}>
                    <Box
                      component="div"
                      className="project-item-bullet-wrapper"
                    >
                      <Box
                        component="span"
                        className="project-item-bullet"
                      ></Box>
                      <Typography variant="body1" className="project-text">
                        Developed an educational application about how Christmas
                        is celebrated around the world.
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      className="project-item-bullet-wrapper"
                    >
                      <Box
                        component="span"
                        className="project-item-bullet"
                      ></Box>
                      <Typography variant="body1" className="project-text">
                        API calls using non-relational databases and express
                        server configuration.
                      </Typography>
                    </Box>
                  </List>
                </Paper>
                <Box
                  component="div"
                  className="project-item-icons-wrapper-small"
                >
                  <LazyLoadImage src={HTML} alt="Html icon" />
                  <LazyLoadImage src={CSS} alt="CSS icon" />
                  <LazyLoadImage src={JS} alt="Javascript icon" />
                  <LazyLoadImage src={RE} alt="React icon" />
                  <LazyLoadImage src={MON} alt="Mongo DB icon" />
                </Box>
              </Box>
            </Box>
            <Box component="div" className="project-item-external-icons">
              <Link
                href="https://github.com/O-Marsters-1997/BBCSleighRide"
                target="_blank"
                rel="noopener"
              >
                <LazyLoadImage src={Github} alt="github-cons-to-source-code" />
              </Link>
              <Link
                href="https://musing-panini-a7dc6f.netlify.app"
                target="_blank"
                rel="noopener"
              >
                <LazyLoadImage
                  src={External}
                  alt="external-icon-to-deployed-version"
                />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="project-item-wrapper-right">
            <Box className="project-item-heading">
              <Typography variant="subtitle">Featured work</Typography>
              <Typography variant="h4">BBC Sleigh Ride</Typography>
            </Box>
            <Paper elevation={12}>
              <List dense={true}>
                <Box component="div" className="project-item-bullet-wrapper">
                  <Box component="span" className="project-item-bullet"></Box>
                  <Typography variant="body1" className="project-text">
                    Developed an educational application about how Christmas is
                    celebrated around the world.
                  </Typography>
                </Box>
                <Box component="div" className="project-item-bullet-wrapper">
                  <Box component="span" className="project-item-bullet"></Box>
                  <Typography variant="body1" className="project-text">
                    API calls using non-relational databases and express server
                    configuration.
                  </Typography>
                </Box>
              </List>
            </Paper>
            <Box component="div" className="project-item-icons-wrapper">
              <LazyLoadImage src={HTML} alt="Html icon" />
              <LazyLoadImage src={CSS} alt="CSS icon" />
              <LazyLoadImage src={JS} alt="Javascript icon" />
              <LazyLoadImage src={RE} alt="React icon" />
              <LazyLoadImage src={MON} alt="Mongo DB icon" />
            </Box>
          </Grid>
        </Grid>

        {/* Clanhub Starts here */}
        <Grid
          container
          className="project-item-container"
          ref={project3Ref}
          component={motion.div}
          variants={variants}
          animate={left2Animation}
        >
          <Grid item xs={12} md={6} className="project-item-wrapper-left">
            <LazyLoadImage
              src={Clanhub}
              alt="Clanhub Porject"
              className="project-item-image"
            />
            <Box className="project-item-image-overlay">
              <Box className="project-item-overlay-text">
                <Box className="project-item-heading-small">
                  <Typography variant="subtitle">Featured work</Typography>
                  <Typography variant="h4">Clanhub</Typography>
                </Box>
                <Paper elevation={12} className="project-item-paper-small">
                  <List dense={true}>
                    <Box
                      component="div"
                      className="project-item-bullet-wrapper"
                    >
                      <Box
                        component="span"
                        className="project-item-bullet"
                      ></Box>
                      <Typography variant="body1" className="project-text">
                        An open source project for Code Clan alumni to maintain
                        and strengthen their community.
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      className="project-item-bullet-wrapper"
                    >
                      <Box
                        component="span"
                        className="project-item-bullet"
                      ></Box>
                      <Typography variant="body1" className="project-text">
                        Authentication using firebase, allowing users to signup,
                        login and contribute to posts on a filterable forum.
                      </Typography>
                    </Box>
                  </List>
                </Paper>
                <Box
                  component="div"
                  className="project-item-icons-wrapper-small"
                >
                  <LazyLoadImage src={SASS} alt="Sass icon" />
                  <LazyLoadImage src={JAV} alt="Javascript icon" />
                  <LazyLoadImage src={SPR} alt="Spring icon" />
                  <LazyLoadImage src={RE} alt="React icon" />
                  <LazyLoadImage src={FIRE} alt="Firebase icon" />
                </Box>
              </Box>
            </Box>
            <Box component="div" className="project-item-external-icons">
              <Link
                href="https://github.com/O-Marsters-1997/ClanHub"
                target="_blank"
                rel="noopener"
              >
                <LazyLoadImage src={Github} alt="github-cons-to-source-code" />
              </Link>
              {/* <LazyLoadImage src={External} alt="external-icon-to-deployed-version" /> */}
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="project-item-wrapper-right">
            <Box className="project-item-heading">
              <Typography variant="subtitle">Featured work</Typography>
              <Typography variant="h4">Clanhub</Typography>
            </Box>
            <Paper elevation={12}>
              <List dense={true}>
                <Box component="div" className="project-item-bullet-wrapper">
                  <Box component="span" className="project-item-bullet"></Box>
                  <Typography variant="body1" className="project-text">
                    An open source project for Code Clan alumni to maintain and
                    strengthen their community.
                  </Typography>
                </Box>
                <Box component="div" className="project-item-bullet-wrapper">
                  <Box component="span" className="project-item-bullet"></Box>
                  <Typography variant="body1" className="project-text">
                    Authentication using firebase, allowing users to signup,
                    login and contribute to posts on a filterable forum.
                  </Typography>
                </Box>
              </List>
            </Paper>
            <Box component="div" className="project-item-icons-wrapper">
              <LazyLoadImage src={SASS} alt="Sass icon" />
              <LazyLoadImage src={JAV} alt="Java icon icon" />
              <LazyLoadImage src={SPR} alt="Spring icon" />
              <LazyLoadImage src={RE} alt="React icon" />
              <LazyLoadImage src={FIRE} alt="Fireabse icon" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </MyProjects>
  );
};

export default Projects;