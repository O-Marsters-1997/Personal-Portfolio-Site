import React, { useState, useRef, useEffect } from "react";
import { animate, useAnimation } from "framer-motion";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import PersonalProfileImage from "../../assets/images/PersonalProfileImage.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const AboutMe = () => {
  const myRef = useRef();

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const variants = {
    leftStart: {
      x: "-10vw",
      y: 100,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
    leftEnd: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 12,
      },
    },
    rightStart: {
      x: "10vw",
      y: 100,
      opacity: 0,
    },
    rightEnd: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 12,
      },
    },
    titleStart: {
      opacity: 0,
      x: 0,
    },
    titleEnd: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 18,
        delay: 0.6,
      },
    },
  };

  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const titleAnimation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        leftAnimation.start("leftEnd");
        rightAnimation.start("rightEnd");
        titleAnimation.start("titleEnd");
      }
      if (!entry.isIntersecting) {
        leftAnimation.start("leftStart");
        rightAnimation.start("rightStart");
        titleAnimation.start("titleStart");
      }
    }, options);
    observer.observe(myRef.current);
  });

  const MyWrapper = styled("div")(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: "5rem 0",

    ".MuiGrid-container": {
      width: "clamp(250px, 75vw, 1250px)",
      margin: "0 auto",
    },
    ".MuiTypography-h3": {
      width: "fit-content",
      fontSize: "3.8rem",
      margin: "0 auto 7.5vh auto",
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
      fontSize: "1.6rem",
      lineHeight: "2.15rem",
      span: {
        color: theme.palette.text.accent,
        fontWeight: 400,
        marginLeft: ".4rem",
      },

      ".down-arrow-wrapper": {
        width: "fit-content",
        height: "fit-content",
        padding: ".65rem",
        backgroundColor: theme.palette.primary.modifier,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.navAccent}`,
        marginTop: "1.2rem",
        cursor: "pointer",
        "&:hover": {
          border: `1px solid ${theme.palette.text.accent}`,
        },

        ".down-arrow": {
          verticalAlign: "middle",
          fontSize: "2rem",
          "&:hover": {
            color: theme.palette.text.accent,
          },
        },
      },
    },

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
      <Grid ref={myRef} container spacing={2}>
        <Grid
          item
          xs={12}
          component={motion.div}
          variants={variants}
          animate={titleAnimation}
        >
          <Typography variant="h3">
            About
            <Box component="div" className="underline"></Box>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          variants={variants}
          animate={leftAnimation}
        >
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
            <Box className="about-jumbotron-end-wrapper">
              <Typography variant="body1">
                If you have any questions about my work, or have ideas about
                what we can do together, don't hesitate to get in touch via the
                form below.
              </Typography>
              <Box className="down-arrow-wrapper">
                <Link to="contact" smooth={true} duration={1000}>
                  <ArrowDownwardIcon className="down-arrow" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          variants={variants}
          animate={rightAnimation}
        >
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
