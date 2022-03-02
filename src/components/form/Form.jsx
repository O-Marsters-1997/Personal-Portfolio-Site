import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { styled } from "@mui/system";
import {
  Grid,
  Typography,
  Box,
  FormGroup,
  TextField,
  Button,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const Form = () => {
  const MyWrapper = styled("div")(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: "5rem 0",

    ".MuiGrid-container": {
      width: "clamp(250px, 75vw, 1250px)",
      margin: "0 auto",

      ".form-section-text": {
        [theme.breakpoints.down("md")]: {
          textAlign: "center",
        },
      },
      ".MuiTypography-body1": {
        marginBottom: "2rem",
        ".email-bold": {
          fontWeight: "bold",
          display: "inline-block",
          marginLeft: ".6rem",
        },
      },
    },
    // Styling for the form
    "form .form-input-wrapper": {
      width: "min(100%, 550px)",
      margin: "0 auto",
      "input, textarea": {
        borderRadius: "5px",
        border: `.5px solid ${theme.palette.text.secondary}`,
        textTransform: "uppercase",
        width: "100%",
        padding: "1rem",
        marginBottom: "2rem",
        fontSize: "1.6rem",
        color: theme.palette.text.secondary,
      },
    },
    ".button-wrapper": {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      ".MuiButton-outlined": {
        width: "100vw",
        textAlign: "center",
        fontSize: "1.3rem",
      },
    },

    // Swperate rule for button style

    ".submit-wrapper": {
      display: "flex",
      justifyContent: "center",

      ".button-submit": {
        cursor: "pointer",
        position: "relative",

        input: {
          fontFamily: "roboto",
          backgroundColor: "transparent",
          fontSize: "1.35rem",
          fontWeight: "300",
          color: theme.palette.text.primary,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          padding: "0.5rem",
          textTransform: "uppercase",
        },
      },
    },
  }));

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const variants = {
    formStart: { scale: 0.4, opacity: 0, y: 100 },
    formEnd: {
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

  const sendEmail = (e) => {
    console.log("hello");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p8sj2pk",
        "template_r0qo8k5",
        e.target,
        "jnIXWbyOF99b0LXom"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("form-name").value = "";
    document.getElementById("form-email").value = "";
    document.getElementById("form-message").value = "";
  };

  return (
    <MyWrapper id="contact">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Contact
            <Box component="div" className="underline"></Box>
          </Typography>
          <Grid item xs={12}>
            <Box component="div" className="form-section-text">
              <Typography variant="body1">
                If you have any questions or suggestions or have any ideas for
                how we can collaborate going forward, please let me know through
                the comment form below.
              </Typography>
              <Typography variant="body1">
                This will go straight to my inbox at
                <span className="email-bold">olly.marsters@yahoo.co.uk</span>
              </Typography>
              <Typography variant="body1">
                I’m always excited about sharing my passion for technology with
                likeminded people.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          component={motion.div}
          variants={variants}
          animate={animation}
        >
          <form onSubmit={sendEmail}>
            <Box className="form-input-wrapper">
              <input
                type="text"
                name="name"
                id="form-name"
                required
                placeholder="your name"
                className="form-input-text"
              ></input>
            </Box>
            <Box className="form-input-wrapper">
              <input
                type="text"
                name="email"
                id="form-email"
                required
                placeholder="your email"
                className="form-input-text"
              ></input>
            </Box>
            <Box className="form-input-wrapper">
              <textarea
                name="message"
                className="form-input-textarea"
                id="form-message"
                required
                rows="8"
              ></textarea>
            </Box>
            <Box className="submit-wrapper">
              <Button className="button-submit">
                <input
                  type="submit"
                  value="Get in touch"
                  className="form-input-submit"
                ></input>
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </MyWrapper>
  );
};

export default Form;
