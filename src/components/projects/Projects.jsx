import React from "react";
import { styled } from "@mui/system";
import {
  Grid,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Github from "../../assets/images/github-white.svg";
import External from "../../assets/images/external-white.svg";
import HTML from "../../assets/images/html-white.svg";
import SASS from "../../assets/images/sass-white.svg";
import PY from "../../assets/images/python-white .svg";
import PSQL from "../../assets/images/postgresql-white.svg";
import FLASK from "../../assets/images/flask-white.svg";
import Flask from "../../assets/images/flask.png";
import Sleigh from "../../assets/images/react.png";
import Clanhub from "../../assets/images/clanhub.png";

const Projects = () => {
  const MyProjects = styled("div")(({ theme }) => ({
    width: "clamp(250px, 75vw, 1250px)",
    margin: "8.5rem auto 8.5rem auto",

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

    ".project-item-container": {
      position: "relative",
      width: "100%",
      height: "25vw",
      borderRadius: "10px",
      marginBottom: "12.5rem",
      [theme.breakpoints.down("md")]: {
        height: "65.5vw",
      },
      [theme.breakpoints.down("sm")]: {
        height: "65.5vw",
      },

      ".project-item-wrapper-left": {
        width: "100%",
        height: "100%",
        position: "relative",

        ".project-item-overlay-text": {
          height: "100%",
          padding: "2rem",
        },
      },

      ".project-item-image": {
        borderRadius: "10px",
        width: "100%",
        height: "100%",
      },

      ".project-item-image-overlay": {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.project,
        borderRadius: "10px",
        transition: "all .5s ease-in",

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
          height: "1.75rem",
          width: "1.75rem",
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
      ".project-item-container:nth-child(3n)": {
        ".project-item-wrapper-left": {
          marginLeft: "50%",
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
  return (
    <MyProjects>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Projects
            <Box component="div" className="underline"></Box>
          </Typography>
        </Grid>
        <Grid container className="project-item-container">
          <Grid item xs={12} md={6} className="project-item-wrapper-left">
            <img src={Flask} className="project-item-image" />
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
                  <img src={HTML} alt="" />
                  <img src={SASS} alt="" />
                  <img src={PY} alt="" />
                  <img src={FLASK} alt="" />
                  <img src={PSQL} alt="" />
                </Box>
              </Box>
            </Box>
            <Box component="div" className="project-item-external-icons">
              <img src={Github} alt="github-cons-to-source-code" />
              <img src={External} alt="external-icon-to-deployed-version" />
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
              <img src={HTML} alt="" />
              <img src={SASS} alt="" />
              <img src={PY} alt="" />
              <img src={FLASK} alt="" />
              <img src={PSQL} alt="" />
            </Box>
          </Grid>
        </Grid>
        <Grid container className="project-item-container">
          <Grid item xs={12} md={6} className="project-item-wrapper-left">
            <img src={Flask} className="project-item-image" />
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
                  <img src={HTML} alt="" />
                  <img src={SASS} alt="" />
                  <img src={PY} alt="" />
                  <img src={FLASK} alt="" />
                  <img src={PSQL} alt="" />
                </Box>
              </Box>
            </Box>
            <Box component="div" className="project-item-external-icons">
              <img src={Github} alt="github-cons-to-source-code" />
              <img src={External} alt="external-icon-to-deployed-version" />
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
              <img src={HTML} alt="" />
              <img src={SASS} alt="" />
              <img src={PY} alt="" />
              <img src={FLASK} alt="" />
              <img src={PSQL} alt="" />
            </Box>
          </Grid>
        </Grid>
        <Grid container className="project-item-container">
          <Grid item xs={12} md={6} className="project-item-wrapper-left">
            <img src={Flask} className="project-item-image" />
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
                  <img src={HTML} alt="" />
                  <img src={SASS} alt="" />
                  <img src={PY} alt="" />
                  <img src={FLASK} alt="" />
                  <img src={PSQL} alt="" />
                </Box>
              </Box>
            </Box>
            <Box component="div" className="project-item-external-icons">
              <img src={Github} alt="github-cons-to-source-code" />
              <img src={External} alt="external-icon-to-deployed-version" />
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
              <img src={HTML} alt="" />
              <img src={SASS} alt="" />
              <img src={PY} alt="" />
              <img src={FLASK} alt="" />
              <img src={PSQL} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </MyProjects>
  );
};

export default Projects;
