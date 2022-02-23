import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import PersonalProfileImage from "../../assets/images/PersonalProfileImage.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const AboutMe = () => {
  const MyWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: "5rem 0",

    ".MuiGrid-container": {
      width: "clamp(250px, 75vw, 1250px)",
      margin: "0 auto",
    },
    ".MuiTypography-h3": {
      width: "fit-content",
      margin: "0 auto",
      textTransform: "uppercase",

      ".underline": {
        width: "60%",
        margin: "1.8rem auto 2.2rem auto",
        height: "4px",
        backgroundColor: theme.palette.text.primary,
        borderRadius: "5px",
      },
    },
    ".MuiTypography-body1": {
      marginBottom: "1.8rem",
      span: {
        color: theme.palette.text.accent,
        fontWeight: 400,
        marginLeft: ".4rem",
      },

      ".down-arrow": {
        verticalAlign: "middle",
        marginLeft: ".6rem",
        cursor: "pointer",

        "&:hover": {
          color: theme.palette.text.accent,
        },
      },
    },

    ".hello": {},

    ".profile-image-wrapper": {
      width: "100%",
      position: "relative",
      transition: "all .5s ease-in",

      "&:hover .profile-image-outline": {
        transform: "translateX(.75em) translateY(.75em)",
      },

      "&:hover .profile-image-overlay": {
        backgroundColor: "transparent",
      },
      img: {
        width: "80%",
        height: "100%",
        borderRadius: "10px",
        position: "relative",
        zIndex: 50,
      },

      ".profile-image-overlay": {
        zIndex: "100",
        position: "absolute",
        top: 0,
        width: "80%",
        height: "100%",
        borderRadius: "10px",
        backgroundColor: theme.palette.primary.overlay,
        transition: "background-color .5s ease-in",
      },

      ".profile-image-outline": {
        position: "absolute",
        top: 0,
        width: "80%",
        height: "100%",
        backgroundColor: "tranparent",
        border: `.5px solid ${theme.palette.text.accent}`,
        borderRadius: "10px",
        transform: "translateX(1.5em) translateY(1.5em) ",
      },
    },
  }));
  return (
    <MyWrapper id="about">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            About
            <Box component="div" className="underline"></Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="div">
            <Typography variant="body1">
              Hi, my name is Olly. Having graduated with a degree in
              international realtions, I decided to become a software developer
              because of the transofrmational impact technology can have in
              people's lives.
            </Typography>
            <Typography variant="body1">
              I constantly strive to improve my skills and the love the process
              of learning new things. My key ares of interest include
              <Box component="span">
                UX, UI design, devops and full-stack web development
              </Box>
            </Typography>
            <Typography variant="body1">
              If you have any questions about my work, or have ideas about what
              we can do together, don't hesitate to get in touch via the form
              below.
              <ArrowDownwardIcon className="down-arrow" />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="hello">
          <Box component="div" className="profile-image-container">
            <Box component="div" className="profile-image-wrapper">
              <img src={PersonalProfileImage}></img>
              <Box component="div" className="profile-image-overlay"></Box>
              <Box component="div" className="profile-image-outline"></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MyWrapper>
  );
};

export default AboutMe;
