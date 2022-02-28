import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
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

      ".MuiTypography-h3": {
        fontSize: "3.8rem",
        width: "fit-content",
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
      ".form-section-text": {
        [theme.breakpoints.down("md")]: {
          textAlign: "center",
        },
      },
      ".MuiTypography-body1": {
        fontSize: "1.6rem",
        lineHeight: "2.15rem",
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
        width: "fit-content",
        textAlign: "center",
        fontSize: "1.3rem",
      },
    },
  }));


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
        <Grid item xs={12}>
          <form action="POST">
            <Box className="form-input-wrapper">
              <input
                type="text"
                required
                placeholder="your name"
                className="form-input-text"
              ></input>
            </Box>
            <Box className="form-input-wrapper">
              <input
                type="text"
                required
                placeholder="your email"
                className="form-input-text"
              ></input>
            </Box>
            <Box className="form-input-wrapper">
              <textarea
                className="form-input-textarea"
                required
                rows="8"
              ></textarea>
            </Box>
            <Box className="form-input-wrapper button-wrapper">
              <Button variant="outlined">Get in touch</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </MyWrapper>
  );
};

export default Form;
